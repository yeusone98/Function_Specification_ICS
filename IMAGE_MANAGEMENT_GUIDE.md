# 📸 Hướng Dẫn Quản Lý Hình Ảnh Cho Buddy.md

## 📋 Tổng Quan

Hệ thống quản lý hình ảnh cho Buddy.md đã được triển khai với cấu trúc **có tổ chức** và **có quy định**, giúp dễ dàng theo dõi và quản lý hình ảnh minh họa cho từng chức năng.

---

## 🏗️ Cấu Trúc Thư Mục

Tất cả hình ảnh được lưu trữ theo cấu trúc:

```
docs/
└── assets/
    └── images/
        └── buddy/
            ├── 3-1-1/           # Đăng nhập tài khoản
            ├── 3-1-2/           # Cập nhật tài khoản
            ├── 3-1-3/           # Đổi mật khẩu
            ├── 3-1-4/           # Thay đổi vai trò
            ├── 3-1-5/           # Đăng xuất
            ├── 4-1-1/           # Handler - Hiển thị bảng danh sách ứng viên
            ├── 4-1-2/           # Handler - Tùy chọn hiển thị cột
            ├── 4-1-3/           # Handler - Sắp xếp thứ tự ưu tiên
            ├── 4-1-4/           # Handler - Cơ chế sắp xếp nhiều cột
            ├── 4-1-5/           # Handler - Tìm kiếm ứng viên
            ├── 4-1-6/           # Handler - Quản lý thông tin chi tiết
            ├── 4-1-7/           # Handler - Thêm ứng viên mới
            ├── 4-2-x/           # Handler - Quản lý vị trí (x = 1-7)
            ├── 4-3-x/           # Handler - Quản lý phỏng vấn (x = 1-4)
            ├── 4-4-x/           # Handler - Đánh giá ứng viên (x = 1-6)
            ├── 4-5-x/           # Handler - Quản lý đào tạo (x = 1-2)
            ├── 5-1-x/           # Interviewer - Lịch phỏng vấn (x = 1-2)
            ├── 5-2-x/           # Interviewer - Thông tin ứng viên (x = 1-4)
            ├── 6-1-x/           # Trainer - Thông tin ứng viên (x = 1-2)
            ├── 6-2-x/           # Trainer - Quản lý đào tạo (x = 1-2)
            └── 7-1-x/           # Trainee (x = 1-2)
```

### 📌 Quy Tắc Đặt Tên Folder

**Format:** `{Section}-{Subsection}-{Item}`

**Ví dụ:**
- `3-1-1` → Section 3, Subsection 1, Item 1 = **Đăng nhập tài khoản**
- `4-1-7` → Section 4, Subsection 1, Item 7 = **Handler - Thêm ứng viên mới**
- `5-2-3` → Section 5, Subsection 2, Item 3 = **Interviewer - Câu trả lời ứng viên**

**Tương ứng với ID trong Markdown:** `{#toc-X-X-X}`

---

## 📝 Cách Thêm Hình Ảnh

### Bước 1: Tạo File Hình Ảnh

1. Tạo screenshot hoặc hình ảnh minh họa cho tính năng
2. Lưu với tên file **rõ ràng và mô tả**:
   - ✅ `danh-sach-ung-vien-handler.png`
   - ✅ `popup-them-ung-vien.jpg`
   - ❌ `image1.png`
   - ❌ `screenshot.jpg`

### Bước 2: Di Chuyển Hình Ảnh Vào Folder Tương Ứng

Ví dụ: Thêm hình ảnh cho **chức năng 4-1-1 (Danh sách ứng viên)**

```bash
# Các file hình ảnh:
docs/assets/images/buddy/4-1-1/danh-sach-ung-vien-handler.png
docs/assets/images/buddy/4-1-1/popup-them-ung-vien-chua-co-mail.png
docs/assets/images/buddy/4-1-1/popup-them-ung-vien-da-co-mail.png
```

### Bước 3: Hệ Thống Tự Động Cập Nhật

Sau khi thêm hình ảnh, hãy chạy script để **tự động cập nhật tài liệu**:

```bash
cd d:\GitHub\Function_Specification_ICS
python update_buddy_images.py
```

**Script sẽ:**
✅ Kiểm tra xem folder có tồn tại không  
✅ Kiểm tra xem folder có chứa hình ảnh không  
✅ Tự động tạo các liên kết hình ảnh trong Markdown  
✅ Thêm cảnh báo nếu folder trống  

---

## 🎯 Cấu Trúc Template Hình Ảnh

Mỗi chức năng sẽ có một phần hình ảnh được tự động thêm:

```markdown
---

### 📸 Hình ảnh minh họa

> **📁 Thư mục nguồn:** `assets/images/buddy/4-1-1/`

![Danh sách ứng viên - Handler](assets/images/buddy/4-1-1/danh-sach-ung-vien-handler.png){ .image-widget-thumb loading=lazy }
![Popup thêm ứng viên](assets/images/buddy/4-1-1/popup-them-ung-vien.png){ .image-widget-thumb loading=lazy }

*Bấm vào từng ảnh để xem chi tiết.*
```

### 📌 Khi Folder Trống

Nếu folder không có hình ảnh, sẽ xuất hiện cảnh báo:

```markdown
!!! warning "⚠️ Chưa có hình ảnh minh họa"
    Thư mục `assets/images/buddy/4-1-1/` hiện đang trống. 
    Vui lòng thêm các hình ảnh minh họa cho tính năng này.
```

---

## 🔄 Quy Trình Cập Nhật Hình Ảnh

### Thêm Hình Ảnh Mới

1. **Tạo/Chỉnh sửa hình ảnh** → Lưu tại `docs/assets/images/buddy/{section-id}/`
2. **Chạy script:** `python update_buddy_images.py`
3. **Build site:** (Nếu cần) `mkdocs build`
4. **Kiểm tra:** Mở file Buddy.md hoặc xem tại website

### Xóa / Cập Nhật Hình Ảnh

1. **Xóa hoặc thay thế file** trong folder tương ứng
2. **Chạy script:** `python update_buddy_images.py`
3. **Cảnh báo sẽ xuất hiện** nếu folder trở thành trống
4. **Thêm hình ảnh mới** để loại bỏ cảnh báo

---

## 📊 Danh Sách Sections Cần Hình Ảnh

| Section ID | Tên Chức Năng | Folder |
|---|---|---|
| 3-1-1 | Đăng nhập tài khoản | `3-1-1/` |
| 3-1-2 | Cập nhật tài khoản | `3-1-2/` |
| 3-1-3 | Đổi mật khẩu | `3-1-3/` |
| 3-1-4 | Thay đổi vai trò | `3-1-4/` |
| 3-1-5 | Đăng xuất | `3-1-5/` |
| 4-1-1 | Handler - Danh sách ứng viên | `4-1-1/` |
| 4-1-2 | Handler - Tùy chọn cột | `4-1-2/` |
| 4-1-3 | Handler - Sắp xếp thứ tự | `4-1-3/` |
| 4-1-4 | Handler - Sắp xếp nhiều cột | `4-1-4/` |
| 4-1-5 | Handler - Tìm kiếm | `4-1-5/` |
| 4-1-6 | Handler - Thông tin ứng viên | `4-1-6/` |
| 4-1-7 | Handler - Thêm ứng viên | `4-1-7/` |
| 4-2-x | Handler - Quản lý vị trí | `4-2-x/` |
| 4-3-x | Handler - Quản lý phỏng vấn | `4-3-x/` |
| 4-4-x | Handler - Đánh giá ứng viên | `4-4-x/` |
| 4-5-x | Handler - Quản lý đào tạo | `4-5-x/` |
| 5-1-x | Interviewer - Lịch phỏng vấn | `5-1-x/` |
| 5-2-x | Interviewer - Thông tin ứng viên | `5-2-x/` |
| 6-1-x | Trainer - Thông tin ứng viên | `6-1-x/` |
| 6-2-x | Trainer - Quản lý đào tạo | `6-2-x/` |
| 7-1-x | Trainee | `7-1-x/` |

---

## 🛠️ Script Automation

### File: `update_buddy_images.py`

**Mục đích:** Tự động quét folder hình ảnh và cập nhật Buddy.md

**Chức năng:**
- ✅ Tìm tất cả sections trong Buddy.md
- ✅ Kiểm tra xem folder hình ảnh có tồn tại không
- ✅ Kiểm tra xem folder có chứa hình ảnh không
- ✅ Tự động sinh liên kết hình ảnh
- ✅ Thêm cảnh báo khi thiếu hình ảnh

**Cách sử dụng:**

```bash
cd d:\GitHub\Function_Specification_ICS
python update_buddy_images.py
```

**Output:**
```
Tìm thấy 37 sections
  ✓ 4-1-1 - đã thêm template hình ảnh
  ✓ 4-1-2 - đã có phần hình ảnh
  ...
✓ Cập nhật thành công! 5 sections được cập nhật.
```

---

## 💡 Best Practices

### ✅ Nên Làm

1. **Đặt tên file rõ ràng:**
   - `danh-sach-ung-vien.png`
   - `popup-them-ung-vien-form.jpg`
   - `button-them-ung-vien-highlighted.png`

2. **Tổ chức hình ảnh theo folder:**
   - Một folder cho mỗi chức năng (section ID)
   - Dễ dàng tìm kiếm và quản lý

3. **Chạy script sau khi thêm hình:**
   - Tự động cập nhật Buddy.md
   - Tránh chỉnh sửa thủ công

4. **Kiểm tra cảnh báo:**
   - Nếu folder trống, sẽ có cảnh báo
   - Giúp biết những chức năng nào cần hình ảnh

### ❌ Không Nên Làm

1. **Không chỉnh sửa thủ công phần hình ảnh** trong Buddy.md
   - Script sẽ ghi đè những thay đổi này
   - Tốn thời gian và dễ xảy ra lỗi

2. **Không lưu hình vào folder gốc** `buddy/`
   - Phải lưu vào folder section tương ứng
   - Ví dụ: `buddy/4-1-7/` chứ không phải `buddy/`

3. **Không dùng tên file tiếng Việt** (nếu có thể)
   - Dùng chữ thường, dấu gạch ngang
   - Ví dụ: `them-ung-vien.png` thay vì `Thêm Ứng Viên.png`

4. **Không quên chạy script** sau khi thêm hình
   - Script tự động cập nhật tài liệu
   - Không chạy = tài liệu không được cập nhật

---

## 📞 Hỗ Trợ & Xử Sự Cố

### ❓ Script không hoạt động?

**Kiểm tra:**
1. Đảm bảo Python 3.7+ đã được cài đặt
2. Chạy từ folder gốc: `d:\GitHub\Function_Specification_ICS`
3. Kiểm tra quyền truy cập folder

### ❓ Hình ảnh không xuất hiện?

**Kiểm tra:**
1. File hình ảnh có tồn tại trong folder section không?
2. Tên folder có khớp với section ID không? (Ví dụ: `4-1-1`)
3. Chạy script lại để cập nhật

### ❓ Cảnh báo vẫn hiển thị dù đã thêm hình?

**Xử lý:**
1. Chạy script lại: `python update_buddy_images.py`
2. Xóa folder `__pycache__` nếu có
3. Kiểm tra phần mở rộng file (.png, .jpg, etc.)

---

## 📅 Changelog

### v1.0 (Current)
- ✅ Triển khai cấu trúc thư mục
- ✅ Tạo 37+ folders cho sections
- ✅ Script tự động cập nhật
- ✅ Hệ thống cảnh báo khi thiếu hình ảnh
- ✅ Template Markdown chuẩn

---

## 📚 Tài Liệu Liên Quan

- [Buddy.md](docs/Buddy.md) - Tài liệu chính
- [mkdocs.yml](mkdocs.yml) - Cấu hình MkDocs
- [update_buddy_images.py](update_buddy_images.py) - Script cập nhật
- [IMAGE_MANAGEMENT_GUIDE.md](IMAGE_MANAGEMENT_GUIDE.md) - Hướng dẫn này

---

**Lần cập nhật gần nhất:** 27/02/2026

**Người duy trì:** Hệ thống tự động
