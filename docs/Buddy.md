# 👔 Tài liệu đặc tả chức năng Buddy

# Tài liệu đặc tả chức năng dành cho PLS Buddy +
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
### Bảng vai trò {#toc-2.1}
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

## III. Đặc tả chức năng chung của các vai trò
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
    ####  1.4. Thay đổi vai trò (đối với tài khoản được gán nhiều vai trò) {#toc-3-1-4}
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

## IV. Đặc tả chức năng dành cho Handler
???+ info "1. Nhóm chức năng giữa Người phụ trách - Ứng viên "
    ### 1. Nhóm chức năng giữa Người phụ trách - Ứng viên {#toc-4-1}
    #### 1.1. Xem bảng danh sách ứng viên {#toc-4-1-1}
    ??? book "Xem bảng danh sách ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem bảng danh sách ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng này cho phép người phụ trách:<br>1. Xem toàn bộ thông tin về **tất cả ứng viên trong hệ thống** tại bảng **Danh sách ứng viên**.<br>2. Tìm kiếm nhanh ứng viên theo **Họ và Tên** thông qua ô nhập liệu.<br>3. Lọc danh sách ứng viên theo các điều kiện: **Vị trí**, **Trạng thái**, **Người phụ trách**, và **Ngày phỏng vấn**.<br><br>Bảng dữ liệu được phân trang, cho phép di chuyển giữa các trang mà không cần tải lại dữ liệu. Người phụ trách chỉ có thể xem, không thể chỉnh sửa thông tin ứng viên tại đây. |
        | **Giao diện liên quan** | 1. Trang **Danh sách ứng viên** (truy cập từ menu "Ứng Viên").<br>2. Bảng **Danh sách ứng viên**.<br>3. Ô tìm kiếm đặt phía trên hoặc bên cạnh bảng dữ liệu.<br>4. Bộ lọc (filter bar) gồm: **Vị trí**, **Trạng thái**, **Người phụ trách**, **Ngày phỏng vấn**. |
        | **Luồng thao tác chính** | **Xem danh sách:**<br>1. Người phụ trách chọn menu **Ứng Viên**.<br>2. Hệ thống tải dữ liệu của **toàn bộ ứng viên** trong hệ thống.<br>3. Bảng hiển thị các cột thông tin: Họ và Tên (kèm mã ứng viên khi trỏ chuột), Vị trí phỏng vấn (xem mô tả khi trỏ chuột), Người phụ trách (nhiều người sẽ hiển thị icon có số, trỏ chuột hiện tên), Ngày phỏng vấn, Giờ phỏng vấn, Trạng thái (icon kèm mô tả), Đánh giá (icon kèm mô tả), Ngày gửi CV.<br>4. Người phụ trách có thể chuyển trang để xem thêm dữ liệu.<br><br>**Tìm kiếm:**<br>5. Người phụ trách nhập ký tự vào ô tìm kiếm.<br>6. Hệ thống tự động lọc danh sách theo Họ và Tên có chứa chuỗi ký tự nhập, kết quả cập nhật ngay khi thay đổi ký tự.<br>7. Khi ô tìm kiếm trống, hiển thị lại toàn bộ dữ liệu ban đầu.<br><br>**Lọc ứng viên:**<br>8. Người phụ trách chọn giá trị trong bộ lọc:<br>&emsp;- **Vị trí**: chọn nhiều vị trí từ dropdown.<br>&emsp;- **Trạng thái**: chọn nhiều giá trị từ danh sách trạng thái (`Mới`, `Passed`, `Đang phỏng vấn`, `HR xác nhận`, `Offered`, `Failed`, `Dropped`, `Rejected`, `Chưa phỏng vấn`).<br>&emsp;- **Người phụ trách**: chọn nhiều người phụ trách (logic OR trong bộ lọc này).<br>&emsp;- **Ngày phỏng vấn**: chọn khoảng thời gian bằng popup lịch.<br>9. Hệ thống tự động áp dụng bộ lọc và hiển thị kết quả theo điều kiện (logic AND giữa các nhóm lọc, OR trong từng nhóm).<br>10. Icon bộ lọc hiển thị số lượng giá trị đã chọn, ví dụ `(03) Vị trí`. |
        | **Điều kiện** | 1. Người phụ trách đã đăng nhập với quyền hợp lệ.<br>2. Hệ thống có ít nhất một ứng viên được ghi nhận.<br>3. Trang **Danh sách ứng viên** đã tải dữ liệu thành công. |
        | **Kết quả hiển thị** | - Bảng **Danh sách ứng viên** với các cột: Họ và Tên, Vị trí phỏng vấn, Người phụ trách, Ngày phỏng vấn, Giờ phỏng vấn, Trạng thái (icon + mô tả), Đánh giá (icon + mô tả), Ngày gửi CV.<br>- Dữ liệu phân trang, có thể di chuyển giữa các trang.<br>- Kết quả tìm kiếm và lọc hiển thị tức thời, chỉ giữ lại những ứng viên phù hợp.<br>- Người phụ trách có thể kết hợp nhiều bộ lọc cùng lúc để thu hẹp dữ liệu.<br>- Mọi người phụ trách đều nhìn thấy danh sách đầy đủ ứng viên, không bị giới hạn theo quyền sở hữu ứng viên. |
        | **Trường hợp không có dữ liệu** | - Nếu không có ứng viên nào trong hệ thống: Bảng hiển thị thông báo *“Bảng dữ liệu hiện đang trống!”* kèm icon thùng rỗng.<br>- Nếu không có kết quả tìm kiếm hoặc lọc: Bảng hiển thị thông báo *“Bảng dữ liệu hiện đang trống!”* kèm icon thùng rỗng.<br>- Nếu ô tìm kiếm trống và không áp dụng bộ lọc: Hiển thị lại toàn bộ danh sách ứng viên ban đầu (nếu có). |
    #### 1.2. Xem chi tiết thông tin ứng viên {#toc-4-1-2}
    ??? book "Xem chi tiết thông tin ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | Tên chức năng | Xem và quản lý thông tin chi tiết ứng viên |
        | Vai trò | Người phụ trách |
        | Mô tả | Người phụ trách có thể xem toàn bộ thông tin chi tiết của ứng viên và quản lý tài khoản ứng viên. <br><br>- Tại tab “Thông tin ứng viên”: hiển thị các thông tin hồ sơ (Tên, Vị trí ứng tuyển, Trạng thái ứng tuyển, Đánh giá, Trạng thái đào tạo, Người phụ trách, Người đào tạo, Thông tin thêm như CV, bằng cấp, lịch làm việc dự kiến). <br>- Tại tab “Tài khoản ứng viên”: có quyền xem, sửa, xóa thông tin tài khoản (Họ và tên, Giới tính, Ngày sinh, Số điện thoại, Gmail, Mã OTP, Vị trí ứng tuyển). Có nút “Cập nhật tài khoản” để lưu thay đổi. |
        | Giao diện liên quan | - Menu Ứng Viên → bảng Danh sách ứng viên <br>- Màn hình Chi tiết ứng viên → tab Thông tin ứng viên, Tài khoản ứng viên |
        | Luồng thao tác chính | 1. Người phụ trách đăng nhập hệ thống.<br>2. Vào menu Ứng viên, chọn một ứng viên.<br>3. Xem thông tin ở tab Thông tin ứng viên.<br>4. Chuyển sang tab Tài khoản ứng viên để xem, chỉnh sửa hoặc xóa thông tin.<br>5. Nhấn Cập nhật tài khoản để lưu thay đổi. |
        | Điều kiện | - Người phụ trách đã đăng nhập và có quyền quản lý ứng viên.<br>- Ứng viên tồn tại trong hệ thống. |
        | Kết quả hiển thị | - Hiển thị chi tiết ứng viên và thông tin tài khoản.<br>- Sau khi chỉnh sửa, thông tin được cập nhật và hiển thị thông báo “Cập nhật dữ liệu thành công!”. |
        | Trường hợp không có dữ liệu | - Thông tin chưa có sẽ để trống. |
    #### 1.3. Thêm ứng viên mới {#toc-4-1-3}
    ??? book "Thêm ứng viên mới"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thêm ứng viên mới |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách tạo và lưu thông tin ứng viên mới vào hệ thống. <br><br>Khi chọn biểu tượng **(+)** tại màn hình *Danh sách ứng viên*, popup **“Thêm ứng viên phỏng vấn”** xuất hiện, yêu cầu nhập đầy đủ các thông tin bắt buộc: <br>&emsp;- Họ và tên <br>&emsp;- Vị trí <br>&emsp;- Gmail <br>&emsp;- Người phụ trách <br>&emsp;- Ngày gửi CV <br><br>Sau khi nhập hợp lệ và nhấn **“Thêm ứng viên”**, hệ thống lưu dữ liệu và hiển thị ứng viên trong bảng. |
        | **Giao diện liên quan** | - Màn hình **Danh sách ứng viên** (menu *Ứng viên*). <br>- Popup **Thêm ứng viên phỏng vấn**. |
        | **Luồng thao tác chính** | 1. Người phụ trách chọn nút **(+)** tại màn hình *Danh sách ứng viên*. <br>2. Hệ thống hiển thị popup **Thêm ứng viên phỏng vấn**. <br>3. Người phụ trách nhập thông tin: <br>&emsp;- **Họ và tên**. <br>&emsp;- **Vị trí**: chọn từ danh sách vị trí đang tuyển dụng (dropdown-list). <br>&emsp;- **Gmail**: đúng định dạng email. <br>&emsp;- **Người phụ trách**: chọn từ danh sách có sẵn. <br>&emsp;- **Ngày gửi CV**: chọn qua popup lịch (không được chọn ngày trong tương lai; khi nhập thủ công theo định dạng *dd/mm/yyyy* cũng không được vượt quá ngày hiện tại). <br>4. Hệ thống kiểm tra dữ liệu. Nếu hợp lệ, người phụ trách nhấn **“Thêm ứng viên”**. <br>5. Hệ thống lưu thông tin, cập nhật bảng dữ liệu và hiển thị ứng viên mới. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập với quyền phù hợp. <br>- Dữ liệu nhập hợp lệ. <br>- Người phụ trách nhấn nút **“Thêm ứng viên”**. |
        | **Kết quả hiển thị** | Ứng viên mới xuất hiện trong bảng dữ liệu tại màn hình *Danh sách ứng viên*. |
        | **Trường hợp không có dữ liệu** | - Nếu ứng viên vừa thêm chưa hiển thị: người phụ trách tải lại trang (F5). <br>- Nếu vẫn không thấy: liên hệ bộ phận có thẩm quyền để kiểm tra. |
    #### 1.4. Gán người nhận trách nhiệm cho ứng viên {#toc-4-1-4}
    ??? book "Gán người nhận trách nhiệm cho ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Gán người nhận trách nhiệm cho ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Người phụ trách có thể gán, thay đổi hoặc gỡ bỏ người phụ trách và người đào tạo cho từng ứng viên. Thông tin này được hiển thị trong hồ sơ ứng viên để phục vụ quản lý và đào tạo. |
        | **Giao diện liên quan** | - Menu **Ứng Viên** → bảng **Danh sách ứng viên** <br>- Màn hình **Chi tiết ứng viên** → tab **Thông tin ứng viên** <br>- Popup **Thêm người phụ trách** <br>- Popup **Thêm người đào tạo** |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập và chọn menu **Ứng Viên**.<br>2. Tại bảng **Danh sách ứng viên**, chọn một ứng viên → hệ thống mở màn hình **Chi tiết ứng viên**.<br>3. Nhấn nút **Người phụ trách** → popup **Thêm người phụ trách**.<br>4. Tìm kiếm, tick chọn một hoặc nhiều người phụ trách → nhấn **Xác nhận**.<br>5. Nhấn nút **Người đào tạo** → popup **Thêm người đào tạo**.<br>6. Thêm, gỡ hoặc cập nhật người đào tạo → nhấn **Xác nhận**.<br>7. Hệ thống cập nhật dữ liệu và hiển thị danh sách người phụ trách/người đào tạo đã gán. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý ứng viên.<br>- Ứng viên tồn tại trong hệ thống.<br>- Danh sách người phụ trách/người đào tạo có dữ liệu để lựa chọn. |
        | **Kết quả hiển thị** | - Tab **Thông tin ứng viên** hiển thị danh sách người phụ trách/người đào tạo đã gán.<br>- Thông báo *“Cập nhật dữ liệu thành công !”*. |
        | **Trường hợp không có dữ liệu** | - Nếu danh sách người phụ trách/người đào tạo trống: hiển thị thông báo *“Không có dữ liệu để lựa chọn”*. |
---
???+ info "2. Nhóm chức năng quản lý vị trí tuyển dụng"
    ### 2. Nhóm chức năng quản lý vị trí tuyển dụng {#toc-4-2}
    #### 2.1. Xem thông tin vị trí tuyển dụng {#toc-4-2-1}
    ??? book "Xem thông tin vị trí tuyển dụng"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem thông tin vị trí tuyển dụng |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách xem danh sách toàn bộ các vị trí đã và đang tuyển dụng. Thông tin được hiển thị dưới dạng bảng “Danh sách vị trí ứng tuyển” với các cột dữ liệu mô tả tình trạng và tiến độ tuyển dụng. Người phụ trách có thể theo dõi số lượng ứng viên, tình trạng phỏng vấn, quá trình đào tạo và trạng thái hiện tại của từng vị trí. |
        | **Giao diện liên quan** | - Menu chính **“Vị trí”**.<br>- Màn hình **“Danh sách vị trí ứng tuyển”** hiển thị danh sách tất cả các vị trí. |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập vào hệ thống.<br>2. Chọn menu **“Vị trí”**.<br>3. Hệ thống hiển thị bảng **“Danh sách vị trí ứng tuyển”**.<br>4. Người phụ trách theo dõi thông tin từng vị trí qua các cột:<br>&emsp;a. **Tên**: tên vị trí tuyển dụng.<br>&emsp;b. **Ứng viên**: số lượng ứng viên đã ứng tuyển.<br>&emsp;c. **Hẹn phỏng vấn**: số lượng ứng viên đã được lên lịch phỏng vấn.<br>&emsp;d. **Đang đào tạo**: số lượng ứng viên đã pass phỏng vấn và đang tham gia đào tạo.<br>&emsp;e. **Trạng thái**: tình trạng của vị trí (Kích hoạt / Vô hiệu / Xóa). |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền xem thông tin vị trí.<br>- Hệ thống đã có dữ liệu về các vị trí tuyển dụng. |
        | **Kết quả hiển thị** | - Bảng **“Danh sách vị trí ứng tuyển”** hiển thị đầy đủ các vị trí cùng các cột thông tin liên quan.<br>- Dữ liệu được cập nhật theo thời gian thực hoặc theo batch (tùy cấu hình hệ thống).<br>- Trạng thái hiển thị trực quan (ví dụ: màu sắc hoặc icon thể hiện Kích hoạt/Vô hiệu/Xóa). |
        | **Trường hợp không có dữ liệu** | - Nếu chưa có vị trí nào, bảng dữ liệu thông báo "Bảng này hiện đang trống" kèm với icon thùng rỗng.<br>- Nếu dữ liệu tại các cột đếm (Ứng viên, Hẹn phỏng vấn, Đang đào tạo) bằng 0: hiển thị giá trị `0` thay vì để trống. |
    #### 2.2. Thiết lập lịch phỏng vấn tuyển dụng {#toc-4-2-2}
    ??? book "Thiết lập lịch phỏng vấn tuyển dụng"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập lịch phỏng vấn tuyển dụng |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách thiết lập lịch phỏng vấn cho vị trí đang quản lý. Người phụ trách có thể chọn ngày và khung giờ trong tương lai để thêm lịch phỏng vấn. Hệ thống hỗ trợ hiển thị trực quan: <br> - Ngày trong tương lai: ô màu xanh lá, có dấu cộng, cho phép thao tác. <br> - Ngày trong quá khứ: ô màu xanh dương, không cho phép thao tác. <br> - Ngày hiện tại: được highlight bằng nền đen, chữ trắng và viền tròn. Khi chọn một khung giờ, hệ thống mở popup nhập chi tiết lịch phỏng vấn. |
        | **Giao diện liên quan** | - Menu **“Vị trí”**.<br>- Menu phụ **“Tổng quan”**.<br>- Màn hình **“Tổng quan vị trí”** → khu vực **“Lịch phỏng vấn vị trí”** với bảng **“Thiết lập lịch phỏng vấn”**.<br>- Popup **“Thêm lịch phỏng vấn”**. |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập vào hệ thống.<br>2. Vào menu **“Vị trí”** → menu phụ **“Tổng quan”**.<br>3. Hệ thống hiển thị màn hình **“Tổng quan vị trí”** với bảng **“Thiết lập lịch phỏng vấn”**.<br>4. Người phụ trách chọn tuần cần hiển thị để xem các ngày và khung giờ.<br>5. Tại bảng:<br>&emsp;- Ngày trong tương lai: ô xanh lá + dấu cộng → có thể click.<br>&emsp;- Ngày hiện tại: highlight đen/trắng, viền tròn.<br>&emsp;- Ngày quá khứ: ô xanh dương, không click được.<br>6. Người phụ trách click vào ô xanh lá (khung giờ trong tương lai).<br>7. Hệ thống hiển thị popup **“Thêm lịch phỏng vấn”** với thông tin sẵn có:<br>&emsp;- **Vị trí** (tự động điền).<br>&emsp;- **Thời gian phỏng vấn** (tương ứng ô được chọn).<br>8. Người phụ trách nhập/điều chỉnh **Trọng số người tham gia phỏng vấn** (giá trị > 0).<br>9. Click **“Thêm lịch phỏng vấn”**.<br>10. Hệ thống lưu dữ liệu và hiển thị thông báo **“Cập nhật dữ liệu thành công !”**.<br>11. Lịch mới được hiển thị trong bảng. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý lịch phỏng vấn.<br>- Chỉ được thêm lịch tại các ngày trong tương lai.<br>- Trọng số người tham gia phỏng vấn > 0. |
        | **Kết quả hiển thị** | - Lịch phỏng vấn mới xuất hiện tại khung giờ đã chọn.<br>- Popup đóng sau khi lưu thành công.<br>- Hiển thị thông báo xác nhận *“Cập nhật dữ liệu thành công !”*. |
        | **Trường hợp không có dữ liệu** | - Nếu chưa có lịch phỏng vấn nào trên bảng, toàn bộ các ô trên bảng đều .<br>- Các ô trong tương lai chưa thiết lập lịch vẫn hiển thị dấu cộng để thêm mới.<br>- Các ô trong quá khứ hiển thị màu xanh dương, không thao tác. |
    #### 2.3. Thiết lập tiêu chuẩn ứng viên cho vị trí tuyển dụng {#toc-4-2-3}
    ??? book "Thiết lập tiêu chuẩn ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập tiêu chuẩn ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách quản lý các tiêu chuẩn đánh giá ứng viên cho từng vị trí tuyển dụng. Các tiêu chuẩn được hiển thị dưới dạng **thẻ** (card) có thể mở rộng/thu gọn để xem chi tiết. Bên trong mỗi thẻ là danh sách các mục đánh giá, nội dung này thay đổi tùy theo vị trí. Người phụ trách có thể thêm, sửa, xóa cả **mục đánh giá** lẫn **thẻ tiêu chuẩn**. Ngoài ra, có thể tạo thẻ mới bằng cách nhập tên tiêu chuẩn vào ô **“Nhập Danh Mục Mới”** và nhấn icon **(+)**. |
        | **Giao diện liên quan** | - Menu chính: **“Vị trí”**.<br>- Menu phụ: **“Phỏng vấn”**.<br>- Sub-menu: **“Tiêu chuẩn ứng viên”**.<br>- Màn hình: **“Tiêu chuẩn ứng viên”**, hiển thị danh sách các thẻ tiêu chuẩn. |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập vào hệ thống.<br>2. Truy cập **Menu “Vị trí” → Menu phụ “Phỏng vấn” → Sub-menu “Tiêu chuẩn ứng viên”**.<br>3. Hệ thống hiển thị màn hình **“Tiêu chuẩn ứng viên”** với danh sách thẻ.<br>4. Người phụ trách có thể:<br>&emsp;- Nhấn vào một thẻ để mở rộng/thu gọn chi tiết.<br>&emsp;- Thêm **mục đánh giá** trong thẻ (nhập nội dung, bấm lưu).<br>&emsp;- Sửa nội dung mục đánh giá có sẵn.<br>&emsp;- Xóa mục đánh giá khi không cần.<br>&emsp;- Thêm **thẻ tiêu chuẩn mới** bằng ô **“Nhập Danh Mục Mới”** và nhấn **(+)**.<br>&emsp;- Sửa tên thẻ hoặc xóa thẻ khi cần.<br>5. Sau khi thao tác, hệ thống cập nhật và hiển thị dữ liệu mới. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý vị trí.<br>- Vị trí tuyển dụng đã tồn tại trong hệ thống.<br>- Khi thêm mới thẻ: tên tiêu chuẩn không được để trống.<br>- Khi thêm/sửa mục: nội dung mục đánh giá phải hợp lệ (không trống). |
        | **Kết quả hiển thị** | - Danh sách thẻ tiêu chuẩn được hiển thị và có thể thao tác mở rộng/thu gọn.<br>- Sau khi thêm/sửa/xóa, dữ liệu được cập nhật ngay trên màn hình.<br>- Thông báo thành công hiển thị khi thao tác hợp lệ. |
        | **Trường hợp không có dữ liệu** | - Nếu chưa có thẻ tiêu chuẩn nào: hiển thị ô **“Nhập Danh Mục Mới”** để thêm.<br>- Nếu thẻ chưa có mục đánh giá: hiển thị thẻ rỗng với nút **“Thêm mục đánh giá”**.<br>- Khi xóa hết thẻ: màn hình trở về trạng thái trống kèm hướng dẫn thêm mới. |
---
???+ info "3. Nhóm chức năng quản lý phỏng vấn"
    ### 3. Nhóm chức năng quản lý phỏng vấn {#toc-4-3}
    #### 3.1. Thiết lập quy trình phỏng vấn {#toc-4-3-1}
    ??? book "Thiết lập các vòng phỏng vấn"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập quy trình phỏng vấn |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách quản lý các vòng phỏng vấn của một vị trí tuyển dụng. <br><br>- Các vòng phỏng vấn được hiển thị trong **danh sách bên phải màn hình**, mỗi vòng thể hiện dưới dạng **thẻ** kèm trạng thái (Kích hoạt / Vô hiệu / Xóa). <br>- Khi mở rộng một thẻ, hệ thống hiển thị **danh sách mục con** (tiêu chí đánh giá). <br>- Khi chọn một mục con, phần màn hình bên trái hiển thị chi tiết các **tiêu chí đánh giá** của mục đó. <br>- Người phụ trách có thể **thêm, sửa, xóa** các tiêu chí. <br>- Khi mở rộng tiêu chí, hiển thị chi tiết **các yêu cầu** gắn với tiêu chí đó và trạng thái thể hiện **mức độ cần thiết** của yêu cầu đối với vị trí ứng tuyển. |
        | **Giao diện liên quan** | - Menu chính: **“Vị trí”**.<br>- Menu phụ: **“Phỏng vấn”**.<br>- Sub-menu: **“Các Vòng Phỏng Vấn”**.<br>- Màn hình: **“Các Vòng Phỏng Vấn”** gồm:<br>&emsp;+ Cột bên phải: Danh sách thẻ vòng phỏng vấn.<br>&emsp;+ Khu vực bên trái: Hiển thị tiêu chí và yêu cầu chi tiết của mục con. |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập và vào **Menu “Vị trí” → Menu phụ “Phỏng vấn” → Sub-menu “Các Vòng Phỏng Vấn”**.<br>2. Hệ thống hiển thị màn hình với danh sách vòng phỏng vấn (cột bên phải).<br>3. Người phụ trách có thể:<br>&emsp;- Mở rộng/thu gọn thẻ vòng phỏng vấn để xem mục con.<br>&emsp;- Chọn mục con để hiển thị các tiêu chí tương ứng ở khu vực bên trái.<br>&emsp;- Thêm mới, chỉnh sửa, xóa tiêu chí.<br>&emsp;- Mở rộng tiêu chí để xem/cập nhật các yêu cầu chi tiết kèm trạng thái mức độ cần thiết.<br>4. Sau khi thao tác, hệ thống cập nhật dữ liệu và hiển thị kết quả mới. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý vị trí.<br>- Vị trí tuyển dụng đã tồn tại.<br>- Tên vòng phỏng vấn, tiêu chí và yêu cầu phải hợp lệ (không để trống). |
        | **Kết quả hiển thị** | - Danh sách vòng phỏng vấn (thẻ) với trạng thái rõ ràng.<br>- Các mục con, tiêu chí và yêu cầu được hiển thị theo cấu trúc phân cấp.<br>- Sau thao tác thêm/sửa/xóa, dữ liệu được cập nhật tức thì trên giao diện.<br>- Thông báo thành công hiển thị sau mỗi hành động hợp lệ. |
        | **Trường hợp không có dữ liệu** | - Nếu vị trí chưa có vòng phỏng vấn: hiển thị nút **Thêm vòng phỏng vấn**.<br>- Nếu vòng phỏng vấn chưa có tiêu chí: hiển thị thẻ rỗng với nút **“Thêm tiêu chí”**.<br>- Nếu tiêu chí chưa có yêu cầu: hiển thị khu vực trống với nút **“Thêm yêu cầu”**.<br>- Nếu tất cả đã bị xóa: màn hình trở về trạng thái trống kèm hướng dẫn thêm mới. |
    #### 3.2. Thiết lập câu hỏi phỏng vấn {#toc-4-3-2}
    ??? book "Thiết lập câu hỏi phỏng vấn"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập câu hỏi phỏng vấn |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Người phụ trách quản lý các bộ câu hỏi phỏng vấn theo từng vị trí tuyển dụng. <br>- Bộ câu hỏi hiển thị dưới dạng thẻ có tiêu đề. <br>- Có thể thêm, sửa, xóa bộ câu hỏi. <br>- Khi mở rộng thẻ bộ câu hỏi: hiển thị danh sách câu hỏi dưới dạng thẻ. <br>- Có thể thêm, sửa, xóa câu hỏi. <br>- Khi mở rộng thẻ câu hỏi: nhập mô tả chi tiết, đính kèm file để hỗ trợ quá trình đánh giá ứng viên. |
        | **Giao diện liên quan** | - Menu chính: Vị trí → Phỏng vấn → Câu hỏi thông tin <br>- Màn hình Câu hỏi thông tin gồm: <br> + Khu vực danh sách bộ câu hỏi (thẻ). <br> + Danh sách câu hỏi khi mở rộng thẻ. <br> + Khu vực nhập mô tả, đính kèm file. |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập và truy cập Vị trí → Phỏng vấn → Câu hỏi thông tin. <br>2. Hệ thống hiển thị danh sách bộ câu hỏi. <br>3. Người phụ trách có thể: <br> - Thêm mới, chỉnh sửa, xóa bộ câu hỏi. <br> - Mở rộng bộ để quản lý câu hỏi. <br> - Thêm mới, chỉnh sửa, xóa câu hỏi. <br> - Mở rộng câu hỏi để nhập mô tả hoặc đính kèm file. <br>4. Hệ thống cập nhật dữ liệu và hiển thị kết quả ngay sau thao tác. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền quản lý vị trí. <br>- Vị trí tuyển dụng tồn tại. <br>- Tên bộ câu hỏi và nội dung câu hỏi không được để trống. <br>- File đính kèm đúng định dạng cho phép. |
        | **Kết quả hiển thị** | - Danh sách bộ câu hỏi hiển thị dưới dạng thẻ, có thể mở rộng/thu gọn. <br>- Các câu hỏi trong bộ hiển thị chi tiết, có tùy chọn thêm, sửa, xóa. <br>- Khi nhập mô tả hoặc đính kèm file: hệ thống cập nhật và hiển thị ngay. <br>- Hiển thị thông báo thành công khi thao tác hợp lệ. |
        | **Trường hợp không có dữ liệu** | - Nếu chưa có bộ câu hỏi: hiển thị nút Thêm bộ câu hỏi. <br>- Nếu bộ câu hỏi trống: hiển thị nút Thêm câu hỏi. <br>- Nếu câu hỏi không có mô tả/file: hiển thị trạng thái trống với tùy chọn Thả file hoặc chọn file ở đây. |
    #### 3.3. Thiết lập bài kiểm tra {#toc-4-3-3}
    ??? book "Thiết lập bài kiểm tra"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Thiết lập bài kiểm tra |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | - Người phụ trách tạo và quản lý các bài kiểm tra đầu vào cho từng vị trí. <br>- Bài kiểm tra hiển thị dạng **thẻ** kèm trạng thái (Kích hoạt / Vô hiệu / Xóa). <br>- Người phụ trách có thể thêm, sửa tên, đổi trạng thái, quản lý **danh mục** và **câu hỏi** trong bài kiểm tra. <br>- Khi ứng viên ứng tuyển vào vị trí có bài kiểm tra: <br>&emsp;+ Hệ thống hiển thị bài kiểm tra tương ứng. <br>&emsp;+ Ứng viên bắt buộc hoàn thành bài kiểm tra trước khi nộp hồ sơ. |
        | **Giao diện liên quan** | - Menu chính: **“Vị trí”**. <br>- Menu phụ: **“Phỏng vấn”**. <br>- Sub-menu: **“Kiểm Tra Đầu Vào”**. <br>- Màn hình quản lý: hiển thị danh sách bài kiểm tra (bên phải) và chi tiết bài kiểm tra (bên trái). <br>- Giao diện ứng viên: form ứng tuyển hiển thị thêm phần bài kiểm tra nếu vị trí có cấu hình. |
        | **Luồng thao tác chính** | **Người phụ trách** <br>1. Truy cập menu **Vị trí → Phỏng vấn → Kiểm Tra Đầu Vào**. <br>2. Thêm/sửa/xóa bài kiểm tra, đổi trạng thái. <br>3. Quản lý danh mục và câu hỏi trong bài kiểm tra. <br>4. Xác nhận khi xóa danh mục/câu hỏi. <br>5. Hệ thống cập nhật dữ liệu và hiển thị thông báo. <br>6. Khi ứng viên ứng tuyển vào vị trí có bài kiểm tra: hệ thống hiển thị form bài kiểm tra. <br>7. Ứng viên trả lời toàn bộ câu hỏi, sau đó mới được hoàn tất hồ sơ. <br>8. Hệ thống tự động chấm, lưu kết quả vào hồ sơ (ứng viên không thấy kết quả). |
        | **Điều kiện** | - Người phụ trách có quyền quản lý vị trí. <br>- Vị trí tuyển dụng đã tồn tại. <br>- Tên bài kiểm tra/danh mục không để trống. <br>- Câu hỏi kiểm tra có nội dung hợp lệ. |
        | **Kết quả hiển thị** | - Danh sách bài kiểm tra hiển thị dạng thẻ, có trạng thái và nút thao tác. <br>- Chi tiết bài kiểm tra gồm danh mục và câu hỏi hiển thị rõ ràng. <br>- Ứng viên thấy bài kiểm tra trong form ứng tuyển. |
        | **Trường hợp không có dữ liệu** | - Chưa có bài kiểm tra: hiển thị nút **Thêm bài kiểm tra**, danh sách rỗng. <br>- Bài kiểm tra chưa có danh mục: hiển thị nút **Thêm danh mục**. <br>- Danh mục chưa có câu hỏi: hiển thị nút **Tạo câu hỏi**. <br>- Vị trí chưa cấu hình bài kiểm tra: ứng viên ứng tuyển chỉ nộp hồ sơ, không thấy phần kiểm tra. |
    #### 3.4. Tạo buổi phỏng vấn cho ứng viên {#toc-4-3-4}
    ??? book "Tạo buổi phỏng vấn cho ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Tạo buổi phỏng vấn cho ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách gán thông tin về **người phỏng vấn** và **thời gian phỏng vấn** cho từng vòng phỏng vấn đã được hệ thống cố định sẵn của ứng viên. Khi một buổi phỏng vấn chưa có người thực hiện (interviewer), hệ thống hiển thị nút `"Handler chưa assign"` kèm theo 2 nút thao tác: <br> - **Nút "Handler chưa assign" kèm icon lịch:** mở popup Lịch để chọn thời gian phỏng vấn. <br> - **Nút "Handler chưa assign":** mở popup "Chọn người phỏng vấn", hiển thị danh sách tất cả người phỏng vấn trong công ty để chọn. |
        | **Giao diện liên quan** | - Trang "Danh sách ứng viên" → chọn một ứng viên cụ thể. <br>- Tab "Phỏng vấn" trong trang chi tiết ứng viên.<br>- Popup lịch chọn ngày phỏng vấn.<br>- Popup "Chọn người phỏng vấn". |
        | **Luồng thao tác chính** | 1. Người phụ trách truy cập vào trang "Danh sách ứng viên". <br>2. Chọn một ứng viên cụ thể trong bảng dữ liệu. <br>3. Trong màn hình chi tiết ứng viên, chuyển đến tab **"Phỏng vấn"**. <br>4. Tại đây, hệ thống hiển thị danh sách các vòng phỏng vấn mặc định của ứng viên. <br>5. Nếu một vòng phỏng vấn chưa được gán handler, hệ thống hiển thị nút `"Handler chưa assign"` với 2 lựa chọn: <br>&emsp;a. Người phụ trách nhấn vào nút **lịch** để mở popup Lịch và chọn ngày giờ phỏng vấn. <br>&emsp;b. Người phụ trách nhấn vào nút **người phỏng vấn** để mở popup "Chọn người phỏng vấn" và chọn từ danh sách. <br>6. Sau khi hoàn tất, hệ thống lưu thông tin buổi phỏng vấn (người phỏng vấn + thời gian). |
        | **Điều kiện** | 1. Người phụ trách đã đăng nhập và có quyền thao tác trên hồ sơ ứng viên. <br>2. Hệ thống đã tải được chi tiết ứng viên và danh sách các vòng phỏng vấn cố định. <br>3. Danh sách người phỏng vấn phải tồn tại trong hệ thống để hiển thị popup chọn. |
        | **Kết quả hiển thị** | - Sau khi chọn thành công, tên người phỏng vấn và thời gian phỏng vấn được hiển thị thay thế cho nút `"Handler chưa assign"`. <br>- Dữ liệu được cập nhật trong hệ thống và đồng bộ với bảng lịch phỏng vấn. <br>- Người phụ trách có thể quay lại tab "Phỏng vấn" để xem hoặc chỉnh sửa thông tin vừa gán. |
        | **Trường hợp không có dữ liệu** | - Nếu danh sách người phỏng vấn rỗng: popup "Chọn người phỏng vấn" hiển thị thông báo `"Không có dữ liệu người phỏng vấn"` kèm icon minh họa. <br>- Nếu chưa chọn ngày giờ phỏng vấn trong popup Lịch, hệ thống sẽ không thêm vào buổi phỏng vấn cho ứng viên. |
---
???+ info "4. Nhóm chức năng để đánh giá ứng viên"
    ### 4. Nhóm chức năng để đánh giá ứng viên {#toc-4-4}
    #### 4.1. Xem lại kết quả kiểm tra của ứng viên {#toc-4-4-1}
    ??? book "Xem lại kết quả kiểm tra ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem lại kết quả kiểm tra ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách xem lại kết quả các bài kiểm tra đầu vào mà ứng viên đã thực hiện. <br><br>Người phụ trách có thể truy cập từ thẻ **Thông tin ứng viên** trong màn hình **Chi tiết ứng viên**, nhấn nút **Kiểm tra đầu vào** để mở popup **Bài kiểm tra ứng viên**. Tại popup này, người phụ trách có thể tìm kiếm, chọn bài kiểm tra, và xem chi tiết kết quả của bài kiểm tra đã chọn. |
        | **Giao diện liên quan** | - Menu **Ứng viên** → bảng **Danh sách ứng viên** <br>- Màn hình **Chi tiết ứng viên** → thẻ **Thông tin ứng viên** <br>- Popup **Bài kiểm tra ứng viên** (hiển thị danh sách các bài kiểm tra đã thực hiện) <br>- Màn hình/Popup hiển thị chi tiết kết quả kiểm tra |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập và chọn menu **Ứng viên**. <br>2. Trên bảng **Danh sách ứng viên**, chọn một ứng viên cụ thể. <br>3. Hệ thống mở màn hình **Chi tiết ứng viên**. <br>4. Người phụ trách chọn thẻ **Thông tin ứng viên**. <br>5. Tại đây, nhấn nút **Kiểm tra đầu vào**. <br>6. Hệ thống mở popup **Bài kiểm tra ứng viên** hiển thị danh sách các bài kiểm tra đã thực hiện. <br>7. Người phụ trách có thể sử dụng thanh tìm kiếm trong popup để tìm bài kiểm tra theo tên hoặc ngày thực hiện. <br>8. Chọn một bài kiểm tra từ danh sách. <br>9. Hệ thống hiển thị chi tiết kết quả của bài kiểm tra (bao gồm: điểm số, thời gian làm bài, ngày thi, chi tiết các câu trả lời nếu có). |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền xem thông tin ứng viên. <br>- Ứng viên đã tồn tại trong hệ thống. <br>- Ứng viên có dữ liệu về kết quả kiểm tra. |
        | **Kết quả hiển thị** | - Popup **Bài kiểm tra ứng viên** hiển thị danh sách các bài kiểm tra đã thực hiện. <br>- Khi chọn một bài kiểm tra, hệ thống hiển thị đầy đủ thông tin chi tiết về kết quả: <br>&emsp;+ Tên bài kiểm tra <br>&emsp;+ Điểm số đạt được <br>&emsp;+ Thời gian làm bài <br>&emsp;+ Ngày thi <br>&emsp;+ Nội dung câu hỏi & câu trả lời. |
        | **Trường hợp không có dữ liệu** | - Nếu ứng viên chưa thực hiện bài kiểm tra nào: popup hiển thị thông báo *“Không có bài kiểm tra”*. <br>- Nếu tìm kiếm không ra kết quả: hiển thị thông báo *“Không có bài kiểm tra”*. |
    #### 4.2. Xem lại các phản hồi của ứng viên {#toc-4-4-5}
    ??? book "Xem lại phản hồi ứng viên"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem lại phản hồi ứng viên (check log) |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Chức năng cho phép người phụ trách xem lại toàn bộ nội dung phản hồi của ứng viên và đánh giá từ người phỏng vấn sau khi ứng viên hoàn thành buổi phỏng vấn. <br><br>Phản hồi được trình bày theo 2 khía cạnh: (1) nội dung phỏng vấn theo bộ câu hỏi, và (2) đánh giá tổng quan theo tiêu chí, nhằm giúp người phụ trách có cái nhìn đầy đủ và khách quan hơn về năng lực ứng viên. |
        | **Giao diện liên quan** | - Menu **Ứng viên** → bảng **Danh sách ứng viên** <br>- Màn hình **Chi tiết ứng viên** → thẻ **Phỏng vấn** <br>- Nút **Xem chi tiết** trên danh sách buổi phỏng vấn <br>- Màn hình **Phỏng vấn ứng viên** (gồm 2 tab: **Câu hỏi phỏng vấn**, **Đánh giá**) |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập và chọn menu **Ứng viên**. <br>2. Trên bảng **Danh sách ứng viên**, chọn một ứng viên cụ thể. <br>3. Hệ thống mở màn hình **Chi tiết ứng viên**. <br>4. Người phụ trách chọn thẻ **Phỏng vấn** để xem danh sách các buổi phỏng vấn của ứng viên. <br>5. Tại buổi phỏng vấn đã hoàn thành, nhấn nút **Xem chi tiết**. <br>6. Hệ thống điều hướng sang màn hình **Phỏng vấn ứng viên**. <br>7. Tại đây, có 2 tab: <br>&emsp;+ **Câu hỏi phỏng vấn**: hiển thị bộ câu hỏi đã sử dụng trong buổi phỏng vấn và đánh giá của người phỏng vấn cho từng câu hỏi (Không tốt / Trung bình / Khá / Tốt). <br>&emsp;+ **Đánh giá**: hiển thị các nhóm tiêu chí đánh giá. Người phụ trách có thể xem % đạt tiêu chuẩn tổng quan, mở rộng từng nhóm tiêu chí để xem chi tiết tiêu chí con cùng với đánh giá của người phỏng vấn (Xuất sắc / Tốt / Khá tốt / Trung bình / Không tốt). |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền truy cập thông tin ứng viên. <br>- Ứng viên đã tham gia ít nhất một buổi phỏng vấn. <br>- Buổi phỏng vấn được chọn đã hoàn thành và có dữ liệu đánh giá từ người phỏng vấn. |
        | **Kết quả hiển thị** | - Danh sách buổi phỏng vấn trong thẻ **Phỏng vấn** của màn hình **Chi tiết ứng viên**. <br>- Màn hình **Phỏng vấn ứng viên** hiển thị chi tiết phản hồi theo 2 tab: <br>&emsp;- **Câu hỏi phỏng vấn**: danh sách câu hỏi & mức đánh giá cho từng câu hỏi. <br>&emsp;- **Đánh giá**: kết quả tổng quan % đạt tiêu chuẩn, danh sách nhóm tiêu chí, khả năng mở rộng để xem tiêu chí con và chi tiết đánh giá. |
        | **Trường hợp không có dữ liệu** | - Nếu ứng viên chưa có buổi phỏng vấn nào: không có buổi phỏng vấn nào trong thẻ **Phỏng vấn** có nút "Xem chi tiết". <br>- Nếu không có đánh giá nào được nhập: màn hình **Phỏng vấn ứng viên** và **Đánh giá** sẽ không có mục/ tiêu chí nào được đánh dấu, thanh tính % ở màn hình **Đánh giá** sẽ hiển thị 0%. |
    #### 4.3. Xem lại buổi phỏng vấn của ứng viên {#toc-4-4-6}
    ??? book "Xem lại buổi phỏng vấn của ứng viên (Người phụ trách)"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Xem lại buổi phỏng vấn của ứng viên |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Người phụ trách có thể xem lại toàn bộ chi tiết các buổi phỏng vấn đã hoàn thành của ứng viên, bao gồm câu hỏi, câu trả lời, kết quả bài kiểm tra và đánh giá theo tiêu chí. |
        | **Giao diện liên quan** | - Trang **Danh sách ứng viên** → chọn ứng viên → Tab **Phỏng vấn** → nút **“Xem chi tiết”** |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập và truy cập **Danh sách ứng viên**.<br>2. Chọn một ứng viên cụ thể.<br>3. Tại tab **Phỏng vấn**, chọn vòng phỏng vấn đã hoàn thành → nhấn **“Xem chi tiết”**.<br>4. Hệ thống mở trang **Phỏng vấn ứng viên** với 2 thẻ:<br> a. **Câu hỏi phỏng vấn**: hiển thị toàn bộ bộ câu hỏi, câu trả lời của ứng viên và đánh giá chi tiết.<br> b. **Đánh giá**: hiển thị nhóm tiêu chí, thanh tiến trình và chi tiết từng tiêu chí đã được chấm. |
        | **Điều kiện** | - Người phụ trách đã đăng nhập và có quyền xem chi tiết ứng viên.<br>- Ứng viên có ít nhất một buổi phỏng vấn hoàn thành. |
        | **Kết quả hiển thị** | - Tab **Phỏng vấn** hiển thị nút **“Xem chi tiết”** cho các buổi phỏng vấn đã hoàn thành.<br>- Trang **Phỏng vấn ứng viên** hiển thị đầy đủ 2 thẻ: Câu hỏi phỏng vấn và Đánh giá.<br>- Người phụ trách xem được toàn bộ dữ liệu phỏng vấn của ứng viên. |
        | **Trường hợp không có dữ liệu** | - Nếu ứng viên chưa có buổi phỏng vấn nào hoàn thành: tab **Phỏng vấn** không hiển thị nút **“Xem chi tiết”**. |
---
???+ info "5. Nhóm chức năng quản lý đào tạo"
    ### 5. Nhóm chức năng quản lý đào tạo {#toc-4-5}
    #### 5.1. Quản lý quy trình đào tạo {#toc-4-5-1}
    ??? book "Quản lý quy trình đào tạo"
        | Trường | Nội dung |
        | ------ | -------- |
        | **Tên chức năng** | Quản lý quy trình đào tạo |
        | **Vai trò** | Người phụ trách |
        | **Mô tả** | Người phụ trách có toàn quyền quản lý các quy trình đào tạo theo từng vị trí tuyển dụng: <br>- Tạo mới, chỉnh sửa, xóa quy trình. <br>- Vô hiệu hóa/kích hoạt quy trình. <br>- Quản lý chi tiết các tiêu chuẩn trong quy trình, bao gồm: thêm, sửa, xóa, gán tag (Hướng dẫn, Kiểm tra, Đánh giá, Nhiệm vụ). |
        | **Giao diện liên quan** | - Menu Vị trí → chọn vị trí → Tổng quan vị trí → Tab Đào tạo → Quy trình |
        | **Luồng thao tác chính** | 1. Người phụ trách đăng nhập, chọn vị trí. <br>2. Truy cập tab Quy trình. <br>3. Hệ thống hiển thị danh sách quy trình hiện có. <br>4. Người phụ trách thực hiện thao tác: thêm mới, chỉnh sửa, xóa, vô hiệu hóa/kích hoạt quy trình. <br>5. Khi mở một quy trình: có thể xem, quản lý, gán tag cho các tiêu chuẩn và tiêu chí. |
        | **Điều kiện** | - Người phụ trách có quyền quản lý vị trí. <br>- Vị trí tồn tại trong hệ thống. |
        | **Kết quả hiển thị** | - Danh sách quy trình đào tạo hiển thị chi tiết. <br>- Người phụ trách có toàn quyền thao tác. <br>- Thông báo “Cập nhật dữ liệu thành công” sau khi thao tác hợp lệ. |
        | **Trường hợp không có dữ liệu** | - Nếu chưa có quy trình: hiển thị danh sách rỗng và nút Nhập quy trình mới. <br>- Nếu quy trình không có tiêu chuẩn: chỉ hiển thị tên quy trình và nút Nhập tiêu chuẩn mới. |
    #### 5.2. Quản lý đầu ta đào tạo {#toc-4-5-2}
    ??? book "Quản lý đầu ta đào tạo"
        | Trường | Nội dung |
        | ------ | -------- |
        | Tên chức năng | Quản lý đầu ta đào tạo |
        | Vai trò | Người phụ trách |
        | Mô tả | Người phụ trách quản lý các tiêu chuẩn đầu ra của từng vị trí tuyển dụng, hiển thị dưới dạng thẻ. Có thể: <br>- Thêm mới thẻ đầu ra. <br>- Chỉnh sửa nội dung yêu cầu. <br>- Xóa một yêu cầu trong thẻ (có xác nhận). <br>- Xóa toàn bộ thẻ (có xác nhận). <br>- Gắn mức độ cho từng yêu cầu (Cơ bản, Trung bình, Nâng cao). |
        | Giao diện liên quan | - Màn hình Vị trí → chọn vị trí → Tổng quan vị trí → Tab Đào tạo → Đầu ra |
        | Luồng thao tác chính | 1. Người phụ trách đăng nhập và chọn Vị trí. <br>2. Vào tab Đầu ra. <br>3. Quản lý danh sách yêu cầu đầu ra bằng các thao tác: mở rộng, thêm mới, sửa, xóa yêu cầu hoặc thẻ. <br>4. Hệ thống lưu và hiển thị thay đổi ngay lập tức. |
        | Điều kiện | - Người phụ trách có quyền quản lý vị trí. |
        | Kết quả hiển thị | - Danh sách thẻ yêu cầu đầu ra hiển thị theo vị trí. <br>- Các thao tác cập nhật thành công kèm thông báo “Cập nhật dữ liệu thành công”. |
        | Trường hợp không có dữ liệu | - Nếu chưa có yêu cầu: hiển thị nút Thêm thẻ mới. <br>- Nếu thẻ rỗng: hiển thị nút Thêm nội dung mới. |
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
