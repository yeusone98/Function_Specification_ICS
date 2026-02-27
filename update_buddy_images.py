#!/usr/bin/env python3
"""
Script để tự động cập nhật Buddy.md với cấu trúc hình ảnh theo quy định.
Tìm tất cả các section (#toc-X-X-X) và thêm template hình ảnh tương ứng.
"""

import re
import os
from pathlib import Path

def get_section_id(heading_text):
    """Trích xuất ID section từ heading (ví dụ: #toc-4-1-1)"""
    match = re.search(r'#toc-(\d+-\d+-\d+)', heading_text)
    if match:
        return match.group(1)
    return None

def folder_exists_and_has_images(section_id):
    """Kiểm tra xem folder có tồn tại và có chứa hình ảnh hay không"""
    folder_path = Path(f"docs/assets/images/buddy/{section_id}").resolve()
    
    if not folder_path.exists():
        return False, False  # (exists, has_images)
    
    # Kiểm tra xem có file hình ảnh
    image_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.webp'}
    has_images = any(f.suffix.lower() in image_extensions for f in folder_path.iterdir() if f.is_file())
    
    return True, has_images

def get_image_files(section_id):
    """Lấy danh sách file hình ảnh trong folder"""
    folder_path = Path(f"docs/assets/images/buddy/{section_id}")
    image_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.webp'}
    
    if not folder_path.exists():
        return []
    
    images = sorted([f.name for f in folder_path.iterdir() 
                     if f.is_file() and f.suffix.lower() in image_extensions])
    return images

def generate_image_section(section_id):
    """Tạo template HTML/Markdown cho phần hình ảnh"""
    exists, has_images = folder_exists_and_has_images(section_id)
    
    template = f"""

        ---
        
        ### 📸 Hình ảnh minh họa
        
        > **📁 Thư mục nguồn:** `assets/images/buddy/{section_id}/`
        
"""
    
    if not exists:
        template += f"""        !!! warning "⚠️ Thư mục không tồn tại"
            Thư mục `assets/images/buddy/{section_id}/` chưa được tạo. Vui lòng tạo thư mục và thêm hình ảnh minh họa.

"""
    elif not has_images:
        template += f"""        !!! warning "⚠️ Chưa có hình ảnh minh họa"
            Thư mục `assets/images/buddy/{section_id}/` hiện đang trống. Vui lòng thêm các hình ảnh minh họa cho tính năng này.

"""
    else:
        images = get_image_files(section_id)
        for image in images:
            # Tạo mô tả từ tên file
            desc = image.replace('-', ' ').replace('_', ' ').rsplit('.', 1)[0].title()
            template += f"""        ![{desc}](assets/images/buddy/{section_id}/{image}){{ .image-widget-thumb loading=lazy }}
"""
        template += "\n"
    
    template += """        *Bấm vào từng ảnh để xem chi tiết.*"""
    return template

def find_book_sections(content):
    """Tìm tất cả các book collapse sections trong Markdown"""
    # Pattern: #### X.X. ... {#toc-X-X-X}
    pattern = r'(#### \d+\.\d+\. .* {#toc-\d+-\d+-\d+})'
    matches = list(re.finditer(pattern, content, re.MULTILINE))
    return matches

def has_image_section(content, section_start):
    """Kiểm tra xem section này đã có phần hình ảnh chưa"""
    # Tìm dấu hiệu của phần hình ảnh
    image_pattern = r'### 📸 Hình ảnh minh họa'
    next_section_pattern = r'####\s+\d+\.\d+\.'
    
    # Lấy nội dung từ vị trí hiện tại đến section tiếp theo
    start_pos = section_start
    next_match = re.search(next_section_pattern, content[start_pos:])
    
    if next_match:
        section_content = content[start_pos:start_pos + next_match.start()]
    else:
        section_content = content[start_pos:]
    
    return bool(re.search(image_pattern, section_content))

def update_buddy_file():
    """Cập nhật file Buddy.md"""
    file_path = Path("docs/Buddy.md")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tìm tất cả các section (#### X.X. ... {#toc-X-X-X})
    pattern = r'(#### \d+\.\d+\. .* {#toc-(\d+-\d+-\d+)})'
    
    sections = list(re.finditer(pattern, content))
    
    print(f"Tìm thấy {len(sections)} sections")
    
    updates = 0
    
    # Duyệt từ cuối về đầu để tránh vấn đề vị trí
    for match in reversed(sections):
        section_id = match.group(2)
        section_start = match.end()
        
        # Kiểm tra xem section này đã có phần hình ảnh chưa
        if has_image_section(content, section_start):
            print(f"  ✓ {section_id} - đã có phần hình ảnh")
            continue
        
        # Tìm vị trí cuối cùng của table để chèn
        # Tìm khoảng trắng hoặc line break sau "| **Trường hợp không có dữ liệu**"
        sub_content = content[section_start:]
        no_data_pattern = r"\| \*\*Trường hợp không có dữ liệu\*\*\s*\|[^\n]*\|[^\n]*\n"
        no_data_match = re.search(no_data_pattern, sub_content)
        
        if no_data_match:
            insert_pos = section_start + no_data_match.end()
            
            # Tạo template hình ảnh
            image_section = generate_image_section(section_id)
            
            # Chèn template với newline trước để tách section tiếp theo
            content = content[:insert_pos] + image_section + "\n" + content[insert_pos:]
            
            print(f"  ✓ {section_id} - đã thêm template hình ảnh")
            updates += 1
        else:
            print(f"  ⚠ {section_id} - không tìm thấy vị trí 'Trường hợp không có dữ liệu'")
    
    # Ghi file
    if updates > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"\n✓ Cập nhật thành công! {updates} sections được cập nhật.")
    else:
        print(f"\n✓ Không có cập nhật nào được yêu cầu.")

if __name__ == "__main__":
    os.chdir("d:\\GitHub\\Function_Specification_ICS")
    update_buddy_file()
