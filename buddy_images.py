#!/usr/bin/env python3
"""
Script để tự động cập nhật Buddy.md với hình ảnh.
- Quét tất cả folder hình ảnh tương ứng
- Nếu có hình ảnh → sinh markdown tự động
- Nếu không có → hiển thị warning
- Idempotent: chạy nhiều lần không gây lỗi format
"""

import re
import os
from pathlib import Path

# ─── Constants ────────────────────────────────────────────────────────────────

# Indentation cố định: 8 spaces (nằm trong ??? admonition block)
INDENT = "        "

# Marker cố định để nhận diện block ảnh — dùng để tìm và xóa block cũ
BLOCK_START_MARKER = "📸 **Hình ảnh minh họa**"
BLOCK_END_MARKER   = "*Bấm vào từng ảnh để xem chi tiết.*"


# ─── Helpers ──────────────────────────────────────────────────────────────────

def folder_exists_and_has_images(section_id: str):
    """Kiểm tra xem folder có tồn tại và có chứa hình ảnh hay không."""
    folder_path = Path(f"docs/assets/images/buddy/{section_id}").resolve()

    if not folder_path.exists():
        return False, []

    image_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.webp'}
    images = sorted([
        f.name for f in folder_path.iterdir()
        if f.is_file() and f.suffix.lower() in image_extensions
    ])

    return True, images


def generate_image_block(section_id: str) -> str:
    """
    Tạo block markdown cho phần hình ảnh.
    Luôn dùng INDENT cố định (8 spaces) — idempotent.
    Block KHÔNG có newline đầu; newline cuối được quản lý bởi caller.
    """
    exists, images = folder_exists_and_has_images(section_id)

    lines = []
    lines.append(f"{INDENT}{BLOCK_START_MARKER}")
    lines.append(f"")
    lines.append(f"{INDENT}> **📁 Thư mục nguồn:** `assets/images/buddy/{section_id}/`")
    lines.append(f"")

    if not exists:
        lines.append(f'{INDENT}!!! warning "Thư mục không tồn tại"')
        lines.append(f"{INDENT}    Thư mục `assets/images/buddy/{section_id}/` chưa được tạo. Vui lòng tạo thư mục và thêm hình ảnh minh họa.")
    elif not images:
        lines.append(f'{INDENT}!!! warning "Chưa có hình ảnh minh họa"')
        lines.append(f"{INDENT}    Thư mục `assets/images/buddy/{section_id}/` hiện đang trống. Vui lòng thêm các hình ảnh minh họa cho tính năng này.")
    else:
        for image in images:
            desc = image.replace('-', ' ').replace('_', ' ').rsplit('.', 1)[0].title()
            lines.append(f"{INDENT}![{desc}](assets/images/buddy/{section_id}/{image}){{ .image-widget-thumb loading=lazy }}")

    lines.append(f"")
    lines.append(f"{INDENT}{BLOCK_END_MARKER}")

    return "\n".join(lines)


def find_existing_block(content: str, search_from: int):
    """
    Tìm block ảnh hiện có trong content[search_from:].

    Chiến lược chắc chắn:
    - Tìm BLOCK_START_MARKER (bất kể indentation — regex bỏ qua spaces đầu dòng)
    - Tìm BLOCK_END_MARKER phía sau (bất kể indentation)
    - Trả về (abs_start, abs_end_after_newline) hoặc (None, None)
    """
    sub = content[search_from:]

    # Match bất kể bao nhiêu spaces/tabs trước marker
    start_pat = re.compile(r'^[ \t]*' + re.escape(BLOCK_START_MARKER), re.MULTILINE)
    end_pat   = re.compile(r'^[ \t]*' + re.escape(BLOCK_END_MARKER) + r'[ \t]*\n?', re.MULTILINE)

    sm = start_pat.search(sub)
    if not sm:
        return None, None

    # Tính abs_start từ đầu dòng (kể cả spaces trước marker)
    # Tìm đầu dòng chứa marker
    line_start_in_sub = sub.rfind('\n', 0, sm.start()) + 1
    abs_start = search_from + line_start_in_sub

    # Tìm end marker sau start
    after_start = sub[sm.start():]
    em = end_pat.search(after_start)
    if not em:
        return None, None

    abs_end = search_from + sm.start() + em.end()
    return abs_start, abs_end


def find_insert_position(content: str, search_from: int):
    """
    Tìm vị trí chèn block ảnh mới: sau dòng '| **Trường hợp không có dữ liệu** |...'
    Trả về insert_pos (int) hoặc None.

    KHÔNG dùng re.DOTALL: pattern chỉ match 1 dòng để tránh ăn qua nhiều rows
    và match sai vị trí (e.g. match row cuối cùng trong file thay vì row của section hiện tại).
    """
    sub = content[search_from:]

    # Match đúng 1 dòng: từ | **Trường hợp...** | đến cuối dòng (\n)
    # KHÔNG dùng re.DOTALL
    no_data_pat = re.compile(
        r'\|[ \t]*\*\*Trường hợp không có dữ liệu\*\*[ \t]*\|[^\n]*\n'
    )

    m = no_data_pat.search(sub)
    if not m:
        return None

    return search_from + m.end()


# ─── Main update logic ────────────────────────────────────────────────────────

def update_buddy_file():
    """Cập nhật file Buddy.md — idempotent."""
    file_path = Path("docs/Buddy.md")

    with open(file_path, 'r', encoding='utf-8') as f:
        original_content = f.read()

    # Tìm tất cả các section #### X.X. ... {#toc-X-X-X}
    section_pattern = re.compile(r'####\s+\d+\.\d+\.[^\n]*\{#toc-(\d+-\d+-\d+)\}')
    sections = list(section_pattern.finditer(original_content))

    print(f"Found {len(sections)} sections")
    print()

    stats = {'updated': 0, 'inserted': 0, 'with_images': 0,
             'without_images': 0, 'folder_missing': 0, 'skipped': 0}

    # Thu thập edits: (abs_start, abs_end, new_text)
    # Sau đó apply từ cuối lên đầu để không làm lệch offset
    edits = []

    for match in sections:
        section_id = match.group(1)
        section_start = match.end()

        exists, images = folder_exists_and_has_images(section_id)
        new_block = generate_image_block(section_id)

        # Kiểm tra block ảnh đã tồn tại chưa
        abs_start, abs_end = find_existing_block(original_content, section_start)

        if abs_start is not None:
            # REPLACE block cũ bằng block mới
            edits.append((abs_start, abs_end, new_block + "\n"))
            stats['updated'] += 1

            if not exists:
                stats['folder_missing'] += 1
                status = "📁 Chưa có folder"
            elif images:
                stats['with_images'] += 1
                status = f"♻️  Updated ({len(images)} ảnh)"
            else:
                stats['without_images'] += 1
                status = "⏳ Folder trống (updated warning)"

            print(f"  {section_id}: {status} [REPLACE]")

        else:
            # INSERT block mới sau "Trường hợp không có dữ liệu"
            insert_pos = find_insert_position(original_content, section_start)

            if insert_pos is not None:
                edits.append((insert_pos, insert_pos, new_block + "\n"))
                stats['inserted'] += 1

                if not exists:
                    stats['folder_missing'] += 1
                    status = "📁 Chưa có folder"
                elif images:
                    stats['with_images'] += 1
                    status = f"✅ Thêm ({len(images)} ảnh)"
                else:
                    stats['without_images'] += 1
                    status = "⏳ Folder trống (warning placed)"

                print(f"  {section_id}: {status} [INSERT]")
            else:
                stats['skipped'] += 1
                print(f"  {section_id}: ⚠️  Không tìm thấy 'Trường hợp không có dữ liệu' — BỎ QUA")

    # Apply edits từ cuối lên đầu (tránh offset lệch)
    total_edits = len(edits)
    if total_edits > 0:
        edits.sort(key=lambda e: e[0], reverse=True)

        content = original_content
        for start, end, new_text in edits:
            content = content[:start] + new_text + content[end:]

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

    # Báo cáo
    print()
    print("=" * 60)
    if total_edits > 0:
        print(f"✅ CẬP NHẬT THÀNH CÔNG: {stats['updated']} replaced, {stats['inserted']} inserted")
    else:
        print("✅ TẤT CẢ SECTIONS ĐÃ CÓ PHẦN HÌNH ẢNH (không có thay đổi)")
    print("=" * 60)
    print()
    print("📊 THỐNG KÊ:")
    print(f"  🖼️   Sections với hình ảnh : {stats['with_images']}")
    print(f"  ⏳  Sections chưa có hình  : {stats['without_images']}")
    print(f"  📁  Folders chưa tồn tại  : {stats['folder_missing']}")
    print(f"  ⚠️   Sections bị bỏ qua    : {stats['skipped']}")
    print()


if __name__ == "__main__":
    script_dir = Path(__file__).resolve().parent
    os.chdir(script_dir)
    update_buddy_file()