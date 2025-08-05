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

### 2.1 Giảng dạy - Giao Bài Tập Về Nhà - Chấm Điểm { #toc-2-1 }

??? book "Giảng dạy - Giao Bài Tập Về Nhà - Chấm Điểm"
    | Trường dữ liệu | Nội dung |
    |---------------|----------|
    | **Mô tả luồng** | <div align="justify">Luồng này mô tả quy trình giảng dạy một buổi học từ giáo viên đến học viên, bao gồm mở bài học, điểm danh, kết thúc buổi học và giao làm bài tập về nhà. Luồng được áp dụng cho vai trò giáo viên trong hệ thống ICS (Inside Connection System), với đồng bộ sang ứng dụng Sakumi để học viên làm bài tập về nhà. Luồng đảm bảo buổi học diễn ra mượt mà, ghi nhận đầy đủ dữ liệu như điểm danh và ghi chú, hỗ trợ học viên tiếp tục học tập qua ứng dụng Sakumi. </div>|
    | **Vai trò liên quan** | <div align="justify">- Giáo viên: Mở bài học, điểm danh, kết thúc buổi học, giao bài tập về nhà.<br>- Trợ giảng: Hỗ trợ điểm danh và theo dõi buổi học.<br>- Học viên: Nhận bài tập về nhà và làm trên ứng dụng Sakumi.<br>- Quản trị viên: Theo dõi tổng quan lớp học và can thiệp nếu cần như xem thống kê sau buổi học. </div>|
    | **Bước thực hiện** | <div align="justify">🔹 1. Giáo viên truy cập hệ thống ICS, chọn lớp học và bài học có trạng thái Chưa học.<br>🔹 2. Xem dặn dò trước buổi học dưới dạng danh sách các nội dung cần lưu ý, ghi chú từ buổi học trước và xác nhận Tôi đã đọc ghi chú để bắt đầu buổi học.<br>🔹 3. Chuyển sang giao diện điểm danh: Hệ thống liệt kê danh sách học viên, giáo viên chọn trạng thái cho từng học viên như Có mặt, Nghỉ có phép, Vào trễ, Ra sớm, Vào trễ & ra sớm, Nghỉ không phép, Chưa điểm danh, nhập ghi chú chung cho lớp học nếu cần. (Nếu buổi học đã bắt đầu nhưng chưa điểm danh, hệ thống sẽ chuyển trực tiếp vào bước điểm danh này).<br>🔹 4. Nhấn Kết thúc buổi học sau khi điểm danh hoàn tất, hệ thống hiển thị popup xác nhận tắt record Google Meet trước khi kết thúc buổi học nếu áp dụng.<br>🔹 5. Hoàn tất buổi học: Giao diện hiển thị lại danh sách học viên để nhập ghi chú riêng cho từng học viên như ghi chú gửi cho team Support hoặc ghi chú gửi cho học viên, đồng thời nhập ghi chú tổng cho lớp học như ghi chú gửi cho team Support hoặc ghi chú gửi cho giáo viên kế tiếp, tick chọn Không có ghi chú gì nếu không cần nhập. Nhấn hoàn thành buổi học, hệ thống hiển thị popup xác nhận tắt record Google Meet trước khi kết thúc buổi học nếu áp dụng. Khi kết thúc bài học, bài tập về nhà sẽ tự động mở và giao cho học viên. (Nếu buổi học đã bắt đầu và đã điểm danh nhưng chưa hoàn thành, hệ thống sẽ chuyển trực tiếp vào bước hoàn thành buổi học này).<br>🔹 6. Bài tập sẽ tự động giao cho học viên sau khi hoàn thành buổi học.<br>🔹 7. Học viên truy cập ứng dụng Sakumi, chọn khóa học đang học cụ thể, sau đó chọn tab bài học, chọn bài học đã học và đã điểm danh, rồi chọn Bài Tập Về Nhà, làm lần lượt các loại bài tập (30 câu hoặc tùy mỗi bài) như viết chữ Hán từ phiên âm và nghĩa, nối từ vựng với nghĩa tương ứng, sắp xếp thành câu hoàn chỉnh, điền từ vào chỗ trống, chọn câu trả lời đúng, chọn câu tiếng Nhật tương ứng với nghĩa tiếng Việt, nghe đoạn ghi âm và chọn đáp án đúng, đọc to từ được yêu cầu, đặt câu với từ cho trước, đặt câu với cấu trúc cho trước, nói đoạn văn gồm 3–5 câu, sau khi làm xong chuyển sang màn hình hiển thị kết quả.<br>🔹 8. Giáo viên chấm bài tập về nhà trong hệ thống ICS sau khi nhận kết quả từ ứng dụng Sakumi.<br> - Khi truy cập ICS để xem trạng thái bài tập về nhà (BTVN) của buổi học, hệ thống sẽ hiển thị 3 trạng thái chính: "Đã chấm", "Chưa chấm", hoặc "Đang đợi nộp bài" (chỉ cần một học viên nộp bài là trạng thái sẽ chuyển sang "Chưa chấm"). Ngoài ra, hiển thị số bài đã nộp / tổng số bài và phần trăm tiến độ đã chấm bài và hiển thị tổng số bài chưa chấm. Các cột thống kê bao gồm: điểm số, tên học viên, thời gian làm bài, thời gian nộp bài, và số câu đã bỏ qua.<br> - Khi chọn bài "Chưa chấm" cụ thể, hệ thống cung cấp bộ lọc học viên chưa chấm, hiển thị tên học viên, bộ lọc theo tên học viên, và bộ lọc những câu chưa chấm hoặc đã chấm. Giáo viên chấm điểm trên thang 10, với chức năng nhận xét kèm theo audio, file, hoặc text. Bên cạnh đó, có chức năng sao chép ở mục nhận xét để giúp giáo viên chấm bài nhanh hơn: giáo viên chỉ cần đính kèm nhận xét (audio, file, hoặc text), nhấn sao chép, rồi dán vào học viên khác là toàn bộ nội dung (bao gồm audio và file) sẽ được chuyển sang. Ngoài ra, hiển thị tỉ lệ điểm số / tổng số câu (ví dụ: nếu một học viên làm được 10 điểm cho câu đó và một học viên làm được 0 điểm thì tỉ lệ là 50%).<br> - Đối với những bài đã chấm, giáo viên vẫn có thể sửa lại điểm số và nhận xét nếu cần. Khi giáo viên chấm xong tất cả bài của học viên, trạng thái bài tập sẽ chuyển sang "Đã chấm" và điểm số của từng học viên sẽ được hiển thị trên ứng dụng Sakumi. </div>|
    | **Điều kiện và kết quả** | <div align="justify">- Điều kiện: Buổi học phải ở trạng thái Chưa bắt đầu, có học viên trong lớp học, giáo viên được phân công cho lớp, phải xác nhận đọc ghi chú trước khi bắt đầu, bài tập về nhà phải đã được cấu hình sẵn trong hệ thống.<br>- Kết quả: Buổi học chuyển trạng thái sang Đã hoàn tất, điểm danh và ghi chú được lưu trữ, bài tập về nhà được giao và đồng bộ, tiến độ lớp học cập nhật như phần trăm hoàn thành bài tập, thống kê lớp học được tính lại như sĩ số, phần trăm đi học, nếu không hoàn tất thì buổi học giữ trạng thái Đã bắt đầu hoặc Đã điểm danh. </div>|
    | **Tương tác với Sakumi** | <div align="justify">- Hệ thống ICS đẩy bài tập về nhà và trạng thái buổi học như điểm danh, ghi chú sang ứng dụng Sakumi để học viên xem tổng quan lớp học và danh sách bài tập. Trạng thái điểm danh của học viên cũng được hiển thị trên ứng dụng Sakumi.<br>- Ứng dụng Sakumi gửi kết quả bài tập về nhà về hệ thống ICS để giáo viên chấm điểm. Nếu học viên chưa làm bài tập về nhà, ứng dụng Sakumi sẽ hiển thị nợ bài tập về nhà; nếu đã làm xong thì không hiển thị nữa.<br>- Nếu học viên gửi góp ý qua ứng dụng Sakumi trong buổi học thì đồng bộ về hệ thống ICS cho Support xử lý. </div>|


### 2.2 Giao Bài Kiểm Tra - Chấm Điểm { #toc-2-2 }

??? book "Giao Bài Kiểm Tra - Chấm Bài"
    | Trường dữ liệu | Nội dung |
    |---------------|----------|
    | **Mô tả luồng** | <div align="justify">Luồng này mô tả quy trình giáo viên giao bài kiểm tra cho học viên qua hệ thống ICS, đồng bộ sang ứng dụng Sakumi để học viên làm bài, và chấm bài sau khi nhận kết quả. Luồng được áp dụng cho vai trò giáo viên, đảm bảo bài kiểm tra được quản lý riêng biệt, không phụ thuộc vào việc bắt đầu buổi học. Giáo viên có thể thu hồi bài kiểm tra nếu cần, và trạng thái bài kiểm tra được cập nhật động. </div>|
    | **Vai trò liên quan** | <div align="justify">- Giáo viên: Thêm bài kiểm tra, giao bài, thu hồi bài (nếu cần), chấm bài kiểm tra.<br>- Học viên: Làm bài kiểm tra trên ứng dụng Sakumi.<br>- Quản trị viên: Theo dõi tổng quan lớp học và trạng thái bài kiểm tra. </div>|
    | **Bước thực hiện** | <div align="justify">🔹 1. Giáo viên truy cập hệ thống ICS, chọn lớp học, vào tab "Bài tập và Kiểm tra".<br>🔹 2. Chọn chức năng thêm bài kiểm tra: Chọn khóa học và bài kiểm tra tương ứng để thêm vào lớp.<br>🔹 3. Giao bài kiểm tra: Giáo viên giao bài cho lớp, bài kiểm tra chuyển trạng thái từ "Chưa giao" sang "Đang đợi nộp bài", và đồng bộ sang ứng dụng Sakumi.<br>🔹 4. Học viên truy cập ứng dụng Sakumi, chọn khóa học cụ thể, vào tab kiểm tra, chọn bài kiểm tra cụ thể rồi làm bài (làm lần lượt các loại bài tập (30 câu hoặc tùy mỗi bài) như viết chữ Hán từ phiên âm và nghĩa, nối từ vựng với nghĩa tương ứng, sắp xếp thành câu hoàn chỉnh, điền từ vào chỗ trống, chọn câu trả lời đúng, chọn câu tiếng Nhật tương ứng với nghĩa tiếng Việt, nghe đoạn ghi âm và chọn đáp án đúng, đọc to từ được yêu cầu, đặt câu với từ cho trước, đặt câu với cấu trúc cho trước, nói đoạn văn gồm 3–5 câu, sau khi làm xong chuyển sang màn hình hiển thị kết quả).<br>🔹 5. Thu hồi bài kiểm tra (nếu cần): Ở trạng thái "Đã chấm", "Chưa chấm", hoặc "Đang đợi nộp bài", giáo viên có thể thu hồi bài kiểm tra, hệ thống sẽ reset hết tất cả những gì học viên đã làm và bài kiểm tra chuyển sang trạng thái "Chưa giao".<br>🔹 6. Chấm bài kiểm tra: Sau khi nhận kết quả từ ứng dụng Sakumi, giáo viên chấm bài tương tự quy trình chấm BTVN (xem trạng thái bài kiểm tra với 4 trạng thái: "Đã chấm", "Chưa chấm", "Đang đợi nộp bài", "Chưa giao"; lọc học viên, chấm điểm thang 10, nhận xét audio/file/text, sao chép nhận xét, tỉ lệ điểm số/tổng câu; có thể sửa lại nếu đã chấm; khi chấm xong chuyển trạng thái "Đã chấm" và hiển thị điểm trên Sakumi). Các cột thống kê bao gồm: điểm số, tên học viên, thời gian làm bài, thời gian nộp bài, và số câu đã bỏ qua. </div>|
    | **Điều kiện và kết quả** | <div align="justify">- Điều kiện: Bài kiểm tra phải được cấu hình sẵn trong hệ thống, giáo viên được phân công lớp, có học viên trong lớp.<br>- Kết quả: Bài kiểm tra được giao và đồng bộ, trạng thái cập nhật động (Chưa giao → Đang đợi nộp bài → Chưa chấm → Đã chấm), nếu thu hồi thì reset toàn bộ và quay về Chưa giao; điểm số và kết quả chấm được lưu trữ và đồng bộ sang Sakumi. </div>|
    | **Tương tác với Sakumi** | <div align="justify">- Hệ thống ICS đẩy bài kiểm tra và trạng thái sang ứng dụng Sakumi để học viên xem danh sách bài kiểm tra.<br>- Ứng dụng Sakumi gửi kết quả bài kiểm tra về hệ thống ICS để giáo viên chấm điểm.<br>- Nếu học viên chưa làm bài kiểm tra, ứng dụng Sakumi sẽ hiển thị nợ bài kiểm tra; nếu đã làm xong thì không hiển thị nữa. </div>|

