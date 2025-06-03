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

### 3.1 Hiển thị (Teacher)

#### 3.1.1 Chức năng thống kê tổng quan các lớp học { #toc-3-1-1 }

??? book "Hiển thị thống kê tổng quan các lớp học"

    | Trường dữ liệu            | Nội dung |
    |---------------------------|---------|
    | **Tên chức năng**         | Hiển thị thống kê tổng quan các lớp học |
    | **Vai trò**               | Giáo viên |
    | **Mô tả**                 | Giao diện hiển thị tổng quan tất cả lớp học mà giáo viên đang phụ trách, bao gồm các chỉ số học tập, kết quả lớp và danh sách lớp kèm thông tin đánh giá tổng hợp. |
    | **Giao diện liên quan**   | Trang đầu (màn hình mặc định sau khi giáo viên đăng nhập hệ thống) |
    | **Luồng thao tác chính**  | 1. Giáo viên đăng nhập vào hệ thống.<br>2. Hệ thống hiển thị ngay giao diện thống kê tổng quan.<br>3. Giáo viên xem các chỉ số tổng quan ở trên và danh sách lớp học bên dưới.<br>4. Nhấn vào một lớp cụ thể để xem bảng thống kê chi tiết của lớp đó. |
    | **Điều kiện**             | Giáo viên có ít nhất một lớp học được phân công. Nếu không có lớp, hệ thống sẽ hiển thị trạng thái rỗng hoặc thông báo không có dữ liệu. |
    | **Kết quả hiển thị**      | Giao diện gồm 3 phần chính:<br>**(1) Thống kê tổng quan:**<br>&emsp;• **Số lớp** – Tổng số lớp mà giáo viên đang phụ trách.<br>&emsp;• **Tỷ lệ lên kỳ** – Trung bình tỷ lệ KPI của các lớp *chưa đạt 100%* KPI.<br>&emsp;&emsp;&nbsp;&nbsp;→ Ví dụ: Có 3 lớp, KPI lần lượt là 75%, 50%, 100%. Tỷ lệ lên kỳ = (75 + 50) / 2 = 62.5%.<br>&emsp;• **Tỷ lệ đi học** – Trung bình tỷ lệ đi học của tất cả các lớp:<br>&emsp;&emsp;&nbsp;&nbsp;→ Tính bằng trung bình % số buổi học có mặt của học viên trên tổng số buổi ở mỗi lớp.<br>&emsp;• **Tỷ lệ làm BTVN** – Trung bình tỷ lệ hoàn thành bài tập về nhà của tất cả các lớp:<br>&emsp;&emsp;&nbsp;&nbsp;→ Tính bằng trung bình % số bài đã nộp / số bài được giao trong mỗi lớp.<br>&emsp;• **Tỷ lệ đạt KPI** – Trung bình % KPI của tất cả các lớp (kể cả lớp đạt 100%).<br>&emsp;• **Đánh giá tổng** – Tổng hợp định tính theo tiêu chí nội bộ: Tốt, Khá, Trung bình... |
    |                           | **(2) Danh sách lớp học:**<br>&emsp;• Mã lớp<br>&emsp;• Tên khóa học<br>&emsp;• Đánh giá<br>&emsp;• KPI<br>&emsp;• Số buổi hoàn thành |
    |                           | **(3) Chi tiết lớp học:**<br>&emsp;• Hiển thị khi chọn một lớp cụ thể.<br>&emsp;• Bao gồm: kết quả, ngày bắt đầu/kết thúc, khung giờ học, sĩ số, tỷ lệ đi học, tỷ lệ BTVN, điểm kiểm tra, điểm BTVN, thời gian học.<br><br>**Lưu ý:** Khi truy cập, hệ thống mặc định chọn và hiển thị lớp đầu tiên. Giáo viên có thể thay đổi lớp để xem thống kê tương ứng. |
    | **Trường hợp không có dữ liệu** | Hiển thị tất cả chỉ số tổng quan ở mức 0, danh sách lớp rỗng và không hiển thị bảng thống kê lớp chi tiết. |


#### 3.1.2 Chức năng hiển thị tổng quan chi tiết lớp học { #toc-3-1-2 }

??? book "Hiển thị tổng quan chi tiết lớp học"

    | Trường dữ liệu              | Nội dung |
    |-----------------------------|---------|
    | **Tên chức năng**           | Hiển thị tổng quan chi tiết lớp học |
    | **Vai trò**                 | Giáo viên |
    | **Mô tả**                   | Cho phép giáo viên xem chi tiết toàn bộ thông tin học tập của một lớp mà họ đang phụ trách, bao gồm thông tin lớp, danh sách học viên, bảng bài học và biểu đồ đánh giá. |
    | **Giao diện liên quan**     | Trang Tổng quan lớp (hiển thị khi nhấn biểu tượng `>` từ danh sách lớp học ở màn hình tổng quan) |
    | **Luồng thao tác chính**    | 1. Giáo viên đăng nhập vào hệ thống.<br>2. Ở màn hình tổng quan các lớp, giáo viên nhấn vào biểu tượng `>` của một lớp bất kỳ.<br>3. Hệ thống chuyển đến trang Tổng quan lớp hiển thị đầy đủ chi tiết lớp học được chọn.<br>4. Nếu bài học đã có ghi chú, giáo viên có thể nhấn vào biểu tượng ghi chú để xem popup ghi chú chi tiết.<br>5. Giáo viên có thể nhấn vào biểu tượng thời gian để mở popup thời lượng học và xem chi tiết theo từng hoạt động. |
    | **Điều kiện**               | Lớp đã có học viên và dữ liệu học tập liên quan. Nếu không có học viên, bảng danh sách sẽ rỗng và không hiển thị bảng bài học. |
    | **Kết quả hiển thị**        | Giao diện gồm 3 phần chính:<br><br>**(1) Thông tin lớp học:**<br>&emsp;• **Sĩ số** – Số lượng học viên trong lớp.<br>&emsp;• **Tỷ lệ đi học** – Trung bình % số buổi có mặt của học viên trong lớp.<br>&emsp;• **Tỷ lệ làm bài tập** – Trung bình % hoàn thành bài tập về nhà của học viên trong lớp.<br>&emsp;• **Điểm kiểm tra** – Trung bình điểm kiểm tra các học viên.<br>&emsp;• **Điểm BTVN** – Trung bình điểm bài tập về nhà đã chấm.<br>&emsp;• **Thời gian học** – Tổng thời gian học trung bình mà mỗi học viên đã tham gia trong lớp.<br>&emsp;• **Bài học gần đây (6 buổi):** hiển thị bằng biểu tượng thể hiện kết hợp giữa đi học và làm BTVN với 4 trạng thái:<br>&emsp;&emsp;– Có đi học và có làm BTVN<br>&emsp;&emsp;– Có đi học nhưng không làm BTVN<br>&emsp;&emsp;– Không đi học nhưng có làm BTVN<br>&emsp;&emsp;– Không đi học và không làm BTVN<br><br>**(2) Danh sách học viên:**<br>&emsp;• Tên học viên<br>&emsp;• Trạng thái học viên (Hoàn thành, Đang học, Người xem, Đăng ký lại, Lên kỳ lên khóa, Chuyển lớp, Bảo lưu, Nghỉ học, Bỏ cọc, Bắt buộc lên, Xóa)<br>&emsp;• **Bài học gần đây (3 buổi):** biểu tượng như phần (1)<br>&emsp;• Đánh giá tổng hợp<br><br>**(3) Bảng bài học:**<br>&emsp;• Tên bài học<br>&emsp;• Ghi chú:<br>&emsp;&emsp;– Nếu có ghi chú: nhấn vào biểu tượng để xem popup gồm: Ghi chú từ giáo viên đến học viên và ghi chú cho team Support.<br>&emsp;&emsp;– Nếu không có ghi chú: biểu tượng bị mờ, không thể nhấn.<br>&emsp;• Trạng thái điểm danh: Không điểm danh, Có mặt, Đi trễ, Ra sớm, Đi trễ + Ra sớm, Nghỉ có phép, Nghỉ không phép<br>&emsp;• Điểm số:<br>&emsp;&emsp;– Đã chấm: hiển thị điểm số<br>&emsp;&emsp;– Chưa chấm: đã nộp nhưng chưa chấm<br>&emsp;&emsp;– Chưa nộp: chưa gửi bài<br>&emsp;• Thời gian học: Nhấn biểu tượng để mở popup hiển thị chi tiết thời lượng theo từng hoạt động gồm: BTVN, Nghe, Từ vựng, Ngữ pháp, Đọc, Flashcard, Lật flashcard, Duyệt bài, Kiểm tra. |
    | **Trường hợp không có dữ liệu** | Hiển thị bảng dữ liệu đang trống. |


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

??? book "Thêm trợ giảng vào lớp"
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
