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

### 3.1 Vai trò master
| Mã chức năng | Tên chức năng              | Mô tả                                                                                        | Điều kiện                                               | Kết quả                                               |
|--------------|----------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------|--------------------------------------------------------|
| M-01         | Quản lý tài khoản hệ thống | Xem danh sách tài khoản theo vai trò (Admin, Teacher, Viewer...), trạng thái, ngày tạo.         | Người dùng đã đăng nhập và có quyền truy cập quản lý     | Có thể lọc, tìm kiếm và phân trang                    |
| M-02         | Tạo tài khoản người dùng   | Nhập thông tin cá nhân (họ tên, ngày sinh, giới tính, số điện thoại, vai trò, gmail, mật khẩu). | Email chưa tồn tại trong hệ thống                        | Hệ thống tự gán mã nhân viên và tạo tài khoản         |
| M-03         | Chỉnh sửa tài khoản        | Cập nhật thông tin cá nhân và trạng thái hoạt động của tài khoản                                 | Tài khoản tồn tại, người dùng có quyền chỉnh sửa         | Thay đổi được cập nhật ngay trong danh sách           |
| M-04         | Xóa tài khoản người dùng   | Xóa vĩnh viễn tài khoản khỏi hệ thống, không thể đăng nhập sau khi xóa                          | Có xác nhận từ người thao tác, tài khoản tồn tại          | Tài khoản bị xóa hoàn toàn, không thể hoàn tác        |

### 3.2 Vai trò Admin

#### 3.2.1 Trang chủ

| Mã chức năng | Tên chức năng                      | Mô tả                                                                                                                                                                                                                   | Điều kiện                                                   | Kết quả hiển thị                                                                                                                        |
| ------------ | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| A-01     | Tìm kiếm nhanh                     | Cho phép tìm kiếm học viên, giáo viên hoặc lớp học theo từ khóa nhập vào ô tìm kiếm.                                                                                                                                    | Có dữ liệu nhập vào trường tìm kiếm.                        | Danh sách kết quả được lọc theo từ khóa.                                                                                                |
| A-02     | Hiển thị danh sách                 | Hiển thị danh sách giáo viên, học viên, lớp học dưới dạng tab tương ứng.                                                                                                                                                | Người dùng chọn tab (Giáo viên / Học viên / Lớp học).       | Hiển thị đúng danh sách đã chọn.                                                                                                        |
| A-03     | Hiển thị trạng thái danh sách rỗng | Khi danh sách giáo viên, học viên hoặc lớp học chưa có dữ liệu, giao diện hiển thị thông báo “Danh sách đang trống”.                                                                                                    | Không có dữ liệu tương ứng trong danh sách.                 | Hiển thị biểu tượng và dòng thông báo "Danh sách đang trống".                                                                           |
| A-04     | Phân loại đối tượng theo tag                           | Khi nhấn nút "Thêm tag", hệ thống sẽ mở popup cho phép người dùng chọn các tag có sẵn (VD:Trong mục "Bảo lưu" có "NS-HK1", "Tháng 1/2024",...). Người dùng có thể chọn nhiều tag và thêm vào đối tượng được chọn để phân loại. | Nhấn vào nút "Thêm tag" trong phần quản lý tag.         | Popup hiển thị danh sách tag, người dùng có thể chọn và nhấn "Thêm mới" để gán tag. Các tag đã chọn sẽ hiển thị bên cạnh đối tượng. |                                                                                     |
| A-05     | Thêm ghi chú theo tag              | Nhấn vào tag đã gán cho đối tượng để mở popup và thêm ghi chú cá nhân (dạng nhận xét).                                                                                                                                  | Tag đã được gán và có thao tác nhấn vào.                    | Tooltip chứa nội dung ghi chú được hiển thị khi rê chuột vào tag.                                                                       |



##### 3.2.1.1 Tab Danh sách lớp học (giáo viên)

| Mã chức năng | Tên chức năng                 | Mô tả                                                                                                                                           | Điều kiện                                                                | Kết quả hiển thị                                                                 |
|--------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| A-06         | Hiển thị danh sách lớp học     | Khi người dùng nhấn vào một giáo viên trong danh sách, hệ thống hiển thị danh sách lớp học mà giáo viên đó phụ trách.                          | Có giáo viên được chọn từ danh sách tab "Giáo viên" ở Trang chủ.        | Hiển thị thông tin lớp học (mã lớp, khoá học, % tiến độ đi học, % làm bài tập về nhà, đánh giá). |
| A-07         | Hiển thị thông tin giáo viên   | Hiển thị chi tiết thông tin giáo viên đã chọn (ảnh đại diện, họ tên, mã GV, số điện thoại, email, trạng thái, tag, ghi chú).                   | Có giáo viên được chọn.                                                  | Thông tin giáo viên được hiển thị ở khung bên trái màn hình.                   |
| A-08         | Cập nhật thông tin giáo viên   | Cho phép chỉnh sửa thông tin giáo viên gồm: họ tên, mã giáo viên, số điện thoại, email, trạng thái, gán tag quản lý, thêm ghi chú nhận xét.   | Nhấn nút "Cập nhật" sau khi chỉnh sửa thông tin tại khung bên trái.     | Dữ liệu được cập nhật trong hệ thống, tag và ghi chú được hiển thị lại sau khi lưu. |
| A-09         | Tìm kiếm lớp học theo trạng thái | Cho phép lọc danh sách lớp học dựa theo trạng thái (Mới tạo, đang học, tạm dừng, hoàn thành, hủy).                                              | Chọn điều kiện lọc từ dropdown "Trạng Thái" phía trên danh sách lớp học. | Hiển thị danh sách lớp học tương ứng với trạng thái được chọn.                |
| A-10         | Cập nhật mật khẩu giáo viên    | Cho phép cập nhật lại mật khẩu đăng nhập của giáo viên. Người dùng có thể nhấn nút **"Cập nhật mật khẩu"** để mở form đổi mật khẩu và lưu thông tin mới. | Nhấn nút **"Cập nhật mật khẩu"** trong khung thông tin giáo viên.       | Mật khẩu được cập nhật trong hệ thống, thông báo thành công được hiển thị.    |

### 3.3 Vai Trò Teacher
| Mã chức năng | Tên chức năng                 | Mô tả                                                                                                                                         | Điều kiện                                                                | Kết quả hiển thị                                                                 |
|--------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| T-01         | Góp ý đến trung tâm               | Cho phép giáo viên gửi góp ý đến trung tâm với nhiều loại như: góp ý giáo trình, nội dung giảng dạy, lớp học, tổ chức,… Có thể gửi ẩn danh hoặc không.                                              | Có mặt tại mọi màn hình trong hệ thống. Nhấn vào vùng nhập góp ý phía dưới màn hình.                              | Hệ thống hiển thị popup gồm các trường: chọn loại góp ý, nhập nội dung, đính kèm file, chọn gửi ẩn danh và nút gửi.    |  

#### 3.3.1 Menu Lớp

| Mã chức năng | Tên chức năng                 | Mô tả                                                                                                                                         | Điều kiện                                                                | Kết quả hiển thị                                                                 |
|--------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| T-02         | Thống kê tổng quan lớp học     | Hiển thị cái nhìn tổng quan về tình hình lớp học mà giáo viên đang phụ trách, hỗ trợ việc đánh giá tiến độ và hiệu quả giảng dạy. | Giáo viên có ít nhất một lớp học được phân công. Nếu không có lớp học, khu vực thống kê sẽ không được hiển thị. | Giao diện hiển thị các chỉ số tổng hợp gồm: Số lớp, Tỷ lệ lên lớp, Tỷ lệ đi học, Tỷ lệ làm bài tập về nhà, Tỷ lệ đạt KPI. Các số liệu được tổng hợp từ dữ liệu các lớp giáo viên phụ trách. |             |
| T-03         | Hiển thị danh sách lớp học     | Hiển thị danh sách các lớp học mà giáo viên được phân công giảng dạy, bao gồm mã lớp, khóa học, số buổi đã học và đánh giá lớp.             | Giáo viên có lớp học được phân công. Nếu không có lớp, giao diện danh sách sẽ trống.         | Danh sách các lớp học được hiển thị theo dữ liệu phân công.                     |
| T-04         | Lọc danh sách lớp học          | Cho phép lọc danh sách lớp học theo các tiêu chí như: loại lớp, trình độ, trạng thái.                                                       | Chọn điều kiện lọc từ các dropdown tương ứng.                             | Danh sách lớp học được cập nhật theo điều kiện lọc đã chọn.                     |
| T-05         | Hiển thị popup khảo sát      | Mỗi khi giáo viên đăng nhập, nếu còn khảo sát chưa làm thì hệ thống sẽ hiển thị popup chứa danh sách bài khảo sát đang chờ.                      | Giáo viên đăng nhập vào hệ thống và có ít nhất 1 khảo sát chưa thực hiện.                    | Popup hiển thị danh sách các bài khảo sát với thông tin: mã khảo sát, tiêu đề, ngày giao khảo sát và nút “Làm khảo sát”. Có thêm nút “Hủy bỏ” để tạm đóng popup mà không làm khảo sát. |
| T-06         | Làm khảo sát                 | Cho phép giáo viên thực hiện khảo sát bằng cách trả lời các câu hỏi có trong bài khảo sát đã chọn.                                               | Nhấn vào nút “Làm khảo sát” trong popup.                                                      | Màn hình làm khảo sát hiển thị câu hỏi, các lựa chọn và danh sách câu bên phải để chuyển nhanh từng câu. **(Note: Giao diện hiện tại chưa có nút xác nhận hoàn thành để hiển thị popup báo khảo sát đã gửi thành công).** |

##### 3.3.1.1 Tổng quan lớp học

| Mã chức năng | Tên chức năng               | Mô tả                                                                                                                                                                         | Điều kiện                                                | Kết quả hiển thị                                                                 |
|--------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------------|
| T-07         | Xem chi tiết một lớp học     | Khi người dùng nhấn vào một dòng lớp cụ thể trong danh sách lớp, hệ thống sẽ điều hướng sang giao diện chi tiết của lớp đó.                                                  | Nhấn vào một lớp bất kỳ trong danh sách lớp.             | Hệ thống chuyển sang trang tổng quan của lớp được chọn, với tiêu đề hiển thị là mã lớp (ví dụ: ABC1234).     |
| T-08         | Hiển thị thống kê tổng quan lớp  | Cung cấp cho giáo viên cái nhìn tổng quan về tình hình học tập của lớp thông qua các chỉ số thống kê chính.               | Đang ở tab “Tổng quan” sau khi chọn lớp.           | Giao diện hiển thị các thông tin thống kê gồm: Sĩ số lớp, Tỷ lệ đi học, Tỷ lệ làm bài tập về nhà, Điểm kiểm tra trung bình, Điểm BTVN trung bình, Tổng thời gian học. |                                 |
| T-09         | Hiển thị danh sách học viên | Hiển thị danh sách học viên thuộc lớp để giáo viên theo dõi nhanh thông tin cơ bản và truy cập chi tiết tiến độ học tập. | Lớp đã có học viên.                  | Danh sách học viên hiển thị ở cột bên phải giao diện tab “Tổng quan”. Mỗi dòng gồm các thông tin: họ tên, trạng thái học viên, trạng thái học, trạng thái 3 buổi gần nhất, đánh giá tổng hợp. Có thể nhấn vào từng học viên để xem chi tiết. |                                  |
| T-10         | Hiển thị tiến độ học viên      | Hiển thị chi tiết tiến độ học tập của từng học viên đã chọn, giúp giáo viên nắm bắt nhanh kết quả học tập tổng quan.                           | Nhấn vào học viên trong danh sách bên phải.                         | Khu vực bên trái hiển thị các biểu đồ và chỉ số: điểm kiểm tra, điểm BTVN, tỉ lệ làm BTVN, tỉ lệ đi học, thời gian học, và danh sách 6 buổi học gần nhất.                                                     |
| T-11         | Hiển thị danh sách bài học     | Hiển thị bảng danh sách bài học mà học viên đã tham gia, giúp giáo viên theo dõi chi tiết tiến trình từng buổi học.                            | Đã chọn một học viên.                                               | Bảng bài học hiển thị bên dưới tiến độ, gồm các cột: tên bài học, ghi chú, trạng thái học, điểm số, thời gian học. Dữ liệu hiển thị theo từng dòng bài học tương ứng với trạng thái học tập thực tế.          |
| T-12         | Chỉnh thời gian bài học        | Cho phép chỉnh sửa thời gian học tập theo từng loại hoạt động trong bài học như: nghe giảng, làm bài, đọc hiểu, tự học,...                     | Nhấn vào biểu tượng thời gian bên phải thời gian học của bài học.   | Hệ thống hiển thị popup “Thời gian” với các ô nhập tương ứng từng hoạt động. Người dùng chỉnh thủ công thời gian. Có nút “Hủy bỏ” để thoát. **(Note: Hiện tại popup chưa có nút xác nhận để lưu).** |
| T-13         | Viết ghi chú cho bài học       | Cho phép giáo viên nhập ghi chú cho từng bài học của học viên, ghi chú được phân loại theo người nhập: Sensei hoặc team Support.               | Nhấn vào biểu tượng ghi chú ở cột “Ghi chú” trong bảng bài học.     | Hệ thống hiển thị popup “Ghi chú” gồm các trường nhập tương ứng từng loại ghi chú. Có nút “Hủy bỏ” để thoát. **(Note: Giao diện hiện tại chưa có nút xác nhận để lưu nội dung ghi chú sau khi nhập).**         |

- Ghi chú: Gồm hai trạng thái là "Đã ghi chú" và "Có ghi chú", thể hiện rằng học viên hoặc bài học tương ứng đã được nhập nội dung ghi chú liên quan.  

- Trạng thái học viên bao gồm các trạng thái quản lý: Hoàn thành, Đang học, Người xem, Đăng ký lại, Lên kỳ lên khóa, Chuyển lớp, Bảo lưu, Nghỉ học, Bỏ cọc, Bắt buộc lên và Xóa.

- Trạng thái học phản ánh hình thức tham gia lớp hiện tại của học viên, gồm ba loại: Đang cọc, Học thử và Đóng full.

- Trạng thái bài học mô tả kết quả điểm danh buổi học cụ thể với các trạng thái: Không điểm danh, Có mặt, Đi trễ, Ra sớm, Đi trễ và ra sớm, Nghỉ có phép, Nghỉ không phép.

- Điểm số bao gồm ba trạng thái: Điểm (đã được chấm và hiển thị số điểm cụ thể), Chưa chấm (đã nộp nhưng chưa được chấm) và Chưa nộp (chưa gửi bài).

- Điểm danh thể hiện sự kết hợp giữa việc học viên có đi học và có làm bài tập về nhà hay không, với các trường hợp: Có đi học và có làm BTVN, Có đi học nhưng không làm BTVN, Không đi học nhưng có làm BTVN, Không đi học và không làm BTVN.

- Đánh giá là kết quả tổng hợp thể hiện mức độ hoàn thành của học viên, được phân loại theo các mức: A, B, C, D, E, F.  
  
##### 3.3.1.2 Thông tin

| Mã chức năng | Tên chức năng             | Mô tả                                                                                                                                           | Điều kiện                                               | Kết quả hiển thị                                                                 |
|--------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|----------------------------------------------------------------------------------|
| T-14         | Hiển thị thông tin lớp học  | Cung cấp cho giáo viên cái nhìn tổng quan về thông tin hành chính và tổ chức của một lớp học cụ thể.           | Người dùng chuyển sang tab “Thông tin” trong giao diện chi tiết lớp. | Giao diện hiển thị đầy đủ các trường thông tin: kết quả (điểm tổng hợp), ngày bắt đầu, ngày kết thúc, khung giờ học. Nếu lớp có ghi chú trước đó, nội dung sẽ hiển thị sẵn trong khung “Ghi chú”. |
| T-15         | Viết ghi chú lớp học       | Cho phép người dùng nhập hoặc chỉnh sửa ghi chú lớp học để bổ sung thông tin liên quan đến tình hình hoặc đặc điểm lớp.                         | Nhấn vào vùng ghi chú (ô nhập hoặc biểu tượng).         | Hệ thống hiển thị popup “Ghi chú” với các vùng nhập nội dung. **(Note: Giao diện popup ghi chú hiện tại chưa có nút xác nhận để lưu nội dung ghi chú sau khi nhập).** |  

##### 3.3.1.3 Bài học


| Mã chức năng | Tên chức năng               | Mô tả                                                                                                                                             | Điều kiện                                                                   | Kết quả hiển thị                                                                 |
|--------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| T-16         | Hiển thị chi tiết bài học (Chưa học)      | Cung cấp thông tin chi tiết trước buổi học để giáo viên chuẩn bị, bao gồm dặn dò và ghi chú nội bộ.                                         | Người dùng nhấn chọn một bài học trong danh sách bên phải.                     | Giao diện trung tâm hiển thị phần dặn dò từng dòng, cùng 2 ghi chú riêng: “Ghi chú của sensei cho sensei tiếp theo” và “Ghi chú của support cho buổi học”. Người dùng cần tích chọn “Tôi đã đọc ghi chú” để xác nhận trước khi bắt đầu buổi học. **(Note: Chưa tích xác nhận ghi chú sẽ không cho phép nhấn nút “Bắt đầu buổi học”).** |
| T-17         | Bắt đầu buổi học / điểm danh              | Cho phép giáo viên bắt đầu buổi học hoặc thực hiện điểm danh nếu buổi học đã đến thời gian học.                                              | Buổi học chưa học, lớp đã bắt đầu, hoặc chưa điểm danh.                        | Nút bên dưới hiển thị là “Bắt đầu buổi học” hoặc “Điểm danh” tùy theo điều kiện thực tế. Khi nhấn vào sẽ chuyển sang giao diện điểm danh và nhập ghi chú.                                                                                  |
| T-18         | Hiển thị chi tiết bài học (Đã học)        | Hiển thị kết quả học tập và tình trạng của học viên sau khi buổi học đã diễn ra.                                                              | Buổi học đã diễn ra.                                                            | Giao diện hiển thị danh sách học viên sau buổi học, gồm các cột: “Đi học”, “Làm BTVN”, “Ghi chú”. Dữ liệu phản ánh kết quả thực tế sau điểm danh và chấm bài.                                                                          |
| T-19         | Điểm danh & ghi chú sau khi bắt đầu buổi học | Cho phép giáo viên điểm danh và nhập ghi chú cho từng học viên, đồng thời thêm ghi chú chung cho cả lớp trước khi kết thúc buổi học.        | Nhấn vào nút “Bắt đầu buổi học” hoặc “Điểm danh” tại màn hình bài học chưa học. | Giao diện hiển thị danh sách học viên gồm: STT, tên học viên, trạng thái điểm danh (dropdown), và ô nhập ghi chú cá nhân. Bên dưới là vùng nhập ghi chú chung cho lớp học và checkbox “Không có dặn dò gì cho học viên”. Có nút “Kết thúc buổi học” để hoàn tất thao tác. |
| T-20         | Kết thúc buổi học                         | Cho phép giáo viên nhập hoặc chỉnh sửa ghi chú cuối buổi học, nhằm tổng kết và chuyển giao nội dung cho buổi tiếp theo.                     | Sau khi đã điểm danh và nhấn “Kết thúc buổi học” ở màn hình điểm danh.         | Giao diện hiển thị danh sách học viên với các trường: “Ghi chú của sensei cho sensei tiếp theo” và “Ghi chú của support cho buổi học”. Bên dưới có vùng nhập ghi chú tổng hợp và checkbox “Không có ghi chú gì”. Có nút “Hoàn thành” để lưu và kết thúc buổi học. |
| T-21         | Cập nhật ghi chú buổi học (Đã học)        | Cho phép giáo viên (Sensei hoặc Support) cập nhật lại các ghi chú của buổi học sau khi buổi học đã hoàn tất.                                 | Truy cập vào buổi học đã hoàn thành và thao tác trên từng khu vực ghi chú.     | Giao diện hiển thị 3 loại ghi chú: (1) Ghi chú của sensei cho buổi tiếp theo, (2) Ghi chú của support trong ô văn bản, (3) Ghi chú cá nhân cho từng học viên hiển thị popup khi nhấn vào biểu tượng ghi chú.                                 |


- Danh sách trạng thái điểm danh bao gồm: chưa điểm danh, có mặt, vào trễ, ra sớm, vào trễ + ra sớm, nghỉ có phép, không điểm danh. 

##### 3.3.1.4 Bài tập và kiểm tra

| Mã chức năng | Tên chức năng                  | Mô tả                                                                                                                                     | Điều kiện                                                                   | Kết quả hiển thị                                                                 |
|--------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| T-22         | Hiển thị danh sách bài tập và kiểm tra | Hiển thị toàn bộ danh sách bài tập về nhà và bài kiểm tra của lớp học. Giáo viên có thể theo dõi trạng thái giao bài, tình trạng đã chấm, số lượng học viên đã nộp, tỉ lệ hoàn thành, điểm trung bình và chi tiết từng học viên. | Người dùng truy cập tab "Bài tập và kiểm tra".               | Giao diện bao gồm 3 phần chính: (1) Thống kê tổng quan: đã chấm kiểm tra, kiểm tra đã giao, điểm kiểm tra, đã chấm BTVN, tỉ lệ làm BTVN, điểm BTVN. (2) Danh sách học viên bên trái với các cột: điểm số, tên học viên, thời gian làm bài, nộp bài, số câu bỏ qua. (3) Danh sách bài tập và kiểm tra bên phải, chia thành 2 tab: bài tập về nhà và kiểm tra. Mỗi bài hiển thị các trường: STT, tên bài, trạng thái (đã chấm, chưa chấm, chưa giao), số học viên đã nộp bài (hiển thị là số nguyên, ví dụ: 5), tỉ lệ hoàn thành (phần trăm). **(Note: Nút “Thu hồi” chỉ hiển thị trong danh sách Kiểm tra. Nếu số lượng bài tập về nhà hoặc kiểm tra bằng 0 thì không hiển thị số đếm bên cạnh tiêu đề danh sách).** |
| T-23         | Xem chi tiết bài tập hoặc kiểm tra      | Cho phép giáo viên truy cập vào chi tiết từng bài tập về nhà hoặc bài kiểm tra để xem và chấm điểm. Giao diện hỗ trợ theo dõi đáp án học viên, nhận xét, ghi âm và chuyển nhanh giữa các câu hỏi. | Nhấn vào một bài cụ thể trong danh sách bài tập hoặc kiểm tra. | Giao diện hiển thị khu vực làm bài gồm: (1) Thông tin câu hỏi: nội dung, lựa chọn đáp án, loại câu hỏi, trạng thái chấm (chưa chấm, đã chấm). (2) Nhận xét chung của sensei cho câu hỏi. (3) Danh sách học viên với từng câu gồm: đáp án học viên, nhận xét riêng của sensei, điểm số, file ghi âm và file tài liệu (nếu có). Bên phải là danh sách câu hỏi, mỗi câu kèm phần trăm học viên đã làm và trạng thái. |
| T-24         | Thêm tài liệu sửa bài cho học viên | Cho phép giáo viên đính kèm tài liệu sửa bài (hướng dẫn, ví dụ minh hoạ, nội dung bổ sung) cho từng câu trả lời của học viên trong bài tập hoặc bài kiểm tra. | Nhấn vào biểu tượng tài liệu trong khu vực nhận xét tại từng câu trả lời của học viên. | Hệ thống hiển thị popup “Thêm tài liệu”, hỗ trợ kéo thả hoặc chọn file từ thiết bị. Cho phép tải lên các định dạng tài liệu (.doc, .docx, .pdf) với dung lượng tối đa 25MB. Sau khi lưu, tên tài liệu hiển thị bên dưới vùng nhận xét, có thể xoá nếu cần. |
| T-25         | Ghi âm sửa bài cho học viên     | Cho phép giáo viên ghi âm nhận xét hoặc hướng dẫn sửa bài cho từng câu trả lời của học viên trong bài tập hoặc bài kiểm tra. Giáo viên có thể nghe lại phần đã ghi ngay trong quá trình ghi âm để kiểm tra chất lượng nội dung. | Nhấn vào biểu tượng micro trong vùng nhận xét tại từng câu trả lời của học viên. | Hệ thống hiển thị popup “Ghi âm” với sóng âm và nút điều khiển ghi âm. Trong quá trình ghi, giáo viên có thể phát lại phần đã ghi. Sau khi gửi, file ghi âm sẽ hiển thị dưới dạng “File ghi âm” trong khu vực nhận xét, có thể xoá nếu cần. |
| T-26         | Lọc danh sách học viên | Cho phép giáo viên lọc học viên theo các điều kiện như: đã chấm, chưa chấm, tên học viên, trạng thái hiển thị tên.          | Giao diện chi tiết bài tập hoặc kiểm tra hiển thị các bộ lọc ở phần đầu màn hình.             | Hệ thống cung cấp các bộ lọc: (1) Trạng thái chấm điểm gồm: tất cả, đã chấm, chưa chấm. (2) Tên học viên (dropdown danh sách học viên). (3) Tuỳ chọn ẩn/hiện tên học viên. Việc chọn bộ lọc sẽ cập nhật ngay kết quả hiển thị ở khu vực nội dung bài làm. |
| T-27         | Lọc câu hỏi trong bài tập/kiểm tra | Cho phép giáo viên lọc danh sách câu hỏi theo trạng thái đã chấm, chưa chấm hoặc tất cả. Giúp tập trung vào các câu hỏi chưa được xử lý.       | Truy cập chi tiết một bài tập hoặc bài kiểm tra bất kỳ.             | Hệ thống hiển thị dropdown bộ lọc với 3 lựa chọn: Tất cả, Đã chấm, Chưa chấm. Khi chọn bộ lọc, danh sách câu hỏi bên phải sẽ tự động lọc theo điều kiện và cập nhật lại giao diện hiển thị. |  

**Note UI:**

- Trong danh sách bài tập về nhà hoặc kiểm tra, số hiển thị phía bên phải (hiện tại là "5.0") biểu thị **số lượng học viên đã nộp bài**.
  - Giá trị này là một **số nguyên** và **không nên hiển thị ở dạng số thực (ví dụ: 5.0)**. Cần cập nhật UI để hiển thị **"5"** thay vì **"5.0"**.
- Ký hiệu phần trăm bên cạnh (ví dụ: "90%") biểu thị **tỷ lệ phần trăm học viên đã nộp bài / làm bài**, tính theo tổng số học viên của lớp.
  - Giá trị này cần được làm tròn hợp lý và luôn đi kèm biểu tượng phần trăm (%).

##### 3.3.1.4 Tự học

| Mã chức năng | Tên chức năng                 | Mô tả                                                                                                                                                                   | Điều kiện                                     | Kết quả hiển thị                                                                                                                                                                       |
|--------------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| T-28         | Hiển thị thông tin tự học | Hiển thị chi tiết thời gian tự học của học viên theo từng buổi học đã được ghi nhận và tiến trình của từng buổi tự học | Người dùng truy cập tab “Tự học” và chọn một buổi học cụ thể.   | Giao diện chia thành 2 phần: (1) **Danh sách buổi học** bên phải hiển thị STT, tên buổi học và tiến trình hoàn thành (theo phần trăm). (2) **Bảng chi tiết buổi học** bên trái gồm các cột: ID, Họ tên, FlashCard, Bài tập, Từ vựng, Ngữ pháp, Luyện đọc, Kanji, Luyện nghe, Bảng chữ. Mỗi ô hiển thị thời gian học. |  


##### 3.3.1.4 Đánh giá giáo viên

| Mã chức năng | Tên chức năng              | Mô tả                                                                                                                                         | Điều kiện                                             | Kết quả hiển thị                                                                                                                                                                                                                               |
|--------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| T-29         | Hiển thị đánh giá giáo viên | Hiển thị chi tiết các đánh giá giáo viên từ trung tâm theo từng buổi học | Người dùng truy cập tab “Đánh giá” trong và chọn một đánh giá cụ thể.    | Giao diện chia thành 2 phần: (1) Danh sách đánh giá bên phải hiển thị theo ngày và kết quả tổng (ví dụ: 10/10 Tốt hoặc 4/10 Cần cải thiện). (2) Khu vực nội dung bên trái hiển thị chi tiết đánh giá các nhóm kỹ năng bao gồm: Kỹ năng cần phát huy, kỹ năng cần cải thiện và khả năng làm việc độc lập.|

##### 3.3.1.5 Quy Trình

| Mã chức năng | Tên chức năng                         | Mô tả                                                                                                                                                      | Điều kiện                                                         | Kết quả hiển thị                                                                                                                                                                               |
|--------------|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| T-30         | Hiển thị danh sách quy trình lớp học | Hiển thị đầy đủ các bước trong quy trình lớp học do trung tâm biên soạn để giáo viên đọc và làm theo.                                       | Người dùng truy cập tab “Quy trình”.                              | Hiển thị danh sách các mục quy trình dưới dạng accordion. Mỗi mục gồm tiêu đề bước, mô tả chi tiết, tiến độ hoàn thành (nếu có), danh sách tài liệu (có thể là ảnh, file, video).           |
| T-31         | Hiển thị tiến độ hoàn thành quy trình | Hiển thị tổng phần trăm hoàn thành quy trình, phản ánh mức độ giáo viên đã đọc và thực hiện các mục theo yêu cầu trong quy trình lớp học.                                            | Người dùng truy cập tab “Quy trình”. | Có 2 vị trí hiển thị: (1) hiển thị bên phải tên tab “Quy trình” trong menu sidebar; (2) thanh ngang (progress bar) hiển thị đầu trang nội dung “Quy trình”.|
| T-32         | Xem tài liệu trong quy trình         | Cho phép giáo viên xem tài liệu được đính kèm trong từng mục quy trình.                                                                     | Có tài liệu trong mục quy trình.                                 | Nếu là ảnh thì hiển thị trực tiếp, file Word/PDF có nút tải về, video có thể xem trực tiếp trong trang.                                                                                       |
| T-33         | Bình luận quy trình                  | Cho phép giáo viên để lại bình luận, góp ý cho từng mục trong quy trình, có thể đính kèm liên kết hoặc tài liệu hỗ trợ.                    | Nhấn vào ô “Nhập bình luận của bạn nếu có góp ý” dưới mỗi mục.    | Giao diện hiển thị ô nhập văn bản và các nút đính kèm liên kết hoặc file (hỗ trợ .doc/.pdf, tối đa 25MB). Sau khi gửi, nội dung và file/link sẽ được hiển thị ngay bên dưới mục tương ứng. |
| T-34         | Cập nhật tiến độ thực hiện quy trình | Cho phép giáo viên chủ động đánh dấu hoàn thành các mục cần tự xác nhận (ví dụ: tổ chức buổi đào tạo theo kế hoạch). Giáo viên là người được phép cập nhật tiến trình trong mục tiêu chí. | Nhấn vào tiêu chí có thanh chỉnh % hoàn thành nếu được phép cập nhật. | Giáo viên có thể kéo thanh phần trăm để điều chỉnh tiến độ tiêu chí đã hoàn thành. |                                                                             |

##### 3.3.1.6 Cuộc họp  

| Mã chức năng | Tên chức năng                | Mô tả                                                                                                                                  | Điều kiện                                           | Kết quả hiển thị                                                                                                                                                                                           |
| ------------ | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T-36         | Hiển thị danh sách cuộc họp  | Hiển thị danh sách các buổi họp do trung tâm tổ chức dành cho giáo viên, bao gồm tên buổi họp, thời gian, trạng thái hoàn thành.       | Người dùng truy cập tab “Cuộc họp”.                 | Giao diện cột bên phải hiển thị danh sách các buổi họp, gồm: STT, tiêu đề buổi họp, ngày, giờ, trạng thái tham gia (Đã xong / Đang tham gia / Đang chờ).                                          |
| T-37         | Xem nội dung cuộc họp        | Cho phép giáo viên xem nội dung chi tiết của từng buổi họp, bao gồm mô tả, quy trình cần đọc, yêu cầu thực hiện do trung tâm cung cấp. | Nhấn vào một buổi họp trong danh sách.              | Giao diện bên trái hiển thị nội dung chi tiết cuộc họp, dạng tương tự tab “Quy trình”. Mỗi mục có tiêu đề, mô tả, file đính kèm (nếu có) và ô bình luận. Giáo viên chỉ được xem, không chỉnh sửa nội dung. |
| T-38         | Xem danh sách người tham gia | Cho phép giáo viên xem danh sách những người đã tham gia buổi họp.                                                                     | Nhấn vào khu vực avatar trong mục tiêu đề buổi họp. | Popup “Danh sách người tham gia” hiển thị gồm: họ tên, mã nhân sự, email, vai trò (Giáo viên / Support), ảnh đại diện (nếu có).                                                                            |





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
  - Google Chrome (>= version v110)
  - Mozilla Firefox (>= version 110)
  - Microsoft Edge (>= version v100)
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
