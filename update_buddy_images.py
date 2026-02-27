#!/usr/bin/env python3
"""
Script để tự động cập nhật Buddy.md với hình ảnh.
- Quét tất cả folder hình ảnh tương ứng
- Nếu có hình ảnh → sinh markdown tự động
- Nếu không có → hiển thị warning
- Tự động thêm vào Buddy.md từ cuối file
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
        return False, []  # (exists, images_list)
    
    # Kiểm tra xem có file hình ảnh
    image_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.webp'}
    images = sorted([f.name for f in folder_path.iterdir() 
                     if f.is_file() and f.suffix.lower() in image_extensions])
    
    return True, images

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
    exists, images = folder_exists_and_has_images(section_id)
    
    template = f"""---

    📸 Hình ảnh minh họa

    > **📁 Thư mục nguồn:** `assets/images/buddy/{section_id}/`

    """
    
    if not exists:
        template += f"""        !!! warning "⚠️ Thư mục không tồn tại"
            Thư mục `assets/images/buddy/{section_id}/` chưa được tạo. Vui lòng tạo thư mục và thêm hình ảnh minh họa.

"""
    elif not images:
        template += f"""        !!! warning "⚠️ Chưa có hình ảnh minh họa"
            Thư mục `assets/images/buddy/{section_id}/` hiện đang trống. Vui lòng thêm các hình ảnh minh họa cho tính năng này.

"""
    else:
        # Tự động tạo markdown cho từng hình ảnh
        for image in images:
            # Tạo mô tả từ tên file
            desc = image.replace('-', ' ').replace('_', ' ').rsplit('.', 1)[0].title()
            template += f"""        ![{desc}](assets/images/buddy/{section_id}/{image}){{ .image-widget-thumb loading=lazy }}
"""
        template += "\n"
    
    template += """        *Bấm vào từng ảnh để xem chi tiết.*\n\n"""
    return template

def has_image_section(content, section_start):
    """Kiểm tra xem section này đã có phần hình ảnh chưa"""
    image_pattern = r'📸 Hình ảnh minh họa'
    next_section_pattern = r'####\s+\d+\.\d+\.'
    
    start_pos = section_start
    next_match = re.search(next_section_pattern, content[start_pos:])
    
    if next_match:
        section_content = content[start_pos:start_pos + next_match.start()]
    else:
        section_content = content[start_pos:]
    
    return bool(re.search(image_pattern, section_content))

def replace_image_section(content, section_start, section_id):
    """
    Nếu đã tồn tại block '📸 Hình ảnh minh họa'
    → replace toàn bộ block đó bằng nội dung mới
    """
    image_header_pattern = r'📸 Hình ảnh minh họa'
    next_section_pattern = r'####\s+\d+\.\d+\.'

    sub_content = content[section_start:]

    header_match = re.search(image_header_pattern, sub_content)
    if not header_match:
        return content, False  # chưa có block

    block_start = section_start + header_match.start()

    # tìm section tiếp theo
    next_match = re.search(next_section_pattern, sub_content[header_match.start():])

    if next_match:
        block_end = block_start + next_match.start()
    else:
        block_end = len(content)

    # generate block mới
    new_block = generate_image_section(section_id)

    new_content = content[:block_start] + new_block + "\n" + content[block_end:]

    return new_content, True

def update_buddy_file():
    """Cập nhật file Buddy.md"""
    file_path = Path("docs/Buddy.md")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tìm tất cả các section (#### X.X. ... {#toc-X-X-X})
    pattern = r'(#### \d+\.\d+\. .* {#toc-(\d+-\d+-\d+)})'
    
    sections = list(re.finditer(pattern, content))
    
    print(f"Found {len(sections)} sections")
    print()
    
    updates = 0
    stats = {'with_images': 0, 'without_images': 0, 'folder_missing': 0}
    
    # Duyệt từ cuối về đầu để tránh vấn đề vị trí
    for match in reversed(sections):
        section_id = match.group(2)
        section_start = match.end()
        
        # Kiểm tra xem section này đã có phần hình ảnh chưa
        # Nếu đã có block → replace
        content, replaced = replace_image_section(content, section_start, section_id)
        if replaced:
            exists, images = folder_exists_and_has_images(section_id)

            if not exists:
                stats['folder_missing'] += 1
                status = f"📁 Chưa có folder"
            elif images:
                stats['with_images'] += 1
                status = f"♻️ Updated {len(images)} hình ảnh"
            else:
                stats['without_images'] += 1
                status = "⏳ Folder trống (updated warning)"

            print(f"  {section_id}: {status}")
            updates += 1
            continue
        
        # Tìm vị trí cuối cùng của table
        sub_content = content[section_start:]
        no_data_pattern = r"\| \*\*Trường hợp không có dữ liệu\*\*\s*\|[^\n]*\|[^\n]*\n"
        no_data_match = re.search(no_data_pattern, sub_content)
        
        if no_data_match:
            insert_pos = section_start + no_data_match.end()
            
            # Tạo template hình ảnh (tự động sinh markdown từ hình ảnh thực tế)
            image_section = generate_image_section(section_id)
            
            # Chèn template
            content = content[:insert_pos] + image_section + content[insert_pos:]
            
            # Thống kê
            exists, images = folder_exists_and_has_images(section_id)
            if not exists:
                status = "📁 Chưa có folder"
                stats['folder_missing'] += 1
            elif images:
                status = f"✅ Thêm {len(images)} hình ảnh"
                stats['with_images'] += 1
            else:
                status = "⏳ Folder trống (sẽ cảnh báo)"
                stats['without_images'] += 1
            
            print(f"  {section_id}: {status} - ✓ THÊM")
            updates += 1
        else:
            print(f"  {section_id}: ⚠️ Không tìm thấy 'Trường hợp không có dữ liệu'")
    
    # Ghi file
    if updates > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print()
        print("=" * 60)
        print(f"✅ CẬP NHẬT THÀNH CÔNG: {updates} sections được cập nhật")
        print("=" * 60)
        print()
        print("📊 THỐNG KÊ:")
        print(f"  🖼️  Sections với hình ảnh: {stats['with_images']}")
        print(f"  ⏳ Sections chưa có hình: {stats['without_images']}")
        print(f"  📁 Folders chưa tồn tại: {stats['folder_missing']}")
        print()
    else:
        print()
        print("=" * 60)
        print("✅ TẤT CẢ SECTIONS ĐÃ CÓ PHẦN HÌNH ẢNH")
        print("=" * 60)
        print()
        print("📊 THỐNG KÊ:")
        print(f"  🖼️  Sections với hình ảnh: {stats['with_images']}")
        print(f"  ⏳ Sections chưa có hình: {stats['without_images']}")
        print(f"  📁 Folders chưa tồn tại: {stats['folder_missing']}")
        print()

if __name__ == "__main__":
    script_dir = Path(__file__).resolve().parent
    os.chdir(script_dir)
    update_buddy_file()
