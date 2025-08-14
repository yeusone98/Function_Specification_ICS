# 📄 Tài liệu đặc tả chức năng ICS
---
## 1. Giới thiệu hệ thống ICS

<div style="text-align:justify">

ICS được xây dựng nhằm hỗ trợ <b>quản lý toàn diện các hoạt động giảng dạy</b> tại nhiều trung tâm đào tạo ngoại ngữ khác nhau. Hệ thống tập trung số hóa quy trình quản lý, tăng cường hiệu quả điều hành và đảm bảo tính thống nhất trong vận hành đào tạo tại các trung tâm thành viên.

</div>

### 1.1 Trung tâm áp dụng ICS

<div style="text-align:justify">
ICS hiện đang triển khai tại <b>6 trung tâm đào tạo ngoại ngữ</b>:
</div>

<!-- Bảng giữ nguyên như hiện tại -->

<div style="text-align:center">
<table style="margin-left:auto; margin-right:auto; width:100%; max-width:700px;">
  <thead>
    <tr>
      <th>Trung tâm</th>
      <th>Ngôn ngữ đào tạo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Betreux Deutsch</td>
      <td>Tiếng Đức</td>
    </tr>
    <tr>
      <td>Creatis Français</td>
      <td>Tiếng Pháp</td>
    </tr>
    <tr>
      <td>Creative English</td>
      <td>Tiếng Anh</td>
    </tr>
    <tr>
      <td>SaeChang</td>
      <td>Tiếng Hàn</td>
    </tr>
    <tr>
      <td>Hoa Ngữ Đắc Nhân</td>
      <td>Tiếng Trung</td>
    </tr>
    <tr>
      <td>Nhật Ngữ Sakumi</td>
      <td>Tiếng Nhật</td>
    </tr>
  </tbody>
</table>
</div>

### 1.2 Vai trò người dùng trong hệ thống

<div style="text-align:center">
  <table style="margin-left:auto; margin-right:auto; width:100%; max-width:700px;">
    <thead>
      <tr style="background-color: #4CAF50; color: #fff; text-align: center;">
        <th style="padding: 12px; width: 180px;">Vai trò</th>
        <th style="padding: 12px;">Mô tả chức năng chính</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:bold;">Master</td>
        <td>Người dùng cấp cao nhất, có toàn quyền truy cập và quản lý toàn bộ hệ thống, bao gồm cấu hình trung tâm, phân quyền, và giám sát tổng thể.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Admin</td>
        <td>Quản lý lớp học, học viên, giáo viên, bài học, lịch dạy, điểm danh, bài tập, kiểm tra, khảo sát, họp lớp và đánh giá chất lượng giảng dạy.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Curriculum Development</td>
        <td>Quản lý nội dung đào tạo: khóa học, bài học, cấp độ, tiêu chuẩn lớp, hướng dẫn giảng dạy và khảo sát đánh giá chất lượng học tập.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Teacher</td>
        <td>Xem và cập nhật lịch học, quản lý lớp được phân công, điểm danh, chấm bài, ghi chú buổi học, theo dõi học viên và truy cập tài liệu giảng dạy.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Trợ giảng</td>
        <td>Hỗ trợ giáo viên trong việc điểm danh, theo dõi sĩ số, hỗ trợ giao bài, và quan sát tiến độ học tập. Có quyền hạn giới hạn hơn so với giáo viên.</td>
      </tr>
    </tbody>
  </table>
</div>


### 1.3 Tính năng nổi bật
<div style="text-align:justify; max-width:800px; margin:auto;">
<ul>
  <li>Quản lý giảng dạy theo vai trò, phù hợp với nghiệp vụ vận hành thực tế.</li>
  <li>Theo dõi tiến độ học tập, điểm danh, bài tập và kiểm tra.</li>
  <li>Quản lý nội dung giảng dạy, lịch học, tiêu chuẩn lớp và khảo sát đánh giá.</li>
  <li>Tích hợp đầy đủ công cụ hỗ trợ vận hành lớp học từ lúc mở cho đến khi hoàn tất.</li>
</ul>
</div>


<div style="text-align:justify; max-width:800px; margin:auto; color:#d74444;">
🔐 <b> Mỗi vai trò chỉ được thao tác trong phạm vi chức năng được cấp quyền. </b>
</div>
---

## 2. Phạm vi hệ thống ICS

<div style="text-align:justify">

ICS là hệ thống quản lý toàn diện quy trình giảng dạy và vận hành tại các trung tâm ngoại ngữ. Hệ thống hỗ trợ đa vai trò, kết nối giữa giáo viên, trợ giảng, quản lý đào tạo, bộ phận học vụ, CSKH và tài chính. ICS giúp đảm bảo tính minh bạch, hiệu quả và nhất quán trong mọi khâu vận hành lớp học.

</div>

### 2.1 Phân hệ chức năng chính

<div style="text-align:center">
  <table style="margin-left:auto; margin-right:auto; width:100%; max-width:900px;">
    <thead>
      <tr style="background-color: #4CAF50; color: #fff; text-align: center;">
        <th style="padding: 12px; width: 220px;">Phân hệ</th>
        <th style="padding: 12px;">Chức năng chính</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:bold;">Lớp học</td>
        <td>Quản lý thông tin lớp, sĩ số, phân công giáo viên và trợ giảng, theo dõi trạng thái lớp theo từng buổi.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Lịch học</td>
        <td>Quản lý lịch dạy chi tiết, cập nhật điểm danh, trạng thái buổi học, tình trạng học viên.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Bài học</td>
        <td>Mở và quản lý bài học theo tiến độ, đánh dấu hoàn thành, theo dõi nội dung đã học và chưa học.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Bài tập & kiểm tra</td>
        <td>Giao bài, chấm bài, cho phép thiết lập lại bài làm và theo dõi tiến độ làm bài của học viên.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Tự học</td>
        <td>Truy cập tài liệu học tập, flashcard, bài luyện tập cá nhân theo chương trình đã phân phối.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Tiêu chuẩn lớp học</td>
        <td>Thiết lập chuẩn đầu ra, quy định về số buổi học, bài kiểm tra và điều kiện hoàn thành khóa học.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Đánh giá & khảo sát</td>
        <td>Gửi khảo sát định kỳ cho học viên/phụ huynh/giáo viên, tổng hợp kết quả để đánh giá chất lượng giảng dạy.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Họp lớp</td>
        <td>Ghi nhận nội dung họp lớp giữa admin và giáo viên, đánh giá tình hình học tập và đề xuất xử lý học viên yếu.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Chăm sóc học viên (CSKH)</td>
        <td>Ghi nhận tương tác, cảnh báo rủi ro, lịch sử xử lý vấn đề học vụ và báo cáo tình trạng học viên.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Học phí & hóa đơn</td>
        <td>Quản lý học phí, hóa đơn của từng học viên, đối soát thanh toán và trạng thái nợ phí theo lớp.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Ưu đãi & voucher</td>
        <td>Tạo và quản lý mã ưu đãi, theo dõi lượt sử dụng và trạng thái áp dụng vào học phí hoặc khóa học.</td>
      </tr>
      <tr>
        <td style="font-weight:bold;">Tài liệu & công cụ</td>
        <td>Quản lý kho tài liệu giảng dạy, công cụ hỗ trợ lớp học (PDF, link Google Drive, Quizlet, video,...).</td>
      </tr>
    </tbody>
  </table>
</div>

### 2.2 Phạm vi sử dụng

<div style="text-align:justify; max-width:800px; margin:auto;">
ICS được sử dụng bởi các nhóm người dùng nội bộ tại trung tâm, bao gồm:
<ul>
  <li><b>Master</b>: Quản lý cấu hình hệ thống, phân quyền, báo cáo tổng hợp liên trung tâm.</li>
  <li><b>Admin</b>: Quản lý lớp học, học viên, lịch học, báo cáo học tập, chăm sóc học viên và tài chính.</li>
  <li><b>Curriculum Development</b>: Thiết kế chương trình đào tạo, tạo bài học, tiêu chuẩn lớp và tài liệu.</li>
  <li><b>Teacher</b>: Giảng dạy, điểm danh, giao bài/chấm bài, nhận xét học viên theo từng buổi.</li>
  <li><b>Trợ giảng</b>: Hỗ trợ theo dõi lớp học, điểm danh, quan sát tình hình học viên và hỗ trợ giảng dạy.</li>
</ul>
</div>

<div style="text-align:justify; max-width:800px; margin:auto; color:#d74444;">
📌 <b>ICS là hệ thống vận hành nội bộ. Học viên không trực tiếp thao tác trên ICS — thông tin của họ được quản lý bởi bộ phận đào tạo và CSKH. </b>
</div>
---

## 3. Các chức năng chính - Vai trò admin

### 3.1 Hiển thị thống kê chi tiết từng lớp học { #toc-3-1-2 }

??? book "Hiển thị thống kê chi tiết từng lớp học"
    | Trường dữ liệu            | Nội dung |
    |---------------------------|---------|
    | **Tên chức năng**         | Hiển thị thống kê chi tiết từng lớp học |
    | **Vai trò**               | Giáo viên, Trợ giảng, Support |
    | **Mô tả**                 | Giao diện chi tiết cho một lớp cụ thể, hiển thị trung bình các chỉ số học tập và danh sách học viên đang theo học. |
    | **Giao diện liên quan**   | Giao diện tổng quan lớp – phần hiển thị sau khi chọn một lớp cụ thể |
    | **Luồng thao tác chính**  | 1. Người dùng chọn một lớp từ danh sách lớp đang phụ trách.<br>2. Hệ thống hiển thị thống kê chi tiết của lớp. |
    | **Điều kiện**             | Lớp có học viên đang học. |
    | **Kết quả hiển thị**      | Gồm 2 phần chính:<br>**(1) Thống kê tổng quan lớp:**<br>&emsp;• **Sĩ số** – Số học viên đang học / tổng học viên.<br>&emsp;• **Đi học** – Trung bình tỷ lệ điểm danh của học viên.<br>&emsp;• **Bài tập về nhà** – Trung bình phần trăm hoàn thành bài tập.<br>&emsp;• **Điểm kiểm tra** – Điểm trung bình của các bài kiểm tra (nếu có).<br>&emsp;• **Điểm BTVN** – Trung bình điểm của bài tập về nhà đã được chấm.<br>&emsp;• **Thời gian học** – Trung bình thời lượng học của học viên.<br><br>**(2) Danh sách học viên:**<br>&emsp;• Họ tên học viên<br>&emsp;• Mã học viên<br>&emsp;• Email<br>&emsp;• Ghi chú bất thường nếu có (ví dụ học kém, cảnh báo nghỉ học, chưa đóng học phí v.v.)|
    | **Cách tính toán**        | Chỉ lấy dữ liệu từ học viên đang học (trạng thái hoạt động). Các giá trị được làm tròn tới 2 chữ số thập phân. |
    | **Trường hợp không có học viên** | Hiển thị thông báo “Không có học viên đang theo học trong lớp này.” và ẩn biểu đồ thống kê. |

### 3.1.2 Chức năng hiển thị thống kê chi tiết học viên { #toc-3-1-2 }

??? book "Hiển thị thống kê chi tiết học viên"
    | Trường dữ liệu            | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Hiển thị thống kê chi tiết học viên |
    | **Vai trò**               | Giáo viên, trợ giảng, support |
    | **Mô tả**                 | Giao diện hiển thị chi tiết thông tin học tập của từng học viên trong lớp: trạng thái học, kết quả từng bài học, điểm số và thời gian học. |
    | **Giao diện liên quan**   | Giao diện "Tổng quan lớp" – khi chọn học viên trong danh sách lớp |
    | **Luồng thao tác chính**  | 1. Giáo viên chọn lớp cần xem thống kê.<br>2. Danh sách học viên trong lớp được hiển thị.<br>3. Giáo viên có thể dùng ô tìm kiếm để lọc học viên theo tên.<br>4. Chọn một học viên để xem chi tiết thống kê học tập. |
    | **Kết quả hiển thị**      | **(1) Chức năng tìm kiếm học viên:**<br>&emsp;• Tìm kiếm theo **tên học viên**. <br>**(2) Trạng thái bài học gần đây:**<br>&emsp;• Đi học và làm BTVN<br>&emsp;• Đi học nhưng không làm BTVN<br>&emsp;• Vắng học nhưng làm BTVN<br>&emsp;• Vắng học và không làm BTVN<br><br>**(3) Trạng thái học viên:**<br>&emsp;• Đang học<br>&emsp;• Hoàn thành<br>&emsp;• Dự thính<br>&emsp;• Nghỉ học<br>&emsp;• Chỉ xem<br>&emsp;• Kiểm thử<br>&emsp;• Xóa<br><br>**(4) Trạng thái điểm danh:**<br>&emsp;• Có mặt<br>&emsp;• Vào trễ<br>&emsp;• Ra sớm<br>&emsp;• Vào trễ & ra sớm<br>&emsp;• Nghỉ có phép (cp)<br>&emsp;• Nghỉ không phép (kp)<br>&emsp;• Chưa điểm danh<br><br>**(5) Học phí:**<br>&emsp;• Đã thanh toán / Chưa thanh toán<br><br>**(6) Thời gian học:**<br>&emsp;• Tính trung bình từ các hoạt động: BTVN, từ vựng, nghe, học flashcard, duyệt, ngữ pháp, đọc, lật flashcard, luyện nhớ<br><br>**(7) Chỉ số học tập khác:**<br>&emsp;• Điểm kiểm tra<br>&emsp;• Điểm BTVN<br>&emsp;• Tỷ lệ hoàn thành BTVN<br>&emsp;→ **Tất cả chỉ số này được tính trung bình từ các bài học đã tham gia.** |
    | **Trường hợp không có dữ liệu** | Hiển thị trạng thái rỗng cho từng thành phần và thông báo “Chưa có dữ liệu học tập”. |


#### 3.1.3 Chức năng hiển thi chi tiết bài học (Đã học) { #toc-3-1-3 }
??? book "Hiển thị chi tiết bài học (Đã học)"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Hiển thị chi tiết bài học (Đã học) |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Cho phép giáo viên xem chi tiết thông tin của một buổi học đã diễn ra, bao gồm kết quả đi học, làm bài tập, điểm số và ghi chú của từng học viên. Ngoài ra, giáo viên cũng có thể nhập nhận xét lớp, ghi chú cho Support và ghi chú cho giáo viên kế tiếp nếu buổi học đã được ghi chú trước đó. |
    | **Giao diện liên quan**     | Trang chi tiết bài học (truy cập từ tab "Bài học" sau khi nhấn vào một buổi học đã diễn ra trong danh sách bài học) |
    | **Luồng thao tác chính**    | 1. Giáo viên vào giao diện lớp học và chuyển sang tab “Bài học”.<br>2. Nhấn vào tên một bài học đã học trong danh sách bên phải.<br>3. Hệ thống hiển thị chi tiết bài học gồm thông tin học viên và các ghi chú nếu có.<br>4. Nếu buổi học đã có ghi chú từ trước, hệ thống hiển thị các vùng nhập:<br>&emsp;- Nhận xét lớp<br>&emsp;- Ghi chú của giáo viên cho Support<br>&emsp;- Ghi chú của giáo viên cho giáo viên tiếp theo.<br>5. Giáo viên có thể xem bảng thông tin chi tiết của từng học viên. |
    | **Điều kiện**               | Buổi học đã diễn ra. Nếu chưa học, sẽ hiển thị giao diện khác. Nếu buổi học đã được ghi chú, hệ thống mới hiển thị vùng nhập nhận xét và các loại ghi chú. |
    | **Kết quả hiển thị**        | Giao diện gồm 2 phần chính:<br><br>**(1) Thông tin ghi chú lớp học (nếu đã ghi):**<br>&emsp;• Nhận xét của giáo viên về lớp<br>&emsp;• Ghi chú gửi Support<br>&emsp;• Ghi chú gửi giáo viên kế tiếp<br><br>**(2) Danh sách học viên và kết quả:**<br>&emsp;• Số thứ tự<br>&emsp;• Họ và tên học viên<br>&emsp;• Trạng thái đi học (Có mặt, Nghỉ có phép, Đi trễ, Ra sớm, ...)<br>&emsp;• Điểm bài tập về nhà<br>&emsp;• Ghi chú (hiển thị biểu tượng, nhấn để xem popup chi tiết nếu có) |
    | **Trường hợp không có dữ liệu** | Bảng danh sách học viên vẫn hiển thị, nhưng không có điểm hoặc trạng thái nộp bài. Các vùng ghi chú sẽ không hiển thị nếu chưa có ghi chú nào được nhập. |

#### 3.1.4 Chức năng hiển thi chi tiết bài học (Chưa học) { #toc-3-1-4 }
??? book "Hiển thị chi tiết bài học (Chưa học)"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Trường hợp**              | Hiển thị chi tiết bài học (Chưa học) |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Cho phép giáo viên xem nội dung chi tiết của một buổi học chưa diễn ra, bao gồm phần dặn dò trước buổi học và ghi chú từ giáo viên nếu đã có. Tại giao diện này, giáo viên có thể đánh dấu đã đọc ghi chú để xác nhận trước khi bắt đầu buổi học. |
    | **Giao diện liên quan**     | Trang chi tiết bài học (truy cập từ tab "Bài học" sau khi nhấn vào một buổi học chưa học trong danh sách bài học) |
    | **Luồng thao tác chính**    | 1. Giáo viên vào giao diện lớp học và chuyển sang tab “Bài học”.<br>2. Nhấn vào tên một bài học chưa học trong danh sách bên phải.<br>3. Hệ thống hiển thị nội dung dặn dò trước buổi học (dưới dạng checklist từng dòng).<br>4. Nếu buổi học đã có ghi chú, hệ thống hiển thị thêm các vùng:<br>&emsp;- Ghi chú của giáo viên gửi Support<br>&emsp;- Ghi chú của giáo viên gửi giáo viên tiếp theo.<br>5. Giáo viên cần tích vào checkbox “Tôi đã đọc ghi chú” để kích hoạt nút “Bắt đầu buổi học”. |
    | **Điều kiện**               | Buổi học chưa được bắt đầu (trạng thái “Chưa học”). Nếu có ghi chú lớp học từ trước, hệ thống sẽ hiển thị thêm nội dung ghi chú và ô xác nhận đã đọc. |
    | **Kết quả hiển thị**        | Giao diện hiển thị gồm:<br><br>**(1) Dặn dò trước buổi học:**<br>&emsp;• Danh sách các nội dung cần lưu ý được trình bày theo dạng checklist (đánh số thứ tự).<br><br>**(2) Ghi chú (nếu có):**<br>&emsp;• Ghi chú từ giáo viên gửi cho team Support<br>&emsp;• Ghi chú từ giáo viên gửi cho giáo viên kế tiếp<br>&emsp;• Các vùng ghi chú chỉ hiển thị nếu buổi học đã được ghi chú từ trước.<br><br>**(3) Xác nhận đã đọc ghi chú:**<br>&emsp;• Checkbox “Tôi đã đọc ghi chú” giúp kích hoạt nút “Bắt đầu buổi học”. Nếu chưa tích chọn, nút này bị khóa. |
    | **Trường hợp không có dữ liệu** | Nếu chưa có ghi chú nào, hệ thống chỉ hiển thị phần dặn dò và checkbox xác nhận. Giao diện ghi chú sẽ không xuất hiện. |


#### 3.1.5 Chức năng hiển thị chi tiết bài học (Đã bắt đầu - chưa điểm danh) { #toc-3-1-5 }

??? book "Hiển thị chi tiết bài học (Đã bắt đầu - chưa điểm danh)"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Trường hợp**              | Hiển thị chi tiết bài học (Đã bắt đầu - chưa điểm danh) |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Cho phép giáo viên truy cập vào giao diện chi tiết của một buổi học đã được mở nhưng chưa thực hiện điểm danh. Giao diện chủ yếu hiển thị tên buổi học, trạng thái bài học và nút chuyển sang màn hình điểm danh. |
    | **Giao diện liên quan**     | Trang chi tiết bài học (truy cập từ tab "Bài học" khi chọn một buổi học đã bắt đầu nhưng chưa điểm danh) |
    | **Luồng thao tác chính**    | 1. Giáo viên vào lớp và chọn tab “Bài học”.<br>2. Nhấn vào một buổi học có trạng thái “Đã bắt đầu học” (nhưng chưa điểm danh) trong danh sách.<br>3. Hệ thống hiển thị giao diện thông tin buổi học kèm trạng thái và nút “Vào điểm danh”.<br>4. Giáo viên nhấn “Vào điểm danh” để chuyển sang giao diện thực hiện điểm danh. |
    | **Điều kiện**               | Buổi học đã bắt đầu nhưng chưa điểm danh. Không hiển thị các phần dặn dò hay ghi chú. |
    | **Kết quả hiển thị**        | Giao diện hiển thị:<br>• Tên bài học<br>• Trạng thái: **“Bài học đã mở”**<br>• Nút **“Vào điểm danh”** nằm ở giữa màn hình.<br>**Lưu ý:** Giao diện này không hiển thị bảng học viên, dặn dò hay ghi chú, chỉ đóng vai trò trung gian chuyển tiếp. |
    | **Trường hợp không có dữ liệu** | Nếu bài học không ở trạng thái “đã bắt đầu”, giao diện sẽ hiển thị theo dạng tương ứng khác (chưa học hoặc đã học). |

#### 3.1.6 Chức năng hiển thị chi tiết bài học chưa hoàn thành (Đã điểm danh) { #toc-3-1-6 }

??? book "Hiển thị chi tiết bài học chưa hoàn thành (Đã điểm danh)"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Trường hợp**              | Hiển thị chi tiết bài học chưa hoàn thành (Đã điểm danh) |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Hiển thị giao diện trung gian của một buổi học đã bắt đầu và đã điểm danh, nhưng chưa được hoàn tất. Tại đây, giáo viên sẽ thực hiện bước cuối cùng là nhấn nút “Hoàn thành buổi học” để chuyển sang màn hình kết thúc buổi học. |
    | **Giao diện liên quan**     | Trang chi tiết bài học (truy cập từ tab “Bài học” sau khi chọn một buổi học có trạng thái “Đã điểm danh nhưng chưa hoàn thành”) |
    | **Luồng thao tác chính**    | 1. Giáo viên truy cập vào lớp học và chuyển sang tab “Bài học”.<br>2. Nhấn vào một buổi học đã điểm danh nhưng chưa hoàn thành trong danh sách bài học.<br>3. Hệ thống hiển thị giao diện chi tiết với tiêu đề bài học, trạng thái “Bài học đã mở”, và nút “Hoàn thành buổi học”.<br>4. Giáo viên nhấn “Hoàn thành buổi học” để chuyển sang màn hình hoàn thành buổi học. |
    | **Điều kiện**               | Buổi học đã đến thời gian bắt đầu và đã được điểm danh, nhưng chưa hoàn thành. |
    | **Kết quả hiển thị**        | Giao diện gồm:<br>• Tiêu đề bài học<br>• Trạng thái: “Bài học đã mở”<br>• Nút **“Hoàn thành buổi học”** để tiếp tục sang bước màn hình hoàn thành buổi học<br><br>**Không hiển thị dữ liệu học viên, điểm số, ghi chú hay dặn dò tại bước này.** |
    | **Trường hợp không có dữ liệu** | Nếu buổi học chưa được điểm danh hoặc đã hoàn tất, hệ thống sẽ không hiển thị giao diện này. |


#### 3.1.7 Chức năng hiển thị giao diện điểm danh buổi học { #toc-3-1-7}

??? book "Hiển thị giao diện điểm danh buổi học"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Hiển thị giao diện điểm danh buổi học |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Hiển thị giao diện điểm danh của một buổi học đã được bắt đầu, sau khi giáo viên nhấn vào nút "Bắt đầu buổi học" hoặc "Điểm danh". Tại đây, hệ thống liệt kê danh sách học viên cùng các trường để giáo viên thực hiện điểm danh và ghi chú lớp. |
    | **Giao diện liên quan**     | Trang điểm danh buổi học (truy cập từ tab “Bài học” khi giáo viên nhấn vào nút “Bắt đầu buổi học” hoặc “Điểm danh”) |
    | **Luồng thao tác chính**    | 1. Giáo viên chuyển đến tab “Bài học” trong lớp học.<br>2. Nhấn vào một buổi học có trạng thái “Chưa học” và nhấn “Bắt đầu buổi học” hoặc “Điểm danh”.<br>3. Hệ thống hiển thị giao diện điểm danh, bao gồm danh sách học viên và khu vực nhập ghi chú lớp. |
    | **Điều kiện**               | Buổi học đã đến thời gian bắt đầu, chưa hoàn thành và chưa ghi chú cuối buổi học. |
    | **Kết quả hiển thị**        | Giao diện gồm:<br>• Tiêu đề bài học<br>• Bảng danh sách học viên với các cột: Số thứ tự, Họ tên, Trạng thái điểm danh (dropdown)<br>• Khu vực nhập **“Ghi chú cho lớp học”** (áp dụng chung cho toàn bộ học viên)<br>• Checkbox **“Không có dặn dò cho học viên”**<br>• Nút hành động: **“Kết thúc buổi học”** (bị vô hiệu nếu chưa nhập thông tin điểm danh hoặc chưa thao tác hợp lệ) |
    | **Trường hợp không có dữ liệu** | Nếu lớp không có học viên, bảng danh sách sẽ trống nhưng hệ thống vẫn hiển thị giao diện điểm danh với ghi chú lớp. |


#### 3.1.8 Chức năng hiển thị giao diện hoàn thành buổi học { #toc-3-1-8}

??? book "Hiển thị giao diện hoàn thành buổi học"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Hiển thị giao diện hoàn thành buổi học |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Hiển thị giao diện để giáo viên nhập các loại ghi chú tổng kết cho buổi học, sau khi đã thực hiện điểm danh. Đây là bước cuối cùng trước khi hoàn tất toàn bộ buổi học. |
    | **Giao diện liên quan**     | Trang hoàn thành buổi học (truy cập sau khi nhấn “Hoàn thành buổi học” từ màn hình điểm danh) |
    | **Luồng thao tác chính**    | 1. Giáo viên chuyển đến tab “Bài học” trong lớp.<br>2. Nhấn vào bài học đã bắt đầu và đã điểm danh.<br>3. Nhấn “Hoàn thành buổi học” để mở giao diện này.<br>4. Hệ thống hiển thị các khối nhập ghi chú.<br>5. Sau khi hoàn tất, giáo viên có thể nhấn “Hoàn thành buổi học” để xác nhận kết thúc. |
    | **Điều kiện**               | Buổi học đã được bắt đầu và đã thực hiện điểm danh. |
    | **Kết quả hiển thị**        | Giao diện gồm các thành phần:<br><br>**(1) Danh sách học viên** với các cột:<br>&emsp;• STT<br>&emsp;• Tên học viên<br>&emsp;• Ghi chú cho học viên gửi Support (trường nhập riêng cho từng học viên)<br>&emsp;• Ghi chú cho học viên gửi chính học viên đó (trường nhập riêng cho từng học viên)<br><br>**(2) Ghi chú tổng kết lớp học**:<br>&emsp;• Ghi chú của giáo viên gửi cho Support (text area + checkbox “Không có dặn dò cho Team Support”)<br>&emsp;• Ghi chú của giáo viên gửi cho giáo viên kế tiếp (text area + checkbox “Không có dặn dò cho giáo viên”)<br><br>**(3) Nút hành động:**<br>&emsp;• Nút “Hoàn thành buổi học” ở cuối trang (bị vô hiệu khi chưa nhập ghi chú hoặc chọn đủ điều kiện). |
    | **Trường hợp không có dữ liệu** | Nếu lớp không có học viên, hệ thống vẫn hiển thị các khối ghi chú tổng kết, nhưng phần danh sách học viên sẽ trống. |


#### 3.1.9 Chức năng hiển thị tổng quan bài tập về nhà và kiểm tra { #toc-3-1-9}

??? book "Hiển thị tổng quan bài tập và kiểm tra"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Hiển thị tổng quan bài tập và kiểm tra |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Chức năng giúp giáo viên theo dõi toàn bộ danh sách bài tập về nhà và bài kiểm tra của học viên theo từng bài học cụ thể. Giao diện gồm hai tab: **Bài tập về nhà** và **Kiểm tra**, với khả năng chuyển đổi linh hoạt. Mỗi bài được hiển thị với trạng thái cụ thể (chưa giao / chưa chấm / đã chấm), kèm theo số lượng học viên đã làm bài, tỷ lệ hoàn thành và điểm số chi tiết sau khi chấm. |
    | **Giao diện liên quan**     | - Màn hình “Bài tập và Kiểm tra”<br>- Tab “Bài tập về nhà”<br>- Tab “Kiểm tra” |
    | **Luồng thao tác chính**    | **1. Truy cập giao diện:**<br>&emsp;a. Giáo viên chọn “Bài tập và Kiểm tra” từ sidebar.<br>&emsp;b. Giao diện mặc định hiển thị tab “Bài tập về nhà”. Có thể chuyển sang tab “Kiểm tra”.<br><br>**2. Giao diện danh sách bài:**<br>&emsp;• Số thứ tự<br>&emsp;• Tiêu đề bài học<br>&emsp;• Trạng thái bài: “Chưa giao”, “Chưa chấm”, “Đã chấm”<br>&emsp;• Số lượng học viên đã làm bài<br>&emsp;• Tỷ lệ hoàn thành<br>&emsp;• Nút xem chi tiết (>)<br><br>**3. Khi click vào từng bài:**<br>&emsp;a. **BTVN – chưa giao:** Hiển thị tiêu đề + dòng trạng thái “Bài học chưa mở” (màu cam)<br>&emsp;b. **Kiểm tra – chưa giao:** Hiển thị nút “Giao bài” (màu hồng nhạt)<br>&emsp;c. **Đã giao:** Hiển thị:<br>&emsp;&emsp;- Tiêu đề bài học<br>&emsp;&emsp;- Bảng học viên gồm: Tên, Điểm số, Thời gian làm bài, Trạng thái nộp bài (“Chưa có” / “Đã nộp”), Số câu bỏ qua<br>&emsp;d. **Kiểm tra đã giao:** Có thêm nút “Thu hồi” |
    | **Điều kiện**               | - Giáo viên phải được phân công lớp học.<br>- Chỉ có thể xem chi tiết bài đã giao. |
    | **Kết quả hiển thị**        | - Hai tab rõ ràng: “Bài tập về nhà” và “Kiểm tra”<br>- Danh sách bài thể hiện trạng thái, số lượng học viên, % hoàn thành<br>- Khi chọn bài:<br>&emsp;• Nếu chưa giao:<br>&emsp;&emsp;- BTVN: “Bài học chưa mở”<br>&emsp;&emsp;- Kiểm tra: nút “Giao bài”<br>&emsp;• Nếu đã giao:<br>&emsp;&emsp;- Hiển thị chi tiết học viên<br>&emsp;&emsp;- Nếu là kiểm tra: có thêm nút “Thu hồi”<br>- Ngay trong tiêu đề tab BTVN / Kiểm tra: hiển thị số lượng bài chưa chấm đã có học viên nộp |
    | **Trường hợp không có dữ liệu** | - Không có học viên làm bài: các cột để trống hoặc “Chưa nộp”<br>- Không có bài tập / kiểm tra nào: hiển thị danh sách trống hoặc thông báo phù hợp |

### 3.2 Quản lý lớp học (Teacher)

#### 3.2.1 Chức năng quản lý bài học (Chưa bắt đầu) { #toc-3-2-1}

??? book "Quản lý bài học (Trạng thái: Chưa bắt đầu)"

    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Quản lý bài học (Chưa bắt đầu) |
    | **Vai trò**                     | Giáo viên |
    | **Mô tả**                       | Chức năng cho phép giáo viên thực hiện toàn bộ quy trình quản lý một buổi học từ trạng thái chưa bắt đầu cho đến khi hoàn tất. Quy trình bao gồm các bước: xác nhận các ghi chú dặn dò trước buổi học, điểm danh học viên, ghi chú tổng cho lớp học, ghi chú riêng cho từng học viên, và xác nhận hoàn thành buổi học. Tất cả dữ liệu được lưu trữ xuyên suốt nhằm hỗ trợ giáo viên kế tiếp cũng như bộ phận hỗ trợ kỹ thuật nếu cần thiết. |
    | **Giao diện liên quan**         | - Màn hình Tổng quan lớp<br>- Tab “Bài học” trong lớp<br>- Màn hình hiển thị dặn dò trước buổi học<br>- Màn hình điểm danh học viên<br>- Màn hình hoàn tất buổi học và ghi chú chi tiết |
    | **Luồng thao tác chính**        | **1. Truy cập lớp học và chọn buổi học cần dạy:**<br> a. Giáo viên chọn lớp cần dạy từ màn hình “Tổng quan”.<br> b. Trong lớp học, chọn tab “Bài học”.<br> c. Nhấn vào một bài học có trạng thái “Chưa học”.<br><br>**2. Xác nhận ghi chú dặn dò trước buổi học:**<br> a. Hệ thống hiển thị các ghi chú dặn dò, ví dụ: nhắc BTVN, nội dung trọng tâm, học viên vắng, v.v.<br> b. Giáo viên tích vào ô “Tôi đã đọc ghi chú” và nhấn **“Bắt đầu buổi học”**.<br> c. Hệ thống hiển thị popup xác nhận: *“Nhấn 'Xác nhận' để bắt đầu buổi học”*, giáo viên nhấn **Xác nhận**.<br><br>**3. Điểm danh học viên:**<br> a. Hệ thống hiển thị danh sách học viên.<br> b. Giáo viên chọn trạng thái điểm danh (Có mặt, Nghỉ phép, Vào trễ, ...).<br> c. Nhập ghi chú chung cho lớp nếu có.<br> d. Nhấn **“Kết thúc buổi học”**, hệ thống hiển thị popup yêu cầu xác nhận.<br><br>**4. Hoàn tất buổi học:**<br> a. Giao diện hiển thị lại danh sách học viên để nhập ghi chú riêng:<br>  - Ghi chú cho học viên gửi giáo viên kế tiếp<br>  - Ghi chú gửi team Support<br> b. Ở cuối trang có 2 khối nhập ghi chú tổng (gửi Support và giáo viên tiếp theo).<br> c. Có thể chọn “Không có ghi chú gì” nếu không cần ghi chú.<br> d. Nhấn **“Hoàn thành buổi học”**, hệ thống xác nhận hoàn tất. |
    | **Điều kiện**                   | - Buổi học phải ở trạng thái "Chưa học"<br>- Giáo viên phải được phân công lớp<br>- Phải xác nhận đã đọc ghi chú mới được bắt đầu<br>- Không thể bỏ qua bước điểm danh hoặc ghi chú trước khi hoàn thành |
    | **Kết quả hiển thị**            | - Trạng thái buổi học được cập nhật: **Chưa bắt đầu → Đã mở → Đã hoàn tất**<br>- Ghi nhận toàn bộ ghi chú và trạng thái học viên<br>- Sau khi hoàn tất, hiển thị màn hình tổng kết gồm:<br> • Tên bài học<br> • Ghi chú lớp (tổng quan)<br> • Ghi chú gửi support<br> • Ghi chú gửi giáo viên kế tiếp<br> • Danh sách học viên và các thông tin đi kèm |
    | **Trường hợp không có dữ liệu** | - Nếu lớp không có học viên: hiển thị “Không có học viên trong lớp học này”.<br>- Nếu chưa tick xác nhận đã đọc ghi chú: không thể bắt đầu buổi học.<br>- Nếu không nhập ghi chú: có thể tick “Không có ghi chú gì”. |


#### 3.2.2 Chức năng quản lý bài học (Đã bắt đầu nhưng chưa điểm danh) { #toc-3-2-2 }

??? book "Quản lý bài học (Trạng thái: Đã bắt đầu nhưng chưa điểm danh)"

    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Quản lý bài học (Đã bắt đầu nhưng chưa điểm danh) |
    | **Vai trò**                     | Giáo viên |
    | **Mô tả**                       | Chức năng cho phép giáo viên tiếp tục quy trình quản lý buổi học đã được bắt đầu trước đó nhưng chưa thực hiện điểm danh. Giáo viên sẽ thao tác từ bước điểm danh đến khi hoàn tất buổi học, bao gồm: cập nhật trạng thái điểm danh của học viên, ghi chú tổng cho lớp, ghi chú chi tiết từng học viên và ghi chú tổng buổi học. Mọi dữ liệu đều được lưu để hỗ trợ buổi học tiếp theo và bộ phận support nếu cần. |
    | **Giao diện liên quan**         | - Màn hình Tổng quan lớp<br>- Tab “Bài học” trong lớp<br>- Màn hình điểm danh học viên<br>- Màn hình hoàn tất buổi học và ghi chú chi tiết |
    | **Luồng thao tác chính**        | **1. Truy cập lớp học và chọn buổi học đã bắt đầu:**<br> a. Giáo viên chọn lớp cần dạy từ màn hình “Tổng quan”.<br> b. Trong lớp, chuyển sang tab “Bài học”.<br> c. Nhấn vào một bài học có trạng thái “Đã bắt đầu học” (chưa điểm danh).<br> d. Hệ thống hiển thị giao diện thông tin bài học và nút **“Điểm danh”**.<br> e. Giáo viên nhấn “Điểm danh”, hệ thống hiển thị popup xác nhận: *“Nhấn xác nhận để tiếp tục buổi học”* → Nhấn **Xác nhận** để chuyển tiếp.<br><br>**2. Điểm danh học viên:**<br> a. Hệ thống hiển thị danh sách học viên.<br> b. Giáo viên chọn trạng thái điểm danh cho từng học viên (Có mặt, Nghỉ phép, Vào trễ, ...).<br> c. Nhập ghi chú chung cho lớp nếu cần.<br> d. Nhấn **“Kết thúc buổi học”**, hệ thống hiển thị popup: *“Giáo viên vui lòng tắt record Google Meet trước khi kết thúc buổi học”* → Nhấn **Xác nhận** để tiếp tục.<br><br>**3. Hoàn tất buổi học:**<br> a. Hệ thống hiển thị danh sách học viên để nhập ghi chú:<br>  - Ghi chú gửi giáo viên kế tiếp<br>  - Ghi chú gửi team Support<br> b. Đồng thời có 2 ô ghi chú tổng:<br>  - Gửi giáo viên kế tiếp<br>  - Gửi bộ phận Support<br> c. Nếu không có ghi chú, có thể tick “Không có ghi chú gì”.<br> d. Nhấn **“Hoàn thành buổi học”**, hệ thống xác nhận hoàn tất. |
    | **Điều kiện**                   | - Buổi học đang ở trạng thái “Đã mở”<br>- Giáo viên được phân công giảng dạy buổi học<br>- Buổi học chưa được điểm danh trước đó |
    | **Kết quả hiển thị**            | - Dữ liệu điểm danh của từng học viên được lưu và hiển thị ở các giao diện liên quan<br>- Ghi chú tổng cho lớp được lưu từ bước điểm danh<br>- Ghi chú riêng từng học viên và tổng buổi học được lưu sau khi hoàn tất<br>- Các popup xác nhận đảm bảo kiểm tra kỹ trước khi chuyển trạng thái<br>- Màn hình tổng kết hiển thị:<br> • Tên bài học<br> • Nhận xét lớp<br> • Ghi chú gửi support<br> • Ghi chú gửi giáo viên kế tiếp<br> • Bảng học viên: số thứ tự, họ tên, trạng thái đi học, số BTVN, ghi chú riêng |
    | **Trường hợp không có dữ liệu** | - Lớp không có học viên: hiển thị thông báo “Không có học viên trong lớp học này”<br>- Không có ghi chú: giáo viên tick chọn “Không có ghi chú gì”<br>- Nếu chưa điểm danh học viên nào: hệ thống vẫn cho phép lưu sau khi xác nhận |



#### 3.2.3 Chức năng quản lý bài học (Đã điểm danh – Chưa hoàn tất) { #toc-3-2-3 }

??? book "Quản lý bài học (Trạng thái: Đã điểm danh – Chưa hoàn tất)"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Quản lý bài học (Đã điểm danh – Chưa hoàn tất) |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Chức năng cho phép giáo viên hoàn thiện buổi học sau khi đã điểm danh xong. Giáo viên có thể bổ sung ghi chú riêng cho từng học viên, ghi chú tổng quan cho lớp học để hỗ trợ bộ phận support và giáo viên tiếp theo. Việc này đảm bảo thông tin được duy trì liền mạch, đầy đủ sau buổi học. Giáo viên có thể hoàn tất buổi học bằng cách nhấn “Hoàn thành buổi học” từ danh sách bài học (nút này chỉ hiện khi đã hoàn thành điểm danh). |
    | **Giao diện liên quan**     | - Màn hình Tổng quan<br>- Giao diện lớp học → tab “Bài học”<br>- Màn hình hoàn tất buổi học và ghi chú chi tiết |
    | **Luồng thao tác chính**    | **1. Truy cập lớp học và chọn buổi học đã điểm danh:**<br>&emsp;a. Giáo viên chọn một lớp cụ thể từ màn hình “Tổng quan”.<br>&emsp;b. Trong lớp học, chuyển sang tab “Bài học”.<br>&emsp;c. Nhấn vào một bài học có trạng thái “Đã điểm danh – Chưa hoàn tất”.<br>&emsp;d. Hệ thống hiển thị thông tin bài học và nút **“Hoàn thành buổi học”**.<br>&emsp;e. Giáo viên nhấn “Hoàn thành buổi học”, hệ thống hiển thị popup xác nhận → nhấn **Xác nhận** để chuyển sang giao diện hoàn tất.<br><br>**2. Hoàn tất buổi học:**<br>&emsp;a. Hệ thống hiển thị lại danh sách học viên với 2 trường ghi chú cho từng học viên:<br>&emsp;&emsp;- Ghi chú gửi giáo viên kế tiếp<br>&emsp;&emsp;- Ghi chú gửi bộ phận support<br>&emsp;b. Cuối trang có 2 vùng nhập ghi chú tổng:<br>&emsp;&emsp;- Gửi giáo viên kế tiếp<br>&emsp;&emsp;- Gửi team Support<br>&emsp;c. Nếu không có ghi chú, giáo viên có thể tick “Không có ghi chú gì”.<br>&emsp;d. Nhấn **“Hoàn thành buổi học”**, hệ thống hiển thị hộp thoại xác nhận và lưu toàn bộ dữ liệu. |
    | **Điều kiện**               | - Buổi học phải ở trạng thái “Đã điểm danh – Chưa hoàn tất”.<br>- Giáo viên được phân công giảng dạy.<br>- Phải hoàn tất điểm danh mới thấy nút “Hoàn thành buổi học”. |
    | **Kết quả hiển thị**        | - Ghi chú tổng và ghi chú riêng được lưu vào hệ thống.<br>- Sau khi hoàn tất, hiển thị màn hình tổng kết gồm:<br> • Tên bài học<br> • Ghi chú gửi support<br> • Ghi chú gửi giáo viên kế tiếp<br> • Nhận xét tổng quan<br> • Bảng thông tin học viên (STT, Họ tên, Trạng thái đi học, BTVN đã làm, Ghi chú nếu có) |
    | **Trường hợp không có dữ liệu** | - Nếu lớp không có học viên: hiển thị “Không có học viên trong lớp học này”.<br>- Nếu không có ghi chú: có thể tick “Không có ghi chú gì”. |







#### 3.2.4 Chức năng chấm điểm bài tập về nhà { #toc-3-2-4 }
??? book "Chấm điểm bài tập về nhà"

    | Trường            | Nội dung |
    |-------------------|---------|
    | **Tên chức năng** | Chấm điểm bài tập về nhà |
    | **Vai trò**       | Giáo viên |
    | **Mô tả**         | Giáo viên thực hiện chấm điểm bài tập về nhà cho từng học viên. Giao diện cho phép xem chi tiết từng câu trả lời, chấm điểm trên thang điểm 10, ghi nhận xét bằng văn bản, ghi âm hoặc đính kèm file. Ngoài ra có thể lọc học viên hoặc lọc danh sách câu hỏi theo trạng thái đã/chưa chấm để tiện theo dõi và thao tác. |
    | **Giao diện liên quan** | - Tab “Bài tập và kiểm tra”<br>- Giao diện danh sách bài tập về nhà<br>- Giao diện chấm điểm chi tiết bài tập<br>- Popup ghi âm<br>- Popup đính kèm file |
    | **Luồng thao tác chính** | **1. Truy cập giao diện chấm điểm:**<br>&emsp;a. Giáo viên chọn lớp học từ trang “Tổng quan”.<br>&emsp;b. Truy cập tab “Bài tập và kiểm tra”, chọn bài trong mục “Bài tập về nhà”.<br>&emsp;c. Nhấn biểu tượng “>” để mở giao diện chấm chi tiết bài tập.<br><br>**2. Giao diện chấm điểm:**<br>&emsp;a. Hiển thị tiêu đề bài học và các chỉ số tổng quan: số bài đã chấm, tỷ lệ hoàn thành, điểm BTVN trung bình.<br>&emsp;b. Mỗi học viên hiển thị:<br>&emsp;&emsp;- Điểm số<br>&emsp;&emsp;- Thời gian làm bài<br>&emsp;&emsp;- Trạng thái nộp bài<br>&emsp;&emsp;- Số câu bỏ qua<br>&emsp;c. Có thể ẩn/hiện tên của học viên bằng cách nhấn vào tên học viên.<br><br>**3. Chấm từng câu hỏi:**<br>&emsp;a. Mỗi câu được hiển thị cùng loại câu (Trắc nghiệm, Đọc, Nói, Viết).<br>&emsp;b. Trạng thái chấm:<br>&emsp;&emsp;- **Chưa chấm:** viền mờ<br>&emsp;&emsp;- **Đang chấm:** viền hồng, nền trắng<br>&emsp;&emsp;- **Đã chấm:** nền hồng nhạt, hiển thị phần trăm chấm<br><br>**4. Nhập điểm và nhận xét:**<br>&emsp;a. Chọn điểm (1–10)<br>&emsp;b. Nhập nhận xét văn bản<br>&emsp;c. Ghi âm (popup micro)<br>&emsp;d. Đính kèm file (PNG, JPG, GIF)<br><br>**5. Nhận xét chung:**<br>&emsp;a. Tại đầu mỗi bài có phần “Nhận xét chung của sensei”<br><br>**6. Lọc và tìm kiếm:**<br>&emsp;a. Lọc học viên theo trạng thái: **Đã chấm / Chưa chấm**<br>&emsp;b. Tìm theo tên học viên<br>&emsp;c. Lọc câu hỏi theo trạng thái: **Đã chấm / Chưa chấm** |
    | **Điều kiện**     | - Bài tập đã giao mới có thể chấm.<br>- Phải có ít nhất một học viên làm bài để hiển thị danh sách. |
    | **Kết quả hiển thị** | - Điểm và nhận xét được lưu lại và hiển thị tại các giao diện liên quan.<br>- Biểu tượng ghi âm và file đính kèm được hiển thị nếu có.<br>- Sau khi chấm xong, trạng thái học viên cập nhật thành “Đã chấm”.<br>- Tỷ lệ hoàn thành được cập nhật trong danh sách bài tập. |
    | **Trường hợp không có dữ liệu** | - Không có học viên: hiển thị “Không có học viên nào đã làm bài tập này”.<br>- Không có câu hỏi: hiển thị “Bài tập không có câu hỏi để chấm điểm”.<br>- Nếu chưa chấm điểm câu nào: bài vẫn ở trạng thái “Chưa chấm”. |



#### 3.2.5 Chức năng chấm điểm bài kiểm tra { #toc-3-2-5}

??? book "Chấm điểm bài kiểm tra"
    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Chấm điểm bài kiểm tra |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Giáo viên thực hiện chấm điểm bài **kiểm tra** cho từng học viên. Giao diện cho phép xem chi tiết từng câu trả lời, chấm điểm trên thang điểm 10, ghi nhận xét bằng văn bản, ghi âm hoặc đính kèm file. Ngoài ra, giáo viên có thể lọc học viên theo trạng thái chấm (đã/chưa) hoặc tìm kiếm theo tên học viên. Đồng thời, có thể lọc danh sách câu hỏi để tập trung vào các câu chưa được xử lý. |
    | **Giao diện liên quan**     | - Tab “Bài tập và kiểm tra”<br>- Giao diện danh sách bài kiểm tra<br>- Giao diện chấm điểm chi tiết bài kiểm tra<br>- Popup ghi âm<br>- Popup đính kèm file |
    | **Luồng thao tác chính**    | **1. Truy cập giao diện chấm điểm:**<br>&emsp;a. Giáo viên chọn lớp từ màn hình tổng quan.<br>&emsp;b. Truy cập tab “Bài tập và kiểm tra” trong lớp học.<br>&emsp;c. Chuyển sang tab “Kiểm tra”.<br>&emsp;d. Nhấn biểu tượng “>” của một **bài kiểm tra** để vào giao diện chấm điểm chi tiết.<br><br>**2. Giao diện chấm điểm chi tiết:**<br>&emsp;a. Mỗi câu hỏi được hiển thị cùng loại câu (Trắc nghiệm, Đọc, Nói, Viết).<br>&emsp;b. Trạng thái câu hỏi:<br>&emsp;&emsp;- Chưa chấm: viền mờ, không có progress<br>&emsp;&emsp;- Đang chấm: viền hồng, nền trắng<br>&emsp;&emsp;- Đã chấm: nền hồng nhạt, hiển thị phần trăm<br><br>**3. Chấm điểm từng học viên:**<br>&emsp;a. Nhấn vào tên học viên để ẩn/hiện chi tiết câu hỏi.<br>&emsp;b. Chấm điểm bằng cách:<br>&emsp;&emsp;- Chọn điểm (1–10)<br>&emsp;&emsp;- Nhập nhận xét dạng text<br>&emsp;&emsp;- Ghi âm nhận xét (popup ghi âm)<br>&emsp;&emsp;- Đính kèm file (PNG, JPG, GIF)<br><br>**4. Nhận xét chung:**<br>&emsp;a. Có ô “Nhận xét chung của sensei” đầu bài để tổng kết.<br><br>**5. Lọc và tìm kiếm:**<br>&emsp;a. Lọc học viên theo trạng thái: Đã chấm / Chưa chấm<br>&emsp;b. Tìm kiếm theo tên học viên<br>&emsp;c. Lọc câu hỏi theo trạng thái: Đã chấm / Chưa chấm |
    | **Điều kiện**               | - Bài kiểm tra phải ở trạng thái đã giao.<br>- Phải có học viên nộp bài để hiển thị danh sách chấm điểm. |
    | **Kết quả hiển thị**        | - Điểm số và nhận xét được lưu và hiển thị trên các giao diện liên quan.<br>- Biểu tượng ghi âm / file đính kèm sẽ hiển thị nếu có sử dụng.<br>- Học viên được cập nhật trạng thái “Đã chấm” khi đã hoàn tất.<br>- Danh sách bài kiểm tra cập nhật số lượng học viên đã chấm và % hoàn thành. |
    | **Trường hợp không có dữ liệu** | - Không có học viên nộp bài: hiển thị “Không có học viên nào đã làm bài kiểm tra này”.<br>- Không có câu hỏi: hiển thị “Bài kiểm tra không có câu hỏi để chấm điểm”.<br>- Chưa chấm câu nào: bài kiểm tra hiển thị trạng thái “Chưa chấm”. |




#### 3.2.6 Chức năng giao bài kiểm tra { #toc-3-2-6}

??? book "Giao bài kiểm tra"
    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Giao bài kiểm tra |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Chức năng cho phép giáo viên **chính thức giao bài kiểm tra** đến học viên. Khi bài kiểm tra chưa được giao, học viên sẽ không thể truy cập hoặc làm bài. Sau khi giao, bài sẽ hiển thị trong danh sách bài tập/kiểm tra của học viên, cho phép truy cập, thực hiện và nộp bài. |
    | **Giao diện liên quan**     | - Tab “Bài tập và kiểm tra”<br>- Danh sách bài kiểm tra (trạng thái **Chưa giao**)<br>- Popup xác nhận khi nhấn “Giao bài” |
    | **Luồng thao tác chính**    | **1. Truy cập danh sách kiểm tra:**<br>&emsp;a. Giáo viên chọn lớp từ màn hình tổng quan.<br>&emsp;b. Mở tab “Bài tập và kiểm tra”.<br>&emsp;c. Chuyển sang tab con “Kiểm tra”.<br>&emsp;d. Các bài kiểm tra ở trạng thái **“Chưa giao”** hiển thị màu xám, không có phần trăm hoàn thành và không có học viên làm bài.<br><br>**2. Thao tác giao bài:**<br>&emsp;a. Giáo viên nhấn vào một bài kiểm tra “Chưa giao”.<br>&emsp;b. Giao diện hiển thị nút **“Giao bài”** ở giữa màn hình.<br>&emsp;c. Khi nhấn, popup xác nhận xuất hiện với:<br>&emsp;&emsp;- Tiêu đề: “Giao bài”<br>&emsp;&emsp;- Nội dung: “Nhấn ‘Xác nhận’ để giao bài kiểm tra này”<br>&emsp;&emsp;- Hai nút: **Hủy** / **Xác nhận**<br>&emsp;d. Nhấn **Xác nhận** để hoàn tất giao bài. |
    | **Điều kiện**               | - Chỉ có thể giao bài với các bài kiểm tra đang ở trạng thái “Chưa giao”.<br>- Giáo viên phải có quyền quản lý lớp hoặc bài kiểm tra đó. |
    | **Kết quả hiển thị**        | - Trạng thái bài chuyển từ “Chưa giao” sang “Chưa chấm”.<br>- Bài kiểm tra xuất hiện trong danh sách bài tập của học viên.<br>- Cột số học viên và % hoàn thành được cập nhật theo thời gian thực khi học viên nộp bài.<br>- Nút “Giao bài” biến mất sau khi giao thành công. |
    | **Trường hợp không có dữ liệu** | - Nếu không có bài kiểm tra “Chưa giao”: tab Kiểm tra chỉ hiển thị các bài đã giao.<br>- Nếu nhấn “Hủy” ở popup xác nhận: đóng popup, không thay đổi gì. |


#### 3.2.7 Chức năng thu hồi bài kiểm tra { #toc-3-2-7}

??? book "Thu hồi bài kiểm tra"
    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Thu hồi bài kiểm tra |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Cho phép giáo viên thu hồi lại một bài kiểm tra đã được giao. Sau khi thu hồi, bài kiểm tra sẽ **không còn hiển thị trong danh sách bài của học viên**, và trạng thái của bài được chuyển về "Chưa giao". Chức năng này giúp xử lý các tình huống cần chỉnh sửa nội dung hoặc ngừng triển khai bài kiểm tra. |
    | **Giao diện liên quan**     | - Tab “Bài tập và kiểm tra”<br>- Danh sách bài kiểm tra (trạng thái **Đã giao**)<br>- Giao diện chi tiết bài kiểm tra đã giao<br>- Popup xác nhận thu hồi |
    | **Luồng thao tác chính**    | **1. Truy cập bài kiểm tra đã giao:**<br>&emsp;a. Giáo viên chọn lớp từ màn hình tổng quan.<br>&emsp;b. Mở tab “Bài tập và kiểm tra” → chọn tab “Kiểm tra”.<br>&emsp;c. Danh sách hiển thị các bài đã giao kèm số học viên làm bài và % hoàn thành.<br>&emsp;d. Nhấn vào một bài kiểm tra đã giao.<br><br>**2. Thao tác thu hồi:**<br>&emsp;a. Giao diện chi tiết hiển thị nút **“Thu hồi”** ở góc phải trên.<br>&emsp;b. Nhấn nút này, popup xác nhận xuất hiện với:<br>&emsp;&emsp;- Tiêu đề: “Thu hồi”<br>&emsp;&emsp;- Nội dung: “Bạn muốn thu hồi bài kiểm tra này?”<br>&emsp;&emsp;- Nút: **Hủy** / **Xác nhận**<br>&emsp;c. Nhấn **Xác nhận** để thu hồi bài. |
    | **Điều kiện**               | - Bài kiểm tra phải ở trạng thái “Đã giao” mới có thể thu hồi.<br>- Giáo viên phải có quyền chỉnh sửa hoặc quản lý bài kiểm tra. |
    | **Kết quả hiển thị**        | - Trạng thái bài chuyển từ “Đã giao” về “Chưa giao”.<br>- Bài kiểm tra biến mất khỏi danh sách của học viên.<br>- Trong danh sách bài kiểm tra:<br>&emsp;• Trạng thái chuyển sang màu xám<br>&emsp;• Ẩn số học viên làm bài và phần trăm hoàn thành<br>- Nút “Giao bài” hiển thị trở lại. |
    | **Trường hợp không có dữ liệu** | - Nếu bài đã bị thu hồi: không còn xuất hiện trong giao diện học viên.<br>- Nếu nhấn “Hủy” ở popup xác nhận: hệ thống đóng popup, không thay đổi gì. |


#### 3.2.8 Quản lý tiêu chuẩn lớp học { #toc-3-2-8}

??? book "Tiêu chuẩn lớp học"
    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Tiêu chuẩn lớp học |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Giáo viên có thể xem toàn bộ tiêu chuẩn và quy trình lớp học đã được admin thiết lập cho lớp mình đang giảng dạy. Đây là danh sách các tiêu chí đánh giá được admin cấu hình nhằm đảm bảo chất lượng giảng dạy. Giáo viên **chỉ có quyền xem**, không thể chỉnh sửa nội dung, thêm, xoá hoặc cập nhật bất kỳ trường nào trong mục này. Đây là nguồn tham khảo để giáo viên hiểu rõ yêu cầu và mục tiêu lớp học. |
    | **Giao diện liên quan**     | - Màn hình “Tiêu chuẩn lớp học” trong giao diện giáo viên |
    | **Luồng thao tác chính**    | **1. Truy cập tiêu chuẩn lớp học:**<br>&emsp;– Giáo viên đăng nhập và chọn lớp học cụ thể từ màn hình tổng quan.<br>&emsp;– Chuyển sang tab “Tiêu chuẩn lớp học”.<br><br>**2. Xem danh sách tiêu chuẩn:**<br>&emsp;– Giao diện hiển thị các tiêu chí và quy trình do admin cấu hình.<br>&emsp;– Mỗi mục hiển thị:<br>&emsp;&emsp;+ Tên tiêu chí<br>&emsp;&emsp;+ Mô tả chi tiết<br>&emsp;&emsp;+ % hoàn thành (nếu có)<br>&emsp;&emsp;+ Nhận xét (nếu có, chỉ hiển thị)<br>&emsp;– Danh sách được phân chia theo từng giai đoạn hoặc nhóm nội dung. |
    | **Điều kiện**               | - Giáo viên chỉ được xem tiêu chuẩn của lớp mình đang giảng dạy.<br> - Không có quyền chỉnh sửa nội dung. |
    | **Kết quả hiển thị**        | - Danh sách tiêu chuẩn hiển thị theo cấu hình của admin.<br> - Các mục chia theo giai đoạn đào tạo hoặc nội dung học.<br> - Giao diện không có nút hành động (thêm/sửa/xoá).<br> - Nội dung hiển thị nhằm định hướng giảng dạy theo tiêu chuẩn. |
    | **Trường hợp không có dữ liệu** | - Nếu admin chưa thiết lập tiêu chuẩn cho lớp: hiển thị thông báo “Chưa có tiêu chuẩn nào được thiết lập cho lớp học này”. |







### 3.3 Quản lý lớp học (Admin)

#### 3.3.1 Thêm lớp học { #toc-3-3-1 }

??? book "Mô tả chức năng thêm lớp học"

    | Trường                        | Nội dung |
    | ----------------------------- | -------- |
    | **Tên chức năng**            | Thêm lớp học |
    | **Vai trò**                  | Admin |
    | **Mô tả**                     | Admin thực hiện tạo mới một lớp học với đầy đủ thông tin cấu hình như khóa học, loại lớp, mã lớp, mô tả, ngày bắt đầu, ngày kết thúc, ghi chú và link Google Meet (nếu có). Sau khi tạo lớp thành công, lớp học sẽ hiển thị trong danh sách quản lý lớp để tiếp tục gán học viên, giáo viên và triển khai chương trình giảng dạy. |
    | **Giao diện liên quan**       | - Màn hình “Danh sách lớp học”<br>- Popup “Thêm lớp mới” |
    | **Luồng thao tác chính** | **1. Truy cập màn hình thêm lớp:**<br>&emsp;a. Từ danh sách lớp học, admin nhấn nút <strong>Thêm lớp học</strong>.<br>**2. Nhập thông tin lớp học:**<br>&emsp;a. Chọn <strong>Khóa học</strong> từ dropdown.<br>&emsp;b. Nhập <strong>Mã lớp</strong>.<br>&emsp;c. Chọn <strong>Loại lớp</strong>: lớp chung hoặc lớp 1-1.<br>&emsp;d. Nhập <strong>Mô tả</strong>, <strong>Ghi chú</strong>, <strong>Link Google Meet</strong> (nếu có).<br>&emsp;e. Chọn <strong>Ngày bắt đầu</strong> và <strong>Ngày kết thúc</strong>.<br>**3. Lưu thông tin lớp:**<br>&emsp;a. Nhấn <strong>Thêm mới</strong> để tạo lớp học.<br>&emsp;b. Lớp hiển thị ngay trong danh sách. |
    | **Điều kiện**                 | - Mã lớp không được để trống.<br>- Phải chọn khóa học và loại lớp.<br>- Ngày bắt đầu ≤ ngày kết thúc.<br>- Không được trùng mã lớp. |
    | **Kết quả hiển thị**          | - Lớp mới được thêm vào danh sách với đầy đủ thông tin: mã lớp, loại lớp, trạng thái, ngày bắt đầu - kết thúc.<br>- Các thao tác tiếp theo (thêm học viên, giáo viên, bài học...) thực hiện trên lớp vừa tạo.<br>- Dữ liệu được đồng bộ vào hệ thống quản lý lớp học. |
    | **Trường hợp không có dữ liệu** | - Nếu danh sách khóa học hoặc loại lớp rỗng: dropdown hiển thị “Không có dữ liệu”.<br>- Nếu thiếu thông tin bắt buộc, nút “Thêm mới” bị vô hiệu hóa. |

#### 3.3.2 Quản lý bài học { #toc-3-3-2 }

??? book "Quản lý bài học"

    | Trường                        | Nội dung |
    | ----------------------------- | -------- |
    | **Tên chức năng**            | Quản lý bài học (Admin) |
    | **Vai trò**                  | Admin |
    | **Mô tả**                     | Cho phép Admin thực hiện thao tác quản lý bài học bao gồm: thêm bài học mới, chỉnh sửa bài học đã tạo, và xóa bài học (tính năng xoá dự kiến). Admin có thể nhập tiêu đề, chọn khoá học, chọn bài học tương ứng từ hệ thống nội dung, nhập mô tả bài học để hiển thị trong lớp. Các bài học đã tạo sẽ hiển thị trong danh sách bên phải với thứ tự, tiêu đề và mô tả đi kèm. |
    | **Giao diện liên quan**       | - Màn hình “Bài học” (vai trò Admin)<br>- Popup “Thêm bài học mới”<br>- Giao diện chỉnh sửa bài học<br>- Thông báo xác nhận (khi xóa - dự kiến) |
    | **Luồng thao tác chính** | **1. Truy cập giao diện quản lý bài học:**<br>&emsp;a. Admin chọn lớp từ giao diện "Tổng quan".<br>&emsp;b. Nhấn vào tab **“Bài học”** trong lớp.<br><br>**2. Thêm bài học:**<br>&emsp;a. Nhấn nút **“Thêm bài học mới”** ở góc trên bên phải.<br>&emsp;b. Popup hiển thị, admin nhập các trường:<br>&emsp;&emsp;- **Tiêu đề** (bắt buộc)<br>&emsp;&emsp;- **Chọn khoá học** (dropdown)<br>&emsp;&emsp;- **Chọn bài học** trong khoá (dropdown)<br>&emsp;&emsp;- **Mô tả bài học** (tuỳ chọn)<br>&emsp;c. Nhấn **“Thêm”** để tạo bài học mới.<br><br>**3. Chỉnh sửa bài học:**<br>&emsp;a. Trong danh sách bên phải, nhấn vào biểu tượng **“Chỉnh sửa”** cạnh bài học muốn cập nhật.<br>&emsp;b. Popup hiển thị với dữ liệu cũ đã được điền sẵn.<br>&emsp;c. Thay đổi các trường thông tin nếu cần.<br>&emsp;d. Nhấn **“Cập nhật”** để lưu thay đổi.<br><br>**4. Xoá bài học (dự kiến):**<br>&emsp;a. Nhấn nút **“Xoá”** (nếu có) cạnh bài học cần xoá.<br>&emsp;b. Hệ thống hiển thị popup xác nhận:<br>&emsp;&emsp;- “Bạn có chắc muốn xoá bài học này?”<br>&emsp;c. Nhấn **“Xác nhận”** để xoá bài học. |
    | **Điều kiện**                 | - Chỉ người dùng có vai trò Admin mới thấy và sử dụng được nút “Thêm bài học mới”.<br>- Các trường tiêu đề, khoá học, bài học phải được điền đầy đủ khi tạo mới.<br>- Không thể tạo trùng tiêu đề với một bài học đã có trong cùng khoá. |
    | **Kết quả hiển thị**          | - Danh sách bài học được cập nhật theo thời gian thực sau khi thêm hoặc chỉnh sửa.<br>- Bài học mới hiển thị cuối danh sách, đánh số tự động.<br>- Với mỗi bài học trong danh sách hiển thị:<br>&emsp;• Số thứ tự<br>&emsp;• Tiêu đề bài học<br>&emsp;• Mô tả<br>&emsp;• % hoàn thành BTVN và Đi học (nếu đã có học viên)<br>- Nếu bài học chưa được mở, khi click vào sẽ hiển thị **“Bài học chưa bắt đầu”**. |
    | **Trường hợp không có dữ liệu** | - Nếu chưa có bài học nào trong hệ thống: hiển thị dòng thông báo “Hiện chưa có bài học nào, vui lòng nhấn 'Thêm bài học mới' để bắt đầu.” |



#### 3.3.3 Thêm học viên vào lớp { #toc-3-3-3}

??? book "Thêm học viên vào lớp"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Thêm học viên vào lớp |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Admin thực hiện thao tác thêm học viên vào lớp học. Giao diện cho phép chọn từ danh sách học viên đã có sẵn trên hệ thống hoặc tạo mới học viên. Sau khi thêm, học viên sẽ được hiển thị trong danh sách lớp và tham gia toàn bộ quy trình học tập, bài tập, kiểm tra và báo cáo. |
    | **Giao diện liên quan**         | - Tab “Học viên” trong mục “Cài đặt” lớp học<br>- Popup lựa chọn thêm học viên<br>- Giao diện danh sách học viên trong lớp |
    | **Luồng thao tác chính**        | **1. Truy cập tab học viên:**<br>&emsp;a. Admin chọn một lớp học từ danh sách lớp.<br>&emsp;b. Nhấn vào menu **Cài đặt** ở sidebar bên trái.<br>&emsp;c. Trong giao diện cài đặt, chọn tab **Học viên** để vào danh sách học viên của lớp.<br><br>**2. Mở popup thêm học viên:**<br>&emsp;a. Nhấn nút **Thêm học viên mới** (màu cam).<br>&emsp;b. Hiển thị popup lựa chọn phương thức thêm:<br>&emsp;&emsp;• **Chọn học viên có sẵn**<br>&emsp;&emsp;• **Tạo học viên mới**<br><br>**3. Nếu chọn học viên có sẵn:**<br>&emsp;a. Hiển thị danh sách học viên toàn hệ thống (tên, mã, email).<br>&emsp;b. Tick chọn một hoặc nhiều học viên muốn thêm vào lớp.<br>&emsp;c. Nhấn **Thêm mới** để xác nhận.<br><br>**4. Nếu chọn tạo học viên mới:**<br>&emsp;a. Hiển thị popup nhập thông tin học viên mới (tên, email, mã học viên...).<br>&emsp;b. Nhấn **Tạo mới** → hệ thống tự thêm vào lớp hiện tại.<br><br>**5. Sau khi thêm thành công:**<br>&emsp;a. Popup đóng lại.<br>&emsp;b. Danh sách học viên trong lớp cập nhật ngay lập tức, hiển thị các cột như: mã học viên, email, trạng thái, ghi chú, thiết bị, sử dụng app. |
    | **Điều kiện**                   | - Chỉ admin mới có quyền thêm học viên.<br>- Không được thêm trùng học viên đã có trong lớp.<br>- Phải chọn ít nhất 1 học viên để thao tác. |
    | **Kết quả hiển thị**            | - Danh sách học viên trong lớp được cập nhật sau khi thêm.<br>- Popup tự đóng sau khi thao tác hoàn tất.<br>- Các cột hiển thị đầy đủ thông tin học viên mới được thêm. |
    | **Trường hợp không có dữ liệu** | - Nếu danh sách học viên hệ thống rỗng: hiển thị “Không có học viên trong hệ thống”.<br>- Nếu chưa tick chọn học viên: nút “Thêm mới” bị vô hiệu hóa. |


#### 3.3.4 Tạo học viên mới { #toc-3-3-4}

??? book "Tạo học viên mới"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Tạo học viên mới |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Admin có thể tạo mới một học viên và thêm vào lớp học hiện tại. Học viên mới sẽ được tạo tài khoản (email, mã học viên), sau đó được gán ngay vào danh sách lớp. Toàn bộ thông tin của học viên sẽ được hiển thị trong danh sách quản lý học viên của lớp. |
    | **Giao diện liên quan**         | - Tab “Học viên” trong mục “Cài đặt” lớp học<br>- Popup lựa chọn “Thêm học viên mới”<br>- Form nhập thông tin học viên |
    | **Luồng thao tác chính**        | **1. Truy cập giao diện tạo học viên:**<br>&emsp;a. Admin chọn một lớp học từ danh sách lớp.<br>&emsp;b. Nhấn vào menu **Cài đặt** → chọn tab **Học viên**.<br>&emsp;c. Nhấn nút **Thêm học viên mới** → hiển thị popup lựa chọn.<br>&emsp;d. Nhấn chọn **Tạo học viên mới** để chuyển sang form điền thông tin.<br><br>**2. Nhập thông tin học viên:**<br>&emsp;a. Nhập các trường sau:<br>&emsp;&emsp;• Họ và tên (bắt buộc)<br>&emsp;&emsp;• Email học viên (bắt buộc)<br>&emsp;&emsp;• Số điện thoại (tuỳ chọn)<br>&emsp;&emsp;• Ghi chú (tuỳ chọn)<br><br>**3. Xác nhận tạo học viên:**<br>&emsp;a. Nhấn nút **Tạo**.<br>&emsp;b. Hệ thống tự động sinh mã học viên (ví dụ: ZH05) và thêm vào lớp hiện tại.<br>&emsp;c. Danh sách học viên được cập nhật ngay lập tức. |
    | **Điều kiện**                   | - Email học viên không được trùng với học viên đã có trong hệ thống<br>- Phải nhập đầy đủ các trường bắt buộc: họ tên và email |
    | **Kết quả hiển thị**            | - Học viên mới được tạo và hiển thị trong danh sách học viên của lớp.<br>- Giao diện cập nhật thông tin: mã học viên, email, tên, trạng thái, thiết bị, ghi chú,...<br>- Tài khoản có thể được sử dụng để truy cập hệ thống học tập. |
    | **Trường hợp không có dữ liệu** | - Nếu admin không nhập tên hoặc email: hiển thị lỗi “Vui lòng nhập đầy đủ thông tin”.<br>- Nếu email đã tồn tại trong hệ thống: hiển thị cảnh báo “Email đã tồn tại, vui lòng kiểm tra lại”. |



#### 3.3.5 Cập nhật thông tin học viên { #toc-3-3-5 }

??? book "Cập nhật thông tin học viên"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Cập nhật thông tin học viên |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Admin có thể chỉnh sửa các thông tin liên quan đến học viên đang thuộc lớp học, bao gồm: email, tên hiển thị, ghi chú, số điện thoại, trạng thái thiết bị, trạng thái hoạt động,... Việc chỉnh sửa giúp đảm bảo thông tin được cập nhật chính xác, phục vụ cho việc theo dõi tiến độ học tập, thống kê và quản lý lớp học hiệu quả. |
    | **Giao diện liên quan**         | - Tab “Học viên” trong mục “Cài đặt” lớp học<br>- Danh sách học viên hiển thị theo từng lớp |
    | **Luồng thao tác chính**        | **1. Truy cập danh sách học viên:**<br>&emsp;a. Admin chọn một lớp học → vào menu **Cài đặt** → chọn tab **Học viên**.<br><br>**2. Thao tác chỉnh sửa:**<br>&emsp;a. Ở mỗi dòng học viên có biểu tượng chỉnh sửa (bút hoặc nút “Sửa”).<br>&emsp;b. Nhấn vào biểu tượng đó để mở popup hoặc form cập nhật thông tin.<br>&emsp;c. Các trường có thể chỉnh sửa bao gồm:<br>&emsp;&emsp;- Họ tên<br>&emsp;&emsp;- Email<br>&emsp;&emsp;- Số điện thoại (nếu có)<br>&emsp;&emsp;- Ghi chú<br><br>**3. Lưu cập nhật:**<br>&emsp;a. Nhấn nút **Lưu** để xác nhận thay đổi.<br>&emsp;b. Hệ thống cập nhật tức thì dữ liệu hiển thị trong danh sách. |
    | **Điều kiện**                   | - Học viên phải thuộc một lớp cụ thể<br>- Chỉ admin có quyền chỉnh sửa thông tin học viên trong lớp |
    | **Kết quả hiển thị**            | - Thông tin được cập nhật tức thời trên bảng danh sách học viên<br>- Có thể hiển thị toast message: “Cập nhật thành công” sau khi lưu |
    | **Trường hợp không có dữ liệu** | - Nếu danh sách học viên rỗng: hiển thị “Không có học viên trong lớp học này”<br>- Nếu bỏ trống trường bắt buộc (VD: email), hệ thống hiển thị cảnh báo và không cho lưu |




#### 3.3.6 Tạo giáo viên mới { #toc-3-3-6}

??? book "Tạo giáo viên mới"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Tạo giáo viên mới |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Cho phép admin khởi tạo một giáo viên mới thông qua form điền thông tin, và sau khi tạo thành công sẽ được tự động thêm vào lớp học hiện tại. Giáo viên sau đó sẽ hiển thị trong danh sách giáo viên của lớp cũng như danh sách người dùng toàn hệ thống. |
    | **Giao diện liên quan**         | - Popup “Vui lòng lựa chọn”<br>- Form “Tạo giáo viên mới” |
    | **Luồng thao tác chính** | **1. Truy cập giao diện quản lý giáo viên:**<br>&emsp;a. Admin chọn lớp học cụ thể → vào mục **Cài đặt** → chọn tab **Giáo viên**.<br><br>**2. Mở giao diện tạo mới:**<br>&emsp;a. Nhấn nút **“Thêm giáo viên vào lớp”**.<br>&emsp;b. Popup **“Vui lòng lựa chọn”** xuất hiện với 2 tùy chọn:<br>&emsp;&emsp;- Chọn giáo viên có sẵn<br>&emsp;&emsp;- **Tạo giáo viên mới**<br><br>**3. Nhập thông tin giáo viên:**<br>&emsp;a. Chọn mục **Tạo giáo viên mới** → hiển thị form nhập liệu.<br>&emsp;b. Nhập các trường:<br>&emsp;&emsp;- Họ và tên (bắt buộc)<br>&emsp;&emsp;- Mã giáo viên (bắt buộc, không trùng)<br>&emsp;&emsp;- Email (hợp lệ, không trùng)<br>&emsp;&emsp;- Số điện thoại (tuỳ chọn)<br>&emsp;&emsp;- Trạng thái: `Training`, `Chính thức`, `Thử việc` (bắt buộc)<br>&emsp;&emsp;- Ghi chú (tuỳ chọn)<br><br>**4. Tạo giáo viên và hoàn tất:**<br>&emsp;a. Nhấn nút **“Thêm mới”**.<br>&emsp;b. Hệ thống kiểm tra hợp lệ → tạo giáo viên mới và gán vào lớp hiện tại. |
    | **Điều kiện**                   | - Email phải đúng định dạng và không trùng với tài khoản nào đã tồn tại<br>- Mã giáo viên không được trùng<br>- Trạng thái là trường bắt buộc |
    | **Kết quả hiển thị**            | - Giáo viên được hiển thị ngay trong danh sách giáo viên lớp hiện tại<br>- Có thể thao tác các chức năng liên quan như: đánh dấu “Phụ trách chính”, xóa khỏi lớp |
    | **Trường hợp không có dữ liệu** | - Nếu bỏ trống các trường bắt buộc (họ tên, mã GV, email, trạng thái): hiển thị cảnh báo và không thể nhấn “Thêm mới”<br>- Nếu mã hoặc email đã tồn tại: hiển thị cảnh báo tương ứng |




#### 3.3.7 Chọn giáo viên có sẵn { #toc-3-3-7 }

??? book "Chọn giáo viên có sẵn"
    | Trường                        | Nội dung |
    | ----------------------------- | -------- |
    | **Tên chức năng**            | Chọn giáo viên có sẵn |
    | **Vai trò**                  | Admin |
    | **Mô tả**                     | Cho phép admin gán một hoặc nhiều giáo viên đã có trong hệ thống vào lớp học hiện tại. Danh sách hiển thị gồm mã giáo viên, tên và email giúp admin dễ dàng lựa chọn. Sau khi xác nhận, các giáo viên được chọn sẽ hiển thị trong danh sách giáo viên lớp và có thể được đánh dấu là phụ trách chính. |
    | **Giao diện liên quan**       | - Popup “Vui lòng lựa chọn”<br>- Popup “Chọn giáo viên” hiển thị danh sách giáo viên có sẵn<br>- Giao diện danh sách giáo viên trong lớp |
    | **Luồng thao tác chính** | **1. Truy cập giao diện quản lý giáo viên:**<br>&emsp;a. Admin chọn lớp học cụ thể → vào mục **Cài đặt** → chọn tab **Giáo viên**.<br><br>**2. Mở popup lựa chọn giáo viên:**<br>&emsp;a. Nhấn nút **“Thêm giáo viên vào lớp”**.<br>&emsp;b. Popup **“Vui lòng lựa chọn”** xuất hiện → chọn **“Chọn giáo viên có sẵn”**.<br><br>**3. Lựa chọn giáo viên:**<br>&emsp;a. Giao diện hiển thị danh sách giáo viên hệ thống gồm:<br>&emsp;&emsp;- Tên giáo viên<br>&emsp;&emsp;- Mã giáo viên<br>&emsp;&emsp;- Email<br>&emsp;b. Tick chọn một hoặc nhiều giáo viên muốn thêm vào lớp.<br>&emsp;c. Nhấn nút **“Thêm mới”** để xác nhận.<br><br>**4. Sau khi xác nhận:**<br>&emsp;a. Các giáo viên được thêm sẽ hiển thị ngay trong danh sách lớp.<br>&emsp;b. Có thể thực hiện các thao tác khác như đánh dấu “Phụ trách chính” hoặc xóa khỏi lớp. |
    | **Điều kiện**                 | - Chỉ admin mới có quyền gán giáo viên vào lớp.<br>- Không thể gán trùng giáo viên đã có trong lớp.<br>- Phải chọn ít nhất một giáo viên mới thao tác được. |
    | **Kết quả hiển thị**          | - Giáo viên được thêm sẽ hiển thị ngay trong danh sách lớp.<br>- Hệ thống cập nhật thông tin theo thời gian thực.<br>- Nếu chỉ có một giáo viên, mặc định đánh dấu là “Phụ trách chính” (nếu chưa ai được chọn). |
    | **Trường hợp không có dữ liệu** | - Nếu danh sách giáo viên hệ thống rỗng: hiển thị thông báo “Không có giáo viên nào khả dụng để gán lớp”.<br>- Nếu không tick chọn giáo viên nào: nút “Thêm mới” bị vô hiệu hoá. |


#### 3.3.8 Xóa giáo viên khỏi lớp { #toc-3-3-8}
??? book "Xóa giáo viên khỏi lớp"
    | Trường                        | Nội dung |
    | ----------------------------- | -------- |
    | **Tên chức năng**            | Xóa giáo viên khỏi lớp |
    | **Vai trò**                  | Admin |
    | **Mô tả**                     | Admin có thể xóa một giáo viên khỏi lớp học bằng cách nhấn vào icon thùng rác trong danh sách giáo viên. Hành động này không hiển thị popup xác nhận. Sau khi xóa, giáo viên đó sẽ không còn liên kết với lớp nhưng vẫn còn trong hệ thống để tái sử dụng ở lớp khác. |
    | **Giao diện liên quan**       | - Tab **Giáo viên** trong phần “Thông tin lớp học” |
    | **Luồng thao tác chính** | **1. Truy cập danh sách giáo viên:**<br>&emsp;a. Admin vào lớp học cụ thể → chọn mục **Cài đặt**.<br>&emsp;b. Chuyển sang tab **Giáo viên**.<br><br>**2. Xóa giáo viên khỏi lớp:**<br>&emsp;a. Nhấn icon **thùng rác** tại dòng giáo viên muốn xóa.<br>&emsp;b. Hệ thống xóa giáo viên khỏi danh sách lớp **ngay lập tức, không có xác nhận**.<br>&emsp;c. Danh sách được cập nhật tức thời. |
    | **Điều kiện**                 | - Lớp phải còn ít nhất **01 giáo viên** sau khi xóa để đảm bảo lớp không bị bỏ trống giáo viên. |
    | **Kết quả hiển thị**          | - Giáo viên bị loại khỏi danh sách lớp hiện tại.<br>- Hệ thống cập nhật lại danh sách hiển thị tức thì. |
    | **Trường hợp không có dữ liệu** | - Nếu lớp không có giáo viên nào sau khi xóa: hiển thị thông báo “Lớp chưa có giáo viên nào”. |

#### 3.3.9 Cập nhật thông tin giáo viên (Chức năng này chưa có) { #toc-3-3-9 }
??? book "Cập nhật thông tin giáo viên"
    | Trường                        | Nội dung |
    | ----------------------------- | -------- |
    | **Tên chức năng**            | Cập nhật thông tin giáo viên |
    | **Vai trò**                  | Admin |
    | **Mô tả**                     | Admin có thể chỉnh sửa thông tin chi tiết của giáo viên đã được tạo trước đó. Các trường cho phép chỉnh sửa gồm: Họ và tên, Số điện thoại, Trạng thái làm việc (Training / Thử việc / Chính thức), và Ghi chú nội bộ. |
    | **Giao diện liên quan**       | - Popup cập nhật thông tin giáo viên (hiển thị khi nhấn vào từng dòng giáo viên hoặc biểu tượng chỉnh sửa – nếu có trong tương lai) |
    | **Luồng thao tác chính** | **1. Truy cập danh sách giáo viên:**<br>&emsp;a. Admin mở lớp học cụ thể → chọn mục **Cài đặt**.<br>&emsp;b. Chuyển sang tab **Giáo viên**.<br><br>**2. Cập nhật thông tin:**<br>&emsp;a. Nhấn vào dòng giáo viên hoặc biểu tượng chỉnh sửa.<br>&emsp;b. Popup hiển thị các trường:<br>&emsp;&emsp;– Họ và tên (bắt buộc)<br>&emsp;&emsp;– Số điện thoại (chỉ cho nhập số)<br>&emsp;&emsp;– Trạng thái: `Training`, `Chính thức`, `Thử việc`<br>&emsp;&emsp;– Ghi chú (tuỳ chọn)<br>&emsp;c. Nhấn **Lưu** để xác nhận cập nhật.<br>&emsp;d. Danh sách được cập nhật tức thì. |
    | **Điều kiện**                 | - Chỉ admin mới có quyền thực hiện cập nhật.<br>- Mã giáo viên (ID) là duy nhất và không được sửa đổi. |
    | **Kết quả hiển thị**          | - Danh sách giáo viên được cập nhật thông tin mới tức thì.<br>- Trạng thái hiển thị tương ứng: `Training`, `Chính thức`, `Thử việc`.<br>- Ghi chú hiển thị khi mở chi tiết hoặc dưới dạng tooltip (nếu có). |
    | **Trường hợp không có dữ liệu** | - Nếu thông tin không hợp lệ (VD: số điện thoại sai định dạng), hệ thống sẽ cảnh báo và không cho lưu. |

#### 3.3.10 Thêm trợ giảng vào lớp { #toc-3-3-10}

??? book "Thêm trợ giảng vào lớp"~
    | Trường                        | Nội dung |
    | ----------------------------- | -------- |
    | **Tên chức năng**            | Thêm trợ giảng vào lớp |
    | **Vai trò**                  | Admin |
    | **Mô tả**                     | Cho phép admin thêm các trợ giảng có sẵn vào lớp học. Trợ giảng được chọn từ danh sách hệ thống, có thể chọn nhiều người cùng lúc, và sẽ được hiển thị ở vùng gán phía trên. Hỗ trợ tìm kiếm nhanh theo tên hoặc email trợ giảng. |
    | **Giao diện liên quan**       | - Tab “Trợ giảng” trong trang chi tiết lớp học |
    | **Luồng thao tác chính** | **1. Truy cập giao diện thêm trợ giảng:**<br>&emsp;a. Admin chọn lớp học cụ thể → vào mục **Cài đặt** → chuyển sang tab **Trợ giảng**.<br><br>**2. Tìm kiếm và chọn trợ giảng:**<br>&emsp;a. Giao diện hiển thị danh sách trợ giảng hệ thống kèm tên và email.<br>&emsp;b. Admin nhập từ khóa vào ô **Tìm kiếm trợ giảng** để lọc theo tên/email.<br>&emsp;c. Tick chọn một hoặc nhiều trợ giảng cần thêm vào lớp.<br><br>**3. Gán trợ giảng vào lớp:**<br>&emsp;a. Các trợ giảng đã chọn hiển thị ở phía trên vùng “Gán trợ giảng” dưới dạng thẻ (có icon **x** để xóa).<br>&emsp;b. Nhấn vào nút **“+”** kế bên thanh tìm kiếm để xác nhận gán các trợ giảng đã chọn.<br>&emsp;c. Sau khi thêm thành công, danh sách tick chọn được làm mới để có thể thao tác tiếp. |
     **Điều kiện**                 | - Admin có quyền chỉnh sửa lớp học.<br>- Trợ giảng phải tồn tại sẵn trong hệ thống. |
    | **Điều kiện**                 | - Admin có quyền chỉnh sửa lớp học.<br>- Trợ giảng phải tồn tại sẵn trong hệ thống. |
    | **Kết quả hiển thị**          | - Trợ giảng hiển thị trong vùng “Gán trợ giảng”.<br>- Danh sách tick chọn được làm mới.<br>- Nếu xoá từ thẻ đã gán, giao diện cập nhật ngay lập tức. |
    | **Trường hợp không có dữ liệu** | - Nếu không có trợ giảng nào: hiển thị “Không có trợ giảng nào để lựa chọn”.<br>- Nếu không có kết quả theo từ khóa: hiển thị “Không tìm thấy kết quả phù hợp”. |



#### 3.3.11 Xóa trợ giảng khỏi lớp { #toc-3-3-11}

??? book "Xóa trợ giảng khỏi lớp"
    | Trường                        | Nội dung |
    | ----------------------------- | -------- |
    | **Tên chức năng**            | Xóa trợ giảng khỏi lớp |
    | **Vai trò**                  | Admin |
    | **Mô tả**                     | Cho phép admin xóa nhanh trợ giảng đã gán vào lớp bằng cách nhấn vào nút “x” nằm cạnh tên trợ giảng trong vùng hiển thị danh sách đã gán. Hành động không yêu cầu xác nhận. |
    | **Giao diện liên quan**       | - Tab “Trợ giảng” trong trang chi tiết lớp học |
    | Luồng thao tác chính | 1. Truy cập danh sách trợ giảng đã gán:<br> a. Admin chọn lớp học cụ thể → vào mục Cài đặt → chuyển sang tab Trợ giảng.<br><br>2. Xóa trợ giảng khỏi lớp:<br> a. Tại vùng “Gán trợ giảng”, mỗi người được hiển thị dưới dạng thẻ có tên và biểu tượng “x” màu đỏ.<br> b. Admin nhấn vào biểu tượng “x” ở thẻ trợ giảng cần xóa.<br> c. Hệ thống lập tức loại bỏ người đó khỏi danh sách, không có popup xác nhận.<br><br>3. Giao diện cập nhật:<br> a. Giao diện tự động cập nhật lại danh sách đã gán, không cần reload trang. |
    | **Điều kiện**                 | - Admin có quyền chỉnh sửa lớp học.<br>- Trợ giảng phải đang nằm trong lớp. |
    | **Kết quả hiển thị**          | - Thẻ trợ giảng sẽ biến mất khỏi vùng “Gán trợ giảng” ngay sau khi xóa.<br>- Giao diện phản ánh thay đổi tức thì. |
    | **Trường hợp không có dữ liệu** | - Nếu lớp chưa có trợ giảng nào: không hiển thị vùng danh sách đã gán. |



#### 3.3.12 Gán giáo viên phụ trách { #toc-3-3-12 }

??? book "Gán giáo viên phụ trách chính"
    | Trường                        | Nội dung |
    | ----------------------------- | -------- |
    | **Tên chức năng**            | Gán giáo viên phụ trách chính |
    | **Vai trò**                  | Admin |
    | **Mô tả**                     | Admin có thể gán một giáo viên là “phụ trách chính” cho lớp học. Mỗi lớp chỉ có **duy nhất một giáo viên phụ trách chính**. Giáo viên này sẽ được tính KPI, xem lịch dạy tổng hợp, được gán lịch dạy tự động (nếu chưa phân công), và được phép xem các tab quản lý nâng cao như tiêu chuẩn và họp lớp. Các giáo viên không phụ trách chính vẫn có thể dạy nếu được phân công lịch cụ thể nhưng không thấy các thông tin nâng cao. |
    | **Giao diện liên quan**       | - Tab **Giáo viên** trong chi tiết lớp học<br> - Bảng danh sách giáo viên có cột “Phụ trách chính” với checkbox tick đỏ |
    | **Luồng thao tác chính** | **1. Truy cập giao diện gán phụ trách chính:**<br>&emsp;a. Admin vào lớp học cụ thể → chuyển sang mục **Cài đặt** → chọn tab **Giáo viên**.<br><br>**2. Gán giáo viên phụ trách:**<br>&emsp;a. Mỗi dòng giáo viên có một checkbox "Phụ trách chính".<br>&emsp;b. Admin tick chọn vào ô của người cần gán.<br>&emsp;c. Nếu đã có người được chọn trước đó, hệ thống **tự bỏ chọn** người cũ và gán người mới.<br>&emsp;d. Giao diện được cập nhật ngay, không cần reload.<br><br>**3. Áp dụng quyền:**<br>&emsp;a. Người được gán sẽ có quyền truy cập các tab như **KPI**, **Tiêu chuẩn lớp học**, và **Cuộc họp**.<br>&emsp;b. Nếu lớp chưa phân công lịch dạy, hệ thống sẽ tự động gán lịch cho người này (nếu có chức năng đó). |
    | **Điều kiện**                 | - Mỗi lớp chỉ có một giáo viên phụ trách chính tại một thời điểm.<br> - Lớp phải có ít nhất một giáo viên mới thao tác được. |
    | **Kết quả hiển thị**          | - Giáo viên được gán có thể thấy các tab quản lý nâng cao như KPI, Tiêu chuẩn, Cuộc họp.<br> - Lịch dạy có thể tự động phân bổ cho người phụ trách nếu chưa có người dạy.<br> - Các giáo viên còn lại sẽ không thấy các tab quản lý nâng cao. |
    | **Trường hợp không có dữ liệu** | - Nếu lớp không có giáo viên: không hiển thị checkbox gán phụ trách.<br> - Nếu chưa tick phụ trách: không ai thấy được KPI và tab liên quan. |



#### 3.3.13 Quản lý tiêu chuẩn lớp học { #toc-3-3-13 }

??? book "Quản lý tiêu chuẩn lớp học"
    | **Trường**                        | **Nội dung** |
    | --------------------------------- | ------------ |
    | **Tên chức năng**                 | Quản lý tiêu chuẩn lớp học |
    | **Vai trò**                       | Admin |
    | **Mô tả**                         | Cho phép admin cập nhật nội dung đánh giá lớp học dựa trên các tiêu chuẩn hệ thống đã gán. Mỗi tiêu chuẩn thuộc một nhóm nội dung như `Hướng dẫn`, `Quy trình`, `Kiểm tra`, `Đánh giá`, `Nhiệm vụ`. Tùy theo loại nội dung mà admin sẽ thao tác khác nhau như nhập nhận xét, kéo thanh tiến độ, chọn mức độ đánh giá hoặc tick checkbox để phản ánh tình trạng thực tế lớp học. |
    | **Giao diện liên quan**           | - Tab “Tiêu chuẩn lớp học” trong chi tiết lớp học<br>- Popup “Thêm quy trình” |
    | **Luồng thao tác chính**          | **1. Truy cập giao diện tiêu chuẩn:**<br>&emsp;a. Admin vào lớp học cụ thể → chọn tab **Tiêu chuẩn lớp học**.<br><br>**2. Thêm quy trình áp dụng:**<br>&emsp;a. Nhấn nút **“Thêm quy trình”** ở góc trên bên phải.<br>&emsp;b. Hệ thống hiển thị popup danh sách tất cả các quy trình có thể gán (dưới dạng checkbox).<br>&emsp;c. Tick chọn một hoặc nhiều quy trình cần áp dụng.<br>&emsp;d. Nhấn **“Thêm”** để xác nhận, hoặc **“Hủy bỏ”** để quay lại.<br><br>**3. Quản lý nội dung theo nhóm:**<br>&emsp;a. Giao diện hiển thị các nhóm nội dung như:<br>&emsp;&emsp;• **Hướng dẫn**: nhập nhận xét, đính kèm ảnh và URL<br>&emsp;&emsp;• **Quy trình**: điều chỉnh thanh progress (%)<br>&emsp;&emsp;• **Kiểm tra**: chọn mức đánh giá `Xuất sắc`, `Khá tốt`, `Trung bình`, `Không tốt`<br>&emsp;&emsp;• **Đánh giá**: tick chọn checkbox<br>&emsp;&emsp;• **Nhiệm vụ**: Xem nội dung nhiệm vụ<br><br>**4. Lưu và cập nhật:**<br>&emsp;a. Các thao tác được hệ thống lưu tự động hoặc xác nhận lưu.<br>&emsp;b. Dữ liệu được tổng hợp theo từng nhóm nội dung và trạng thái hoàn thành. |
    | **Điều kiện**                     | - Chỉ admin có quyền cập nhật nội dung tiêu chuẩn lớp học.<br>- Các quy trình phải ở trạng thái “Đang kích hoạt” mới có thể thêm.<br>- Không thể thêm quy trình đã bị vô hiệu hóa. |
    | **Kết quả hiển thị**              | - Các tiêu chuẩn của quy trình được chọn sẽ hiển thị chia theo nhóm loại.<br>- Mỗi mục có giao diện tương tác đúng theo loại nội dung.<br>- Dữ liệu phản ánh trực tiếp tiến độ lớp học và hỗ trợ đánh giá chất lượng. |
    | **Trường hợp không có dữ liệu**   | - Nếu lớp chưa có tiêu chuẩn nào: hiển thị “Chưa có tiêu chuẩn nào được thiết lập cho lớp học này”.<br>- Nếu chưa thao tác nội dung: mặc định hiển thị “Chưa đánh giá”.<br>- Nếu tất cả quy trình đang bị vô hiệu: popup “Thêm quy trình” sẽ rỗng. |


#### 3.3.14 Quản lý nội dung quy trình { #toc-3-3-14 }

??? book "Quản lý nội dung quy trình"
    | **Trường**                      | **Nội dung** |
    | ------------------------------- | ------------ |
    | **Tên chức năng**               | Quản lý nội dung quy trình |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Cho phép admin tạo mới, chỉnh sửa, thay đổi trạng thái và xoá nội dung bên trong từng giai đoạn (danh mục) của một quy trình đào tạo. Mỗi nội dung được phân loại hiển thị theo các loại: `Hướng dẫn`, `Quy trình`, `Kiểm tra`, `Đánh giá`, `Nhiệm vụ`. |
    | **Giao diện liên quan**         | - Tab **Quy trình** trong hệ thống quản trị lớp học<br>- Giao diện nhóm nội dung theo từng danh mục<br>- Dropdown chọn loại nội dung (trong dòng nội dung)<br>- Ô nhập mô tả nội dung<br>- Icon “+” để thêm mới<br>- Icon thùng rác để xoá nội dung<br>- Danh sách quy trình bên phải kèm menu đổi trạng thái |
    | **Luồng thao tác chính**        | **1. Thêm tiêu đề quy trình:**<br>&emsp;a. Nhập tên quy trình vào ô “Nhập Danh Mục Mới” ở cuối danh sách quy trình.<br>&emsp;b. Nhấn dấu **“+”** để thêm mới quy trình.<br><br>**2. Thêm nội dung vào danh mục:**<br>&emsp;a. Nhấn vào quy trình vừa thêm hoặc đã có để hiển thị nội dung bên trong.<br>&emsp;b. Nhập mô tả nội dung vào ô “Nhập Nội Dung Mới”.<br>&emsp;c. Chọn loại nội dung từ dropdown: `Hướng dẫn`, `Quy trình`, `Kiểm tra`, `Đánh giá`, `Nhiệm vụ`.<br>&emsp;d. Nhấn icon **“+”** để lưu.<br><br>**3. Sửa nội dung:**<br>&emsp;a. Click vào mô tả hoặc dropdown để chỉnh sửa trực tiếp.<br><br>**4. Xoá nội dung:**<br>&emsp;a. Nhấn icon 🗑 ở cuối dòng.<br>&emsp;b. Hệ thống hiển thị popup xác nhận: *“Bạn có chắc xoá mục này?”*<br>&emsp;c. Chọn **Xoá** hoặc **Quay lại**.<br><br>**5. Quản lý trạng thái quy trình:**<br>&emsp;a. Tại danh sách bên phải, nhấn icon trạng thái trên mỗi quy trình.<br>&emsp;b. Chọn một trong ba trạng thái: `Đang kích hoạt`, `Vô hiệu`, `Xoá`.<br>&emsp;c. Nếu chọn “Xoá” → hiển thị popup xác nhận: *“Hành động này không thể hoàn tác...”*. |
    | **Trạng thái hiển thị theo loại** | - **Hướng dẫn**, **Nhiệm vụ**: Hiển thị mô tả, trường nhận xét dạng text, hỗ trợ upload ảnh, chèn URL.<br>- **Quy trình**: Hiển thị thanh kéo điều chỉnh tiến độ (%).<br>- **Kiểm tra**: Hiển thị dropdown chọn mức đánh giá: `Xuất sắc`, `Khá tốt`, `Trung bình`, `Không tốt`.<br>- **Đánh giá**: Hiển thị checkbox tick hoàn thành. |
    | **Kết quả hiển thị**            | - Mỗi quy trình (giai đoạn) hiển thị danh sách nội dung bên dưới.<br>- Các nội dung sắp xếp theo thứ tự thêm vào, kèm biểu tượng loại và giao diện thao tác tương ứng.<br>- Trạng thái thao tác (tick, % tiến độ, nhận xét) được lưu tức thì.<br>- Nếu quy trình bị vô hiệu, sẽ không thể gán trong tiêu chuẩn lớp học. |
    | **Trạng thái quy trình**        | - Trạng thái gồm: `Đang kích hoạt` (mặc định) và `Vô hiệu`.<br>- Quy trình `Vô hiệu` sẽ bị ẩn khi gán vào lớp.<br>- Nếu chọn “Xoá” → hiện popup: *“Bạn có chắc xoá mục này? Hành động này không thể hoàn tác...”* |
    | **Điều kiện**                   | - Bắt buộc nhập mô tả và chọn loại nội dung mới được thêm.<br>- Chỉ tài khoản **Admin** có quyền thao tác thêm/sửa/xoá. |
    | **Trường hợp không có dữ liệu** | - Nếu chưa có nội dung: hiển thị *“Chưa có nội dung nào trong giai đoạn này”*.<br>- Nếu để trống mô tả: cảnh báo *“Không được để trống!”*.<br>- Nếu chưa có quy trình nào: danh sách bên phải hiển thị trống. |



#### 3.3.15 Quản lý nội dung cuộc họp { #toc-3-3-15 }

??? book "Quản lý nội dung cuộc họp"
    | **Trường**                      | **Nội dung** |
    | ------------------------------- | ------------ |
    | **Tên chức năng**               | Quản lý nội dung cuộc họp |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Cho phép admin tạo mới, chỉnh sửa, thay đổi trạng thái và xoá nội dung trong từng buổi họp. Mỗi nội dung được phân loại hiển thị theo các loại: `Hướng dẫn`, `Quy trình`, `Kiểm tra`, `Đánh giá`, `Nhiệm vụ`. |
    | **Giao diện liên quan**         | - Tab **Cuộc họp** trong hệ thống quản trị lớp học<br>- Ô nhập tên buổi họp<br>- Danh sách nội dung cuộc họp (theo từng buổi)<br>- Dropdown chọn loại nội dung<br>- Ô nhập mô tả nội dung<br>- Icon “+” để thêm mới<br>- Icon thùng rác để xoá nội dung<br>- Menu chỉnh trạng thái cuộc họp |
    | **Luồng thao tác chính**        | **1. Thêm buổi họp:**<br>&emsp;a. Nhập tên buổi họp vào ô “Nhập buổi họp mới” ở danh sách bên phải.<br>&emsp;b. Nhấn dấu **“+”** để tạo buổi họp mới.<br><br>**2. Thêm nội dung vào buổi họp:**<br>&emsp;a. Click vào buổi họp ở danh sách để mở nội dung.<br>&emsp;b. Nhập mô tả vào ô “Nhập Nội Dung Mới”.<br>&emsp;c. Chọn loại nội dung từ dropdown: `Hướng dẫn`, `Quy trình`, `Kiểm tra`, `Đánh giá`, `Nhiệm vụ`.<br>&emsp;d. Nhấn icon **“+”** để lưu nội dung.<br><br>**3. Sửa nội dung:**<br>&emsp;a. Click vào mô tả hoặc dropdown để chỉnh sửa trực tiếp.<br><br>**4. Xoá nội dung:**<br>&emsp;a. Nhấn icon **🗑** ở cuối dòng.<br>&emsp;b. Hiển thị popup xác nhận: *“Bạn có chắc xoá mục này?”*<br>&emsp;c. Chọn **Xoá** để xác nhận hoặc **Quay lại** để huỷ thao tác.<br>|
    | **Trạng thái hiển thị theo loại** | - **Hướng dẫn**, **Nhiệm vụ**: Hiển thị mô tả có thể chỉnh sửa, ô nhận xét text, hỗ trợ upload file và đính kèm URL.<br>- **Quy trình**: Hiển thị thanh kéo điều chỉnh phần trăm hoàn thành (%).<br>- **Kiểm tra**: Dropdown chọn một trong bốn mức: `Xuất sắc`, `Khá tốt`, `Trung bình`, `Không tốt`.<br>- **Đánh giá**: Checkbox đơn giản để tick hoàn thành từng mục. |
    | **Kết quả hiển thị**            | - Mỗi buổi họp hiển thị danh sách nội dung theo thứ tự thêm.<br>- Giao diện từng nội dung có biểu tượng loại tương ứng.<br>- Các thay đổi được lưu ngay khi thao tác (tick, kéo %...).<br>- Nếu buổi họp bị vô hiệu, sẽ không cho phép chọn lịch hoặc gán cho lớp. |
    | **Điều kiện**                   | - Phải nhập mô tả và chọn loại nội dung mới được thêm.<br>- Chỉ **Admin** có quyền thêm/sửa/xoá nội dung hoặc chỉnh trạng thái buổi họp. |
    | **Trường hợp không có dữ liệu** | - Chưa có nội dung: hiển thị “Chưa có nội dung nào trong buổi họp này”.<br>- Trống mô tả khi thêm: cảnh báo “Không được để trống!”.<br>- Không có buổi họp nào: danh sách bên phải rỗng, chỉ có nút “Thêm buổi họp mới”. |


#### 3.3.16 Thêm buổi họp mới { #toc-3-3-16 }

??? book "Thêm buổi họp mới"
    | **Trường**                      | **Nội dung** |
    | ------------------------------- | ------------ |
    | **Tên chức năng**               | Thêm buổi họp mới |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Admin có thể tạo mới một buổi họp để theo dõi tiến độ phối hợp giữa giáo viên và bộ phận hỗ trợ. Sau khi tạo, admin có thể thiết lập thời gian, người tham gia, và trạng thái buổi họp tương ứng. |
    | **Giao diện liên quan**         | - Trang “Cuộc họp”<br>- Nút **Thêm buổi họp mới** (nằm cuối danh sách bên phải)<br>- Biểu tượng chọn người tham gia<br>- Nút thiết lập lịch họp<br>- Menu trạng thái buổi họp |
    | **Luồng thao tác chính**        | **1. Thêm buổi họp mới:**<br>&emsp;a. Tại tab **Cuộc họp** trong lớp học cụ thể, admin nhấn **Thêm buổi họp mới**.<br>&emsp;b. Buổi họp mới được tạo ngay với tên mặc định là “Hướng dẫn điều tiết lớp” (hoặc “Test” nếu để trống).<br>&emsp;c. Trạng thái khởi tạo là “Chưa có lịch” và “0 người tham gia”.<br><br>**2. Thiết lập thông tin buổi họp:**<br>&emsp;a. Nhấn vào icon **🗓️** để chọn **ngày & giờ họp**.<br>&emsp;b. Nhấn vào icon **➕** người để mở popup thêm người tham gia:<br>&emsp;&emsp;– Có thể lọc theo vai trò hoặc tìm theo tên/mã nhân viên<br>&emsp;&emsp;– Tick chọn nhiều người cùng lúc<br>&emsp;c. Chọn trạng thái buổi họp từ menu dropdown:<br>&emsp;&emsp;– `Chưa có lịch`<br>&emsp;&emsp;– `Đang chờ`<br>&emsp;&emsp;– `Đang tham gia` |
    | **Điều kiện**                   | - Buổi họp có thể được tạo ngay mà không cần chọn lịch hay người tham gia.<br>- Để chuyển trạng thái, buổi họp phải có ngày giờ hợp lệ. |
    | **Kết quả hiển thị**            | - Mỗi buổi họp được hiển thị ở cột bên phải với:<br>&emsp;• Tên buổi họp<br>&emsp;• Số người tham gia<br>&emsp;• Ngày giờ (nếu đã chọn)<br>&emsp;• Trạng thái bằng màu sắc và icon tương ứng:<br>&emsp;&emsp;– `Chưa có lịch`: màu cam<br>&emsp;&emsp;– `Đang chờ`: màu cam nhạt<br>&emsp;&emsp;– `Đang tham gia`: màu xanh lam<br>- Tiêu chuẩn lớp học luôn cố định ở cột trái để đối chiếu khi họp. |
    | **Trường hợp không có dữ liệu** | - Nếu chưa thêm buổi họp nào: hiển thị danh sách trống và nút “Thêm buổi họp mới”.<br>- Nếu chưa thêm người hoặc chưa chọn lịch: hiển thị cảnh báo khi thao tác chuyển trạng thái. |

#### 3.3.17 Xóa buổi họp { #toc-3-3-18 }

??? book "Xóa buổi họp"
    | **Trường**                      | **Nội dung** |
    | ------------------------------- | ------------ |
    | **Tên chức năng**               | Xóa buổi họp |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Cho phép admin xóa hoàn toàn một buổi họp ra khỏi danh sách. Việc xóa này sẽ loại bỏ buổi họp khỏi giao diện và không còn hiển thị với bất kỳ người tham gia nào trước đó. Hành động xóa không hiển thị popup xác nhận, chỉ cần click icon thùng rác là thực hiện ngay. |
    | **Giao diện liên quan**         | - Trang “Cuộc họp”<br>- Bảng danh sách buổi họp bên phải |
    | **Luồng thao tác chính**        | **1. Truy cập giao diện:**<br>&emsp;a. Ở trang tổng quan lớp học admin vào 1 lớp cụ thể → chọn tab **Cuộc họp**.<br><br>**2. Thực hiện xóa buổi họp:**<br>&emsp;a. Tại danh sách buổi họp bên phải, mỗi dòng có icon **🗑️ (thùng rác)**.<br>&emsp;b. Admin nhấn vào icon thùng rác tương ứng với buổi họp cần xoá.<br>&emsp;c. Hệ thống ngay lập tức xóa buổi họp khỏi danh sách, **không có bước xác nhận**.<br>&emsp;d. Danh sách tự động cập nhật để loại bỏ buổi họp đó. |
    | **Điều kiện**                   | - Chỉ admin mới được phép xóa buổi họp.<br>- Buổi họp phải thuộc lớp hiện tại. |
    | **Kết quả hiển thị**            | - Buổi họp biến mất khỏi danh sách ngay sau khi xóa.<br>- Các thành viên từng được mời sẽ không còn thấy buổi họp này trong hệ thống. |
    | **Trường hợp không có dữ liệu** | - Nếu danh sách không còn buổi họp nào sau khi xóa: hiển thị thông báo “Chưa có buổi họp nào cho lớp học này”. |


#### 3.3.18 Thêm nội dung cuộc họp { #toc-3-3-19 }

??? book "Thêm nội dung cuộc họp"
    | **Trường**                        | **Nội dung** |
    | --------------------------------- | ------------ |
    | **Tên chức năng**                 | Thêm nội dung cuộc họp |
    | **Vai trò**                       | Admin |
    | **Mô tả**                         | Cho phép admin thêm các nội dung đánh giá, trao đổi và hướng dẫn cho từng buổi họp. Nội dung được nhóm theo các loại: `Hướng dẫn`, `Quy trình`, `Kiểm tra`, `Đánh giá`, `Nhiệm vụ`. Tùy loại nội dung, admin có thể nhập nhận xét, điều chỉnh tiến độ, đánh giá mức độ hoàn thành hoặc đánh dấu check đơn giản. |
    | **Giao diện liên quan**           | - Trang “Cuộc họp” <br>- Danh sách buổi họp bên phải <br>- Giao diện nội dung chi tiết của từng buổi họp |
    | **Luồng thao tác chính**          | **1. Truy cập giao diện nội dung buổi họp:**<br>&emsp;a. Ở trang tổng quan lớp học admin chọn một lớp cụ thể → vào tab **Cuộc họp**.<br>&emsp;b. Chọn buổi họp cụ thể từ danh sách bên phải.<br><br>**2. Thêm nội dung vào buổi họp:**<br>&emsp;a. Nhấn nút **“Thêm nội dung cuộc họp”**.<br>&emsp;b. Giao diện hiển thị nhóm nội dung có thể thêm theo các loại như:<br>&emsp;&emsp;• `Hướng dẫn`<br>&emsp;&emsp;• `Quy trình`<br>&emsp;&emsp;• `Kiểm tra`<br>&emsp;&emsp;• `Đánh giá`<br>&emsp;&emsp;• `Nhiệm vụ`<br>&emsp;c. Tick chọn nội dung cần thêm.<br>&emsp;d. Nhấn **Thêm** để hoàn tất.<br><br>**3. Thao tác với từng nội dung:**<br>&emsp;a. Tùy loại nội dung, giao diện cho phép nhập ghi chú, chỉnh phần trăm, chọn mức đánh giá hoặc đánh dấu hoàn thành. |
    | **Trạng thái hiển thị theo loại** | - **Hướng dẫn**, **Nhiệm vụ**: Trường mô tả có thể chỉnh sửa, hỗ trợ nhận xét, chèn link, đính kèm hình ảnh.<br>- **Quy trình**: Hiển thị thanh progress để điều chỉnh % hoàn thành.<br>- **Kiểm tra**: Hiển thị các mức `Xuất sắc`, `Khá tốt`, `Trung bình`, `Không tốt`.<br>- **Đánh giá**: Checkbox tick để đánh dấu hoàn thành. |
    | **Điều kiện**                     | - Chỉ tài khoản **Admin** có quyền thêm/sửa nội dung buổi họp.<br>- Buổi họp phải ở trạng thái hợp lệ (đã lên lịch). |
    | **Kết quả hiển thị**              | - Các nội dung mới hiển thị trong danh sách nội dung chi tiết của buổi họp.<br>- Giao diện phản ánh trạng thái và loại nội dung tương ứng.<br>- Toàn bộ dữ liệu được lưu tự động và hiển thị đúng vị trí đã chọn. |
    | **Trường hợp không có dữ liệu**   | - Nếu chưa có nội dung: hiển thị “Chưa có nội dung nào cho buổi họp này”.<br>- Nếu không tick chọn nội dung nào khi thêm mới: nút “Thêm” bị vô hiệu hóa. |



#### 3.3.19 Thiết lập lại nộp bài (Reset kết quả bài tập về nhà và kiểm tra học viên) { #toc-3-3-19 }

??? book "Thiết lập lại nộp bài (Reset kết quả bài tập về nhà và kiểm tra học viên)"
    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Thiết lập lại nộp bài |
    | **Vai trò**                 | Admin |
    | **Mô tả**                   | Cho phép Admin **thiết lập lại toàn bộ kết quả làm bài** của một học viên đối với một bài kiểm tra hoặc bài tập về nhà đã được giao. Chức năng này sẽ **xoá điểm số, trạng thái nộp bài, thời gian làm bài và các ghi chú** liên quan, đưa bài làm của học viên về trạng thái như chưa từng nộp. |
    | **Giao diện liên quan**     | - Trang chi tiết lớp học<br>- Tab “Kiểm tra” hoặc “Bài tập về nhà”<br>- Giao diện danh sách bài đã giao<br>- Popup xác nhận thiết lập lại |
    | **Luồng thao tác chính**    | 1. Admin vào **trang Tổng quan** và chọn **lớp học cụ thể**<br>2. Trong giao diện lớp học, chọn tab **“Kiểm tra”** hoặc **“Bài tập về nhà”**<br>3. Nhấn vào **biểu tượng mũi tên xoay vòng 🔁** tại dòng của học viên cần reset bài<br>4. Hệ thống hiển thị **popup xác nhận:**<br>&emsp;• Tiêu đề: *Thiết lập lại nộp bài*<br>&emsp;• Nội dung: *“Bạn chắc chắn muốn thiết lập lại kết quả làm bài của học viên?”*<br>5. Nhấn **“Xác nhận”** để hoàn tất<br>6. Hệ thống xoá toàn bộ dữ liệu làm bài và cập nhật lại trạng thái thành *“Chưa nộp”* |
    | **Điều kiện**               | - Bài tập hoặc kiểm tra đã được giao<br>- Học viên đã từng nộp bài và có kết quả chấm điểm<br>- Admin có quyền chỉnh sửa kết quả bài làm |
    | **Kết quả hiển thị**        | - Trạng thái bài làm chuyển về **“Chưa nộp”**<br>- Các trường: điểm số, trạng thái chấm, thời gian làm bài, số câu bỏ qua… đều bị xoá<br>- Giao diện học viên sẽ không thấy bài làm đã nộp trước đó<br>- Admin có thể giao lại nếu cần |
    | **Trường hợp không có dữ liệu** | - Nếu học viên chưa nộp bài: biểu tượng thiết lập lại không hiển thị<br>- Nếu chưa có bài tập/kiểm tra nào: giao diện trống hoặc hiển thị thông báo phù hợp |

#### 3.3.20 Tìm kiếm và lọc danh sách lớp học { #toc-3-3-20 }

??? book "Tìm kiếm và lọc danh sách lớp học"
    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Tìm kiếm và lọc danh sách lớp học |
    | **Vai trò**                 | Admin |
    | **Mô tả**                   | Cho phép Admin tìm kiếm nhanh và lọc danh sách lớp học dựa theo các tiêu chí: **Tên lớp**, **Loại lớp**, **Trạng thái**, **Trình độ**, **Học kỳ**. Chức năng này hỗ trợ người dùng quản lý lớp dễ dàng và truy cập chính xác vào lớp cần thao tác. |
    | **Giao diện liên quan**     | - Màn hình danh sách lớp học (tab "Lớp") |
    | **Luồng thao tác chính**    | 1. Admin truy cập vào mục **“Lớp”** từ sidebar<br>2. Giao diện hiển thị toàn bộ danh sách lớp học<br>3. Người dùng có thể thao tác các bước:<br>&emsp;a. **Tìm kiếm theo tên lớp:** nhập từ khoá vào ô tìm kiếm phía trên<br>&emsp;b. **Chọn bộ lọc:**<br>&emsp;&emsp;- **Loại lớp** (ví dụ: Lớp chung, Lớp 1-1)<br>&emsp;&emsp;- **Trạng thái lớp** (ví dụ: Đang học, Đã kết thúc, Sắp bắt đầu)<br>&emsp;&emsp;- **Trình độ** (ví dụ: Sơ cấp N5, N4...)<br>&emsp;&emsp;- **Học kỳ** (ví dụ: Kỳ Xuân, Hè, Thu, Đông)<br>4. Danh sách lớp tự động cập nhật sau mỗi thao tác lọc hoặc tìm kiếm |
    | **Điều kiện**               | - Có ít nhất một lớp học trong hệ thống<br>- Các bộ lọc phải có dữ liệu cấu hình sẵn từ backend |
    | **Kết quả hiển thị**        | - Giao diện danh sách lớp cập nhật theo bộ lọc hoặc từ khoá tìm kiếm<br>- Hiển thị đúng các thông tin: Mã lớp, Khoá học, Sĩ số, Điểm số, % đi học, % làm bài, Đánh giá tổng kết |
    | **Trường hợp không có dữ liệu** | - Không tìm thấy lớp phù hợp: hiển thị thông báo *“Không tìm thấy lớp học phù hợp với tiêu chí tìm kiếm”*<br>- Tất cả bộ lọc trống: hiển thị toàn bộ danh sách lớp học |


### 3.4 Quản lý trợ giảng (Admin)

#### 3.4.1 Tạo mới trợ giảng { #toc-3-4-1}
??? book "Tạo mới trợ giảng"

    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Tạo mới trợ giảng |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Cho phép admin tạo một tài khoản trợ giảng mới để phân bổ vào các lớp học. Các thông tin bao gồm họ tên, giới tính, ngày sinh, số điện thoại, email, vai trò, mật khẩu, và trạng thái tài khoản. |
    | **Giao diện liên quan**         | - Màn hình danh sách trợ giảng<br>- Popup tạo mới trợ giảng |
    | **Luồng thao tác chính**        | <br>1. Nhấn nút **“Thêm mới”** trên giao diện danh sách trợ giảng.<br>2. Hệ thống hiển thị popup điền thông tin:<br> - Họ tên<br> - Ngày sinh<br> - Giới tính<br> - Số điện thoại<br> - Email<br> - Vai trò (Assistant Teacher)<br> - Trạng thái: **Đang kích hoạt / Vô hiệu**<br> - Mật khẩu<br>3. Nhấn **“Thêm mới”** để hoàn tất tạo trợ giảng. |
    | **Điều kiện**                   | - Email chưa tồn tại trong hệ thống.<br>- Các trường thông tin không được bỏ trống. |
    | **Kết quả hiển thị**            | - Trợ giảng mới được thêm vào danh sách.<br>- Trạng thái “Đang kích hoạt” cho phép được phân lớp.<br>- Trạng thái “Vô hiệu” sẽ không thể vào lớp học. |
    | **Trường hợp không có dữ liệu** | - Trường nào không nhập sẽ báo lỗi và không cho lưu. |

#### 3.4.2 Cập nhật thông tin trợ giảng { #toc-3-4-2}
??? book "Cập nhật thông tin trợ giảng"

    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Cập nhật thông tin trợ giảng |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Admin có thể cập nhật các thông tin cá nhân của trợ giảng như: họ tên, giới tính, ngày sinh, số điện thoại, mật khẩu, vai trò và trạng thái tài khoản. |
    | **Giao diện liên quan**         | - Màn hình danh sách trợ giảng<br>- Popup cập nhật trợ giảng |
    | **Luồng thao tác chính**        | <br>1. Nhấn biểu tượng (sửa) ở từng dòng trợ giảng.<br>2. Giao diện popup cập nhật hiển thị.<br>3. Admin chỉnh sửa các trường:<br> - Họ tên<br> - Ngày sinh<br> - Giới tính<br> - Số điện thoại<br> - Vai trò<br> - Trạng thái<br>4. Nhấn **“Cập nhật tài khoản”** để lưu thay đổi. |
    | **Điều kiện**                   | - Email không được sửa đổi.<br>- Các trường không được để trống. |
    | **Kết quả hiển thị**            | - Dữ liệu được cập nhật trực tiếp lên danh sách.<br>- Nếu chuyển sang trạng thái “Xóa”, trợ giảng bị ẩn khỏi danh sách gán lớp. |
    | **Trường hợp không có dữ liệu** | - Hiển thị popup báo lỗi nếu thông tin cập nhật không hợp lệ. |

#### 3.4.3 Xóa trợ giảng { #toc-3-4-3}
??? book "Xóa trợ giảng"

    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Xóa trợ giảng |
    | **Vai trò**                     | Admin |
    | **Mô tả**                       | Cho phép admin xóa trợ giảng khỏi hệ thống. Hiện tại việc xóa thực hiện thông qua việc thay đổi trạng thái sang “Xóa”. Trong tương lai, hệ thống sẽ thay bằng nút icon thùng rác, và click vào là xóa luôn không hiển thị xác nhận. |
    | **Giao diện liên quan**         | - Màn hình danh sách trợ giảng<br>- Popup chỉnh sửa trợ giảng |
    | **Luồng thao tác chính**        | <br>**Hiện tại:**<br>1. Nhấn nút trạng thái “Vô hiệu” → chọn “Xóa” trong menu trạng thái.<br>**Tương lai:**<br>1. Nhấn vào icon thùng rác để xóa ngay lập tức. |
    | **Điều kiện**                   | - Chỉ xóa trợ giảng chưa gán lớp hoặc đang ở trạng thái “Vô hiệu”. |
    | **Kết quả hiển thị**            | - Trợ giảng bị loại khỏi danh sách và không thể tìm thấy trong các chức năng gán lớp. |
    | **Trường hợp không có dữ liệu** | - Nếu không tìm thấy ID trợ giảng trong hệ thống sẽ báo lỗi không tồn tại. |

### 3.5 Quản lý hóa đơn (Admin, Support)

#### 3.5.1 Chức năng thống kê hóa đơn {#toc-3-5-1}
??? book "Chức năng thống kê hóa đơn"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Thống kê hóa đơn |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, support xem thông tin về hóa đơn có trên hệ thống. Sau khi truy cập đến màn hình quản lý hóa đơn, admin có thể xem, sửa, xóa toàn bộ thông tin về từng hóa đơn, chỉnh sửa, tìm kiếm thủ công, tìm kiếm bằng bộ lọc và xem biểu đồ thống kê về các thông tin như số ngày, tổng KPI, số hóa đơn, tổng giá trị các hóa đơn. |
    | **Giao diện liên quan**         | - Màn hình quản lý lớp.<br>- Thanh công cụ (nằm bên trái màn hình).<br>- Menu Thống kê.<br>- Submenu Hóa đơn. |
    | **Luồng thao tác chính**        | <br>1. Từ thanh công cụ, chọn menu Thống kê.<br>2. Từ menu Thống kê, chọn submenu Hóa đơn.<br>3. Xem thông tin trên màn hình quản lý hóa đơn:<br>&emsp;a. Các biểu đồ:<br>&emsp;&emsp;- Biểu đồ `SỐ NGÀY`: biểu đồ thể hiện dưới dạng widget chứa chữ `SỐ NGÀY` {`Tổng số ngày`} màu đen, biểu đồ cột màu cam được bo góc trên chứa số cột tương ứng với tổng số ngày, thể hiện được sự khác biệt giữa số lượng hóa đơn được lập trong ngày dựa trên chiều cao của cột. Khi trỏ chuột đến biểu đồ, màn hình hiển thị ngày tương ứng với cột (định dạng dd/mm/yyyy).<br>&emsp;&emsp;- Biểu đồ `TỔNG KPI`: biểu đồ thể hiện dưới dạng widget chứa chữ `TỔNG KPI` {`Tổng KPI`} màu đen, biểu đồ đường viền chân trời thành phố (Skyline silhouette) màu cam biểu hiện tổng KPI được thực hiện trên mỗi hóa đơn được tạo. Khi trỏ chuột đến biểu đồ, màn hình hiển thị giá trị KPI/ đơn theo từng hóa đơn được tạo.<br>&emsp;&emsp;- Biểu đồ `SỐ HÓA ĐƠN`: biểu đồ thể hiện dưới dạng widget chứa chữ `SỐ HÓA ĐƠN` {`Tổng số hóa đơn`} màu đen, biểu đồ đường có đường viền màu cam đậm và miền bên dưới có màu cam nhạt biểu thị số lượng hóa đơn được lập theo mỗi ngày. Khi trỏ chuột đến biểu đồ, màn hình hiển thị số lượng hóa đơn thống kê được cho từng ngày (tính theo thời điểm hiện tại).<br>&emsp;&emsp;- Biểu đồ `GIÁ TRỊ`: biểu đồ thể hiện dưới dạng widget chứa chữ `GIÁ TRỊ` {`Tổng giá trị hóa đơn`} màu đen, biểu đồ đường có viền cam đậm và miền bên dưới có màu cam nhạt biểu thị tổng giá trị các hóa đơn được lập trên `Tổng số ngày`. Khi trỏ chuột đến biểu đồ, màn hình hiển thị `Tổng giá trị hóa đơn` dựa theo từng ngày.<br>&emsp;b. Nút "Tạo hóa đơn" để thực hiện chức năng tạo hóa đơn.<br>&emsp;c. Thanh tìm kiếm: "🔍 Tìm kiếm": khi trỏ chuột đến ô "🔍 Tìm kiếm", ô này chuyển sang màu đậm hơn.<br>&emsp;d. Các bộ lọc thuộc tính bao gồm `Người Phụ Trách`, `Thời Gian`, `Loại Hóa Đơn`, `Trạng Thái` có chữ màu xám và viền xám nền trắng. Khi lựa chọn giá trị cho bộ lọc, bộ lọc sẽ chuyển sang chữ cam, viền cam và nền trắng.<br>&emsp;e. Bảng thống kê dữ liệu hóa đơn:<br>&emsp;&emsp;- Bao gồm các cột `Hóa Đơn`, `Trạng Thái`, `Loại Hóa Đơn`, `Tên Học Viên`, `Mã Học Viên`, `Người Phụ Trách`, `Ngày Ghi Nhận`, `Số Tiền Đã Đóng`, `Số KPI`.<br>&emsp;&emsp;- Các dòng dữ liệu được hiển thị nội dung tương ứng với từng cột, màu sắc xen kẻ giữa xám và trắng.<br>&emsp;&emsp;- Tại cuối mỗi dòng dữ liệu đều biểu tượng "ⓧ" dùng để xóa dòng đó.<br>&emsp;&emsp;- Phía dưới bảng thống kê dữ liệu hóa đơn, hiển thị thanh công cụ bao gồm các nút "Trang trước" khi trỏ chuột vào sẽ đậm hơn, tổng số trang, giá trị của trang đang hiển thị có nền màu hồng, nút "Trang sau" khi trỏ chuột vào sẽ đậm hơn, ô chọn số lượng dòng dữ liệu cho một trang (chọn từ danh sách cố định các giá trị sau: 20, 50, 100, 200). |
    | **Điều kiện**                   | - Đăng nhập thành công vào tài khoản admin, support.<br>- Nhìn thấy màn hình quản lý lớp và thanh công cụ. |
    | **Kết quả hiển thị**            | - Dashboard bao gồm các biểu đồ thống kê về các thông tin như số ngày, tổng KPI, số hóa đơn, tổng giá trị các hóa đơn.<br>- Thông tin tổng quát về các hóa đơn được hiển thị dạng bảng bao gồm các cột `Hóa Đơn`, `Trạng Thái`, `Loại Hóa Đơn`, `Tên Học Viên`, `Mã Học Viên`, `Người Phụ Trách`, `Ngày Ghi Nhận`, `Số Tiền Đã Đóng`, `Số KPI`.<br>- Bảng có thể được chia thành nhiều trang hiển thị, số của trang đang hiển thị nằm trong một ô vuông có màu nền hồng nhạt.<br>- Số lượng hóa đơn hiển thị trên bảng được đặt mặc định tại 20 hóa đơn (có thể tùy chỉnh giữa các giá trị: 20, 50, 100, 200). |
    | **Trường hợp không có dữ liệu** | - Nếu không có dữ liệu, các biểu đồ và bảng dữ liệu hóa đơn sẽ trống và hình minh họa và dòng chữ "Bảng dữ liệu này đang trống" sẽ hiển thị trên màn hình. |

#### 3.5.2 Chức năng tạo hóa đơn {#toc-3-5-2}
??? book "Chức năng tạo hóa đơn"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Tạo hóa đơn |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, supoort tạo một hóa đơn bằng việc cung cấp các thông tin cần thiết (bắt buộc) như sau:<br>&emsp;1.`Hóa đơn`.<br>&emsp;2.`Trạng thái`.<br>&emsp;3.`Tên học viên`.<br>&emsp;4.`Mã học viên`.<br>&emsp;5. `Chọn ngày tạo`.<br>&emsp;6.`Loại hóa đơn`.<br>&emsp;7.`Số tiền`.<br>&emsp;8.`Loại tài khoản`.<br>&emsp;9.`Quy đổi (VNĐ)`.<br>&emsp;10. `Người phụ trách`.<br>&emsp;11. `Tệp đính kèm`. |
    | **Giao diện liên quan**         | - Màn hình quản lý hóa đơn.<br>- Nút tạo hóa đơn (nằm bên phải dòng chữ "Quản lý hóa đơn").<br>- Popup "Tạo hóa đơn".<br>- Popup "Lịch".<br>- Popup "Thêm người phụ trách". |
    | **Luồng thao tác chính**        | <br>1. Từ màn hình quản lý hóa đơn, chọn nút (+) để tạo hóa đơn.<br>2. Hệ thống hiển thị popup "Tạo hóa đơn" có nền trắng, các ô nhập liệu hình chữ nhật được bo tròn góc, chữ mặc định trên ô có màu xám nhạt và được chưa làm 2 khu vực `*Thông tin bắt buộc` và `*Thông tin thêm`, các ô nhập liệu bắt buộc bao gồm:<br>&emsp;a. `Hóa đơn`: nhập tên hóa đơn (cho phép nhập ký tự đặc biệt).<br>&emsp;b. `Trạng thái`: chọn trạng thái phù hợp cho hóa đơn: *Đợi lớp*, *Xác nhận*, *Hoàn tiền*, *Học trước*, *Hủy đơn*.<br>&emsp;c. `Tên học viên`: nhập tên học viên được tạo hóa đơn (cho phép nhập ký tự đặc biệt).<br>&emsp;d. `Mã học viên`: nhập mã học viên (cho phép nhập ký tự đặc biệt).<br>&emsp;e. `Chọn ngày tạo`: chọn từ popup "Lịch" (định dạng: *dddd/dd/mm*).<br>&emsp;f. `Loại hóa đơn`: chọn từ danh sách bao gồm *Sale*, *Cọc*, *Upsale*, *Renew*, *Bổ sung cọc*, *Resale*, *Bổ sung học phí*.<br>&emsp;g. `Số tiền`: nhập vào số tiền tương ứng (số dương), chọn đơn vị phù hợp (VNĐ, ¥).<br>&emsp;h. `Loại tài khoản`: chọn từ danh sách bao gồm *Tài khoản công ty*, *Tài khoản cá nhân*, *Tiền mặt*, *Khác*.<br>&emsp;i. `Quy đổi (VNĐ)`: nhập giá trị nếu đơn vị không phải VNĐ.<br>&emsp;k. `Người phụ trách`:<br>&emsp;&emsp;- Chọn vào nút (+) nền hồng viền trắng (bên cạnh chữ "Người phụ trách") để popup "Thêm người phụ trách" xuất hiện.<br>&emsp;&emsp;- Lần lượt chọn *Người phụ trách* chịu trách nhiệm với hóa đơn và *Số KPI* tương ứng.<br>&emsp;j. `Tệp đính kèm`:<br>&emsp;&emsp;- Chọn vào nút (+) nền hồng viền trắng (bên cạnh chữ "Tệp đính kèm") để cửa sổ chọn tệp xuất hiện.<br>&emsp;&emsp;- Chỉ được chọn 1 tệp đính kèm duy nhất (định dạng hợp lệ của tệp là: .png, .jpg, .jepg, .pdf, .docx, .txt).<br>4. Các ô nhập liệu không bắt buộc:<br>&emsp;** Các ô nhập liệu này nằm phía dưới dòng `*Thông tin thêm`.<br>&emsp;** Các ô nhập liệu không bắt buộc bao gồm:<br>&emsp;a. `Ghi chú`: ô nhập liệu tự do dành cho các thông tin bổ sung về chi tiết của hóa đơn.<br>&emsp;b. `Email`: ô nhập liệu thêm thông tin về tài khoản thư điện tử (Gmail, Outlook, etc.).<br>&emsp;c. `Số điện thoại`: ô nhập liệu thêm thông tin về số điện thoại của học viên .<br>&emsp;d. `Lớp dự kiến`: ô nhập liệu thêm mã lớp (đã có) vào chi tiết hóa đơn.<br>&emsp;e. `Thông tin`: ô nhập liệu tự do dành cho các thông tin bổ sung về chi tiết của hóa đơn.<br>5. Chọn nút "Thêm" màu cam nhạt viền cam đậm, chữ màu cam trên popup "Tạo hóa đơn".<br>&emsp;a. Biểu tượng "◌ Vui lòng đợi" tông màu cam xuất hiện trên màn hình, điều này đồng nghĩa với hệ thống đang thu thập thông tin được nhập để tạo hóa đơn mới.<br>&emsp;b. Hệ thống trả về màn hình quản lý hóa đơn, hóa đơn sẽ được thêm vào ở dòng cuối cùng của bảng thống kê dữ liệu hóa đơn. |
    | **Điều kiện**                   | - Đăng nhập thành công vào tài khoản admin, support.<br>- Nhìn thấy màn hình quản lý hóa đơn với đầy đủ các chức năng. |
    | **Kết quả hiển thị**            | **Hiện tại**<br>- Dashboard với các biểu đồ sẽ tự động được cập nhật và bảng dữ liệu hóa đơn tự động hiển thị hóa đơn mới tạo ở phía dưới cùng của bảng.<br><br>**Tương lai**<br>- Màn hình xuất hiện thông báo "Hóa đơn {tên hóa đơn: `Hóa đơn`} đã được thêm thành công!".<br>- Dashboard với các biểu đồ sẽ tự động được cập nhật và bảng dữ liệu hóa đơn tự động hiển thị hóa đơn mới tạo ở phía dưới cùng của bảng. |
    | **Trường hợp không có dữ liệu** | Nếu không có dữ liệu được hiển thị trên màn hình hiện tại:<br>&emsp;1. Kiểm tra dòng cuối cùng của bảng dữ liệu:<br>&emsp;&emsp;a. Chuyển sang trang cuối cùng của bảng dữ liệu đang được hiển thị.<br>&emsp;&emsp;b. Nếu không có quá nhiều dữ liệu, chọn số lượng dòng cùng xuất hiện trong một trang nhiều hơn giá trị hiện tại. |s

#### 3.5.3 Chức năng tìm kiếm bằng ký tự {#toc-3-5-3}
??? book "Chức năng tìm kiếm bằng ký tự"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Tìm kiếm bằng ký tự |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, support tìm kiếm tự do trên toàn bộ bảng dữ liệu thống kê hóa đơn. Việc tìm kiếm dựa trên các ký tự được nhập vào ô "🔍 Tìm kiếm" (cho phép tìm kiếm các ký tự đặc biệt), các cột sẽ được tham chiếu cho việc tìm kiếm trên bảng dữ liệu thống kê hóa đơn bao gồm: `Hóa Đơn`, `Tên Học Viên`, `Mã Học Viên`. Số lượng ký tự tối thiểu để thực hiện việc tìm kiếm là 1 ký tự và khi nhập vào ký tự đầu tiên, hệ thống sẽ tự động tìm kiếm và cập nhật bảng dữ liệu với các dòng có chứa hoặc trùng với ký tự/ chuỗi ký tự đang được tìm kiếm. Việc cập nhật dữ liệu ở bảng dữ liệu thống kê hóa đơn sẽ kéo theo các biểu đồ thống kê được cập nhật chính xác với dữ liệu đang được hiển thị. |
    | **Giao diện liên quan**         | - Màn hình quản lý hóa đơn.<br>- Ô nhập liệu "🔍 Tìm kiếm".  |
    | **Luồng thao tác chính**        | <br>1. Nhấn vào ô nhập liệu "🔍 Tìm kiếm" hình ô-van màu xám không viền nằm ở phía bên trên của màn hình.<br>2. Thực hiện nhập dữ liệu cần tìm:<br>&emsp;a. Số lượng ký tự tối thiểu: 1 ký tự.<br>&emsp;b. Được phép nhập ký tự đặc biệt.<br>3. Hệ thống sẽ tìm kiếm và tự động cập nhật dữ liệu trên bảng và biểu đồ thống kê. |
    | **Điều kiện**                   | - Đăng nhập thành công vào tài khoản admin, support.<br>- Nhìn thấy màn hình quản lý hóa đơn và ô nhập liệu "🔍 Tìm kiếm".<br>- Phải có ít nhất một hóa đơn trong toàn bộ hệ thống. |
    | **Kết quả hiển thị**            | - Dashboard với các biểu đồ sẽ tự động được cập nhật và bảng dữ liệu hóa đơn tự động hiển thị các hóa đơn có giá tri tại các cột `Hóa Đơn`, `Tên Học Viên`, `Mã Học Viên` có chứa hoặc trùng với ký tự/ chuỗi ký tự đang được tìm kiếm.<br>- Nếu không có dữ liệu trùng khớp, hệ thống sẽ hiển thị icon `thùng rỗng` màu cam kèm với dòng chữ 'Bảng dữ liệu này đang trống' màu đen. |
    | **Trường hợp không có dữ liệu** | Nếu không có dữ liệu được hiển thị trên màn hình hiện tại:<br>&emsp;1. Kiểm tra lại ký tự/ chuỗi ký tự nhập vào.<br>&emsp;2. Kiểm tra kết nối internet của thiết bị.<br>&emsp;3. Liên hệ hỗ trợ trực tiếp. |

#### 3.5.4 Chức năng tìm kiếm bằng bộ lọc thuộc tính {#toc-3-5-4}
??? book "Chức năng tìm kiếm bằng bộ lọc thuộc tính"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Tìm kiếm bằng các bộ lọc thuộc tính |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, support tìm kiếm trên toàn bộ bảng dữ liệu thống kê hóa đơn dựa vào giá trị của bộ lọc. Việc tìm kiếm sẽ diễn ra ngay sau khi admin, support chọn ít nhất 1 giá trị cho ít nhất 1 bộ lọc, các bộ lọc được xây dựng sẵn bao gồm: `Người Phụ Trách`, `Thời Gian`, `Loại Hóa Đơn`, `Trạng Thái`.Các bộ lọc hiển thị dưới dạng dropdown với danh sách giá trị cố định. |
    | **Giao diện liên quan**         | - Màn hình quản lý hóa đơn.<br>- Bộ lọc `Người Phụ Trách`.<br>- Bộ lọc `Thời Gian`.<br>- Bộ lọc `Loại Hóa Đơn`.<br>- Bộ lọc `Trạng Thái`.<br>- Popup "Lịch". |
    | **Luồng thao tác chính**        | <br>1. Chọn bộ lọc và giá trị lọc tương ứng:<br>&emsp; -`Người Phụ Trách`: danh sách nhân viên có quyền lập hóa đơn và nhận KPI tương ứng hiện ra.<br>&emsp;a. `Thời Gian`: bao gồm các lựa chọn `Hôm nay`, `Tuần nay`, `Tuần trước`, `Tháng này`, `Tháng trước`, `Năm nay`, `Tùy chọn`.<br>&emsp;&emsp;*Lưu ý:* `Tùy chọn` *sẽ xuất hiện popup "Lịch", khoảng thời gian chọn sẽ dùng để tìm kiếm*<br>&emsp;b. `Loại Hóa Đơn`: lựa chọn loại hóa đơn từ danh sách được hiển thị.<br>&emsp;*(Cọc, Sale, Upsale, Bổ sung học phí, Bổ sung cọc, Renew, Resale)*<br>&emsp;c. `Trạng Thái`: lựa chọn trạng thái hóa đơn từ danh sách được hiển thị.<br>&emsp;*(Đợi lớp, Hoàn tiền, Học trước, Hủy đơn, Xác nhận)*<br>2. Sau khi chọn giá trị cho bộ lọc, khung ngoài và tên của bộ lọc sẽ chuyển sang màu cam.<br>&emsp;d. `Trạng Thái`: lựa chọn trạng thái hóa đơn từ danh sách được hiển thị.<br>&emsp;*(Đợi lớp, Hoàn tiền, Học trước, Hủy đơn, Xác nhận)* |
    | **Điều kiện**                   | - Đăng nhập thành công vào tài khoản admin, support.<br>- Nhìn thấy màn hình quản lý hóa đơn và các bộ lọc tìm kiếm.<br>- Phải có ít nhất một hóa đơn trong toàn bộ hệ thống. |
    | **Kết quả hiển thị**            | - Dashboard với các biểu đồ sẽ tự động được cập nhật và bảng dữ liệu hóa đơn tự động hiển thị các hóa đơn phù hợp với giá trị/ các giá trị lọc.<br>- Những bộ lọc nào đã chọn giá trị lọc sẽ chuyển màu chữ và khung sang màu cam. |
    | **Trường hợp không có dữ liệu** | Nếu không có dữ liệu được hiển thị trên màn hình hiện tại:<br>&emsp;1. Kiểm tra giá trị lọc/ các giá trị lọc đã hiển thị tại bộ lọc tương ứng.<br>&emsp;2. Kiểm tra kết nối Internet.<br>&emsp;3. Liên hệ hỗ trợ trực tiếp. |

#### 3.5.5 Chức năng tìm kiếm kết hợp ký tự và bộ lọc {#toc-3-5-5}
??? book "Chức năng tìm kiếm kết hợp ký tự và bộ lọc"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Tìm kiếm kết hợp ký tự và bộ lọc |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, support tìm kiếm trên toàn bộ bảng dữ liệu thống kê hóa đơn dựa vào sự kết hợp của 2 chức năng: **Tìm kiếm bằng ký tự**, **Tìm kiếm bằng bộ lọc thuộc tính**. Hệ thống hỗ trợ kết hợp cả hai phương thức để thu hẹp kết quả tìm kiếm một cách chính xác và hiệu quả. |
    | **Giao diện liên quan**         | - Màn hình quản lý hóa đơn.<br>- Ô nhập liệu "🔍 Tìm kiếm".<br>- Bộ lọc `Người Phụ Trách`.<br>- Bộ lọc `Thời Gian`.<br>- Bộ lọc `Loại Hóa Đơn`.<br>- Bộ lọc `Trạng Thái`.<br>- Popup "Lịch". |
    | **Luồng thao tác chính**        | <br>Người dùng có thể thực hiện cả hai thao tác sau theo thứ tự tự chọn:<br>1. Tìm kiếm bằng ký tự:<br>&emsp;a. Nhấn vào ô nhập liệu “🔍 Tìm kiếm” hình ô-van màu xám không viền nằm ở phía trên của màn hình.<br>&emsp;b. Thực hiện nhập dữ liệu cần tìm:<br>&emsp;&emsp;c. Số lượng ký tự tối thiểu: 1 ký tự.<br>&emsp;&emsp;d. Được phép nhập ký tự đặc biệt.<br>2. Tìm kiếm bằng bộ lọc thuộc tính bằng cách chọn bộ lọc và giá trị tương ứng:<br>&emsp;a. `Người Phụ Trách`: danh sách nhân viên có quyền lập hóa đơn và nhận KPI tương ứng hiện ra.<br>&emsp;b. `Thời Gian`: bao gồm các lựa chọn `Hôm nay`, `Tuần nay`, `Tuần trước`, `Tháng này`, `Tháng trước`, `Năm nay`, `Tùy chọn`.<br>&emsp;&emsp;*Lưu ý:* `Tùy chọn` *sẽ xuất hiện popup "Lịch", khoảng thời gian chọn sẽ dùng để tìm kiếm*<br>&emsp;c. `Loại Hóa Đơn`: lựa chọn loại hóa đơn từ danh sách được hiển thị.<br>&emsp;*(Cọc, Sale, Upsale, Bổ sung học phí, Bổ sung cọc, Renew, Resale)*<br>&emsp;d. `Trạng Thái`: lựa chọn trạng thái hóa đơn từ danh sách được hiển thị.<br>&emsp;*(Đợi lớp, Hoàn tiền, Học trước, Hủy đơn, Xác nhận)*  |
    | **Điều kiện**                   | - Đăng nhập thành công vào tài khoản admin, support.<br>- Nhìn thấy màn hình quản lý hóa đơn và các bộ lọc tìm kiếm.<br>- Phải có ít nhất một hóa đơn trong toàn bộ hệ thống. |
    | **Kết quả hiển thị**            | - Dashboard với các biểu đồ sẽ tự động được cập nhật và bảng dữ liệu hóa đơn tự động hiển thị các hóa đơn phù hợp với ký tự/ chuỗi ký tự và giá trị/ các giá trị lọc.<br>- Những bộ lọc nào đã chọn giá trị lọc sẽ chuyển màu chữ và khung sang màu cam. |
    | **Trường hợp không có dữ liệu** | Nếu không có dữ liệu được hiển thị trên màn hình hiện tại:<br>&emsp;1. Kiểm tra ký tự/ chuỗi ký tự tại ô "🔍 Tìm kiếm" và giá trị lọc/ các giá trị lọc đã hiển thị tại bộ lọc tương ứng.<br>&emsp;2. Kiểm tra kết nối Internet.<br>&emsp;3. Liên hệ hỗ trợ trực tiếp. |

#### 3.5.6 Chức năng xem chi tiết hóa đơn {#toc-3-5-6}
??? book "Chức năng xem chi tiết hóa đơn"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Xem chi tiết hóa đơn |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, support xem lại các hóa đơn đã được tạo trước đó thông qua popup "Chi tiết hóa đơn" chứa đầy đủ các thông tin có liên quan ở các trường sau: `Hóa đơn`, `Trạng thái`, `Tên học viên`, `Mã học viên`, `Chọn ngày tạo`, `Loại hóa đơn`, `Số tiền`, `Loại tài khoản`, `Quy đổi (VNĐ)`, `Người phụ trách`, `Tệp đính kèm`, `Ghi chú`, `Email`, `Số điện thoại`, `Lớp dự kiến`, `Thông tin`. |
    | **Giao diện liên quan**         | - Màn hình quản lý hóa đơn.<br>- Bảng thống kê dữ liệu hóa đơn.<br>- Popup "Chi tiết hóa đơn". |
    | **Luồng thao tác chính**        | <br>1. Tại bảng thống kê dữ liệu hóa đơn, chọn vào hóa đơn cần xem chi tiết.<br>2. Popup "Chi tiết hóa đơn" xuất hiện, màn hình chính được làm mờ:<br>&emsp;a. Popup này bao gồm:<br>&emsp;- Thông tin bắt buộc phải có<br>&emsp;`Hóa đơn`, `Trạng thái`, `Tên học viên`, `Mã học viên`, `Chọn ngày tạo`, `Loại hóa đơn`, `Số tiền`, `Loại tài khoản`, `Quy đổi (VNĐ)`, `Người phụ trách`, `Tệp đính kèm`.<br>&emsp;- Thông tin bổ sung (không bắt buộc)<br>&emsp;`Ghi chú`, `Email`, `Số điện thoại`, `Lớp dự kiến`, `Thông tin`.<br>&emsp;b. Nút "Hủy bỏ" không viền và nút "Cập nhật" viền cam.<br>3. Để xem hóa đơn khác, chọn nút "Hủy bỏ" và tiếp tục lặp lại các thao tác. |
    | **Điều kiện**                   | - Đăng nhập thành công vào tài khoản admin, support.<br>- Phải có ít nhất một hóa đơn trong toàn bộ hệ thống.<br>- Hóa đơn được nhìn thấy trên bảng thống kê dữ liệu hóa đơn. |
    | **Kết quả hiển thị**            | - Popup hiển thị thông tin đúng với hóa đơn vừa được chọn, đầy đủ các trường thông tin và các nút để thao tác, màu sắc của popup và trạng thái làm mờ của màn hình chính hiển thị đúng. |
    | **Trường hợp không có dữ liệu** | 1. Nếu các trường thông tin bắt buộc `Hóa đơn`, `Trạng thái`, `Tên học viên`, `Mã học viên`, `Chọn ngày tạo`, `Loại hóa đơn`, `Số tiền`, `Loại tài khoản`, `Quy đổi (VNĐ)` trống:<br>&emsp;a. Liên hệ với đội ngũ có thẩm quyền để được hỗ trợ.<br>2. Nếu các trường thông tin bắt buộc `Người phụ trách` và `Tệp đính kèm` trống:<br>&emsp;a. Thực hiện cập nhật chi tiết hóa đơn.<br>&emsp;b. Đã thực hiện cập nhật nhưng vẫn trống:<br>&emsp;&emsp;- Liên hệ với đội ngũ có thẩm quyền để được hỗ trợ.<br>3. Nếu toàn bộ thông tin hóa đơn trống (trường hợp bất thường):<br>&emsp;a. Liên hệ với đội ngũ có thẩm quyền để được hỗ trợ. |

#### 3.5.7 Chức năng cập nhật hóa đơn {#toc-3-5-7}
??? book "Chức năng cập nhật hóa đơn"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Cập nhật hóa đơn |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, support cập nhật các chi tiết có trên hóa đơn đã được tạo trước đó thông qua popup "Chi tiết hóa đơn" chứa đầy đủ các thông tin có liên quan ở các trường sau: `Hóa đơn`, `Trạng thái`, `Tên học viên`, `Mã học viên`, `Chọn ngày tạo`, `Loại hóa đơn`, `Số tiền`, `Loại tài khoản`, `Quy đổi (VNĐ)`, `Người phụ trách`, `Tệp đính kèm`, `Ghi chú`, `Email`, `Số điện thoại`, `Lớp dự kiến`, `Thông tin`. |
    | **Giao diện liên quan**         | - Màn hình quản lý hóa đơn.<br>- Bảng thống kê dữ liệu hóa đơn.<br>- Popup "Chi tiết hóa đơn".<br>- Nút "Cập nhật" trong popup "Chi tiết hóa đơn". |
    | **Luồng thao tác chính**        | <br>1. Tại bảng thống kê dữ liệu hóa đơn, chọn vào hóa đơn cần cập nhật chi tiết.<br>2. Popup "Chi tiết hóa đơn" xuất hiện, màn hình chính được làm mờ:<br>&emsp;a. Popup này bao gồm:<br>&emsp;- Thông tin bắt buộc phải có<br>&emsp;`Hóa đơn`, `Trạng thái`, `Tên học viên`, `Mã học viên`, `Chọn ngày tạo`, `Loại hóa đơn`, `Số tiền`, `Loại tài khoản`, `Quy đổi (VNĐ)`, `Người phụ trách`, `Tệp đính kèm`.<br>&emsp;- Thông tin bổ sung (không bắt buộc)<br>&emsp;`Ghi chú`, `Email`, `Số điện thoại`, `Lớp dự kiến`, `Thông tin`.<br>&emsp;b. Nút "Hủy bỏ" không viền và nút "Cập nhật" viền cam.<br>3. Thực hiện cập nhật các trường thông tin kể trên:<br>&emsp;a. Đối với các trường thông tin nhập liệu văn bản `Hóa đơn`, `Tên học viên`, `Mã học viên`, `Số tiền`, `Quy đổi (VNĐ)`, `Ghi chú`, `Email`, `Số điện thoại`, `Lớp dự kiến`, `Thông tin`:<br>&emsp;&emsp;- Khi đưa con trỏ chuột đến, chuyển màu đậm hơn.<br>&emsp;&emsp;- Nhập dữ liệu.<br>&emsp;b. Đối với các trường thông tin lựa chọn từ danh sách có sẵn `Trạng thái`, `Loại hóa đơn`, `Loại tài khoản`:<br>&emsp;&emsp;- Khi đưa con trỏ chuột đến, danh sách chuyển màu đậm hơn.<br>&emsp;&emsp;- Khi trỏ đến một trong các lựa chọn, lựa chọn đó chuyển màu đậm hơn.<br>&emsp;&emsp;- Nhấn vào lựa chọn phù hợp.<br>&emsp;c. Đối với trường thông tin `📅 Chọn ngày tạo`:<br>&emsp;&emsp;- Khi nhấn vào, popup "Lịch" có màu nền xanh nhạt với các khung nội dung "Chọn ngày" và "Ngày đã chọn (định dạng dddd/dd/mm)", các nút "🖊️ Chuyển sang chế độ nhập", nút "Hủy" màu xanh lá không viền, nút "Ok" màu xanh lá không viền sẽ được hiển thị. Màn hình chính và popup "Chi tiết hóa đơn" sẽ được làm mờ.<br>&emsp;&emsp;- Chọn ngày tạo và nhấn nút "Ok" hoặc "Hủy" .<br>4. Để cập nhật hóa đơn khác:<br>&emsp;a. Nếu không cập nhật hóa đơn này, chọn nút "Hủy bỏ" và tiếp tục lặp lại các thao tác tại hóa đơn khác.<br>&emsp;a. Nếu cập nhật hóa đơn này:<br>&emsp;&emsp;- Chọn nút "Cập nhật", viền cam.<br>&emsp;&emsp;- Hệ thống hiển thị biểu tượng "◌ Vui lòng đợi" màu cam và làm mờ màn hình.<br>&emsp;&emsp;- Sau khi cập nhật xong, hệ thống hiển thị màn hình quản lý hóa đơn, tiếp tục lặp lại các thao tác cập nhật tại hóa đơn khác. |
    | **Điều kiện**                   | - Đăng nhập thành công vào tài khoản admin, support.<br>- Phải có ít nhất một hóa đơn trong toàn bộ hệ thống.<br>- Hóa đơn được nhìn thấy trên bảng thống kê dữ liệu hóa đơn. |
    | **Kết quả hiển thị**            | 1. Hiện tại:<br>&emsp;a. Trước khi cập nhật: popup hiển thị thông tin đúng với hóa đơn vừa được chọn, đầy đủ các trường thông tin và các nút để thao tác, màu sắc của popup và trạng thái làm mờ của màn hình chính hiển thị đúng.<br>&emsp;b. Sau khi cập nhật:<br>&emsp;&emsp;- Màn hình quản lý hóa đơn hiển thị đầy đủ các biểu đồ, thanh tìm kiếm, các bộ lọc và bảng thống kê dữ liệu hóa đơn.<br>&emsp;&emsp;- Nội dung sau cập nhật hiển thị đúng.<br><br>2. Tương lai:<br>&emsp;a. Trước khi cập nhật: popup hiển thị thông tin đúng với hóa đơn vừa được chọn, đầy đủ các trường thông tin và các nút để thao tác, màu sắc của popup và trạng thái làm mờ của màn hình chính hiển thị đúng.<br>&emsp;b. Sau khi cập nhật:<br>&emsp;&emsp;- Màn hình quản lý hóa đơn hiển thị thông báo "Hóa đơn {`Hóa đơn`} đã được cập nhật thành công!", đầy đủ các biểu đồ, thanh tìm kiếm, các bộ lọc và bảng thống kê dữ liệu hóa đơn.<br>&emsp;&emsp;- Nội dung sau cập nhật hiển thị đúng. |
    | **Trường hợp không có dữ liệu** | 1. Nếu các trường thông tin bắt buộc `Hóa đơn`, `Trạng thái`, `Tên học viên`, `Mã học viên`, `Chọn ngày tạo`, `Loại hóa đơn`, `Số tiền`, `Loại tài khoản`, `Quy đổi (VNĐ)` trống:<br>&emsp;a. Liên hệ với đội ngũ có thẩm quyền để được hỗ trợ.<br>2. Nếu các trường thông tin bắt buộc `Người phụ trách` và `Tệp đính kèm` trống:<br>&emsp;a. Thực hiện cập nhật chi tiết hóa đơn.<br>&emsp;b. Đã thực hiện cập nhật nhưng vẫn trống:<br>&emsp;&emsp;- Liên hệ với đội ngũ có thẩm quyền để được hỗ trợ.<br>3. Nếu toàn bộ thông tin hóa đơn trống (trường hợp bất thường):<br>&emsp;a. Liên hệ với đội ngũ có thẩm quyền để được hỗ trợ. |

#### 3.5.8 Chức năng xóa hóa đơn {#toc-3-5-8}
??? book "Chức năng xóa hóa đơn"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Xóa hóa đơn |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, support xóa hóa đơn khỏi hệ thống khi ấn vào biểu tượng ⓧ màu xám ở cuối mỗi dòng dữ liệu trên bảng thống kê dữ liệu hóa đơn tại màn hình quản lý hóa đơn. |
    | **Giao diện liên quan**         | - Màn hình quản lý hóa đơn<br>- Nút "ⓧ".<br>- Popup "Xóa". |
    | **Luồng thao tác chính**        | <br>1. Tại bảng thống kê dữ liệu hóa đơn trên màn hình quản lý hóa đơn, chọn nút "ⓧ" ở cuối dòng dữ liệu muốn xóa.<br>2. Hệ thống hiển thị popup "Xóa":<br>&emsp;a. Pop up có màu trắng, dòng chữ "Xóa" và "Bạn muốn xóa hóa đơn này" màu đen, nút "Hủy" nền trắng viền và chữ màu cam, nút "Xác nhận" không viền chữ trắng nền cam xuất hiện trên màn hình.<br>&emsp;b. Màn hình chính được làm mờ, các nút trên popup "Xóa" chuyển màu đậm hơn như được trỏ đến.<br>&emsp;c. Chọn nút "Xác nhận" để xóa hóa đơn hoặc nút "Hủy" để hủy bỏ thao tác xóa.<br>3. Sau khi xác nhận xóa, hệ thống chuyển về màn hình quản lý hóa đơn ban đầu, các biểu đồ và bảng thống kê dữ liệu hóa đơn sẽ được cập nhật. |
    | **Điều kiện**                   | - Đăng nhập thành công vào tài khoản admin, support.<br>- Phải có ít nhất một hóa đơn trong toàn bộ hệ thống.<br>- Hóa đơn được nhìn thấy trên bảng thống kê dữ liệu hóa đơn. |
    | **Kết quả hiển thị**            | 1. Hiện tại:<br>&emsp;a. Hệ thống trả về màn hình quản lý hóa đơn và tự động cập nhật nội dung các biểu đồ và bảng thống kê dữ liệu hóa đơn.<br>2. Tương lai:<br>&emsp;a. Hệ thống trả về màn hình quản lý hóa đơn và thông báo "Hóa đơn {`Hóa đơn`} được xóa thành công!".<br>&emsp;b. Tự động cập nhật nội dung các biểu đồ và bảng thống kê dữ liệu hóa đơn. |
    | **Trường hợp không có dữ liệu** | **Giả định**<br>1. Nút "ⓧ" không thế nhấn.<br>&emsp;a. Hóa đơn có thể không còn tồn tại:<br>&emsp;&emsp;- Nhấn tổ hợp phím `Ctrl+Shift+F5` hoặc `F5` để tải lại trang.<br>&emsp;&emsp;- Liên hệ với đội ngũ có thẩm quyền nếu vẫn gặp trường hợp tương tự sau khi tải lại.<br>&emsp;b. Lỗi hiển thị:<br>&emsp;&emsp; Nhấn tổ hợp phím `Ctrl+Shift+F5` hoặc `F5` để tải lại trang.<br>&emsp;&emsp;- Liên hệ với đội ngũ có thẩm quyền nếu vẫn gặp trường hợp tương tự sau khi tải lại.<br>&emsp;c. Lỗi chức năng xóa:<br>&emsp;&emsp; Nhấn tổ hợp phím `Ctrl+Shift+F5` hoặc `F5` để tải lại trang.<br>&emsp;&emsp;- Liên hệ với đội ngũ có thẩm quyền nếu vẫn gặp trường hợp tương tự sau khi tải lại.<br>2. Không có hóa đơn hiển thị.<br>&emsp;a. Không có kết nối internet:<br>&emsp;&emsp;- Kiểm tra lại kết nối internet:<br>&emsp;&emsp;&emsp;+ Đưa con trỏ chuột đến biểu tượng Wifi hoặc Lan.<br>&emsp;&emsp;&emsp;+ Nếu thấy dòng chữ "No Internet Access" hãy thử kết nối lại hoặc khởi động lại modem/ router.<br>&emsp;&emsp;&emsp;+ Nếu thấy dòng chữ "Internet Access", có thể do lỗi từ hệ thống, tải lại trang hoặc liên hệ đội ngũ hỗ trợ. |

#### 3.5.9 Chức năng thêm hóa đơn cho học viên {#toc-3-5-8}
??? book "Chức năng thêm hóa đơn cho học viên"
    | Trường                          | Nội dung |
    | ------------------------------- | -------- |
    | **Tên chức năng**               | Thêm hóa đơn cho học viên |
    | **Vai trò**                     | Admin, Support |
    | **Mô tả**                       | Cho phép admin, support thực hiện việc xác minh rằng học viên đã đóng số tiền tương ứng với giá trị của lớp/ khóa học đã/ đang học. Việc xác minh được thực hiện bằng sự kết hợp của 2 luồng xử lý:<br>&emsp;1. `Thêm hóa đơn`: thêm hóa đơn vào lớp/ khóa học cho học viên đã/ đang học.<br>&emsp;2. `Trích tiền`: trích số tiền tương ứng với giá trị lớp/ khóa học từ hóa đơn học viên đã đóng.<br>Việc này có thể được mô phỏng như sau:<br>&emsp;&emsp;a. Mỗi học viên khi đăng ký học sẽ được tạo `Mã Học Viên`.<br>&emsp;&emsp;b. `Mã Học Viên` sẽ được xem như một 'tài khoản' và có 'số dư tài khoản'.<br>&emsp;&emsp;c. Đầu tiên, thực hiện luồng xử lý `Thêm hóa đơn`:<br>&emsp;&emsp;&emsp;- Admin/ support sẽ chọn hóa đơn và học viên (tên hóa đơn: `Hóa đơn`, tên học viên: `Họ và Tên`) để tiếp tục.<br>&emsp;&emsp;&emsp;- Sau đó, hệ thống sẽ thực hiện 'cộng tiền' cho tài khoản của học viên được chọn.<br>&emsp;&emsp;d. Sau khi đã 'cộng tiền' thành công, 'số dư tài khoản' của học viên sẽ được trích tiền thông qua luồng xử lý `Trích tiền`:<br>&emsp;&emsp;&emsp;- Luồng xử lý `Trích tiền` này không được thực hiện một cách tự động bởi hệ thống<br>&emsp;&emsp;&emsp;- Luồng xử lý này chỉ được thực hiện khi và chỉ khi admin/ support thực hiện bằng cách tương tác trực tiếp với giao diện tại thẻ Học Viên (Chọn lớp học viên đã/ đang học --> Cài Đặt --> Học Viên).<br>&emsp;&emsp;&emsp;- Số lần trích và giá trị của mỗi lần trích tiền sẽ được thống kê và có thể xem lại/ kiểm tra được.<br>&emsp;&emsp;&emsp;- Số tiền tương ứng sẽ được trừ sau mỗi lần trích và có thể 'hoàn tiền' khi có sai sót xảy ra. |
    | **Giao diện liên quan**         | 1. Màn hình "Danh sách lớp học".<br>2. Thanh công cụ (nằm bên trái màn hình).<br>3. Menu 'Quản lý' - màn hình "Tổng Quan Lớp".<br>4. Submenu 'Lớp'.<br>&emsp;a. Màn hình 'Tổng Quan Lớp'.<br>&emsp;b. Màn hình 'Cài Đặt'.<br>&emsp;&emsp;- Thẻ 'Học viên' - màn hình "Học viên"<br>&emsp;&emsp;&emsp;+ Popup "Thêm".<br>&emsp;&emsp;- Thẻ 'Hóa đơn' - màn hình "Hóa đơn".<br>&emsp;&emsp;&emsp;+ Popup "Thêm".<br>&emsp;&emsp;&emsp;+ Popup "Cập nhật". |
    | **Luồng thao tác chính**        | <br>1. Tại màn hình "Danh sách lớp học", thực hiện tìm kiếm lớp và chọn lớp học viên đang nợ học phí.<br>2. Hệ thống chuyển đến màn hình 'Tổng Quan Lớp', lưu ý những thông tin sau:<br>&emsp;1. Màn hình sẽ có 2 thanh công cụ, thanh công cụ nằm bên trong có tag "Phụ".<br>&emsp;2. Tại khung `Danh sách học viên`, những học viên nào trong tình trạng chưa đóng/ nợ học phí sẽ có ký hiệu "ⓘ" màu đỏ phía sau tên của học viên đó.<br>3. Chọn "⚙️ Cài Đặt" ở thanh công cụ phụ, hệ thống chuyển đến màn hình "Cài Đặt":<br>&emsp;a. Ở màn hình "Cài Đặt", những thẻ được hiển thị bao gồm `Thông tin`, `Học viên`, `Giáo viên`, `Trợ giảng`, `Lịch dạy`, `Hóa đơn` có màu ban đầu là màu xám. Thẻ đang được hiển thị sẽ chuyển từ màu xám sang cam và được gạch chân để nhấn mạnh.<br>&emsp;b. Chọn thẻ 'Hóa đơn' nằm ở cuối thanh công cụ trên màn hình. Hệ thống chuyển đến màn hình "Hóa đơn":<br>&emsp;&emsp;- Màn hình này bao gồm: bảng "Quản lý hóa đơn" có tên màu đen, nút "Thêm hóa đơn" ký hiệu màu trắng nền cam hình tròn, bảng này thể hiện các hóa đơn của học viên trong lớp học được thêm vào trước đó.<br>&emsp;&emsp;&emsp;+ Bảng "Quản lý hóa đơn" bao gồm các cột Hóa Đơn, Tên Học Viên, Giá Trị, nút "✏️" ( hoặc tương tự) để cập nhật hóa đơn thông qua popup "Cập nhật".<br><br>**TRƯỜNG HỢP CHƯA CÓ HÓA ĐƠN CỦA HỌC VIÊN**<br><br>&emsp;&emsp;- Chọn nút "Thêm hóa đơn" để thêm mới một hóa đơn thông qua popup "Thêm":<br>&emsp;&emsp;&emsp;+ Popup "Thêm" có nền màu trắng, các dòng thông tin `Chọn hóa đơn`, `Chọn học viên` có màu đen. Các droplist 'Chọn hóa đơn' và 'Chọn học viên' hiển thị các danh sách hóa đơn và học viên đã có trên hệ thống. Nút "Hủy" màu xám nền trắng để hủy chức năng và nút "Thêm" chữ trắng nền cam để thực hiện chức năng thêm hóa đơn cho học viên.<br>&emsp;&emsp;&emsp;+ Lần lượt chọn hóa đơn đã được lập, sau đó chọn học viên tương ứng để gán hóa đơn.<br>&emsp;&emsp;*Lưu ý rằng, việc chọn học viên chỉ có thể diễn ra sau khi đã chọn hóa đơn.*<br>&emsp;&emsp;- Chọn thẻ 'Học viên', hệ thống hiển thị màn hình "Học viên", tại bảng **Danh sách học viên** cột **Học phí** của học viên cần thanh toán học phí, chọn biểu tượng màu cam, nếu học viên đã từng thanh toán học phí cho lớp học đang chọn trước đó, biểu tượng sẽ có thêm số hóa đơn ở góc phải bên trên.<br>&emsp;&emsp;- Sau khi chọn, popup "Thêm" sẽ được hiển thị sau khi tải xong:<br>&emsp;&emsp;&emsp;+ Ở popup "Thêm" nền trắng, tên các ô nhập liệu có màu đen, droplist 'Chọn hóa đơn' sẽ hiển thị các hóa đơn được gán với học viên đó.<br>&emsp;&emsp;&emsp;+ Sau khi chọn hóa đơn, nhập số tiền muốn thanh toán vào ô "Giá trị", số tiền nhập vào phải nhỏ hơn hoặc bằng giá trị còn lại của hóa đơn, nói cách khác chính là 'số dư tài khoản' của 'tài khoản' tương ứng với học viên.<br><br>**TRƯỜNG HỢP ĐÃ CÓ HÓA ĐƠN CỦA HỌC VIÊN**<br><br>&emsp;&emsp;- Kiểm tra hóa đơn tại màn hình "Hóa đơn", hóa đơn đã thêm sẽ được nhìn thấy ở bảng 'Quản lý hóa đơn'.<br>&emsp;&emsp;- Chọn thẻ 'Học viên', hệ thống hiển thị màn hình "Học viên", tại bảng **Danh sách học viên** cột **Học phí** của học viên cần thanh toán học phí, chọn biểu tượng màu cam, nếu học viên đã từng thanh toán học phí cho lớp học đang chọn trước đó, biểu tượng sẽ có thêm số hóa đơn ở góc phải bên trên.<br>&emsp;&emsp;- Sau khi chọn, popup "Thêm" sẽ được hiển thị sau khi tải xong:<br>&emsp;&emsp;&emsp;+ Ở popup "Thêm" nền trắng, tên các ô nhập liệu có màu đen, droplist 'Chọn hóa đơn' sẽ hiển thị các hóa đơn được gán với học viên đó.<br>&emsp;&emsp;&emsp;+ Sau khi chọn hóa đơn, nhập số tiền muốn thanh toán vào ô "Giá trị", số tiền nhập vào phải nhỏ hơn hoặc bằng giá trị còn lại của hóa đơn, nói cách khác chính là 'số dư tài khoản' của 'tài khoản' tương ứng với học viên. |
    | **Điều kiện**                   | -Người dùng phải đăng nhập thành công với vai trò Admin hoặc Support và có quyền truy cập vào chức năng quản lý hóa đơn.<br>- Hóa đơn được chọn phải đã được tạo sẵn trong hệ thống và ở trạng thái hợp lệ (ví dụ: không ở trạng thái Hủy đơn hoặc Hoàn tiền).<br>- Học viên được chọn phải có Mã Học Viên hợp lệ và đã được gán vào lớp học tương ứng.<br>- Lớp học được chọn phải tồn tại trong hệ thống và có ít nhất một học viên đang hoạt động.<br>- Số tiền nhập vào ô Giá trị (luồng `Trích tiền`) phải nhỏ hơn hoặc bằng số dư còn lại của hóa đơn được chọn (tương ứng với 'số dư tài khoản' của học viên).<br>- Các trường thông tin bắt buộc trong popup Thêm (như Chọn hóa đơn, Chọn học viên, Giá trị) không được để trống khi thực hiện thao tác.<br>- Hệ thống phải hoàn tất việc tải dữ liệu danh sách hóa đơn và học viên trước khi cho phép thực hiện thao tác gán hoặc trích tiền.<br>- Trong trường hợp học viên đã có hóa đơn được gán trước đó, hệ thống phải cho phép chọn hóa đơn hiện có để thực hiện trích tiền mà không yêu cầu tạo mới hóa đơn.|
    | **Kết quả hiển thị**            | - Sau khi hoàn tất thao tác Thêm hóa đơn:<br>&emsp;+ Bảng "Quản lý hóa đơn" trong tab Hóa đơn được cập nhật ngay lập tức, hiển thị dòng mới với các thông tin: `Hóa Đơn` (tên hóa đơn), `Tên Học Viên`, `Giá Trị` (số tiền đã gán), và nút chỉnh sửa (✏️) để cập nhật hóa đơn.<br>&emsp;+ Hóa đơn vừa thêm xuất hiện ở dòng cuối cùng của bảng, sắp xếp theo thứ tự thời gian thêm mới nhất.<br>&emsp;+ Tại bảng "Danh sách học viên", cột `Học phí` của học viên tương ứng được cập nhật, hiển thị biểu tượng màu cam với số lượng hóa đơn (nếu có nhiều hóa đơn) ở góc phải trên cùng.<br>- Sau khi hoàn tất thao tác Trích tiền:<br>&emsp;+ Số dư của hóa đơn được cập nhật trên hệ thống, số dư có thể nhìn thấy trong lần trích tiền tiếp theo.<br>**Tương lai : số dư hóa đơn sẽ được cập nhật tại mục `Giá Trị` trong bảng "Quản lý hóa đơn".**<br>&emsp;+ Trong màn hình "Tổng quan lớp", trạng thái học phí của học viên chuyển từ Chưa thanh toán (biểu tượng ⓘ màu đỏ) sang Đã thanh toán (không còn biểu tượng ⓘ) nếu số tiền trích đủ để thanh toán học phí.<br>&emsp;Lịch sử trích tiền được ghi nhận và có thể xem lại trong giao diện chi tiết ở thẻ `Học viên`.<br>Sau khi nhấn nút "Thêm" trong popup "Thêm", hệ thống hiển thị thông báo "Đã thêm dữ liệu".<br>Các droplist (Chọn hóa đơn, Chọn học viên) biểu thị hóa đơn và học viên được chọn bằng cách làm cho lựa chọn đó đậm màu hơn. |
    | **Trường hợp không có dữ liệu** | - Không có học viên trong lớp:<br>&emsp;+ Bảng "Danh sách học viên" trong thẻ `Học viên` không hiển thị dữ liệu.<br>&emsp;Thẻ `Hóa đơn` hiển thị bảng "Quản lý hóa đơn" trống icon thùng rỗng màu cam và chữ "Bảng dữ liệu này đang trống".<br>&emsp;Popup Thêm trong tab Hóa đơn không hiển thị danh sách học viên trong droplist 'Chọn học viên' và nút "Thêm" không thể thao tác nếu không có dữ liệu.<br>- Không có hóa đơn trong hệ thống:<br>&emsp;+ Droplist 'Chọn hóa đơn' trong popup "Thêm" hiển thị trống.<br>&emsp;+ Nút Thêm trong popup "Thêm" không thể thao tác nếu không có dữ liệu.<br>- Không có số dư trong hóa đơn:<br>&emsp;+ Trong popup "Thêm" ở thẻ `Học viên`, nếu hóa đơn đã hết số dư, hệ thống hiển thị dòng chữ dưới ô `Giá trị` trong popup "Thêm": "Giá trị <=0".<br>- Nếu hệ thống không thể tải danh sách học viên hoặc hóa đơn, liên hệ đội ngũ hỗ trợ. |

---

## 4. Yêu cầu phi chức năng

### 4.1. Quản lý truy cập theo vai trò

Hệ thống phải áp dụng cơ chế kiểm soát truy cập theo vai trò để đảm bảo phân quyền rõ ràng, ngăn chặn truy cập trái phép và bảo vệ dữ liệu đào tạo.

- Mỗi người dùng được gán một vai trò duy nhất: Master, Admin, Teacher, hoặc Curriculum Development
- Hệ thống chỉ hiển thị chức năng tương ứng với vai trò đã được phân
- Mọi thao tác thực thi (trên frontend và API) đều phải xác thực quyền trước khi xử lý

### 4.2. Hiệu năng hệ thống

Hệ thống cần đảm bảo hiệu suất ổn định khi có nhiều người dùng đồng thời và thao tác trên các chức năng quản lý dữ liệu

- Thời gian phản hồi cho các thao tác CRUD cơ bản (tạo, đọc, sửa, xóa) không vượt quá **2 giây**
- Khi có ≥ 50 lớp học, ≥ 500 học viên: các danh sách hiển thị vẫn phải hỗ trợ **tìm kiếm, lọc và phân trang** mượt mà

### 4.3. Bảo mật hệ thống

Để đảm bảo an toàn dữ liệu và quyền riêng tư người dùng:

- Mật khẩu người dùng phải được **mã hóa** bằng thuật toán bảo mật an toàn
- Giao diện không được hiển thị thông tin nhạy cảm (như mật khẩu, token)
- Hệ thống chỉ cho phép truy cập chức năng dựa trên vai trò đã được xác thực
- Phải có cơ chế **ghi log hoạt động** để truy vết khi có sự cố bảo mật


### 4.4. Khả năng mở rộng và bảo trì

- Hệ thống được thiết kế theo hướng **modular (module-based)**, dễ dàng thêm mới chức năng mà không ảnh hưởng đến các phần hiện có
- Có thể mở rộng hệ thống để phục vụ tối thiểu **500 người dùng đồng thời** mà không cần cấu hình lại hệ thống lõi
- Cấu trúc mã nguồn và tài liệu phải đủ rõ ràng để nhóm phát triển và bảo trì hiểu được luồng hệ thống


### 4.5. Khả năng tương thích

- Hệ thống phải hiển thị và hoạt động tốt trên các trình duyệt phổ biến hiện nay như:
  - Google Chrome (latest)
  - Mozilla Firefox (latest)
  - Microsoft Edge (latest)
- Giao diện hỗ trợ độ phân giải màn hình từ **1280x720 trở lên** ưu tiên desktop
- Yêu cầu hoạt động tương thích trên điện thoại và máy tính bảng


### 4.6. Tính ổn định và phục hồi

- Tỷ lệ sẵn sàng của hệ thống yêu cầu ≥ **99.5%** trong thời gian hoạt động (giờ hành chính).
- Có cơ chế sao lưu định kỳ dữ liệu hệ thống (backup daily/weekly).
- Trong trường hợp xảy ra lỗi hệ thống, thời gian phục hồi không vượt quá **15 phút** kể từ khi phát hiện.

### 4.7. Yêu cầu về giao diện người dùng (UI & Usability)

Hệ thống cần đảm bảo trải nghiệm người dùng nhất quán, rõ ràng và dễ sử dụng, phù hợp với đa dạng đối tượng sử dụng

**Yêu cầu chi tiết:**

- **Thân thiện và trực quan:** Giao diện dễ hiểu, không gây nhầm lẫn. Người dùng mới có thể sử dụng được hệ thống mà không cần đào tạo chuyên sâu
- **Thống nhất thiết kế:** Font chữ, màu sắc, biểu tượng, kích thước nút, cách hiển thị bảng phải đồng bộ giữa các trang
- **Phản hồi thao tác rõ ràng:** Mỗi hành động (tạo/sửa/xóa/dữ liệu lỗi) phải có phản hồi tương ứng
- **Responsive:** Giao diện hiển thị tốt trên các độ phân giải khác nhau, đặc biệt là desktop, máy tính bảng và điện thoại di động
- **Tối ưu trên thiết bị di động:** Kích thước nút đủ lớn, thao tác chạm chính xác, menu thu gọn dễ dùng
- **Hỗ trợ ngôn ngữ tiếng Việt:** Toàn bộ nội dung hiển thị phải sử dụng tiếng Việt rõ ràng
- **Truy cập theo vai trò:** Người dùng chỉ nhìn thấy và thao tác với các chức năng phù hợp với vai trò đã được phân



<div style="text-align: center;"> - HẾT - </div>
