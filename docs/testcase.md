# TEST CASE 

## 1. Feature: Quản Lý Bài Học

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
Scenario: Admin không thể chỉnh sửa bài học nếu bài học đã bắt đầu
    Given bài học "Bài ABCXYZ" đã ở trạng thái “Đã mở”
    And admin đã đăng nhập thành công vào hệ thống
    And truy cập vào lớp "Long_Test"

    When admin mở danh sách bài học
    And nhấn vào bài học "ABCXYZ"

    Then hệ thống sẽ không hiện thị nút chỉnh sửa
    And hiển thị bài học đã mở
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

```
Scenario: Nếu chỉ nhập ghi chú cho Support, phần học viên sẽ hiển thị "Trống"
    Given giáo viên "test001@gmail.com" đã đăng nhập thành công
    And đang ở màn hình “Hoàn thành buổi học” cho bài học "Bài ABCXYZ"
    And đã kết thúc điểm danh trước đó

    When giáo viên chỉ nhập ghi chú cho học viên gửi support là “12345”
    And không nhập gì ở ghi chú cho học viên gửi học viên
    And tick không dặn dò cho team Support, không có dặn dò cho giáo viên
    And nhấn “Hoàn thành buổi học”
    And xác nhận trong popup

    Then buổi học được cập nhật sang trạng thái “Đã hoàn tất”
    And giao diện hiển thị thông báo “Buổi học đã kết thúc”
    And khi giáo viên xem lại popup ghi chú ở bảng thống kê học viên:
      | Ghi chú từ Giáo viên cho Học viên   | Trống   |
      | Ghi chú từ Giáo viên cho Team Support | 12345   |
```

```
Scenario: Giáo viên xem được đúng nội dung ghi chú ở bảng thống kê học viên trang tổng quan lớp
    Given giáo viên "test001@gmail.com" đã hoàn tất bài học "Bài ABCXYZ" với ghi chú:
      | Ghi chú gửi học viên     | (bỏ trống) |
      | Ghi chú gửi Team Support | 12345      |

    And đang truy cập trang “Tổng Quan Lớp” của lớp "Long_Test"

    When giáo viên nhấn vào ghi chú tại dòng học viên "Dương"

    Then hệ thống hiển thị popup ghi chú gồm:
      | Ghi chú từ Giáo viên cho Học viên   | Trống   |
      | Ghi chú từ Giáo viên cho Team Support | 12345   |
```
## 2. Feature: Quản Lý Bài Tập Về Nhà
```
 Scenario: Trạng thái bài tập là "Chưa giao" khi bài học chưa bắt đầu hoặc chưa học xong
    Given admin đã tạo bài tập về nhà "ABCXYZ" cho lớp "Long_Test"
    And bài học tương ứng vẫn đang ở một trong các trạng thái sau:
      | Trạng thái bài học         |
      |----------------------------|
      | Chưa bắt đầu buổi học      |
      | Đã bắt đầu nhưng chưa kết thúc |

    When giáo viên truy cập tab “Bài tập và kiểm tra”
    And chọn bài tập về nhà "ABCXYZ"

    Then hệ thống hiển thị bài tập "ABCXYZ" với:
      | Thành phần              | Nội dung hiển thị      |
      |-------------------------|-------------------------|
      | Trạng thái bài tập      | Chưa giao               |
      | Nội dung | Bài học chưa mở         |

    And giáo viên không thể thao tác: giao bài / chấm điểm / xem chi tiết
```
```
Scenario: Bài kiểm tra đã giao nhưng học sinh chưa làm → trạng thái là “Đang đợi nộp bài”
    Given giáo viên "test001@gmail.com" đã giao bài kiểm tra “ABCXYZ”
    And bài học tương ứng đã được hoàn tất
    And học sinh chưa nộp bài tập về nhà trên ứng dụng học tập

    When giáo viên truy cập tab “Bài tập và Kiểm tra”
    And chọn bài tập về nhà “ABCXYZ”

    Then hệ thống hiển thị bài tập "ABCXYZ" với:
      | Thành phần              | Nội dung hiển thị      |
      |-------------------------|-------------------------|
      | Trạng thái bài tập      | Đang đợi nộp bài               |
      | Nội dung | Thông tin học viên chưa nộp bài         |
```

```
Scenario: Giáo viên truy cập BTVN đã giao và có học viên nộp
    Given giáo viên đã đăng nhập thành công
    And bài tập về nhà "ABCXYZ" đã được giao và có học viên nộp bài

    When giáo viên nhấn vào bài "ABCXYZ" trong tab “Bài tập và kiểm tra”

    Then hệ thống chuyển đến giao diện chấm điểm
    And hiển thị danh sách học viên đã nộp với trạng thái “Chưa chấm”
    And hiển thị % học sinh đã nộp bài
```

```
Scenario: Lọc danh sách câu hỏi theo trạng thái “Chưa chấm”
  Given đang ở giao diện chấm điểm bài "ABCXYZ"

  When giáo viên chọn bộ lọc “Chưa chấm” trong phần câu hỏi

  Then chỉ hiển thị các câu chưa có chấm
```


```
Scenario: Lọc danh sách câu hỏi theo trạng thái “Đã chấm”
  Given đang ở giao diện chấm điểm bài "ABCXYZ"

  When giáo viên chọn bộ lọc “Chưa chấm” trong phần câu hỏi

  Then chỉ hiển thị các câu đã có điểm
```

```
Scenario: Lọc học viên chưa được chấm ở câu đang chọn
  Given đang chọn một câu bất kỳ trong bài "ABCXYZ"

  When giáo viên chọn bộ lọc “Chưa chấm ”

  Then danh sách hiển thị chỉ còn các học viên chưa được chấm câu đó
```

```
Scenario: Giáo viên chấm một câu với nhận xét đầy đủ và nhiều tệp đính kèm hợp lệ
  Given đang chọn một câu hỏi trong bài "ABCXYZ"
  And hiển thị đáp án của học viên

  When giáo viên chấm điểm từ 1 đến 10
  And nhập nhận xét văn bản
  And ghi âm nhận xét và gửi
  And đính kèm nhiều file ảnh định dạng hợp lệ (.jpg, .png, .gif, .bmp, .webp)
  And mỗi file có dung lượng nhỏ hơn hoặc bằng 25MB
  And đính kèm nhiều file ghi âm có dung lượng hợp lệ

  Then hệ thống lưu toàn bộ dữ liệu
  And trạng thái câu hỏi chuyển sang “Đã chấm”
  And hiển thị:
    - Icon âm thanh tương ứng với từng file ghi âm
    - Tên file ảnh hoặc icon ảnh đại diện cho từng tệp đính kèm
    - File ghi âm có thể phát lại
    - File ảnh có thể mở xem lại
```

```
Scenario: Không thể tải lên file quá 25MB
  Given giáo viên đang chấm bài "ABCXYZ"

  When đính kèm một file ảnh có dung lượng 30MB

  Then hệ thống hiển thị thông báo “Dung lượng file vượt quá giới hạn 25MB”
  And không cho phép upload
```
```
Scenario: Khi giáo viên chấm điểm xong toàn bộ học viên
    Given bài tập về nhà "ABCXYZ" đã được giao
    And tất cả học viên trong lớp đã nộp bài

    When giáo viên chấm đầy đủ tất cả câu hỏi cho từng học viên

    Then hệ thống cập nhật trạng thái bài là “Đã chấm”
```

```
Scenario: Một phần học sinh được chấm → trạng thái vẫn là “Chưa chấm”
  Given tất cả học viên đã nộp bài tập về nhà "ABCXYZ"

  When giáo viên chỉ chấm điểm cho một phần

  Then trạng thái bài là “Chưa chấm”
```

## 3. Feature: Quản Lý Bài Kiểm Tra

```
Scenario: Admin thêm bài kiểm tra mới vào lớp học
  Given admin đã đăng nhập hệ thống
  When admin vào tab "Bài tập và kiểm tra"
  And nhấn "Thêm bài kiểm tra" cho lớp "Long_Test"
  And nhập thông tin tên bài kiểm tra "ABCXYZ" và nội dung chi tiết

  Then bài kiểm tra "ABCXYZ" được thêm vào danh sách của lớp
  And trạng thái hiển thị là "Chưa giao"
```

```
Scenario: Trạng thái bài kiểm tra là "Chưa giao" khi giáo viên chưa giao bài
  Given admin đã tạo bài kiểm tra "ABCXYZ" cho lớp "Long_Test"

  When giáo viên truy cập tab “Bài tập và kiểm tra”
  And chọn bài kiểm tra "ABCXYZ" trong danh sách

  Then hệ thống hiển thị bài kiểm tra "ABCXYZ" với:
    | Thành phần         | Nội dung hiển thị     |
    |--------------------|------------------------|
    | Trạng thái         | Chưa giao              |
    | Nội dung           | Các câu hỏi của bài kiểm tra        |

  And giáo viên không thể thao tác: chấm điểm / xem chi tiết
```

```
Scenario: Giáo viên giao bài kiểm tra sau khi được admin thêm
  Given bài kiểm tra "ABCXYZ" đang ở trạng thái “Chưa giao”
  And giáo viên đã đăng nhập

  When giáo viên truy cập tab “Bài tập và kiểm tra”
  And nhấn vào “Giao bài”

  Then hệ thống chuyển bài kiểm tra sang trạng thái “Đang đợi nộp bài”
  And học sinh sẽ thấy bài kiểm tra trong ứng dụng học tập
```

```
Scenario: Giáo viên thu hồi bài kiểm tra ở các trạng thái đang đợi nộp bài, chưa chấm và đã chấm
  Given bài kiểm tra "ABCXYZ" đang ở trạng thái "đang đợi nộp bài" hoặc "chưa chấm" hoặc "đã chấm"

  When giáo viên nhấn nút “Thu hồi”

  Then hệ thống cập nhật trạng thái bài kiểm tra về “Chưa giao”
  And học sinh không còn thấy bài kiểm tra trong app học tập

Examples:
  | trạng_thái     |
  |----------------|
  | Đang đợi nộp bài |
  | Chưa chấm        |
  | Đã chấm          |
```

```
Scenario: Bài kiểm tra đã giao nhưng học sinh chưa làm → trạng thái là “Đang đợi nộp bài”
  Given giáo viên "test001@gmail.com" đã giao bài kiểm tra "ABCXYZ"
  And bài học tương ứng đã được hoàn tất
  And học sinh chưa nộp bài trên ứng dụng học tập

  When giáo viên truy cập tab “Bài tập và Kiểm tra”
  And chọn bài kiểm tra "ABCXYZ"

  Then hệ thống hiển thị bài kiểm tra "ABCXYZ" với:
    | Thành phần         | Nội dung hiển thị       |
    |--------------------|--------------------------|
    | Trạng thái         | Đang đợi nộp bài         |
    | Nội dung           | Thông tin học viên chưa nộp bài |
```



```
Scenario: Giáo viên truy cập bài kiểm tra đã giao và có học sinh nộp
  Given giáo viên đã đăng nhập thành công
  And bài kiểm tra "ABCXYZ" đã được giao và có học sinh nộp bài

  When giáo viên nhấn vào bài "ABCXYZ" trong tab “Bài tập và kiểm tra”

  Then hệ thống chuyển đến giao diện chấm điểm
  And hiển thị danh sách học sinh đã nộp với trạng thái “Chưa chấm”
  And hiển thị % học sinh đã nộp bài
```

```
Scenario: Khi giáo viên chấm điểm xong toàn bộ học sinh
  Given tất cả học sinh đã nộp bài kiểm tra "ABCXYZ"
  When giáo viên hoàn tất việc chấm

  Then trạng thái bài chuyển sang “Đã chấm”
```

```
Scenario: Một phần học sinh được chấm → trạng thái vẫn là “Chưa chấm”
  Given tất cả đã nộp bài kiểm tra "ABCXYZ"

  When giáo viên chỉ chấm điểm cho một phần

  Then trạng thái bài kiểm tra là “Chưa chấm”
```

```
Scenario: Lọc danh sách câu hỏi theo trạng thái “Chưa chấm”
  When giáo viên chọn bộ lọc “Chưa chấm”

  Then chỉ hiển thị các câu chưa có điểm hoặc nhận xét
```
```
Scenario: Lọc danh sách câu hỏi theo trạng thái “Đã chấm”
  When giáo viên chọn bộ lọc “Đã chấm”

  Then chỉ hiển thị các câu đã chấm xong
```
```
Scenario: Lọc học sinh chưa được chấm ở câu đang chọn
  When giáo viên chọn một câu hỏi bất kỳ
  And áp dụng bộ lọc “Chưa chấm”

  Then chỉ hiển thị học sinh chưa được chấm câu đó
```

```
Scenario: Giáo viên chấm một câu với nhận xét đầy đủ và nhiều tệp đính kèm hợp lệ
  When giáo viên nhập điểm (1–10)
  And nhập nhận xét văn bản
  And ghi âm + gửi
  And đính kèm nhiều file ảnh hợp lệ (.jpg, .png, .bmp, .webp), ≤25MB
  And đính kèm nhiều file ghi âm

  Then trạng thái câu hỏi là “Đã chấm”
  And hiển thị icon/audio/ảnh tương ứng
```

```
Scenario: Không thể tải lên file quá 25MB
  When giáo viên đính kèm ảnh > 25MB

  Then hệ thống báo lỗi “Dung lượng vượt giới hạn 25MB”
  And không cho phép upload
```










```
Scenario: Giáo viên có thể sửa điểm và nhận xét cho bài đã chấm
  Given bài kiểm tra "ABCXYZ" đã được chấm và hiển thị “Đã chấm”

  When giáo viên truy cập lại bài
  And chọn câu hỏi đã chấm của một học sinh
  And thay đổi điểm hoặc nhận xét

  Then hệ thống lưu dữ liệu cập nhật mới
  And trạng thái bài vẫn giữ là “Đã chấm”
```