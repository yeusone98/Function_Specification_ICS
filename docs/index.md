# Tài liệu đặc tả chức năng ICS Nhật Ngữ Sakumi
---

## 1. Giới thiệu

- **Mục tiêu:** <div class="justified-text"> ICS Nhật Ngữ Sakumi được xây dựng để hỗ trợ việc quản lý toàn diện các hoạt động giảng dạy tại trung tâm đào tạo tiếng Nhật, bao gồm: quản lý giáo viên, học viên, lớp học, lịch dạy, giáo trình và hệ thống đánh giá. Hệ thống giúp số hóa dữ liệu đào tạo, tự động hóa quy trình quản lý và nâng cao hiệu quả vận hành trong đào tạo tiếng Nhật. </div>
- **Đối tượng sử dụng:**  
  🔹 Developer: triển khai các module chức năng dựa trên mô tả nghiệp vụ  
  🔹 Tester: xây dựng và thực hiện test case để kiểm thử hệ thống


---

## 2. Phạm vi hệ thống
<div class="justified-text">Hệ thống Sakumi là nền tảng quản lý đào tạo tiếng Nhật, hỗ trợ tổ chức và điều hành các hoạt động giảng dạy, học tập và quản lý chất lượng đào tạo. Hệ thống cung cấp các chức năng khác nhau cho từng vai trò người dùng, bao gồm: Master, Admin, Teacher và Curriculum Development.
</div>

- **Master**: Người dùng cấp cao nhất với quyền kiểm soát toàn hệ thống
- **Admin**:  
  🔹 Quản lý học viên, giáo viên, lớp học và phân ca giảng dạy  
  🔹 Tổ chức cuộc họp (học viên, giáo viên, admin), đánh giá kết quả học tập và giảng dạy  
  🔹 Theo dõi quy trình lớp học, checklist và mức độ hoàn thành  
  🔹 Quản lý bài học, lịch dạy, kết quả học tập, hóa đơn và khảo sát  
  
- **Curriculum Development**:  
  🔹 Quản lý danh mục: mindset, tiêu chuẩn giáo trình, hướng dẫn giảng dạy  
  🔹 Quản lý khóa học và bài học  
  🔹 Quản lý cấp độ  
  🔹 Tạo và quản lý khảo sát giáo viên và học sinh

- **Teacher**:  
  🔹 Xem và cập nhật lịch học, lớp được phân công  
  🔹 Quản lý tiến độ lớp: điểm danh, bài tập, ghi chú đánh giá học viên và buổi học, theo dõi quá trình tự học của học viên   
  🔹 Truy cập tài liệu giảng dạy, tiêu chuẩn lớp, checklist giảng dạy  
 🔹 Tham gia khảo sát ,cuộc họp và ghi nhận đánh giá




---

## 3. Các chức năng chính

### 3.1 Master
| Mã chức năng | Tên chức năng                | Mô tả                                                                                             | Điều kiện/Kết quả                                            |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| M-01         | Quản lý tài khoản hệ thống   | Xem danh sách tài khoản theo vai trò (Admin, Teacher, Viewer...), trạng thái, ngày tạo. | Có thể lọc, tìm kiếm và phân trang                           |
| M-02         | Tạo tài khoản người dùng     | Nhập thông tin cá nhân (họ tên, ngày sinh, giới tính, số điện thoại, vai trò, gmail, mật khẩu).  | Email chưa tồn tại, hệ thống tự gán mã nhân viên             |
| M-03         | Chỉnh sửa tài khoản          | Cập nhật thông tin cá nhân và trạng thái hoạt động của tài khoản                                  | Các thay đổi được cập nhật ngay trong danh sách              |
| M-06         | Xóa tài khoản người dùng   | Xóa vĩnh viễn tài khoản khỏi hệ thống, không thể đăng nhập sau khi xóa                      | Có xác nhận, không thể hoàn tác                        |             |
