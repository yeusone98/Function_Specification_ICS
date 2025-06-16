# 🌸 Tài liệu đặc tả chức năng App Sakumi

## 1. Giới thiệu
<div class="justified-text">Mục tiêu: Ứng dụng Sakumi – Nhật ngữ thông minh được xây dựng nhằm hỗ trợ học viên luyện thi JLPT hiệu quả từ cấp độ N5 trở lên, thông qua lộ trình học rõ ràng, bài bản và cá nhân hóa. Ứng dụng tích hợp nhiều công cụ học tập như từ vựng, ngữ pháp, chữ Hán, kỹ năng nghe – nói – đọc, hệ thống kiểm tra đánh giá định kỳ, cùng thư viện học tập có khả năng tuỳ chỉnh mục tiêu theo cá nhân.
Sakumi không chỉ giúp người học ghi nhớ và ôn luyện kiến thức dễ dàng hơn, mà còn giúp nâng cao kỹ năng và hiệu quả trong quá trình ôn thi JLPT, hướng đến kết quả thi thật xuất sắc. </div>

Đối tượng sử dụng:<br>
🔹 Developer: Triển khai các module chức năng dựa trên mô tả nghiệp vụ<br>
🔹 Tester: Xây dựng và thực hiện test case để kiểm thử hệ thống

---

## 2. Phạm vi hệ thống

Hệ thống **Sakumi – Nhật ngữ thông minh** gồm 2 ứng dụng độc lập, phục vụ cho các đối tượng học tiếng Nhật với mục tiêu luyện thi JLPT từ cấp độ N5 đến N2. Mỗi ứng dụng được thiết kế riêng cho nhóm người dùng khác nhau nhưng cùng sử dụng chung nền tảng dữ liệu học tập chuẩn hóa.

---

### 2.1. Ứng dụng **Sakumi 247**

**Đối tượng sử dụng:**

* Người dùng phổ thông
* Học viên Sakumi

Ứng dụng học tiếng Nhật mở, ai cũng có thể sử dụng để ôn luyện JLPT, nâng cao kỹ năng và theo dõi lộ trình tự học. Không yêu cầu đăng nhập, người dùng có thể thanh toán để nâng cấp VIP.

**Các chức năng chính:**

* 📘 **Bài học:**<br>
   • Truy cập bài học theo cấp độ từ N5 đến N2<br>
   • Nội dung bao gồm: từ vựng, ngữ pháp, Hán tự, mẫu câu<br>

* 📝 **Kiểm tra:**<br>
   • Làm bài kiểm tra theo kỹ năng hoặc tổng hợp<br>
   • Có 3 chế độ: Nhanh, Chi tiết, Chuyên sâu<br>
   • Xem điểm, đáp án và lưu lịch sử làm bài<br>

* 🎯 **Tự học:**<br>
   • Flashcard và bài tập luyện từ vựng, ngữ pháp, kỹ năng nghe – đọc<br>
   • Theo dõi trạng thái học: Luyện nhớ, Củng cố, Kiến thức nền<br>

* 📚 **Thư viện học tập:**<br>
   • Lưu nội dung cần ôn tập<br>
   • Chia thành 3 nhóm: Kiến thức – Kỹ năng – Tiến trình<br>
   • Hiển thị biểu đồ học tập theo thời gian<br>

* 🧭 **Lộ trình học:**<br>
   • Chọn mục tiêu học (Tổng hợp / Ôn tập / JLPT)<br>
   • Tự sinh lộ trình cá nhân hoá<br>
   • Không cần tài khoản – dữ liệu lưu trên máy<br>

* 💎 **Gói VIP:**<br>
   • Mở khóa toàn bộ chức năng nâng cao<br>
   • Thanh toán qua Apple Pay / Google Play<br>
   • Gói linh hoạt: Tháng, 3 tháng, 6 tháng, Năm, Vĩnh viễn<br>

---

### 2.2. Ứng dụng **Sakumi**

**Đối tượng sử dụng:**

* Học viên đã đăng ký khoá học chính thức tại Trung tâm Nhật ngữ Sakumi (có tài khoản đăng nhập)

Ứng dụng chuyên biệt phục vụ học viên trung tâm. Đồng bộ dữ liệu lớp học và cho phép học viên theo dõi toàn bộ quá trình học thực tế.

**Các chức năng chính:**

* 📘 **Bài học theo buổi:**<br>
   • Xem danh sách bài học được sắp xếp theo lịch học<br>
   • Nội dung: từ vựng, ngữ pháp, kỹ năng, mẫu câu, bảng chữ<br>
   • Trạng thái bài học: Chưa bắt đầu / Đã học / Vắng mặt / Vào trễ<br>

* 🧾 **Bài tập & kiểm tra:**<br>
   • Xem danh sách bài tập và bài kiểm tra được giao<br>
   • Làm bài và theo dõi kết quả<br>
   • Nhận phản hồi từ giáo viên trung tâm<br>

* 📊 **Tổng quan lớp học:**<br>
   • Hiển thị số buổi học, điểm danh, phần trăm hoàn thành bài tập<br>
   • Thống kê điểm trung bình bài tập và kiểm tra<br>

* 🧑‍🎓 **Quản lý thông tin cá nhân:**<br>
   • Cập nhật avatar, thông tin, đổi mật khẩu<br>
   • Liên kết tài khoản với lớp học thực tế<br>

* 💬 **Góp ý – Hỗ trợ:**<br>
   • Gửi phản hồi tới trung tâm<br>
   • Nhận thông báo, cập nhật, ưu đãi học phí<br>

* 🎁 **Ưu đãi học viên:**<br>
   • Gửi minh chứng hưởng trợ phí<br>
   • Nhận thông báo ưu đãi tự động trong app<br>

---

## 3. Đặc tả các chức năng chính Sakumi 247

### 3.1 Chức năng hiển thị cảnh báo giới hạn truy cập (Free user) { #toc-3-1}

??? book "Hiển thị cảnh báo giới hạn truy cập (nâng cấp VIP)"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị cảnh báo giới hạn truy cập |
    | **Phạm vi sử dụng** | Dành cho người dùng FREE khi truy cập vào nội dung chỉ dành cho VIP |
    | **Mô tả** | Khi người dùng chưa nâng cấp VIP nhưng bấm vào nội dung thuộc khoá học hoặc tính năng vip hệ thống sẽ hiển thị popup yêu cầu nâng cấp VIP với giá ưu đãi hiện tại. |
    | **Giao diện liên quan** | - Popup VIP với nút “Nâng cấp VIP” và “Đóng”<br> - Hình minh hoạ và nội dung marketing |
    | **Luồng thao tác chính** |1. Người dùng chưa đăng ký VIP<br>2. Truy cập vào nội dung học vip<br>3. Hệ thống hiển thị popup cảnh báo:<br>&emsp;• “Bài học này dành riêng cho thành viên VIP…”<br>4. Nhấn “Nâng cấp VIP” → điều hướng tới màn hình thanh toán<br>5. Nhấn “Đóng” → quay lại màn hình trước đó |
    | **Điều kiện hiển thị** | User chưa phải VIP, cố truy cập vào chức năng vip|
    | **Kết quả hiển thị** | Modal bật lên, không vào được bài học<br>Người dùng phải đóng popup hoặc nâng cấp |

### 3.2 Chức năng hiển thị cảnh báo bản miễn phí (Free user) { #toc-3-2 }

??? book "Hiển thị cảnh báo bản miễn phí (Free user)"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị cảnh báo bản miễn phí |
    | **Phạm vi sử dụng** | Hiển thị với tất cả người dùng chưa nâng cấp VIP khi mở ứng dụng hoặc sau khi trải nghiệm 1 số thao tác |
    | **Mô tả** | Hệ thống hiển thị popup cảm ơn vì đã sử dụng app, đồng thời thông báo rằng bản miễn phí sẽ có giới hạn chức năng và xuất hiện quảng cáo. Gợi ý người dùng nâng cấp lên bản **VIP** để sử dụng đầy đủ tính năng. |
    | **Giao diện liên quan** | - Popup cảm ơn có hình minh hoạ<br> - Nút “Nâng cấp VIP” và nút “Tiếp tục dùng bản miễn phí” |
    | **Luồng thao tác chính** | 1. Người dùng chưa có gói VIP<br>2. Sau khi mở app hoặc thực hiện một số thao tác (ví dụ: mở bài học VIP, học quá X phút)<br>3. Hệ thống hiển thị popup với nội dung:<br>&emsp;• “Cảm ơn bạn đã sử dụng ứng dụng…”<br>&emsp;• “Bản miễn phí có thể xuất hiện quảng cáo và giới hạn một số tính năng…”<br>4. Người dùng có thể:<br>&emsp;• Nhấn “Nâng cấp VIP” → đến màn hình thanh toán<br>&emsp;• Nhấn “Tiếp tục dùng bản miễn phí” → tắt popup |
    | **Điều kiện hiển thị** | Người dùng chưa phải VIP và đã thực hiện hành động kích hoạt điều kiện hiển thị |
    | **Kết quả hiển thị** | Modal popup bật lên, có thể tắt hoặc chuyển sang màn hình mua gói VIP |


### 3.3 Chức năng hiển thị quảng cáo (Free user) { #toc-3-3 }

??? book "Hiển thị quảng cáo (Free user)"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị quảng cáo trên phiên bản miễn phí |
    | **Phạm vi sử dụng** | Chỉ hiển thị với người dùng chưa nâng cấp VIP |
    | **Mô tả** | Trong bản miễn phí, hệ thống tự động hiển thị quảng cáo ở các vị trí được quy định sẵn, bao gồm quảng cáo banner, quảng cáo toàn màn hình (interstitial) và có thể có video ngắn. Người dùng VIP sẽ không thấy quảng cáo. |
    | **Giao diện liên quan** | - Banner quảng cáo (footer, giữa bài học)<br> - Quảng cáo toàn màn hình trước khi mở bài học VIP<br> - Quảng cáo video ngắn hiển thị ngẫu nhiên |
    | **Luồng thao tác chính** | 1. Người dùng truy cập app ở trạng thái chưa nâng cấp VIP<br>2. Khi chuyển tab, mở nội dung học, hoặc sau một khoảng thời gian, hệ thống sẽ:<br>&emsp;• Hiển thị banner cố định<br>&emsp;• Bật quảng cáo toàn màn hình có nút tắt sau vài giây<br>&emsp;• Hiển thị quảng cáo dạng video<br>3. Nếu người dùng nâng cấp VIP → tất cả quảng cáo được ẩn hoàn toàn |
    | **Điều kiện hiển thị** | Người dùng đang ở trạng thái chưa nâng cấp VIP |
    | **Kết quả hiển thị** | Quảng cáo hiển thị đúng vị trí, đúng điều kiện. Có thể tắt/quay lại sau khi hết thời gian yêu cầu. Không hiển thị nếu user là VIP |

### 3.4 Chức năng thanh toán nâng cấp VIP { #toc-3-4 }

??? book "Thanh toán nâng cấp VIP"

    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Thanh toán nâng cấp VIP |
    | **Phạm vi sử dụng** | Dành cho tất cả người dùng chưa là VIP có nhu cầu nâng cấp tài khoản |
    | **Mô tả** | Chức năng cho phép người dùng thực hiện thanh toán để nâng cấp lên gói VIP. Sau khi thanh toán thành công, tài khoản sẽ được chuyển sang trạng thái VIP, mở khóa toàn bộ nội dung không giới hạn và ẩn quảng cáo. |
    | **Giao diện liên quan** | - Popup giới thiệu gói VIP<br> - Màn hình chọn gói và thanh toán<br> - Modal xác nhận thanh toán từ hệ điều hành (iOS / Android)<br> - Thông báo thành công và cập nhật trạng thái tài khoản |
    | **Luồng thao tác chính** |<br>1. Người dùng bấm vào nút **"Nâng cấp VIP"** từ popup cảnh báo hoặc header ứng dụng<br>2. Chuyển sang màn hình chọn gói VIP<br>&emsp;– Hiển thị danh sách các gói: Tháng, 3 tháng, 6 tháng, 12 tháng, Vĩnh viễn<br>3. Người dùng chọn gói phù hợp → nhấn “Đăng tải thanh toán”<br>4. Hệ thống gọi thanh toán theo nền tảng:<br>&emsp;– iOS: Xác nhận qua Apple Pay (tài khoản iCloud)<br>&emsp;– Android: Xác nhận qua Google Play (tài khoản Google)<br>5. Người dùng xác thực giao dịch<br>6. Hệ thống xác nhận kết quả:<br>&emsp;– Thành công → chuyển sang VIP, hiển thị thông báo cảm ơn<br>&emsp;– Thất bại → hiển thị lỗi giao dịch và cho phép thử lại |
    | **Điều kiện hiển thị** | Người dùng chưa có trạng thái VIP |
    | **Kết quả hiển thị** | - Giao diện thanh toán xuất hiện đầy đủ danh sách gói và giá<br> - Sau thanh toán thành công:<br>&emsp;• Tài khoản được gắn trạng thái VIP<br>&emsp;• Các nội dung VIP được mở khóa toàn bộ<br>&emsp;• Gỡ bỏ toàn bộ quảng cáo khỏi ứng dụng<br> - Hiển thị badge VIP trên giao diện app<br> - Nếu giao dịch lỗi hoặc huỷ:<br>&emsp;• Hiển thị lỗi và cho phép thao tác lại |
    | **Trường hợp không có dữ liệu** | Nếu không có gói nào khả dụng hoặc lỗi kết nối → hiển thị thông báo: “Hiện chưa thể hiển thị danh sách gói VIP. Vui lòng thử lại sau.” |

### 3.5 Chức năng hiển thị điều khoản sử dụng { #toc-3-5 }

??? book "Hiển thị điều khoản sử dụng"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị điều khoản sử dụng |
    | **Phạm vi sử dụng** | Áp dụng cho tất cả người dùng truy cập ứng dụng |
    | **Mô tả** | Hiển thị toàn văn bản **Terms and Conditions** để người dùng có thể đọc rõ các điều khoản sử dụng trước khi thực hiện thanh toán hoặc sử dụng dịch vụ. |
    | **Giao diện liên quan** | - Mục “Điều khoản” tại màn hình thanh toán VIP<br> - Giao diện văn bản có scroll, được embed từ link điều khoản |
    | **Luồng thao tác chính** |<br>1. Người dùng tại màn hình thanh toán VIP<br>2. Nhấn vào dòng **"Điều Khoản"** ở chân trang<br>3. Hệ thống mở trang “Điều khoản sử dụng”<br>4. Giao diện hiển thị nội dung với định dạng tiêu đề, đoạn văn<br>5. Người dùng cuộn để đọc nội dung |
    | **Điều kiện hiển thị** | Người dùng truy cập trang thanh toán hoặc giao diện chính có link điều khoản |
    | **Kết quả hiển thị** | - Màn hình văn bản hiển thị đầy đủ nội dung Terms and Conditions<br> - Có thể cuộn đọc hoặc quay lại màn hình trước |
    | **Trường hợp không có dữ liệu** | Hiển thị dòng: “Không thể tải điều khoản sử dụng. Vui lòng thử lại sau.” |


### 3.6 Chức năng hiển thị chính sách riêng tư { #toc-3-6 }

??? book "Hiển thị chính sách riêng tư"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị chính sách riêng tư |
    | **Phạm vi sử dụng** | Áp dụng cho tất cả người dùng truy cập ứng dụng |
    | **Mô tả** | Hiển thị nội dung văn bản **Privacy Policy** được cung cấp qua dịch vụ TermsFeed. Chính sách này mô tả cách ứng dụng thu thập, lưu trữ và bảo vệ dữ liệu cá nhân của người dùng. |
    | **Giao diện liên quan** | - Mục “Chính sách riêng tư” tại màn hình thanh toán VIP<br> - Giao diện văn bản có scroll, được embed từ link của nhà cung cấp |
    | **Luồng thao tác chính** |<br>1. Người dùng tại màn hình thanh toán VIP<br>2. Nhấn vào dòng **"Chính sách riêng tư"** ở chân trang<br>3. Hệ thống mở trang “Chính sách riêng tư”<br>4. Giao diện hiển thị nội dung chi tiết từ TermsFeed<br>5. Người dùng có thể cuộn và đọc nội dung |
    | **Điều kiện hiển thị** | Người dùng truy cập trang thanh toán hoặc giao diện chính có link chính sách |
    | **Kết quả hiển thị** | - Nội dung chính sách được hiển thị đầy đủ<br> - Giao diện có thể quay lại màn hình trước đó |
    | **Trường hợp không có dữ liệu** | Hiển thị dòng: “Không thể tải chính sách riêng tư. Vui lòng thử lại sau.” |


### 3.7 Chức năng nhập mã quà tặng (VIP code) { #toc-3-x-1 }

??? book "Nhập mã quà tặng (VIP code)"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Nhập mã quà tặng để kích hoạt VIP |
    | **Phạm vi sử dụng** | Dành cho người dùng chưa VIP |
    | **Mô tả** | Người dùng nhập mã quà tặng theo định dạng cố định để kích hoạt quyền VIP. Mỗi người có tối đa 3 lần thử mỗi ngày. |
    | **Giao diện liên quan** | - Popup "Dùng mã quà tặng"<br> - Trường: Họ tên, SĐT, Mã quà tặng<br> - Nút “Kích hoạt mã” (ghi số lần còn lại) |
    | **Luồng thao tác chính** | 1. Truy cập app<br>2. Vào **Cài đặt → Nâng cấp VIP** hoặc nhấn biểu tượng **VIP** ở màn hình chính<br>3. Chọn “Dùng mã quà tặng”<br>4. Nhập đầy đủ họ tên, số điện thoại, mã quà tặng<br>5. Nhấn “Kích hoạt mã” |
    | **Điều kiện hiển thị** | - Nút "Kích hoạt mã" chỉ bật khi nhập đúng định dạng: 2 chữ cái + 4 chữ số (VD: AA1234)<br> - Nếu đúng cấu trúc nhưng sai mã → hiển thị lỗi “Mã không hợp lệ”<br> - Sau 3 lần sai → nút bị vô hiệu và hiện thông báo “Vui lòng thử lại vào ngày mai” |
    | **Kết quả hiển thị** | - Kích hoạt thành công → tài khoản chuyển sang VIP, hiện popup chúc mừng<br> - Sai mã → hiện lỗi “Mã không hợp lệ”, số lần thử giảm<br> - Hết 3 lần → disable nút, hiện dòng thông báo “Vui lòng thử lại vào ngày mai” |
    | **Trường hợp không có dữ liệu** | - Nếu thiếu bất kỳ trường nào → nút “Kích hoạt mã” không thể nhấn |


### 3.8 Chức năng quét mã quà tặng (QR code) { #toc-3-x-2 }

??? book "Quét mã quà tặng (QR code)"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Quét mã quà tặng để nhập nhanh VIP code |
    | **Phạm vi sử dụng** | Dành cho người dùng chưa VIP |
    | **Mô tả** | Cho phép người dùng quét mã QR để tự động điền vào ô mã quà tặng. Hệ thống vẫn yêu cầu nhấn “Kích hoạt mã” sau khi quét xong. |
    | **Giao diện liên quan** | - Biểu tượng QR bên cạnh trường mã<br> - Màn hình camera: vùng quét QR, nút chuyển camera trước/sau, nút chọn ảnh từ thư viện |
    | **Luồng thao tác chính** | 1. Truy cập app<br>2. Vào “Dùng mã quà tặng” → bấm icon QR bên ô “Mã quà tặng”<br>3. Chọn chế độ: camera trước/sau hoặc ảnh từ thư viện<br>4. Quét mã thành công → mã được tự động nhập<br>5. Nhấn “Kích hoạt mã” như bình thường |
    | **Điều kiện hiển thị** | - Mã QR đúng cấu trúc: 2 chữ cái + 4 số (VD: AB5678)<br> - Nếu sai định dạng → thông báo "Mã không hợp lệ" |
    | **Kết quả hiển thị** | - Quét thành công → tự động điền mã vào ô tương ứng<br> - Kích hoạt thành công → tài khoản chuyển sang VIP, hiện popup chúc mừng<br> - Sai mã → hiện lỗi “Mã không hợp lệ”, số lần thử giảm<br> - Hết 3 lần → disable nút, hiện dòng thông báo “Vui lòng thử lại vào ngày mai” |

#### 3.9 Chức năng khôi phục thanh toán (Restore Purchase) { #toc-3-x-3 }

??? book "Khôi phục thanh toán (Restore VIP purchase)"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Khôi phục thanh toán VIP |
    | **Phạm vi sử dụng** | Dành cho người dùng đã từng mua VIP, nhưng xoá app hoặc cài đặt lại trên thiết bị mới |
    | **Mô tả** | Cho phép người dùng khôi phục quyền VIP đã mua trước đó mà không cần thanh toán lại, dựa trên tài khoản Apple ID (iOS) hoặc tài khoản Google (Android) đã dùng để thanh toán trước đó. |
    | **Giao diện liên quan** | - Màn hình **Cài đặt → Khôi phục thanh toán**<br> - Nút “Khôi phục thanh toán” (biểu tượng vòng xoay) |
    | **Luồng thao tác chính** |1. Người dùng mở app trên thiết bị mới hoặc sau khi xoá cài lại<br>2. Vào **Cài đặt → Khôi phục thanh toán**<br>3. Hệ thống gửi yêu cầu kiểm tra trạng thái VIP gắn với Apple ID (iOS) hoặc tài khoản Google (Android)<br>4. Nếu tìm thấy giao dịch hợp lệ → khôi phục quyền VIP cho tài khoản đang dùng<br>5. Hiển thị thông báo khôi phục thành công hoặc thất bại |
    | **Điều kiện hiển thị** | - Chỉ hiển thị với user đang dùng bản FREE<br> - Không hiển thị nếu đã là VIP |
    | **Kết quả hiển thị** | - Thành công → hệ thống cập nhật trạng thái tài khoản sang VIP, hiện popup: “Khôi phục thành công, chúc mừng bạn!”<br> - Thất bại → hiện lỗi: “Không tìm thấy gói VIP nào đã mua với tài khoản hiện tại” |
    | **Trường hợp không có dữ liệu** | Không tìm thấy tài khoản từng mua VIP → không thay đổi trạng thái, hiển thị thông báo lỗi |
