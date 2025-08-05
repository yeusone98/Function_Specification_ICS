# 📄 TÀI LIỆU ĐẶC TẢ CHỨC NĂNG ICS & ỨNG DỤNG SAKUMI

## HỆ THỐNG ICS & ỨNG DỤNG SAKUMI

---

## 1. Giới thiệu hệ thống

ICS (Inside Connection System) là hệ thống quản lý nội bộ toàn diện dành cho các trung tâm đào tạo ngoại ngữ, được thiết kế để hỗ trợ tối ưu hóa quy trình vận hành, giảng dạy và quản lý tài nguyên. Hệ thống tập trung vào việc số hóa các hoạt động như:

* Quản lý lớp học, học viên, giáo viên
* Quản lý bài học, lịch dạy, điểm danh, bài tập, kiểm tra
* Quản lý khảo sát, họp lớp và đánh giá chất lượng
* Quản lý hóa đơn, doanh thu (theo dõi học phí, đối soát thanh toán và báo cáo doanh số)
* Quản lý khóa học và tài liệu (tạo, cập nhật chương trình học và tài liệu giảng dạy như PDF, video)

ICS giúp đảm bảo tính thống nhất, minh bạch và hiệu quả trong điều hành đào tạo tại nhiều trung tâm thành viên, đồng thời tích hợp các công cụ hỗ trợ như quản lý tài chính, chăm sóc học viên và phát triển chương trình học.

---

**Sakumi** là ứng dụng di động chuyên biệt hỗ trợ học viên luyện thi JLPT từ cấp độ N5 đến N2, bao gồm hai phiên bản:

* **Phiên bản mở (Sakumi 247)**:
  Dành cho người dùng phổ thông không phải học viên trung tâm, hỗ trợ tự học tiếng Nhật qua các tính năng: từ vựng, ngữ pháp, bảng chữ cái, flashcard, bài tập, kiểm tra và lộ trình cá nhân hóa.
  Người dùng có thể nâng cấp VIP để mở khóa toàn bộ nội dung và loại bỏ quảng cáo.

* **Phiên bản dành riêng cho học viên trung tâm (Sakumi)**:
  Đồng bộ dữ liệu trực tiếp từ ICS, cho phép học viên theo dõi lịch học, bài học, bài tập về nhà, kiểm tra, điểm danh và tiến độ lớp học thực tế. Phiên bản này yêu cầu tài khoản trung tâm và hỗ trợ tương tác hai chiều như gửi góp ý hoặc nhận thông báo từ hệ thống.

---

ICS và Sakumi tương tác chặt chẽ thông qua API nhằm đảm bảo dữ liệu luôn được cập nhật theo thời gian thực:

* ICS đẩy dữ liệu bài học, bài tập và lịch dạy sang Sakumi.
* Sakumi gửi lại kết quả bài làm, góp ý và tiến độ tự học về ICS.

Hệ sinh thái khép kín này hỗ trợ đồng thời cho quản lý nội bộ và trải nghiệm học tập cá nhân hóa.

### 🎯 Mục tiêu hệ thống:

* Số hóa toàn bộ quy trình vận hành
* Giảm thiểu lỗi thủ công, tăng hiệu suất
* Theo dõi tiến độ học tập chi tiết
* Cải thiện trải nghiệm người dùng
* Đảm bảo tính minh bạch, bảo mật và khả năng mở rộng

---

## 1.1 Trung tâm áp dụng ICS & Sakumi

ICS hiện được triển khai tại **6 trung tâm đào tạo ngoại ngữ**, với Sakumi hỗ trợ chính cho tiếng Nhật tại Nhật Ngữ Sakumi (bao gồm phiên bản mở Sakumi 247). Các trung tâm khác chưa có phiên bản mở tương tự.

| Trung tâm        | Ngôn ngữ đào tạo | Hỗ trợ ICS |
| ---------------- | ---------------- | ---------- |
| Betreux Deutsch  | Tiếng Đức        | Có         |
| Creatis Français | Tiếng Pháp       | Có         |
| Creative English | Tiếng Anh        | Có         |
| SaeChang         | Tiếng Hàn        | Có         |
| Hoa Ngữ Đắc Nhân | Tiếng Trung      | Có         |
| Nhật Ngữ Sakumi  | Tiếng Nhật       | Có         |

---

## 1.2 Vai trò người dùng trong hệ thống

| Vai trò                           | Mô tả chức năng chính                                                                                                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Master**                        | Người dùng cấp cao nhất, có toàn quyền quản lý toàn bộ hệ thống, bao gồm tạo/sửa tài khoản với các trạng thái (Đang kích hoạt, Vô hiệu, Xóa) cho các vai trò: Admin, Support, QC, Financial Management, Curriculum Development, v.v. |
| **Admin**                         | Quản lý toàn bộ giảng dạy: lớp học, học viên, giáo viên, bài học, lịch dạy, điểm danh, bài tập, kiểm tra, khảo sát, họp lớp và đánh giá chất lượng giảng dạy.                                                                        |
| **Support**                       | Hỗ trợ học viên và giáo viên về kỹ thuật, học vụ; ghi nhận tương tác, cảnh báo rủi ro và báo cáo tình trạng học viên.                                                                                                                |
| **QC (Quality Control)**          | Giám sát chất lượng giảng dạy, nội dung đào tạo; khảo sát đánh giá và đảm bảo tiêu chuẩn lớp học được tuân thủ.                                                                                                                      |
| **Financial Management**          | Theo dõi học phí, hóa đơn, đối soát thanh toán, trạng thái nợ phí và quản lý ưu đãi/voucher.                                                                                                                                         |
| **Curriculum Development**        | Quản lý nội dung đào tạo: khóa học, bài học, cấp độ, tiêu chuẩn lớp, hướng dẫn giảng dạy và khảo sát đánh giá chất lượng học tập.                                                                                                    |
| **Sale**                          | Tư vấn khóa học, đăng ký học viên mới, theo dõi lượt sử dụng ưu đãi và quản lý hóa đơn.                                                                                                                                              |
| **Assistant Teacher**             | Hỗ trợ giáo viên trong điểm danh, theo dõi sĩ số, giao bài, và theo dõi tiến độ học tập. Quyền hạn giới hạn hơn giáo viên.                                                                                                           |
| **App Handler**                   | Quản lý và hỗ trợ kỹ thuật cho ứng dụng Sakumi, xử lý lỗi và đồng bộ dữ liệu giữa ICS và Sakumi.                                                                                                                                     |
| **Sale Manager**                  | Giám sát đội ngũ bán hàng, theo dõi doanh số.                                                                                                                                                                                        |
| **Curriculum Development Runner** | Hỗ trợ phát triển chương trình học, tạo bài học, cập nhật tài liệu đào tạo.                                                                                                                                                          |
| **Teacher**                       | Xem và cập nhật lịch học, quản lý lớp học được phân công, điểm danh, chấm bài, ghi chú buổi học và theo dõi học viên.                                                                                                                |
| **Học viên**                      | Truy cập bài học, bài tập, kiểm tra, thư viện học tập và lộ trình cá nhân hóa qua ứng dụng Sakumi.                                                                                                                                   |

---

## 1.3 Tính năng nổi bật

* Quản lý vận hành giảng dạy theo vai trò, đảm bảo phân quyền rõ ràng
* Đồng bộ dữ liệu thời gian thực giữa ICS và Sakumi
* Theo dõi tiến độ học tập, điểm danh, bài tập và kết quả kiểm tra
* Quản lý lịch học, tài liệu giảng dạy và khảo sát đánh giá
* Tích hợp công cụ hỗ trợ học viên luyện thi JLPT qua Sakumi

---

### 🔐 Ghi chú quan trọng:

* Mỗi vai trò người dùng chỉ có thể thao tác trong phạm vi chức năng được cấp quyền.
* ICS là hệ thống dành cho nội bộ trung tâm, trong khi Sakumi là nền tảng dành riêng cho học viên.

---

## 2. Luồng hoạt động của hệ thống

### 2.1 Thêm Lớp Học { #toc-2-1 }

??? book "Thêm Lớp Học"
    | Trường dữ liệu | Nội dung |
    |---------------|----------|
    | **Mô tả luồng** | <div align="justify">Luồng này mô tả quy trình tạo lớp học mới và quản lý khóa học trong hệ thống ICS. Luồng được áp dụng cho vai trò Support, cho phép tạo lớp với các trạng thái và loại lớp khác nhau, bao gồm lớp chính thức và không chính thức (dùng để testing). Danh sách lớp hiển thị các thông tin tổng quan để dễ quản lý. Sau khi tạo lớp, hỗ trợ hiển thị thống kê chi tiết từng lớp học, bao gồm trung bình các chỉ số học tập và danh sách học viên. </div>|
    | **Vai trò liên quan** | <div align="justify">- Support: Tạo lớp học mới, chỉnh sửa trạng thái lớp (chính thức/không chính thức), quản lý khóa học, xem thống kê chi tiết lớp.<br>- Quản trị viên: Theo dõi và chỉnh sửa lớp nếu cần, xem thống kê chi tiết lớp. </div>|
    | **Bước thực hiện** | <div align="justify">🔹 1. Support truy cập hệ thống ICS, vào tab "Lớp học".<br>🔹 2. Nhấn nút "Thêm lớp mới" để mở popup tạo lớp.<br>🔹 3. Điền thông tin lớp: Chọn khóa học (dropdown các khóa học có sẵn hoặc tạo mới nếu cần), Mã lớp (tự động generate hoặc nhập thủ công), Loại lớp (Lớp chung / Lớp 1-1), Ngày bắt đầu, Ngày kết thúc, Ghi chú (tuỳ chọn), Checkbox "Lớp không chính thức" (nếu tick, lớp dùng để testing).<br>🔹 4. Nhấn "Thêm mới" để tạo lớp với trạng thái "Mới tạo".<br>🔹 5. Lớp mới được thêm vào danh sách lớp, có thể chỉnh sửa trạng thái lớp (Mới tạo → Đang học, Tạm dừng, Hoàn thành, Hủy) và loại chính thức/không chính thức sau này.<br>🔹 6. Danh sách lớp hiển thị các cột: Mã lớp, Khóa học, Đi học, BTVN, Sĩ Số, Điểm kiểm tra (trung bình của lớp), Điểm BTVN (trung bình của lớp), Đánh giá.<br>🔹 7. Xem thống kê chi tiết lớp: Người dùng (Support, Giáo viên, Trợ giảng) chọn một lớp từ danh sách lớp đang phụ trách, hệ thống hiển thị thống kê chi tiết của lớp, gồm 2 phần chính:<br>&emsp;• **(1) Thống kê tổng quan lớp:** Sĩ số (Số học viên đang học / tổng học viên), Đi học (Trung bình tỷ lệ điểm danh của học viên), Bài tập về nhà (Trung bình phần trăm hoàn thành bài tập), Điểm kiểm tra (Điểm trung bình của các bài kiểm tra nếu có), Điểm BTVN (Trung bình điểm của bài tập về nhà đã được chấm), Thời gian học (Trung bình thời lượng học của học viên).<br>&emsp;• **(2) Danh sách học viên:** Họ tên học viên, Mã học viên, Email, Ghi chú bất thường nếu có (ví dụ học kém, cảnh báo nghỉ học, chưa đóng học phí v.v.). Cách tính toán: Chỉ lấy dữ liệu từ học viên đang học (trạng thái hoạt động). Các giá trị được làm tròn tới 2 chữ số thập phân. Nếu không có học viên: Hiển thị thông báo “Không có học viên đang theo học trong lớp này.” và ẩn biểu đồ thống kê. </div>|
    | **Điều kiện và kết quả** | <div align="justify">- Điều kiện: Khóa học phải tồn tại hoặc được tạo mới, Mã lớp không trùng, Ngày bắt đầu < Ngày kết thúc, Support có quyền tạo lớp, lớp có học viên đang học để hiển thị thống kê.<br>- Kết quả: Lớp mới được tạo với trạng thái "Mới tạo", hiển thị trong danh sách với các cột thống kê (ban đầu các giá trị như Điểm kiểm tra, Điểm BTVN có thể là 0), có thể cập nhật trạng thái (Mới tạo, Đang học, Tạm dừng, Hoàn thành, Hủy) và loại (chính thức/không chính thức). Nếu là lớp không chính thức, dùng để testing mà không ảnh hưởng đến dữ liệu thực. Khi chọn lớp, hiển thị thống kê chi tiết với các chỉ số trung bình và danh sách học viên. </div>|
    | **Tương tác với Sakumi** | <div align="justify">- Hệ thống ICS đồng bộ lớp học mới và trạng thái sang ứng dụng Sakumi để học viên xem danh sách lớp và khóa học.<br>- Nếu lớp chuyển trạng thái (ví dụ: Đang học), cập nhật đồng bộ để học viên truy cập bài học tương ứng.<br>- Không có tương tác trực tiếp với Sakumi cho việc chấm điểm hoặc bài tập ở luồng này. </div>

### 2.2 Chỉnh sửa thông tin Lớp Học { #toc-2-2 }

??? book "Chỉnh sửa thông tin lớp học"
    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | <div align="justify">Chỉnh sửa thông tin lớp học</div> |
    | **Vai trò**                 | <div align="justify">Support</div> |
    | **Mô tả**                   | <div align="justify">Cho phép Support chỉnh sửa các thông tin cơ bản của lớp học, bao gồm: checkbox "Lớp không chính thức", Link Google Meet, Ghi chú, Mã lớp, Ngày bắt đầu, Ngày kết thúc, Loại lớp, Trạng thái lớp. Các thay đổi được lưu lại để đảm bảo thông tin lớp học luôn cập nhật và chính xác.</div> |
    | **Giao diện liên quan**     | <div align="justify">- Trang chi tiết lớp học (truy cập từ tab "Lớp học" khi chọn một lớp cụ thể)<br>- Tab "Cài đặt" trong lớp học<br>- Giao diện form chỉnh sửa thông tin lớp (hiển thị sau khi nhấn vào các trường có thể chỉnh sửa)</div> |
    | **Luồng thao tác chính**    | <div align="justify">1. Support truy cập hệ thống ICS và chọn một lớp học từ danh sách lớp.<br>2. Trong giao diện lớp học, chuyển sang tab "Cài đặt".<br>3. Hệ thống hiển thị các trường thông tin lớp: Checkbox "Lớp không chính thức", Link Google Meet (input text), Ghi chú (textarea), Mã lớp (input text), Ngày bắt đầu (datepicker), Ngày kết thúc (datepicker), Loại lớp (dropdown: Lớp chung / Lớp 1-1), Trạng thái lớp (dropdown: Mới tạo / Đang học / Tạm dừng / Hoàn thành / Hủy).<br>4. Support chỉnh sửa các trường cần thay đổi (ví dụ: tick checkbox để đánh dấu lớp không chính thức, nhập link Google Meet mới, cập nhật ngày bắt đầu/kết thúc).<br>5. Nhấn nút "Lưu thông tin" để xác nhận thay đổi.<br>6. Hệ thống kiểm tra tính hợp lệ (ví dụ: Ngày bắt đầu < Ngày kết thúc, Mã lớp không trùng) và lưu cập nhật.<br>7. Hiển thị thông báo thành công hoặc lỗi nếu có vấn đề.</div> |
    | **Điều kiện**               | <div align="justify">- Support phải được phân quyền chỉnh sửa lớp học.<br>- Lớp học phải tồn tại và đang ở trạng thái cho phép chỉnh sửa (không phải trạng thái "Hoàn thành" hoặc "Hủy" trừ khi cần mở lại).<br>- Các trường bắt buộc (Mã lớp, Ngày bắt đầu, Ngày kết thúc, Loại lớp, Trạng thái lớp) phải được điền đầy đủ và hợp lệ.</div> |
    | **Kết quả hiển thị**        | <div align="justify">- Thông tin lớp được cập nhật và hiển thị ngay trên giao diện.<br>- Nếu checkbox "Lớp không chính thức" được tick, lớp sẽ được đánh dấu dùng cho testing và không ảnh hưởng đến dữ liệu chính thức.<br>- Các thay đổi như Link Google Meet hoặc Ghi chú được lưu và hiển thị cho các vai trò liên quan (Giáo viên, Trợ giảng).<br>- Thông báo thành công: "Thông tin lớp học đã được cập nhật thành công."</div> |
    | **Trường hợp không có dữ liệu** | <div align="justify">- Nếu lớp không tồn tại: Hiển thị thông báo "Lớp học không tồn tại."<br>- Nếu trường bắt buộc bị bỏ trống: Hiển thị lỗi "Vui lòng điền đầy đủ thông tin bắt buộc."<br>- Nếu ngày bắt đầu > ngày kết thúc: Hiển thị lỗi "Ngày bắt đầu phải trước ngày kết thúc."</div>

### 2.3 Thêm/Xóa/Sửa học viên vào lớp học { #toc-2-3 }

??? book "Thêm/Xóa/Sửa học viên vào lớp học"
    | Trường dữ liệu | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng** | <div align="justify">Thêm/Xóa/Sửa học viên vào lớp học</div> |
    | **Vai trò liên quan** | <div align="justify">- Support: Thực hiện thêm và chỉnh sửa học viên trong lớp.<br>- Học viên: Xem cập nhật lớp học mới trên app Sakumi sau khi được thêm vào lớp.</div> |
    | **Mô tả** | <div align="justify">Cho phép Support thêm học viên hiện có hoặc tạo học viên mới vào lớp học. Học viên mới có thể được tạo với thông tin cơ bản như họ tên, mã học viên, số điện thoại, email, nơi cư trú, tag (cho quản lý hoặc testing), học phí (với ràng buộc <= tổng hóa đơn của học viên, vì một hóa đơn có thể dùng cho nhiều lớp; khi thêm/chỉnh sửa học phí, cần chọn loại hóa đơn từ dropdown). Hỗ trợ tạo học viên cho mục đích testing (ví dụ: gắn tag "Testing"). Sau khi thêm, danh sách học viên của lớp sẽ hiển thị các cột: Tên, Email, Đăng ký (ngày đăng ký), Vào lớp (ngày thêm vào lớp), Trạng thái (mặc định: Đang học), Tag (hiển thị số lượng tag như #3), Học phí (số tiền hoặc trạng thái thanh toán). Có thể chỉnh sửa tag, học phí (với chọn loại hóa đơn), và trạng thái học viên trong danh sách. Trạng thái học viên bao gồm: Dự thính (chỉ xem buổi học, không tương tác trên app), Chỉ xem (quyền xem chỉ, không làm bài), Nghỉ học (khóa học không hiển thị trên app), Xóa (khóa học không hiển thị trên app), Kiểm thử (dành cho account QC Testing). Tag được thêm từ dropdown nhóm (ví dụ: NGHI HOC, HOC TIEP KI/KHOA, LY DO DROP, THOI GIAN...), hiển thị dưới dạng chip có X để xóa; khi hover/click vào tag của học viên cụ thể, mở popup nhóm tag đó để thêm/xóa/sửa tag tùy ý. Thêm mới tag có thể chỉnh sửa (sửa tên tag), nhưng không có thêm icon sao để chỉnh sửa. Sau khi thêm học viên vào lớp hoặc chỉnh sửa trạng thái, hệ thống đồng bộ dữ liệu với app Sakumi để học viên thấy khóa học/lớp học mới hiển thị trên app (hoặc ẩn đi tùy trạng thái).</div> |
    | **Giao diện liên quan** | <div align="justify">- Trang chi tiết lớp học (truy cập từ tab "Lớp học" khi chọn một lớp cụ thể)<br>- Tab "Học viên" trong lớp học<br>- Popup "Danh sách học viên" với nút "Chọn học viên" và "Tạo học viên mới"<br>- Popup "Chọn học viên" với ô tìm kiếm và danh sách học viên hiện có<br>- Popup "Tạo học viên mới" với các trường: Họ và tên, Mã học viên, Số điện thoại, Email, Nơi cư trú (dropdown), Tag (dropdown chọn từ nhóm hoặc tạo mới), Học phí (input số với ràng buộc <= hóa đơn, và dropdown chọn loại hóa đơn)<br>- Phần "Tag quản lý" trong popup chỉnh sửa: Dropdown "Nhóm" để chọn nhóm tag (NGHI HOC, HOC TIEP KI/KHOA, LY DO DROP, THOI GIAN...), sau khi chọn hiển thị dropdown tag con để thêm; "Tag đã chọn" hiển thị chip với X để xóa (ví dụ: HEN 1 THANG, PHAN VAN, BAT BUOC LEN KI)<br>- Trong danh sách học viên: Cột Tag hiển thị số lượng như #3; hover/click vào tag → mở popup nhóm tag tương ứng để thêm/xóa/sửa; Cột Trạng thái (dropdown để chỉnh: Dự thính, Chỉ xem, Nghỉ học, Xóa, Kiểm thử...)<br>- Popup "Thêm" hoặc chỉnh sửa học phí: Dropdown "Chọn hóa đơn", Input "Giá trị" (phải <= giá trị hóa đơn), Nút "Hủy" và "Thêm"</div> |
    | **Luồng thao tác chính** | <div align="justify">1. Support truy cập hệ thống ICS và chọn một lớp học từ danh sách lớp.<br>2. Trong giao diện lớp học, chuyển sang tab "Học viên".<br>3. Nhấn nút "Tạo học viên mới" hoặc "Thêm học viên" để mở popup "Danh sách học viên".<br>4. Tại popup, chọn một trong hai phương án:<br>&emsp;a. **Chọn học viên hiện có:**<br>&emsp;&emsp;- Mở popup "Chọn học viên" với ô tìm kiếm "Tìm kiếm theo tên, mã học viên h.v...".<br>&emsp;&emsp;- Hệ thống hiển thị danh sách học viên: Tên - Mã học viên - Email - Tag (nếu có).<br>&emsp;&emsp;- Tick chọn một hoặc nhiều học viên.<br>&emsp;&emsp;- Nhấn "Thêm mới" để thêm vào lớp.<br>&emsp;b. **Tạo học viên mới:**<br>&emsp;&emsp;- Mở popup "Tạo học viên mới".<br>&emsp;&emsp;- Điền thông tin: Họ và tên (bắt buộc), Mã học viên (bắt buộc, không trùng), Số điện thoại (tùy chọn), Email (bắt buộc, hợp lệ), Nơi cư trú (dropdown), Tag (chọn từ dropdown nhóm tag hoặc tạo mới, ví dụ: "Testing" cho mục đích test), Học phí (input số, bắt buộc <= tổng hóa đơn của học viên, và chọn loại hóa đơn từ dropdown).<br>&emsp;&emsp;- Nhấn "Thêm mới" để tạo và thêm học viên vào lớp.<br>5. Hệ thống kiểm tra tính hợp lệ (email không trùng, mã không trùng, học phí <= hóa đơn) và thêm học viên.<br>6. Danh sách học viên cập nhật với các cột: Tên, Email, Đăng ký (ngày đăng ký), Vào lớp (ngày thêm vào lớp), Trạng thái (mặc định: Đang học), Tag (hiển thị số lượng như #3), Học phí (số tiền hoặc trạng thái thanh toán).<br>7. Để chỉnh sửa tag: Trong danh sách học viên, hover/click vào cột Tag của học viên → mở popup "Tag quản lý" với dropdown "Nhóm" (chọn nhóm như NGHI HOC...), sau chọn tag con từ dropdown để thêm; Tag đã chọn hiển thị chip với X để xóa; Nếu thêm tag mới, có thể chỉnh sửa tên tag trực tiếp (không có icon sao riêng); Nhấn "Cập nhật" để lưu, tag mới sẽ hiển thị và cập nhật số lượng (#số).<br>8. Để thêm/chỉnh sửa học phí: Nhấn vào cột Học phí hoặc nút "+" → mở popup "Thêm" với dropdown "Chọn hóa đơn" (danh sách hóa đơn của học viên), input "Giá trị" (phải <= giá trị hóa đơn đã chọn), nhấn "Thêm" để lưu; Nếu giá trị > hóa đơn, hiển thị lỗi "Giá trị <= [số] VND".<br>9. Để chỉnh sửa trạng thái học viên: Trong danh sách học viên, click vào cột Trạng thái của học viên → mở dropdown chọn trạng thái mới (Dự thính, Chỉ xem, Nghỉ học, Xóa, Kiểm thử, Đang học...); Nhấn lưu để cập nhật.<br>10. Sau khi thêm học viên vào lớp hoặc chỉnh sửa trạng thái, hệ thống đồng bộ dữ liệu với app Sakumi: Học viên sẽ thấy khóa học/lớp học mới hiển thị trên app của họ (hoặc ẩn đi tùy trạng thái: Dự thính/Chỉ xem chỉ xem không tương tác; Nghỉ học/Xóa ẩn khóa học; Kiểm thử cho QC Testing).</div> |
    | **Điều kiện** | <div align="justify">- Support phải được phân quyền thêm và chỉnh sửa học viên trong lớp.<br>- Học viên hiện có phải không trùng trong lớp.<br>- Thông tin học viên mới phải hợp lệ: Email đúng định dạng và không trùng, Mã học viên không trùng, Học phí <= tổng hóa đơn (vì hóa đơn có thể dùng cho nhiều lớp), Các trường bắt buộc phải điền đầy đủ.<br>- Đối với testing: Có thể gắn tag "Testing" để phân biệt.<br>- Khi thêm/chỉnh học phí: Phải chọn loại hóa đơn từ dropdown, và giá trị <= giá trị hóa đơn đó.<br>- Khi thêm tag: Tag phải thuộc nhóm đã chọn, không trùng tag hiện có; Thêm mới tag có thể chỉnh sửa tên trực tiếp.<br>- Khi chỉnh trạng thái: Trạng thái mới phải hợp lệ, và đồng bộ thay đổi quyền trên app Sakumi.<br>- Đồng bộ với Sakumi: Học viên phải có tài khoản trên app Sakumi để thấy cập nhật.</div> |
    | **Kết quả hiển thị** | <div align="justify">- Học viên được thêm vào danh sách lớp và hiển thị ngay với các cột tương ứng.<br>- Nếu là học viên testing, tag "Testing" được hiển thị.<br>- Tag được chỉnh sửa: Hiển thị dưới dạng chip trong cột Tag, số lượng tag cập nhật (#số), có thể thêm/xóa/sửa (sửa tên tag nếu mới) qua popup nhóm.<br>- Học phí được cập nhật: Hiển thị số tiền mới trong cột Học phí, với loại hóa đơn đã chọn.<br>- Trạng thái được cập nhật: Hiển thị trạng thái mới trong cột Trạng thái; Đồng bộ với app Sakumi (Dự thính/Chỉ xem: chỉ xem; Nghỉ học/Xóa: ẩn khóa học; Kiểm thử: cho QC).<br>- Thông báo thành công: "Học viên đã được thêm/chỉnh sửa thành công."<br>- Danh sách học viên cập nhật thời gian thực.<br>- Trên app Sakumi: Học viên thấy lớp học mới trong danh sách khóa học của họ (hoặc thay đổi theo trạng thái).</div> |
    | **Trường hợp không có dữ liệu** | <div align="justify">- Nếu không có học viên hiện có phù hợp: Popup "Chọn học viên" hiển thị trống hoặc thông báo "Không tìm thấy học viên."<br>- Nếu thông tin mới không hợp lệ (email trùng, mã trùng, học phí > hóa đơn): Hiển thị lỗi "Email/Mã học viên đã tồn tại." hoặc "Giá trị vượt quá hóa đơn của học viên."<br>- Nếu bỏ trống trường bắt buộc: Không cho lưu và hiển thị lỗi "Vui lòng điền đầy đủ thông tin bắt buộc."<br>- Nếu bỏ trống nhóm khi thêm tag: Không cho thêm tag con.<br>- Nếu không có hóa đơn cho học viên: Dropdown "Chọn hóa đơn" trống, không cho thêm học phí.<br>- Nếu đồng bộ Sakumi thất bại: Không ảnh hưởng đến ICS, nhưng học viên không thấy cập nhật trên app (có thể ghi log lỗi).</div>



### 2.4


### 2. Giảng dạy - Giao Bài Tập Về Nhà - Chấm Điểm { #toc-2-1 }

??? book "Giảng dạy - Giao Bài Tập Về Nhà - Chấm Điểm"
    | Trường dữ liệu | Nội dung |
    |---------------|----------|
    | **Mô tả luồng** | <div align="justify">Luồng này mô tả quy trình giảng dạy một buổi học từ giáo viên đến học viên, bao gồm mở bài học, điểm danh, kết thúc buổi học và giao làm bài tập về nhà. Luồng được áp dụng cho vai trò giáo viên trong hệ thống ICS (Inside Connection System), với đồng bộ sang ứng dụng Sakumi để học viên làm bài tập về nhà. Luồng đảm bảo buổi học diễn ra mượt mà, ghi nhận đầy đủ dữ liệu như điểm danh và ghi chú, hỗ trợ học viên tiếp tục học tập qua ứng dụng Sakumi. </div>|
    | **Vai trò liên quan** | <div align="justify">- Giáo viên: Mở bài học, điểm danh, kết thúc buổi học, giao bài tập về nhà.<br>- Trợ giảng: Hỗ trợ điểm danh và theo dõi buổi học.<br>- Học viên: Nhận bài tập về nhà và làm trên ứng dụng Sakumi.<br>- Quản trị viên: Theo dõi tổng quan lớp học và can thiệp nếu cần như xem thống kê sau buổi học. </div>|
    | **Bước thực hiện** | <div align="justify">🔹 1. Giáo viên truy cập hệ thống ICS, chọn lớp học và bài học có trạng thái Chưa học.<br>🔹 2. Xem dặn dò trước buổi học dưới dạng danh sách các nội dung cần lưu ý, ghi chú từ buổi học trước và xác nhận Tôi đã đọc ghi chú để bắt đầu buổi học.<br>🔹 3. Chuyển sang giao diện điểm danh: Hệ thống liệt kê danh sách học viên, giáo viên chọn trạng thái cho từng học viên như Có mặt, Nghỉ có phép, Vào trễ, Ra sớm, Vào trễ & ra sớm, Nghỉ không phép, Chưa điểm danh, nhập ghi chú chung cho lớp học nếu cần. (Nếu buổi học đã bắt đầu nhưng chưa điểm danh, hệ thống sẽ chuyển trực tiếp vào bước điểm danh này).<br>🔹 4. Nhấn Kết thúc buổi học sau khi điểm danh hoàn tất, hệ thống hiển thị popup xác nhận tắt record Google Meet trước khi kết thúc buổi học nếu áp dụng.<br>🔹 5. Hoàn tất buổi học: Giao diện hiển thị lại danh sách học viên để nhập ghi chú riêng cho từng học viên như ghi chú gửi cho team Support hoặc ghi chú gửi cho học viên, đồng thời nhập ghi chú tổng cho lớp học như ghi chú gửi cho team Support hoặc ghi chú gửi cho giáo viên kế tiếp, tick chọn Không có ghi chú gì nếu không cần nhập. Nhấn hoàn thành buổi học, hệ thống hiển thị popup xác nhận tắt record Google Meet trước khi kết thúc buổi học nếu áp dụng. Khi kết thúc bài học, bài tập về nhà sẽ tự động mở và giao cho học viên. (Nếu buổi học đã bắt đầu và đã điểm danh nhưng chưa hoàn thành, hệ thống sẽ chuyển trực tiếp vào bước hoàn thành buổi học này).<br>🔹 6. Bài tập sẽ tự động giao cho học viên sau khi hoàn thành buổi học.<br>🔹 7. Học viên truy cập ứng dụng Sakumi, chọn khóa học đang học cụ thể, sau đó chọn tab bài học, chọn bài học đã học và đã điểm danh, rồi chọn Bài Tập Về Nhà, làm lần lượt các loại bài tập (30 câu hoặc tùy mỗi bài) như viết chữ Hán từ phiên âm và nghĩa, nối từ vựng với nghĩa tương ứng, sắp xếp thành câu hoàn chỉnh, điền từ vào chỗ trống, chọn câu trả lời đúng, chọn câu tiếng Nhật tương ứng với nghĩa tiếng Việt, nghe đoạn ghi âm và chọn đáp án đúng, đọc to từ được yêu cầu, đặt câu với từ cho trước, đặt câu với cấu trúc cho trước, nói đoạn văn gồm 3–5 câu, sau khi làm xong chuyển sang màn hình hiển thị kết quả.<br>🔹 8. Giáo viên chấm bài tập về nhà trong hệ thống ICS sau khi nhận kết quả từ ứng dụng Sakumi.<br> - Khi truy cập ICS để xem trạng thái bài tập về nhà (BTVN) của buổi học, hệ thống sẽ hiển thị 3 trạng thái chính: "Đã chấm", "Chưa chấm", hoặc "Đang đợi nộp bài" (chỉ cần một học viên nộp bài là trạng thái sẽ chuyển sang "Chưa chấm"). Ngoài ra, hiển thị số bài đã nộp / tổng số bài và phần trăm tiến độ đã chấm bài và hiển thị tổng số bài chưa chấm. Các cột thống kê bao gồm: điểm số, tên học viên, thời gian làm bài, thời gian nộp bài, và số câu đã bỏ qua.<br> - Khi chọn bài "Chưa chấm" cụ thể, hệ thống cung cấp bộ lọc học viên chưa chấm, hiển thị tên học viên, bộ lọc theo tên học viên, và bộ lọc những câu chưa chấm hoặc đã chấm. Giáo viên chấm điểm trên thang 10, với chức năng nhận xét kèm theo audio, file, hoặc text. Bên cạnh đó, có chức năng sao chép ở mục nhận xét để giúp giáo viên chấm bài nhanh hơn: giáo viên chỉ cần đính kèm nhận xét (audio, file, hoặc text), nhấn sao chép, rồi dán vào học viên khác là toàn bộ nội dung (bao gồm audio và file) sẽ được chuyển sang. Ngoài ra, hiển thị tỉ lệ điểm số / tổng số câu (ví dụ: nếu một học viên làm được 10 điểm cho câu đó và một học viên làm được 0 điểm thì tỉ lệ là 50%).<br> - Đối với những bài đã chấm, giáo viên vẫn có thể sửa lại điểm số và nhận xét nếu cần. Khi giáo viên chấm xong tất cả bài của học viên, trạng thái bài tập sẽ chuyển sang "Đã chấm" và điểm số của từng học viên sẽ được hiển thị trên ứng dụng Sakumi. </div>|
    | **Điều kiện và kết quả** | <div align="justify">- Điều kiện: Buổi học phải ở trạng thái Chưa bắt đầu, có học viên trong lớp học, giáo viên được phân công cho lớp, phải xác nhận đọc ghi chú trước khi bắt đầu, bài tập về nhà phải đã được cấu hình sẵn trong hệ thống.<br>- Kết quả: Buổi học chuyển trạng thái sang Đã hoàn tất, điểm danh và ghi chú được lưu trữ, bài tập về nhà được giao và đồng bộ, tiến độ lớp học cập nhật như phần trăm hoàn thành bài tập, thống kê lớp học được tính lại như sĩ số, phần trăm đi học, nếu không hoàn tất thì buổi học giữ trạng thái Đã bắt đầu hoặc Đã điểm danh. </div>|
    | **Tương tác với Sakumi** | <div align="justify">- Hệ thống ICS đẩy bài tập về nhà và trạng thái buổi học như điểm danh, ghi chú sang ứng dụng Sakumi để học viên xem tổng quan lớp học và danh sách bài tập. Trạng thái điểm danh của học viên cũng được hiển thị trên ứng dụng Sakumi.<br>- Ứng dụng Sakumi gửi kết quả bài tập về nhà về hệ thống ICS để giáo viên chấm điểm. Nếu học viên chưa làm bài tập về nhà, ứng dụng Sakumi sẽ hiển thị nợ bài tập về nhà; nếu đã làm xong thì không hiển thị nữa.<br>- Nếu học viên gửi góp ý qua ứng dụng Sakumi trong buổi học thì đồng bộ về hệ thống ICS cho Support xử lý. </div>|


### 2. Giao Bài Kiểm Tra - Chấm Điểm { #toc-2-2 }

??? book "Giao Bài Kiểm Tra - Chấm Bài"
    | Trường dữ liệu | Nội dung |
    |---------------|----------|
    | **Mô tả luồng** | <div align="justify">Luồng này mô tả quy trình giáo viên giao bài kiểm tra cho học viên qua hệ thống ICS, đồng bộ sang ứng dụng Sakumi để học viên làm bài, và chấm bài sau khi nhận kết quả. Luồng được áp dụng cho vai trò giáo viên, đảm bảo bài kiểm tra được quản lý riêng biệt, không phụ thuộc vào việc bắt đầu buổi học. Giáo viên có thể thu hồi bài kiểm tra nếu cần, và trạng thái bài kiểm tra được cập nhật động. </div>|
    | **Vai trò liên quan** | <div align="justify">- Giáo viên: Thêm bài kiểm tra, giao bài, thu hồi bài (nếu cần), chấm bài kiểm tra.<br>- Học viên: Làm bài kiểm tra trên ứng dụng Sakumi.<br>- Quản trị viên: Theo dõi tổng quan lớp học và trạng thái bài kiểm tra. </div>|
    | **Bước thực hiện** | <div align="justify">🔹 1. Giáo viên truy cập hệ thống ICS, chọn lớp học, vào tab "Bài tập và Kiểm tra".<br>🔹 2. Chọn chức năng thêm bài kiểm tra: Chọn khóa học và bài kiểm tra tương ứng để thêm vào lớp.<br>🔹 3. Giao bài kiểm tra: Giáo viên giao bài cho lớp, bài kiểm tra chuyển trạng thái từ "Chưa giao" sang "Đang đợi nộp bài", và đồng bộ sang ứng dụng Sakumi.<br>🔹 4. Học viên truy cập ứng dụng Sakumi, chọn khóa học cụ thể, vào tab kiểm tra, chọn bài kiểm tra cụ thể rồi làm bài (làm lần lượt các loại bài tập (30 câu hoặc tùy mỗi bài) như viết chữ Hán từ phiên âm và nghĩa, nối từ vựng với nghĩa tương ứng, sắp xếp thành câu hoàn chỉnh, điền từ vào chỗ trống, chọn câu trả lời đúng, chọn câu tiếng Nhật tương ứng với nghĩa tiếng Việt, nghe đoạn ghi âm và chọn đáp án đúng, đọc to từ được yêu cầu, đặt câu với từ cho trước, đặt câu với cấu trúc cho trước, nói đoạn văn gồm 3–5 câu, sau khi làm xong chuyển sang màn hình hiển thị kết quả).<br>🔹 5. Thu hồi bài kiểm tra (nếu cần): Ở trạng thái "Đã chấm", "Chưa chấm", hoặc "Đang đợi nộp bài", giáo viên có thể thu hồi bài kiểm tra, hệ thống sẽ reset hết tất cả những gì học viên đã làm và bài kiểm tra chuyển sang trạng thái "Chưa giao".<br>🔹 6. Chấm bài kiểm tra: Sau khi nhận kết quả từ ứng dụng Sakumi, giáo viên chấm bài tương tự quy trình chấm BTVN (xem trạng thái bài kiểm tra với 4 trạng thái: "Đã chấm", "Chưa chấm", "Đang đợi nộp bài", "Chưa giao"; lọc học viên, chấm điểm thang 10, nhận xét audio/file/text, sao chép nhận xét, tỉ lệ điểm số/tổng câu; có thể sửa lại nếu đã chấm; khi chấm xong chuyển trạng thái "Đã chấm" và hiển thị điểm trên Sakumi). Các cột thống kê bao gồm: điểm số, tên học viên, thời gian làm bài, thời gian nộp bài, và số câu đã bỏ qua. </div>|
    | **Điều kiện và kết quả** | <div align="justify">- Điều kiện: Bài kiểm tra phải được cấu hình sẵn trong hệ thống, giáo viên được phân công lớp, có học viên trong lớp.<br>- Kết quả: Bài kiểm tra được giao và đồng bộ, trạng thái cập nhật động (Chưa giao → Đang đợi nộp bài → Chưa chấm → Đã chấm), nếu thu hồi thì reset toàn bộ và quay về Chưa giao; điểm số và kết quả chấm được lưu trữ và đồng bộ sang Sakumi. </div>|
    | **Tương tác với Sakumi** | <div align="justify">- Hệ thống ICS đẩy bài kiểm tra và trạng thái sang ứng dụng Sakumi để học viên xem danh sách bài kiểm tra.<br>- Ứng dụng Sakumi gửi kết quả bài kiểm tra về hệ thống ICS để giáo viên chấm điểm.<br>- Nếu học viên chưa làm bài kiểm tra, ứng dụng Sakumi sẽ hiển thị nợ bài kiểm tra; nếu đã làm xong thì không hiển thị nữa. </div>|

