# TEST CASE  

## Feature: Quản Lý Bài Học
```
  Scenario: Giáo viên không thấy bài học nếu chưa được phân công
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And đang ở màn hình "Bài học"
    And buổi học đang ở trạng thái "Chưa bắt đầu"
    And giáo viên chưa được phân công dạy bài học "Bài 20: ABCXYZ"

    When giáo viên truy cập vào danh sách bài học của lớp "Long_Test"

    Then bài học "Bài 20: ABCXYZ" sẽ không hiển thị trong danh sách
    And nếu giáo viên truy cập thủ công qua URL, hệ thống sẽ chặn và hiển thị thông báo "Bạn không có quyền truy cập"
```    
```
  Scenario: Giáo viên chỉ thấy bài học thuộc lớp mà mình được phân công
    Given giáo viên "test001@gmail.com" đã được phân công dạy lớp "Long_Test"

    And admin đã tạo 2 bài học mới cho lớp "Long_Test":
      | Tiêu đề            | Trạng thái     |
      | Bài 20: ABCXYZ     | Chưa bắt đầu   |
      | Bài 21: DEF123     | Chưa bắt đầu   |

    When giáo viên "test001@gmail.com" đăng nhập và truy cập danh sách bài học của lớp "Long_Test"
    Then giáo viên thấy chính xác 2 bài học: "Bài 20: ABCXYZ" và "Bài 21: DEF123"
```
```
  Scenario: Không thể bắt đầu buổi học nếu chưa tick xác nhận đã đọc ghi chú
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And được phân công dạy lớp "Long_Test"
    And đang ở màn hình "Bài học"
    And bài học "Bài 20: ABCXYZ" trong lớp "Long_Test" đang ở trạng thái "Chưa bắt đầu"

    When giáo viên truy cập vào chi tiết bài học "Bài 20: ABCXYZ"
    And không tick checkbox “Tôi đã đọc ghi chú”

    Then nút “Bắt đầu buổi học” bị disable và không thể click
    And trạng thái buổi học vẫn giữ nguyên là “Chưa bắt đầu”

```
```
Scenario: Bắt đầu buổi học thành công khi đã tick xác nhận đọc ghi chú
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And được phân công dạy lớp "Long_Test"
    And đang ở màn hình "Bài học"
    And bài học "Bài 20: ABCXYZ" đang ở trạng thái "Chưa bắt đầu"

    When giáo viên truy cập vào chi tiết bài học "Bài 20: ABCXYZ"
    And tick chọn checkbox “Tôi đã đọc ghi chú”
    And nhấn nút “Bắt đầu buổi học”
    And xác nhận trong popup “Nhấn xác nhận để bắt đầu buổi học”

    Then trạng thái bài học chuyển thành “Đã mở”
    And hệ thống ẩn mô tả bài học
    And chuyển đến giao diện điểm danh
```

```
  Scenario: Điểm danh và kết thúc buổi học khi đã cập nhật đầy đủ trạng thái và ghi chú
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And được phân công dạy lớp "Long_Test"
    And bài học "Bài 20: ABCXYZ" đang ở trạng thái "Chưa bắt đầu"

    When giáo viên truy cập vào bài học "Bài 20: ABCXYZ"
    And tick xác nhận “Tôi đã đọc ghi chú”
    And nhấn “Bắt đầu buổi học”
    And xác nhận trong popup
    And hệ thống chuyển sang giao diện điểm danh
    And giáo viên chọn trạng thái điểm danh cho tất cả học viên
    And nhập ghi chú tổng cho lớp: “Lớp ổn định, không vấn đề”
    And nhấn nút “Kết thúc buổi học”
    And xác nhận trong popup kết thúc

    Then hệ thống lưu toàn bộ dữ liệu điểm danh và ghi chú lớp học
    And giao diện điều hướng sang bước diện “Hoàn thành buổi học”
    And tiến trình “Đi học” cập nhật đúng phần trăm theo số lượng đã điểm danh (nghỉ CP, KP tính là vắng mặt)
    And tiến trình “BTVN” hiển thị là 0%
```

