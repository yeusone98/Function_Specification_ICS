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


def folder_exists_and_has_images(section_id):
    """Kiểm tra xem folder có tồn tại và có chứa hình ảnh hay không"""
    folder_path = Path(f"docs/assets/images/buddy/{section_id}").resolve()

    if not folder_path.exists():
        return False, []

    image_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.webp'}
    images = sorted([
        f.name for f in folder_path.iterdir()
        if f.is_file() and f.suffix.lower() in image_extensions
    ])

    return True, images


def generate_image_section(section_id, boundary_type='next_section'):
    """
    Tạo template Markdown cho phần hình ảnh.

    boundary_type:
      - 'next_section' : section tiếp theo là #### → thêm dòng trống cuối bình thường
      - 'new_group'    : sau block là --- hoặc ???+ → KHÔNG thêm dòng trống cuối,
                         để footer nằm sát ngay trên ---
    """
    exists, images = folder_exists_and_has_images(section_id)

    lines = []
    lines.append(f"        📸 **Hình ảnh minh họa**")
    lines.append(f"")
    lines.append(f"        > **📁 Thư mục nguồn:** `assets/images/buddy/{section_id}/`")
    lines.append(f"")

    if not exists:
        lines.append(f'        !!! warning "Thư mục không tồn tại"')
        lines.append(f"            Thư mục `assets/images/buddy/{section_id}/` chưa được tạo. Vui lòng tạo thư mục và thêm hình ảnh minh họa.")
    elif not images:
        lines.append(f'        !!! warning "Chưa có hình ảnh minh họa"')
        lines.append(f"            Thư mục `assets/images/buddy/{section_id}/` hiện đang trống. Vui lòng thêm các hình ảnh minh họa cho tính năng này.")
    else:
        for image in images:
            desc = image.replace('-', ' ').replace('_', ' ').rsplit('.', 1)[0].title()
            lines.append(f"        ![{desc}](assets/images/buddy/{section_id}/{image}){{ .image-widget-thumb loading=lazy }}")

    lines.append(f"")
    lines.append(f"        *Bấm vào từng ảnh để xem chi tiết.*")

    # Nếu boundary là --- hoặc ???+, KHÔNG thêm dòng trống sau footer
    # để footer nằm ngay sát trên --- (đúng format MkDocs)
    if boundary_type == 'next_section':
        lines.append(f"")

    return "\n".join(lines) + "\n"


def find_image_block_range(content, search_from):
    """
    Tìm vị trí bắt đầu và kết thúc của block ảnh trong content[search_from:].
    Trả về (abs_start, abs_end) hoặc (None, None) nếu không tìm thấy.

    Chiến lược: block ảnh luôn kết thúc bằng dòng cố định:
        *Bấm vào từng ảnh để xem chi tiết.*
    Cách này không phụ thuộc vào loại boundary phía sau (---/???+/####/...)
    """
    image_header_pattern = r'📸 \*\*Hình ảnh minh họa\*\*'
    footer_pattern = r'\*Bấm vào từng ảnh để xem chi tiết\.\*[ \t]*\n'

    sub = content[search_from:]
    header_match = re.search(image_header_pattern, sub)
    if not header_match:
        return None, None

    abs_start = search_from + header_match.start()

    after_header = sub[header_match.start():]
    footer_match = re.search(footer_pattern, after_header)

    if footer_match:
        abs_end = abs_start + footer_match.end()
    else:
        # Block bị corrupt, không tìm thấy footer → trả None để tránh xóa nhầm
        return None, None

    return abs_start, abs_end


def find_insert_position(content, search_from):
    """
    Tìm vị trí chèn block ảnh và xác định loại boundary ngay sau điểm chèn.

    Trả về (insert_pos, boundary_type) hoặc (None, None).

    boundary_type:
      - 'next_section' : ngay trước #### mới  → chèn bình thường
      - 'new_group'    : ngay trước ---/???+/##  → footer phải nằm sát trên ---
    """
    sub = content[search_from:]

    # Row "Trường hợp không có dữ liệu" có thể nhiều dòng (có <br>)
    # Lookahead để KHÔNG tiêu thụ boundary, giữ nguyên content[insert_pos:]
    no_data_pattern = (
        r'\|\s*\*\*Trường hợp không có dữ liệu\*\*\s*\|'
        r'.*?\n'
        r'(?='
            r'\s{0,8}\|'      # dòng tiếp theo vẫn là table row
            r'|\s{0,8}####'   # section con mới
            r'|\s{0,4}\?\?\?' # admonition mới
            r'|---'           # separator mục lớn
            r'|\Z'            # EOF
        r')'
    )
    match = re.search(no_data_pattern, sub, re.DOTALL)
    if not match:
        return None, None

    insert_pos = search_from + match.end()

    # Xác định loại boundary ngay tại insert_pos để quyết định format footer
    after = content[insert_pos:]
    stripped = after.lstrip('\n')  # bỏ qua dòng trống trung gian nếu có

    if re.match(r'[ \t]*---', stripped) or re.match(r'\s{0,4}\?\?\?', stripped) or re.match(r'#{2,3} ', stripped):
        boundary_type = 'new_group'
    else:
        boundary_type = 'next_section'

    return insert_pos, boundary_type


def get_boundary_type_for_existing_block(content, abs_end):
    """
    Sau khi xác định được abs_end của block ảnh hiện tại,
    kiểm tra xem boundary ngay sau đó là loại gì.
    Dùng khi REPLACE block cũ để generate đúng format footer.
    """
    after = content[abs_end:]
    stripped = after.lstrip('\n')

    if re.match(r'[ \t]*---', stripped) or re.match(r'\s{0,4}\?\?\?', stripped) or re.match(r'#{2,3} ', stripped):
        return 'new_group'
    return 'next_section'


def update_buddy_file():
    """Cập nhật file Buddy.md"""
    file_path = Path("docs/Buddy.md")

    with open(file_path, 'r', encoding='utf-8') as f:
        original_content = f.read()

    # Tìm tất cả các section #### X.X. ... {#toc-X-X-X}
    pattern = r'(####\s+\d+\.\d+\.[^\n]*\{#toc-(\d+-\d+-\d+)\})'
    sections = list(re.finditer(pattern, original_content))

    print(f"Found {len(sections)} sections")
    print()

    stats = {'with_images': 0, 'without_images': 0, 'folder_missing': 0}
    updates = 0

    # --- Bước 1: Thu thập tất cả edits cần thực hiện ---
    # Mỗi edit là (start, end, new_text)
    # Duyệt xuôi để tính đúng vị trí, sau đó apply từ cuối lên đầu
    edits = []

    for match in sections:
        section_id = match.group(2)
        section_start = match.end()

        # Kiểm tra block ảnh đã tồn tại chưa
        abs_start, abs_end = find_image_block_range(original_content, section_start)

        if abs_start is not None:
            # Xác định boundary để generate đúng format
            boundary_type = get_boundary_type_for_existing_block(original_content, abs_end)
            new_block = generate_image_section(section_id, boundary_type)
            edits.append((abs_start, abs_end, new_block))

            exists, images = folder_exists_and_has_images(section_id)
            if not exists:
                stats['folder_missing'] += 1
                status = "📁 Chưa có folder"
            elif images:
                stats['with_images'] += 1
                status = f"♻️ Updated {len(images)} hình ảnh"
            else:
                stats['without_images'] += 1
                status = "⏳ Folder trống (updated warning)"

            print(f"  {section_id}: {status} [REPLACE] boundary={boundary_type}")
            updates += 1

        else:
            # Chèn block mới sau "Trường hợp không có dữ liệu"
            insert_pos, boundary_type = find_insert_position(original_content, section_start)

            if insert_pos is not None:
                new_block = generate_image_section(section_id, boundary_type)
                edits.append((insert_pos, insert_pos, new_block))

                exists, images = folder_exists_and_has_images(section_id)
                if not exists:
                    stats['folder_missing'] += 1
                    status = "📁 Chưa có folder"
                elif images:
                    stats['with_images'] += 1
                    status = f"✅ Thêm {len(images)} hình ảnh"
                else:
                    stats['without_images'] += 1
                    status = "⏳ Folder trống (sẽ cảnh báo)"

                print(f"  {section_id}: {status} [INSERT] boundary={boundary_type}")
                updates += 1
            else:
                print(f"  {section_id}: ⚠️ Không tìm thấy 'Trường hợp không có dữ liệu'")

    # --- Bước 2: Apply edits từ cuối lên đầu (tránh offset lệch) ---
    if edits:
        edits.sort(key=lambda e: e[0], reverse=True)

        content = original_content
        for start, end, new_text in edits:
            content = content[:start] + new_text + content[end:]

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

    # --- Báo cáo ---
    print()
    print("=" * 60)
    if updates > 0:
        print(f"✅ CẬP NHẬT THÀNH CÔNG: {updates} sections được cập nhật")
    else:
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