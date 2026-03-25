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
        | **Tên chức năng**               | Đăng nhập tài khoản |
        | **Vai trò**                     | Người phụ trách, Người đào tạo, Người phỏng vấn, Người được đào tạo |
        | **Mô tả**                       | Chức năng cho phép người dùng có tài khoản hợp lệ đăng nhập vào hệ thống. <br>- Người dùng nhập thông tin tài khoản và chọn trung tâm muốn làm việc. <br>- Hệ thống kiểm tra tính hợp lệ của tài khoản (đúng tên đăng nhập/mật khẩu, và tài khoản không bị vô hiệu hóa). <br>- Nếu tài khoản có nhiều phân quyền, hệ thống mặc định chọn phân quyền **cao nhất** được gán để hiển thị giao diện tương ứng. <br>- Sau khi đăng nhập thành công, người dùng được điều hướng đến màn hình chính phù hợp với phân quyền. |
        | **Giao diện liên quan**         | - Trang **Đăng nhập** <br>- Màn hình chính. |
        | **Luồng thao tác chính**        | 1. Người dùng truy cập trang **Đăng nhập**. <br>2. Nhập tên đăng nhập, mật khẩu và chọn trung tâm. <br>3. Nhấn nút **Đăng nhập**. <br>4. Hệ thống kiểm tra thông tin tài khoản: <br>&emsp;- Nếu hợp lệ → xác định phân quyền cao nhất của tài khoản. <br>&emsp;- Nếu không hợp lệ → hiển thị thông báo lỗi. <br>5. Hệ thống điều hướng người dùng đến màn hình chính theo phân quyền tương ứng. |
        | **Điều kiện**                   | - Người dùng có tài khoản trong hệ thống. <br>- Tài khoản đang không bị vô hiệu hóa. <br>- Tên đăng nhập và mật khẩu nhập chính xác. |
        | **Kết quả hiển thị**            | - Đăng nhập thành công: hệ thống hiển thị giao diện chính ứng với phân quyền cao nhất. <br>- Đăng nhập thất bại: hiển thị thông báo lỗi (ví dụ: *“Sai tài khoản hoặc mật khẩu”*). |
        | **Trường hợp không có dữ liệu** | - Nếu tài khoản không tồn tại: hiển thị thông báo *“Tài khoản không tồn tại trong hệ thống”*. |
    ####  1.2. Cập nhật tài khoản {#toc-3-1-2}
    ??? book "Cập nhật tài khoản"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Tên chức năng**               | Cập nhật tài khoản |
        | **Vai trò**                     | Người phụ trách, Người đào tạo, Người phỏng vấn, Người được đào tạo |
        | **Mô tả**                       | Chức năng cho phép người dùng chỉnh sửa một số thông tin cá nhân của tài khoản sau khi đăng nhập. <br>- Thông tin hiển thị gồm: **Họ và tên, Giới tính, Ngày sinh, Số điện thoại, Gmail, Vai trò**. <br>- Người dùng có thể thay đổi: **Họ và tên, Giới tính, Ngày sinh, Số điện thoại**. <br>- Người dùng không thể thay đổi: **Gmail, Vai trò**. <br>- Sau khi chỉnh sửa, người dùng nhấn nút **“Cập nhật tài khoản”** để lưu lại thông tin. |
        | **Giao diện liên quan**         | - Menu **Trang Cá Nhân** |
        | **Luồng thao tác chính**        | 1. Người dùng đăng nhập hệ thống. <br>2. Chọn menu **Trang Cá Nhân**. <br>3. Hệ thống hiển thị thông tin tài khoản. <br>4. Người dùng chỉnh sửa thông tin (Họ và tên, Giới tính, Ngày sinh, Số điện thoại). <br>5. Nhấn nút **Cập nhật tài khoản**. <br>6. Hệ thống lưu thông tin mới và hiển thị thông báo *“Cập nhật dữ liệu thành công !”*. |
        | **Điều kiện**                   | - Người dùng đã đăng nhập hệ thống. <br>- Tài khoản tồn tại và đang hoạt động. <br>- Các trường thông tin nhập vào hợp lệ (ví dụ: Ngày sinh không phải là ngày tương lai, số điện thoại đúng định dạng). |
        | **Kết quả hiển thị**            | - Thông tin cá nhân được cập nhật thành công và hiển thị lại trên giao diện. <br>- Thông báo *“Cập nhật dữ liệu thành công !”*. |
        | **Trường hợp không có dữ liệu** | - Nếu không có thay đổi gì nhưng vẫn nhấn **Cập nhật tài khoản**, hệ thống vẫn cập nhật lại dữ liệu hiện tại và hiển thị thông báo thành công. |
    ####  1.3. Đổi mật khẩu {#toc-3-1-3}
    ??? book "Đổi mật khẩu"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Tên chức năng**               | Đổi mật khẩu |
        | **Vai trò**                     | Người phụ trách, Người đào tạo, Người phỏng vấn, Người được đào tạo |
        | **Mô tả**                       | Chức năng cho phép người dùng thay đổi mật khẩu tài khoản thông qua 2 cách: <br>1. **Tại màn hình đăng nhập**: nhấn nút *“Quên mật khẩu”* → nhập email đã đăng ký → hệ thống xác minh và gửi link đặt lại mật khẩu về email. <br>2. **Tại menu Trang Cá Nhân**: nhấn nút *“Reset mật khẩu”* → hệ thống tự động lấy email của tài khoản đang đăng nhập và gửi link đặt lại mật khẩu về email. Người dùng cần truy cập link trong email để đặt lại mật khẩu mới. |
        | **Giao diện liên quan**         | - Màn hình **Đăng nhập** (nút *Quên mật khẩu*). <br>- Menu **Trang Cá Nhân** (nút *Reset mật khẩu*). <br>- Màn hình đặt lại mật khẩu từ link trong email. |
        | **Luồng thao tác chính**        | **Trường hợp 1 – Quên mật khẩu (ngoài đăng nhập):** <br>1. Người dùng mở màn hình đăng nhập. <br>2. Nhấn nút **Quên mật khẩu**. <br>3. Nhập email đã đăng ký vào hệ thống. <br>4. Hệ thống xác minh email và gửi link đặt lại mật khẩu. <br>5. Người dùng truy cập link từ email để đặt lại mật khẩu mới. <br><br> **Trường hợp 2 – Reset mật khẩu (trong khi đã đăng nhập):** <br>1. Người dùng đăng nhập và truy cập **Menu Trang Cá Nhân**. <br>2. Nhấn nút **Reset mật khẩu**. <br>3. Hệ thống gửi link đặt lại mật khẩu đến email của tài khoản đang đăng nhập. <br>4. Người dùng truy cập link từ email để đặt lại mật khẩu mới. |
        | **Điều kiện**                   | - Người dùng có tài khoản đã đăng ký trong hệ thống. <br>- Email nhập vào (hoặc email đã gán cho tài khoản đăng nhập) tồn tại trong hệ thống. <br>- Người dùng truy cập hợp lệ vào link reset mật khẩu trong thời hạn cho phép. |
        | **Kết quả hiển thị**            | - Hệ thống gửi email chứa link đặt lại mật khẩu. <br>- Khi người dùng đặt lại mật khẩu thành công: hiển thị thông báo *“Đặt lại mật khẩu thành công!”*. <br>- Người dùng có thể dùng mật khẩu mới để đăng nhập. |
        | **Trường hợp không có dữ liệu** | - Email nhập không tồn tại trong hệ thống: hiển thị thông báo *“Email không tồn tại trong hệ thống”*. <br>- Nếu người dùng chưa đăng nhập và không nhập email: hệ thống yêu cầu nhập email trước khi thực hiện. |
    ####  1.4. Thay đổi vai trò (đối với tài khoản có nhiều vai trò) {#toc-3-1-4}
    ??? book "Thay đổi vai trò"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Tên chức năng**               | Thay đổi vai trò |
        | **Vai trò**                     | Người phụ trách, Người đào tạo, Người phỏng vấn, Người được đào tạo |
        | **Mô tả**                       | Chức năng cho phép người dùng đã được gán nhiều vai trò trong hệ thống lựa chọn thay đổi vai trò để sử dụng giao diện và chức năng phù hợp. Khi thay đổi, hệ thống sẽ tải lại trang web và hiển thị menu, quyền và chức năng ứng với vai trò vừa chọn. |
        | **Giao diện liên quan**         | - Icon **Account** trên thanh điều hướng (góc trên cùng bên phải). <br>- Droplist hiển thị danh sách các vai trò đã được gán cho tài khoản. |
        | **Luồng thao tác chính**        | 1. Người dùng đăng nhập vào hệ thống. <br>2. Nhấn vào icon **Account** (góc trên cùng bên phải). <br>3. Droplist hiển thị danh sách các vai trò đã gán. <br>4. Người dùng chọn một vai trò trong danh sách. <br>5. Hệ thống tải lại trang web và hiển thị giao diện + chức năng theo vai trò đã chọn. |
        | **Điều kiện**                   | - Người dùng đã đăng nhập hợp lệ. <br>- Tài khoản người dùng được gán từ 2 vai trò trở lên. |
        | **Kết quả hiển thị**            | - Giao diện và chức năng thay đổi theo vai trò vừa chọn. <br>- Các menu theo vai trò cụ thể: <br>&emsp;+ **Người phụ trách**: Ứng Viên, Vị Trí, Lịch Phỏng Vấn, Trang Cá Nhân. <br>&emsp;+ **Người đào tạo**: Lịch Đào Tạo Chung, Danh Sách Đào Tạo, Trang Cá Nhân. <br>&emsp;+ **Người phỏng vấn**: Lịch Phỏng Vấn, Lịch Sử Phỏng Vấn, Trang Cá Nhân. <br>&emsp;+ **Người được đào tạo**: Mục Tiêu Đào Tạo, Lịch Trình Đào Tạo, Tài Liệu, Biên Bản Đánh Giá, Trang Cá Nhân. |
        | **Trường hợp không có dữ liệu** | - Nếu tài khoản chỉ có một vai trò, droplist không hiển thị lựa chọn thay đổi vai trò. |
    ####  1.5. Đăng xuất khỏi tài khoản {#toc-3-1-5}
    ??? book "Đăng xuất khỏi tài khoản"
        | Trường                          | Nội dung |
        | ------------------------------- | -------- |
        | **Tên chức năng**               | Đăng xuất khỏi tài khoản |
        | **Vai trò**                     | Người phụ trách, Người đào tạo, Người phỏng vấn, Người được đào tạo |
        | **Mô tả**                       | Chức năng cho phép người dùng thoát khỏi hệ thống một cách an toàn. Khi đăng xuất, hệ thống kết thúc phiên làm việc hiện tại và đưa người dùng trở về màn hình đăng nhập. |
        | **Giao diện liên quan**         | - Icon **Account** trên thanh điều hướng (góc trên cùng bên phải). <br>- Droplist hiển thị khi nhấn vào icon **Account**. |
        | **Luồng thao tác chính**        | 1. Người dùng đăng nhập vào hệ thống. <br>2. Nhấn vào icon **Account** (góc trên cùng bên phải). <br>3. Droplist hiển thị các tùy chọn, chọn **“Đăng Xuất”**. <br>4. Hệ thống kết thúc phiên đăng nhập hiện tại. <br>5. Hệ thống chuyển hướng về màn hình **Đăng nhập**. |
        | **Điều kiện**                   | - Người dùng đã đăng nhập và đang có phiên làm việc hợp lệ. |
        | **Kết quả hiển thị**            | - Phiên đăng nhập của người dùng kết thúc. <br>- Người dùng được chuyển hướng về màn hình **Đăng nhập**. |
        | **Trường hợp không có dữ liệu** | - Không có trường hợp đặc biệt, vì nút **Đăng Xuất** luôn khả dụng khi người dùng đang đăng nhập. |
---
???+ info "2. Mô tả action board"
    ### 2. Mô tả action board {#toc-3-2}
    #### 2.1 Chi tiết về action board {#toc-3-2-1}
    ??? book "Chi tiết về action board"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** |  |
        | **Vai trò** |  |
        | **Mô tả** |  |
        | **Giao diện liên quan** |  |
        | **Luồng thao tác chính** |  |
        | **Điều kiện** |  |
        | **Kết quả hiển thị** |  |
        | **Trường hợp không có dữ liệu** |  |
---
## IV. Đặc tả chức năng dành cho Handler (Người Phụ Trách)
???+ info "1. Nhóm chức năng giữa người phụ trách - ứng viên"
    ### 1. Nhóm chức năng giữa người phụ trách - ứng viên {#toc-4-1}
    #### 1.1. Hiển thị bảng danh sách các ứng viên cho người phụ trách {#toc-4-1-1}
    ??? book "Hiển thị bảng danh sách các ứng viên cho người phụ trách"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Hiển thị bảng danh sách các ứng viên cho người phụ trách |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách xem và lọc danh sách ứng viên tại bảng **"Danh sách ứng viên"**. Tuy nhiên, người phụ trách chỉ có quyền xem thông tin của những ứng viên thuộc các Vị trí tuyển dụng mà Master đã gán quyền quản lý cho người phụ trách đó. Những ứng viên thuộc vị trí không được chỉ định sẽ hoàn toàn không hiển thị trong danh sách của người phụ trách này.<br><br>Bảng dữ liệu được phân trang, cho phép di chuyển giữa các trang. Người phụ trách chỉ có thể xem, không thể chỉnh sửa thông tin ứng viên tại đây. |
        | **Giao diện liên quan** | 1. Trang **Danh sách ứng viên** (truy cập từ menu **"Ứng Viên"**).<br>2. Bảng **Danh sách ứng viên**. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn vào menu **"Ứng Viên"** sau khi đăng nhập vào tài khoản người phụ trách.<br>2. Hệ thống hiển thị bảng **"Danh sách ứng viên"**, danh sách này bao gồm các ứng viên thuộc các vị trí tuyển dụng của người phụ trách, tức **các vị trí tuyển dụng mà người phụ trách được Master thêm cho người phụ trách đó**.<br>3. Người phụ trách xem các thông tin trên **"Danh sách ứng viên"** đang được hiển thị và không có quyền chỉnh sửa nội dung ở trang này. |
        | **Điều kiện** | 1. Người phụ trách đã đăng nhập với quyền hợp lệ.<br>2. Master đã thực hiện gán ít nhất một Vị trí tuyển dụng cho người phụ trách này.<br>3.Hệ thống có ít nhất một ứng viên được ghi nhận cho vị trí mà người phụ trách được thêm.<br>4. Trang **Danh sách ứng viên** đã tải dữ liệu thành công. |
        | **Kết quả hiển thị** | - Bảng **Danh sách ứng viên** với các cột: Họ và Tên, Vị trí phỏng vấn, Loại hợp đồng, Người phụ trách, Ngày phỏng vấn, Giờ phỏng vấn, Trạng thái (icon + mô tả), Đánh giá (icon + mô tả), Ngày gửi CV.<br>- Dữ liệu phân trang, có thể di chuyển giữa các trang.<br>- Người phụ trách bị giới hạn bởi vị trí ứng tuyển mà Master thêm họ vào, không được xem dữ liệu ở những vị trí mà người phụ trách đó không được thêm. |
        | **Trường hợp không có dữ liệu** | - Nếu người phụ trách chưa được Master gán vị trí tuyển dụng nào: Bảng hiển thị thông báo "Bảng dữ liệu trống!" kèm icon thùng rỗng.<br>- Nếu không có ứng viên nào trong hệ thống: Bảng hiển thị thông báo *“Bảng dữ liệu trống!”* kèm icon thùng rỗng.<br>- Nếu không có kết quả tìm kiếm hoặc lọc: Bảng hiển thị thông báo *“Bảng dữ liệu trống!”* kèm icon thùng rỗng.<br>- Nếu ô tìm kiếm trống và không áp dụng bộ lọc: Hiển thị lại toàn bộ danh sách ứng viên ban đầu (nếu có). |

        <span class="swimlane-chart-label">
          <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
          <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-1/swimlane_1_1_danh_sach_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Hiển thị bảng danh sách các ứng viên cho người phụ trách</span>
    #### 1.2. Tùy chọn hiển thị filter trong bảng danh sách ứng viên {#toc-4-1-2}
    ??? book "Tùy chọn hiển thị filter trong bảng danh sách ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Tùy chọn hiển thị filter trong bảng danh sách ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách tùy chỉnh nội dung trên bảng **"Danh sách ứng viên"** để phù hợp với nhu cầu và mục đích xem dữ liệu.<br><br>Người phụ trách có thể tùy chỉnh các filter bằng cách chọn vào nút **"☰ Hiển thị"** ở thanh công cụ bên trên bảng **"Danh sách ứng viên"** và chọn các filter cần dùng từ popup **"HIỂN THỊ FILTER"**, popup này sẽ chứa toàn bộ các filter mà hệ thống có sẵn.  |
        | **Giao diện liên quan** | 1. Trang **Danh sách ứng viên** (truy cập từ menu **"Ứng Viên"**).<br>2. Bảng **Danh sách ứng viên**.<br>3. Popup **"HIỂN THỊ FILTER"** |
        | **Luồng thao tác chính** | 1. Người phụ trách truy cập vào menu **"Ứng Viên"** và đang xem bảng **"Danh sách ứng viên"**.<br>2. Người phụ trách chọn vào nút **"☰ Hiển thị"** ở thanh công cụ.<br>3. Hệ thống hiển thị popup **"HIỂN THỊ FILTER"** cho người phụ trách.<br>4. Người phụ trách chọn ít nhất một filter.<br>&emsp;**- Nếu không chọn filter nào / không chọn thêm filter nào**: hệ thống không cho phép chọn nút "Xác nhận" (không gửi request thừa).<br>&emsp;**- Nếu chọn filter / chọn thêm filter mới**: hệ thống enable nút "Xác nhận".<br>5. Người phụ trách nhấn "Xác nhận", hệ thống đóng popup và cập nhật ngay lập tức các bộ lọc hiển thị trên giao diện. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập thành công.<br>- Hệ thống chỉ hiển thị dữ liệu và các tùy chọn lọc liên quan đến các Vị trí tuyển dụng mà Master đã gán quyền cho người phụ trách này. |
        | **Kết quả hiển thị** | - Thanh bộ lọc (filter bar) hiển thị chính xác và đầy đủ các filter đã được chọn trong popup.<br>- Các filter bị bỏ chọn sẽ hoàn toàn biến mất khỏi thanh công cụ.<br>- Trạng thái hiển thị filter được hệ thống ghi nhớ cho lần đăng nhập sau của người phụ trách đó. |
        | **Trường hợp không có dữ liệu** | Trường hợp hệ thống chưa có định nghĩa bộ lọc: Popup **"HIỂN THỊ FILTER"** hiển thị thông báo "Không có dữ liệu!". |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-2/swimlane_1_2_hien_thi_filter.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Tùy chọn hiển thị filter trong bảng danh sách ứng viên</span>
    #### 1.3. Tùy chọn hiển thị cột trong bảng danh sách ứng viên {#toc-4-1-3}
    ??? book "Tùy chọn hiển thị cột trong bảng danh sách ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Tùy chọn hiển thị cột trong bảng danh sách ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Bảng **Danh sách ứng viên** có tổng cộng 10 cột gồm: Vị trí phỏng vấn, Trạng thái, Phỏng vấn, Đào tạo, Ngày gửi CV, Ngày phỏng vấn, Ngày hết hạn hợp đồng, Ngày sinh, Thời gian training, Thời gian phỏng vấn. Người phụ trách có thể tùy chọn cột nào được hiển thị bằng cách nhấn vào biểu tượng `👁️` ở góc trên bên phải của bảng và chọn các cột mong muốn. Những cột không được chọn sẽ không hiển thị trên màn hình. Cài đặt này được lưu theo từng tài khoản. |
        | **Giao diện liên quan** | 1. Trang **Danh sách ứng viên**.<br>2. Biểu tượng `👁️` ở góc trên bên phải bảng.<br>3. Danh sách 10 cột có thể chọn hiển thị. |
        | **Luồng thao tác chính** | 1. Người phụ trách nhấn vào biểu tượng `👁️`.<br>2. Hệ thống hiển thị danh sách 10 cột.<br>3. Người phụ trách chọn hoặc bỏ chọn các cột muốn hiển thị.<br>4. Hệ thống cập nhật bảng theo các cột đã chọn.<br>5. Hệ thống lưu cấu hình hiển thị theo từng tài khoản. |
        | **Điều kiện** | 1. Người phụ trách đã đăng nhập hợp lệ.<br>2. Trang **Danh sách ứng viên** đã tải được chọn. |
        | **Kết quả hiển thị** | - Bảng chỉ hiển thị các cột đã được chọn.<br>- Các cột không được chọn sẽ không hiển thị.<br>- Cấu hình được lưu riêng theo từng tài khoản. |
        | **Trường hợp không có dữ liệu** | **Nếu không có ứng viên**: Bảng hiển thị thông báo “Bảng dữ liệu trống!” kèm icon thùng rỗng. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-3/swimlane_1_3_hien_thi_cot.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Tùy chọn hiển thị cột trong bảng danh sách ứng viên</span>
    #### 1.4. Sắp xếp thứ tự ưu tiên theo từng cột {#toc-4-1-4}
    ??? book "Sắp xếp thứ tự ưu tiên theo từng cột"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Sắp xếp thứ tự ưu tiên theo từng cột |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này hợp nhất việc lọc dữ liệu và sắp xếp thứ tự ưu tiên hiển thị. Khi người phụ trách chọn các **Item** trong một bộ lọc (ví dụ: bộ lọc *Loại Hợp Đồng*), hệ thống sẽ căn cứ vào **thứ tự lựa chọn** của người dùng để sắp xếp dữ liệu trên bảng.<br><br>Item nào được chọn trước sẽ được ưu tiên hiển thị lên đầu danh sách kết quả. Cơ chế này áp dụng cho tất cả các bộ lọc được hiển thị (tối đa 9 cột, trừ cột Đào tạo). |
        | **Giao diện liên quan** | 1. Thanh công cụ chứa các bộ lọc (Filter bar).<br>2. Danh sách các Item bên trong từng bộ lọc (ví dụ: HĐ Thử Việc, HĐ Chính Thức...).<br>3. Nút ⟳ bên cạnh mỗi bộ lọc để reset thứ tự và lựa chọn về mặc định. |
        | **Luồng thao tác chính** | 1. Người phụ trách mở một bộ lọc cụ thể trên thanh công cụ.<br>2. Người phụ trách lần lượt tích chọn các Item theo nhu cầu.<br>3. Hệ thống ghi nhận thứ tự click: Item được chọn đầu tiên sẽ có mức ưu tiên cao nhất, các item tiếp theo có mức ưu tiên giảm dần.<br>4. Sau khi người dùng hoàn tất lựa chọn và đóng popup/nhấn xác nhận, hệ thống thực hiện 01 request duy nhất để lọc và sắp xếp dữ liệu theo đúng thứ tự Item đã chọn.<br>5. Nếu người dùng sử dụng nhiều bộ lọc cùng lúc, hệ thống ưu tiên sắp xếp theo thứ tự các cột từ trái qua phải, sau đó mới đến thứ tự Item bên trong từng cột.<br>6. Người phụ trách nhấn ⟳ để xóa bỏ bộ lọc và đưa thứ tự hiển thị về mặc định của hệ thống. |
        | **Điều kiện** | 1. Tài khoản có quyền Người phụ trách và đã được Master gán vị trí tuyển dụng tương ứng.<br>2. Bộ lọc được chọn có chứa các Item dữ liệu. |
        | **Kết quả hiển thị** | - Danh sách ứng viên hiển thị đúng theo các Item đã lọc.<br>- Thứ tự các dòng dữ liệu tuân thủ chính xác trình tự mà người phụ trách đã click chọn các Item trong Filter. |
        | **Trường hợp không có dữ liệu** | **Nếu không có ứng viên nào khớp với các Item đã chọn:** Bảng hiển thị thông báo “Bảng dữ liệu trống!” kèm icon thùng rỗng. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-4/swimlane_1_4_sap_xep_uu_tien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Sắp xếp thứ tự ưu tiên theo từng cột</span>
    #### 1.5. Tìm kiếm ứng viên theo ký tự {#toc-4-1-5}
    ??? book "Tìm kiếm ứng viên theo ký tự"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Tìm kiếm ứng viên theo ký tự |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách tìm kiếm nhanh ứng viên theo **Họ và Tên** thông qua ô nhập liệu tại trang **Danh sách ứng viên**. Hệ thống tự động lọc danh sách theo chuỗi ký tự được nhập. |
        | **Giao diện liên quan** | 1. Trang **Danh sách ứng viên** (truy cập từ menu "Ứng Viên").<br>2. Ô tìm kiếm đặt phía trên hoặc bên cạnh bảng dữ liệu.<br>3. Bảng **Danh sách ứng viên**. |
        | **Luồng thao tác chính** | 1. Người phụ trách truy cập trang **Danh sách ứng viên**.<br>2. Người phụ trách nhập ký tự vào ô tìm kiếm.<br>3. Hệ thống tự động lọc danh sách theo **Họ và Tên** có chứa chuỗi ký tự nhập.<br>4. Kết quả được cập nhật ngay khi thay đổi ký tự.<br>5. Khi ô tìm kiếm trống, hệ thống hiển thị lại toàn bộ dữ liệu ban đầu. |
        | **Điều kiện** | 1. Người phụ trách đã đăng nhập với quyền hợp lệ.<br>2. Trang **Danh sách ứng viên** đã tải dữ liệu thành công. |
        | **Kết quả hiển thị** | - Bảng **Danh sách ứng viên** chỉ hiển thị những ứng viên có **Họ và Tên** chứa chuỗi ký tự đã nhập.<br>- Kết quả cập nhật tức thời khi thay đổi ký tự.<br>- Khi ô tìm kiếm trống, hiển thị lại toàn bộ danh sách ứng viên ban đầu (nếu có). |
        | **Trường hợp không có dữ liệu** | - Nếu không có kết quả phù hợp với chuỗi ký tự nhập: Bảng hiển thị thông báo *“Bảng dữ liệu trống!”* kèm icon thùng rỗng.<br>- Nếu ô tìm kiếm trống: Hiển thị lại toàn bộ danh sách ứng viên ban đầu (nếu có). |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-5/swimlane_tim_kiem_ung_vien_theo_ky_tu.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Tìm kiếm ứng viên theo ký tự</span>
    #### 1.6. Quản lý thông tin chi tiết của ứng viên (Cần sửa thêm tác động đến flow các role khác ntn) {#toc-4-1-6}
    ??? book "Quản lý thông tin chi tiết của ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý thông tin chi tiết của ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Tác động đến role khác**| Tác động đến Handler, Trainer và Interviewer |
        | **Mô tả** | Chức năng này cho phép người phụ trách xem và quản lý toàn bộ hồ sơ ứng viên. Hệ thống hỗ trợ mô hình đa người phụ trách, cho phép xác định **01 Handler chính và nhiều Handler phụ**. Mọi Handler đều có quyền thiết lập/thay đổi ai là Handler chính. Tuy nhiên, chỉ có Handler chính mới có quyền thực hiện đánh giá (Rating) và theo dõi quá trình thử việc của ứng viên.<br>**Dữ liệu tại đây là duy nhất**; khi bất kỳ Role nào (Handler/Trainer/Interviewer) thực hiện chỉnh sửa thông tin được phép, nội dung hiển thị ở các Role còn lại sẽ tự động cập nhật đồng bộ. |
        | **Giao diện liên quan** | 1. Submenu "Thông tin" sau khi chọn ứng viên.<br>2. Màn hình submenu "Thông tin", bao gồm các phần:<br>&emsp;- Section email<br>&emsp;- Section "Câu trả lời của ứng viên" bao gồm các mục mở rộng chứa câu trả lời của ứng viên kể từ khi bắt đầu ứng tuyển.<br>&emsp;- Section thông tin tổng quan về ứng viên, gán người phụ trách chính là đánh giá ứng viên<br>&emsp;- Section chứa các mục hình ảnh, file đính kèm, ...  |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn một ứng viên từ danh sách ứng viên trong menu "Ứng viên".<br>2. Sau khi hệ thống hiển thị màn hình "Thông tin" và sidebar chứa các submenu thì người phụ trách có thể xem toàn bộ nội dung cần thiết.<br>3. Người phụ trách có thể mở rộng các item câu hỏi để xem nội dung bên trong, nội dung có thể là câu trả lời của ứng viên hoặc câu trả lời được HR thêm vào khi tạo profile cho ứng viên. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý ứng viên.<br>- Ứng viên tồn tại trong hệ thống và được nhìn thấy trên bảng danh sách ứng viên.<br>**Trường hợp muốn thêm đánh giá ứng viên**: người phụ trách phải là phụ trách chính mới được chỉnh sửa đánh giá về ứng viên. |
        | **Kết quả hiển thị** | - Hiển thị toàn bộ thông tin về ứng viên mà hệ thống ghi nhận được.<br>- Sau khi chỉnh sửa, thông tin được cập nhật và hiển thị thông báo dạng toast với nội dung *"Cập nhật dữ liệu thành công!"*. |
        | **Trường hợp không có dữ liệu** | Item không có thông tin bên trong sẽ hiển thị hint *`Nhập thêm nội dung`*.  |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-6/swimlane_quan_ly_thong_tin_chi_tiet_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Quản lý thông tin chi tiết của ứng viên</span>
    #### 1.7. Thêm ứng viên mới (Cần sửa thêm tác động đến các role khác) {#toc-4-1-7}
    ??? book "Thêm ứng viên mới"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thêm ứng viên mới |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách tạo và lưu thông tin ứng viên chưa từng ứng tuyển trước đó vào hệ thống. <br><br>Khi chọn biểu tượng **(+)** tại màn hình *Danh sách ứng viên*, popup **“Thêm ứng viên mới”** xuất hiện, yêu cầu nhập đầy đủ các thông tin bắt buộc: <br>&emsp;- Họ và tên <br>&emsp;- Vị trí <br>&emsp;- Gmail <br>&emsp;- Ngày gửi <br> *Người phụ trách có thể upload file thông tin thêm về ứng viên (bằng cấp, giấy tờ tùy thân, cover letter,...), hệ thống cho phép tổng dung lượng cho một lần upload là 25MB (không tính số lượng file).*<br><br>Sau khi nhập thông tin và được hệ thống nhận định là hợp lệ, người phụ trách cần nhấn nút  **“Thêm ứng viên”** để hệ thống tiến hành lưu dữ liệu và hiển thị ứng viên trong bảng. |
        | **Giao diện liên quan** | - Màn hình **Danh sách ứng viên** (menu *Ứng viên*). <br>- Popup **Thêm ứng viên**. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn nút **(+)** tại màn hình *Danh sách ứng viên*. <br>2. Hệ thống hiển thị popup **Thêm ứng viên mới**. <br>3. Người phụ trách nhập thông tin: <br>&emsp;- **Họ và tên**. <br>&emsp;- **Vị trí**: chọn từ danh sách vị trí đang tuyển dụng (dropdown-list). <br>&emsp;- **Gmail**: đúng định dạng email. <br>&emsp;- **Ngày gửi CV**: chọn qua popup lịch (không được chọn ngày trong tương lai; khi nhập thủ công theo định dạng *dd/mm/yyyy* cũng không được vượt quá ngày hiện tại). <br>4. Hệ thống kiểm tra dữ liệu. Nếu hợp lệ, người phụ trách nhấn **“Thêm ứng viên”**. <br>5. Hệ thống lưu thông tin, cập nhật bảng dữ liệu và hiển thị ứng viên mới. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập với quyền phù hợp.<br>- Email của ứng viên không tồn tại trên hệ thống.<br>- Dữ liệu nhập hợp lệ.<br>- Người phụ trách nhấn nút **“Thêm ứng viên”**. |
        | **Kết quả hiển thị** | Ứng viên mới xuất hiện trong bảng dữ liệu tại màn hình `Danh sách ứng viên`. |
        | **Trường hợp không có dữ liệu** | **Trường hợp không có dữ liệu về các vị trí ứng tuyển đang mở**: Khi mở dropdown-list để chọn vị trí ứng tuyển trên popup **Thêm ứng viên mới**, hệ thống sẽ hiển thị icon thùng rỗng và dòng mô tả **"Không có vị trí khả dụng!"**.  |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-7/swimlane_them_ung_vien_moi.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Thêm ứng viên mới</span>
    #### 1.8. Tạo đơn ứng tuyển cho ứng viên đã từng apply {#toc-4-1-8}
    ??? book "Tạo đơn ứng tuyển cho ứng viên đã từng apply"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Tạo đơn ứng tuyển cho ứng viên đã từng apply |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép hệ thống xử lý 2 trường hợp sau:<br>**1. Ứng viên đã từng ứng tuyển trước đó và có nguyện vọng ứng tuyển lại.**<br>**2. Ứng viên ứng tuyển vào nhiều vị trí cùng một lúc.**<br><br>Trong cả 2 trường hợp, hệ thống sẽ tự động kiểm tra email và tự động điền đầy đủ họ và tên của ứng viên đã từng ứng tuyển vào popup **Thêm ứng viên mới**.<br>Khi người phụ trách nhấn nút **Thêm ứng viên**, hệ thống sẽ kiểm tra đơn ứng tuyển gần nhất của ứng viên đã hoàn thành chưa (Đã được phỏng vấn và có đánh giá thì tính là hoàn thành), nếu chưa hoàn thành thì cần phải được đánh giá hoặc xóa thì mới có thể tạo mới đơn ứng tuyển tiếp theo.  |
        | **Giao diện liên quan** | - Màn hình **Danh sách ứng viên** (menu *Ứng viên*). <br>- Popup **Thêm ứng viên**. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn nút **(+)** tại màn hình *Danh sách ứng viên*. <br>2. Hệ thống hiển thị popup **Thêm ứng viên mới**. <br>3. Người phụ trách nhập thông tin: <br>&emsp;- **Họ và tên**. <br>&emsp;- **Vị trí**: chọn từ danh sách vị trí đang tuyển dụng (dropdown-list). <br>&emsp;- **Gmail**: đúng định dạng email. <br>&emsp;- **Ngày gửi CV**: chọn qua popup lịch (không được chọn ngày trong tương lai; khi nhập thủ công theo định dạng *dd/mm/yyyy* cũng không được vượt quá ngày hiện tại). <br>4. Hệ thống kiểm tra dữ liệu. Nếu hợp lệ, người phụ trách nhấn **“Thêm ứng viên”**. <br>5. Hệ thống kiểm tra thông tin về ứng viên và hiển thị popup chứa nội dung<br>*Email này đã được đăng ký trước đó. Hệ thống sẽ tạo hồ sơ ứng tuyển mới cho vị trí này trên tài khoản hiện có. Bạn có muốn tiếp tục không?*.<br>6. Người phụ trách nhấn nút **"Xác nhận"** để tiếp tục thao tác.<br>7. Hệ thống thực hiện lưu đơn ứng tuyển mới cho ứng viên đó và hiển thị lên danh sách ứng viên. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập với quyền phù hợp.<br>- Email của ứng viên đã tồn tại trên hệ thống.<br>- Dữ liệu nhập hợp lệ.<br>- Người phụ trách nhấn nút **“Thêm ứng viên”**.<br>- Người phụ trách nhấn nút **"Xác nhận"**. |
        | **Kết quả hiển thị** | Ứng viên xuất hiện trong bảng dữ liệu tại màn hình `Danh sách ứng viên`. |
        | **Trường hợp không có dữ liệu** | **Trường hợp không có dữ liệu về các vị trí ứng tuyển đang mở**: Khi mở dropdown-list để chọn vị trí ứng tuyển trên popup **Thêm ứng viên mới**, hệ thống sẽ hiển thị icon thùng rỗng và dòng mô tả **"Không có vị trí khả dụng!"**.<br><br>**Trường hợp ứng viên có đơn ứng tuyển chưa được hoàn thành**: hệ thống sẽ hiển thị popup thông báo cho người dùng rằng ứng viên này đang có đơn ứng tuyển chưa hoàn thành và cung cấp đường dẫn đến đơn ứng tuyển đó, người phụ trách cần thực hiện đánh giá đơn ứng tuyển đó hoặc xóa đơn ứng tuyển để hệ thống có thể tiếp nhận đơn ứng tuyển mới của ứng viên. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-8/swimlane_tao_don_ung_tuyen_cho_ung_vien_da_tung_apply.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Tạo đơn ứng tuyển cho ứng viên đã từng apply</span>
    #### 1.9. Truy vấn và kế thừa dữ liệu ứng viên cũ {#toc-4-1-9}
    ??? book "Truy vấn và kế thừa dữ liệu ứng viên cũ"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Truy vấn và kế thừa dữ liệu ứng viên cũ |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách chọn ứng viên dựa trên email mà ứng viên cung cấp từ CSDL của hệ thống, khi người phụ trách lựa chọn một ứng viên từ dropdown-list, hệ thống sẽ tự động điền dữ liệu về họ và tên và ngày tháng năm sinh (định dạng *dd/mm/yyyy*) vào các trường thông tin trên popup **Thêm ứng viên mới**. Sau khi đã chọn xong thì thực hiện chức năng **1.5. Tạo đơn ứng tuyển cho ứng viên đã từng apply**.  |
        | **Giao diện liên quan** | - Màn hình **Danh sách ứng viên** (menu *Ứng viên*). <br>- Popup **Thêm ứng viên**:<br>&emsp;Tickbox *Chọn ứng viên có sẵn*<br>&emsp;Dropdown-list *Chọn Gmail*  |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn nút **(+)** tại màn hình *Danh sách ứng viên*. <br>2. Hệ thống hiển thị popup **Thêm ứng viên mới**.<br>3. Người phụ trách tick vào tickbox *Chọn ứng viên có sẵn*.<br>4. Hệ thống thay đổi ô *Nhập Email* thành dropdown-list để chọn địa chỉ email từ CSDL, người phụ trách có thể tìm kiếm địa chỉ email.<br>5. Sau khi chọn email, hệ thống tự động điền các thông tin tại ô *Họ và tên* và *Ngày tháng năm sinh* (nếu có).<br>6. Tương tự chức năng **1.5. Tạo đơn ứng tuyển cho ứng viên đã từng apply**. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập với quyền phù hợp.<br>- Người phụ trách tick vào tickbox *Chọn ứng viên có sẵn*.<br>- Email của ứng viên đã tồn tại trên hệ thống. |
        | **Kết quả hiển thị** | - Nội dung popup thay đổi về mặt giao diện.<br>- Ứng viên xuất hiện trong bảng dữ liệu tại màn hình `Danh sách ứng viên` sau khi xác nhận thêm. |
        | **Trường hợp không có dữ liệu** | **Trường hợp không có dữ liệu về các vị trí ứng tuyển đang mở**: Khi mở dropdown-list để chọn vị trí ứng tuyển trên popup **Thêm ứng viên mới**, hệ thống sẽ hiển thị icon thùng rỗng và dòng mô tả **"Không có vị trí khả dụng!"**.<br><br>**Trường hợp không có ứng viên nào trong CSDL**: Khi mở dropdown-list để chọn ứng viên trên popup **Thêm ứng viên mới**, hệ thống sẽ hiển thị icon thùng rỗng và dòng mô tả **"Không có ứng viên nào!"** |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-9/swimlane_truy_van_ke_thua_du_lieu_ung_vien_cu.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Truy vấn và kế thừa dữ liệu ứng viên cũ</span>
    #### 1.10. Tự động gán người phụ trách ứng viên (Cần sửa flow người phụ trách chính (có thể thay đổi được) --> thêm được người phụ trách phụ) {#toc-4-1-10}
    ??? book "Tự động gán người phụ trách ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Tự động gán người phụ trách ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Tác động đến role khác** | Tác động đến Handler khác, Trainer và Interviewer |
        | **Mô tả** | Chức năng này tự động thiết lập quyền quản lý ứng viên ngay tại thời điểm tạo hồ sơ. Người trực tiếp thực hiện thao tác thêm ứng viên sẽ được hệ thống mặc định gán là Handler chính. Hệ thống cho phép bổ sung các Handler phụ và hỗ trợ thay đổi Handler chính bất kỳ lúc nào để chuyển giao quyền Đánh giá và Theo dõi thử việc. Các thay đổi về người phụ trách sẽ được đồng bộ và hiển thị tức thì cho tất cả các Role liên quan (Trainer, Interviewer). |
        | **Giao diện liên quan** | - Màn hình **Danh sách ứng viên** (menu *Ứng viên*). <br>- Popup **Thêm ứng viên**. |
        | **Luồng thao tác chính** | **1. Gán mặc định khi khởi tạo:**<br>- Khi Người phụ trách (A) nhấn nút [Thêm ứng viên], hệ thống tự động lấy thông tin tài khoản (A) và gán làm Handler chính của ứng viên đó.<br>**2. Bổ sung và Thay đổi:**<br>- Tại màn hình chi tiết ứng viên, bất kỳ Handler nào cũng có quyền thêm các Handler khác vào danh sách phụ.<br>- Người dùng có thể chọn một Handler phụ và thiết lập thành Handler chính. Khi đó, người cũ sẽ tự động chuyển thành Handler phụ.<br>**3. Đồng bộ dữ liệu:**<br>- Sau khi cập nhật lại Handler chính, hệ thống mở khóa quyền Đánh giá và Thử việc cho người mới, đồng thời cập nhật thông tin này trên cột Người phụ trách tại bảng danh sách ứng viên. |
        | **Điều kiện** | 1. Tài khoản đang đăng nhập đã được gán phân quyền người phụ trách.<br>2. Tài khoản thực hiện thao tác đã đăng nhập và thuộc vị trí tuyển dụng được Master gán quyền quản lý. |
        | **Kết quả hiển thị** | - Hồ sơ ứng viên được tạo thành công kèm theo định danh Handler chính.<br>- Sau khi thay đổi, hệ thống hiển thị thông báo toast: "Cập nhật Người phụ trách chính thành công!".<br>- Filter Người phụ trách trên danh sách ứng viên truy vấn đúng các profile theo vai trò mới.|
        | **Trường hợp không có dữ liệu** | **Trường hợp người phụ trách được chọn chưa tạo bất kỳ profile ứng viên nào :**<br>&emsp;- Hệ thống hiển thị mô tả *“Bảng dữ liệu trống!”* kèm icon thùng rỗng. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-1-10/swimlane_tu_dong_gan_nguoi_phu_trach_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Tự động gán người phụ trách ứng viên</span>
---
???+ info "2. Nhóm chức năng quản lý tuyển dụng ứng viên Cần sửa add full workflow impact cho tất cả các chức năng"
    ### 2. Nhóm chức năng quản lý tuyển dụng ứng viên (Cần sửa add full workflow impact cho tất cả các chức năng) {#toc-4-2}
    #### 2.1. Tạo vòng phỏng vấn ứng viên {#toc-4-2-1}
    ??? book "Tạo vòng phỏng vấn ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Tạo vòng phỏng vấn ứng viên |
        | **Vai trò** | Người phụ trách |
        |**Tác động đến role**| Ứng viên: Nhận thông tin về các vòng phỏng vấn mới.<br>Toàn bộ các Role: Thay đổi layout lịch phỏng vấn. Hệ thống tự động kiểm tra: nếu ứng viên có từ 02 vòng phỏng vấn liên tiếp trở lên, thông tin vòng tiếp theo sẽ được tích hợp hiển thị ngay trên popup chi tiết của vòng hiện tại khi xem ở dạng lịch. |
        | **Mô tả** | Tính năng này giúp người phụ trách điều phối lịch phỏng vấn bằng cách chỉ định người đánh giá và thời gian cụ thể cho từng vòng phỏng vấn đã được thiết lập theo vị trí tuyển dụng. |
        | **Giao diện liên quan** | - Màn hình chứa bảng **Danh sách ứng viên** (menu *Ứng viên*).<br>- Submenu sau khi chọn vào ứng viên cụ thể.<br>- Tab "Phỏng vấn" trên submenu đó.<br>- Giao diện Lịch phỏng vấn (Calendar View) và Popup chi tiết lịch. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn vào một ứng viên cụ thể trên bảng **Danh sách ứng viên**.<br>2. Hệ thống điều hướng đến phân vùng quản lý tuyển dụng ứng viên và mặc định trỏ vào tab "Thông tin".<br>3. Người phụ trách chọn vào tab "Phỏng vấn".<br>4. Hệ thống hiển thị màn hình với tiêu đề chứa tên + vị trí phỏng vấn của ứng viên, bên dưới chứa các vòng phỏng vấn (nếu chưa kích hoạt thì tức chưa có người phỏng vấn và thời gian phỏng vấn) đã được thiết lập sẵn cho vị trí tuyển dụng của ứng viên.<br><br>**Để kích hoạt một vòng phỏng vấn**<br>1. Người phụ trách chọn vào vòng phỏng vấn chưa được gán người phỏng vấn và thời gian phỏng vấn.<br>2. Người phụ trách chọn vào drop-down list *Người phỏng vấn*.<br>3. Hệ thống hiển thị popup để người phụ trách chọn ít nhất một hoặc nhiều người phỏng vấn dành cho ứng viên đó.<br>4. Sau khi chọn xong, người phụ trách cần nhấn nút *"Xác nhận"* để hệ thống thực hiện việc lưu dữ liệu cho vòng phỏng vấn.<br>5. Tương tự với drop-down list *Ngày phỏng vấn*, người phỏng vấn chọn ngày và giờ phỏng vấn.<br>6. Người phụ trách gán trạng thái của buổi phỏng vấn đó <br>7. Hệ thống lưu dữ liệu và hiển thị tại vòng phỏng vấn được chọn để kích hoạt.<br><br>**Sau khi kích hoạt vòng phỏng vấn:**<br> Hệ thống hiển thị thông tin của người phỏng vấn và thời gian phỏng vấn lên trên vòng phỏng vấn vừa kích hoạt.<br><br>**Cơ chế hiển thị liên kết:**<br>1. Nếu ứng viên được gán lịch cho 2 vòng liên tiếp, hệ thống tự động nhận diện.<br>2. Khi bất kỳ Role nào xem chi tiết một vòng phỏng vấn trên lịch, popup sẽ hiển thị thêm mục "Vòng phỏng vấn tiếp theo" kèm thời gian tương ứng. |
        | **Điều kiện** | - Tài khoản đang đăng nhập đã được gán phân quyền người phụ trách.<br>- Vị trí tuyển dụng đó có ít nhất một vòng phỏng vấn được thiết lập sẵn. |
        | **Kết quả hiển thị** | - Khi kích hoạt một vòng phỏng vấn cho ứng viên đó, các thông tin về người phỏng vấn và thời gian phỏng vấn sẽ được hiển thị lên vòng phỏng vấn đó.<br>- Layout lịch phỏng vấn cập nhật thông tin liên kết giữa các vòng phỏng vấn liên tiếp. |
        | **Trường hợp không có dữ liệu** | **Trường hợp không có vòng phỏng vấn được tạo sẵn**: hệ thống hiển thị biểu tượng thùng rỗng và mô tả "Không có dữ liệu!".<br>**Trường hợp không có người phỏng vấn nào**: Khi mở drop-down list "Người phỏng vấn" thì hệ thống hiển thị biểu tượng thùng rỗng kèm mô tả "Không có dữ liệu!". |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-2-1/swimlane_tao_vong_phong_van_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Tạo vòng phỏng vấn ứng viên</span>
    #### 2.2. Xem chi tiết buổi phỏng vấn ứng viên {#toc-4-2-2}
    ??? book "Xem chi tiết buổi phỏng vấn ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem chi tiết vòng phỏng vấn ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách xem nội dung chi tiết về vòng phỏng vấn ở 3 mục *'Câu hỏi phỏng vấn'*, *'Đánh giá'* và *'Ghi chú'* khi người phụ trách chọn vào vòng phỏng vấn cụ thể. Nội dung của vòng phỏng vấn sẽ được hiển thị trên một popup.<br> Người phụ trách có thể xem nội dung trước và sau khi phỏng vấn, popup sẽ chỉ hiển thị các nội dung được thiết lập sẵn cho vòng phỏng vấn đó. |
        | **Giao diện liên quan** | - Màn hình chứa bảng **Danh sách ứng viên** (menu *Ứng viên*).<br>- Submenu sau khi chọn vào ứng viên cụ thể.<br>- Tab "Phỏng vấn" trên submenu đó.<br>- Danh sách các vòng phỏng vấn, màu trắng: khả dụng, màu xám: khóa.<br>- Popup nội dung vòng phỏng vấn. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn vào vòng phỏng vấn muốn xem chi tiết, chỉ những vòng phỏng vấn có giao diện màu trắng mới chọn được. Nếu là màu xám tức vòng phỏng vấn đó chưa có nội dung gì bên trong.<br>*Lưu ý: ở đây phải kiểm tra đồng bộ, nếu là màu trắng thì phải có status Đã Phỏng Vấn*<br>2. Hệ thống hiển thị popup chứa 3 tab *'Câu hỏi phỏng vấn'*, *'Đánh giá'* và *'Ghi chú'*, mặc định trỏ vào tab *'Câu hỏi phỏng vấn'* khi người phỏng vấn mở popup lên.<br>3. Người phụ trách xem được các danh mục chứa các nội dung phỏng vấn của vòng phỏng vấn này, khi mở rộng các danh mục sẽ có nhiều câu hỏi phỏng vấn bên trong.<br>4. Tương tự với tab *'Đánh giá'*.<br>*(Lưu ý: người phụ trách không được phép chỉnh sửa nội dung ở popup này, chỉ xem được những gì mà người phỏng vấn đã điền)*<br><br>**Trường hợp người phụ trách xem chi tiết vòng phỏng vấn đã phỏng vấn xong**<br>1. Khi mở popup chứa nội dung chi tiết, cả 3 tab *'Câu hỏi phỏng vấn'*, *'Đánh giá'* và *'Ghi chú'*  đều có kết quả do người phỏng vấn thêm vào trong quá trình phỏng vấn. <br>*(Lưu ý: người phụ trách không được phép chỉnh sửa nội dung ở popup này, chỉ xem được những gì mà người phỏng vấn đã điền)*|
        | **Điều kiện** | - Tài khoản đang đăng nhập đã được gán phân quyền người phụ trách.<br>- Vị trí tuyển dụng đó có ít nhất một vòng phỏng vấn được thiết lập sẵn.<br>- Vòng phỏng vấn được chọn có nội dung chi tiết. |
        | **Kết quả hiển thị** | - Nội dung của popup đúng với dữ liệu được điền vào bởi người phỏng vấn sau khi thực hiện vòng phỏng vấn. |
        | **Trường hợp không có dữ liệu** | **Trường hợp không có nội dung chi tiết tại các tab trong popup:** hệ thống hiển thị biểu tượng thùng rỗng kèm mô tả  "Không có dữ liệu!". |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-2-2/swimlane_xem_chi_tiet_buoi_phong_van_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Xem chi tiết buổi phỏng vấn ứng viên</span>
    #### 2.3. Quản lý ghi chú về ứng viên dành cho Người phụ trách {#toc-4-2-3}
    ??? book "Quản lý ghi chú về ứng viên dành cho Người phụ trách"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý ghi chú về ứng viên dành cho Người phụ trách |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách thêm các ghi chú dành cho ứng viên được chọn từ bảng **"Danh sách ứng viên"**.<br>Hệ thống sẽ lưu trữ thông tin của người tạo và thời gian tạo ghi chú (log), hệ thống cho phép người phụ trách thêm / xóa / sửa những ghi chú của mình đã tạo (không được thao tác lên ghi chú của người phụ trách khác).<br> Hệ thống tích hợp một số định dạng văn bản như in đậm, in nghiêng , gạch chân, chèn link, định dạng màu chữ. Khi người phụ trách tạo mới một ghi chú hoặc chỉnh sửa, hệ thống sẽ cho phép người phụ trách thực hiện các định dạng văn bản này. |
        | **Giao diện liên quan** | - Màn hình chứa bảng Danh sách ứng viên (menu Ứng viên).<br>- Submenu sau khi chọn vào ứng viên cụ thể.<br>- Tab "Ghi Chú" trên submenu đó.<br>- Popup "Thêm ghi chú".<br>- Thanh công cụ định dạng văn bản (Floating Toolbar). |
        | **Luồng thao tác chính** | 1. Xem danh sách ghi chú:<br>- Người phụ trách chọn ứng viên, chọn tab "Ghi chú". Hệ thống hiển thị danh sách các ghi chú đã tạo theo thứ tự thời gian.<br>2. Thêm mới ghi chú:<br>- Người phụ trách nhấn nút [+ Thêm ghi chú] ở góc phải màn hình.<br>- Hệ thống hiển thị popup "Thêm ghi chú" gồm trường Tiêu đề và Ghi chú.<br>- Người phụ trách nhập nội dung và nhấn nút [Thêm ghi chú] trong popup để lưu.<br>3. Định dạng văn bản:<br>- Khi bôi đen đoạn văn bản trong ghi chú, hệ thống hiển thị thanh công cụ: In đậm (B), In nghiêng (I), Gạch chân (U), Gạch ngang (S), Màu chữ, Chèn Link.<br>4. Chỉnh sửa/Xóa ghi chú:<br>- Người phụ trách nhấn vào icon "Ba chấm" tại ghi chú muốn thao tác.<br>- Chọn "Chỉnh sửa" để cập nhật nội dung hoặc "Xóa" để gỡ bỏ ghi chú.<br>*(Lưu ý: Chỉ được sửa/xóa ghi chú do chính mình tạo. Khi rê chuột vào avatar người tạo, hệ thống hiển thị Họ tên đầy đủ)* |
        | **Điều kiện** | - Tài khoản đang đăng nhập có phân quyền Người phụ trách.<br>- Đã chọn một ứng viên cụ thể để xem chi tiết. |
        | **Kết quả hiển thị** | - Ghi chú mới hiển thị ngay lập tức trong danh sách.<br>- Hiển thị đúng: Tiêu đề, nội dung đã định dạng, thời gian tạo (HH:MM, DD/MM/YYYY) và avatar người tạo.<br>- Thông tin người tạo hiển thị chính xác khi hover vào avatar. |
        | **Trường hợp không có dữ liệu** | **Trường hợp ứng viên chưa có ghi chú nào:** Hệ thống hiển thị biểu tượng thùng rỗng kèm mô tả "Không có dữ liệu!". |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-2-3/swimlane_quan_ly_ghi_chu_ve_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Quản lý ghi chú về ứng viên dành cho Người phụ trách</span>
    #### 2.4. Đánh giá ứng viên {#toc-4-2-4}
    ??? book "Đánh giá ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Đánh giá ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Tác động đến role khác** | Tác động đến các Handler phụ: Các Handler phụ có thể xem được nội dung đánh giá của Handler chính để nắm bắt tình hình ứng viên. |
        | **Mô tả** | Chức năng này cho phép người phụ trách thực hiện đánh giá ứng viên đang chọn dựa trên các tiêu chí đã được thiết lập sẵn. Người phụ trách nhập tiêu đề, thực hiện chấm điểm bằng sao (Rating) cho từng tiêu chí, chọn các thuộc tính chi tiết trong từng tiêu chí và viết nội dung đánh giá tổng quát. |
        | **Giao diện liên quan** | - Tab "Đánh giá" trong chi tiết ứng viên.<br>- Form "Đánh giá ứng viên" (khu vực bên trái màn hình).<br>- Các danh mục tiêu chí đánh giá (dạng Accordion/Dropdown). |
        | **Luồng thao tác chính** | **Nếu là Handler chính:**<br>1. Người phụ trách chọn tab "Đánh giá".<br>2. Nhập Tiêu đề đánh giá vào ô textbox.<br>3. Tại mỗi danh mục tiêu chí (Ví dụ: Kỹ năng chuyên môn, Mức độ hoàn thiện task...):<br>- Chọn số sao tương ứng (từ 1 đến 5 sao).<br>- Click mở rộng danh mục để tích chọn các tiêu chí chi tiết bên trong (Checkbox).<br>4. Nhập nội dung chi tiết tại ô "Nội dung đánh giá".<br>5. Nhấn nút [Lưu đánh giá] để hoàn tất.<br><br>**Nếu là Handler phụ:** Hiển thị dữ liệu ở chế độ chỉ xem (Read-only). |
        | **Điều kiện** | - Tài khoản có quyền người phụ trách.<br>- Vị trí ứng tuyển của ứng viên đã được thiết lập bộ tiêu chí đánh giá trong hệ thống. |
        | **Kết quả hiển thị** | - Dữ liệu đánh giá được lưu vào hệ thống.<br>- Đánh giá mới nhất sẽ xuất hiện ở đầu danh sách "Đánh giá gần đây" ở cột bên phải cho tất cả các người phụ trách (chính / phụ) đều có thể xem. |
        | **Trường hợp không có dữ liệu** | **Trường hợp vị trí tuyển dụng chưa được thiết lập tiêu chí:** Hệ thống hiển thị thông báo "Vị trí này chưa có tiêu chí đánh giá!" hoặc hiển thị khung trống. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-2-4/swimlane_danh_gia_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Đánh giá ứng viên</span>
    #### 2.5. Xem lại các đánh giá gần đây {#toc-4-2-5}
    ??? book "Xem lại các đánh giá gần đây"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem lại các đánh giá gần đây |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này liệt kê các bản đánh giá đã thực hiện trong quá khứ của ứng viên dưới dạng danh sách thu gọn, giúp người phụ trách nhanh chóng nắm bắt lịch sử đánh giá mà không cần tải lại trang. |
        | **Giao diện liên quan** | - Cột "Đánh giá gần đây" (khu vực bên phải màn hình).<br>- Các thẻ (Card) đánh giá chi tiết theo từng đợt. |
        | **Luồng thao tác chính** | 1. Người phụ trách xem danh sách các thẻ đánh giá ở cột phải (hiển thị thông tin tóm tắt: Tiêu đề, Tag trạng thái, Số sao trung bình, Người đánh giá và Ngày đánh giá).<br>.2. Click vào một thẻ đánh giá cụ thể trong danh sách.<br>3. Hệ thống tự động tìm kiếm bản đánh giá tương ứng ở khu vực bên trái, mở rộng (expand) danh mục đó và cuộn màn hình (scroll) để đưa nội dung đó vào giữa tầm mắt người dùng. |
        | **Điều kiện** | - Ứng viên đã có ít nhất một bản đánh giá được lưu trong hệ thống. |
        | **Kết quả hiển thị** | - Hiển thị đúng các Tag trạng thái màu sắc (Ví dụ: Tốt - Xanh lá, Khá tốt - Xanh dương, Trung bình - Cam, Không tốt - Xám).<br>- Hiển thị đúng Avatar và tên người thực hiện đánh giá. |
        | **Trường hợp không có dữ liệu** | **Trường hợp ứng viên chưa có lịch sử đánh giá:** Cột bên phải hiển thị biểu tượng thùng rỗng kèm mô tả "Không có dữ liệu!". |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-2-5/swimlane_xem_lai_cac_danh_gia_gan_day.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Xem lại các đánh giá gần đây</span>
    #### 2.6. Quản lý HĐLĐ với ứng viên {#toc-4-2-6}
    ??? book "Quản lý HĐLĐ với ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý HĐLĐ với ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Tác động đến role khác** | Tác động đến Trainee: Trainee được quyền xem các nội dung của hợp đồng sau khi đã được ký kết và lưu trên hệ thống. |
        | **Mô tả** | Chức năng này cho phép người phụ trách tạo và quản lý Hợp đồng lao động (HĐLĐ) cho ứng viên. Hệ thống cung cấp các trường thông tin hành chính, cho phép soạn thảo nội dung hợp đồng trực tiếp và đính kèm các tài liệu liên quan. Sau khi lưu, mọi thay đổi (thêm/xóa/sửa) đều được hệ thống ghi nhận nhưng phải tuân thủ quy trình kiểm duyệt của tổ chức.  |
        | **Giao diện liên quan** | - Tab "Hợp Đồng" trong chi tiết ứng viên.<br>- Form "Thông Tin Hợp Đồng".<br>- Khu vực soạn thảo "Nội dung".<br>- Khu vực "Tệp đính kèm". |
        | **Luồng thao tác chính** | **1. Chọn loại hợp đồng:**<br>- Người phụ trách chọn 01 trong 03 giá trị từ dropdown: HĐ Thực tập, HĐ Thử Việc, HĐ Chính thức.<br>**2. Nhập thông tin chi tiết:**<br>- Nếu chọn HĐ Thực tập hoặc HĐ Thử Việc: Form cho phép nhập liệu bình thường các thông tin (Số HĐ, Phòng ban, Vị trí, Lương, Thời hạn...).<br>- Nếu chọn HĐ Chính thức: Hệ thống thực hiện khóa toàn bộ form nhập liệu; UI của các trường thông tin sẽ chuyển sang màu xám (Disabled) và không thể chỉnh sửa nội dung.<br>**3. Quản lý mức lương và tệp:**<br>- Tại trường Mức lương: Click icon "Con mắt" để xem nội dung ẩn.<br>- Nhấn icon [Upload] để tải lên hoặc icon [X] đỏ để xóa tệp đính kèm.<br>**4. Lưu dữ liệu:**<br>- Sau khi lưu, thông tin sẽ được hiển thị cho các bên liên quan, bao gồm cả Trainee (đối với phần nội dung được phép xem). |
        | **Điều kiện** | - Tài khoản đang đăng nhập có phân quyền Người phụ trách. |
        | **Kết quả hiển thị** | - Các trường dữ liệu hiển thị đúng định dạng (Ngày tháng theo `dd/mm/yyyy).<br>- Tệp đính kèm hiển thị dưới dạng Thumbnail kèm tên file và định dạng tương ứng. |
        | **Trường hợp không có dữ liệu** | **Trường hợp ứng viên chưa có thông tin hợp đồng:** Các trường nhập liệu sẽ để trống, khu vực tệp đính kèm không hiển thị danh sách. |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-2-6/swimlane_quan_ly_hdld_voi_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Quản lý HĐLĐ với ứng viên</span>
    #### 2.7. Quản lý thử việc dành cho ứng viên {#toc-4-2-7}
    ??? book "Quản lý thử việc dành cho ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý thử việc dành cho ứng viên |
        | **Vai trò** | Người phụ trách (Chính) |
        | **Mô tả** | Chức năng này cho phép **Handler chính** theo dõi và đánh giá chi tiết quá trình thử việc dựa trên danh mục nhiệm vụ thiết lập sẵn. Để đảm bảo tính tập trung trong quản lý, chỉ có **Handler chính** mới có quyền tích chọn hoàn thành, viết nhận xét và thêm minh chứng. Các Role khác chỉ có quyền xem nội dung đồng bộ từ hệ thống. |
        | **Giao diện liên quan** | - Tab *"Thử việc"* trong chi tiết ứng viên.<br>- Danh sách các nhóm nhiệm vụ thử việc (dạng Accordion).<br>- Các thẻ nhiệm vụ chi tiết (Task cards) bên trong mỗi nhóm.<br>- Thanh công cụ tương tác (Upload, Link, Rich Text) tại mỗi nhiệm vụ. |
        | **Luồng thao tác chính** | **1. Xem tiến độ tổng quát:**<br>.- Người phụ trách xem các nhóm nhiệm vụ (Ví dụ: [Thử việc][CSKH] Theo dõi & đánh giá thử việc).<br>- Quan sát chỉ số tiến độ ở góc phải mỗi nhóm (Ví dụ: 1/3, 4/4) để biết số lượng nhiệm vụ đã hoàn thành trên tổng số.<br>**2. Đánh giá chi tiết nhiệm vụ:**<br>- Click mở rộng nhóm nhiệm vụ để xem các tiêu chí chi tiết.<br>- Tích chọn vào ô Checkbox đầu mỗi tiêu chí để xác nhận đã thực hiện/đánh giá.<br>- Tại ô nhập liệu dưới mỗi tiêu chí, người phụ trách nhập nội dung nhận xét.<br>**3. Thêm tệp/liên kết minh chứng:**<br>- Sử dụng các icon ở góc phải ô nhập liệu để:<br>&emsp;+ Icon Tải lên: Đính kèm file minh chứng.<br>&emsp;+ Icon Link: Chèn URL liên quan.<br>&emsp;+ Icon Văn bản: Định dạng nội dung nhận xét.<br>**4. Lưu vết (Log):**<br>- Sau khi lưu, hệ thống hiển thị thông tin người đánh giá và thời gian (HH:mm - DD/MM/YYYY) ngay phía trên nội dung đánh giá. |
        | **Điều kiện** | - Ứng viên đang trong giai đoạn thử việc hoặc đã được thiết lập lộ trình thử việc.<br>- Tài khoản đăng nhập có quyền Người phụ trách.<br>- Người phụ trách đó phải là người phụ trách chính của ứng viên đang chọn. |
        | **Kết quả hiển thị** | - Chỉ số tiến độ (X/Y) tự động cập nhật ngay khi người phụ trách tích chọn hoàn thành nhiệm vụ.<br>- Các nhiệm vụ đã đánh giá hiển thị kèm thông tin định danh (Avatar/Tên) của người phụ trách thực hiện. |
        | **Trường hợp không có dữ liệu** | **Trường hợp ứng viên chưa được gán lộ trình thử việc:** Hệ thống hiển thị biểu tượng thùng rỗng kèm mô tả "Không có dữ liệu thử việc!". |

        <span class="swimlane-chart-label">
            <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
            <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-2-7/swimlane_quan_ly_thu_viec_danh_cho_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Quản lý thử việc dành cho ứng viên</span>
---
???+ info "3. Nhóm chức năng quản lý vị trí tuyển dụng"
    ### 3. Nhóm chức năng quản lý vị trí tuyển dụng {#toc-4-3}
    #### 3.1. Xem danh sách vị trí tuyển dụng {#toc-4-3-1}
    ??? book "Xem danh sách vị trí tuyển dụng"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem danh sách vị trí tuyển dụng |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách xem danh sách các vị trí tuyển dụng đã được Master gán quyền quản lý. Thông tin được hiển thị tại bảng **“Danh sách vị trí ứng tuyển”** với các cột dữ liệu mô tả tình trạng và tiến độ tuyển dụng. Người phụ trách chỉ có thể tương tác với những vị trí được chỉ định; những vị trí khác trong hệ thống sẽ hoàn toàn không hiển thị đối với người phụ trách này. |
        | **Giao diện liên quan** | - Menu **“Quản lý vị trí”**.<br>- Màn hình **“Danh sách vị trí ứng tuyển”** hiển thị danh sách tất cả các vị trí. |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập vào hệ thống.<br>2. Chọn menu **“Quản lý vị trí”**.<br>3. Hệ thống hiển thị bảng **“Danh sách vị trí ứng tuyển”** chứa thông tin các vị trí tuyển dụng mà người phụ trách có quyền xem.<br>4. Người phụ trách theo dõi thông tin từng vị trí qua các cột:<br>&emsp;a. **Tên và vai trò**: tên vị trí tuyển dụng.<br>&emsp;b. **Ứng viên**: số lượng ứng viên đã ứng tuyển.<br>&emsp;c. **Chờ phỏng vấn**: số lượng ứng viên đã được lên lịch phỏng vấn.<br>&emsp;d. **Đang đào tạo**: số lượng ứng viên đã pass phỏng vấn và đang tham gia đào tạo.<br>&emsp;e. **Trạng thái**: tình trạng của vị trí *(Đang hoạt động / Dừng hoạt động)*, cho phép người phụ trách thay đổi bằng cách nhấn nút toggle_on-off.<br>5. Người dùng có thể xóa vị trí bằng cách hover vào từng item và nhấn biểu tượng *(x)* ở góc trên bên phải của từng item.  |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền xem thông tin vị trí.<br>- Hệ thống đã có dữ liệu về các vị trí tuyển dụng.<br>- Master đã thực hiện gán quyền để người phụ trách có thể quản lý trí tuyển dụng cho tài khoản này. |
        | **Kết quả hiển thị** | - Bảng **“Danh sách vị trí ứng tuyển”** hiển thị đầy đủ các vị trí cùng các cột thông tin liên quan. |
        | **Trường hợp không có dữ liệu** | - Nếu chưa có vị trí nào, bảng dữ liệu thông báo *Bảng này hiện đang trống!* kèm với icon thùng rỗng.<br>- Nếu dữ liệu tại các cột đếm (Ứng viên, Chờ phỏng vấn, Đang đào tạo) bằng 0: hiển thị giá trị `0` thay vì để trống.<br>- Bảng dữ liệu chỉ chứa các vị trí mà Master đã phê duyệt quyền xem cho người phụ trách. |

        <span class="swimlane-chart-label">
          <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
          <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-3-1/swimlane_xem_danh_sach_vi_tri_tuyen_dung.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Xem danh sách vị trí tuyển dụng</span>
    #### 3.3. Xem thông tin tổng quan về vị trí tuyển dụng {#toc-4-3-3}
    ??? book "Xem thông tin tổng quan về vị trí tuyển dụng"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem thông tin tổng quan về vị trí tuyển dụng |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách truy cập và xem các báo cáo, thống kê chi tiết của một vị trí tuyển dụng cụ thể mà Master đã gán quyền. Tại phiên bản này, người phụ trách chỉ có quyền xem thông tin và theo dõi dữ liệu, toàn bộ các chức năng chỉnh sửa, thay đổi trạng thái hoặc xóa vị trí đều bị vô hiệu hóa để đảm bảo tính toàn vẹn của cấu trúc tuyển dụng do Master thiết lập. |
        | **Giao diện liên quan** | 1. Menu **“Quản lý vị trí”**.<br>2. Màn hình **“Danh sách vị trí ứng tuyển”** hiển thị danh sách tất cả các vị trí (đã được lọc theo quyền hạn từ Master).<br>3. Sub-menu dành riêng cho từng vị trí được chọn từ **“Danh sách vị trí ứng tuyển”**, bao gồm các submenu sau:<br>&emsp;- Tổng quan<br>&emsp;- Mô tả (JD)<br>&emsp;- K.Tra đầu vào<br>&emsp;- Phỏng vấn<br>&emsp;- Đào tạo<br>&emsp;- Sau đào tạo. <br>4. Màn hình **Tổng quan vị trí** của submenu Tổng quan. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn một vị trí muốn thao tác trên bảng **“Danh sách vị trí ứng tuyển”** của ở menu **"Quản lý vị trí"**.<br>2. Hệ thống hiển thị thêm một sidebar mới, sidebar này sẽ chứa nội dung của sub-menu.<br>3. Người phụ trách cần chọn vào submenu *Tổng quan*.<br>4. Hệ thống hiển thị màn hình *Tổng quan vị trí*, trên màn hình này bao gồm các nội dung sau:<br>&emsp;+ Thông tin vị trí: bao gồm tên vị trí, icon của vị trí.<br>&emsp;+ Các biểu đồ `Số lượng CV`, `Số lượng phỏng vấn`, `Pass phỏng vấn`, `Training`, `Thử việc` sẽ mặc định hiển thị toàn bộ dữ liệu về vị trí tính từ lúc tạo vị trí, người dùng có thể tùy chọn thay đổi thời gian xem biểu đồ bằng cách tùy chỉnh thời gian ở nút `📅` ở góc trên cùng bên phải của màn hình này. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền xem thông tin vị trí.<br>- Vị trí hiện đang hiển thị trong danh sách được phép truy cập của Handler. |
        | **Kết quả hiển thị** | **Trường hợp xem thông tin của vị trí**: Hiển thị giao diện đầy đủ thông tin về vị trí, các nút đúng với mô tả.<br>**Trường hợp xóa vị trí**: Hệ thống điều hướng người phụ trách về màn hình chứa **"Danh sách vị trí ứng tuyển"** và thông báo dạng toast "Vị trí {`Tên vị trí`} đã được xóa!". |
        | **Trường hợp không có dữ liệu** | **Trường hợp vị trí chưa từng ghi nhận bất kỳ dữ liệu nào**: Hệ thống hiển thị thông tin tổng quan mô tả vị trí, các biểu đồ vẫn được hiển thị nhưng sẽ hiển thị dữ liệu = 0, biểu đồ đường sẽ nằm trùng với trục X (thể hiện không có dữ liệu gì). |

        <span class="swimlane-chart-label">
          <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
          <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-3-3/swimlane_xem_thong_tin_tong_quan_vi_tri_tuyen_dung.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Xem thông tin tổng quan về vị trí tuyển dụng</span>
    #### 3.4. Thiết lập mô tả vị trí tuyển dụng (JD) {#toc-4-3-4}
    ??? book "Thiết lập mô tả vị trí tuyển dụng (JD)"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập mô tả vị trí tuyển dụng (JD) |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách tạo các profile cho mô tả công việc, mỗi profile sẽ là một biến thể của mô tả công việc dành cho vị trí đang được chọn. Người phụ trách có toàn quyền tùy chỉnh JD cho vị trí tuyển dụng đang có trong hệ thống. Các profile này sẽ được lưu và hiển thị ở phần **Danh sách mô tả** khi người phụ trách truy cập vào submenu *Mô Tả (JD)*. |
        | **Giao diện liên quan** | 1. Menu **“Quản lý vị trí”**.<br>2. Màn hình **“Danh sách vị trí ứng tuyển”** hiển thị danh sách tất cả các vị trí.<br>3. Sub-menu dành riêng cho từng vị trí được chọn từ **“Danh sách vị trí ứng tuyển”**, bao gồm các submenu sau:<br>&emsp;- Tổng quan<br>&emsp;- Mô tả (JD)<br>&emsp;- K.Tra đầu vào<br>&emsp;- Phỏng vấn<br>&emsp;- Đào tạo<br>&emsp;- Sau đào tạo. <br>4. Màn hình chứa *Danh sách mô tả* ở submenu *Mô Tả (JD)*. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn một vị trí tuyển dụng từ **"Danh sách vị trí ứng tuyển"**.<br>2. Hệ thống điều hướng sang màn hình chứa submenu và mặc định trỏ vào submenu *Tổng Quan*.<br>3. Người phụ trách chuyển sang submenu *Mô Tả (JD)*.<br>4. Để thiết lập một profile mô tả (JD) mới, người phụ trách cần đặt tên cho profile và phải nhấn [ENTER] để lưu.<br>5. Sau khi hệ thống đã lưu profile mới, hệ thống sẽ hiển thị tên của profile JD này lên giữa màn hình với tên của profile được in đậm ở phía trên cùng của màn hình, bên dưới tên của profile này sẽ bao gồm 2 phần:<br>&emsp;- *Nhập mô tả*: Người phụ trách nhập mô tả vào phần này, khi nhập xong và nhấn [ENTER] thì hệ thống sẽ thực hiện việc lưu dữ liệu và thông báo dạng toast cho người dùng với nội dung *"Đã lưu thay đổi cho +  {tên của profile đang thiết lập}"*  <br>&emsp;- *Nhập danh mục mới*: hệ thống quy định các danh mục để người phụ trách dễ dàng quản lý nội dung của JD, khi tạo danh mục mới, người phụ trách phải nhập tên của danh mục vào và nhấn [ENTER] để hệ thống thực hiện lưu. Sau khi lưu, hệ thống cập nhật lại danh mục đó để hiển thị ngay trên màn hình của người phụ trách (không reload).<br>6. Các thao tác với danh mục chứa nội dung của JD:<br>&emsp;- Thêm mô tả danh mục và các nội dung chi tiết bên trong<br>&emsp;- Xóa danh mục và xóa nội dung chi tiết bên trong (Khi xóa thì phải xác nhận thông qua popup cảnh báo)<br>&emsp;- Sắp xếp lại thứ tự của danh mục và sắp xếp nội dung của từng danh mục<br>7. Người phụ trách có thể bật nhiều mô tả công việc cùng lúc để tùy biến cách sử dụng (ví dụ: có thể tạo vị trí Data và tạo nhiều JD cho 6 trung tâm: Anh, Pháp, Đức, Trung, Nhật, Hàn).|
        | **Điều kiện** | Người phụ trách đã đăng nhập và truy cập vào thông tin vị trí. |
        | **Kết quả hiển thị** | - Khi hoàn tất việc thiết lập một JD tiêu chuẩn, người phụ trách sẽ xem được nội dung của JD bao gồm: tên. mô tả, danh mục, mô tả của danh mục, các tiêu chí con trong từng danh mục.<br>- Trường hợp có nhiều JD, người phụ trách sẽ xem được nội dung tương ứng khi chọn vào JD đó.  |
        | **Trường hợp không có dữ liệu** | **Trường hợp đã tạo JD nhưng không xem được**: Cần có thông báo lỗi khi tải dữ liệu để người dùng report đến IT.<br>**Trường hợp vị trí tuyển dụng chưa có profile JD nào được thiết lập**: Hệ thống hiển thị màn hình trống với biểu tượng "Không có dữ liệu!"|

        <span class="swimlane-chart-label">
          <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
          <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-3-4/swimlane_thiet_lap_mo_ta_vi_tri_tuyen_dung_jd.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Thiết lập mô tả vị trí tuyển dụng (JD)</span>
    #### 3.5. Thiết lập bài kiểm tra đầu vào (Dành cho ứng viên thực hiện trước phỏng vấn) {#toc-4-3-4}
    ??? book "Thiết lập bài kiểm tra đầu vào (Dành cho ứng viên thực hiện trước phỏng vấn)"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập bài kiểm tra đầu vào (Dành cho ứng viên thực hiện trước phỏng vấn) |
        | **Vai trò** | Người phụ trách |
        | **Tác động đến role khác** | **Handler khác**: Đồng bộ dữ liệu cấu hình trong cùng một vị trí tuyển dụng.<br>**Ứng viên**: Nhận nội dung bài kiểm tra để thực hiện trực tuyến trước khi tham gia phỏng vấn trực tiếp.  |
        | **Mô tả** | Chức năng cho phép Handler cấu hình các bộ đề kiểm tra năng lực trực tuyến. Mục đích là để gửi cho ứng viên thực hiện tại nhà hoặc trước buổi phỏng vấn nhằm sàng lọc kỹ thuật sơ bộ. Hệ thống hỗ trợ trình soạn thảo đa phương tiện (Media) và cơ chế chấm điểm tự động cho các câu hỏi trắc nghiệm. |
        | **Giao diện liên quan** | - Tab "K.Tra đầu vào" trong phần Quản lý vị trí.<br>- Chế độ chuyển đổi "Tạo" và "Đáp án".<br>- Các danh mục câu hỏi (như OOP, Kỹ năng mềm...). |
        | **Luồng thao tác chính** | **1. Chọn chế độ soạn thảo:**<br>- Gạt nút sang "Tạo" để bắt đầu viết câu hỏi hoặc sang "Đáp án" để thiết lập câu trả lời đúng và xem trước.<br>**2. Soạn thảo câu hỏi & đính kèm tài liệu:**<br>- Nhập nội dung câu hỏi vào ô trống. Có thể chèn thêm Hình ảnh, Video hoặc file âm thanh để ứng viên xem/nghe và trả lời.<br>- Chọn hình thức trả lời: Trắc nghiệm (chọn 1), Hộp kiểm (chọn nhiều), Menu thả xuống hoặc viết văn bản tự luận.<br>**3. Thiết lập điểm & Lưu dữ liệu:**<br>- Nhập số điểm cho mỗi câu (ví dụ: 5 điểm).<br>- Tự động lưu: Hệ thống sẽ tự động lưu lại ngay sau khi bạn hoàn thành xong một câu hỏi, không cần phải tìm nút Lưu tổng quát.<br>**4. Quản lý danh sách đề:**<br>- Bật/Tắt bài kiểm tra bằng nút gạt (Switch) hoặc xóa các bài không còn sử dụng. |
        | **Điều kiện** | - Người phụ trách đang thao tác trên các vị trí được Master gán quyền quản lý.<br>- Vị trí tuyển dụng phải đang ở trạng thái hoạt động. |
        | **Kết quả hiển thị** | - Tiêu đề bài kiểm tra hiển thị rõ tổng số điểm và số lượng câu hỏi hiện có.<br>- Mọi thay đổi về nội dung đề thi sẽ được cập nhật ngay lập tức cho các người phụ trách khác cùng xem. |
        | **Trường hợp không có dữ liệu** | **Trường hợp chưa có bài kiểm tra:** Hệ thống hiển thị thông báo "Không có bài kiểm tra nào" kèm nút để thêm mới. |
---
???+ info "4. Nhóm chức năng quản lý phỏng vấn"
    ### 4. Nhóm chức năng quản lý phỏng vấn (thêm tác động lên candidate và interviewer) {#toc-4-4}
    #### 4.1. Thiết lập tiêu chuẩn ứng viên {#toc-4-4-1}
    ??? book "Thiết lập tiêu chuẩn ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập tiêu chuẩn ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng giúp người phụ trách thiết lập các tiêu chuẩn để người phỏng vấn có thể đánh giá ứng viên trong quá trình phỏng vấn. Các tiêu chuẩn phỏng vấn mà người phụ trách được phép thiết lập ở chức năng / màn hình này là [`action_type : check (action kiểm tra)`]. Người phụ trách có toàn quyền xem / xóa / sửa các danh mục và nội dung chứa trong chúng (các action check). |
        | **Giao diện liên quan** | - Menu **“Quản Lý Vị trí”**.<br>- Submenu: **“Phỏng vấn”**, bao gồm các tab: **Tiêu chuẩn ứng viên**, **Các câu hỏi thông tin**, **Các vòng phỏng vấn**, **Thiết lập K.tra đầu vào**. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn vào một ví trí trên bảng **"Danh sách vị trí ứng tuyển"**.<br>2. Hệ thống điều hướng đến màn hình của submenu **Tổng quan**.<br>3. Người phụ trách chọn vào submenu **Phỏng vấn** --> chọn tab *Tiêu chuẩn ứng viên*.<br>4. Khi ở màn hình của submenu *Tiêu chuẩn ứng viên* thì người phụ trách được phép thực hiện thao tác thiết lập (thêm / xóa / sửa) các danh mục và action kiểm tra bên trong nó.<br><br>**(Lưu ý: Không cho phép người phụ trách check vào các checkbox của action check tại đây)**.<br><br>5. Khi người phụ trách xóa một danh mục hoặc một action check trong danh mục, hệ thống hiển thị popup cảnh báo để người phụ trách xác nhận. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý vị trí.<br>- Vị trí tuyển dụng đã tồn tại trong hệ thống.<br>- Khi thêm mới danh mục: không được phép để trống tên của danh mục.<br>- Khi thêm/sửa mục: tên và nội dung của danh mục / các action check bên trong phải hợp lệ (không được để trống). |
        | **Kết quả hiển thị** | - Danh mục được hiển thị và có thể thao tác mở rộng/thu gọn.<br>- Sau khi thêm / sửa / xóa, dữ liệu được cập nhật ngay trên màn hình. |
        | **Trường hợp không có dữ liệu** | - Nếu chưa có danh mục nào: hiển thị ô **“Nhập Danh Mục Mới”** để thêm và hiển thị biểu tượng thùng rỗng (*Không có dữ liệu*).<br>- Nếu danh mục chưa có nội dung bên trong: hiển thị textbox **“Nhập nội dung mới”**.<br>- Khi xóa hết danh mục: màn hình trở về trạng thái trống, hiển thị ô **“Nhập Danh Mục Mới”** để thêm và hiển thị biểu tượng thùng rỗng (*Không có dữ liệu*). |

        <span class="swimlane-chart-label">
          <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
          <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-4-1/swimlane_thiet_lap_tieu_chuan_ung_vien.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Thiết lập tiêu chuẩn ứng viên</span>
    #### 4.2. Thiết lập các vòng phỏng vấn {#toc-4-4-2}
    ??? book "Thiết lập các vòng phỏng vấn"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập các vòng phỏng vấn |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách thiết lập danh mục các vòng phỏng vấn tương ứng dành cho vị trí đã chọn, mỗi vòng phỏng vấn bao gồm 3 phần:<br>&emsp;- Tên vòng phỏng vấn và nút toggle_on-off để thay đổi trạng thái.<br>&emsp;- Tab *'Đánh giá'*: tab này cho phép người phụ trách thêm / xóa / sửa các danh mục chứa các [`action_type : evaluate (action đánh giá)`].<br>&emsp;- Tab *'Câu hỏi phỏng vấn'*: tab này cho phép người phụ trách thêm / xóa / sửa các danh mục chứa các [`action_type : instruction (action hướng dẫn)`].<br><br>*(Lưu ý: không cho phép người phụ trách thêm vào tab mới, quy định một vòng phỏng vấn chỉ bao gồm 2 tab **Đánh giá** và tab **Câu hỏi phỏng vấn**)*.|
        | **Giao diện liên quan** | - Menu **“Quản Lý Vị trí”**.<br>- Submenu: **“Phỏng vấn”**, bao gồm các tab: **Tiêu chuẩn ứng viên**, **Các câu hỏi thông tin**, **Các vòng phỏng vấn**, **Thiết lập K.tra đầu vào**. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn vào một ví trí trên bảng **"Danh sách vị trí ứng tuyển"**.<br>2. Hệ thống điều hướng đến màn hình của submenu **Tổng quan**.<br>3. Người phụ trách chọn vào submenu **Phỏng vấn** --> chọn tab *Các vòng phỏng vấn*.<br>4. Hệ thống hiển thị màn hình chính của tab *Các vòng phỏng vấn* chứa danh sách **"Vòng phỏng vấn"** nằm bên phải của màn hình.<br>5. Khi người phụ trách muốn thêm một vòng phỏng vấn, cần nhập tên của vòng phỏng vấn đó vào ô *Thêm mục (+)* và nhấn [ENTER], hệ thống lưu --> tự động gán trạng thái toggle_on --> tự động trỏ vào vòng phỏng vấn mới tạo nếu chưa focus vào item nào trước đó.<br>6. Người phụ trách có thể xem được 3 màn hình tương ứng khi chọn vào các item sau:<br><br>&emsp;- Item vòng phỏng vấn: hiển thị tiêu đề là tên của vòng phỏng vấn, mô tả của vòng phỏng vấn<br>&emsp;- Item *Đánh giá* của vòng phỏng vấn: hiển thị tiêu đề, mô tả và các danh mục chứa các [`action đánh giá`]<br>&emsp;- Item *Câu hỏi phỏng vấn* của vòng phỏng vấn: hiển thị tiêu đề, mô tả và các danh mục chứa các [`action hướng dẫn`].<br><br>7. Khi thực hiện xóa một vòng phỏng vấn (xóa các action trong các tab thì không cần xác nhận), hệ thống sẽ hiển thị popup cảnh báo và người phụ trách cần nhấn vào nút *`Xác nhận`* để hoàn thành thao tác xóa. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý vị trí.<br>- Vị trí tuyển dụng đã tồn tại trong hệ thống.<br>- Khi thêm mới danh mục: không được phép để trống tên của danh mục.<br>- Khi thêm/sửa mục: tên và nội dung của danh mục / các action hướng dẫn và đánh giá bên trong phải hợp lệ (không được để trống). |
        | **Kết quả hiển thị** | - Danh mục được hiển thị và có thể thao tác mở rộng/thu gọn, layout của một vòng phỏng vấn hoàn chỉnh đúng với mô tả.<br>- Sau khi thêm / sửa / xóa, dữ liệu được cập nhật ngay trên màn hình. |
        | **Trường hợp không có dữ liệu** | **Trường hợp chưa có bất kỳ vòng phỏng vấn nào**: hệ thống sẽ hiển thị màn hình chính trống, danh sách các vòng phỏng vấn bên phải màn hình sẽ có biểu tượng thùng rỗng.<br>**Trường hợp vòng phỏng vấn chưa được thiết lập bất kỳ action nào bên trong**: người phụ trách chọn vào các tab *Đánh giá* và *Câu hỏi phỏng vấn* và mở các item chứa các action bên trong thì chỉ thấy ô *Nhập nội dung mới*. |

        <span class="swimlane-chart-label">
          <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
          <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-4-2/swimlane_thiet_lap_cac_vong_phong_van.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Thiết lập các vòng phỏng vấn</span>
    #### 4.3. Thiết lập bài kiểm tra đầu vào {#toc-4-4-3}
    ??? book "Thiết lập bài kiểm tra đầu vào"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập bài kiểm tra đầu vào |
        | **Vai trò** | Người phụ trách |
        | **Tác động đến role khác** | Tác động đến các Handler khác trong cùng vị trí: Tất cả người phụ trách thuộc vị trí này đều có thể xem và quản lý các bài kiểm tra được thiết lập (bất kể ai là người tạo). |
        | **Mô tả** | Chức năng này cho phép người phụ trách cấu hình các bài kiểm tra chuyên môn cho từng vị trí tuyển dụng cụ thể. Hệ thống hỗ trợ đa dạng loại câu hỏi và cơ chế tự động lưu (Auto-save bằng cách lưu theo từng câu hỏi) để tối ưu hóa quá trình thiết lập. Các bài kiểm tra này sẽ được sử dụng làm căn cứ đánh giá năng lực ứng viên trong quá trình **phỏng vấn trực tiếp**. |
        | **Giao diện liên quan** | - Sub-menu "K.Tra đầu vào" trong chi tiết vị trí tuyển dụng.<br>- Nút Switch chế độ "Thiết lập" và "Xem đáp án mẫu".<br>- Danh sách bài kiểm tra (Accordion).<br>- Trình soạn thảo câu hỏi theo từng loại hình. |
        | **Luồng thao tác chính** | 1. Tiếp cận và chuyển đổi chế độ:<br>&emsp;- Người phụ trách chọn vị trí được Master gán quyền, vào mục "K.Tra đầu vào".<br>&emsp;- Sử dụng nút chuyển đổi để switch giữa mode Thiết lập (để chỉnh sửa) và mode Xem đáp án mẫu (để xem trước giao diện và đáp án).<br>2. Cấu hình bài kiểm tra:<br>&emsp;- Hệ thống hiển thị tiêu đề kèm số lượng câu hỏi hiện có của từng bài kiểm tra.<br>&emsp;- Người phụ trách chọn 01 trong 04 loại câu hỏi: Trắc nghiệm (1 đáp án), Hộp kiểm (nhiều đáp án), Dropdown (chọn từ danh sách), Văn bản (tự luận).<br>3. Cơ chế Lưu dữ liệu:<br>&emsp;- Hệ thống thực hiện tự động lưu ngay lập tức sau khi người phụ trách hoàn thành thiết lập cho mỗi câu hỏi (không cần nhấn nút Lưu tổng).<br>4. Quản lý trạng thái và xóa:<br>&emsp;- Sử dụng nút Switch trên từng bài kiểm tra để Kích hoạt hoặc Vô hiệu hóa.<br>&emsp;- Nhấn biểu tượng xóa để gỡ bỏ bài kiểm tra khỏi vị trí đang quản lý. |
        | **Điều kiện** | Tài khoản đã đăng nhập và là Người phụ trách được Master gán quyền quản lý vị trí này.<br>- Vị trí tuyển dụng đang ở trạng thái hoạt động. |
        | **Kết quả hiển thị** | - Các thay đổi được cập nhật Real-time và hiển thị đồng bộ cho toàn bộ Handler của vị trí đó.<br>- Số lượng câu hỏi ở tiêu đề bài kiểm tra tự động cập nhật khi thêm/xóa câu hỏi. |
        | **Trường hợp không có dữ liệu** | **Trường hợp vị trí chưa có bài kiểm tra:** Hệ thống hiển thị biểu tượng thùng rỗng kèm nút "Thêm bài kiểm tra mới". |

        <span class="swimlane-chart-label">
          <i class="fi fi-tr-flowchart" aria-hidden="true"></i>
          <span>Swimlane chart</span>
        </span>

        <img src="/assets/images/buddy/4-4-3/swimlane_thiet_lap_bai_kiem_tra_dau_vao.svg" alt="" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

        <span style="display:block;text-align:center;font-weight:600;">Thiết lập bài kiểm tra đầu vào</span>
    #### 4.3. Thiết lập bài kiểm tra kiến thức (Kiểm tra khi phỏng vấn trực tiếp) {#toc-4-4-3}
    ??? book "Thiết lập bài kiểm tra đầu vào (Kiểm tra khi phỏng vấn trực tiếp)"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** |  |
        | **Vai trò** |  |
        | **Mô tả** |  |
        | **Giao diện liên quan** |  |
        | **Luồng thao tác chính** |  |
        | **Điều kiện** |  |
        | **Kết quả hiển thị** |  |
        | **Trường hợp không có dữ liệu** |  |
---
???+ info "5. Nhóm chức năng quản lý đào tạo (high impact lên trainer và trainee)"
    ### 5. Nhóm chức năng quản lý đào tạo {#toc-4-5}
    #### 5.1. Quản lý quy trình đào tạo {#toc-4-5-1}
    ??? book "Quản lý quy trình đào tạo"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý quy trình đào tạo |
        | **Vai trò** | Người phụ trách |
        | **Tác động lên các vai trò khác** | - **Tác động chung**: Cả Trainer và Trainee đều sẽ nhìn thấy các quy trình/vòng đào tạo mà Người phụ trách đã thêm mới, với điều kiện quy trình đó đã được Kích hoạt.<br>- **Đối với Trainer**: Có quyền xem toàn bộ nội dung (bao gồm phần của Trainer và Trainee). Quyền chỉnh sửa phụ thuộc vào loại hoạt động (Action), nhưng tuyệt đối không được sửa dữ liệu do Người phụ trách hoặc Trainee đã nhập trước đó.<br>- **Đối với Trainee**: Chỉ xem được các nội dung dành riêng cho mình. Không được thay đổi dữ liệu do người khác điền. Quyền thực hiện/chỉnh sửa sẽ thay đổi linh hoạt dựa trên loại action cụ thể. |
        | **Mô tả** | Người phụ trách có toàn quyền quản lý các quy trình đào tạo theo từng vị trí tuyển dụng: <br>- Tạo mới, chỉnh sửa, xóa quy trình. <br>- Vô hiệu hóa/kích hoạt quy trình. <br>- Quản lý chi tiết các tiêu chuẩn trong quy trình, bao gồm: thêm, sửa, xóa, chọn loại action (Hướng dẫn, Kiểm tra, Đánh giá, Nhiệm vụ, Tiến độ). |
        | **Giao diện liên quan** | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Đào tạo" → tab "Quy trình"  |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn vị trí cần thiết lập lộ trình và truy cập vào tab Quy trình.<br>2. Quản lý danh sách: Thực hiện thêm mới, sửa tên hoặc xóa các quy trình đào tạo. Sử dụng nút gạt (Switch) để Kích hoạt (cho phép Trainer/Trainee thấy) hoặc Vô hiệu hóa quy trình.<br>3. Thiết lập tiêu chuẩn: Trong mỗi quy trình, Người phụ trách tạo ra các danh mục công việc. Mỗi danh mục chứa các hoạt động (Action) cụ thể.<br>4. Phân loại hoạt động: Người phụ trách chọn loại cho từng hoạt động: Hướng dẫn, Nhận xét, Kiểm tra, Đánh giá, Task nhập liệu, Task tiến trình, Media. |
        | **Điều kiện** | - Người phụ trách có quyền quản lý vị trí. <br>- Vị trí tồn tại trong hệ thống. |
        | **Kết quả hiển thị** | - Danh sách quy trình đào tạo hiển thị chi tiết. <br>- Người phụ trách có toàn quyền thao tác. <br>- Thông báo “Cập nhật dữ liệu thành công!” sau khi thao tác thêm / sửa hợp lệ.<br>- Dữ liệu được đồng bộ ngay lập tức tới màn hình của Trainer và Trainee nếu quy trình đang ở trạng thái Kích hoạt. |
        | **Trường hợp không có dữ liệu** | **Trường hợp chưa có quy trình**: hiển thị danh sách rỗng và nút **Thêm quy trình mới**. <br> **Trường hợp quy trình chưa được thiết lập danh mục nào**: chỉ hiển thị tên quy trình và nút Nhập tiêu chuẩn mới. |
    #### 5.2. Quản lý đầu ra đào tạo {#toc-4-5-2}
    ??? book "Quản lý đầu ra đào tạo"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý đầu ta đào tạo |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách quản lý toàn bộ các tiêu chí đầu ra của quá trình training cho vị trí tuyển dụng được chọn. Các tiêu chí đầu ra sẽ được sắp xếp vào các danh mục, Hệ thống sẽ hiển thị toàn bộ các danh mục đánh giá đã từng được thiết lập cho vị trí này.<br>**Nội dung của tài liệu là các action Đánh Giá.**<br><br>Tổng quan của cấu trúc tiêu chí đầu ra như sau:<br>&emsp;[---Danh mục chứa các tiêu chí đầu ra<br>&emsp;[------ Danh mục nội dung trong các danh mục (**các action Đánh Giá**) |
        | **Giao diện liên quan** | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Đào tạo" → tab "Đầu ra" |
        | Luồng thao tác chính | 1. Người phụ trách đăng nhập, chọn vị trí.<br>2. Người phụ trách chọn vào tab "Đầu ra".<br>3. Hệ thống hiển thị nội dung của tab "Đầu ra" là các danh mục chứa các [action_type : evaluate (`action Đánh Giá`)] đã được thiết lập sẵn, nếu không có danh mục nào thì hệ thống sẽ hiển thị biểu tượng thùng rỗng và mô tả "Chưa có nội dung đầu ra!".<br>Để tạo mới một danh mục, người phụ trách cần nhập tên của danh mục vào ô **"Nhập Danh Mục Mới"** và nhấn phím [ENTER].<br>Hệ thống sẽ cập nhật và hiển thị ngay danh mục đó trên màn hình mà không cần phải reload.<br>Để thêm mới một nội dung bên trong danh mục, người phụ trách cần nhập tên của nội dung mới vào ô **"Nhập nội dung mới"** và nhấn [ENTER], hệ thống sẽ tự động cập nhật và hiển thị và không cần phải reload.<br>Người phụ trách có thể xóa danh mục / nội dung danh mục, có thể sắp xếp lại danh mục / nội dung danh mục tùy theo mong muốn. |
        | **Điều kiện** | - Người phụ trách có quyền quản lý vị trí.<br>- Người phụ trách chọn một vị trí tuyển dụng đã tồn tại trên **"Danh sách vị trí tuyển dụng"** |
        | **Kết quả hiển thị** | - Sau khi thêm một danh mục / nội dung mới, người phụ trách sẽ thấy ngay trên màn hình mà không cần refresh lại trình duyệt.<br>- Khi xóa một danh mục  / nội dung thì phải hiện thị popup cảnh báo để người phụ trách xác nhận thao tác xóa. |
        | **Trường hợp không có dữ liệu** | **Trường hợp vị trí chưa có nội dung ở tab **Đầu ra**: hệ thống sẽ hiển thị biểu tượng thùng rỗng và dòng mô tả "Chưa có dữ liệu!".<br>**Trường hợp xóa tên của danh mục / nội dung trong danh mục**: hệ thống không cho phép để trống phần tên của danh mục / nội dung trong danh mục, khi xóa thì người phụ trách cần thêm lại một tên mới để lưu và nhấn [ENTER] |
    #### 5.3. Quản lý tài liệu đào tạo  {#toc-4-5-3}
    ??? book "Quản lý tài liệu đào tạo"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý tài liệu đào tạo |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách quản lý toàn bộ các bộ tài liệu của quá trình training cho vị trí tuyển dụng được chọn. Hệ thống sẽ hiển thị toàn bộ các bộ tài liệu đã từng được thiết lập cho vị trí này ở **"Danh sách tài liệu"** nằm bên phải của màn hình.<br>Người phụ trách được phép kích hoạt hoặc vô hiệu tài liệu, đồng nghĩa với việc **người được đào tạo** và **người đào tạo** sẽ không xem được bộ tài liệu bị vô hiệu bởi **người phụ trách**.<br>Bên trong tài liệu bao gồm một hoặc nhiều danh mục, trong mỗi danh mục sẽ chứa nội dung.<br>**Nội dung của tài liệu là các [action_type : instruction (`action Hướng Dẫn`), trong các action Hướng Dẫn này, người phụ trách sẽ được phép thêm mô tả và nội dung chi tiết (Văn bản (cho phép thêm định dạng văn bản), file đính kèm, URL)]**.<br><br>Tổng quan của cấu trúc tài liệu như sau:<br>&emsp;[---Bộ tài liệu (hiển thị trên **Danh sách tài liệu**)<br>&emsp;[------ Danh mục nội dung trong các bộ tài liệu<br>&emsp;[------------- Các action Hướng Dẫn trong các danh mục nội dung tài liệu<br>&emsp;[------------------ Các nội dung chi tiết của action Hướng Dẫn |
        | **Giao diện liên quan** | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Đào tạo" → tab "Tài liệu" |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập, chọn vị trí.<br>2. Người phụ trách chọn vào tab "Tài liệu".<br>3. Hệ thống hiển thị nội dung của tab "Tài liệu" là các danh mục chứa các [action_type : instruction (`action Hướng Dẫn`)] đã được thiết lập sẵn, nếu không có danh mục nào thì hệ thống sẽ hiển thị biểu tượng thùng rỗng và mô tả "Chưa có tài liệu!".<br>4. Các danh mục tài liệu sẽ nằm trong các bộ tài liệu, hệ thống sẽ hiển thị danh sách các bộ tài liệu đã được tạo ở **"Danh sách tài liệu"** ở phần bên phải của màn hình.<br><br>**Khi người phụ trách muốn thêm một tài liệu / danh mục / nội dung mới:**<br>1. Người phụ trách đang ở màn hình xem tài liệu của vị trí tuyển dụng đã chọn.<br>2. Tại các vị trí:<br>&emsp;- **Danh sách tài liệu**: người phụ trách cần nhập tên của bộ tài liệu mới ==> nhấn [ENTER] để hệ thống thực hiện lưu dữ liệu<br>&emsp;- **Màn hình chính chứa các danh mục nội dung của bộ tài liệu**: người phụ trách cuộn xuống cuối màn hình để thấy ô "Nhập danh mục mới" ==> nhập tên danh mục ==> nhấn [ENTER]<br>&emsp;- **Nội dung của các danh mục**: người phụ trách cần mở rộng danh mục muốn thêm nội dung ==> nhập tiêu đề cho action Hướng Dẫn.<br>&emsp;- **Chi tiết action Hướng Dẫn**: người phụ trách sau khi tạo một action Hướng Dẫn trong danh mục nội dung sẽ thấy action Hướng Dẫn có một ô *"Nhập thêm nội dung"*, ô này cho phép người phụ trách thêm vào nội dung chi tiết, chèn thêm file và URL, ngoài ra khi nhập liệu văn bản thì người phụ trách có thể tùy chỉnh định dạng của văn bản.<br><br>**Khi người phụ trách muốn chỉnh sửa một tài liệu / danh mục / nội dung mới:** Tương tự với toàn bộ quá trình thêm mới tài liệu / danh mục / nội dung, khi chỉnh sửa ở tiêu đề của tài liệu, tiêu đề danh mục hoặc nội dung chi tiết bên trong, người phụ trách bắt buộc phải thay thế bằng một nội dung hợp lệ (tức không được phép bỏ trống), sau đó người phụ trách cần nhấn [ENTER] để hệ thống thực hiện lưu lại dữ liệu mới.<br><br>**Khi người phụ trách muốn xóa một tài liệu / danh mục / nội dung mới:** khi người phụ trách xóa một bộ tài liệu / danh mục ==> hệ thống hiển thị popup cảnh báo *"Không thể khôi phục dữ liệu!"* ==> người phụ trách cần xác nhận thao tác xóa bằng việc nhấn nút "Xác nhận" để tiến hành xóa. Đối với nội dung chi tiết hoặc action Hướng Dẫn, khi xóa thì không có popup xác nhận. |
        | **Điều kiện** | - Người phụ trách có quyền quản lý vị trí.<br>- Người phụ trách chọn một vị trí tuyển dụng đã tồn tại trên **"Danh sách vị trí tuyển dụng"** |
        | **Kết quả hiển thị** | - Sau khi thêm một danh mục / nội dung mới, người phụ trách sẽ thấy ngay trên màn hình mà không cần refresh lại trình duyệt.<br>- Khi xóa một bộ tài liệu / danh mục thì phải hiện thị popup cảnh báo để người phụ trách xác nhận thao tác xóa. |
        | **Trường hợp không có dữ liệu** | **Trường hợp vị trí chưa có nội dung ở tab **Tài liệu****: hệ thống sẽ hiển thị biểu tượng thùng rỗng và dòng mô tả "Chưa có dữ liệu!" ở **"Danh sách tài liệu"**. |
---
???+ info "6. Nhóm chức năng quản lý sau đào tạo (high impact giữa trainee và handler)"
    ### 6. Nhóm chức năng quản lý sau đào tạo {#toc-4-6}
    #### 6.1. Quản lý quá trình thử việc sau khi hoàn thành đào tạo {#toc-4-6-1}
    ??? book "Quản lý quá trình thử việc sau khi hoàn thành đào tạo"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý quá trình thử việc sau khi hoàn thành đào tạo |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách thiết lập các tiêu chí dành cho quá trình sau đào tạo (review ứng viên), các tiêu chí này sẽ được dùng ở phần chi tiết ứng viên.<br>Cấu trúc của danh mục tiêu chí thử việc:<br>&emsp;[--- Danh mục tiêu chí thử việc <br>&emsp;[------ Nội dung của danh mục tiêu chí thử việc  |
        | **Giao diện liên quan** | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Sau đào tạo" → tab "Thử việc" |
        | **Luồng thao tác chính** | 1.Người phụ trách đăng nhập, chọn vị trí.<br>2. Người phụ trách chọn vào tab "Thử việc" trong submenu **Sau đào tạo**.<br>3. Hệ thống hiển thị giao diện của tab "Thử việc".<br><br>**Để thêm mới danh mục thử việc:**<br>1. Người phụ trách nhập tên của danh mục vào ô *"Nhập danh mục mới"*<br>2. Người phụ trách nhấn [ENTER] để hệ thống thực hiện lưu trữ dữ liệu<br>3. Hệ thống focus vào danh mục mới tạo (nếu như người phụ trách chưa chọn danh mục nào để xem trước đó) và tự động mở rộng danh mục, lúc này danh mục sẽ có số [0] để biểu thị danh mục không có nội dung bên trong.<br>4. Người phụ trách sẽ thấy được ô **[+] Thêm nội dung** để có thể thêm mới nội dung vào danh mục thử việc vừa tạo<br><br>**Xóa nội dung / danh mục thử việc**:<br>1. Để xóa nội dung của một danh mục thử việc, người phụ trách mở rộng danh mục ==> chọn vào biểu tượng `🗑️` ở tại mỗi item để xóa (Không có popup xác nhận).<br>2. Để xóa một danh mục thử việc, người phụ trách chọn vào biểu tượng `🗑️` ở tại mỗi danh mục để xóa, hệ thống sẽ hiển thị popup cảnh báo ==> người phụ trách cần nhấn nút *Xác nhận* trên popup để xóa. |
        | **Điều kiện** | - Người phụ trách có quyền quản lý vị trí.<br>- Người phụ trách chọn một vị trí tuyển dụng đã tồn tại trên **"Danh sách vị trí tuyển dụng"** |
        | **Kết quả hiển thị** | - Sau khi thêm một danh mục / nội dung mới, người phụ trách sẽ thấy ngay trên màn hình mà không cần refresh lại trình duyệt. |
        | **Trường hợp không có dữ liệu** | **Trường hợp không có danh mục nào**: Hệ thống hiển thị màn hình có biểu tượng thùng rỗng và mô tả "Không có dữ liệu!". |
    #### 6.2. Quản lý các tiêu chí đánh giá sau đào tạo {#toc-4-6-2}
    ??? book "Quản lý các tiêu chí đánh giá sau đào tạo"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý các tiêu chí đánh giá sau đào tạo |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách thiết lập các tiêu chí đánh giá ứng viên sau đào tạo.<br>Cấu trúc của danh mục đánh giá:<br>&emsp;[--- Danh mục đánh giá ứng viên <br>&emsp;[------ Nội dung trong danh mục đánh giá ứng viên  |
        | **Giao diện liên quan** | - Menu ***"Quản Lý Vị Trí"*** → chọn vị trí từ bảng **"Danh sách vị trí ứng tuyển"** → truy cập submenu "Sau đào tạo" → tab "Đánh giá" |
        | **Luồng thao tác chính** | 1.Người phụ trách đăng nhập, chọn vị trí.<br>2. Người phụ trách chọn vào tab "Đánh giá" trong submenu **Sau đào tạo**.<br>3. Hệ thống hiển thị giao diện của tab "Đánh giá" với tiêu đề **CÁC TIÊU CHÍ ĐÁNH GIÁ**.<br><br>**Để thêm mới danh mục đánh giá:**<br>1. Người phụ trách nhập tên của danh mục vào ô *"Nhập danh mục mới"*<br>2. Người phụ trách nhấn [ENTER] để hệ thống thực hiện lưu trữ dữ liệu<br>3. Hệ thống focus vào danh mục mới tạo (nếu như người phụ trách chưa chọn danh mục nào để xem trước đó) và tự động mở rộng danh mục, lúc này danh mục sẽ có thêm phần 5 ngôi sao với màu mặc định của hệ thống đang dùng.<br>4. Người phụ trách sẽ thấy được ô **[+] Thêm nội dung** để có thể thêm mới nội dung vào danh mục đánh giá vừa tạo<br><br>**Xóa nội dung / danh mục đánh giá**:<br>1. Để xóa nội dung của một danh mục đánh giá, người phụ trách mở rộng danh mục ==> chọn vào biểu tượng `🗑️` ở tại mỗi item để xóa (Không có popup xác nhận).<br>2. Để xóa một danh mục đánh giá, người phụ trách chọn vào biểu tượng `🗑️` ở tại mỗi danh mục để xóa, hệ thống sẽ hiển thị popup cảnh báo ==> người phụ trách cần nhấn nút *Xác nhận* trên popup để xóa. |
        | **Điều kiện** | - Người phụ trách có quyền quản lý vị trí.<br>- Người phụ trách chọn một vị trí tuyển dụng đã tồn tại trên **"Danh sách vị trí tuyển dụng"** |
        | **Kết quả hiển thị** | - Sau khi thêm một danh mục / nội dung mới, người phụ trách sẽ thấy ngay trên màn hình mà không cần refresh lại trình duyệt. |
        | **Trường hợp không có dữ liệu** | **Trường hợp không có danh mục nào**: Hệ thống hiển thị màn hình có biểu tượng thùng rỗng và mô tả "Không có dữ liệu!". |
---
???+ info "7. "
    ### 7.  {#toc-4-7}
    #### 7.1.  {#toc-4-7-1}
    ??? book ""
        | Trường | Nội dung |
        | ------ | -------- |
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
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem lịch/danh sách phỏng vấn của các ứng viên |
        | **Vai trò** | - Người phụ trách, Người phỏng vấn |
        | **Mô tả** | Người phụ trách: <br>Cho phép người phụ trách xem toàn bộ lịch phỏng vấn của các ứng viên mình quản lý. Chức năng này chỉ hỗ trợ xem, không cho phép chỉnh sửa dữ liệu.<br><br>Người phỏng vấn: <br>Người phỏng vấn có thể xem lịch phỏng vấn tại menu "Lịch Phỏng Vấn", và chỉ nhìn thấy những ứng viên mà người phụ trách đã gán cho mình. Người phỏng vấn được phép hủy lịch phỏng vấn của ứng viên đó tại popup "Chi tiết ca phỏng vấn" sau khi chọn vào một buổi phỏng vấn cụ thể. <br><br>Các chế độ hiển thị chung:<br> (1) Xem dạng lịch: dữ liệu hiển thị theo tuần, mỗi ngày chia thành 11 khung giờ (từ 9h đến 20h). Nếu có lịch phỏng vấn, khung giờ tương ứng được highlight kèm số lượng ứng viên.<br> (2) Xem dạng danh sách: dữ liệu hiển thị dưới dạng bảng với các cột Ngày, Giờ bắt đầu, Số lượng ứng viên, Trạng thái. Người dùng có thể chuyển trang để xem toàn bộ danh sách.<br><br>Ở cả hai chế độ, khi nhấn vào một ca phỏng vấn, hệ thống mở popup "Chi tiết ca phỏng vấn" hiển thị:<br> - Thời gian phỏng vấn<br> - Số lượng ứng viên<br> - Thông tin ứng viên: tên, giờ phỏng vấn, vị trí ứng tuyển.<br><br>Người dùng (tùy vai trò) có thể thay đổi chế độ hiển thị và tuần để phù hợp với nhu cầu. |
        | **Giao diện liên quan** | 1. Trang "Lịch Phỏng Vấn".<br>2. Popup "Chi tiết ca phỏng vấn".<br>3. Chế độ "Xem dạng lịch".<br>4. Chế độ "Xem dạng danh sách". |
        | **Luồng thao tác chính** | 1. Người dùng (phụ trách hoặc phỏng vấn) điều hướng đến trang "Lịch Phỏng Vấn" từ menu.<br>2. Hệ thống mặc định hiển thị ở chế độ 'Xem dạng lịch'.<br>3. Người dùng có thể:<br> - Nhấn vào ô được highlight để xem popup chi tiết.<br> - Nhấn vào biểu tượng ≡ để chuyển sang chế độ 'Xem dạng danh sách'.<br>4. Ở chế độ danh sách, hệ thống hiển thị bảng dữ liệu "Lịch phỏng vấn" với đầy đủ thông tin và hỗ trợ phân trang.<br>5. Người phụ trách: chỉ xem dữ liệu, không chỉnh sửa.<br>6. Người phỏng vấn: có thể hủy lịch phỏng vấn với ứng viên được gán tại popup "Chi tiết ca phỏng vấn".<br>7. Người dùng có thể thay đổi tuần để xem trước hoặc kiểm tra lại lịch phỏng vấn. |
        | **Điều kiện** | - Người phụ trách đăng nhập vào tài khoản có phân quyền tương đương và quản lý ít nhất một ứng viên.<br>- Người phỏng vấn đăng nhập vào tài khoản có phân quyền tương đương và được người phụ trách gán cho ít nhất một ứng viên có lịch phỏng vấn. |
        | **Kết quả hiển thị** | - Ở chế độ lịch: hệ thống hiển thị theo tuần với các khung giờ được highlight.<br>- Ở chế độ danh sách: hệ thống hiển thị bảng dữ liệu với các cột ngày, giờ, số lượng ứng viên, trạng thái.<br>- Khi nhấn vào ca phỏng vấn: popup chi tiết xuất hiện.<br> + Người phụ trách: chỉ xem.<br> + Người phỏng vấn: có thêm chức năng Hủy lịch phỏng vấn đối với ứng viên được gán. |
        | **Trường hợp không có dữ liệu** | - Ở chế độ lịch: không có ô nào được highlight.<br>- Ở chế độ danh sách: hệ thống hiển thị thông báo "Bảng dữ liệu này đang trống" kèm biểu tượng thùng rỗng. |
    #### 1.2. Xem lịch sử phỏng vấn {#toc-5-1-2}
    ??? book "Xem lịch sử phỏng vấn"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem lịch sử phỏng vấn |
        | **Vai trò** | Người phỏng vấn |
        | **Mô tả** | Cho phép Người phỏng vấn xem lại toàn bộ danh sách ứng viên đã hoàn thành phỏng vấn với mình. <br>Người phỏng vấn chỉ nhìn thấy những ứng viên mà Người phụ trách đã gán cho.<br><br>Chức năng hiển thị dưới dạng bảng "Danh sách ứng viên đã phỏng vấn" với cấu trúc và giao diện tương tự bảng "Danh sách ứng viên", hỗ trợ:<br> - Tìm kiếm ứng viên theo tên, email, số điện thoại.<br> - Lọc ứng viên theo trạng thái (VD: Đạt, Không đạt, Đang chờ đánh giá).<br><br>Khi Người phỏng vấn bấm chọn một ứng viên, hệ thống hiển thị màn hình "Chi tiết ứng viên", bao gồm các thông tin cơ bản:<br> - Họ tên ứng viên<br> - Vị trí ứng tuyển<br> - Thời gian phỏng vấn<br> - Kết quả phỏng vấn<br> - Các thông tin bổ sung khác mà Người phụ trách đã công khai.<br><br>Toàn bộ dữ liệu chỉ ở chế độ xem, Người phỏng vấn không thể chỉnh sửa. |
        | **Giao diện liên quan** | 1. Trang "Danh sách ứng viên đã phỏng vấn".<br>2. Bảng "Danh sách ứng viên đã phỏng vấn".<br>3. Trang "Chi tiết ứng viên". |
        | **Luồng thao tác chính** | 1. Người phỏng vấn điều hướng đến menu "Lịch sử phỏng vấn".<br>2. Hệ thống hiển thị bảng "Danh sách ứng viên đã phỏng vấn" mặc định với dữ liệu ứng viên đã phỏng vấn.<br>3. Người phỏng vấn có thể:<br> - Sử dụng thanh tìm kiếm để tìm ứng viên.<br> - Dùng bộ lọc để lọc theo trạng thái.<br> - Nhấn vào một ứng viên trong bảng để mở trang "Chi tiết ứng viên".<br>4. Tại trang "Chi tiết ứng viên", hệ thống hiển thị đầy đủ thông tin cơ bản về ứng viên như: Họ và tên, vị trí ứng tuyển, thời gian phỏng vấn gần nhất (chỉ xem). |
        | **Điều kiện** | - Người phỏng vấn đăng nhập bằng tài khoản hợp lệ.<br>- Có ít nhất một ứng viên được gán cho Người phỏng vấn và có buổi phỏng vấn được lên lịch. |
        | **Kết quả hiển thị** | - Bảng "Danh sách ứng viên đã phỏng vấn" hiển thị dữ liệu ứng viên theo phân quyền.<br>- Khi chọn một ứng viên, trang "Chi tiết ứng viên" xuất hiện với thông tin chỉ đọc. |
        | **Trường hợp không có dữ liệu** | - Nếu chưa có ứng viên nào đã phỏng vấn, hệ thống hiển thị thông báo "Bảng dữ liệu này trống." kèm biểu tượng thùng rỗng. |
---
???+ info "2. Xem thông tin về ứng viên"
    ### 2. Xem thông tin về ứng viên {#toc-5-2}
    #### 2.1. Xem thông tin cá nhân ứng viên {#toc-5-2-1}
    ??? book "Xem chi tiết thông tin ứng viên (Người phỏng vấn)"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem thông tin ứng viên |
        | **Vai trò** | Người phỏng vấn |
        | **Mô tả** | Người phỏng vấn có thể xem thông tin chi tiết của ứng viên được phân công phỏng vấn để chuẩn bị trước buổi phỏng vấn. <br><br>- Tại tab “Thông tin ứng viên”: hiển thị các thông tin cần thiết như Tên ứng viên, Vị trí ứng tuyển, Trạng thái ứng tuyển, Người phụ trách, Người đào tạo, CV, bằng cấp và lịch làm việc dự kiến. <br>- Người phỏng vấn chỉ có quyền xem, không thể chỉnh sửa hay xóa dữ liệu. |
        | **Giao diện liên quan** | - Menu Ứng viên hoặc Lịch phỏng vấn → chọn ứng viên.<br>- Màn hình Chi tiết ứng viên → tab Thông tin ứng viên |
        | **Luồng thao tác chính** | 1. Người phỏng vấn đăng nhập hệ thống.<br>2. Vào menu Ứng viên hoặc Lịch phỏng vấn, chọn ứng viên.<br>3. Xem thông tin tại tab Thông tin ứng viên. |
        | **Điều kiện** | - Người phỏng vấn được gán phỏng vấn ứng viên.<br>- Ứng viên tồn tại trong hệ thống. |
        | **Kết quả hiển thị** | Hiển thị chi tiết hồ sơ ứng viên với đầy đủ thông tin phục vụ phỏng vấn. |
        | **Trường hợp không có dữ liệu** | Thông tin nào chưa có sẽ hiển thị trống. |
    #### 2.2. Xem kết quả bài kiểm tra của ứng viên {#toc-5-2-2}
    ??? book "Xem lại kết quả kiểm tra ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem lại kết quả kiểm tra ứng viên |
        | **Vai trò** | Người phỏng vấn |
        | **Mô tả** | Chức năng cho phép người phụ trách xem lại kết quả các bài kiểm tra đầu vào mà ứng viên đã thực hiện. <br><br>Người phụ trách có thể truy cập từ thẻ **Thông tin ứng viên** trong màn hình **Chi tiết ứng viên**, nhấn nút **Kiểm tra đầu vào** để mở popup **Bài kiểm tra ứng viên**. Tại popup này, người phụ trách có thể tìm kiếm, chọn bài kiểm tra, và xem chi tiết kết quả của bài kiểm tra đã chọn. |
        | **Giao diện liên quan** | - Menu **Ứng viên** → bảng **Danh sách ứng viên** <br>- Màn hình **Chi tiết ứng viên** → thẻ **Thông tin ứng viên** <br>- Popup **Bài kiểm tra ứng viên** (hiển thị danh sách các bài kiểm tra đã thực hiện) <br>- Màn hình/Popup hiển thị chi tiết kết quả kiểm tra |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập và chọn menu **Ứng viên**. <br>2. Trên bảng **Danh sách ứng viên**, chọn một ứng viên cụ thể. <br>3. Hệ thống mở màn hình **Chi tiết ứng viên**. <br>4. Người phụ trách chọn thẻ **Thông tin ứng viên**. <br>5. Tại đây, nhấn nút **Kiểm tra đầu vào**. <br>6. Hệ thống mở popup **Bài kiểm tra ứng viên** hiển thị danh sách các bài kiểm tra đã thực hiện. <br>7. Người phụ trách có thể sử dụng thanh tìm kiếm trong popup để tìm bài kiểm tra theo tên hoặc ngày thực hiện. <br>8. Chọn một bài kiểm tra từ danh sách. <br>9. Hệ thống hiển thị chi tiết kết quả của bài kiểm tra (bao gồm: điểm số, thời gian làm bài, ngày thi, chi tiết các câu trả lời nếu có). |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền xem thông tin ứng viên. <br>- Ứng viên đã tồn tại trong hệ thống. <br>- Ứng viên có dữ liệu về kết quả kiểm tra. |
        | **Kết quả hiển thị** | - Popup **Bài kiểm tra ứng viên** hiển thị danh sách các bài kiểm tra đã thực hiện. <br>- Khi chọn một bài kiểm tra, hệ thống hiển thị đầy đủ thông tin chi tiết về kết quả: <br>&emsp;+ Tên bài kiểm tra <br>&emsp;+ Điểm số đạt được <br>&emsp;+ Thời gian làm bài <br>&emsp;+ Ngày thi <br>&emsp;+ Nội dung câu hỏi & câu trả lời. |
        | **Trường hợp không có dữ liệu** | - Nếu ứng viên chưa thực hiện bài kiểm tra nào: popup hiển thị thông báo *“Không có bài kiểm tra”*. <br>- Nếu tìm kiếm không ra kết quả: hiển thị thông báo *“Không có bài kiểm tra”*. |
    #### 2.3. Xem câu trả lời của ứng viên {#toc-5-2-3}
    ??? book "Xem câu trả lời của ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem câu trả lời của ứng viên |
        | **Vai trò** | Người phỏng vấn |
        | **Mô tả** | Chức năng cho phép người phụ trách xem lại toàn bộ nội dung phản hồi của ứng viên và đánh giá từ người phỏng vấn sau khi ứng viên hoàn thành buổi phỏng vấn. <br><br>Phản hồi được trình bày theo 2 khía cạnh: (1) nội dung phỏng vấn theo bộ câu hỏi, và (2) đánh giá tổng quan theo tiêu chí, nhằm giúp người phụ trách có cái nhìn đầy đủ và khách quan hơn về năng lực ứng viên. |
        | **Giao diện liên quan** | - Menu **Ứng viên** → bảng **Danh sách ứng viên** <br>- Màn hình **Chi tiết ứng viên** → thẻ **Phỏng vấn** <br>- Nút **Xem chi tiết** trên danh sách buổi phỏng vấn <br>- Màn hình **Phỏng vấn ứng viên** (gồm 2 tab: **Câu hỏi phỏng vấn**, **Đánh giá**) |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập và chọn menu **Ứng viên**. <br>2. Trên bảng **Danh sách ứng viên**, chọn một ứng viên cụ thể. <br>3. Hệ thống mở màn hình **Chi tiết ứng viên**. <br>4. Người phụ trách chọn thẻ **Phỏng vấn** để xem danh sách các buổi phỏng vấn của ứng viên. <br>5. Tại buổi phỏng vấn đã hoàn thành, nhấn nút **Xem chi tiết**. <br>6. Hệ thống điều hướng sang màn hình **Phỏng vấn ứng viên**. <br>7. Tại đây, có 2 tab: <br>&emsp;+ **Câu hỏi phỏng vấn**: hiển thị bộ câu hỏi đã sử dụng trong buổi phỏng vấn và đánh giá của người phỏng vấn cho từng câu hỏi (Không tốt / Trung bình / Khá / Tốt). <br>&emsp;+ **Đánh giá**: hiển thị các nhóm tiêu chí đánh giá. Người phụ trách có thể xem % đạt tiêu chuẩn tổng quan, mở rộng từng nhóm tiêu chí để xem chi tiết tiêu chí con cùng với đánh giá của người phỏng vấn (Xuất sắc / Tốt / Khá tốt / Trung bình / Không tốt). |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền truy cập thông tin ứng viên. <br>- Ứng viên đã tham gia ít nhất một buổi phỏng vấn. <br>- Buổi phỏng vấn được chọn đã hoàn thành và có dữ liệu đánh giá từ người phỏng vấn. |
        | **Kết quả hiển thị** | - Danh sách buổi phỏng vấn trong thẻ **Phỏng vấn** của màn hình **Chi tiết ứng viên**. <br>- Màn hình **Phỏng vấn ứng viên** hiển thị chi tiết phản hồi theo 2 tab: <br>&emsp;- **Câu hỏi phỏng vấn**: danh sách câu hỏi & mức đánh giá cho từng câu hỏi. <br>&emsp;- **Đánh giá**: kết quả tổng quan % đạt tiêu chuẩn, danh sách nhóm tiêu chí, khả năng mở rộng để xem tiêu chí con và chi tiết đánh giá. |
        | **Trường hợp không có dữ liệu** | - Nếu ứng viên chưa có buổi phỏng vấn nào: không có buổi phỏng vấn nào trong thẻ **Phỏng vấn** có nút "Xem chi tiết". <br>- Nếu không có đánh giá nào được nhập: màn hình **Phỏng vấn ứng viên** và **Đánh giá** sẽ không có mục/ tiêu chí nào được đánh dấu, thanh tính % ở màn hình **Đánh giá** sẽ hiển thị 0%. |
    #### 2.4. Xem lại buổi phỏng vấn ứng viên {#toc-5-2-4}
    ??? book "Xem lại buổi phỏng vấn của ứng viên (Người phỏng vấn)"
          | Trường | Nội dung |
          | ------ | -------- |
          | **Tên chức năng** | Xem lại buổi phỏng vấn của ứng viên |
          | **Vai trò** | Người phỏng vấn |
          | **Mô tả** | Người phỏng vấn có thể xem lại các buổi phỏng vấn mà mình được phân công, bao gồm câu hỏi, kết quả bài kiểm tra, câu trả lời ứng viên, và có thể gán trạng thái cho các tiêu chí phỏng vấn. |
          | **Giao diện liên quan** | - Trang **Chi tiết ứng viên** (truy cập từ **Danh sách ứng viên đã phỏng vấn**) → nút **“Xem chi tiết”** tại các buổi phỏng vấn trước đó. |
          | **Luồng thao tác chính** | 1. Người phỏng vấn đăng nhập và truy cập **Chi tiết ứng viên** từ **Lịch phỏng vấn** hoặc **Danh sách ứng viên đã phỏng vấn**.<br>2. Chọn buổi phỏng vấn đã hoàn thành → nhấn **“Xem chi tiết”**.<br>3. Hệ thống mở trang **Phỏng vấn ứng viên** với 2 thẻ:<br> a. **Câu hỏi phỏng vấn**: xem lại toàn bộ câu hỏi, kết quả làm bài kiểm tra, câu trả lời ứng viên.<br> b. **Đánh giá**: xem và gán trạng thái cho các tiêu chí phỏng vấn được thiết lập sẵn. |
          | **Điều kiện** | - Người phỏng vấn đã đăng nhập.<br>- Người phỏng vấn chỉ có thể xem lại buổi phỏng vấn của các ứng viên được gán cho mình.<br>- Ứng viên có ít nhất một buổi phỏng vấn hoàn thành. |
          | **Kết quả hiển thị** | - Người phỏng vấn có thể xem lại chi tiết buổi phỏng vấn (câu hỏi, câu trả lời, kết quả kiểm tra).<br>- Người phỏng vấn có thể gán trạng thái cho từng tiêu chí đánh giá. |
          | **Trường hợp không có dữ liệu** | - Nếu ứng viên chưa có buổi phỏng vấn hoàn thành → không có nút **“Xem chi tiết”**.<br>- Nếu người phỏng vấn không được gán cho ứng viên → không thấy dữ liệu phỏng vấn của ứng viên đó. |
---
## VI. Đặc tả chức năng dành cho Trainer
???+ info "1. Xem thông tin về ứng viên"
    ### 1. Xem thông tin về ứng viên {#toc-6-1}
    #### 1.1. Xem thông tin cá nhân ứng viên {#toc-6-1-1}
    ??? book "Xem thông tin cá nhân ứng viên"
          | Trường | Nội dung |
          | ------ | -------- |
          | **Tên chức năng** | Xem thông tin cá nhân ứng viên |
          | **Vai trò** | Người đào tạo |
          | **Mô tả** | Người đào tạo có thể xem thông tin chi tiết của ứng viên đã được phân công đào tạo. <br><br>- Tại tab “Thông tin ứng viên”: hiển thị các thông tin cơ bản như Tên ứng viên, Vị trí ứng tuyển, Trạng thái ứng tuyển, Trạng thái đào tạo, Người phụ trách, CV, bằng cấp, lịch làm việc dự kiến. <br>- Người đào tạo chỉ có quyền xem, không được chỉnh sửa hoặc quản lý tài khoản ứng viên. |
          | **Giao diện liên quan** | - Menu Danh sách đào tạo → chọn ứng viên.<br>- Màn hình Chi tiết ứng viên → tab Thông tin ứng viên |
          | **Luồng thao tác chính** | 1. Người đào tạo đăng nhập hệ thống.<br>2. Vào menu Danh sách đào tạo, chọn ứng viên.<br>3. Xem thông tin tại tab Thông tin ứng viên. |
          | **Điều kiện** | - Người đào tạo được gán đào tạo ứng viên.<br>- Ứng viên tồn tại trong hệ thống. |
          | **Kết quả hiển thị** | Hiển thị chi tiết hồ sơ ứng viên phục vụ đào tạo. |
          | **Trường hợp không có dữ liệu** | Các trường thông tin chưa bổ sung sẽ để trống. |
    #### 1.2. Xem tất cả các ứng viên được gán {#toc-6-1-2}
    ??? book "Xem ứng viên được gán trách nhiệm"
          | Trường | Nội dung |
          | ------ | -------- |
          | **Tên chức năng** | Xem ứng viên được gán trách nhiệm đào tạo |
          | **Vai trò** | Người đào tạo |
          | **Mô tả** | Khi được gán vào một ứng viên, người đào tạo tự động thấy ứng viên đó trong menu Danh Sách Đào Tạo. Người đào tạo chỉ có quyền xem thông tin cơ bản của ứng viên, không thể chỉnh sửa dữ liệu như họ tên, email, trạng thái hồ sơ. Người đào tạo chỉ có thể thao tác trong phạm vi đào tạo (ví dụ: cập nhật tiến trình đào tạo nếu hệ thống hỗ trợ). |
          | **Giao diện liên quan** | - Menu Danh Sách Đào Tạo → bảng ứng viên đào tạo <br>- Màn hình Chi tiết ứng viên (chỉ đọc) |
          | **Luồng thao tác chính** | 1. Người đào tạo đăng nhập hệ thống.<br>2. Vào menu Danh Sách Đào Tạo.<br>3. Xem danh sách các ứng viên được gán.<br>4. Chọn một ứng viên để xem hồ sơ (chỉ đọc). |
          | **Điều kiện** | - Người đào tạo đã được người phụ trách gán vào ứng viên.<br>- Người đào tạo đăng nhập có quyền xem menu Danh Sách Đào Tạo. |
          | **Kết quả hiển thị** | - Menu Danh Sách Đào Tạo hiển thị ứng viên được gán.<br>- Người đào tạo có thể xem thông tin ứng viên nhưng không thể chỉnh sửa dữ liệu cơ bản. |
          | **Trường hợp không có dữ liệu** | - Nếu người đào tạo chưa được gán ứng viên nào: bảng Danh Sách Đào Tạo hiển thị thông báo “Bảng này hiện đang trống!”. |
---
???+ info "2. Cụm chức năng quản lý đào tạo"
    ### 2. Cụm chức năng quản lý đào tạo {#toc-6-2}
    #### 2.1. Quản lý và đánh giá quy trình đào tạo {#toc-6-2-1}
    ??? book "Quản lý và đánh giá quy trình đào tạo"
          | Trường | Nội dung |
          | ------ | -------- |
          | **Tên chức năng** | Quản lý và đánh giá quy trình đào tạo |
          | **Vai trò** | Người đào tạo |
          | **Mô tả** | Người đào tạo theo dõi và quản lý tiến trình đào tạo của ứng viên đã được gán: <br>- Xem quy trình và danh sách buổi đào tạo. <br>- Quyết định buổi nào hiển thị hoặc ẩn với người được đào tạo. <br>- Xem chi tiết tiêu chuẩn, mở rộng danh mục và tiêu chí con. <br>- Upload file bổ sung. <br>- Đánh giá từng tiêu chuẩn đào tạo (ví dụ: đạt/không đạt, nhận xét). |
          | **Giao diện liên quan** | - Menu Danh sách đào tạo → chọn ứng viên → Sub-menu Lịch trình → Quy trình & buổi đào tạo |
          | **Luồng thao tác chính** | 1. Người đào tạo đăng nhập và chọn menu Danh sách đào tạo. <br>2. Chọn một ứng viên trong danh sách. <br>3. Truy cập sub-menu Lịch trình, hệ thống hiển thị quy trình & buổi đào tạo. <br>4. Người đào tạo có thể: <br> - Quyết định buổi nào hiển thị/ẩn. <br> - Xem chi tiết tiêu chuẩn, tiêu chí. <br> - Upload file bổ sung. <br> - Đánh giá từng tiêu chuẩn. |
          | **Điều kiện** | - Người đào tạo đã được gán cho ứng viên. |
          | **Kết quả hiển thị** | - Danh sách quy trình & buổi đào tạo hiển thị rõ ràng. <br>- Người đào tạo có thể thao tác trong phạm vi cho phép. <br>- Hệ thống hiển thị thông báo thành công sau khi upload/đánh giá. |
          | **Trường hợp không có dữ liệu** | - Nếu ứng viên chưa được gán quy trình: bảng hiển thị thông báo “Ứng viên chưa được gán chương trình đào tạo”. <br>- Nếu quy trình không có tiêu chuẩn: danh sách rỗng. |
    #### 2.2. Đánh giá đầu ra đào tạo {#toc-6-2-2}
    ??? book "Đánh giá đầu ra đào tạo"
          | Trường | Nội dung |
          | ------ | -------- |
          | **Tên chức năng** | Đánh giá đầu ra đào tạo |
          | **Vai trò** | Người đào tạo |
          | **Mô tả** | Người đào tạo xem các tiêu chuẩn đầu ra gắn với vị trí ứng viên đang đào tạo và đánh giá mức độ đạt được theo 4 thang: Không tốt, Trung bình, Khá tốt, Tốt. Kết quả được lưu lại để phục vụ quản lý tiến trình đào tạo. |
          | **Giao diện liên quan** | - Menu Danh sách đào tạo → chọn ứng viên → Tab Đào tạo → mục Đầu ra |
          | **Luồng thao tác chính** | 1. Người đào tạo đăng nhập, vào Danh sách đào tạo. <br>2. Chọn ứng viên cần theo dõi. <br>3. Truy cập tab Đào tạo → mục Đầu ra. <br>4. Xem danh sách tiêu chuẩn đầu ra. <br>5. Đánh giá từng tiêu chuẩn theo thang 4 mức. <br>6. Nhấn Lưu để ghi nhận kết quả. |
          | **Điều kiện** | - Người đào tạo được gán cho ứng viên. <br>- Ứng viên đã có vị trí với tiêu chuẩn đầu ra. |
          | **Kết quả hiển thị** | - Danh sách tiêu chuẩn đầu ra hiển thị kèm các tùy chọn đánh giá. <br>- Sau khi lưu, kết quả được cập nhật vào hồ sơ đào tạo ứng viên. |
          | **Trường hợp không có dữ liệu** | - Nếu chưa có tiêu chuẩn: hiển thị thông báo “Chưa có tiêu chuẩn đầu ra cho vị trí này”. |
---
## VII. Đặc tả chức năng dành cho Trainee
???+ info "1. Cụm chức năng dành cho Trainee"
    ### 1. Cụm chức năng dành cho Trainee {#toc-7-1}
    #### 1.1. Xem quy trình đào tạo {#toc-7-1-1}
    ??? book "Xem quy trình đào tạo"
          | Trường | Nội dung |
          | ------ | -------- |
          | **Tên chức năng** | Xem quy trình đào tạo |
          | **Vai trò** | Người được đào tạo |
          | **Mô tả** | Người được đào tạo có thể: <br>- Xem quy trình và các buổi đào tạo mà người đào tạo cho phép hiển thị. <br>- Theo dõi lịch trình đào tạo. <br>- Xem chi tiết tiêu chí. <br>- Tải file tài liệu được người đào tạo cung cấp. |
          | **Giao diện liên quan** | - Menu Lịch trình → chọn buổi đào tạo → xem nội dung & tài liệu |
          | **Luồng thao tác chính** | 1. Người được đào tạo đăng nhập và chọn menu Lịch trình. <br>2. Hệ thống hiển thị danh sách quy trình & buổi đào tạo được mở quyền. <br>3. Người được đào tạo chọn một buổi đào tạo để xem chi tiết. <br>4. Có thể xem tiêu chí chi tiết và tải file tài liệu liên quan. |
          | **Điều kiện** | - Người được đào tạo có tài khoản hợp lệ và đang trong quá trình đào tạo. |
          | **Kết quả hiển thị** | - Người được đào tạo thấy danh sách buổi đào tạo được mở. <br>- Có thể xem chi tiết tiêu chí và tải tài liệu. |
          | **Trường hợp không có dữ liệu** | - Nếu chưa được gán quy trình đào tạo: hiển thị thông báo “Ứng viên chưa được gán chương trình đào tạo”. <br>- Nếu chưa có buổi đào tạo nào hiển thị: danh sách rỗng. |
    #### 1.2. Xem mục tiêu (đầu ra) đào tạo {#toc-7-1-2}
    ??? book "Xem mục tiêu (đầu ra) đào tạo (Người được đào tạo)"
          | Trường | Nội dung |
          | ------ | -------- |
          | **Tên chức năng** | Xem mục tiêu (đầu ra) đào tạo |
          | **Vai trò** | Người được đào tạo |
          | **Mô tả** | Người được đào tạo có thể xem các tiêu chuẩn đầu ra của vị trí, bao gồm: <br>- Danh mục yêu cầu đầu ra hiển thị thành cụm rõ ràng. <br>- Khi mở rộng danh mục, hiển thị các tiêu chí con và mức đánh giá do Người đào tạo nhập. <br>- Chỉ có quyền xem, không thể chỉnh sửa. |
          | **Giao diện liên quan** | - Menu Mục tiêu đào tạo |
          | **Luồng thao tác chính** | 1. Người được đào tạo đăng nhập và chọn menu Mục tiêu đào tạo. <br>2. Hệ thống hiển thị danh sách mục tiêu đầu ra. <br>3. Người được đào tạo có thể mở rộng danh mục để xem các tiêu chí con và đánh giá. |
          | **Điều kiện** | - Người được đào tạo có tài khoản hợp lệ. <br>- Ứng viên đã được gán vào quy trình đào tạo có tiêu chuẩn đầu ra. |
          | **Kết quả hiển thị** | - Danh sách tiêu chuẩn đầu ra hiển thị kèm đánh giá từ người đào tạo. |
          | **Trường hợp không có dữ liệu** | - Nếu ứng viên chưa được gán chương trình đào tạo: hiển thị thông báo “Ứng viên chưa được gán chương trình đào tạo”. |
---
