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

### 3.2 Vai trò admin

## 3.2.1 Trang chủ

| Mã chức năng | Tên chức năng         | Mô tả                                                                                                    | Điều kiện                                             | Kết quả hiển thị                                                  |
| ------------ | --------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| A-01         | Tìm kiếm nhanh        | Cho phép tìm kiếm học viên, giáo viên hoặc lớp học theo từ khóa nhập vào ô tìm kiếm.                     | Có dữ liệu nhập vào trường tìm kiếm.                  | Danh sách kết quả được lọc theo từ khóa.                          |
| A-02         | Hiển thị danh sách    | Hiển thị danh sách giáo viên, học viên, lớp học dưới dạng tab tương ứng.                                 | Người dùng chọn tab (Giáo viên / Học viên / Lớp học). | Hiển thị đúng danh sách đã chọn.                                  |
| A–03         | Hiển thị trạng thái danh sách rỗng   | Khi danh sách giáo viên, học viên hoặc lớp học chưa có dữ liệu, giao diện hiển thị thông báo “Danh sách đang trống”. | Không có dữ liệu tương ứng trong danh sách. | Hiển thị biểu tượng và dòng thông báo "Danh sách đang trống". |
| A-04         | Gán tag quản lý       | Gán tag cho từng đối tượng (giáo viên, học viên, lớp học) để phân loại theo tháng, khóa học, tình trạng… | Chọn tag từ danh sách có sẵn hoặc nhập mới.           | Tag được hiển thị bên cạnh tên đối tượng tương ứng.               |
| A-05         | Thêm ghi chú theo tag | Nhấn vào tag đã gán cho đối tượng để mở popup và thêm ghi chú cá nhân (dạng nhận xét).                   | Tag đã được gán và có thao tác nhấn vào.              | Tooltip chứa nội dung ghi chú được hiển thị khi rê chuột vào tag. |

#### 3.2.2 Danh sách lớp học của giáo viên (Tab menu trang chủ)

| Mã chức năng | Tên chức năng                | Mô tả                                                                                                                                                            | Điều kiện                                     | Kết quả hiển thị                                                                                                          |
| ------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| A-06         | Hiển thị danh sách lớp học   | Khi người dùng chọn một giáo viên từ danh sách, hệ thống hiển thị danh sách các lớp mà giáo viên đang phụ trách cùng các chỉ số liên quan.                       | Đã chọn một giáo viên cụ thể trong danh sách. | Danh sách lớp học xuất hiện: mã lớp, tên khoá học, số buổi đã học, % đi học, % làm bài tập, đánh giá.                     |
| A-07         | Hiển thị thông tin giáo viên | Hiển thị khung thông tin cá nhân của giáo viên bên trái, bao gồm: họ tên, mã số, số điện thoại, email, trạng thái, tag và ô ghi chú.                             | Đã chọn một giáo viên.                        | Thông tin hiển thị đầy đủ trong khung giáo viên.                                                                          |
| A-08         | Cập nhật thông tin giáo viên | Cho phép chỉnh sửa các trường: số điện thoại, email, trạng thái, **gán tag** (phân loại theo tháng...) và **ghi chú** nhận xét. Nhấn “Cập nhật” để lưu thay đổi. | Có quyền cập nhật và dữ liệu nhập hợp lệ.     | Các thay đổi được lưu lại và hiển thị ngay trong giao diện: tag được gắn cạnh tên, tooltip hiển thị ghi chú khi rê chuột. |






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
