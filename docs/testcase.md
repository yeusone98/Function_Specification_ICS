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
  Scenario: Giáo viên nhìn thấy thông tin mới khi admin chỉnh sửa bài học đã phân công
    Given giáo viên "test001@gmail.com" đã được phân công dạy lớp "Long_Test"
    And bài học "Bài 20: ABCXYZ" đã được tạo và có mô tả là "Mô tả ABCXYZ"

    When admin truy cập vào lớp "Long_Test"
    And chỉnh sửa bài học "Bài 20: ABCXYZ" thành "Bài 21: MNOP"
    And cập nhật mô tả thành "Mô tả đã chỉnh sửa"
    And lưu thay đổi

    Then giáo viên "test001@gmail.com" khi truy cập lại danh sách bài học sẽ thấy bài học "Bài 21: MNOP" với mô tả là "Mô tả đã chỉnh sửa"
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
```
Scenario: Cho phép kết thúc điểm danh khi tick “Không có dặn dò cho học viên”
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And được phân công dạy lớp "Long_Test"
    And bài học "Bài 20: ABCXYZ" đang ở trạng thái "Chưa bắt đầu"

    When giáo viên truy cập vào bài học "Bài 20: ABCXYZ"
    And tick chọn “Tôi đã đọc ghi chú”
    And nhấn “Bắt đầu buổi học”
    And xác nhận bắt đầu
    And hệ thống chuyển sang giao diện điểm danh
    And giáo viên chọn trạng thái điểm danh cho toàn bộ học viên
    And tick “Không có dặn dò cho học viên”
    And nhấn “Kết thúc buổi học”
    And xác nhận kết thúc

    Then hệ thống lưu toàn bộ dữ liệu điểm danh và xác nhận không có ghi chú
    And giao diện chuyển sang màn hình “Hoàn thành buổi học”
    And tiến trình “Đi học” hiển thị đúng theo số lượng điểm danh (Nghỉ CP, KP = vắng mặt)
    And tiến trình “BTVN” hiển thị là 0%
```
```
Scenario: Giáo viên truy cập lại buổi học “Đã mở” để tiếp tục điểm danh
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And được phân công dạy lớp "Long_Test"
    And bài học "Bài 20: ABCXYZ" đang ở trạng thái "Đã mở"
    And buổi học chưa được điểm danh đầy đủ

    When giáo viên truy cập lại bài học "Bài 20: ABCXYZ" trong tab "Bài học"
    And nhấn nút “Điểm danh”
    And xác nhận bắt đầu điểm danh

    Then hệ thống chuyển đến giao diện điểm danh học viên
    And dữ liệu điểm danh và ghi chú trước đó (nếu có) vẫn giữ nguyên
    And giáo viên có thể tiếp tục hoặc cập nhật trạng thái điểm danh cho từng học viên và ghi chú lớp học
```

```
Scenario: Không thể kết thúc buổi học nếu chưa điểm danh tất cả học viên
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And được phân công dạy lớp "Long_Test"
    And bài học "Bài 20: ABCXYZ" đang ở trạng thái "Đã mở"
    And giáo viên chưa chọn trạng thái điểm danh cho tất cả học viên

    When giáo viên truy cập vào bài học "Bài 20: ABCXYZ"
    And nhấn nút “Điểm danh”
    And nhấn nút "Xác nhận"
    And điểm danh học viên A
    And không điểm danh học viên B 
    And tick “Không có dặn dò cho học viên”
    And nhấn nút “Kết thúc buổi học”

    Then nút “Kết thúc buổi học” bị disable và không thể nhấn
    And không hiển thị popup xác nhận
    And trạng thái buổi học vẫn giữ nguyên là “Đã mở”
```
```
Scenario: Giáo viên truy cập lại buổi học đã điểm danh để hoàn thành buổi học
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And được phân công dạy lớp "Long_Test"
    And bài học "Bài 20: ABCXYZ" đang ở trạng thái "Đã mở"
    And buổi học đã kết thúc bước điểm danh và đang ở bước hoàn thành buổi học

    When giáo viên truy cập lại bài học "Bài 20: ABCXYZ"
    And hệ thống hiển thị nút “Hoàn thành buổi học”
    And giáo viên nhấn nút “Hoàn thành buổi học”
    And xác nhận trong popup để chuyển sang màn hình hoàn thành buổi học
    And nhập ghi chú cho học viên (Gửi Support)
    And nhập ghi chú cho học viên (Gửi học viên)
    And nhập ghi chú của giáo viên gửi cho Team Support
    And nhập ghi chú của giáo viên gửi cho giáo viên tiếp theo
    And nhấn “Xác nhận” để hoàn tất buổi học

    Then hệ thống cập nhật trạng thái buổi học thành “Đã hoàn tất”
    And giao diện hiển thị “Buổi học đã kết thúc”
    And trên danh sách bài học, bài học hiển thị trạng thái hoàn tất, tên và avatar giáo viên
    And tiến độ “Đi học” và “BTVN” hiển thị đúng theo dữ liệu
    And bảng học viên hiển thị:
      | Trường hợp                | Hành vi                                 |
      |---------------------------|------------------------------------------|
      | Có ghi chú                | Cho phép click để xem chi tiết          |
      | Không có ghi chú          | Nút bị disable, không thể click         |
    And ghi chú tổng quan hiển thị đầy đủ:
      | - Nhận xét lớp của giáo viên
      | - Ghi chú gửi cho Team Support
      | - Ghi chú gửi cho giáo viên tiếp theo
```

```
Scenario: Cho phép hoàn thành buổi học khi giáo viên không nhập ghi chú và tick cả 2 checkbox “Không có dặn dò”
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công vào hệ thống
    And được phân công dạy lớp "Long_Test"
    And bài học "Bài 20: ABCXYZ" đã ở trạng thái “Đã mở”
    And buổi học đã kết thúc bước điểm danh và đang ở bước hoàn tất

    When giáo viên truy cập lại bài học "Bài 20: ABCXYZ"
    And nhấn nút “Hoàn thành buổi học”
    And hệ thống hiển thị màn hình hoàn tất buổi học
    And giáo viên tick cả 2 checkbox:
      | “Không có dặn dò cho Team Support”       |
      | “Không có dặn dò cho giáo viên tiếp theo”|

    And nhấn nút “Hoàn thành buổi học”
    And xác nhận trong popup: “Giáo viên vui lòng kiểm tra các ghi chú và tắt record Google Meet trước khi hoàn thành buổi học”

    Then buổi học được cập nhật sang trạng thái “Đã hoàn tất”
    And giao diện hiển thị thông báo “Buổi học đã kết thúc”
    And trong danh sách bài học, hiển thị:
      | Trạng thái     | Đã hoàn tất                |
      | Tiêu đề        | Bài 20: ABCXYZ             |
      | Tên GV và avatar         | test001@gmail.com          |
      | Tiến trình     | BTVN = đúng%, Đi học = đúng % |
    And bảng thống kê học viên:
      | Có ghi chú  | Nút xem chi tiết được enable  |
      | Không ghi chú | Nút xem bị disable           |
```


