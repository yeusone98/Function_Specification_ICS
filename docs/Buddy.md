# 👔 Tài liệu đặc tả chức năng Buddy

## I. Giới thiệu hệ thống và tài liệu
### 1. Về hệ thống PLS Buddy +
PLS Buddy+ là hệ thống hỗ trợ quản lý toàn bộ vòng đời tuyển dụng và đào tạo nhân sự trong doanh nghiệp.
Hệ thống cung cấp các chức năng chính bao gồm: quản lý ứng viên, quản lý vị trí tuyển dụng, quản lý phỏng vấn, quản lý đào tạo, và phân quyền theo vai trò.
Mục tiêu của PLS Buddy+ là giúp các bên liên quan (người phụ trách, người phỏng vấn, người đào tạo, ứng viên) dễ dàng tương tác, theo dõi tiến trình, và tối ưu hiệu quả quản lý tuyển dụng – đào tạo.

### 2. Về FSD PLS Buddy +
FSD PLS Buddy+ là tài liệu đặc tả chức năng (Functional Specification Document – FSD) của hệ thống **PLS Buddy+**.
Tài liệu này mô tả chi tiết các **chức năng, luồng xử lý, giao diện liên quan, điều kiện và kết quả hiển thị** của từng chức năng trong hệ thống.
Mục đích của FSD PLS Buddy+ là cung cấp tài liệu chuẩn cho đội ngũ phát triển, kiểm thử và vận hành hệ thống, đảm bảo việc xây dựng, triển khai và sử dụng PLS Buddy+ thống nhất và hiệu quả.

---

## II. Các vai trò trong hệ thống
### Bảng vai trò {#toc-2-1}
<div class="table-container">
  <table class="custom-table">
    <thead>
      <tr>
        <th class="smaller_th">Vai trò</th>
        <th>Mô tả chức năng chính</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bold">Người quản lý (Master)</td>
            <td class="light" style="text-align:left">Quyền hạn cao nhất trong hệ thống, Master có quyền thêm / xóa / sửa tài khoản của các vai trò vào hệ thống, thêm / xóa / sửa các vị trí tuyển dụng được hiển thị trên hệ thống</td>
        </tr>
        <tr>
            <td class="bold">Người phụ trách (Handler)</td>
            <td class="light" style="text-align:left">Quản lý toàn bộ quy trình tuyển dụng: thêm và cập nhật ứng viên, gán người phỏng vấn/người đào tạo, theo dõi trạng thái ứng viên, thiết lập vị trí tuyển dụng, tiêu chuẩn, lịch phỏng vấn và quy trình đào tạo.</td>
        </tr>
        <tr>
            <td class="bold">Người phỏng vấn (Interviewer)</td>
            <td class="light" style="text-align:left">Thực hiện phỏng vấn ứng viên được phân công, đánh giá kết quả phỏng vấn theo bộ câu hỏi và tiêu chí đánh giá, xem lịch và lịch sử phỏng vấn các ứng viên được gán.</td>
        </tr>
        <tr>
            <td class="bold">Người đào tạo (Trainer)</td>
            <td class="light" style="text-align:left">Tham gia đào tạo ứng viên/nhân sự sau khi được gán, theo dõi và đánh giá tiến trình đào tạo, sử dụng tài liệu đào tạo, quản lý lịch trình và tiêu chuẩn đào tạo của ứng viên được phân công.</td>
        </tr>
        <tr>
            <td class="bold">Ứng viên / Người được đào tạo (Trainee)</td>
            <td class="light" style="text-align:left">Ứng tuyển vị trí, tham gia phỏng vấn và làm bài kiểm tra. Khi được chuyển sang trạng thái đào tạo, trở thành Người được đào tạo, có thể theo dõi mục tiêu đào tạo, lịch trình, tài liệu và kết quả đánh giá đào tạo.</td>
        </tr>
    </tbody>
  </table>
</div>

## III. Đặc tả chức năng chung của các vai trò và mô tả action board {#toc-3}
???+ info "1. Các chức năng chung của các vai trò"
    ### 1. Các chức năng chung của các vai trò {#toc-3-1}
    #### 1.1. Đăng nhập tài khoản {#toc-3-1-1}
    ??? book "Đăng nhập tài khoản"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách, Người đào tạo, Người phỏng vấn, Người được đào tạo |
        | **Mục đích**                    | Xác thực danh tính và khởi tạo phiên đăng nhập, điều hướng người dùng tới màn hình chính ứng với phân quyền cao nhất được gán. |
        | **Giao diện liên quan**         | - Trang **Đăng nhập** <br>- Màn hình chính |
        | **Data Fields & Validation**    | - **Tên đăng nhập**: `Required`.<br>- **Mật khẩu**: `Required`.<br>- **Trung tâm hoạt động**: `Required` (Chọn từ danh sách). |
        | **Luồng xử lý (Workflow)**      | 1. Actor nhập thông tin tại trang **Đăng nhập** và Submit.<br>2. Client validate dữ liệu form.<br>3. Server xác thực thông tin (Khớp tên/mật khẩu, kiểm tra trạng thái tài khoản không bị vô hiệu hóa).<br>4. Phản hồi thành công: Lưu phiên đăng nhập, tự động tính toán phân quyền cao nhất của tài khoản.<br>5. Client thực hiện điều hướng sang Màn hình chính của phân quyền tương ứng. |
        | **Pre-conditions (Điều kiện)**  | - Tài khoản đã được đăng ký và không trong trạng thái vô hiệu hóa. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Điều hướng thành công.<br>- **Ngoại lệ (Sai thông tin)**: Hiển thị thông báo lỗi *“Sai tài khoản hoặc mật khẩu”*.<br>- **Ngoại lệ (Không tồn tại)**: Hiển thị thông báo *“Tài khoản không tồn tại trong hệ thống”*. |
    ####  1.2. Cập nhật tài khoản {#toc-3-1-2}
    ??? book "Cập nhật tài khoản"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách, Người đào tạo, Người phỏng vấn, Người được đào tạo |
        | **Mục đích**                    | Cập nhật thông tin cá nhân của tài khoản (Họ tên, Giới tính, Ngày sinh, Số điện thoại) thông qua menu Trang Cá Nhân. |
        | **Giao diện liên quan**         | - Menu **Trang Cá Nhân** |
        | **Data Fields & Validation**    | - **Họ và tên**: `Có thể chỉnh sửa`.<br>- **Giới tính**: `Có thể chỉnh sửa`.<br>- **Ngày sinh**: `Có thể chỉnh sửa`, `Validation: <= Ngày hiện tại`.<br>- **Số điện thoại**: `Có thể chỉnh sửa`, `Format: Số điện thoại`.<br>- **Gmail**: `Read-only` (Không thể thay đổi).<br>- **Vai trò**: `Read-only` (Không thể thay đổi). |
        | **Luồng xử lý (Workflow)**      | 1. Actor chọn menu **Trang Cá Nhân**, Client hiển thị thông tin tài khoản hiện tại.<br>2. Actor thực hiện chỉnh sửa các trường cho phép và trigger nút **Cập nhật tài khoản**.<br>3. Client validate Format (Ngày sinh, Dạng số điện thoại...).<br>4. Server xử lý lưu trữ dữ liệu mới.<br>5. Client phản hồi Toast/Thông báo thành công. |
        | **Pre-conditions (Điều kiện)**  | - Actor đang có phiên đăng nhập hợp lệ và tài khoản đang hoạt động. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Cập nhật Database, render lại component với dữ liệu mới, hiển thị thông báo *“Cập nhật dữ liệu thành công !”*.<br>- **Ngoại lệ (Không có thay đổi)**: Nếu data form không khác data gốc nhưng vẫn submit, hệ thống ghi nhận thành công và báo *“Cập nhật dữ liệu thành công !”*. |
    ####  1.3. Đổi mật khẩu {#toc-3-1-3}
    ??? book "Đổi mật khẩu"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách, Người đào tạo, Người phỏng vấn, Người được đào tạo |
        | **Mục đích**                    | Hỗ trợ cấp lại mật khẩu mới cho tài khoản. Dành cho 2 trường hợp: Quên mật khẩu lúc chưa đăng nhập, hoặc Reset mật khẩu lúc đã đăng nhập. |
        | **Giao diện liên quan**         | - Màn hình **Đăng nhập** (nút *Quên mật khẩu*)<br>- Menu **Trang Cá Nhân** (nút *Reset mật khẩu*)<br>- Màn hình đặt lại mật khẩu (Từ Link Email) |
        | **Data Fields & Validation**    | - **Email đăng ký**: `Required`, `Format: Email Regex`. |
        | **Luồng xử lý (Workflow)**      | **Trường hợp Quên mật khẩu (Chưa đăng nhập):**<br>1. Tại màn hình **Đăng nhập**, Actor chọn **Quên mật khẩu**.<br>2. Actor nhập form Email cung cấp. Client submit.<br>3. Server xác minh Email tồn tại. Tạo token gửi Link set mật khẩu qua Email.<br>4. Actor nhấp Link Email chuyển đến Màn hình đặt lại mật khẩu và nhập mật khẩu mới.<br>**Trường hợp Reset mật khẩu (Đã đăng nhập):**<br>1. Tại menu **Trang Cá Nhân**, Actor chọn **Reset mật khẩu**.<br>2. Server rà soát Email đang gắn với session, tạo token gửi Link đặt mật khẩu tương tự. |
        | **Pre-conditions (Điều kiện)**  | - Kịch bản Quên MK: cung cấp đúng Email gắn với tài khoản.<br>- Kịch bản Reset MK: đã có session đăng nhập hợp lệ.<br>- Thời gian truy cập Link phải nằm trong hạn mức sống của Token. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Đặt lại mật khẩu vào DB, báo *“Đặt lại mật khẩu thành công!”* và sử dụng mật khẩu mới.<br>- **Ngoại lệ (Email sai)**: Trả về lỗi *“Email không tồn tại trong hệ thống”*.<br>- **Ngoại lệ (Thiếu Email)**: Client block yêu cầu điền dữ liệu Email. |
    ####  1.4. Thay đổi vai trò (đối với tài khoản có nhiều vai trò) {#toc-3-1-4}
    ??? book "Thay đổi vai trò"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Mọi vai trò được gán |
        | **Mục đích**                    | Chuyển đổi giao diện làm việc ứng với Role mục tiêu mà không cần đăng nhập lại. |
        | **Giao diện liên quan**         | - Icon **Account** trên thanh điều hướng.<br>- Droplist lựa chọn vai trò. |
        | **Data Fields & Validation**    | - **Target Role**: `Required`, `Mapping: Danh sách vai trò đã gán`. |
        | **Luồng xử lý (Workflow)**      | 1. Actor nhấp Icon **Account**. Client render Droplist danh sách vai trò sở hữu.<br>2. Actor chọn 1 Role cụ thể.<br>3. Client reload hệ thống, update Role Context.<br>4. Header/Sidebar chuyển hướng về giao diện nhóm menu của Role vừa chọn (ví dụ Role Người phụ trách thì cập nhật menu tương ứng). |
        | **Pre-conditions (Điều kiện)**  | - Có phiên đăng nhập hợp lệ.<br>- Được gán từ 2 vai trò trở lên. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Giao diện và các Sidebar Navigation (Ứng Viên/Phỏng Vấn/Đào Tạo...) thay đổi chức năng tuỳ thuộc theo Role mới.<br>- **Ngoại lệ (Chỉ có 1 Role)**: Droplist không render lựa chọn thay đổi vai trò. |
    ####  1.5. Đăng xuất khỏi tài khoản {#toc-3-1-5}
    ??? book "Đăng xuất khỏi tài khoản"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Mọi người dùng |
        | **Mục đích**                    | Giới hạn và đóng phiên làm việc hiện tại, đưa hệ thống về trạng thái Guest Authentication. |
        | **Giao diện liên quan**         | - Icon **Account**.<br>- Droplist (Tùy chọn *Đăng Xuất*). |
        | **Data Fields & Validation**    | - N/A |
        | **Luồng xử lý (Workflow)**      | 1. Tại Icon **Account**, Actor chọn **Đăng Xuất**.<br>2. Client trigger sự kiện Logout.<br>3. Kết thúc phiên và xóa Authorization Caches đi kèm.<br>4. Redirect người dùng về trang **Đăng nhập**. |
        | **Pre-conditions (Điều kiện)**  | - Đang có phiên làm việc tương tác được với hệ thống. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Trạng thái Auth resets, điều hướng hoàn tất. |
---
???+ info "2. Mô tả action board"
    ### 2. Mô tả action board {#toc-3-2}
    #### 2.1 Chi tiết về action board {#toc-3-2-1}
    ??? book "Chi tiết về action board"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             |  |
        | **Mục đích**                    |  |
        | **Giao diện liên quan**         |  |
        | **Data Fields & Validation**    |  |
        | **Luồng xử lý (Workflow)**      |  |
        | **Pre-conditions (Điều kiện)**  |  |
        | **Post-conditions / Ngoại lệ**  |  |
---
## IV. Đặc tả chức năng dành cho Handler (Người Phụ Trách)
???+ info "1. Nhóm chức năng giữa người phụ trách - ứng viên"
    ### 1. Nhóm chức năng giữa người phụ trách - ứng viên {#toc-4-1}
    #### 1.1. Hiển thị bảng danh sách các ứng viên cho người phụ trách {#toc-4-1-1}
    ??? book "Hiển thị bảng danh sách các ứng viên cho người phụ trách"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Truy xuất và hiển thị danh sách ứng viên (hỗ trợ phân trang). Dữ liệu bị giới hạn (Filter) theo các Vị trí tuyển dụng được Master gán quyền quản lý. |
        | **Giao diện liên quan**         | - Trang **Danh sách ứng viên** (menu **"Ứng Viên"**)<br>- Bảng **Danh sách ứng viên** |
        | **Data Fields & Validation**    | - **Cột hiển thị**: Họ và Tên, Vị trí phỏng vấn, Loại hợp đồng, Người phụ trách, Ngày phỏng vấn, Giờ phỏng vấn, Trạng thái (icon + text), Đánh giá (icon + text), Ngày gửi CV.<br>- **Quyền truy cập**: Read-only (Không thể chỉnh sửa trực tiếp trên bảng). |
        | **Luồng xử lý (Workflow)**      | 1. Actor truy cập menu **"Ứng Viên"**.<br>2. Client gọi API lấy danh sách ứng viên (kèm tham số phân trang nếu có).<br>3. Server trích xuất danh sách ứng viên, mapping (join) với các vị trí tuyển dụng mà Actor được phân quyền quản lý.<br>4. Client render dữ liệu lên Bảng **Danh sách ứng viên**. |
        | **Pre-conditions (Điều kiện)**  | - Actor đăng nhập hợp lệ.<br>- Được Master gán quyền quản lý ít nhất 1 Vị trí tuyển dụng. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Render bảng dữ liệu, hỗ trợ phân trang.<br>- **Ngoại lệ (Chưa gán vị trí / Không có ứng viên / Không có kết quả lọc)**: Hiển thị Empty State với nội dung *“Bảng dữ liệu trống!”* kèm icon thùng rỗng.<br>- **Ngoại lệ (Ô tìm kiếm trống & Không bộ lọc)**: Fetch và render lại toàn bộ danh sách ban đầu. |

        <span class="swimlane-chart-label">
          <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
          <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-1/swimlane_1_1_danh_sach_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Hiển thị bảng danh sách các ứng viên cho người phụ trách</span>
    #### 1.2. Tùy chọn hiển thị filter trong bảng danh sách ứng viên {#toc-4-1-2}
    ??? book "Tùy chọn hiển thị filter trong bảng danh sách ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Tùy chỉnh (ẩn/hiện) danh sách các bộ lọc trên thanh công cụ của bảng **"Danh sách ứng viên"**. Trạng thái tùy chỉnh được lưu trữ theo từng tài khoản. |
        | **Giao diện liên quan**         | - Bảng **Danh sách ứng viên**<br>- Nút **"☰ Hiển thị"**<br>- Popup **"HIỂN THỊ FILTER"** |
        | **Data Fields & Validation**    | - **Filter Options**: Collection dựa trên các Vị trí tuyển dụng được phân quyền.<br>- **Selected Filters**: Mảng (Array) lưu danh sách ID filter được kích hoạt. |
        | **Luồng xử lý (Workflow)**      | 1. Tại bảng **"Danh sách ứng viên"**, Actor nhấp nút **"☰ Hiển thị"**.<br>2. Client render Popup **"HIỂN THỊ FILTER"** chứa toàn bộ các filter định nghĩa sẵn.<br>3. Actor check/uncheck các option filter.<br>&emsp;- Trạng thái nút Xác nhận: `Disabled` nếu không có sự thay đổi state.<br>&emsp;- Trạng thái nút Xác nhận: `Enabled` nếu có sự thay đổi checkbox state.<br>4. Actor nhấn "Xác nhận". Client update thanh bộ lọc (Filter bar) trên UI ngay lập tức và lưu cấu hình vào User Preferences. |
        | **Pre-conditions (Điều kiện)**  | - Actor đang có phiên đăng nhập hợp lệ. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Filter bar cập nhật hiển thị theo cấu hình mới. Trạng thái filter được giữ nguyên (persist) cho lần đăng nhập sau.<br>- **Ngoại lệ (Chưa định nghĩa filter)**: Popup hiển thị thông báo *"Không có dữ liệu!"*. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-2/swimlane_1_2_hien_thi_filter.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Tùy chọn hiển thị filter trong bảng danh sách ứng viên</span>
    #### 1.3 Tùy chọn hiển thị cột trong bảng danh sách ứng viên {#toc-4-1-3}
    ??? book "Tùy chọn hiển thị cột trong bảng danh sách ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Cấu hình ẩn/hiện các cột dữ liệu rỗng hoặc không cần thiết trên bảng **Danh sách ứng viên**. Cấu hình được lưu hóa cá nhân (User Preferences). |
        | **Giao diện liên quan**         | - Bảng **Danh sách ứng viên**<br>- Nút biểu tượng `👁️` (góc trên bên phải bảng) |
        | **Data Fields & Validation**    | - **10 Total Columns**: Vị trí phỏng vấn, Trạng thái, Phỏng vấn, Đào tạo, Ngày gửi CV, Ngày phỏng vấn, Ngày hết hạn hợp đồng, Ngày sinh, Thời gian training, Thời gian phỏng vấn.<br>- **Config Storage**: Mảng Columns ứng với User Account. |
        | **Luồng xử lý (Workflow)**      | 1. Actor nhấp biểu tượng `👁️`.<br>2. Client render Popup chứa checkboxes của 10 tùy chọn cột hiển thị.<br>3. Actor check/uncheck options.<br>4. Client lập tức cập nhật logic render các cột của Table (React/Vue reactivity) dựa trên Event onChange.<br>5. Client request lưu trữ trạng thái cột vào API User Preferences. |
        | **Pre-conditions (Điều kiện)**  | - Bảng **Danh sách ứng viên** đã mount thành công lên DOM. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Bảng Component re-render chỉ với những cột được tích.<br>- **Ngoại lệ (Bảng trống do Filter/No Data)**: Vẫn hỗ trợ toggle hiển thị cột, nhưng Data Content sẽ là UI Empty State: *“Bảng dữ liệu trống!”*. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-3/swimlane_1_3_hien_thi_cot.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Tùy chọn hiển thị cột trong bảng danh sách ứng viên</span>
    #### 1.4. Sắp xếp thứ tự ưu tiên theo từng cột {#toc-4-1-4}
    ??? book "Sắp xếp thứ tự ưu tiên theo từng cột"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Quán lý logic sắp xếp (Sort Priority) dữ liệu trên bảng dựa trên thứ tự người dùng tích chọn các Item bên trong các Filter Bar. |
        | **Giao diện liên quan**         | - Thanh công cụ (Filter bar)<br>- Nút Reset `⟳` cạnh mỗi bộ lọc |
        | **Data Fields & Validation**    | - **Priority Queue**: Thứ tự ưu tiên giảm dần theo Timestamp người dùng click chọn Items bên trong filter.<br>- **Multi-column Sort Rules**: Mức độ xếp ưu tiên 1: Chiều từ trái qua phải của các Header Cột Filter. Mức độ xếp ưu tiên 2: Thứ tự click bên trong từng cột (Áp dụng tối đa 9 cột, bỏ qua cột Đào tạo). |
        | **Luồng xử lý (Workflow)**      | 1. Actor mở Droplist 1 bộ lọc và lần lượt tích chọn các Item theo nhu cầu (VD: Chọn *HĐ Thử Việc*, sau đó chọn *HĐ Chính Thức*).<br>2. Client theo dõi hành vi click để build Sort Params (ưu tiên Item được tích trước).<br>3. Khép dropdown/Nhấn xác nhận, Client gửi API Request gộp chứa các thông số Filter Params + Sort Params.<br>4. Server xử lý query trả về Data Array.<br>5. Tại thanh Filter Bar, Actor có thể nhấn biểu tượng `⟳` để Reset cấu hình của mục đó về default null. |
        | **Pre-conditions (Điều kiện)**  | - Hệ thống phải có sẵn Data Option List bên trong Dropdown của Filter. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Trả về payload danh sách ứng viên được sort/filter đúng trình tự phân cấp.<br>- **Ngoại lệ (No matching data)**: Render component *“Bảng dữ liệu trống!”* kèm icon thùng rỗng. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-4/swimlane_1_4_sap_xep_uu_tien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Sắp xếp thứ tự ưu tiên theo từng cột</span>
    #### 1.5. Tìm kiếm ứng viên theo ký tự {#toc-4-1-5}
    ??? book "Tìm kiếm ứng viên theo ký tự"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Tìm kiếm Text cục bộ dữ liệu ứng viên dựa trên giá trị cột **Họ và Tên**. |
        | **Giao diện liên quan**         | - Ô tìm kiếm (Text Input) phía trên/cạnh bảng |
        | **Data Fields & Validation**    | - **Search Query**: Type `String`. Đối chiếu Database Column: `Họ và Tên`. |
        | **Luồng xử lý (Workflow)**      | 1. Actor nhập chuỗi text vào Input Field.<br>2. Client bắt event `onInput` / `onChange` (khuyến khích Debounce nếu call API Server) để tạo filter params mới.<br>3. Server/DB query Matching chuỗi ký tự bên trong **Họ và Tên**.<br>4. Client re-render mảng Data trả về. Nếu Query trống (Clear keyword), reset bảng ứng viên về trạng thái ban đầu. |
        | **Pre-conditions (Điều kiện)**  | - Bảng **Danh sách ứng viên** đã khởi tạo Data List. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Danh sách thu gọn lại chỉ còn các Records chứa text ứng với Query.<br>- **Ngoại lệ (Keyword không khớp bất kỳ record nào)**: Hiển thị Error State *“Bảng dữ liệu trống!”*. |
    #### 1.6. Truy vấn và kế thừa dữ liệu ứng viên cũ {#toc-4-1-6}
    ??? book "Truy vấn và kế thừa dữ liệu ứng viên cũ"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Autocomplete thông tin cá nhân (Họ và tên, Ngày sinh) từ Database phụ thuộc vào việc lựa chọn từ khóa Email. |
        | **Giao diện liên quan**         | - Popup **Thêm ứng viên** (Tickbox *Chọn ứng viên có sẵn*, Dropdown *Chọn Gmail*) |
        | **Data Fields & Validation**    | - **Email**: `Searchable Dropdown`, Data source: Collection Ứng viên có trong hệ thống.<br>- **Họ và tên**: `Auto-filled`.<br>- **Ngày sinh**: `Auto-filled`, `Format: dd/mm/yyyy`. |
        | **Luồng xử lý (Workflow)**      | 1. Actor bật Form **Thêm ứng viên mới** và check `Chọn ứng viên có sẵn`.<br>2. Client transform Text Input Email thành Dropdown-list hỗ trợ Async Search.<br>3. Actor gõ keyword tham số Email. Server query Database trả về items Email khớp.<br>4. Actor Pick 1 Email cụ thể. Client tự động binding data `Họ và tổng`, `Ngày sinh` (nếu có) vào State/Form Context.<br>5. Các bước kế tiếp fallback luồng **Tạo đơn ứng tuyển cho ứng viên đã từng apply**. |
        | **Pre-conditions (Điều kiện)**  | - Checkbox *Chọn ứng viên có sẵn* = `true`.<br>- Hệ thống đã có records của ứng viên đang tìm kiếm. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Form dữ liệu tự động popup các thông tin cá nhân khớp với dữ liệu gốc của ứng viên.<br>- **Ngoại lệ (Dropdown rỗng do Vị trí)**: Dropdown-list vị trí báo Empty Item *“Không có vị trí khả dụng!”*.<br>- **Ngoại lệ (Dropdown rỗng do Email)**: Tiện ích Search Email không tìm thấy Account báo *“Không có ứng viên nào!”*. |
    #### 1.7. Quản lý thông tin chi tiết của ứng viên (Cần sửa thêm tác động đến flow các role khác ntn) {#toc-4-1-7}
    ??? book "Quản lý thông tin chi tiết của ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Truy xuất và thực hiện Mutation (chỉnh sửa) hồ sơ chi tiết cá nhân của ứng viên. Chỉ định vai trò Handler chính (Main Handler) quản lý quá trình ứng tuyển. |
        | **Giao diện liên quan**         | - Màn hình Dashboard chứa Component **Thông tin** ứng viên (Bao gồm: Section Email, Section Câu trả lời ứng tuyển, Section Tổng quan & Gán người phụ trách, Section File đính kèm/Avatar). |
        | **Data Fields & Validation**    | - **Role Assignments**: Gồm 1 Handler Chính (quyền thực hiện Record Đánh giá / Rating) và nhiều Handler Phụ.<br>- **Cross-role Side Effects (Tác động)**: Dữ liệu này là một Record Duy Nhất (Single Source of Truth), khi Actor cập nhật thông tin thành công, Component view của Handler khác, Trainer và Interviewer ngay lập tức nhận dữ liệu mới tương đương. |
        | **Luồng xử lý (Workflow)**      | 1. Actor nhấp vào row hoặc link tương ứng từ bảng **Danh sách ứng viên**.<br>2. Client redirect Router sang Sidebar chi tiết và mount module Menu "Thông tin".<br>3. Server payload toàn bộ Nested Objects của record.<br>4. Actor sửa params mong muốn hoặc thay đổi Main Handler.<br>5. Client parse data, call Database Update API.<br>6. Server response trạng thái HTTP, Client alert Toast/Thông báo giao diện. |
        | **Pre-conditions (Điều kiện)**  | - Ứng viên được phân bổ cho Actor quản lý.<br>- Hành động Đánh giá Rating/Cập nhật profile review chỉ được kích hoạt (Enable) khi ID Account = `isMainHandler`. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: CSDL cập nhật, Toast Notif rendering content *"Cập nhật dữ liệu thành công!"*.<br>- **Ngoại lệ (Trường thông tin Data rỗng)**: Các Block text Input có giá trị rỗng sẽ hiển thị placeholder dạng Hint Label *`Nhập thêm nội dung`*. |
    #### 1.8. Thêm ứng viên mới (Cần sửa thêm tác động đến các role khác) {#toc-4-1-8}
    ??? book "Thêm ứng viên mới"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Khởi tạo một Node ứng viên mới tinh (Brand New Record) bao gồm Payload Profile và Storage Đính kèm vào CSDL. |
        | **Giao diện liên quan**         | - Nút Create biểu tượng `(+)` tại **Danh sách ứng viên**<br>- Dialog Form **Thêm ứng viên mới** |
        | **Data Fields & Validation**    | - **Họ và tên**: `String`, `Required`.<br>- **Vị trí**: `Required`, Mapping Schema `Danh sách vị trí đang tuyển`.<br>- **Gmail**: `String`, `Required`, `Unique Validation`, `Format: Regular Expression Email`.<br>- **Ngày gửi CV**: `Required`, `Date Params <= Current Date()`.<br>- **Files Collection**: `Tùy chọn Upload`, `Tổng Limit size <= 25MB`. |
        | **Luồng xử lý (Workflow)**      | 1. Actor trigger sự kiện nút `(+)`, Client popup Form Input.<br>2. Actor Fill data, Upload Files qua interface Drag/Drop.<br>3. Client Frontend validate toàn bộ form fields (Logic Dates, Pattern Regex).<br>4. Actor nhấn nút **“Thêm ứng viên”**.<br>5. Server middleware xác thực tính Unique của `Gmail`. Pass Middleware -> DB Insert logic thực thi.<br>6. Server trả kết quả success, Client Dispatch UI Table Fetch event. |
        | **Pre-conditions (Điều kiện)**  | - Thông số Input `Gmail` độc nhất (Chưa có record tồn tại nào sở hữu Email đó). |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Bảng UI Re-Render xuất hiện hàng dữ liệu của ứng viên vừa thêm.<br>- **Ngoại lệ (Không có Vị trí)**: Dropdown-list không fetch được Job ID sẽ Drop Select Menu về trạng thái ngắt kết nối *“Không có vị trí khả dụng!”*. |
    #### 1.9. Tạo đơn ứng tuyển cho ứng viên đã từng apply {#toc-4-1-9}
    ??? book "Tạo đơn ứng tuyển cho ứng viên đã từng apply"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Tạo lập Record Application mới cho Profile Candidate đã tồn tại qua việc Matching Email ID. (Phục vụ scenario Re-apply hoặc Apply Multiple Labels). |
        | **Giao diện liên quan**         | - Action Form **Thêm ứng viên**<br>- Modal Dialog Confirm hệ thống<br>- Modal Cảnh báo Block Workflow. |
        | **Data Fields & Validation**    | - **Validation Logic Đơn cũ**: Application record cũ của Profile đó phải đạt trạng thái `Hoàn thành` (Có Rating/Kết quả phỏng vấn) hoặc Transition state `Xóa`. |
        | **Luồng xử lý (Workflow)**      | 1. Actor Submit Form Input (Với tham số Email trùng một Node Profile đã có).<br>2. API Server xử lý Validation. Get Application History của Email.<br>3. `IF` History Application có đơn `Status != Hoàn Thành`: Trả về lỗi, Halt the Pipeline.<br>4. `IF` Các Đơn cũ đã đóng: Server trả về Alert Flag cảnh báo Duplicated Info.<br>5. Client parse Alert Flag -> Popup Modal Confirm: *“Email này đã được đăng ký trước đó...”*.<br>6. Actor click Alert Confirm button thay vì Cancel.<br>7. Server Execute Mutation Create Sub-record Application ánh xạ vào Model Candidate. |
        | **Pre-conditions (Điều kiện)**  | - Params Form đã Pass toàn bộ Validate phía Client.<br>- Điều kiện cốt lõi: Tất cả Node Application đang reference tới Profile ID này đều đã bị Close/Delete. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Application mới được thêm vào Tree Data, thể hiện trên Data Table View.<br>- **Ngoại lệ (Vướng Đơn Cũ Active)**: System chặn hành động Tạo mới, Trigger Component Dialog giải thích lỗi, chèn thêm Hyperlink dẫn thẳng tới record của Đơn ứng tuyển đang Active yêu cầu Actor phải Rating xong mới thả Pipeline. |
    #### 1.10. Tự động gán người phụ trách ứng viên (Cần sửa flow người phụ trách chính (có thể thay đổi được) --> thêm được người phụ trách phụ) {#toc-4-1-10}
    ??? book "Tự động gán người phụ trách ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | System Automation: Tự động gán User Session hiện tại làm Main Handler khi khởi tạo ứng viên. Hỗ trợ cập nhật Handler Phụ / thay đổi Handler Chính. |
        | **Giao diện liên quan**         | - Màn hình **Danh sách ứng viên**.<br>- Popup **Thêm ứng viên**.<br>- Màn hình list các Handler. |
        | **Data Fields & Validation**    | - **Handler Selection**: Mapping Handler Role trong Job Title.<br>- **Data Synchronize**: Handler Update Event Trigger sẽ Sync Realtime View Role Khác (Trainer/Interviewer). |
        | **Luồng xử lý (Workflow)**      | **Kịch bản Khởi tạo Profile:**<br>1. Client Submit [Thêm ứng viên], Server Inject `UID` Actor Gán Main Handler.<br>**Kịch bản Bổ sung / Thay đổi Handler:**<br>1. Tại Chi tiết ứng viên, View Handler List.<br>2. Drop-down Selector Render All Eligible User Phụ.<br>3. Action Change Sub -> Main Handler.<br>4. System Request Update Mapping Role Handler Update Array (Swap Role).<br>5. Refresh State Mở khoá chức năng Đánh giá, Thử việc tương ứng với Role mới cho Actor mới. |
        | **Pre-conditions (Điều kiện)**  | - User Có Quyền View/Manager Vị trí Job Target. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Handler Profile Update/Sync Data, Trigger Toast *"Cập nhật Người phụ trách chính thành công!"*.<br>- **Ngoại lệ (Blank View Default User)**: Render Graphic *“Bảng dữ liệu trống!”*. |
---
???+ info "2. Nhóm chức năng quản lý tuyển dụng ứng viên Cần sửa add full workflow impact cho tất cả các chức năng"
    ### 2. Nhóm chức năng quản lý tuyển dụng ứng viên {#toc-4-2}
    #### 2.1. Xem chi tiết buổi phỏng vấn ứng viên {#toc-4-2-1}
    ??? book "Xem chi tiết buổi phỏng vấn ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Read-only Data View cho Nội dung Assessment (Câu hỏi, Rate, Ghi chú) của cụ thể 1 Vòng phỏng vấn. |
        | **Giao diện liên quan**         | - Tab **Phỏng vấn** (Submenu màn hình Ứng viên).<br>- Danh sách Vòng phỏng vấn dạng Card UI.<br>- Popup Nội dung chi tiết. |
        | **Data Fields & Validation**    | - **Access Control**: Role Handler Disable Write Event form Edit/Modify Popup Object.<br>- **UI View Logic**: Card xám (Chưa Data) Disabled Click Event. Card Trắng (Đã Update Results) Enabled Click Open Popup Detail. |
        | **Luồng xử lý (Workflow)**      | 1. Actor View Navigation Tab **Phỏng vấn**. Client Init Dashboard Rendering list Vòng phỏng vấn nodes.<br>2. Actor Exec Click vào Card trắng (Status verify: Đã Phỏng Vấn).<br>3. Popup Controller Mount Module Window với 3 Form Section Tabs: *Câu hỏi phỏng vấn*, *Đánh giá*, *Ghi chú*.<br>4. Tab Segmented Control Active state *Câu hỏi phỏng vấn* Default.<br>5. Data Binding Rendering Value kết quả từ Evaluator nhập cho các Component tương ứng trong từng tabs.<br>6. Actor Navigate qua lại xem Information Content read-only. |
        | **Pre-conditions (Điều kiện)**  | - Account Role Handler Context View Vị Trí Setup Vòng Phỏng Vấn Template. Có Data Vòng Phỏng Vấn Input. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Modulo Window Content Population đầy đủ theo Record.<br>- **Ngoại lệ (Tab Không Data)**: Render Component Empty Box *“Không có dữ liệu!”* + Default Vector Icon. |
    #### 2.2. Xem lại các đánh giá gần đây {#toc-4-2-2}
    ??? book "Xem lại các đánh giá gần đây"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Sidebar Module Listing Timeline Evaluation History Data Point hỗ trợ UX Focus Scroll. |
        | **Giao diện liên quan**         | - Widget **Đánh giá gần đây** (Sidebar Viewport phải).<br>- Item Summary Card List. |
        | **Data Fields & Validation**    | - **Mapping List Info Props**: Text (Title), Label Badge Enum Status, `RatingValue`, `ReviewerDetails`, `DateTimestamp`.<br>- **Badge Theming**: Xanh lá (Tốt), Xanh dương (Khá), Cam (Trung bình), Xám (Kém). |
        | **Luồng xử lý (Workflow)**      | 1. Actor View Client load Candidate Profile UI. System Fetch Rating Event History Collection.<br>2. Hook Data Iterate Rendering Array List Cards qua Right Sidebar Layout.<br>3. Actor Exec Event `onClick()` Card Object Sidebar.<br>4. Client App Container Exec Dispatch Javascript Viewport `scrollIntoView()` trỏ focus UI chính left screen tới Container Review Record tương thích.<br>5. Node Item Details Open Toggle Expansion cho Reference Reading. |
        | **Pre-conditions (Điều kiện)**  | - Records Length History Evaluated Candidate Profile `> 0`. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: SideNav Loading Cards thành công. Handle Jump Action Offset.<br>- **Ngoại lệ (Missing Records)**: Render Empty Image Box Box *“Không có dữ liệu!”*. |
    #### 2.3. Tạo vòng phỏng vấn ứng viên {#toc-4-2-3}
    ??? book "Tạo vòng phỏng vấn ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Kích hoạt Instance 1 Vòng Phỏng Vấn Skeleton Config từ Base Profile Node -> Schedule Task Node. (Actor Input Interviewers, Calendar Booking Date Time). |
        | **Giao diện liên quan**         | - Tab **Phỏng vấn** View Component.<br>- Cửa sổ Options Giao Diện Calendar Insert Event. |
        | **Data Fields & Validation**    | - **Người phỏng vấn Selection List**: Multiselect Drop-down API Fetch Source Data (Employee Info Filter).<br>- **Schedule Calendar Options**: Picker Input Type Datetime Formatter.<br>- **Role Impact Scope**: Gửi Event Notification App View UI Calendar User Khác (Reviewer Task Target). Update logic Link Header *“Vòng phỏng vấn tiếp theo”* Nếu Create Duplicate Continuous Stage Sessions. |
        | **Luồng xử lý (Workflow)**      | 1. Actor View Tab **Phỏng vấn**, DOM Load danh sách vòng phỏng vấn Skeleton Inactive (Màu Xám).<br>2. Select Card Xám trigger Mounting Dialog Settings Configuration Time/Role param form box.<br>3. Options Field Selected Users Input Array Reviewer Nodes.<br>4. Picker Datetime Setup Timeline Point State Process.<br>5. Commit `Submit Request` Button Execute Network Database Transaction Insertion.<br>6. Server Link Node Context -> Sync Data Update Component UI Trắng Enabled + Render Tên Người Phỏng Vấn / Node Calendar Event UI mới. |
        | **Pre-conditions (Điều kiện)**  | - Master Rule Job Profile Template Structure Phải Có Tối Thiểu 1 Round Skeleton Node. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Active State Stage Phỏng vấn Panel Load Result Timeline Graphic, Layout Application Update Timeline Connection String.<br>- **Ngoại lệ (Fetch Setup Selection Data Null)**: Options Element Box Drop-down Text View Return Fallback Value *“Không có dữ liệu!”*. |
    #### 2.4. Quản lý ghi chú về ứng viên {#toc-4-2-4}
    ??? book "Quản lý ghi chú về ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | CRUD Panel cho Ghi chú. Cho phép Actor Insert/Update/Delete Note Records thuộc về cá nhân Actor. |
        | **Giao diện liên quan**         | - View Tab **Ghi chú** (Submenu ứng viên).<br>- Modal Component Form `[+ Thêm ghi chú]`.<br>- WYSIWYG / Toolbar Formatting Popup. |
        | **Data Fields & Validation**    | - **Note Schema**: `Title` (String), `Content` (Rich Text HTML format), `CreatedBy` (UID), `Timestamp`.<br>- **Authorization Logic**: Actor Client ID `===` UID Creator -> Enabled Action Dropdown (Sửa/Xóa). Khác -> Disabled / Hidden Actions.<br>- **Text Parser**: Hỗ trợ CSS Inline Styles Binding (Bold, Italic, Underline, Strike, Font Color, Link). |
        | **Luồng xử lý (Workflow)**      | 1. Actor View Tab **Ghi chú**, Client Fetch Data Array sort DateTime DESC.<br>2. Action Thêm mới: Click Button Mounting Cửa sổ Popup `Thêm ghi chú`. Input Field Title & Nội dung.<br>3. Highlight Content & Trigger Toolbar Component để parse Styles HTML Formatting tags.<br>4. Submit Insert API Record CSDL.<br>5. Action Sửa/Xóa: Trigger Menu Cấu hình View (Icon 3 chấm) từ Info Card thuộc sở hữu Owner Actor. Invoke API Update/Delete, Server return Success status, Map state Update Render List DOM Component màn hình. |
        | **Pre-conditions (Điều kiện)**  | - Actor Account Mapping Session Context Role Người phụ trách Valid. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: View Frame Update New Node Component Card Note Mới. Avatar/Time text format `HH:MM DD/MM/YYYY`.<br>- **Ngoại lệ (0 Length Database Query Array Result List API Record Null Model Empty)**: Layout Content Framework Rendering Module Image Vector Fallback State Default Label Null Value String *“Không có dữ liệu!”*. |
    #### 2.5. Đánh giá ứng viên {#toc-4-2-5}
    ??? book "Đánh giá ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Cho phép Handler chính thực hiện đánh giá ứng viên theo bộ tiêu chí đã thiết lập. Handler phụ chỉ được xem dữ liệu ở chế độ read-only. |
        | **Giao diện liên quan**         | - Tab **Đánh giá** trong chi tiết ứng viên.<br>- Form **Đánh giá ứng viên**.<br>- Các danh mục tiêu chí đánh giá dạng Accordion / Dropdown. |
        | **Data Fields & Validation**    | - **Form Fields**: `Tiêu đề đánh giá`, `Rating` 1-5 sao, Checkbox các tiêu chí chi tiết, `Nội dung đánh giá`.<br>- **Permission Logic**: Chỉ `Main Handler` được phép chỉnh sửa và lưu đánh giá. |
        | **Luồng xử lý (Workflow)**      | 1. Actor mở tab **Đánh giá**.<br>2. Main Handler nhập tiêu đề, chọn số sao và tích các tiêu chí chi tiết.<br>3. Actor nhập nội dung đánh giá tổng quát.<br>4. Actor nhấn **Lưu đánh giá** để ghi nhận dữ liệu.<br>5. Hệ thống cập nhật danh sách **Đánh giá gần đây** và đồng bộ kết quả cho các Handler liên quan. |
        | **Pre-conditions (Điều kiện)**  | - Tài khoản có quyền Người phụ trách.<br>- Vị trí ứng tuyển của ứng viên đã được thiết lập bộ tiêu chí đánh giá.<br>- Actor là `Main Handler` nếu muốn thực hiện thao tác ghi dữ liệu. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Dữ liệu đánh giá được lưu và hiển thị ở lịch sử đánh giá gần đây.<br>- **Ngoại lệ (Chưa có bộ tiêu chí)**: Hệ thống hiển thị thông báo *“Vị trí này chưa có tiêu chí đánh giá!”* hoặc khung trống. |
    #### 2.6. Quản lý HĐLĐ với ứng viên {#toc-4-2-6}
    ??? book "Quản lý HĐLĐ với ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Tạo và quản lý thông tin Hợp đồng lao động của ứng viên, bao gồm dữ liệu hành chính, nội dung hợp đồng và tệp đính kèm liên quan. |
        | **Giao diện liên quan**         | - Tab **Hợp Đồng** trong chi tiết ứng viên.<br>- Form **Thông Tin Hợp Đồng**.<br>- Khu vực **Nội dung** và **Tệp đính kèm**. |
        | **Data Fields & Validation**    | - **Contract Types**: `HĐ Thực tập`, `HĐ Thử việc`, `HĐ Chính thức`.<br>- **Behavior Rules**: Nếu chọn `HĐ Chính thức`, form nhập liệu chuyển sang trạng thái disabled / khóa chỉnh sửa.<br>- **Attachment Actions**: Upload, xem, xóa tệp đính kèm. |
        | **Luồng xử lý (Workflow)**      | 1. Actor mở tab **Hợp Đồng** của ứng viên.<br>2. Actor chọn loại hợp đồng và nhập các thông tin hành chính cần thiết.<br>3. Actor xem / ẩn thông tin lương bằng biểu tượng con mắt nếu cần.<br>4. Actor tải lên hoặc xóa tệp đính kèm liên quan.<br>5. Hệ thống lưu dữ liệu hợp đồng và cập nhật phần hiển thị cho các bên liên quan. |
        | **Pre-conditions (Điều kiện)**  | - Tài khoản đang đăng nhập có phân quyền Người phụ trách. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Thông tin hợp đồng được lưu và hiển thị đúng định dạng ngày tháng / tệp đính kèm.<br>- **Ngoại lệ (Chưa có dữ liệu hợp đồng)**: Form giữ trạng thái rỗng, khu vực tệp đính kèm không hiển thị danh sách. |
    #### 2.7. Quản lý thử việc dành cho ứng viên {#toc-4-2-7}
    ??? book "Quản lý thử việc dành cho ứng viên"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách (Chính) |
        | **Mục đích**                    | Theo dõi và đánh giá chi tiết quá trình thử việc dựa trên các nhóm nhiệm vụ đã được thiết lập. Chỉ Handler chính được phép thao tác ghi nhận kết quả. |
        | **Giao diện liên quan**         | - Tab **Thử việc** trong chi tiết ứng viên.<br>- Danh sách nhóm nhiệm vụ dạng Accordion.<br>- Các thẻ nhiệm vụ chi tiết và thanh công cụ tương tác. |
        | **Data Fields & Validation**    | - **Progress Indicator**: Chỉ số tiến độ `X/Y` theo từng nhóm nhiệm vụ.<br>- **Task Actions**: Checkbox hoàn thành, nhận xét, file minh chứng, liên kết liên quan.<br>- **Permission Logic**: Chỉ `Main Handler` được tích chọn và cập nhật dữ liệu. |
        | **Luồng xử lý (Workflow)**      | 1. Main Handler mở tab **Thử việc** của ứng viên.<br>2. Actor xem các nhóm nhiệm vụ và chỉ số tiến độ tổng quát.<br>3. Actor mở rộng từng nhóm để tích chọn, nhập nhận xét và đính kèm minh chứng cho từng nhiệm vụ.<br>4. Hệ thống lưu log người đánh giá và thời gian cập nhật.<br>5. Hệ thống đồng bộ tiến độ mới lên giao diện chi tiết ứng viên. |
        | **Pre-conditions (Điều kiện)**  | - Ứng viên đang trong giai đoạn thử việc hoặc đã được gán lộ trình thử việc.<br>- Tài khoản đăng nhập có quyền Người phụ trách.<br>- Actor là `Main Handler` của ứng viên đang chọn. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Chỉ số tiến độ và log đánh giá được cập nhật ngay trên giao diện.<br>- **Ngoại lệ (Chưa có dữ liệu thử việc)**: Hệ thống hiển thị empty state *“Không có dữ liệu thử việc!”*. |
---
???+ info "3. Nhóm chức năng quản lý vị trí tuyển dụng"
    ### 3. Nhóm chức năng quản lý vị trí tuyển dụng {#toc-4-3}
    #### 3.1. Xem danh sách vị trí tuyển dụng {#toc-4-3-1}
    ??? book "Xem danh sách vị trí tuyển dụng"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Read Data Table (Danh sách vị trí ứng tuyển). Cung cấp View Data được filter dựa trên quyền hạn của Actor. |
        | **Giao diện liên quan**         | - Màn hình **"Danh sách vị trí ứng tuyển"** thuộc menu "Quản lý vị trí". |
        | **Data Fields & Validation**    | - **Cột dữ liệu Component Table**: `Tên và vai trò`, `Ứng viên` (Count int), `Chờ phỏng vấn` (Count int), `Đang đào tạo` (Count int), `Trạng thái` (Boolean Toggle).<br>- **Authorization Logic**: Query API với parameter `Assigned_Handler_ID === Actor.UID`. Các vị trí không được Master phân quyền sẽ bị loại bỏ khỏi Response. |
        | **Luồng xử lý (Workflow)**      | 1. Actor Route đến View Menu **Quản lý vị trí**.<br>2. Component Table Mounting, fetch API List Vị trí.<br>3. Render Array Data thành các hàng dọc theo từng cột.<br>4. Thao tác Tắt/bật Trạng thái: Trigger onClick switch button cập nhật Boolean Status của Node vị trí.<br>5. Thao tác Xóa: Hover Item, Trigger Button `(x)` -> Xác nhận Xóa Soft-delete Node. |
        | **Pre-conditions (Điều kiện)**  | - Role Account hợp lệ. Được Master gắn quyền ít nhất 1 vị trí. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Component Table Render List Array Dữ liệu.<br>- **Ngoại lệ (Không có vị trí phân quyền)**: Render Component State Empty *“Bảng này hiện đang trống!”* + Fallback Icon. Các chỉ số Count = 0 sẽ render int `0` thay vì Null/Empty. |
    #### 3.2. Xem thông tin tổng quan về vị trí tuyển dụng {#toc-4-3-2}
    ??? book "Xem thông tin tổng quan về vị trí tuyển dụng"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Cung cấp Dashboard Chart / Metric Report tổng quan cho 1 Vị trí. Giới hạn Controller Action (Read-only view). |
        | **Giao diện liên quan**         | - Sidebar Sub-menu Vị trí (Tổng quan, Mô tả (JD), K.Tra đầu vào...).<br>- Màn hình **Tổng quan vị trí** chứa Component Charts. |
        | **Data Fields & Validation**    | - **Metrics Render**: Graphic Chart Node (Số CV, Số Phỏng vấn, Pass, Training, Thử việc).<br>- **Date Range Picker**: Input Component Element lọc time-series data biểu đồ. |
        | **Luồng xử lý (Workflow)**      | 1. Actor Select Target Job Item từ Table List. Dispatch Route Transition.<br>2. Shell Layout Inject Sidebar Submenu Vị trí. Auto-focus Tab **Tổng quan**.<br>3. Client Fetch Dashboard API data trả về Object Array thống kê của Node ID Vị trí đó.<br>4. Bind Map Value Data vào Chart Component Component Line/Pie/Bar.<br>5. Lọc Time range: Click `📅` Picker -> Re-fetch API với Query Params DateRange. |
        | **Pre-conditions (Điều kiện)**  | - Handler Request GET Entity UID có quyền hợp lệ. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: Metric Chart Node Render Data Points.<br>- **Ngoại lệ (Zero Data)**: API response mảng rỗng -> Component Chart Render Base Line trên Trục X, Metric Count Card Render `0`. |
    #### 3.3. Thiết lập mô tả vị trí tuyển dụng (JD) {#toc-4-3-3}
    ??? book "Thiết lập mô tả vị trí tuyển dụng (JD)"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | CRUD Builder dành cho Job Description Profiles (JD). Cho phép tạo nhiều Biến thể JD Variant phục vụ các ngữ cảnh khác nhau. |
        | **Giao diện liên quan**         | - Màn hình **Danh sách mô tả** thuộc Submenu *Mô Tả (JD)*. |
        | **Data Fields & Validation**    | - **Schema JD Profile**: `Profile Name`, `General Description`, mảng con `Categories` (Chứa Item rules details).<br>- **Event Key Binding**: Listener Event Node `onKeyPress` phím `[ENTER]` thực thi Action Save thay vì Button Click. |
        | **Luồng xử lý (Workflow)**      | 1. Actor Navigate Tab *Mô Tả (JD)*. Render State List Profiles JD hiện có.<br>2. Action Thêm mới: Input `Profile Name` Text field -> Ấn `[ENTER]` -> Trigger API Create new Entity. Trả về Toast Notification Success.<br>3. UI Mount Dynamic Layout Editor cho Profile vừa tạo. Nhập Section `Mô tả chung` -> Ấn `[ENTER]` Lưu.<br>4. Module `Nhập danh mục mới`: Nhập Text Title -> `[ENTER]` -> System Insert mảng Category Mới, Map cập nhật Component UI List danh mục (Realtime Non-reload).<br>5. Các thao tác Mutate Danh mục: Thêm nội dung con, Kéo thả Sắp xếp (DND Component), Xóa kèm Popup Confirmation Cảnh báo. |
        | **Pre-conditions (Điều kiện)**  | - View Node Context đang active trên Vị trí hợp lệ. |
        | **Post-conditions / Ngoại lệ**  | - **Thành công**: JSON Profile Lưu vào DB. Render Component View Layout Format đầy đủ Title, Group, Text Node.<br>- **Ngoại lệ (Lỗi fetching state)**: Component trả về Error Fallback Handler Alert Message.<br>- **Ngoại lệ (No Profiles)**: State Component List trả về Component Vector *“Không có dữ liệu!”*. |
    #### 3.4. Thiết lập bài kiểm tra đầu vào {#toc-4-3-4}
    ??? book "Thiết lập bài kiểm tra đầu vào"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Quản lý và cấu hình Đề thi đánh giá (Input Test) làm Requirement Gate cho các chiến dịch tuyển dụng. |
        | **Giao diện liên quan**         | - Layout Screen **K.Tra đầu vào** (Submenu Vị trí). |
        | **Data Fields & Validation**    | - **Data Schema**: (Đang chờ thiết kế chi tiết Form Engine). |
        | **Luồng xử lý (Workflow)**      | - Đang chờ cập nhật chi tiết logic luồng thực thi theo Business Flow. |
        | **Pre-conditions (Điều kiện)**  | - Có Vị trí tuyển dụng được chọn sẵn trong Context. |
        | **Post-conditions / Ngoại lệ**  | - Component render Fallback State nếu Data Template Null hoặc Missing Configs. |
---
???+ info "4. Nhóm chức năng quản lý phỏng vấn (thêm tác động lên candidate và interviewer)"
    ### 4. Nhóm chức năng quản lý phỏng vấn (thêm tác động lên candidate và interviewer) {#toc-4-4}
    #### 4.1. Thiết lập tiêu chuẩn ứng viên {#toc-4-4-1}
    ??? book "Thiết lập tiêu chuẩn ứng viên"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Chức năng giúp người phụ trách thiết lập các tiêu chuẩn để người phỏng vấn có thể đánh giá ứng viên trong quá trình phỏng vấn. Các tiêu chuẩn phỏng vấn mà người phụ trách được phép thiết lập ở chức năng / màn hình này là [`action_type : check (action kiểm tra)`]. Người phụ trách có toàn quyền xem / xóa / sửa các danh mục và nội dung chứa trong chúng (các action check). |
        | **Giao diện liên quan**         | - Menu **“Quản Lý Vị trí”**.<br>- Submenu: **“Phỏng vấn”**, bao gồm các tab: **Tiêu chuẩn ứng viên**, **Các câu hỏi thông tin**, **Các vòng phỏng vấn**, **Thiết lập K.tra đầu vào**. |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người phụ trách chọn vào một ví trí trên bảng **"Danh sách vị trí ứng tuyển"**.<br>2. Hệ thống điều hướng đến màn hình của submenu **Tổng quan**.<br>3. Người phụ trách chọn vào submenu **Phỏng vấn** --> chọn tab *Tiêu chuẩn ứng viên*.<br>4. Khi ở màn hình của submenu *Tiêu chuẩn ứng viên* thì người phụ trách được phép thực hiện thao tác thiết lập (thêm / xóa / sửa) các danh mục và action kiểm tra bên trong nó.<br><br>**(Lưu ý: Không cho phép người phụ trách check vào các checkbox của action check tại đây)**.<br><br>5. Khi người phụ trách xóa một danh mục hoặc một action check trong danh mục, hệ thống hiển thị popup cảnh báo để người phụ trách xác nhận. |
        | **Pre-conditions (Điều kiện)**  | - Người phụ trách đã đăng nhập và có quyền quản lý vị trí.<br>- Vị trí tuyển dụng đã tồn tại trong hệ thống.<br>- Khi thêm mới danh mục: không được phép để trống tên của danh mục.<br>- Khi thêm/sửa mục: tên và nội dung của danh mục / các action check bên trong phải hợp lệ (không được để trống). |
        | **Post-conditions / Ngoại lệ**  | - Danh mục được hiển thị và có thể thao tác mở rộng/thu gọn.<br>- Sau khi thêm / sửa / xóa, dữ liệu được cập nhật ngay trên màn hình.<br>---<br>**Ngoại lệ / No Data**: - Nếu chưa có danh mục nào: hiển thị ô **“Nhập Danh Mục Mới”** để thêm và hiển thị biểu tượng thùng rỗng (*Không có dữ liệu*).<br>- Nếu danh mục chưa có nội dung bên trong: hiển thị textbox **“Nhập nội dung mới”**.<br>- Khi xóa hết danh mục: màn hình trở về trạng thái trống, hiển thị ô **“Nhập Danh Mục Mới”** để thêm và hiển thị biểu tượng thùng rỗng (*Không có dữ liệu*). |    #### 4.2. Thiết lập các vòng phỏng vấn {#toc-4-4-2}
    ??? book "Thiết lập các vòng phỏng vấn"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Đang cập nhật mục đích. |
        | **Giao diện liên quan**         | Đang cập nhật giao diện. |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | Theo luồng thao tác người dùng. |
        | **Pre-conditions (Điều kiện)**  | Phiên đăng nhập hợp lệ. |
        | **Post-conditions / Ngoại lệ**  | Cập nhật thành công vào Database. |        | **Mô tả** | Chức năng cho phép người phụ trách thiết lập danh mục các vòng phỏng vấn tương ứng dành cho vị trí đã chọn, mỗi vòng phỏng vấn bao gồm 3 phần:<br>&emsp;- Tên vòng phỏng vấn và nút toggle_on-off để thay đổi trạng thái.<br>&emsp;- Tab *'Đánh giá'*: tab này cho phép người phụ trách thêm / xóa / sửa các danh mục chứa các [`action_type : evaluate (action đánh giá)`].<br>&emsp;- Tab *'Câu hỏi phỏng vấn'*: tab này cho phép người phụ trách thêm / xóa / sửa các danh mục chứa các [`action_type : instruction (action hướng dẫn)`].<br><br>*(Lưu ý: không cho phép người phụ trách thêm vào tab mới, quy định một vòng phỏng vấn chỉ bao gồm 2 tab **Đánh giá** và tab **Câu hỏi phỏng vấn**)*.|
        | **Giao diện liên quan** | - Menu **“Quản Lý Vị trí”**.<br>- Submenu: **“Phỏng vấn”**, bao gồm các tab: **Tiêu chuẩn ứng viên**, **Các câu hỏi thông tin**, **Các vòng phỏng vấn**, **Thiết lập K.tra đầu vào**. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn vào một ví trí trên bảng **"Danh sách vị trí ứng tuyển"**.<br>2. Hệ thống điều hướng đến màn hình của submenu **Tổng quan**.<br>3. Người phụ trách chọn vào submenu **Phỏng vấn** --> chọn tab *Các vòng phỏng vấn*.<br>4. Hệ thống hiển thị màn hình chính của tab *Các vòng phỏng vấn* chứa danh sách **"Vòng phỏng vấn"** nằm bên phải của màn hình.<br>5. Khi người phụ trách muốn thêm một vòng phỏng vấn, cần nhập tên của vòng phỏng vấn đó vào ô *Thêm mục (+)* và nhấn [ENTER], hệ thống lưu --> tự động gán trạng thái toggle_on --> tự động trỏ vào vòng phỏng vấn mới tạo nếu chưa focus vào item nào trước đó.<br>6. Người phụ trách có thể xem được 3 màn hình tương ứng khi chọn vào các item sau:<br><br>&emsp;- Item vòng phỏng vấn: hiển thị tiêu đề là tên của vòng phỏng vấn, mô tả của vòng phỏng vấn<br>&emsp;- Item *Đánh giá* của vòng phỏng vấn: hiển thị tiêu đề, mô tả và các danh mục chứa các [`action đánh giá`]<br>&emsp;- Item *Câu hỏi phỏng vấn* của vòng phỏng vấn: hiển thị tiêu đề, mô tả và các danh mục chứa các [`action hướng dẫn`].<br><br>7. Khi thực hiện xóa một vòng phỏng vấn (xóa các action trong các tab thì không cần xác nhận), hệ thống sẽ hiển thị popup cảnh báo và người phụ trách cần nhấn vào nút *`Xác nhận`* để hoàn thành thao tác xóa. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý vị trí.<br>- Vị trí tuyển dụng đã tồn tại trong hệ thống.<br>- Khi thêm mới danh mục: không được phép để trống tên của danh mục.<br>- Khi thêm/sửa mục: tên và nội dung của danh mục / các action hướng dẫn và đánh giá bên trong phải hợp lệ (không được để trống). |
        | **Kết quả hiển thị** | - Danh mục được hiển thị và có thể thao tác mở rộng/thu gọn, layout của một vòng phỏng vấn hoàn chỉnh đúng với mô tả.<br>- Sau khi thêm / sửa / xóa, dữ liệu được cập nhật ngay trên màn hình. |
        | **Trường hợp không có dữ liệu** | **Trường hợp chưa có bất kỳ vòng phỏng vấn nào**: hệ thống sẽ hiển thị màn hình chính trống, danh sách các vòng phỏng vấn bên phải màn hình sẽ có biểu tượng thùng rỗng.<br>**Trường hợp vòng phỏng vấn chưa được thiết lập bất kỳ action nào bên trong**: người phụ trách chọn vào các tab *Đánh giá* và *Câu hỏi phỏng vấn* và mở các item chứa các action bên trong thì chỉ thấy ô *Nhập nội dung mới*. |
    #### 4.3. Thiết lập bài kiểm tra đầu vào {#toc-4-4-3}
    ??? book "Thiết lập bài kiểm tra đầu vào"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | người phụ trách cấu hình các bài kiểm tra chuyên môn cho từng vị trí tuyển dụng cụ thể. Hệ thống hỗ trợ đa dạng loại câu hỏi và cơ chế tự động lưu (Auto-save bằng cách lưu theo từng câu hỏi) để tối ưu hóa quá trình thiết lập. Các bài kiểm tra này sẽ được sử dụng làm căn cứ đánh giá năng lực ứng viên trong quá trình phỏng vấn trực tiếp. |
        | **Giao diện liên quan**         | - Sub-menu "K.Tra đầu vào" trong chi tiết vị trí tuyển dụng.<br>- Nút Switch chế độ "Thiết lập" và "Xem đáp án mẫu".<br>- Danh sách bài kiểm tra (Accordion).<br>- Trình soạn thảo câu hỏi theo từng loại hình. |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Tiếp cận và chuyển đổi chế độ:<br>&emsp;- Người phụ trách chọn vị trí được Master gán quyền, vào mục "K.Tra đầu vào".<br>&emsp;- Sử dụng nút chuyển đổi để switch giữa mode Thiết lập (để chỉnh sửa) và mode Xem đáp án mẫu (để xem trước giao diện và đáp án).<br>2. Cấu hình bài kiểm tra:<br>&emsp;- Hệ thống hiển thị tiêu đề kèm số lượng câu hỏi hiện có của từng bài kiểm tra.<br>&emsp;- Người phụ trách chọn 01 trong 04 loại câu hỏi: Trắc nghiệm (1 đáp án), Hộp kiểm (nhiều đáp án), Dropdown (chọn từ danh sách), Văn bản (tự luận).<br>3. Cơ chế Lưu dữ liệu:<br>&emsp;- Hệ thống thực hiện tự động lưu ngay lập tức sau khi người phụ trách hoàn thành thiết lập cho mỗi câu hỏi (không cần nhấn nút Lưu tổng).<br>4. Quản lý trạng thái và xóa:<br>&emsp;- Sử dụng nút Switch trên từng bài kiểm tra để Kích hoạt hoặc Vô hiệu hóa.<br>&emsp;- Nhấn biểu tượng xóa để gỡ bỏ bài kiểm tra khỏi vị trí đang quản lý. |
        | **Pre-conditions (Điều kiện)**  | Phiên đăng nhập hợp lệ. |
        | **Post-conditions / Ngoại lệ**  | Cập nhật thành công vào Database. |        | **Điều kiện** | Tài khoản đã đăng nhập và là Người phụ trách được Master gán quyền quản lý vị trí này.<br>- Vị trí tuyển dụng đang ở trạng thái hoạt động. |    
        | **Kết quả hiển thị** | - Các thay đổi được cập nhật Real-time và hiển thị đồng bộ cho toàn bộ Handler của vị trí đó.<br>- Số lượng câu hỏi ở tiêu đề bài kiểm tra tự động cập nhật khi thêm/xóa câu hỏi. |
        | **Trường hợp không có dữ liệu** | **Trường hợp vị trí chưa có bài kiểm tra:** Hệ thống hiển thị biểu tượng thùng rỗng kèm nút "Thêm bài kiểm tra mới". |
    #### 4.4. Thiết lập bài kiểm tra kiến thức (Kiểm tra khi phỏng vấn trực tiếp) {#toc-4-4-4}
    ??? book "Thiết lập bài kiểm tra đầu vào (Kiểm tra khi phỏng vấn trực tiếp)"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    |  |
        | **Giao diện liên quan**         |  |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      |  |
        | **Pre-conditions (Điều kiện)**  |  |
        | **Post-conditions / Ngoại lệ**  | <br>---<br>**Ngoại lệ / No Data**:  |---
???+ info "5. Nhóm chức năng quản lý đào tạo (high impact lên trainer và trainee)"
    ### 5. Nhóm chức năng quản lý đào tạo {#toc-4-5}
    #### 5.1. Quản lý quy trình đào tạo {#toc-4-5-1}
    ??? book "Quản lý quy trình đào tạo"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Người phụ trách có toàn quyền quản lý các quy trình đào tạo theo từng vị trí tuyển dụng: <br>- Tạo mới, chỉnh sửa, xóa quy trình. <br>- Vô hiệu hóa/kích hoạt quy trình. <br>- Quản lý chi tiết các tiêu chuẩn trong quy trình, bao gồm: thêm, sửa, xóa, chọn loại action (Hướng dẫn, Kiểm tra, Đánh giá, Nhiệm vụ, Tiến độ). |
        | **Giao diện liên quan**         | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Đào tạo" → tab "Quy trình" |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người phụ trách đăng nhập, chọn vị trí. <br>2. Truy cập tab Quy trình. <br>3. Hệ thống hiển thị danh sách quy trình hiện có. Trường hợp chưa có quy trình được ghi nhận thì phải hiển thị biểu tượng thùng rỗng ở *Danh sách quy trình*.<br>4. Người phụ trách thực hiện thao tác: thêm mới, chỉnh sửa, xóa, vô hiệu hóa/kích hoạt quy trình bằng nút toggle_on-off. <br>5. Khi mở một quy trình: có thể xem, quản lý các danh mục bên trong. Mỗi danh mục sẽ bao gồm ít nhất một hoặc nhiều action trong đó. |
        | **Pre-conditions (Điều kiện)**  | - Người phụ trách có quyền quản lý vị trí. <br>- Vị trí tồn tại trong hệ thống. |
        | **Post-conditions / Ngoại lệ**  | - Danh sách quy trình đào tạo hiển thị chi tiết. <br>- Người phụ trách có toàn quyền thao tác. <br>- Thông báo “Cập nhật dữ liệu thành công!” sau khi thao tác thêm / sửa hợp lệ.<br>---<br>**Ngoại lệ / No Data**: **Trường hợp chưa có quy trình**: hiển thị danh sách rỗng và nút **Thêm quy trình mới**. <br> **Trường hợp quy trình chưa được thiết lập danh mục nào**: chỉ hiển thị tên quy trình và nút Nhập tiêu chuẩn mới. |    #### 5.2. Quản lý đầu ra đào tạo {#toc-4-5-2}
    ??? book "Quản lý đầu ra đào tạo"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | người phụ trách quản lý toàn bộ các tiêu chí đầu ra của quá trình training cho vị trí tuyển dụng được chọn. Các tiêu chí đầu ra sẽ được sắp xếp vào các danh mục, Hệ thống sẽ hiển thị toàn bộ các danh mục đánh giá đã từng được thiết lập cho vị trí này.<br>**Nội dung của tài liệu là các action Đánh Giá.**<br><br>Tổng quan của cấu trúc tiêu chí đầu ra như sau:<br>&emsp;[---Danh mục chứa các tiêu chí đầu ra<br>&emsp;[------ Danh mục nội dung trong các danh mục (**các action Đánh Giá**) |
        | **Giao diện liên quan**         | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Đào tạo" → tab "Đầu ra" |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | Theo luồng thao tác người dùng. |
        | **Pre-conditions (Điều kiện)**  | Phiên đăng nhập hợp lệ. |
        | **Post-conditions / Ngoại lệ**  | Cập nhật thành công vào Database. |        | Luồng thao tác chính | 1. Người phụ trách đăng nhập, chọn vị trí.<br>2. Người phụ trách chọn vào tab "Đầu ra".<br>3. Hệ thống hiển thị nội dung của tab "Đầu ra" là các danh mục chứa các [action_type : evaluate (`action Đánh Giá`)] đã được thiết lập sẵn, nếu không có danh mục nào thì hệ thống sẽ hiển thị biểu tượng thùng rỗng và mô tả "Chưa có nội dung đầu ra!".<br>Để tạo mới một danh mục, người phụ trách cần nhập tên của danh mục vào ô **"Nhập Danh Mục Mới"** và nhấn phím [ENTER].<br>Hệ thống sẽ cập nhật và hiển thị ngay danh mục đó trên màn hình mà không cần phải reload.<br>Để thêm mới một nội dung bên trong danh mục, người phụ trách cần nhập tên của nội dung mới vào ô **"Nhập nội dung mới"** và nhấn [ENTER], hệ thống sẽ tự động cập nhật và hiển thị và không cần phải reload.<br>Người phụ trách có thể xóa danh mục / nội dung danh mục, có thể sắp xếp lại danh mục / nội dung danh mục tùy theo mong muốn. |
        | **Điều kiện** | - Người phụ trách có quyền quản lý vị trí.<br>- Người phụ trách chọn một vị trí tuyển dụng đã tồn tại trên **"Danh sách vị trí tuyển dụng"** |
        | **Kết quả hiển thị** | - Sau khi thêm một danh mục / nội dung mới, người phụ trách sẽ thấy ngay trên màn hình mà không cần refresh lại trình duyệt.<br>- Khi xóa một danh mục  / nội dung thì phải hiện thị popup cảnh báo để người phụ trách xác nhận thao tác xóa. |
        | **Trường hợp không có dữ liệu** | **Trường hợp vị trí chưa có nội dung ở tab **Đầu ra**: hệ thống sẽ hiển thị biểu tượng thùng rỗng và dòng mô tả "Chưa có dữ liệu!".<br>**Trường hợp xóa tên của danh mục / nội dung trong danh mục**: hệ thống không cho phép để trống phần tên của danh mục / nội dung trong danh mục, khi xóa thì người phụ trách cần thêm lại một tên mới để lưu và nhấn [ENTER] |
    #### 5.3. Quản lý tài liệu đào tạo  {#toc-4-5-3}
    ??? book "Quản lý tài liệu đào tạo"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | người phụ trách quản lý toàn bộ các bộ tài liệu của quá trình training cho vị trí tuyển dụng được chọn. Hệ thống sẽ hiển thị toàn bộ các bộ tài liệu đã từng được thiết lập cho vị trí này ở **"Danh sách tài liệu"** nằm bên phải của màn hình.<br>Người phụ trách được phép kích hoạt hoặc vô hiệu tài liệu, đồng nghĩa với việc **người được đào tạo** và **người đào tạo** sẽ không xem được bộ tài liệu bị vô hiệu bởi **người phụ trách**.<br>Bên trong tài liệu bao gồm một hoặc nhiều danh mục, trong mỗi danh mục sẽ chứa nội dung.<br>**Nội dung của tài liệu là các [action_type : instruction (`action Hướng Dẫn`), trong các action Hướng Dẫn này, người phụ trách sẽ được phép thêm mô tả và nội dung chi tiết (Văn bản (cho phép thêm định dạng văn bản), file đính kèm, URL)]**.<br><br>Tổng quan của cấu trúc tài liệu như sau:<br>&emsp;[---Bộ tài liệu (hiển thị trên **Danh sách tài liệu**)<br>&emsp;[------ Danh mục nội dung trong các bộ tài liệu<br>&emsp;[------------- Các action Hướng Dẫn trong các danh mục nội dung tài liệu<br>&emsp;[------------------ Các nội dung chi tiết của action Hướng Dẫn |
        | **Giao diện liên quan**         | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Đào tạo" → tab "Tài liệu" |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người phụ trách đăng nhập, chọn vị trí.<br>2. Người phụ trách chọn vào tab "Tài liệu".<br>3. Hệ thống hiển thị nội dung của tab "Tài liệu" là các danh mục chứa các [action_type : instruction (`action Hướng Dẫn`)] đã được thiết lập sẵn, nếu không có danh mục nào thì hệ thống sẽ hiển thị biểu tượng thùng rỗng và mô tả "Chưa có tài liệu!".<br>4. Các danh mục tài liệu sẽ nằm trong các bộ tài liệu, hệ thống sẽ hiển thị danh sách các bộ tài liệu đã được tạo ở **"Danh sách tài liệu"** ở phần bên phải của màn hình.<br><br>**Khi người phụ trách muốn thêm một tài liệu / danh mục / nội dung mới:**<br>1. Người phụ trách đang ở màn hình xem tài liệu của vị trí tuyển dụng đã chọn.<br>2. Tại các vị trí:<br>&emsp;- **Danh sách tài liệu**: người phụ trách cần nhập tên của bộ tài liệu mới ==> nhấn [ENTER] để hệ thống thực hiện lưu dữ liệu<br>&emsp;- **Màn hình chính chứa các danh mục nội dung của bộ tài liệu**: người phụ trách cuộn xuống cuối màn hình để thấy ô "Nhập danh mục mới" ==> nhập tên danh mục ==> nhấn [ENTER]<br>&emsp;- **Nội dung của các danh mục**: người phụ trách cần mở rộng danh mục muốn thêm nội dung ==> nhập tiêu đề cho action Hướng Dẫn.<br>&emsp;- **Chi tiết action Hướng Dẫn**: người phụ trách sau khi tạo một action Hướng Dẫn trong danh mục nội dung sẽ thấy action Hướng Dẫn có một ô *"Nhập thêm nội dung"*, ô này cho phép người phụ trách thêm vào nội dung chi tiết, chèn thêm file và URL, ngoài ra khi nhập liệu văn bản thì người phụ trách có thể tùy chỉnh định dạng của văn bản.<br><br>**Khi người phụ trách muốn chỉnh sửa một tài liệu / danh mục / nội dung mới:** Tương tự với toàn bộ quá trình thêm mới tài liệu / danh mục / nội dung, khi chỉnh sửa ở tiêu đề của tài liệu, tiêu đề danh mục hoặc nội dung chi tiết bên trong, người phụ trách bắt buộc phải thay thế bằng một nội dung hợp lệ (tức không được phép bỏ trống), sau đó người phụ trách cần nhấn [ENTER] để hệ thống thực hiện lưu lại dữ liệu mới.<br><br>**Khi người phụ trách muốn xóa một tài liệu / danh mục / nội dung mới:** khi người phụ trách xóa một bộ tài liệu / danh mục ==> hệ thống hiển thị popup cảnh báo *"Không thể khôi phục dữ liệu!"* ==> người phụ trách cần xác nhận thao tác xóa bằng việc nhấn nút "Xác nhận" để tiến hành xóa. Đối với nội dung chi tiết hoặc action Hướng Dẫn, khi xóa thì không có popup xác nhận. |
        | **Pre-conditions (Điều kiện)**  | - Người phụ trách có quyền quản lý vị trí.<br>- Người phụ trách chọn một vị trí tuyển dụng đã tồn tại trên **"Danh sách vị trí tuyển dụng"** |
        | **Post-conditions / Ngoại lệ**  | - Sau khi thêm một danh mục / nội dung mới, người phụ trách sẽ thấy ngay trên màn hình mà không cần refresh lại trình duyệt.<br>- Khi xóa một bộ tài liệu / danh mục thì phải hiện thị popup cảnh báo để người phụ trách xác nhận thao tác xóa.<br>---<br>**Ngoại lệ / No Data**: **Trường hợp vị trí chưa có nội dung ở tab **Tài liệu****: hệ thống sẽ hiển thị biểu tượng thùng rỗng và dòng mô tả "Chưa có dữ liệu!" ở **"Danh sách tài liệu"**. |---
???+ info "6. Nhóm chức năng quản lý sau đào tạo (high impact giữa trainee và handler)"
    ### 6. Nhóm chức năng quản lý sau đào tạo {#toc-4-6}
    #### 6.1. Quản lý quá trình thử việc sau khi hoàn thành đào tạo {#toc-4-6-1}
    ??? book "Quản lý quá trình thử việc sau khi hoàn thành đào tạo"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | người phụ trách thiết lập các tiêu chí dành cho quá trình sau đào tạo (review ứng viên), các tiêu chí này sẽ được dùng ở phần chi tiết ứng viên.<br>Cấu trúc của danh mục tiêu chí thử việc:<br>&emsp;[--- Danh mục tiêu chí thử việc <br>&emsp;[------ Nội dung của danh mục tiêu chí thử việc |
        | **Giao diện liên quan**         | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Sau đào tạo" → tab "Thử việc" |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1.Người phụ trách đăng nhập, chọn vị trí.<br>2. Người phụ trách chọn vào tab "Thử việc" trong submenu **Sau đào tạo**.<br>3. Hệ thống hiển thị giao diện của tab "Thử việc".<br><br>**Để thêm mới danh mục thử việc:**<br>1. Người phụ trách nhập tên của danh mục vào ô *"Nhập danh mục mới"*<br>2. Người phụ trách nhấn [ENTER] để hệ thống thực hiện lưu trữ dữ liệu<br>3. Hệ thống focus vào danh mục mới tạo (nếu như người phụ trách chưa chọn danh mục nào để xem trước đó) và tự động mở rộng danh mục, lúc này danh mục sẽ có số [0] để biểu thị danh mục không có nội dung bên trong.<br>4. Người phụ trách sẽ thấy được ô **[+] Thêm nội dung** để có thể thêm mới nội dung vào danh mục thử việc vừa tạo<br><br>**Xóa nội dung / danh mục thử việc**:<br>1. Để xóa nội dung của một danh mục thử việc, người phụ trách mở rộng danh mục ==> chọn vào biểu tượng `🗑️` ở tại mỗi item để xóa (Không có popup xác nhận).<br>2. Để xóa một danh mục thử việc, người phụ trách chọn vào biểu tượng `🗑️` ở tại mỗi danh mục để xóa, hệ thống sẽ hiển thị popup cảnh báo ==> người phụ trách cần nhấn nút *Xác nhận* trên popup để xóa. |
        | **Pre-conditions (Điều kiện)**  | - Người phụ trách có quyền quản lý vị trí.<br>- Người phụ trách chọn một vị trí tuyển dụng đã tồn tại trên **"Danh sách vị trí tuyển dụng"** |
        | **Post-conditions / Ngoại lệ**  | - Sau khi thêm một danh mục / nội dung mới, người phụ trách sẽ thấy ngay trên màn hình mà không cần refresh lại trình duyệt.<br>---<br>**Ngoại lệ / No Data**: **Trường hợp không có danh mục nào**: Hệ thống hiển thị màn hình có biểu tượng thùng rỗng và mô tả "Không có dữ liệu!". |    #### 6.2. Quản lý các tiêu chí đánh giá sau đào tạo {#toc-4-6-2}
    ??? book "Quản lý các tiêu chí đánh giá sau đào tạo"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người phụ trách |
        | **Mục đích**                    | Chức năng cho phép người phụ trách thiết lập các tiêu chí đánh giá ứng viên sau đào tạo.<br>Cấu trúc của danh mục đánh giá:<br>&emsp;[--- Danh mục đánh giá ứng viên <br>&emsp;[------ Nội dung trong danh mục đánh giá ứng viên |
        | **Giao diện liên quan**         | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Sau đào tạo" → tab "Đánh giá" |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1.Người phụ trách đăng nhập, chọn vị trí.<br>2. Người phụ trách chọn vào tab "Đánh giá" trong submenu **Sau đào tạo**.<br>3. Hệ thống hiển thị giao diện của tab "Đánh giá" với tiêu đề **CÁC TIÊU CHÍ ĐÁNH GIÁ**.<br><br>**Để thêm mới danh mục đánh giá:**<br>1. Người phụ trách nhập tên của danh mục vào ô *"Nhập danh mục mới"*<br>2. Người phụ trách nhấn [ENTER] để hệ thống thực hiện lưu trữ dữ liệu<br>3. Hệ thống focus vào danh mục mới tạo (nếu như người phụ trách chưa chọn danh mục nào để xem trước đó) và tự động mở rộng danh mục, lúc này danh mục sẽ có thêm phần 5 ngôi sao với màu mặc định của hệ thống đang dùng.<br>4. Người phụ trách sẽ thấy được ô **[+] Thêm nội dung** để có thể thêm mới nội dung vào danh mục đánh giá vừa tạo<br><br>**Xóa nội dung / danh mục đánh giá**:<br>1. Để xóa nội dung của một danh mục đánh giá, người phụ trách mở rộng danh mục ==> chọn vào biểu tượng `🗑️` ở tại mỗi item để xóa (Không có popup xác nhận).<br>2. Để xóa một danh mục đánh giá, người phụ trách chọn vào biểu tượng `🗑️` ở tại mỗi danh mục để xóa, hệ thống sẽ hiển thị popup cảnh báo ==> người phụ trách cần nhấn nút *Xác nhận* trên popup để xóa. |
        | **Pre-conditions (Điều kiện)**  | - Người phụ trách có quyền quản lý vị trí.<br>- Người phụ trách chọn một vị trí tuyển dụng đã tồn tại trên **"Danh sách vị trí tuyển dụng"** |
        | **Post-conditions / Ngoại lệ**  | - Sau khi thêm một danh mục / nội dung mới, người phụ trách sẽ thấy ngay trên màn hình mà không cần refresh lại trình duyệt.<br>---<br>**Ngoại lệ / No Data**: **Trường hợp không có danh mục nào**: Hệ thống hiển thị màn hình có biểu tượng thùng rỗng và mô tả "Không có dữ liệu!". |---
???+ info "7. "
    ### 7.  {#toc-4-7}
    #### 7.1.  {#toc-4-7-1}
    ??? book ""
        | Trường | Nội dung |
        | ------ | -------- |
        | **Phân loại** | 🔴 Mutate / Write |
        | **Tên chức năng** |  |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** |  |
        | **Giao diện liên quan** |  |
        | **Luồng thao tác chính** |  |
        | **Điều kiện** |  |
        | **Kết quả hiển thị** |  |
        | **Trường hợp không có dữ liệu** |  |
    #### 7.2.  {#toc-4-7-2}
    ??? book ""
        | Trường | Nội dung |
        | ------ | -------- |
        | **Phân loại** | 🔴 Mutate / Write |
        | **Tên chức năng** |  |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** |  |
        | **Giao diện liên quan** |  |
        | **Luồng thao tác chính** |  |
        | **Điều kiện** |  |
        | **Kết quả hiển thị** |  |
        | **Trường hợp không có dữ liệu** |  |
    #### 7.3.  {#toc-4-7-3}
    ??? book ""
        | Trường | Nội dung |
        | ------ | -------- |
        | **Phân loại** | 🔴 Mutate / Write |
        | **Tên chức năng** |  |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** |  |
        | **Giao diện liên quan** |  |
        | **Luồng thao tác chính** |  |
        | **Điều kiện** |  |
        | **Kết quả hiển thị** |  |
        | **Trường hợp không có dữ liệu** |  |
---
## V. Đặc tả chức năng dành cho Interviewer
???+ info "1. Nhóm chức năng quản lý lịch phỏng vấn"
    ### 1. Nhóm chức năng quản lý lịch phỏng vấn {#toc-5-1}
    #### 1.1. Xem lịch phỏng vấn các ứng viên {#toc-5-1-1}
    ??? book "Xem lịch phỏng vấn của các ứng viên"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | - Người phụ trách, Người phỏng vấn |
        | **Mục đích**                    | Người phụ trách: <br>Cho phép người phụ trách xem toàn bộ lịch phỏng vấn của các ứng viên mình quản lý. Chức năng này chỉ hỗ trợ xem, không cho phép chỉnh sửa dữ liệu.<br><br>Người phỏng vấn: <br>Người phỏng vấn có thể xem lịch phỏng vấn tại menu "Lịch Phỏng Vấn", và chỉ nhìn thấy những ứng viên mà người phụ trách đã gán cho mình. Người phỏng vấn được phép hủy lịch phỏng vấn của ứng viên đó tại popup "Chi tiết ca phỏng vấn" sau khi chọn vào một buổi phỏng vấn cụ thể. <br><br>Các chế độ hiển thị chung:<br> (1) Xem dạng lịch: dữ liệu hiển thị theo tuần, mỗi ngày chia thành 11 khung giờ (từ 9h đến 20h). Nếu có lịch phỏng vấn, khung giờ tương ứng được highlight kèm số lượng ứng viên.<br> (2) Xem dạng danh sách: dữ liệu hiển thị dưới dạng bảng với các cột Ngày, Giờ bắt đầu, Số lượng ứng viên, Trạng thái. Người dùng có thể chuyển trang để xem toàn bộ danh sách.<br><br>Ở cả hai chế độ, khi nhấn vào một ca phỏng vấn, hệ thống mở popup "Chi tiết ca phỏng vấn" hiển thị:<br> - Thời gian phỏng vấn<br> - Số lượng ứng viên<br> - Thông tin ứng viên: tên, giờ phỏng vấn, vị trí ứng tuyển.<br><br>Người dùng (tùy vai trò) có thể thay đổi chế độ hiển thị và tuần để phù hợp với nhu cầu. |
        | **Giao diện liên quan**         | 1. Trang "Lịch Phỏng Vấn".<br>2. Popup "Chi tiết ca phỏng vấn".<br>3. Chế độ "Xem dạng lịch".<br>4. Chế độ "Xem dạng danh sách". |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người dùng (phụ trách hoặc phỏng vấn) điều hướng đến trang "Lịch Phỏng Vấn" từ menu.<br>2. Hệ thống mặc định hiển thị ở chế độ 'Xem dạng lịch'.<br>3. Người dùng có thể:<br> - Nhấn vào ô được highlight để xem popup chi tiết.<br> - Nhấn vào biểu tượng ≡ để chuyển sang chế độ 'Xem dạng danh sách'.<br>4. Ở chế độ danh sách, hệ thống hiển thị bảng dữ liệu "Lịch phỏng vấn" với đầy đủ thông tin và hỗ trợ phân trang.<br>5. Người phụ trách: chỉ xem dữ liệu, không chỉnh sửa.<br>6. Người phỏng vấn: có thể hủy lịch phỏng vấn với ứng viên được gán tại popup "Chi tiết ca phỏng vấn".<br>7. Người dùng có thể thay đổi tuần để xem trước hoặc kiểm tra lại lịch phỏng vấn. |
        | **Pre-conditions (Điều kiện)**  | - Người phụ trách đăng nhập vào tài khoản có phân quyền tương đương và quản lý ít nhất một ứng viên.<br>- Người phỏng vấn đăng nhập vào tài khoản có phân quyền tương đương và được người phụ trách gán cho ít nhất một ứng viên có lịch phỏng vấn. |
        | **Post-conditions / Ngoại lệ**  | - Ở chế độ lịch: hệ thống hiển thị theo tuần với các khung giờ được highlight.<br>- Ở chế độ danh sách: hệ thống hiển thị bảng dữ liệu với các cột ngày, giờ, số lượng ứng viên, trạng thái.<br>- Khi nhấn vào ca phỏng vấn: popup chi tiết xuất hiện.<br> + Người phụ trách: chỉ xem.<br> + Người phỏng vấn: có thêm chức năng Hủy lịch phỏng vấn đối với ứng viên được gán.<br>---<br>**Ngoại lệ / No Data**: - Ở chế độ lịch: không có ô nào được highlight.<br>- Ở chế độ danh sách: hệ thống hiển thị thông báo "Bảng dữ liệu này đang trống" kèm biểu tượng thùng rỗng. |    #### 1.2. Xem lịch sử phỏng vấn {#toc-5-1-2}
    ??? book "Xem lịch sử phỏng vấn"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phỏng vấn |
        | **Mục đích**                    | Cho phép Người phỏng vấn xem lại toàn bộ danh sách ứng viên đã hoàn thành phỏng vấn với mình. <br>Người phỏng vấn chỉ nhìn thấy những ứng viên mà Người phụ trách đã gán cho.<br><br>Chức năng hiển thị dưới dạng bảng "Danh sách ứng viên đã phỏng vấn" với cấu trúc và giao diện tương tự bảng "Danh sách ứng viên", hỗ trợ:<br> - Tìm kiếm ứng viên theo tên, email, số điện thoại.<br> - Lọc ứng viên theo trạng thái (VD: Đạt, Không đạt, Đang chờ đánh giá).<br><br>Khi Người phỏng vấn bấm chọn một ứng viên, hệ thống hiển thị màn hình "Chi tiết ứng viên", bao gồm các thông tin cơ bản:<br> - Họ tên ứng viên<br> - Vị trí ứng tuyển<br> - Thời gian phỏng vấn<br> - Kết quả phỏng vấn<br> - Các thông tin bổ sung khác mà Người phụ trách đã công khai.<br><br>Toàn bộ dữ liệu chỉ ở chế độ xem, Người phỏng vấn không thể chỉnh sửa. |
        | **Giao diện liên quan**         | 1. Trang "Danh sách ứng viên đã phỏng vấn".<br>2. Bảng "Danh sách ứng viên đã phỏng vấn".<br>3. Trang "Chi tiết ứng viên". |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người phỏng vấn điều hướng đến menu "Lịch sử phỏng vấn".<br>2. Hệ thống hiển thị bảng "Danh sách ứng viên đã phỏng vấn" mặc định với dữ liệu ứng viên đã phỏng vấn.<br>3. Người phỏng vấn có thể:<br> - Sử dụng thanh tìm kiếm để tìm ứng viên.<br> - Dùng bộ lọc để lọc theo trạng thái.<br> - Nhấn vào một ứng viên trong bảng để mở trang "Chi tiết ứng viên".<br>4. Tại trang "Chi tiết ứng viên", hệ thống hiển thị đầy đủ thông tin cơ bản về ứng viên như: Họ và tên, vị trí ứng tuyển, thời gian phỏng vấn gần nhất (chỉ xem). |
        | **Pre-conditions (Điều kiện)**  | - Người phỏng vấn đăng nhập bằng tài khoản hợp lệ.<br>- Có ít nhất một ứng viên được gán cho Người phỏng vấn và có buổi phỏng vấn được lên lịch. |
        | **Post-conditions / Ngoại lệ**  | - Bảng "Danh sách ứng viên đã phỏng vấn" hiển thị dữ liệu ứng viên theo phân quyền.<br>- Khi chọn một ứng viên, trang "Chi tiết ứng viên" xuất hiện với thông tin chỉ đọc.<br>---<br>**Ngoại lệ / No Data**: - Nếu chưa có ứng viên nào đã phỏng vấn, hệ thống hiển thị thông báo "Bảng dữ liệu này trống." kèm biểu tượng thùng rỗng. |---   
???+ info "2. Xem thông tin về ứng viên"
    ### 2. Xem thông tin về ứng viên {#toc-5-2}
    #### 2.1. Xem thông tin cá nhân ứng viên {#toc-5-2-1}
    ??? book "Xem chi tiết thông tin ứng viên (Người phỏng vấn)"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phỏng vấn |
        | **Mục đích**                    | Người phỏng vấn có thể xem thông tin chi tiết của ứng viên được phân công phỏng vấn để chuẩn bị trước buổi phỏng vấn. <br><br>- Tại tab “Thông tin ứng viên”: hiển thị các thông tin cần thiết như Tên ứng viên, Vị trí ứng tuyển, Trạng thái ứng tuyển, Người phụ trách, Người đào tạo, CV, bằng cấp và lịch làm việc dự kiến. <br>- Người phỏng vấn chỉ có quyền xem, không thể chỉnh sửa hay xóa dữ liệu. |
        | **Giao diện liên quan**         | - Menu Ứng viên hoặc Lịch phỏng vấn → chọn ứng viên.<br>- Màn hình Chi tiết ứng viên → tab Thông tin ứng viên |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người phỏng vấn đăng nhập hệ thống.<br>2. Vào menu Ứng viên hoặc Lịch phỏng vấn, chọn ứng viên.<br>3. Xem thông tin tại tab Thông tin ứng viên. |
        | **Pre-conditions (Điều kiện)**  | - Người phỏng vấn được gán phỏng vấn ứng viên.<br>- Ứng viên tồn tại trong hệ thống. |
        | **Post-conditions / Ngoại lệ**  | Hiển thị chi tiết hồ sơ ứng viên với đầy đủ thông tin phục vụ phỏng vấn.<br>---<br>**Ngoại lệ / No Data**: Thông tin nào chưa có sẽ hiển thị trống. |    #### 2.2. Xem kết quả bài kiểm tra của ứng viên {#toc-5-2-2}
    ??? book "Xem lại kết quả kiểm tra ứng viên"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phỏng vấn |
        | **Mục đích**                    | Chức năng cho phép người phụ trách xem lại kết quả các bài kiểm tra đầu vào mà ứng viên đã thực hiện. <br><br>Người phụ trách có thể truy cập từ thẻ **Thông tin ứng viên** trong màn hình **Chi tiết ứng viên**, nhấn nút **Kiểm tra đầu vào** để mở popup **Bài kiểm tra ứng viên**. Tại popup này, người phụ trách có thể tìm kiếm, chọn bài kiểm tra, và xem chi tiết kết quả của bài kiểm tra đã chọn. |
        | **Giao diện liên quan**         | - Menu **Ứng viên** → bảng **Danh sách ứng viên** <br>- Màn hình **Chi tiết ứng viên** → thẻ **Thông tin ứng viên** <br>- Popup **Bài kiểm tra ứng viên** (hiển thị danh sách các bài kiểm tra đã thực hiện) <br>- Màn hình/Popup hiển thị chi tiết kết quả kiểm tra |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người phụ trách đăng nhập và chọn menu **Ứng viên**. <br>2. Trên bảng **Danh sách ứng viên**, chọn một ứng viên cụ thể. <br>3. Hệ thống mở màn hình **Chi tiết ứng viên**. <br>4. Người phụ trách chọn thẻ **Thông tin ứng viên**. <br>5. Tại đây, nhấn nút **Kiểm tra đầu vào**. <br>6. Hệ thống mở popup **Bài kiểm tra ứng viên** hiển thị danh sách các bài kiểm tra đã thực hiện. <br>7. Người phụ trách có thể sử dụng thanh tìm kiếm trong popup để tìm bài kiểm tra theo tên hoặc ngày thực hiện. <br>8. Chọn một bài kiểm tra từ danh sách. <br>9. Hệ thống hiển thị chi tiết kết quả của bài kiểm tra (bao gồm: điểm số, thời gian làm bài, ngày thi, chi tiết các câu trả lời nếu có). |
        | **Pre-conditions (Điều kiện)**  | - Người phụ trách đã đăng nhập và có quyền xem thông tin ứng viên. <br>- Ứng viên đã tồn tại trong hệ thống. <br>- Ứng viên có dữ liệu về kết quả kiểm tra. |
        | **Post-conditions / Ngoại lệ**  | - Popup **Bài kiểm tra ứng viên** hiển thị danh sách các bài kiểm tra đã thực hiện. <br>- Khi chọn một bài kiểm tra, hệ thống hiển thị đầy đủ thông tin chi tiết về kết quả: <br>&emsp;+ Tên bài kiểm tra <br>&emsp;+ Điểm số đạt được <br>&emsp;+ Thời gian làm bài <br>&emsp;+ Ngày thi <br>&emsp;+ Nội dung câu hỏi & câu trả lời.<br>---<br>**Ngoại lệ / No Data**: - Nếu ứng viên chưa thực hiện bài kiểm tra nào: popup hiển thị thông báo *“Không có bài kiểm tra”*. <br>- Nếu tìm kiếm không ra kết quả: hiển thị thông báo *“Không có bài kiểm tra”*. |    #### 2.3. Xem câu trả lời của ứng viên {#toc-5-2-3}
    ??? book "Xem câu trả lời của ứng viên"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phỏng vấn |
        | **Mục đích**                    | Chức năng cho phép người phụ trách xem lại toàn bộ nội dung phản hồi của ứng viên và đánh giá từ người phỏng vấn sau khi ứng viên hoàn thành buổi phỏng vấn. <br><br>Phản hồi được trình bày theo 2 khía cạnh: (1) nội dung phỏng vấn theo bộ câu hỏi, và (2) đánh giá tổng quan theo tiêu chí, nhằm giúp người phụ trách có cái nhìn đầy đủ và khách quan hơn về năng lực ứng viên. |
        | **Giao diện liên quan**         | - Menu **Ứng viên** → bảng **Danh sách ứng viên** <br>- Màn hình **Chi tiết ứng viên** → thẻ **Phỏng vấn** <br>- Nút **Xem chi tiết** trên danh sách buổi phỏng vấn <br>- Màn hình **Phỏng vấn ứng viên** (gồm 2 tab: **Câu hỏi phỏng vấn**, **Đánh giá**) |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người phụ trách đăng nhập và chọn menu **Ứng viên**. <br>2. Trên bảng **Danh sách ứng viên**, chọn một ứng viên cụ thể. <br>3. Hệ thống mở màn hình **Chi tiết ứng viên**. <br>4. Người phụ trách chọn thẻ **Phỏng vấn** để xem danh sách các buổi phỏng vấn của ứng viên. <br>5. Tại buổi phỏng vấn đã hoàn thành, nhấn nút **Xem chi tiết**. <br>6. Hệ thống điều hướng sang màn hình **Phỏng vấn ứng viên**. <br>7. Tại đây, có 2 tab: <br>&emsp;+ **Câu hỏi phỏng vấn**: hiển thị bộ câu hỏi đã sử dụng trong buổi phỏng vấn và đánh giá của người phỏng vấn cho từng câu hỏi (Không tốt / Trung bình / Khá / Tốt). <br>&emsp;+ **Đánh giá**: hiển thị các nhóm tiêu chí đánh giá. Người phụ trách có thể xem % đạt tiêu chuẩn tổng quan, mở rộng từng nhóm tiêu chí để xem chi tiết tiêu chí con cùng với đánh giá của người phỏng vấn (Xuất sắc / Tốt / Khá tốt / Trung bình / Không tốt). |
        | **Pre-conditions (Điều kiện)**  | - Người phụ trách đã đăng nhập và có quyền truy cập thông tin ứng viên. <br>- Ứng viên đã tham gia ít nhất một buổi phỏng vấn. <br>- Buổi phỏng vấn được chọn đã hoàn thành và có dữ liệu đánh giá từ người phỏng vấn. |
        | **Post-conditions / Ngoại lệ**  | - Danh sách buổi phỏng vấn trong thẻ **Phỏng vấn** của màn hình **Chi tiết ứng viên**. <br>- Màn hình **Phỏng vấn ứng viên** hiển thị chi tiết phản hồi theo 2 tab: <br>&emsp;- **Câu hỏi phỏng vấn**: danh sách câu hỏi & mức đánh giá cho từng câu hỏi. <br>&emsp;- **Đánh giá**: kết quả tổng quan % đạt tiêu chuẩn, danh sách nhóm tiêu chí, khả năng mở rộng để xem tiêu chí con và chi tiết đánh giá.<br>---<br>**Ngoại lệ / No Data**: - Nếu ứng viên chưa có buổi phỏng vấn nào: không có buổi phỏng vấn nào trong thẻ **Phỏng vấn** có nút "Xem chi tiết". <br>- Nếu không có đánh giá nào được nhập: màn hình **Phỏng vấn ứng viên** và **Đánh giá** sẽ không có mục/ tiêu chí nào được đánh dấu, thanh tính % ở màn hình **Đánh giá** sẽ hiển thị 0%. |    #### 2.4. Xem lại buổi phỏng vấn ứng viên {#toc-5-2-4}
    ??? book "Xem lại buổi phỏng vấn của ứng viên (Người phỏng vấn)"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người phỏng vấn |
        | **Mục đích**                    | Người phỏng vấn có thể xem lại các buổi phỏng vấn mà mình được phân công, bao gồm câu hỏi, kết quả bài kiểm tra, câu trả lời ứng viên, và có thể gán trạng thái cho các tiêu chí phỏng vấn. |
        | **Giao diện liên quan**         | - Trang **Chi tiết ứng viên** (truy cập từ **Danh sách ứng viên đã phỏng vấn**) → nút **“Xem chi tiết”** tại các buổi phỏng vấn trước đó. |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người phỏng vấn đăng nhập và truy cập **Chi tiết ứng viên** từ **Lịch phỏng vấn** hoặc **Danh sách ứng viên đã phỏng vấn**.<br>2. Chọn buổi phỏng vấn đã hoàn thành → nhấn **“Xem chi tiết”**.<br>3. Hệ thống mở trang **Phỏng vấn ứng viên** với 2 thẻ:<br> a. **Câu hỏi phỏng vấn**: xem lại toàn bộ câu hỏi, kết quả làm bài kiểm tra, câu trả lời ứng viên.<br> b. **Đánh giá**: xem và gán trạng thái cho các tiêu chí phỏng vấn được thiết lập sẵn. |
        | **Pre-conditions (Điều kiện)**  | - Người phỏng vấn đã đăng nhập.<br>- Người phỏng vấn chỉ có thể xem lại buổi phỏng vấn của các ứng viên được gán cho mình.<br>- Ứng viên có ít nhất một buổi phỏng vấn hoàn thành. |
        | **Post-conditions / Ngoại lệ**  | - Người phỏng vấn có thể xem lại chi tiết buổi phỏng vấn (câu hỏi, câu trả lời, kết quả kiểm tra).<br>- Người phỏng vấn có thể gán trạng thái cho từng tiêu chí đánh giá.<br>---<br>**Ngoại lệ / No Data**: - Nếu ứng viên chưa có buổi phỏng vấn hoàn thành → không có nút **“Xem chi tiết”**.<br>- Nếu người phỏng vấn không được gán cho ứng viên → không thấy dữ liệu phỏng vấn của ứng viên đó. |---
## VI. Đặc tả chức năng dành cho Trainer
???+ info "1. Xem thông tin về ứng viên"
    ### 1. Xem thông tin về ứng viên {#toc-6-1}
    #### 1.1. Xem thông tin cá nhân ứng viên {#toc-6-1-1}
    ??? book "Xem thông tin cá nhân ứng viên"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người đào tạo |
        | **Mục đích**                    | Người đào tạo có thể xem thông tin chi tiết của ứng viên đã được phân công đào tạo. <br><br>- Tại tab “Thông tin ứng viên”: hiển thị các thông tin cơ bản như Tên ứng viên, Vị trí ứng tuyển, Trạng thái ứng tuyển, Trạng thái đào tạo, Người phụ trách, CV, bằng cấp, lịch làm việc dự kiến. <br>- Người đào tạo chỉ có quyền xem, không được chỉnh sửa hoặc quản lý tài khoản ứng viên. |
        | **Giao diện liên quan**         | - Menu Danh sách đào tạo → chọn ứng viên.<br>- Màn hình Chi tiết ứng viên → tab Thông tin ứng viên |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người đào tạo đăng nhập hệ thống.<br>2. Vào menu Danh sách đào tạo, chọn ứng viên.<br>3. Xem thông tin tại tab Thông tin ứng viên. |
        | **Pre-conditions (Điều kiện)**  | - Người đào tạo được gán đào tạo ứng viên.<br>- Ứng viên tồn tại trong hệ thống. |
        | **Post-conditions / Ngoại lệ**  | Hiển thị chi tiết hồ sơ ứng viên phục vụ đào tạo.<br>---<br>**Ngoại lệ / No Data**: Các trường thông tin chưa bổ sung sẽ để trống. |    #### 1.2. Xem tất cả các ứng viên được gán {#toc-6-1-2}
    ??? book "Xem ứng viên được gán trách nhiệm"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người đào tạo |
        | **Mục đích**                    | Khi được gán vào một ứng viên, người đào tạo tự động thấy ứng viên đó trong menu Danh Sách Đào Tạo. Người đào tạo chỉ có quyền xem thông tin cơ bản của ứng viên, không thể chỉnh sửa dữ liệu như họ tên, email, trạng thái hồ sơ. Người đào tạo chỉ có thể thao tác trong phạm vi đào tạo (ví dụ: cập nhật tiến trình đào tạo nếu hệ thống hỗ trợ). |
        | **Giao diện liên quan**         | - Menu Danh Sách Đào Tạo → bảng ứng viên đào tạo <br>- Màn hình Chi tiết ứng viên (chỉ đọc) |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người đào tạo đăng nhập hệ thống.<br>2. Vào menu Danh Sách Đào Tạo.<br>3. Xem danh sách các ứng viên được gán.<br>4. Chọn một ứng viên để xem hồ sơ (chỉ đọc). |
        | **Pre-conditions (Điều kiện)**  | - Người đào tạo đã được người phụ trách gán vào ứng viên.<br>- Người đào tạo đăng nhập có quyền xem menu Danh Sách Đào Tạo. |
        | **Post-conditions / Ngoại lệ**  | - Menu Danh Sách Đào Tạo hiển thị ứng viên được gán.<br>- Người đào tạo có thể xem thông tin ứng viên nhưng không thể chỉnh sửa dữ liệu cơ bản.<br>---<br>**Ngoại lệ / No Data**: - Nếu người đào tạo chưa được gán ứng viên nào: bảng Danh Sách Đào Tạo hiển thị thông báo “Bảng này hiện đang trống!”. |---
???+ info "2. Cụm chức năng quản lý đào tạo"
    ### 2. Cụm chức năng quản lý đào tạo {#toc-6-2}
    #### 2.1. Quản lý và đánh giá quy trình đào tạo {#toc-6-2-1}
    ??? book "Quản lý và đánh giá quy trình đào tạo"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người đào tạo |
        | **Mục đích**                    | Người đào tạo theo dõi và quản lý tiến trình đào tạo của ứng viên đã được gán: <br>- Xem quy trình và danh sách buổi đào tạo. <br>- Quyết định buổi nào hiển thị hoặc ẩn với người được đào tạo. <br>- Xem chi tiết tiêu chuẩn, mở rộng danh mục và tiêu chí con. <br>- Upload file bổ sung. <br>- Đánh giá từng tiêu chuẩn đào tạo (ví dụ: đạt/không đạt, nhận xét). |
        | **Giao diện liên quan**         | - Menu Danh sách đào tạo → chọn ứng viên → Sub-menu Lịch trình → Quy trình & buổi đào tạo |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người đào tạo đăng nhập và chọn menu Danh sách đào tạo. <br>2. Chọn một ứng viên trong danh sách. <br>3. Truy cập sub-menu Lịch trình, hệ thống hiển thị quy trình & buổi đào tạo. <br>4. Người đào tạo có thể: <br> - Quyết định buổi nào hiển thị/ẩn. <br> - Xem chi tiết tiêu chuẩn, tiêu chí. <br> - Upload file bổ sung. <br> - Đánh giá từng tiêu chuẩn. |
        | **Pre-conditions (Điều kiện)**  | - Người đào tạo đã được gán cho ứng viên. |
        | **Post-conditions / Ngoại lệ**  | - Danh sách quy trình & buổi đào tạo hiển thị rõ ràng. <br>- Người đào tạo có thể thao tác trong phạm vi cho phép. <br>- Hệ thống hiển thị thông báo thành công sau khi upload/đánh giá.<br>---<br>**Ngoại lệ / No Data**: - Nếu ứng viên chưa được gán quy trình: bảng hiển thị thông báo “Ứng viên chưa được gán chương trình đào tạo”. <br>- Nếu quy trình không có tiêu chuẩn: danh sách rỗng. |    #### 2.2. Đánh giá đầu ra đào tạo {#toc-6-2-2}
    ??? book "Đánh giá đầu ra đào tạo"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🔴 Mutate / Write |
        | **Vai trò (Actor)**             | Người đào tạo |
        | **Mục đích**                    | Người đào tạo xem các tiêu chuẩn đầu ra gắn với vị trí ứng viên đang đào tạo và đánh giá mức độ đạt được theo 4 thang: Không tốt, Trung bình, Khá tốt, Tốt. Kết quả được lưu lại để phục vụ quản lý tiến trình đào tạo. |
        | **Giao diện liên quan**         | - Menu Danh sách đào tạo → chọn ứng viên → Tab Đào tạo → mục Đầu ra |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người đào tạo đăng nhập, vào Danh sách đào tạo. <br>2. Chọn ứng viên cần theo dõi. <br>3. Truy cập tab Đào tạo → mục Đầu ra. <br>4. Xem danh sách tiêu chuẩn đầu ra. <br>5. Đánh giá từng tiêu chuẩn theo thang 4 mức. <br>6. Nhấn Lưu để ghi nhận kết quả. |
        | **Pre-conditions (Điều kiện)**  | - Người đào tạo được gán cho ứng viên. <br>- Ứng viên đã có vị trí với tiêu chuẩn đầu ra. |
        | **Post-conditions / Ngoại lệ**  | - Danh sách tiêu chuẩn đầu ra hiển thị kèm các tùy chọn đánh giá. <br>- Sau khi lưu, kết quả được cập nhật vào hồ sơ đào tạo ứng viên.<br>---<br>**Ngoại lệ / No Data**: - Nếu chưa có tiêu chuẩn: hiển thị thông báo “Chưa có tiêu chuẩn đầu ra cho vị trí này”. |---
## VII. Đặc tả chức năng dành cho Trainee
???+ info "1. Cụm chức năng dành cho Trainee"
    ### 1. Cụm chức năng dành cho Trainee {#toc-7-1}
    #### 1.1. Xem quy trình đào tạo {#toc-7-1-1}
    ??? book "Xem quy trình đào tạo"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người được đào tạo |
        | **Mục đích**                    | Người được đào tạo có thể: <br>- Xem quy trình và các buổi đào tạo mà người đào tạo cho phép hiển thị. <br>- Theo dõi lịch trình đào tạo. <br>- Xem chi tiết tiêu chí. <br>- Tải file tài liệu được người đào tạo cung cấp. |
        | **Giao diện liên quan**         | - Menu Lịch trình → chọn buổi đào tạo → xem nội dung & tài liệu |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người được đào tạo đăng nhập và chọn menu Lịch trình. <br>2. Hệ thống hiển thị danh sách quy trình & buổi đào tạo được mở quyền. <br>3. Người được đào tạo chọn một buổi đào tạo để xem chi tiết. <br>4. Có thể xem tiêu chí chi tiết và tải file tài liệu liên quan. |
        | **Pre-conditions (Điều kiện)**  | - Người được đào tạo có tài khoản hợp lệ và đang trong quá trình đào tạo. |
        | **Post-conditions / Ngoại lệ**  | - Người được đào tạo thấy danh sách buổi đào tạo được mở. <br>- Có thể xem chi tiết tiêu chí và tải tài liệu.<br>---<br>**Ngoại lệ / No Data**: - Nếu chưa được gán quy trình đào tạo: hiển thị thông báo “Ứng viên chưa được gán chương trình đào tạo”. <br>- Nếu chưa có buổi đào tạo nào hiển thị: danh sách rỗng. |    #### 1.2. Xem mục tiêu (đầu ra) đào tạo {#toc-7-1-2}
    ??? book "Xem mục tiêu (đầu ra) đào tạo (Người được đào tạo)"

        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Phân loại**                   | 🟢 Query / Read |
        | **Vai trò (Actor)**             | Người được đào tạo |
        | **Mục đích**                    | Người được đào tạo có thể xem các tiêu chuẩn đầu ra của vị trí, bao gồm: <br>- Danh mục yêu cầu đầu ra hiển thị thành cụm rõ ràng. <br>- Khi mở rộng danh mục, hiển thị các tiêu chí con và mức đánh giá do Người đào tạo nhập. <br>- Chỉ có quyền xem, không thể chỉnh sửa. |
        | **Giao diện liên quan**         | - Menu Mục tiêu đào tạo |
        | **Data Fields & Validation**    | - Dựa trên Form Engine/Business logic hiện tại (ENTER to save). |
        | **Luồng xử lý (Workflow)**      | 1. Người được đào tạo đăng nhập và chọn menu Mục tiêu đào tạo. <br>2. Hệ thống hiển thị danh sách mục tiêu đầu ra. <br>3. Người được đào tạo có thể mở rộng danh mục để xem các tiêu chí con và đánh giá. |
        | **Pre-conditions (Điều kiện)**  | - Người được đào tạo có tài khoản hợp lệ. <br>- Ứng viên đã được gán vào quy trình đào tạo có tiêu chuẩn đầu ra. |
        | **Post-conditions / Ngoại lệ**  | - Danh sách tiêu chuẩn đầu ra hiển thị kèm đánh giá từ người đào tạo.<br>---<br>**Ngoại lệ / No Data**: - Nếu ứng viên chưa được gán chương trình đào tạo: hiển thị thông báo “Ứng viên chưa được gán chương trình đào tạo”. |---
