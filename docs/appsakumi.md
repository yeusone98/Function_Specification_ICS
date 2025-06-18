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


### 3.7 Chức năng nhập mã quà tặng (VIP code) { #toc-3-7}

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


### 3.8 Chức năng quét mã quà tặng (QR code) { #toc-3-8 }

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

### 3.9 Chức năng khôi phục thanh toán (Restore Purchase) { #toc-3-9 }

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

### 3.10 Chức năng chọn trình độ học tập N5-N2 { #toc-3-10 }

??? book "Chức năng chọn trình độ học tập N5-N2"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Chức năng chọn trình độ học tập N5-N2 |
    | **Phạm vi sử dụng** | Áp dụng cho toàn bộ người dùng app (miễn phí và VIP) |
    | **Mô tả** | Chức năng cho phép người dùng chọn cấp độ phù hợp với trình độ tiếng Nhật hiện tại, từ đó hệ thống sẽ cá nhân hoá nội dung học (từ vựng, ngữ pháp, kỹ năng…) theo từng trình độ. |
    | **Giao diện liên quan** | - Giao diện chính có nút chọn trình độ (góc trên bên phải)<br>- Màn hình “Chọn trình độ” hiển thị các cấp độ từ N5 đến N2 và lựa chọn dành riêng cho học viên Sakumi |
    | **Luồng thao tác chính** | <br>1. Người dùng mở app<br>2. Nhấn vào nút cấp độ hiện tại (ví dụ: N5 – Bắt đầu) góc trên bên phải<br>3. Màn hình chuyển sang giao diện “Chọn trình độ”<br>4. Người dùng chọn cấp độ phù hợp:<br>&emsp;• N5 – Bắt đầu<br>&emsp;• N4 – Cơ bản<br>&emsp;• N3 – Sơ cấp<br>&emsp;• N2 – Trung cấp<br>&emsp;• Học viên Sakumi (dành cho học viên trung tâm)<br>5. Hệ thống lưu cấp độ được chọn và hiển thị nội dung tương ứng trong toàn bộ app |
    | **Điều kiện hiển thị** | Tất cả người dùng đều có thể truy cập chức năng này mà không cần đăng nhập |
    | **Kết quả hiển thị** | - Nội dung học (thư viện, bài học, flashcard…) được lọc theo trình độ đã chọn<br> - Cấp độ đã chọn được hiển thị cố định ở giao diện chính |
    | **Trường hợp không có dữ liệu** | Nếu trình độ chưa có nội dung, hiển thị thông báo: “Hiện chưa có nội dung cho cấp độ này” |

### 3.11 Chức năng quản lý từ vựng
#### 3.11.1 Chức năng hiển thị danh sách từ vựng theo chủ đề {#toc-3-11-1}

??? book "Hiển thị danh sách từ vựng theo chủ đề"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị danh sách từ vựng theo chủ đề |
    | **Phạm vi sử dụng** | Mục “Từ vựng” trong phần **Kiến thức nền** |
    | **Mô tả** | Hiển thị danh sách các nhóm từ vựng được phân chia theo chủ đề học trong cấp độ đã chọn (N5–N2). Mỗi nhóm từ gồm tiêu đề chủ đề, phần trăm hoàn thành và danh sách từ bên trong. Các từ đã đánh dấu “Đã thuộc” sẽ hiển thị bằng màu hồng nổi bật. |
    | **Giao diện liên quan** | - Màn hình “Kiến thức nền” → Từ vựng<br> - Các thẻ chủ đề: số thứ tự, tên chủ đề, thanh tiến độ<br> - Thẻ mở rộng hiển thị danh sách từ: mỗi từ là một ô riêng<br> - Từ đã thuộc: tô màu hồng |
    | **Luồng thao tác chính** |1. Học viên truy cập ứng dụng<br>2. Chọn cấp độ học (ví dụ: N5) từ góc trên cùng<br>3. Trong phần “Kiến thức nền”, chọn mục **Từ vựng**<br>4. Hệ thống hiển thị danh sách nhóm từ vựng theo chủ đề:<br>&emsp;• Mỗi thẻ: Số thứ tự, Tên chủ đề, % tiến độ<br>5. Nhấn vào một thẻ chủ đề để mở rộng nội dung<br>6. Từng từ trong nhóm hiển thị theo dạng ô<br>7. Từ đã học được đánh dấu “Đã thuộc” và có màu hồng nền |
    | **Điều kiện hiển thị** | Đã chọn cấp độ học và có dữ liệu từ vựng tương ứng |
    | **Kết quả hiển thị** | - Hiển thị chính xác các nhóm từ theo chủ đề<br> - Mỗi thẻ mở rộng hiển thị đầy đủ danh sách từ<br> - Từ “Đã thuộc” có màu nền hồng, “Chưa thuộc” có màu trắng<br> - Tiến độ chủ đề tính theo số từ đã thuộc |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: **“Hiện chưa có nội dung từ vựng cho cấp độ này”** |

#### 3.11.2 Chức năng bật/tắt dịch nghĩa từ vựng {#toc-3-11-2}

??? book "Bật/tắt dịch nghĩa từ vựng"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Bật/tắt dịch nghĩa từ vựng |
    | **Phạm vi sử dụng** | Hiển thị trong chi tiết nhóm từ vựng của Thư viện học tập |
    | **Mô tả** | Cho phép người dùng bật hoặc tắt việc hiển thị nghĩa tiếng Việt của các từ/cụm từ trong nhóm từ vựng. Giúp tập trung ghi nhớ từ Nhật và kiểm tra khả năng ghi nhớ. |
    | **Giao diện liên quan** | - Icon dịch (biểu tượng ngôn ngữ) góc trên cùng bên phải màn hình từ vựng<br> - Từ/cụm từ có thể ẩn/hiện phần nghĩa tương ứng dưới dạng toggle |
    | **Luồng thao tác chính** | 1. Người dùng truy cập app, vào thư viện học tập<br>2. Chọn tab "Từ vựng" → chọn nhóm từ bất kỳ<br>3. Tại màn hình từ vựng chi tiết → nhấn vào nút icon dịch (góc phải trên cùng)<br>4. Toàn bộ phần nghĩa tiếng Việt của từng từ sẽ được bật hoặc ẩn đi tương ứng |
    | **Điều kiện hiển thị** | Icon dịch nghĩa chỉ hiển thị khi đang ở màn hình chi tiết nhóm từ |
    | **Kết quả hiển thị** | - Khi bật: nghĩa tiếng Việt hiển thị ngay dưới mỗi từ<br> - Khi tắt: chỉ hiển thị từ/cụm từ tiếng Nhật, ẩn phần dịch<br> - Trạng thái toggle giữ nguyên khi quay lại nhóm từ |
    | **Trường hợp không có dữ liệu** | Nếu dữ liệu từ chưa có nghĩa tiếng Việt → dòng nghĩa sẽ không hiển thị dù đã bật dịch |

#### 3.11.3 Chức năng xem chi tiết từ vựng trong nhóm chủ đề {#toc-3-11-3}

??? book "Xem chi tiết nhóm từ vựng"
    | Trường                   | Nội dung |
    |--------------------------|----------|
    | **Tên chức năng**        | Xem chi tiết nhóm từ vựng |
    | **Phạm vi sử dụng**      | Dành cho người dùng đang học phần Từ vựng trong khối Kiến thức nền |
    | **Mô tả**                | Cho phép người dùng xem chi tiết toàn bộ từ vựng của một nhóm dưới dạng thẻ card lớn: có hình minh họa, từ khóa, phiên âm, nghĩa, trạng thái đã thuộc, nút phát âm và các nút hành động như: ⭐ thêm vào thư viện, 💡 đánh dấu đã thuộc. |
    | **Giao diện liên quan**  | - Màn hình “Từ vựng” của nhóm<br> - Các thẻ từ dạng card lớn có hình và thông tin chi tiết<br> - Nút Duyệt và Luyện tập |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Chọn cấp độ học (N5 → N2)<br>3. Chọn tab **Kiến thức nền** → chọn **Từ vựng**<br>4. Nhấn nút “Chi tiết” ở 1 nhóm từ vựng<br>5. Hệ thống hiển thị tất cả từ trong nhóm theo dạng card<br>6. Mỗi card hiển thị: hình ảnh, từ khóa, phiên âm, nghĩa, ví dụ, phát âm<br>7. Người dùng có thể:<br>&emsp;• Nhấn biểu tượng ⭐ **ngôi sao** để lưu từ vào **Thư viện học tập**<br>&emsp;• Nhấn biểu tượng 💡 **bóng đèn** để đánh dấu **đã thuộc** hoặc **chưa thuộc** |
    | **Điều kiện hiển thị**   | Dữ liệu từ vựng nhóm đã có hình ảnh và nội dung chi tiết |
    | **Kết quả hiển thị**     | - Card hiển thị đầy đủ: hình ảnh, phiên âm, nghĩa, ví dụ, trạng thái<br> - Các từ đã học có gắn nhãn “Đã thuộc”<br> - Có thể bấm nút loa để nghe phát âm<br> - Có thể lưu từ vào thư viện (icon ⭐ ngôi sao sáng khi đã lưu)<br> - Có thể thay đổi trạng thái đã thuộc (icon 💡 bóng đèn chuyển màu)<br> - Có thể chuyển sang chế độ **Duyệt** hoặc **Luyện tập** từ màn hình này |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Chưa có nội dung chi tiết cho nhóm này” |


#### 3.11.4 Chức năng duyệt từ vựng {#toc-3-11-4}

??? book "Duyệt từ vựng"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Duyệt từ vựng |
    | **Phạm vi sử dụng** | Từ vựng trong tab “Kiến thức nền” hoặc trong bài học cụ thể |
    | **Mô tả** | Cho phép học viên xem lại từ vựng đã học theo dạng flashcard một chiều. Mỗi card gồm từ, phiên âm, nghĩa và ví dụ minh họa. Học viên chọn “Đã thuộc” hoặc “Cần học lại”, đồng thời có thể “Quay lại” để xem từ trước. |
    | **Giao diện liên quan** | - Màn hình nhóm từ → nút “Duyệt”<br> - Card từ: không lật, hiển thị một chiều<br> - Thanh tiến độ ngang<br> - Nút “Đã thuộc”, “Cần học lại”, “Quay lại” (từ card thứ 2)<br> - Màn hình kết thúc duyệt |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào tab “Kiến thức nền” → chọn “Từ vựng”<br>4. Chọn nhóm từ → nhấn “Duyệt”<br>5. Lần lượt xem từng flashcard<br>6. Nhấn “Đã thuộc” hoặc “Cần học lại” để tiếp tục<br>7. Từ card số 2 có thể nhấn “Quay lại” để về card trước<br>8. Kết thúc hiển thị kết quả tổng hợp |
    | **Điều kiện hiển thị** | Nhóm từ vựng có dữ liệu đầy đủ (từ, nghĩa, ví dụ) |
    | **Kết quả hiển thị** | - Từ “Đã thuộc” sẽ hiển thị màu nền hồng trong nhóm từ<br> - % tiến độ nhóm từ và tổng từ vựng được cập nhật tăng<br> - Từ chọn “Cần học lại” sẽ không tính % hoàn thành<br> - Nếu từ đã từng là “Đã thuộc” nhưng chọn lại “Cần học lại” → phần trăm sẽ bị trừ |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có từ nào để duyệt trong nhóm này” và nút “Quay lại” |

#### 3.11.5 Chức năng luyện tập từ vựng - chế độ Học {#toc-3-11-5}

??? book "Luyện tập từ vựng – chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập từ vựng – chế độ Học |
    | **Mô tả** | Chức năng cho phép học viên luyện tập từ vựng theo hai dạng thẻ:<br>&emsp;• **Card ghi nhớ nội dung**: hiển thị từ, nghĩa, ví dụ<br>&emsp;• **Flashcard**: dạng lật thẻ gồm câu ví dụ → nghĩa, hình ảnh, loại từ<br>Sau một số thẻ sẽ chèn các loại câu hỏi kiểm tra ghi nhớ như: trắc nghiệm, sắp xếp từ và nối từ. |
    | **Giao diện liên quan** | - Mục “Từ vựng” → nhấn nút “Luyện tập” → chọn chế độ “Học”<br> - Giao diện card ghi nhớ:<br>&emsp;• Từ vựng, nghĩa, ví dụ, nút “Tiếp tục”<br> - Giao diện flashcard:<br>&emsp;• Mặt trước: câu ví dụ có từ cần học + nút phát âm<br>&emsp;• Mặt sau: hình ảnh, nghĩa, loại từ, ví dụ dịch<br>&emsp;• Nút “Tiếp theo”, “Hoàn thành”, “Tiếp tục”<br> - Giao diện câu hỏi:<br>&emsp;• Trắc nghiệm 1 đáp án<br>&emsp;• Sắp xếp từ: chạm chọn theo thứ tự đúng<br>&emsp;• Nối từ: nối cặp từ – nghĩa |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào tab “Kiến thức nền” → chọn “Từ vựng”<br>4. Chọn nhóm từ → nhấn “Luyện tập” và chọn chế độ “Học”<br>5. Lần lượt xem từng thẻ:<br>&emsp;• Nếu là ghi nhớ: hiển thị 1 mặt → nhấn “Tiếp tục”<br>&emsp;• Nếu là flashcard: nhấn “Tiếp theo” để lật, nhấn “Hoàn thành” → “Tiếp tục”<br>6. Sau một số thẻ, hệ thống tự chèn 1 trong 3 loại câu hỏi:<br>&emsp;• Trắc nghiệm chọn 1 đáp án đúng<br>&emsp;• Sắp xếp từ thành câu hoàn chỉnh<br>&emsp;• Nối từ với nghĩa đúng<br>7. Trả lời đúng → tiếp tục<br>8. Trả lời sai đến một tiến độ nhất định bắt buộc phải trả lời đúng hết mới có thể tiếp tục học |
    | **Chi tiết hiển thị** | - **Card ghi nhớ nội dung**:<br>&emsp;• Từ vựng, nghĩa tiếng Việt<br>&emsp;• Ví dụ tiếng Nhật (highlight từ) + dịch nghĩa<br>&emsp;• Nút “Tiếp tục”<br><br> - **Flashcard**:<br>&emsp;• Mặt trước: câu ví dụ, nút phát âm<br>&emsp;• Mặt sau: hình ảnh, nghĩa, loại từ, ví dụ dịch<br>&emsp;• Nút “Tiếp theo”, “Hoàn thành”, “Tiếp tục”<br><br> - **Câu hỏi kiểm tra**:<br>&emsp;• Trắc nghiệm: chọn đáp án đúng<br>&emsp;• Sắp xếp từ<br>&emsp;• Nối từ – nghĩa<br><br> - **Phản hồi**:<br>&emsp;• Trả lời đúng: chuyển tiếp<br>&emsp;• Trả lời sai: hiện đáp án đúng + bắt thử lại |
    | **Kết quả hiển thị** | - Khi hoàn tất toàn bộ thẻ và câu hỏi → hiển thị “Chúc mừng đã hoàn thành phần học” |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có nội dung để luyện tập” |

#### 3.11.6 Chức năng luyện tập từ vựng – chế độ FlashCard { #toc-3-11-6 }

??? book "Luyện tập từ vựng – chế độ FlashCard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập từ vựng – chế độ FlashCard |
    | **Mô tả**                  | Chức năng giúp học viên ôn luyện từ vựng bằng flashcard có thể lật, phát âm thanh và tùy chỉnh hiển thị. Tương tự chức năng “Học qua Flashcard” nhưng không ảnh hưởng tới % tiến độ từ vựng. |
    | **Giao diện liên quan**   | - Mục “Từ vựng” → chọn “Luyện tập” → chọn “FlashCard”<br> - Giao diện flashcard tương tác<br> - Có menu tuỳ chọn: Xem tất cả, Xáo trộn, Tự chạy, FlashCard 1/2/3 |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào tab “Kiến thức nền” → chọn “Từ vựng”<br>4. Chọn nhóm từ → nhấn “Luyện tập” → chọn chế độ “FlashCard”<br>5. Lựa chọn loại flashcard<br>6. Tuỳ chỉnh hiển thị và bắt đầu luyện tập |
    | **Chi tiết hiển thị**     | • **Loại flashcard**:<br>&emsp;– **Loại 1**: Mặt trước: chữ Hán, phiên âm, nghĩa, ví dụ minh hoạ; mặt sau: dịch nghĩa câu ví dụ<br>&emsp;– **Loại 2**: Mặt trước: hình ảnh + nghĩa; mặt sau: chữ Hán + phiên âm + ví dụ<br>&emsp;– **Loại 3**: Mặt trước: câu ví dụ tiếng Nhật (highlight từ); mặt sau: nghĩa, từ khoá, hình, phiên âm<br><br>• **Tùy chọn:**<br>&emsp;– **Xem tất cả**: Bật → hiện tất cả từ (đã thuộc + chưa thuộc); Tắt → chỉ hiện từ chưa thuộc<br>&emsp;– **Xáo trộn**: Trộn ngẫu nhiên các thẻ trong nhóm hiện tại<br>&emsp;– **Tự chạy**: Chuyển flashcard tự động theo tốc độ: Tự chạy / Chậm / Bình thường / Nhanh<br>&emsp;– **FlashCard 1/2/3**: Chuyển đổi nhanh loại flashcard đang dùng<br><br>• **Tương tác:**<br>&emsp;– Bấm 1 lần để lật mặt trước/sau<br>&emsp;– Nhấn icon loa để phát âm<br>&emsp;– Dùng nút trái/phải để chuyển flashcard<br>&emsp;– Lướt sang trái/phải (swipe) để chuyển nhanh giữa các flashcard (gesture tương đương nút điều hướng)<br>&emsp;– Nhấn vào trạng thái “Đã thuộc” / “Chưa thuộc” để cập nhật lại trạng thái từ<br>&emsp;– Khi trạng thái thay đổi, hệ thống tự cập nhật % tiến độ học từ vựng |
    | **Kết quả hiển thị**      | - Flashcard hiển thị đúng loại đã chọn<br> - Tùy chọn sáng (enabled) hoặc xám (disabled) theo trạng thái thực tế<br> - Trạng thái từ “Đã thuộc” / “Chưa thuộc” được cập nhật và phản ánh trực quan trên thẻ<br> - Khi tất cả từ trong nhóm đều là “Đã thuộc” → hiển thị màn hình hoàn thành với icon cúp, dòng “Chúc mừng bạn hoàn thành Flashcard” và nút “Xem tất cả”<br>&emsp;→ Nhấn “Xem tất cả” sẽ bật chế độ hiển thị lại toàn bộ từ |
    | **Trường hợp không có dữ liệu** | - Nếu không còn flashcard nào cần học (và chưa bật "Xem tất cả") → hiển thị: “Không có nội dung để luyện tập” |


#### 3.11.7 Chức năng luyện tập từ vựng – chế độ Thử thách { #toc-3-11-7 }

??? book "Luyện tập từ vựng – chế độ Thử thách"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập từ vựng – chế độ Thử thách |
    | **Mô tả**                 | Chức năng giúp học viên kiểm tra khả năng ghi nhớ từ vựng thông qua hình thức trắc nghiệm có thời gian giới hạn và số lần sai cố định. |
    | **Giao diện liên quan**   | - Mục “Từ vựng” → nhấn “Luyện tập” → chọn “Thử thách”<br> - Giao diện câu hỏi gồm hình ảnh, chữ Hán, 4 đáp án tiếng Việt<br> - Có đồng hồ đếm thời gian và biểu tượng sao hiển thị lượt sai |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào tab “Kiến thức nền” → chọn “Từ vựng”<br>4. Chọn nhóm từ → nhấn “Luyện tập” và chọn chế độ “Thử thách”<br>5. Trả lời lần lượt các câu hỏi trắc nghiệm<br>6. Mỗi câu hỏi có giới hạn thời gian và tối đa 3 lượt sai<br>7. Trả lời đúng → tiếp tục sang câu tiếp theo<br>8. Trả lời sai → mất 1 sao<br>9. Sai 3 lần hoặc hết câu → hiển thị popup kết thúc |
    | **Chi tiết hiển thị**     | • Câu hỏi hiển thị:<br>&emsp;– Hình ảnh minh hoạ<br>&emsp;– Chữ Hán/từ cần đoán<br>&emsp;– 4 đáp án nghĩa tiếng Việt (1 đúng, 3 nhiễu)<br>&emsp;– Đáp án đúng: viền xanh; sai: viền đỏ<br><br>• Thanh công cụ:<br>&emsp;– **Đồng hồ đếm ngược** (ví dụ 10 giây/câu)<br>&emsp;– **3 sao**: thể hiện số lần sai còn lại<br><br>• Popup kết thúc:<br>&emsp;– Nếu thắng: “Chúc mừng bạn đã vượt qua thử thách!”<br>&emsp;– Nếu thua (mất hết sao): “Thật tiếc, bạn không vượt qua được thử thách”<br>&emsp;– Có 2 nút: “Quay lại” và “Làm lại” |
    | **Kết quả hiển thị**      | - Trả lời đúng/sai được phản hồi ngay<br> - Giao diện cập nhật số sao còn lại và thời gian thực tế<br> - Hiển thị popup tổng kết kết quả (Win/Lose)<br> - Không ảnh hưởng đến % tiến độ từ vựng |
    | **Trường hợp không có dữ liệu** | - Nếu nhóm từ không có dữ liệu → hiển thị “Không có nội dung để luyện tập” |

### 3.12 Chức năng quản lý ngữ pháp

#### 3.12.1 Hiển thị danh sách ngữ pháp theo chủ đề { #toc-3-12-1}

??? book "Hiển thị danh sách ngữ pháp"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị danh sách ngữ pháp |
    | **Phạm vi sử dụng** | Dành cho người dùng truy cập phần Ngữ pháp trong tab Kiến thức nền |
    | **Mô tả** | Hiển thị danh sách các điểm ngữ pháp theo từng cấp độ (N5 → N2). Mỗi điểm ngữ pháp gồm tiêu đề (cấu trúc tiếng Nhật) và mô tả ngắn (tiếng Việt). Người dùng có thể nhấn chọn nhiều điểm để thêm vào thư viện học tập cá nhân. |
    | **Giao diện liên quan** | - Màn hình danh sách ngữ pháp theo cấp độ<br> - Nút icon ngôi sao (bật/tắt chế độ chọn)<br> - Checkbox chọn từng điểm ngữ pháp<br> - Thanh tác vụ “Thêm vào thư viện” kèm số lượng đã chọn |
    | **Luồng thao tác chính** | <br>1. Người dùng truy cập ứng dụng<br>2. Chọn cấp độ học (N5 → N2)<br>3. Từ màn hình chính → vào mục “Ngữ pháp” trong tab Kiến thức nền<br>4. Hệ thống hiển thị toàn bộ danh sách ngữ pháp<br>5. Người dùng có thể:<br> • Nhấn vào icon ngôi sao để bật chế độ chọn nhiều mục<br> • Mỗi điểm ngữ pháp hiển thị thêm checkbox chọn<br> • Tích chọn các điểm ngữ pháp mong muốn<br> • Nhấn nút “Thêm vào thư viện” để lưu lại<br> 6. Hệ thống cập nhật và hiển thị thông báo “Đã cập nhật thư viện!” |
    | **Điều kiện hiển thị** | Dữ liệu ngữ pháp đã được cấu hình theo cấp độ và buổi học |
    | **Kết quả hiển thị** | - Hiển thị danh sách đúng theo cấp độ<br> - Mỗi điểm ngữ pháp gồm tiêu đề và mô tả<br> - Khi bật chế độ chọn: hiển thị checkbox chọn<br> - Hiển thị thanh “Thêm vào thư viện” khi có điểm được chọn<br> - Hiển thị thông báo xác nhận sau khi thêm |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Chưa có dữ liệu ngữ pháp cho cấp độ này” |


#### 3.12.2 Chức năng xem video ngữ pháp {#toc-3-12-2}

??? book "Xem video ngữ pháp"
    | Trường                   | Nội dung |
    |--------------------------|----------|
    | **Tên chức năng**        | Xem video ngữ pháp |
    | **Phạm vi sử dụng**      | Dành cho người dùng học phần Ngữ pháp trong khối Kiến thức nền |
    | **Mô tả**                | Cho phép người dùng xem video bài giảng tương ứng với điểm ngữ pháp đang học. Video hỗ trợ phát âm, giải thích và ví dụ minh họa sinh động, có thể điều chỉnh tốc độ và chuyển toàn màn hình để xem rõ hơn. |
    | **Giao diện liên quan**  | - Màn hình chi tiết điểm ngữ pháp<br> - Popup hiển thị trình phát video YouTube tích hợp |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Chọn cấp độ học (N5 → N2)<br>3. Từ màn hình chính vào mục **Ngữ pháp** trong tab **Kiến thức nền**<br>4. Chọn điểm ngữ pháp bất kỳ → hiển thị màn hình chi tiết<br>5. Nhấn nút “Video” ở cuối màn hình<br>6. Video được mở ở dạng popup phía dưới màn hình<br>7. Người dùng có thể phát, tạm dừng, điều chỉnh tốc độ, bật toàn màn hình hoặc đóng video |
    | **Chi tiết hiển thị**     | - Trình phát YouTube tích hợp<br> - Có thể điều chỉnh tốc độ từ **0.25x** đến **2.0x**<br> - Có nút tắt video (icon ❌ ở góc trên bên phải popup)<br> - Hỗ trợ xem cả **dọc** và **ngang** màn hình<br> - Khi phát video, **không thể cuộn màn hình để xem nội dung chi tiết ngữ pháp** |
    | **Kết quả hiển thị**     | - Video tương ứng điểm ngữ pháp được phát trong popup<br> - Trình phát hoạt động ổn định, tùy chỉnh tốc độ linh hoạt<br> - Người dùng có thể học theo video một cách trực quan, sinh động |
    | **Trường hợp không có dữ liệu** | - Nếu điểm ngữ pháp không có video → ẩn nút “Video” |

#### 3.12.3 Chức năng luyện tập ngữ pháp – chế độ Trắc nghiệm {#toc-3-12-3}

??? book "Luyện tập ngữ pháp – chế độ Trắc nghiệm"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp – chế độ Trắc nghiệm |
    | **Phạm vi sử dụng**       | Dành cho người dùng đang học phần Ngữ pháp trong khối Kiến thức nền |
    | **Mô tả**                 | Cho phép người dùng ôn tập ngữ pháp thông qua các dạng câu hỏi trắc nghiệm: sắp xếp từ thành câu và điền từ còn thiếu. Các điểm ngữ pháp liên quan sẽ được highlight màu hồng để người học dễ nhận diện. |
    | **Giao diện liên quan**   | - Màn hình chi tiết điểm ngữ pháp<br> - Popup chọn chế độ → chọn “Trắc nghiệm” |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Chọn cấp độ học (N5 → N2)<br>3. Vào tab “Kiến thức nền” → chọn “Ngữ pháp”<br>4. Chọn điểm ngữ pháp cụ thể → nhấn “Luyện tập” → chọn “Trắc nghiệm”<br>5. Thực hiện từng câu trắc nghiệm<br>6. Nhấn “Kết thúc” → popup xác nhận nộp bài<br>7. Nhấn “Xem đáp án” để hiển thị kết quả |
    | **Chi tiết hiển thị**     | - Các dạng bài:<br>&emsp;• Sắp xếp từ thành câu có nghĩa<br>&emsp;• Điền từ vào chỗ trống<br>- Thành phần hiển thị:<br>&emsp;• Vùng câu hỏi có highlight từ trọng tâm<br>&emsp;• Danh sách lựa chọn dạng nút<br>&emsp;• Bộ đếm câu hỏi (VD: 2/13) + điều hướng trái/phải<br>&emsp;• Nút “Xem hướng dẫn” trên cùng<br>&emsp;• Nút “Kết thúc” để nộp bài<br>- Popup xác nhận luôn hiển thị khi nhấn “Kết thúc”, kể cả khi đã làm hết tất cả các câu hỏi. Có 2 tùy chọn:<br>&emsp;• “Làm lại”: quay về bài<br>&emsp;• “Xem đáp án”: hiển thị kết quả |
    | **Kết quả hiển thị**      | - Hiển thị từng câu:<br>&emsp;• Đáp án người dùng chọn<br>&emsp;• Đáp án đúng<br>&emsp;• Màu xanh: đúng, màu đỏ: sai<br>- Hiển thị điểm tổng kết (thang 10)<br>- Hiển thị phản hồi theo điểm số (VD: "Cố gắng hơn nữa nhé") |
    | **Trường hợp không có dữ liệu** | - Nếu điểm ngữ pháp không có bài trắc nghiệm → ẩn nút “Luyện tập” |

#### 3.12.4 Chức năng luyện tập ngữ pháp – chế độ Trắc nghiệm {#toc-3-12-4}

??? book "Luyện tập ngữ pháp – chế độ Trắc nghiệm"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp – chế độ Trắc nghiệm |
    | **Phạm vi sử dụng**       | Dành cho người dùng đang học phần Ngữ pháp trong khối Kiến thức nền |
    | **Mô tả**                 | Cho phép người dùng ôn tập ngữ pháp thông qua các dạng câu hỏi trắc nghiệm: sắp xếp từ thành câu và điền từ vào chỗ trống. Các từ liên quan đến điểm ngữ pháp sẽ được highlight màu hồng để dễ nhận diện. |
    | **Giao diện liên quan**   | - Màn hình chi tiết điểm ngữ pháp<br> - Popup chọn chế độ → chọn “Trắc nghiệm” |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Chọn cấp độ học (N5 → N2)<br>3. Vào tab “Kiến thức nền” → chọn “Ngữ pháp”<br>4. Chọn điểm ngữ pháp → nhấn “Luyện tập” → chọn chế độ “Trắc nghiệm”<br>5. Trả lời từng câu hỏi trắc nghiệm<br>6. Nhấn “Kết thúc” → hiển thị popup xác nhận nộp bài<br>7. Nhấn “Xem đáp án” để xem kết quả |
    | **Chi tiết hiển thị**     | - **Dạng bài:**<br>&emsp;• Sắp xếp thành câu có nghĩa<br>&emsp;• Chọn đáp án đúng để điền vào chỗ trống<br>- **Thành phần giao diện:**<br>&emsp;• Vùng câu hỏi có từ liên quan được highlight màu hồng<br>&emsp;• Lựa chọn dạng nút, có thể chọn hoặc kéo thả (nếu có)<br>&emsp;• Bộ điều hướng chuyển câu (mũi tên trái/phải)<br>&emsp;• Bộ đếm câu hỏi (VD: 6/13)<br>&emsp;• Nút “Xem hướng dẫn”<br>&emsp;• Nút “Kết thúc”<br>- **Popup xác nhận nộp bài:**<br>&emsp;• Dù người dùng đã làm hết câu hỏi hay chưa vẫn luôn hiển thị popup xác nhận<br>&emsp;• Có dòng trạng thái: “Số câu chưa hoàn thành: X/Y” (VD: 11/13)<br>&emsp;• Có 2 lựa chọn:<br>&emsp;&emsp;– “Làm lại”: quay lại bài làm<br>&emsp;&emsp;– “Xem đáp án”: nộp bài và hiển thị kết quả |
    | **Kết quả hiển thị**      | - Từng câu:<br>&emsp;• Đáp án người dùng chọn (highlight)<br>&emsp;• Đáp án đúng<br>&emsp;• Hiển thị màu xanh nếu đúng, đỏ nếu sai<br> - Điểm tổng kết (thang 10)<br> - Phản hồi tổng quát theo điểm số (VD: “Điểm số chưa ổn lắm! Cố gắng hơn nữa nhé”) |
    | **Trường hợp không có dữ liệu** | - Nếu điểm ngữ pháp không có dữ liệu trắc nghiệm → ẩn nút “Luyện tập” |



### 3.13 Chức quản lý Hán tự
#### 3.13.1 Chức năng hiển thị danh sách Hán tự theo nhóm chủ đề {#toc-3-13-1}

??? book "Hiển thị danh sách Hán tự"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Hiển thị danh sách Hán tự theo nhóm chủ đề |
    | **Phạm vi sử dụng**       | Dành cho người dùng đang học phần Hán tự trong khối Kiến thức nền |
    | **Mô tả**                 | Cho phép người học theo dõi danh sách Hán tự theo từng nhóm chủ đề (ví dụ: Số đếm, Thời gian...), kiểm tra tiến độ đã thuộc và xem chi tiết từng Hán tự kèm phiên âm – nghĩa – cách đọc. |
    | **Giao diện liên quan**   | - Màn hình danh sách Hán tự N5 → N1<br> - Mỗi nhóm hiển thị theo block số thứ tự + tên chủ đề + % tiến độ<br> - Bên trong hiển thị danh sách Hán tự dưới dạng button chữ Nhật kèm nghĩa |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Chọn cấp độ học (N5 → N2)<br>3. Từ màn hình chính → vào mục “Hán tự” trong tab Kiến thức nền<br>4. Chọn 1 nhóm Hán tự → hiển thị danh sách Hán tự tương ứng<br>5. Bấm vào từng Hán tự để xem popup chi tiết |
    | **Chi tiết hiển thị**     | - Mỗi nhóm hiển thị: Tên + tiến độ phần trăm + danh sách Hán tự<br> - Mỗi Hán tự hiển thị trong 1 ô: Kanji + nghĩa tiếng Việt<br> - **Các Hán tự đã đánh dấu “Đã thuộc” sẽ được tô màu hồng**<br> - Khi bấm vào 1 Hán tự, hiện popup chi tiết:<br>&emsp;• Hán tự to chính giữa<br>&emsp;• Cách đọc (Onyomi, Kunyomi)<br>&emsp;• Nghĩa tiếng Việt<br>&emsp;• Các ví dụ sử dụng hán tự|
    | **Kết quả hiển thị**      | - Người dùng xem được toàn bộ Hán tự theo nhóm<br> - Hán tự được tô hồng nếu đã đánh dấu "Đã thuộc"<br> - Bấm vào từng từ xem được popup chi tiết rõ ràng<br> - Phần trăm tiến độ được tính theo số từ đã thuộc trong nhóm |
    | **Trường hợp không có dữ liệu** | - Hiển thị thông báo “Không có dữ liệu Hán tự cho nhóm này” |

#### 3.13.2 Chức năng xem chi tiết Hán tự {#toc-3-13-2}

??? book "Xem chi tiết Hán tự"
    | Trường                       | Nội dung |
    |------------------------------|----------|
    | **Tên chức năng**           | Xem chi tiết Hán tự |
    | **Phạm vi sử dụng**         | Dành cho người học phần Hán tự trong khối Kiến thức nền |
    | **Mô tả**                   | Hiển thị chi tiết từng Hán tự trong nhóm, bao gồm nghĩa, cách đọc, bộ thủ, từ vựng liên quan và cách ghi nhớ. Có thể đánh dấu đã thuộc 💡 và lưu vào thư viện ⭐. |
    | **Giao diện liên quan**     | - Màn hình chi tiết sau khi nhấn vào 1 Hán tự từ danh sách<br> - Có biểu tượng 💡 (đã thuộc), ⭐ (lưu thư viện) ở góc trên bên phải |
    | **Luồng thao tác chính**    | 1. Người dùng truy cập ứng dụng<br>2. Vào tab “Hán tự” từ Kiến thức nền<br>3. Chọn nhóm Hán tự<br>4. Nhấn vào 1 Hán tự để xem chi tiết<br>5. Hệ thống hiển thị popup hoặc màn hình mới với toàn bộ thông tin |
    | **Chi tiết hiển thị**       | - **Nghĩa:** hiển thị nghĩa chính (VD: Thiên = Nghìn)<br> - **Cách ghi nhớ:** hình ảnh minh họa + mô tả ghi nhớ<br> - **Âm đọc:**<br>&emsp;• Âm Kun: hiển thị dưới dạng tag (VD: ち)<br>&emsp;• Âm On: hiển thị nhiều tag (VD: セン, ゼン)<br> - **Bộ thủ:** ký hiệu bộ (VD: 十)<br> - **Từ vựng liên quan:** hiển thị chữ, phiên âm, nghĩa<br> - **Phát âm:** nhấn nút loa 🔊 để nghe<br> - **Biểu tượng:**<br>&emsp;• 💡 Bóng đèn: nhấn để đánh dấu **đã thuộc** hoặc **bỏ đánh dấu**<br>&emsp;• ⭐ Ngôi sao: nhấn để **lưu vào thư viện** hoặc **gỡ khỏi thư viện** |
    | **Kết quả hiển thị**        | - Hiển thị đầy đủ nội dung chi tiết<br> - Những Hán tự đã thuộc có nền hồng trong danh sách<br> - Biểu tượng 💡 và ⭐ thay đổi trạng thái theo hành động người dùng |
    | **Trường hợp không có dữ liệu** | - Hiển thị “Không có dữ liệu chi tiết cho Hán tự này” |

#### 3.13.3 Chức năng duyệt Hán tự {#toc-3-13-3}

??? book "Duyệt Hán tự"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Duyệt Hán tự |
    | **Phạm vi sử dụng** | Hán tự trong tab “Kiến thức nền” hoặc trong bài học cụ thể |
    | **Mô tả** | Cho phép học viên xem lại các chữ Hán đã học theo dạng flashcard một chiều. Mỗi card gồm chữ Hán, nghĩa tiếng Việt, âm đọc (Kun và On). Học viên có thể chọn “Đã thuộc” hoặc “Cần học lại” để cập nhật tiến độ ghi nhớ. |
    | **Giao diện liên quan** | - Màn hình nhóm Hán tự → nút “Duyệt”<br> - Giao diện flashcard không lật, hiển thị một chiều<br> - Có thanh tiến độ ngang phía trên<br> - Nút “Đã thuộc”, “Cần học lại”, và “Quay lại” (từ card thứ 2)<br> - Màn hình kết thúc duyệt (thống kê kết quả) |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Chọn cấp độ học (VD: N5 → N2)<br>3. Vào tab “Kiến thức nền” → chọn “Hán tự”<br>4. Chọn nhóm Hán tự → nhấn “Duyệt”<br>5. Lần lượt xem từng Hán tự dạng flashcard<br>6. Nhấn “Đã thuộc” hoặc “Cần học lại” để tiếp tục<br>7. Từ card số 2 có thể nhấn “Quay lại” để về card trước<br>8. Sau khi hết sẽ hiển thị màn hình thống kê kết quả |
    | **Điều kiện hiển thị** | Nhóm Hán tự có dữ liệu đầy đủ (chữ, nghĩa, âm đọc) |
    | **Kết quả hiển thị** | - Những Hán tự chọn “Đã thuộc” sẽ được tô nền hồng trong danh sách<br> - % tiến độ nhóm Hán tự được cập nhật tương ứng<br> - Nếu chọn “Cần học lại” thì không tăng tiến độ<br> - Nếu chữ đã là “Đã thuộc” nhưng chọn lại “Cần học lại” → phần trăm tiến độ sẽ giảm |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có Hán tự nào để duyệt trong nhóm này” và nút “Quay lại” |

#### 3.13.4 Chức năng luyện tập Hán tự – chế độ Học {#toc-3-13-4}

??? book "Luyện tập Hán tự – chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Hán tự – chế độ Học |
    | **Phạm vi sử dụng** | Hán tự trong tab “Kiến thức nền” |
    | **Mô tả** | Cho phép học viên luyện tập từng chữ Hán theo hai loại thẻ:<br>&emsp;• Flashcard: có thao tác lật mặt thẻ, xác nhận hoàn thành<br>&emsp;• Ghi nhớ nội dung: chỉ hiển thị một chiều (không lật)<br>Sau một số thẻ sẽ có câu hỏi kiểm tra ghi nhớ (trắc nghiệm). |
    | **Giao diện liên quan** | - Danh sách Hán tự → nút “Luyện tập” → chọn chế độ “Học”<br> - Giao diện flashcard:<br>&emsp;• Mặt trước: chữ Hán<br>&emsp;• Mặt sau: nghĩa, âm On, âm Kun, âm Hán Việt, từ vựng ví dụ<br> - Giao diện ghi nhớ nội dung:<br>&emsp;• Không có mặt sau<br> - Giao diện câu hỏi:<br>&emsp;• Trắc nghiệm 1 đáp án đúng |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Chọn cấp độ học (VD: N5 → N2)<br>3. Vào tab “Kiến thức nền” → chọn “Hán tự”<br>4. Chọn nhóm → nhấn “Luyện tập” → chọn “Học”<br>5. Hiển thị từng flashcard hoặc ghi nhớ nội dung<br>6. Với flashcard:<br>&emsp;• Nhấn “Tiếp theo” → lật mặt sau<br>&emsp;• Nhấn “Hoàn thành” → hiện nút “Tiếp tục” để chuyển sang từ mới<br>7. Với ghi nhớ nội dung:<br>&emsp;• Nhấn “Hoàn thành” → chuyển sang từ mới luôn<br>8. Sau một số thẻ hệ thống chèn câu hỏi trắc nghiệm<br>9. Trả lời đúng → tiếp tục<br>10. Trả lời sai → hiện đáp án đúng, yêu cầu thử lại |
    | **Chi tiết hiển thị** | - Flashcard:<br>&emsp;• Mặt trước: chữ Hán<br>&emsp;• Mặt sau: âm On, âm Kun, Hán Việt, nghĩa, từ vựng<br> - Ghi nhớ nội dung:<br>&emsp;• Không có mặt sau<br> - Câu hỏi trắc nghiệm: chọn nghĩa đúng<br> - Nút thao tác:<br>&emsp;• “Tiếp theo”, “Hoàn thành”, “Tiếp tục” |
    | **Kết quả hiển thị** | - Khi hoàn thành toàn bộ thẻ và câu hỏi → hiển thị “Chúc mừng đã hoàn thành phần học” |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có Hán tự nào để luyện tập trong nhóm này” |

#### 3.13.5 Chức năng luyện tập Hán tự – chế độ Học {#toc-3-13-5}

??? book "Luyện tập Hán tự – chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Hán tự – chế độ Học |
    | **Mô tả** | Chức năng cho phép học viên luyện tập Hán tự theo hai dạng thẻ:<br>&emsp;• **Flashcard**: hiển thị chữ Hán và yêu cầu ghi nhớ cách đọc – nghĩa – ví dụ<br>&emsp;• **Card ghi nhớ nội dung**: hiển thị luôn toàn bộ nội dung (âm đọc, nghĩa, ví dụ)<br>Sau một số thẻ sẽ chèn các loại câu hỏi kiểm tra ghi nhớ như: trắc nghiệm chọn nghĩa đúng, chọn âm đọc đúng. |
    | **Giao diện liên quan** | - Màn hình nhóm Hán tự → nhấn nút “Luyện tập” → chọn chế độ “Học”<br> - Giao diện card ghi nhớ:<br>&emsp;• Hiển thị Hán tự, nghĩa, câu ví dụ<br>&emsp;• Nút “Tiếp tục”<br> - Giao diện flashcard:<br>&emsp;• Mặt trước: Hán tự<br>&emsp;• Mặt sau: âm On, âm Kun, bộ thủ, nghĩa, ví dụ<br>&emsp;• Nút “Tiếp theo”, “Hoàn thành”, “Tiếp tục”<br> - Giao diện câu hỏi:<br>&emsp;• Trắc nghiệm chọn nghĩa đúng<br>&emsp;• Trắc nghiệm chọn âm đọc đúng |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào tab “Kiến thức nền” → chọn “Hán tự”<br>4. Chọn nhóm Hán tự → nhấn “Luyện tập” và chọn chế độ “Học”<br>5. Lần lượt xem từng thẻ:<br>&emsp;• Nếu là card ghi nhớ: hiển thị nội dung cố định → nhấn “Tiếp tục”<br>&emsp;• Nếu là flashcard: nhấn “Tiếp theo” để lật, nhấn “Hoàn thành” → “Tiếp tục”<br>6. Sau một số thẻ, hệ thống tự chèn câu hỏi kiểm tra:<br>&emsp;• Trắc nghiệm chọn nghĩa<br>&emsp;• Trắc nghiệm chọn cách đọc<br>7. Trả lời đúng → tiếp tục<br>8. Trả lời sai quá số lần quy định → yêu cầu trả lời đúng mới được tiếp tục |
    | **Chi tiết hiển thị** | - **Card ghi nhớ nội dung**:<br>&emsp;• Hiển thị Hán tự, nghĩa, ví dụ, không lật<br>&emsp;• Nút “Tiếp tục”<br><br> - **Flashcard**:<br>&emsp;• Mặt trước: Hán tự<br>&emsp;• Mặt sau: âm On, âm Kun, nghĩa, bộ thủ, ví dụ<br>&emsp;• Nút “Tiếp theo” → lật thẻ<br>&emsp;• Nút “Hoàn thành” → hiện “Tiếp tục”<br><br> - **Câu hỏi kiểm tra**:<br>&emsp;• Trắc nghiệm chọn nghĩa đúng<br>&emsp;• Trắc nghiệm chọn âm đọc đúng<br><br> - **Phản hồi**:<br>&emsp;• Trả lời đúng: chuyển tiếp<br>&emsp;• Trả lời sai: hiển thị đáp án đúng và yêu cầu chọn lại |
    | **Kết quả hiển thị** | - Khi hoàn tất toàn bộ thẻ và câu hỏi → hiển thị “Chúc mừng đã hoàn thành phần học” |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có Hán tự nào để luyện tập” |


#### 3.13.6 Chức năng luyện tập Hán tự – chế độ Flashcard {#toc-3-13-6}

??? book "Luyện tập Hán tự – chế độ Flashcard"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Hán tự – chế độ Flashcard |
    | **Mô tả** | Chức năng giúp học viên ôn luyện Hán tự bằng flashcard có thể lật, tuỳ chỉnh hiển thị và đánh dấu trạng thái. Không ảnh hưởng đến tiến độ % học của nhóm Hán tự. |
    | **Giao diện liên quan** | - Mục “Hán tự” → nhấn “Luyện tập” → chọn “Flashcard”<br> - Giao diện flashcard tương tác<br> - Popup tuỳ chọn gồm: Xem tất cả, Xáo trộn, Tự chạy, FlashCard 1/2/3 |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào tab “Kiến thức nền” → chọn “Hán tự”<br>4. Chọn nhóm Hán tự → nhấn “Luyện tập” → chọn chế độ “Flashcard”<br>5. Chọn loại flashcard mong muốn<br>6. Tuỳ chỉnh chế độ hiển thị và bắt đầu luyện tập |
    | **Chi tiết hiển thị** | • **Loại flashcard:**<br>&emsp;– **Loại 1**: Mặt trước: chữ Hán<br>&emsp;&emsp;Mặt sau: nghĩa, âm on/kun, ví dụ minh hoạ (có thể có hình)<br>&emsp;– **Loại 2**: Mặt trước: nghĩa (Tiếng Việt)<br>&emsp;&emsp;Mặt sau: chữ Hán, âm đọc, ví dụ<br>&emsp;– **Loại 3**: Mặt trước: chữ Hán minh hoạ (có thể có hình)<br>&emsp;&emsp;Mặt sau: nghĩa, âm đọc, ví dụ minh hoạ đầy đủ<br><br>• **Tùy chọn hiển thị:**<br>&emsp;– Xem tất cả: Hiện toàn bộ Hán tự cả “Đã thuộc” + “Chưa thuộc”<br>&emsp;– Xáo trộn: Ngẫu nhiên lại thứ tự thẻ<br>&emsp;– Tự chạy: Flashcard tự động chuyển theo tốc độ đã chọn (Tự chạy / chậm / trung bình / nhanh)<br>&emsp;– FlashCard 1/2/3: Chọn loại flashcard để luyện<br><br>• **Tương tác người dùng:**<br>&emsp;– Bấm 1 lần để lật mặt trước / sau<br>&emsp;– Dùng nút trái / phải hoặc thao tác vuốt để chuyển thẻ<br>&emsp;– Nhấn nhãn “Đã thuộc” / “Chưa thuộc” để đổi trạng thái học của Hán tự<br>&emsp;– Hệ thống tự động lưu trạng thái mới và cập nhật tiến độ học |
    | **Kết quả hiển thị** | - Flashcard hiển thị đúng loại đã chọn<br> - Trạng thái "Đã thuộc" hiển thị nhãn màu hồng trên thẻ<br> - Khi tất cả Hán tự trong nhóm đều “Đã thuộc” → hiển thị màn hình hoàn thành với icon cúp + dòng “Chúc mừng bạn đã hoàn thành Flashcard” và nút “Xem tất cả”<br>&emsp;→ Nhấn “Xem tất cả” để xem lại toàn bộ flashcard |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có Hán tự nào để luyện tập” |

#### 3.13.7 Chức năng luyện tập Hán tự – chế độ Vẽ {#toc-3-13-7}

??? book "Luyện tập Hán tự – chế độ Vẽ"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Hán tự – chế độ Vẽ |
    | **Mô tả** | Chức năng giúp học viên rèn luyện khả năng ghi nhớ và viết chữ Hán bằng cách tự tay viết lại từng từ theo gợi ý. Hệ thống sẽ tự động kiểm tra đúng/sai và đưa ra phản hồi. |
    | **Giao diện liên quan** | - Mục “Hán tự” → nhấn “Luyện tập” → chọn chế độ “Luyện vẽ”<br> - Màn hình luyện vẽ gồm:<br>&emsp;• Khung hiển thị chữ cần vẽ<br>&emsp;• Khung vẽ có chia ô kẻ<br>&emsp;• Nút hoàn tác 1 nét gần nhất<br>&emsp;• Nút xoá toàn bộ nét đang vẽ<br>&emsp;• Nút kiểm tra kết quả<br>&emsp;• Kết quả đúng/sai kèm đáp án |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào tab “Kiến thức nền” → chọn “Hán tự”<br>4. Chọn nhóm Hán tự → nhấn “Luyện tập” → chọn chế độ “Luyện vẽ”<br>5. Lần lượt xem từng chữ và viết lại vào khung<br>6. Nhấn kiểm tra để nhận kết quả đúng/sai<br>7. Nhấn “Tiếp tục” để chuyển sang từ tiếp theo |
    | **Chi tiết hiển thị** | - Khung hiển thị chữ Hán mẫu (phần trên)<br> - Khung vẽ lớn có ô kẻ để viết (phần dưới)<br> - Có nút:<br>&emsp;• **Hoàn tác**: quay lại 1 nét trước đó<br>&emsp;• **Xoá**: xoá toàn bộ nét vẽ<br>&emsp;• **Kiểm tra**: so sánh nét vẽ với đáp án<br> - Khi đúng: popup nền xanh hiển thị “Đúng”, hiện chữ mẫu và đáp án<br> - Khi sai: popup nền đỏ hiển thị “Sai”, hiện chữ mẫu và đáp án đúng |
    | **Kết quả hiển thị** | - Nếu viết đúng → hiển thị “Đúng” và chuyển sang từ kế tiếp<br> - Nếu sai → hiển thị “Sai” và có thể quay lại vẽ lại<br> - Mỗi nét vẽ được ghi nhận, có thể hoàn tác hoặc xóa toàn bộ |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có Hán tự nào để luyện tập” |


### 3.14 Chức năng quản lý kỹ năng nghe
#### 3.14.1 Chức năng hiển thị danh sách bài nghe {#toc-3-14-1}

??? book "Hiển thị danh sách bài nghe"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị danh sách bài nghe |
    | **Mô tả** | Hiển thị danh sách các bài luyện nghe theo thứ tự chương trình học. Mỗi bài gồm nội dung tiếng Nhật và bản dịch tiếng Việt. Học viên có thể đánh dấu bài “đã thuộc” (hiển thị dấu tích), hoặc chọn nhiều bài để lưu vào thư viện học tập cá nhân. |
    | **Giao diện liên quan** | - Tab “Kỹ năng” → mục “Nghe”<br> - Giao diện danh sách bài nghe gồm các card:<br>&emsp;• Câu tiếng Nhật<br>&emsp;• Dịch nghĩa tiếng Việt<br>&emsp;• Icon đánh dấu “Đã thuộc” (nếu đã học)<br>&emsp;• Số thứ tự bài<br> - Icon ngôi sao có dấu cộng góc trên bên phải để bật chế độ chọn nhiều |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Nghe”<br>4. Hệ thống hiển thị danh sách các bài nghe<br>5. Người dùng có thể:<br>&emsp;– Nhấn vào bài → xem chi tiết<br>&emsp;– Nhấn vào icon ngôi sao có dấu cộng → bật chế độ chọn nhiều<br>&emsp;– Tick chọn các bài muốn lưu<br>&emsp;– Nhấn nút “Thêm vào thư viện” để lưu lại |
    | **Chi tiết hiển thị** | - Mỗi bài gồm:<br>&emsp;• Số thứ tự (01, 02, ...)<br>&emsp;• Câu tiếng Nhật<br>&emsp;• Dịch tiếng Việt<br>&emsp;• Dấu tích nếu đã thuộc<br>- Khi bật chế độ chọn nhiều:<br>&emsp;• Các bài có checkbox chọn<br>&emsp;• Nút “Thêm vào thư viện (số lượng)” hiển thị cố định phía dưới |
    | **Kết quả hiển thị** | - Danh sách hiển thị đúng thứ tự chương trình<br> - Bài đã thuộc có dấu tích hồng<br> - Khi người dùng lưu vào thư viện thành công → hiển thị thông báo “Đã cập nhật thư viện!” |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có bài luyện nghe nào trong cấp độ này” |

#### 3.14.2 Chức năng xem chi tiết bài nghe {#toc-3-14-2}

??? book "Kỹ năng nghe – Chi tiết bài"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Kỹ năng nghe – Chi tiết bài |
    | **Mô tả** | Hiển thị chi tiết một bài luyện nghe dạng hội thoại có audio. Học viên có thể nghe, theo dõi phụ đề, bật/tắt phiên âm – dịch nghĩa – phụ đề, thay đổi tốc độ phát, lưu bài vào thư viện ⭐ hoặc đánh dấu đã thuộc 💡 để cập nhật tiến độ kỹ năng nghe. |
    | **Giao diện liên quan** | - Màn hình chi tiết bài nghe gồm:<br>&emsp;• Thanh phát audio + thời gian<br>&emsp;• Các khối thoại (A/B)<br>&emsp;• Nút “Phiên âm”, “Dịch nghĩa”, “Phụ đề”, “Tốc độ”<br>&emsp;• Icon 💡 (gợi ý/đã thuộc)<br>&emsp;• Icon ⭐ (lưu vào thư viện)<br>&emsp;• Nút “Luyện tập” |
    | **Luồng thao tác chính** |  1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Nghe”<br>4. Hệ thống hiển thị danh sách các bài nghe<br>4. Nhấn vào một bài bất kỳ trong danh sách bài nghe<br>5. Giao diện mở ra màn hình chi tiết bài nghe:<br>&emsp;– Nhấn phát audio<br>&emsp;– Bật/tắt các lớp hiển thị (phiên âm, dịch, phụ đề)<br>&emsp;– Tùy chọn tốc độ phát<br>&emsp;– Nhấn vào từng đoạn thoại để chuyển đến thời gian tương ứng<br>&emsp;– Có thể đánh dấu 💡 “Đã thuộc” hoặc ⭐ “Lưu vào thư viện”<br>6. Nhấn “Luyện tập” để thực hành với bài đã nghe |
    | **Chi tiết hiển thị** | - Tiêu đề bài nghe<br> - Thanh phát audio (nút play/pause, thời lượng)<br> - Khối thoại gồm 2 nhân vật A/B<br> - Các đoạn thoại hiển thị theo block:<br>&emsp;• Khi audio phát đến đâu → block đó được highlight màu cam<br>&emsp;• Nhấn vào block bất kỳ sẽ seek đến đoạn tương ứng<br> - Các lớp hiển thị tùy chọn:<br>&emsp;• “Phiên âm”<br>&emsp;• “Dịch nghĩa”<br>&emsp;• “Phụ đề”<br> - Các nút phụ trợ:<br>&emsp;• Icon 💡 (đánh dấu đã thuộc)<br>&emsp;• Icon ⭐ (lưu vào thư viện)<br> - Nút "Luyện tập" ở cuối màn hình |
    | **Kết quả hiển thị** | - Phát audio theo đúng luồng thoại<br> - Các đoạn thoại được highlight đúng theo thời điểm phát<br> - Tùy chỉnh hiển thị phiên âm, dịch, phụ đề hoạt động chính xác<br> - Trạng thái 💡 “Đã thuộc” sẽ cập nhật tiến độ kỹ năng nghe<br> - Khi nhấn icon ⭐ → thêm bài vào thư viện |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có dữ liệu hội thoại trong bài nghe này” |



#### 3.14.3 Chức năng Luyện tập kỹ năng nghe – chế độ Học {#toc-3-14-3}

??? book "Chức năng Luyện tập kỹ năng nghe – chế độ Học"
    | Trường                    | Nội dung |
    |--------------------------|---------|
    | **Tên chức năng**        | Luyện tập kỹ năng nghe – chế độ Học |
    | **Mô tả**                | Học viên chọn chế độ "Học" trong Luyện tập kỹ năng nghe. Hệ thống lần lượt hiển thị các phần nội dung giúp học viên ghi nhớ và rèn luyện kỹ năng nghe: nghe - hiểu - ghi nhớ - vận dụng. |
    | **Giao diện liên quan**   | - Danh sách bài nghe<br> - Màn hình chi tiết bài nghe với icon 💡 (mẹo) và ⭐ (thêm vào thư viện)<br> - Popup chọn chế độ Luyện tập<br> - Màn hình Học qua FlashCard<br> - Màn hình Ghi nhớ nội dung<br> - Màn hình Câu hỏi sắp xếp thành câu<br> - Màn hình hoàn thành phần học |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Nghe”<br>4. Hệ thống hiển thị danh sách các bài nghe<br>5. Nhấn vào một bài bất kỳ trong danh sách<br>6. Tại màn hình chi tiết, nhấn “Luyện tập” → popup chọn chế độ → chọn “Học”<br>7. Hệ thống lần lượt hiển thị các phần:<br>&emsp;• **Phần 1 – Học qua FlashCard**:<br>&emsp;&emsp;– FlashCard tự động phát âm khi hiển thị<br>&emsp;&emsp;– Nhấn “Tiếp theo” để lật, “Hoàn thành” để tiếp<br>&emsp;• **Phần 2 – Ghi nhớ nội dung**:<br>&emsp;&emsp;– Hiển thị câu tiếng Nhật, nghĩa tiếng Việt<br>&emsp;&emsp;– Nhấn “Tiếp tục” để chuyển<br>&emsp;• **Phần 3 – Câu hỏi sắp xếp**:<br>&emsp;&emsp;– Chọn từ theo thứ tự đúng<br>&emsp;&emsp;– Nhấn “Kiểm tra” để xem kết quả<br>8. Sau khi học hết, hiển thị màn hình chúc mừng |
    | **Chi tiết hiển thị**    | - Popup chọn chế độ gồm: “Học”, “FlashCard”, “Trắc nghiệm”<br>- FlashCard tự phát âm khi mở<br>- Phần “Ghi nhớ” chỉ có nút “Tiếp tục”<br>- Câu hỏi “Sắp xếp thành câu có nghĩa” có khối từ rời, học viên chạm để chọn<br>|
    | **Kết quả hiển thị**     | - Hiển thị lần lượt: Học qua FlashCard → Ghi nhớ → Câu hỏi sắp xếp<br> - Không hiển thị nút “Đã thuộc”, “Lưu vào thư viện”<br> - Sau cùng là màn hình “Chúc mừng hoàn thành phần học” |
    | **Trường hợp không có dữ liệu** | Nếu bài nghe chưa có nội dung → hiển thị: “Chưa có nội dung để luyện tập” |


#### 3.14.4 Chức năng Luyện tập kỹ năng nghe – chế độ FlashCard { #toc-3-14-4}

??? book "Luyện tập kỹ năng nghe – chế độ FlashCard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập kỹ năng nghe – chế độ FlashCard |
    | **Mô tả**                  | Chức năng giúp học viên luyện kỹ năng nghe bằng flashcard có thể lật, phát âm thanh và tùy chỉnh hiển thị.|
    | **Giao diện liên quan**   | - Mục “Kỹ năng” → chọn “Nghe” → nhấn “Luyện tập” → chọn “FlashCard”<br> - Giao diện flashcard tương tác<br> - Có menu tuỳ chọn: Xem tất cả, Xáo trộn, Tự chạy, FlashCard 1/2/3 |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Nghe”<br>4. Chọn bài nghe → nhấn “Luyện tập” → chọn chế độ “FlashCard”<br>5. Lựa chọn loại flashcard<br>6. Tuỳ chỉnh hiển thị và bắt đầu luyện tập |
    | **Chi tiết hiển thị**     | • **Loại flashcard**:<br>&emsp;– **Loại 1**: Mặt trước: icon loa (phát âm); mặt sau: câu tiếng Nhật + nghĩa tiếng Việt<br>&emsp;– **Loại 2**: Mặt trước: nghĩa tiếng Việt; mặt sau: câu tiếng Nhật + icon loa<br>&emsp;– **Loại 3**: Mặt trước: câu tiếng Nhật; mặt sau: nghĩa tiếng Việt + icon loa<br><br>• **Tùy chọn:**<br>&emsp;– **Xem tất cả**: Bật → hiện tất cả câu (đã thuộc + chưa thuộc); Tắt → chỉ hiện câu chưa thuộc<br>&emsp;– **Xáo trộn**: Trộn ngẫu nhiên các thẻ trong bài hiện tại<br>&emsp;– **Tự chạy**: Chuyển flashcard tự động theo tốc độ: Tự chạy / Chậm / Bình thường / Nhanh<br>&emsp;– **FlashCard 1/2/3**: Chuyển đổi nhanh loại flashcard đang dùng<br><br>• **Tương tác:**<br>&emsp;– Bấm 1 lần để lật mặt trước/sau<br>&emsp;– Nhấn icon loa để phát âm<br>&emsp;– Dùng nút trái/phải để chuyển flashcard<br>&emsp;– Lướt sang trái/phải (swipe) để chuyển nhanh giữa các flashcard (gesture tương đương nút điều hướng)<br>&emsp;– Nhấn vào trạng thái “Đã thuộc” / “Chưa thuộc” để cập nhật lại trạng thái câu<br>&emsp;– Khi trạng thái thay đổi, hệ thống tự cập nhật % tiến độ kỹ năng nghe<br>&emsp;– **Flashcard sẽ tự động phát âm một lần khi vừa hiển thị (cả khi chuyển tiếp và quay lại)** |
    | **Kết quả hiển thị**      | - Flashcard hiển thị đúng loại đã chọn<br> - Tùy chọn sáng (enabled) hoặc xám (disabled) theo trạng thái thực tế<br> - Trạng thái câu “Đã thuộc” / “Chưa thuộc” được cập nhật và phản ánh trực quan trên thẻ<br> - Khi tất cả câu trong bài đều là “Đã thuộc” → hiển thị màn hình hoàn thành với icon cúp, dòng “Chúc mừng bạn hoàn thành Flashcard” và nút “Xem tất cả”<br>&emsp;→ Nhấn “Xem tất cả” sẽ bật chế độ hiển thị lại toàn bộ câu |
    | **Trường hợp không có dữ liệu** | - Nếu không còn flashcard nào cần học (và chưa bật "Xem tất cả") → hiển thị: “Không có nội dung để luyện tập” |

#### 3.14.5 Chức năng Luyện tập kỹ năng nghe - chế độ Trắc nghiệm { #toc-3-14-5}
??? book "Luyện tập kỹ năng nghe – chế độ Trắc nghiệm"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập kỹ năng nghe – chế độ Trắc nghiệm |
    | **Phạm vi sử dụng**       | Dành cho người dùng đang học phần kỹ năng Nghe trong tab “Kỹ năng” |
    | **Mô tả**                 | Chức năng cho phép học viên luyện nghe thông qua hình thức câu hỏi trắc nghiệm, nhằm kiểm tra khả năng hiểu nội dung đã nghe. |
    | **Giao diện liên quan**   | - Màn hình chi tiết bài nghe <br> - Popup chọn chế độ → chọn “Trắc nghiệm” <br> - Màn hình câu hỏi trắc nghiệm <br> - Popup xác nhận nộp bài <br> - Màn hình kết quả sau luyện tập |
    | **Luồng thao tác chính**  | 1. Học viên truy cập ứng dụng <br> 2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể <br> 3. Vào tab “Kỹ năng” → chọn “Nghe” <br> 4. Chọn một bài nghe bất kỳ trong danh sách <br> 5. Tại màn hình chi tiết bài nghe, nhấn “Luyện tập” → chọn “Trắc nghiệm” <br> 6. Trả lời lần lượt từng câu hỏi trắc nghiệm <br> 7. Nhấn “Kết thúc” để nộp bài <br> 8. Xác nhận popup “Bạn có muốn hoàn thành bài làm không?”<br> &emsp;→ Nhấn “Xem đáp án” để hiển thị kết quả |
    | **Chi tiết hiển thị**     | - Chỉ có **1 loại câu hỏi**: “Trả lời câu hỏi trắc nghiệm” <br> - Thành phần hiển thị: <br> &emsp;• Câu hỏi dạng hội thoại tiếng Nhật <br> &emsp;• 4 lựa chọn đáp án dạng nút, có thể chọn 1 <br> &emsp;• Bộ đếm câu (VD: 1/5) và điều hướng trái/phải giữa các câu <br> &emsp;• Nút “Xem hướng dẫn” ở phía trên cùng <br> &emsp;• Nút “Kết thúc” để hoàn thành bài làm <br> - Popup xác nhận nộp bài luôn hiển thị khi nhấn “Kết thúc” với 2 tùy chọn:<br> &emsp;• “Quay lại”: quay về bài làm<br> &emsp;• “Xem đáp án”: hiển thị màn hình kết quả |
    | **Kết quả hiển thị**      | - Hiển thị danh sách từng câu đã làm:<br> &emsp;• Câu hỏi <br> &emsp;• Đáp án người học đã chọn <br> &emsp;• Đáp án đúng <br> &emsp;• Đánh dấu đúng (màu xanh) / sai (màu đỏ) <br> - Hiển thị điểm tổng kết theo thang 10 <br> - Hiển thị nhận xét dựa trên điểm số (VD: “Điểm số chưa ổn lắm! Cố gắng hơn nữa nhé”) |
    | **Trường hợp không có dữ liệu** | - Nếu bài nghe không có câu hỏi trắc nghiệm → ẩn nút “Luyện tập” |

### 3.15 Chức năng quản lý kỹ năng nói

#### 3.15.1 Chức năng hiển thị danh sách bài nói theo chủ đề {#toc-3-15-1}

??? book "Hiển thị danh sách bài nói"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Hiển thị danh sách bài nói |
    | **Mô tả**                  | Chức năng hiển thị danh sách các bài luyện nói theo cấp độ. Người dùng có thể xem tiêu đề, tiến độ và thực hiện lưu nhiều bài vào thư viện để học lại sau. |
    | **Giao diện liên quan**   | - Màn hình “Kỹ năng” → chọn “Nói”<br> - Màn hình danh sách bài nói kèm tiến độ<br> - Giao diện chọn nhiều bài → thêm vào thư viện |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Nói”<br>4. Màn hình hiển thị danh sách các bài nói theo thứ tự<br>5. Mỗi bài hiển thị tiêu đề tiếng Nhật + dịch nghĩa + thanh tiến độ<br>6. Nhấn icon ⭐ có dấu ➕ để kích hoạt chế độ chọn nhiều bài<br>7. Tick chọn nhiều bài cần lưu → nhấn nút “Thêm vào thư viện”<br>8. Hệ thống hiển thị thông báo xác nhận đã lưu thành công |
    | **Chi tiết hiển thị**     | - Mỗi item trong danh sách bài nói gồm:<br>&emsp;• Tiêu đề tiếng Nhật<br>&emsp;• Dịch nghĩa<br>&emsp;• Thanh tiến độ thể hiện phần trăm hoàn thành<br> - Nếu bài đã được học hoặc lưu thì có dấu tick và thanh tiến độ khác màu<br> - Khi bật chế độ chọn nhiều (icon ⭐➕):<br>&emsp;• Các ô tick hiện ra ở đầu mỗi bài<br>&emsp;• Nút “Thêm vào thư viện” hiển thị ở cuối màn hình, có số lượng bài đã chọn<br>&emsp;• Sau khi lưu xong → hiện popup xác nhận “Đã cập nhật thư viện” |
    | **Kết quả hiển thị**      | - Danh sách bài nói theo đúng cấp độ<br> - Mỗi bài có hiển thị tiến độ riêng<br> - Sau khi thêm bài vào thư viện thành công → trạng thái bài chuyển sang đã lưu<br> - Nếu tất cả bài đã học → thanh tiến độ ở mục “Nói” trong màn chính sẽ tăng tương ứng |
    | **Trường hợp không có dữ liệu** | - Nếu không có bài nói nào → hiển thị thông báo: “Chưa có bài nói nào trong cấp độ này” |


#### 3.15.2 Chức năng Xem chi tiết bài nói {#toc-3-15-2}

??? book "Xem chi tiết bài nói"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Xem chi tiết bài nói |
    | **Mô tả**                  | Hiển thị chi tiết nội dung của bài luyện nói, bao gồm từ vựng và câu giao tiếp thực hành. Mỗi từ/câu được đánh giá phát âm bằng hệ thống 3 trái tim. Học viên có thể lưu vào thư viện để luyện tập lại. |
    | **Giao diện liên quan**   | - Danh sách bài nói → chọn một bài cụ thể<br> - Màn hình chi tiết bài nói gồm 2 tab: “Từ vựng” và “Câu”<br> - Icon ngôi sao (⭐) ở góc phải để lưu bài vào thư viện |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ học (VD: N5)<br>3. Vào tab “Kỹ năng” → chọn mục “Nói”<br>4. Từ danh sách bài nói, chọn một bài cụ thể<br>5. Màn hình chi tiết hiển thị 2 tab: “Từ vựng” và “Câu”<br>6. Học viên có thể:<br>&emsp;– Xem danh sách từ hoặc câu giao tiếp<br>&emsp;– Theo dõi đánh giá phát âm qua hệ thống 3 trái tim<br>&emsp;– Nhấn icon ⭐ để lưu bài vào thư viện cá nhân |
    | **Chi tiết hiển thị**     | - Mỗi mục (từ hoặc câu) hiển thị:<br>&emsp;• Tiếng Nhật<br>&emsp;• Dịch nghĩa tiếng Việt<br>&emsp;• 3 trái tim biểu thị mức độ đánh giá phát âm<br>&emsp;&emsp;→ 1 tim: phát âm chưa tốt<br>&emsp;&emsp;→ 2 tim: phát âm tạm ổn<br>&emsp;&emsp;→ 3 tim: phát âm tốt, nên ghi nhớ<br>&emsp;• Icon tin nhắn (💬) biểu thị dạng từ hoặc câu hội thoại<br> - Nút điều hướng để xem chi tiết từng mục<br> - Nút lưu bài (⭐) chuyển màu khi đã lưu |
    | **Kết quả hiển thị**      | - Hiển thị đầy đủ danh sách từ/câu theo bài nói<br> - Trạng thái phát âm hiển thị bằng icon trái tim tương ứng (0–3 tim)<br> - Biểu tượng ⭐ phản ánh đúng trạng thái đã lưu|
    | **Trường hợp không có dữ liệu** | - Nếu bài nói không có nội dung từ/câu → hiển thị thông báo: “Không có nội dung để luyện tập” |

#### 3.15.3 Chức năng luyện nói {#toc-3-15-3}

??? book "Luyện nói"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện nói |
    | **Mô tả**                 | Học viên luyện phát âm từ vựng và câu qua chức năng ghi âm, so sánh với phát âm mẫu và được đánh giá bằng trái tim (tối đa 3 tim). Những câu/từ đạt 3 tim được xem là "Đã thuộc" và tính vào % tiến độ kỹ năng Nói. |
    | **Giao diện liên quan**   | - Màn hình chính → Kỹ năng → Nói<br> - Danh sách bài Nói<br> - Màn hình chi tiết bài Nói (tab Từ vựng / Câu)<br> - Màn hình luyện nói<br> - Màn hình kết quả chi tiết |
    | **Luồng thao tác chính**  | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục "Kỹ năng" → chọn "Nói"<br>4. Giao diện hiển thị danh sách bài Nói kèm tiến độ + nút thêm nhiều bài vào thư viện<br>5. Nhấn vào 1 bài để xem chi tiết (tab Từ vựng / Câu)<br>6. Nhấn vào 1 mục bất kỳ → vào màn hình luyện nói:<br>&emsp;• Nhấn icon loa để nghe mẫu<br>&emsp;• Nhấn giữ mic để ghi âm<br>&emsp;• Buông tay để kết thúc<br>&emsp;• Hệ thống tự động chấm điểm và hiển thị số tim<br>7. Dùng **nút trái/phải** hoặc **swipe** để chuyển sang mục kế tiếp<br>8. Thanh dưới hiển thị tiến trình (VD: 3/12)<br>9. Nhấn "Xem kết quả" để tổng hợp số câu đúng / sai<br>10. Nhấn "Làm lại" → hiện popup xác nhận:<br>&emsp;• OK: luyện lại từ đầu<br>&emsp;• No: đóng popup |
    | **Chi tiết hiển thị**     | - **Danh sách bài Nói**:<br>&emsp;• Tên bài học JP + VI<br>&emsp;• Thanh tiến độ % hoàn thành<br>&emsp;• Nút thêm nhiều bài vào thư viện (icon ngôi sao có dấu cộng)<br>- **Chi tiết bài học**:<br>&emsp;• 2 tab: Từ vựng / Câu<br>&emsp;• Mỗi mục hiển thị icon lời thoại + số tim đánh giá<br>&emsp;• Mục đạt 3 tim sẽ hiển thị đủ 3 trái tim đỏ và được tính là **“Đã thuộc”**<br>- **Màn hình luyện nói**:<br>&emsp;• Hiển thị nội dung tiếng Nhật, dịch nghĩa<br>&emsp;• Nút loa để phát mẫu<br>&emsp;• Nút mic để ghi âm học viên<br>&emsp;• Hiển thị trái tim (mặc định xám → sau ghi âm sẽ đổi màu theo kết quả)<br>&emsp;• Ghi nhận trạng thái hoàn thành với nội dung “Đã hoàn thành”<br>&emsp;• Nút trái/phải hoặc vuốt để chuyển giữa các card<br>&emsp;• Thanh dưới hiển thị đang luyện mục thứ mấy trên tổng số<br>- **Màn hình kết quả**:<br>&emsp;• Thống kê số **câu đúng** / **câu sai**<br>&emsp;• Nút “Làm lại” kèm popup xác nhận |
    | **Kết quả hiển thị**      | - Hệ thống tự động chấm điểm và hiển thị trái tim (0–3)<br> - Nội dung đạt 3 tim sẽ được tính là “Đã thuộc”<br> - Những mục “Đã thuộc” sẽ cập nhật vào % tiến độ kỹ năng Nói<br> - Màn hình kết quả hiển thị tổng số câu đúng / sai rõ ràng |
    | **Trường hợp không có dữ liệu** | - Nếu bài luyện nói không có nội dung: hiển thị “Bài luyện nói này chưa có nội dung để luyện” |

### 3.16 Chức năng quản lý kỹ năng đọc
#### 3.16.1 Chức năng hiển thị danh sách bài đọc { #toc-3-16-1}

??? book "Hiển thị danh sách bài đọc"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị danh sách bài đọc |
    | **Mô tả** | Hiển thị danh sách các bài luyện đọc theo thứ tự chương trình học. Mỗi bài gồm tiêu đề tiếng Nhật, dịch nghĩa và số thứ tự. Người dùng có thể đánh dấu bài “đã thuộc” (biểu tượng tích nhỏ) hoặc chọn nhiều bài để lưu vào thư viện học tập cá nhân (biểu tượng tích lớn hiển thị khi bật chọn nhiều). |
    | **Giao diện liên quan** | - Tab “Kỹ năng” → mục “Đọc”<br> - Danh sách bài đọc dạng card:<br>&emsp;• Tiêu đề tiếng Nhật<br>&emsp;• Dịch nghĩa<br>&emsp;• Số thứ tự (01, 02,...)<br> - Icon ngôi sao ⭐ có dấu ➕ ở góc phải để bật chế độ chọn nhiều bài |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Đọc”<br>4. Hệ thống hiển thị danh sách bài đọc<br>5. Người dùng có thể:<br>&emsp;• Nhấn vào từng bài đọc để xem chi tiết<br>&emsp;• Nhấn icon ⭐➕ để bật chế độ chọn nhiều<br>&emsp;• Tick chọn các bài muốn lưu<br>&emsp;• Nhấn nút “Thêm vào thư viện (xx)”<br>6. Hệ thống cập nhật và hiển thị thông báo xác nhận lưu thành công |
    | **Chi tiết hiển thị** | - Mỗi bài hiển thị:<br>&emsp;• Số thứ tự<br>&emsp;• Câu tiếng Nhật<br>&emsp;• Dịch nghĩa tiếng Việt<br> - Nếu bài đã thuộc (icon 💡 ở chi tiết bài):<br>&emsp;• Hiển thị dấu tích nhỏ màu hồng mặc định để phản ánh tiến độ kỹ năng Đọc<br> - Nếu bài đã được lưu vào thư viện:<br>&emsp;• Khi bật chế độ ⭐➕: hiện dấu tích lớn màu đỏ để phân biệt bài đã chọn<br>&emsp;• Khi tắt chế độ chọn nhiều: các dấu tích lớn sẽ ẩn đi |
    | **Kết quả hiển thị** | - Danh sách hiển thị đúng nội dung và thứ tự<br> - Bài đã thuộc luôn hiển thị tích nhỏ<br> - Khi bật chọn nhiều: hiện tích lớn cho bài đã có trong thư viện<br> - Sau khi lưu thành công → hiển thị thông báo “Đã cập nhật thư viện!” |
    | **Trường hợp không có dữ liệu** | Hiển thị dòng: **“Không có bài luyện đọc nào trong cấp độ này”** |

#### 3.16.2 Chức năng xem chi tiết bài đọc {#toc-3-16-2}

??? book "Xem chi tiết bài đọc"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Xem chi tiết bài đọc |
    | **Mô tả** | Hiển thị nội dung chi tiết của một bài đọc theo cấp độ đã chọn. Người dùng có thể lựa chọn chế độ dịch (Đọc hiểu / Dịch câu / Dịch từ vựng), điều chỉnh cỡ chữ, bật/tắt phiên âm, lưu bài vào thư viện hoặc đánh dấu bài đã thuộc bằng icon 💡 để cập nhật tiến độ kỹ năng Đọc. |
    | **Giao diện liên quan** | - Màn hình chi tiết bài đọc<br> - Icon cài đặt (⚙️) mở popup tùy chỉnh<br> - Các khối văn bản tiếng Nhật có phiên âm và dịch nghĩa<br> - Icon 💡 (đánh dấu đã thuộc), ⭐ (lưu vào thư viện) |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào mục “Kỹ năng” → chọn “Đọc”<br>4. Chọn một bài đọc bất kỳ trong danh sách<br>5. Màn hình chi tiết bài đọc hiển thị:<br>&emsp;• Văn bản tiếng Nhật chia đoạn, có phiên âm<br>&emsp;• Người dùng có thể nhấn ⚙️ để tùy chỉnh:<br>&emsp;&emsp;– Chế độ dịch: Đọc hiểu / Dịch câu / Dịch từ vựng<br>&emsp;&emsp;– Cỡ chữ: kéo thanh trượt<br>6. Nhấn icon 💡 để đánh dấu **“đã thuộc”** bài đọc → cập nhật % tiến độ<br>7. Nhấn icon ⭐ để lưu vào thư viện<br>8. Nhấn “Luyện tập” để chuyển sang phần luyện kỹ năng |
    | **Chi tiết hiển thị** | - Văn bản được chia theo đoạn/câu rõ ràng<br> - Có thể bật/tắt từng lớp:<br>&emsp;• Phiên âm (furigana)<br>&emsp;• Dịch theo chế độ:<br>&emsp;&emsp;– **Đọc hiểu**: hiện toàn bộ nội dung dịch<br>&emsp;&emsp;– **Dịch câu**: hiển thị dịch dưới mỗi câu<br>&emsp;&emsp;– **Dịch từ vựng**: gắn nghĩa ngay trên từ khóa<br> - 💡 Dùng để đánh dấu **bài đã thuộc** và tăng tiến độ kỹ năng Đọc<br> - ⭐ Dùng để lưu bài vào thư viện cá nhân |
    | **Kết quả hiển thị** | - Bài đọc hiển thị đầy đủ văn bản, phiên âm, nghĩa<br> - Cài đặt chế độ dịch và cỡ chữ phản hồi đúng<br> - Nhấn 💡 → cập nhật trạng thái đã thuộc và % tiến độ<br> - Nhấn ⭐ để lưu bài đọc vào thư viện |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: **“Không có nội dung bài đọc cho cấp độ này”** |


#### 3.16.3 Chức năng luyện tập kỹ năng đọc – chế độ Học {#toc-3-16-3}

??? book "Luyện tập kỹ năng đọc – chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập kỹ năng đọc – chế độ Học |
    | **Mô tả** | Chức năng cho phép học viên luyện đọc và ghi nhớ bài hội thoại thông qua hai loại thẻ:<br>&emsp;• **Flashcard**: lật mặt từ bản dịch sang câu gốc tiếng Nhật<br>&emsp;• **Card ghi nhớ nội dung**: hiển thị đồng thời cả tiếng Nhật và bản dịch<br>Sau một số thẻ sẽ chèn câu hỏi sắp xếp thành câu đúng để kiểm tra mức độ ghi nhớ. |
    | **Giao diện liên quan** | - Màn hình chi tiết bài đọc → nút “Luyện tập” → chọn chế độ “Học”<br> - Flashcard:<br>&emsp;• Mặt trước: câu tiếng Việt<br>&emsp;• Mặt sau: câu tiếng Nhật<br> - Card ghi nhớ:<br>&emsp;• Hiển thị đồng thời tiếng Nhật và bản dịch<br> - Giao diện câu hỏi:<br>&emsp;• Sắp xếp từ thành câu có nghĩa<br> - Thanh tiến độ ở đầu màn hình |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Đọc”<br>4. Chọn một bài đọc bất kỳ → nhấn nút “Luyện tập” → chọn chế độ “Học”<br>5. Hệ thống lần lượt hiển thị các thẻ:<br>&emsp;• Flashcard: lật từ dịch → tiếng Nhật → nhấn “Hoàn thành”<br>&emsp;• Card nội dung: hiển thị cả 2 ngôn ngữ → nhấn “Tiếp tục”<br>6. Sau một số thẻ, hiển thị câu hỏi:<br>&emsp;• Sắp xếp từ thành câu hoàn chỉnh<br>&emsp;• Nhấn “Kiểm tra” → phản hồi đúng/sai<br>7. Trả lời đúng → tiếp tục<br>8. Trả lời sai nhiều lần → yêu cầu trả lời đúng để được học tiếp |
    | **Chi tiết hiển thị** | - **Flashcard**:<br>&emsp;• Mặt trước: câu dịch tiếng Việt<br>&emsp;• Mặt sau: câu tiếng Nhật tương ứng<br>&emsp;• Nút “Tiếp theo” / “Hoàn thành” để điều hướng<br><br> - **Card ghi nhớ nội dung**:<br>&emsp;• Hiển thị đồng thời tiếng Nhật và bản dịch<br>&emsp;• Nút “Tiếp tục” để chuyển sang thẻ tiếp theo<br><br> - **Câu hỏi kiểm tra**:<br>&emsp;• Giao diện “Sắp xếp thành câu có nghĩa”<br>&emsp;• Câu hỏi hiển thị bản dịch tiếng Việt, các từ tiếng Nhật dạng ô<br>&emsp;• Người học chạm để sắp xếp theo đúng thứ tự<br>&emsp;• Nút “Kiểm tra” để xác nhận<br><br> - **Phản hồi**:<br>&emsp;• Trả lời đúng: tiếp tục<br>&emsp;• Trả lời sai: hiển thị đáp án và yêu cầu chọn lại |
    | **Kết quả hiển thị** | - Sau khi hoàn thành tất cả thẻ và câu hỏi → hiển thị màn hình: “Chúc mừng bạn đã hoàn thành phần học” |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có nội dung để luyện tập” |

#### 3.16.4 Chức năng luyện tập kỹ năng đọc – chế độ FlashCard {#toc-3-16-4}

??? book "Luyện tập kỹ năng đọc – chế độ FlashCard"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập kỹ năng đọc – chế độ FlashCard |
    | **Mô tả** | Chức năng giúp học viên luyện ghi nhớ các mẫu hội thoại trong bài đọc thông qua flashcard có thể lật qua lại giữa tiếng Nhật và bản dịch tiếng Việt. Học viên có thể theo dõi tiến độ (đã thuộc/chưa thuộc), tùy chỉnh hiển thị và cách hiển thị thẻ. |
    | **Giao diện liên quan** | - Màn hình chi tiết bài đọc → nhấn “Luyện tập” → chọn chế độ “Flashcard”<br> - Giao diện flashcard<br> - Thanh điều hướng (← / →), số thẻ , nút cài đặt ⚙️ (góc dưới bên phải) |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Đọc”<br>4. Nhấn vào bài đọc bất kỳ → chọn nút “Luyện tập” → chọn chế độ “FlashCard”<br>5. Flashcard được hiển thị lần lượt:<br>&emsp;• Mặt trước: tiếng Nhật hoặc tiếng Việt<br>&emsp;• Bấm để lật sang mặt còn lại<br>6. Dùng nút trái/phải để chuyển flashcard<br>7. Nhấn vào nhãn “Đã thuộc / Chưa thuộc” để cập nhật trạng thái ghi nhớ của từng thẻ<br>8. Nhấn icon ⚙️ để mở **tùy chọn hiển thị** |
    | **Chi tiết hiển thị** | - **Loại flashcard**:<br>&emsp;• **Loại 1**: Mặt trước là câu tiếng Nhật, mặt sau là bản dịch tiếng Việt<br>&emsp;• **Loại 2**: Mặt trước là bản dịch tiếng Việt, mặt sau là câu tiếng Nhật<br><br> - **Thành phần trên flashcard**:<br>&emsp;• Văn bản hội thoại (A:, B: …)<br>&emsp;• Nhãn trạng thái: “Đã thuộc” hoặc “Chưa thuộc”<br>&emsp;• Gợi ý thao tác: “Bấm 1 lần để lật mặt trước/sau”<br>&emsp;• Thanh điều hướng ← / →<br>&emsp;• Chỉ số thẻ: 1/5<br>&emsp;• Nút ⚙️ để mở tùy chọn |
    | **Tùy chọn ⚙️** | - **Xem tất cả**:<br>&emsp;• Bật: hiện tất cả flashcard (bao gồm đã thuộc)<br>&emsp;• Tắt: chỉ hiện các flashcard “Chưa thuộc”<br><br> - **Xáo trộn**: trộn ngẫu nhiên thứ tự flashcard trong nhóm hiện tại<br><br> - **Tự chạy**:<br>&emsp;• Flashcard sẽ tự động chuyển sau mỗi vài giây<br>&emsp;• Có các mức tốc độ: Tự chạy (Thủ công) / Chậm / Trung bình / Nhanh<br><br> - **Đảo mặt thẻ mặc định**:<br>&emsp;• Chọn mặt hiển thị ban đầu: Tiếng Nhật hoặc Tiếng Việt<br><br> - **Lọc trạng thái**:<br>&emsp;• Lọc theo “Chưa thuộc” / “Đã thuộc” / “Tất cả” |
    | **Kết quả hiển thị** | - Flashcard hiển thị đúng loại đã chọn và trạng thái tương tác<br> - Nhãn “Đã thuộc / Chưa thuộc” phản ánh trực quan theo từng thẻ<br> - Khi tất cả flashcard đã được đánh dấu “Đã thuộc” → hiển thị màn hình chúc mừng, có nút “Xem tất cả” để học lại toàn bộ |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có nội dung để luyện tập” |


#### 3.16.5 Chức năng luyện tập kỹ năng đọc – chế độ Trắc nghiệm {#toc-3-16-5}

??? book "Luyện tập kỹ năng đọc – chế độ Trắc nghiệm"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập kỹ năng đọc – chế độ Trắc nghiệm |
    | **Mô tả** | Chức năng cho phép học viên ôn luyện nội dung bài đọc thông qua các câu hỏi trắc nghiệm lựa chọn đáp án đúng. Mỗi câu hỏi dựa trên nội dung đoạn hội thoại và giúp kiểm tra khả năng đọc hiểu – phân tích ngữ nghĩa. |
    | **Giao diện liên quan** | - Màn hình chi tiết bài đọc → nhấn “Luyện tập” → chọn chế độ “Trắc nghiệm”<br> - Popup câu hỏi dạng card (hiển thị trên nền mờ)<br> - Gồm phần: số câu, câu hỏi, các đáp án, nút chọn “Tiếp theo / Quay lại / Nộp bài”<br> - Popup xác nhận nộp bài<br> - Màn hình giải thích đáp án sau khi chọn |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào mục “Kỹ năng” → chọn “Đọc”<br>4. Chọn một bài đọc bất kỳ → nhấn “Luyện tập” → chọn chế độ “Trắc nghiệm”<br>5. Hệ thống hiển thị lần lượt từng câu hỏi:<br>&emsp;• Câu hỏi trắc nghiệm dạng 1 đáp án đúng<br>&emsp;• Người dùng chọn đáp án → nhấn “Tiếp theo”<br>6. Sau câu cuối → hiển thị nút “Nộp bài”<br>7. Popup xác nhận hiển thị: “Hãy kiểm tra lại xem các câu đã được trả lời chính xác chưa nhé!” → chọn “Xem lại” hoặc “Nộp bài”<br>8. Sau khi nộp bài → hiển thị kết quả đúng/sai + phần **Giải thích** dưới mỗi câu |
    | **Chi tiết hiển thị** | - **Câu hỏi trắc nghiệm**:<br>&emsp;• Mỗi câu có: tiêu đề (Câu 1, Câu 2, ...), câu hỏi tiếng Nhật, 3–4 đáp án<br>&emsp;• Chọn đáp án → chuyển sang màu đỏ/xanh sau khi nộp<br>&emsp;• Giao diện có thanh tiến độ, số trang, nút menu chuyển câu nhanh<br><br> - **Giải thích**:<br>&emsp;• Hiển thị sau khi nộp bài<br>&emsp;• Gồm: biểu tượng kính lúp 🔍, tiêu đề “GIẢI THÍCH”, phần dịch nghĩa câu hỏi và giải thích lý do đúng/sai<br>&emsp;• Có thể cuộn nội dung nếu dài<br><br> - **Điều hướng:**<br>&emsp;• Nút “Tiếp theo” để chuyển câu<br>&emsp;• “Quay lại” để chỉnh câu trước<br>&emsp;• Menu số (1–2–3) để nhảy nhanh giữa các câu |
    | **Kết quả hiển thị** | - Hiển thị đúng/sai bằng màu sắc:<br>&emsp;• Xanh lá cây: đáp án đúng<br>&emsp;• Đỏ: đáp án sai<br> - Hiển thị popup giải thích chi tiết nội dung đúng sau khi nộp<br>|
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Bài đọc này chưa có câu hỏi trắc nghiệm” |

### 3.17 Chức năng quản lý kiểm tra {#toc-3-17}

??? book "Quản lý kiểm tra"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Quản lý kiểm tra |
    | **Mô tả** | Chức năng cho phép người dùng thực hiện và xem lại kết quả các bài kiểm tra thuộc các nhóm kiến thức: Tổng quát, Bảng chữ, Từ vựng, Hán tự, Ngữ pháp, Đọc, Nghe, Nói. Hệ thống hỗ trợ lựa chọn số lượng câu hỏi, ghi nhận điểm số, thời gian, số câu bỏ qua và hiển thị chi tiết kết quả từng phần. |
    | **Giao diện liên quan** | - Tab “Kiểm tra” ở màn hình chính<br> - Popup chọn loại kiểm tra và số lượng câu hỏi<br> - Giao diện bài làm (câu hỏi trắc nghiệm từng phần)<br> - Màn hình kết quả tổng quan<br> - Chi tiết kết quả từng kỹ năng (dropdown)<br> - Danh sách lịch sử kiểm tra |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Nhấn vào tab “Kiểm tra”<br>3. Chọn loại kiểm tra: Tổng quát / Bảng chữ / Từ vựng / Hán tự / Ngữ pháp / Đọc / Nghe / Nói<br>4. Chọn số lượng câu hỏi:<br>&emsp;• Nhanh (20 câu)<br>&emsp;• Chi tiết (50 câu)<br>&emsp;• Chuyên sâu (100 câu)<br>5. Nhấn “Vào kiểm tra” để bắt đầu<br>6. Lần lượt trả lời từng câu hỏi<br>7. Khi hoàn tất, hệ thống hiển thị điểm số và kết quả từng phần<br>8. Người dùng có thể nhấn để xem chi tiết câu trả lời đúng/sai, lý do sai (nếu có)<br>9. Kiểm tra được ghi lại trong mục Lịch sử kiểm tra |
    | **Chi tiết hiển thị** | - **Giao diện làm bài**:<br>&emsp;• Câu hỏi và 4 đáp án dạng trắc nghiệm<br>&emsp;• Nút điều hướng qua lại câu hỏi<br>&emsp;• Số thứ tự câu và tiến độ<br><br> - **Popup chọn số lượng câu hỏi**:<br>&emsp;• 3 lựa chọn: Nhanh (20), Chi tiết (50), Chuyên sâu (100)<br><br> - **Kết quả**:<br>&emsp;• Điểm số tổng thể hiển thị dưới dạng vòng tròn trung tâm<br>&emsp;• Bảng kết quả theo từng phần (VD: Bảng chữ: 0/15, Đọc: 12/14, ...)<br>&emsp;• Có thể nhấn vào từng mục để xem chi tiết từng câu<br><br> - **Màn hình xem chi tiết**:<br>&emsp;• Hiển thị câu hỏi, đáp án đã chọn, đáp án đúng (xanh lá), đáp án sai (đỏ), đánh dấu bỏ qua nếu có<br>&emsp;• Giải thích phía dưới câu hỏi (nếu có)<br><br> - **Lịch sử kiểm tra**:<br>&emsp;• Hiển thị ngày giờ kiểm tra, số câu, thời gian làm bài, điểm số |
    | **Kết quả hiển thị** | - Điểm số rõ ràng, chi tiết theo từng kỹ năng<br> - Đáp án đúng/sai thể hiện trực quan bằng màu sắc<br> - Có thể xem lại và phân tích từng câu trả lời<br> - Dữ liệu kiểm tra được lưu trong lịch sử và có thể xem lại bất kỳ lúc nào |
    | **Trường hợp không có dữ liệu** | - Nếu chưa từng làm bài: “Bạn chưa có bài kiểm tra nào!”<br> - Nếu nhóm kỹ năng chưa có câu hỏi: “Hiện chưa có dữ liệu kiểm tra cho phần này” |

### 3.18 Chức năng quản lý thư viên học tập

#### 3.18.1 Chức năng hiển thị thư viên học tập { #toc-3-18-1}

??? book "Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị thư viện học tập |
    | **Mô tả** | Thư viện học tập là nơi học viên có thể ôn tập lại toàn bộ kiến thức đã học, bao gồm: từ vựng, ngữ pháp, Hán tự, kỹ năng nghe, kỹ năng đọc, kỹ năng nói. Học viên có thể truy cập Thư viện từ màn hình chính. Tiến độ Thư viện học tập được hiển thị ngoài màn hình chính và được tính trung bình từ 6 mục: % Từ vựng, % Ngữ pháp, % Hán tự, % Nghe, % Đọc, % Nói. |
    | **Giao diện liên quan** | - Màn hình chính → box **Thư viện học tập**<br> - Màn hình Thư viện học tập (gồm 3 tab: **Kiến thức**, **Kỹ năng**, **Tiến trình**)<br> - Giao diện danh sách các mục đã lưu hoặc đánh dấu "đã thuộc" |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính → nhấn vào box **Thư viện học tập**<br>3. Giao diện chuyển đến màn hình Thư viện học tập<br>4. Tab **Kiến thức** hiển thị các mục: Từ vựng, Ngữ pháp, Hán tự<br>5. Tab **Kỹ năng** hiển thị các mục: Nghe, Đọc, Nói<br>6. Mỗi mục đều hiển thị tiến độ % tương ứng<br>7. Học viên có thể nhấn vào **Chi tiết** từng mục để học lại hoặc luyện tập tiếp |
    | **Chi tiết hiển thị** | - Box Thư viện học tập ngoài màn chính hiển thị tiến độ tổng hợp trung bình<br> - Công thức tính: <br>&emsp;**% Thư viện học tập = ( % Từ vựng + % Ngữ pháp + % Hán tự + % Nghe + % Đọc + % Nói ) / 6**<br> - Trong mỗi tab, các mục hiển thị:<br>&emsp;• Tên mục (VD: Hán tự)<br>&emsp;• Tiến độ học (VD: 40%)<br>&emsp;• Nút “Chi tiết” để truy cập nội dung<br> - Khi học viên đánh dấu “Đã thuộc” hoặc hoàn thành bài luyện tập, % của từng mục sẽ tăng<br> - % tổng được cập nhật theo thời gian thực dựa trên dữ liệu từng mục |
    | **Kết quả hiển thị** | - Tiến độ tổng thể hiển thị ngoài màn hình chính đúng theo công thức<br> - Các mục trong Thư viện hiển thị đúng tiến độ học của học viên<br> - Cho phép truy cập nhanh vào từng mục để tiếp tục học tập |
    | **Trường hợp không có dữ liệu** | - Nếu học viên chưa học hoặc chưa lưu nội dung nào → % tất cả các mục = 0% và box Thư viện hiển thị: “0%” |

#### 3.18.2 Chức năng học từ vựng trong Thư viện học tập { #toc-3-18-2}

??? book "Học từ vựng trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Học từ vựng trong Thư viện học tập |
    | **Mô tả** | Chức năng giúp học viên ôn lại và ghi nhớ từ vựng đã lưu vào Thư viện học tập. Học viên có thể duyệt hoặc luyện tập các từ đã lưu, với giao diện rõ ràng, dễ thao tác. |
    | **Giao diện liên quan** | - Màn hình Thư viện học tập → mục "Từ vựng"<br> - Danh sách từ vựng dạng tag và danh sách chi tiết<br> - Popup xem nhanh từ vựng khi nhấn vào tag ở màn hình Thư viện<br> - Màn hình "Chi tiết từ vựng" khi nhấn **Chi tiết** |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình chính → nhấn vào **Thư viện học tập**<br>3. Chọn tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục "Từ vựng":<br>&emsp;• Xem % từ đã thuộc<br>&emsp;• Nhấn vào tag từ vựng → popup hiển thị từ vựng (hình ảnh, phiên âm, nghĩa, ví dụ, loa phát âm, nút "Đã thuộc" và "Lưu")<br>&emsp;• Nhấn **Chi tiết** → vào màn hình danh sách từ vựng<br>5. Trên màn hình danh sách từ vựng:<br>&emsp;• Hiển thị danh sách thẻ từ: hình ảnh, chữ Hán, phiên âm, nghĩa tiếng Việt, nút loa phát âm, trạng thái "Đã thuộc" (nếu có)<br>&emsp;• Nhấn vào từng thẻ từ → vào màn hình **Chi tiết từ vựng**<br>6. Màn hình chi tiết từ vựng:<br>&emsp;• Hiển thị: hình ảnh, chữ Hán, phiên âm, loại từ, nghĩa, ví dụ (tiếng Nhật + tiếng Việt), từ được highlight trong ví dụ<br>&emsp;• Có nút **Lưu** (biểu tượng ngôi sao) và **Đã thuộc** (biểu tượng bóng đèn)<br>7. Học viên có thể chọn chế độ **Duyệt** hoặc **Luyện tập** từ các nút ở cuối màn hình |
    | **Chi tiết hiển thị** | • Mục "Từ vựng" Thư viện học tập:<br>&emsp;– Thanh % tiến độ<br>&emsp;– Dòng tag từ vựng (đã thuộc được highlight hồng)<br>&emsp;– Nút **Chi tiết**<br><br>• Popup khi nhấn tag từ:<br>&emsp;– Chữ Hán + nghĩa tiếng Việt + hình ảnh<br>&emsp;– Ví dụ (giống màn hình chi tiết từ vựng)<br>&emsp;– Nút loa phát âm<br>&emsp;– Nút **Đã thuộc / Chưa thuộc**<br>&emsp;– Nút **Lưu** (ngôi sao)<br><br>• Danh sách từ vựng (sau khi nhấn Chi tiết):<br>&emsp;– Thẻ từ gồm: hình ảnh, chữ Hán, phiên âm, nghĩa, loa phát âm, trạng thái "Đã thuộc"<br>&emsp;– Nhấn vào thẻ → vào màn hình chi tiết từ vựng<br><br>• Màn hình chi tiết từ vựng:<br>&emsp;– Chữ Hán, nghĩa, phiên âm, loại từ<br>&emsp;– Ví dụ có highlight từ<br>&emsp;– Nút loa phát âm<br>&emsp;– Nút "Đã thuộc" và "Lưu" nằm trên góc phải màn hình |
    | **Kết quả hiển thị** | - Học viên có thể nhanh chóng xem, ôn lại các từ vựng đã lưu<br> - Popup từ vựng tiện lợi khi nhấn tag<br> - Trạng thái **Đã thuộc** và **Lưu** được đồng bộ giữa các màn hình<br> - % tiến độ **Từ vựng** được cập nhật theo trạng thái "Đã thuộc" |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ nào được lưu → hiển thị "Không có từ vựng nào trong thư viện" |

#### 3.18.3 Chức năng học ngữ pháp trong Thư viện học tập { #toc3-18-3}

??? book "Học Ngữ pháp trong Thư viện học tập"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Học Ngữ pháp trong Thư viện học tập |
    | **Mô tả**                 | Chức năng giúp học viên ôn lại và ghi nhớ các điểm ngữ pháp đã lưu vào Thư viện học tập. Học viên có thể xem nhanh hoặc vào chi tiết để xem đầy đủ mô tả, ví dụ và video hướng dẫn. |
    | **Giao diện liên quan**   | - Mục **Ngữ pháp** trong **Thư viện học tập** (tab Kiến thức)<br> - Danh sách ngữ pháp (có thanh tiến độ %)<br> - Popup xem nhanh ngữ pháp khi nhấn vào từng item<br> - Màn hình **Danh sách ngữ pháp** khi nhấn **Chi tiết**<br> - Màn hình **Chi tiết ngữ pháp** khi nhấn vào 1 item cụ thể |
    | **Luồng thao tác chính**  | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình chính → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định)<br>4. Tại mục **Ngữ pháp**:<br>&emsp;• Xem % tiến độ học ngữ pháp<br>&emsp;• Nhấn vào 1 mẫu ngữ pháp → hiển thị popup xem nhanh<br>&emsp;• Trong popup có thể:<br>&emsp;&emsp;– Xem ngắn gọn cấu trúc + mô tả + ví dụ<br>&emsp;&emsp;– Nhấn nút icon video → xem hướng dẫn ngữ pháp qua video<br>&emsp;&emsp;– Nhấn “Luyện tập” để chuyển sang luyện ngữ pháp<br>5. Nhấn **Chi tiết** → mở danh sách toàn bộ ngữ pháp đã lưu<br>6. Nhấn vào từng mẫu → vào **Chi tiết ngữ pháp**:<br>&emsp;• Xem cấu trúc, mô tả chi tiết, ví dụ đa dạng (được highlight)<br>&emsp;• Nhấn nút **Video** để xem minh họa cách dùng<br>&emsp;• Nhấn **Lưu** (icon ngôi sao) hoặc **Đã thuộc** (icon bóng đèn)<br>&emsp;• Nhấn **Luyện tập** để ôn tập kiến thức vừa xem |
    | **Chi tiết hiển thị**     | • Mục Ngữ pháp Thư viện học tập:<br>&emsp;– Thanh tiến độ %<br>&emsp;– Danh sách ngữ pháp: dạng card gồm tiêu đề + mô tả ngắn<br>&emsp;– Nút **Chi tiết**<br><br>• Popup xem nhanh:<br>&emsp;– Tiêu đề ngữ pháp<br>&emsp;– Mô tả ngắn<br>&emsp;– Ví dụ minh họa<br>&emsp;– Nút **Video** (icon phát góc trên)<br>&emsp;– Nút **Luyện tập**<br><br>• Màn hình Chi tiết ngữ pháp:<br>&emsp;– Tiêu đề + cấu trúc đầy đủ<br>&emsp;– Mô tả chi tiết<br>&emsp;– Ví dụ: tiếng Nhật + phiên âm + dịch nghĩa (highlight điểm ngữ pháp)<br>&emsp;– Nút **Video**, **Luyện tập**<br>&emsp;– Nút **Lưu** (⭐) và **Đã thuộc** (💡) hiển thị góc phải |
    | **Kết quả hiển thị**      | - Danh sách ngữ pháp và % tiến độ được hiển thị chính xác<br> - Popup và màn hình chi tiết ngữ pháp đầy đủ nội dung cần học<br> - Video hướng dẫn minh họa đúng mẫu ngữ pháp<br> - Trạng thái “Đã thuộc” và “Lưu” được đồng bộ<br> - Nút “Luyện tập” hoạt động chuyển đúng loại bài tập |
    | **Trường hợp không có dữ liệu** | Nếu không có ngữ pháp nào được lưu → hiển thị: **“Không có nội dung ngữ pháp trong Thư viện”** |


#### 3.18.4 Chức năng Duyệt Kiến thức trong Thư viện học tập { #toc-3-18-4 }

??? book "Duyệt Kiến thức trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Duyệt Kiến thức trong Thư viện học tập |
    | **Mô tả** | Chức năng cho phép học viên ôn lại các nội dung đã lưu ở dạng card thông tin tĩnh, không lật, bao gồm: Từ vựng và Ngữ pháp. Học viên có thể duyệt riêng từng mục, theo thứ tự ngẫu nhiên hoặc hệ thống. Mỗi card có thể đánh dấu **Đã thuộc** hoặc **Cần học lại** để cập nhật tiến độ học tập. |
    | **Giao diện liên quan** | - Tab **Kiến thức** trong Thư viện học tập<br> - Dưới mỗi mục Từ vựng / Ngữ pháp có nút **Duyệt**<br> - Giao diện popup chọn chế độ duyệt<br> - Giao diện từng card kiến thức<br> - Giao diện kết thúc hiển thị thống kê |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình chính nhấn vào box **Thư viện học tập** trên màn hình chính<br>3. Chọn tab **Kiến thức**<br>4. Nhấn nút **Duyệt** tại mục Từ vựng hoặc Ngữ pháp<br>5. Chọn chế độ duyệt:<br>&emsp;– **Từ vựng**<br>&emsp;– **Ngữ pháp**<br>6. Lần lượt xem từng card nội dung<br>7. Với mỗi card, học viên chọn **Đã thuộc** hoặc **Cần học lại**<br>8. Sau khi duyệt xong, hệ thống hiển thị giao diện thống kê tổng hợp |
    | **Chi tiết hiển thị** | - **Card Từ vựng:**<br>&emsp;• Chữ Hán<br>&emsp;• Phiên âm<br>&emsp;• Nghĩa tiếng Việt<br>&emsp;• Hình ảnh minh họa (nếu có)<br>&emsp;• Ví dụ (có thể có dịch nghĩa)<br><br> - **Card Ngữ pháp:**<br>&emsp;• Cấu trúc ngữ pháp<br>&emsp;• Mô tả ngắn gọn<br>&emsp;• Ví dụ minh họa<br><br> - Các thành phần tương tác:<br>&emsp;• Nút lựa chọn **Đã thuộc** / **Cần học lại** bên dưới<br>&emsp;• Thanh tiến độ tổng duyệt (hiển thị % hoàn thành)<br><br> - **Giao diện thống kê sau khi duyệt:**<br>&emsp;• Tổng số item đã duyệt<br>&emsp;• Số item **Đã thuộc** / **Cần học lại**<br>&emsp;• Hiển thị riêng từng loại: Từ vựng / Ngữ pháp |
    | **Kết quả hiển thị** | - Nội dung duyệt đúng với dữ liệu đã lưu của học viên<br> - Trạng thái học được cập nhật theo tương tác duyệt<br> - Giao diện thống kê hiển thị tách biệt rõ ràng giữa Từ vựng và Ngữ pháp<br> - Các lựa chọn "Đã thuộc" / "Cần học lại" ảnh hưởng trực tiếp đến % tiến độ Thư viện |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ vựng hoặc ngữ pháp nào được lưu trong mục đang duyệt → hiển thị thông báo: **Không có nội dung để duyệt** |


#### 3.18.5 Chức năng Luyện tập Kiến thức trong Thư viện học tập – chế độ Học { #toc-3-18-5 }

??? book "Luyện tập Kiến thức trong Thư viện học tập – chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kiến thức trong Thư viện học tập – chế độ Học |
    | **Mô tả** | Chức năng giúp học viên ôn luyện Từ vựng và Ngữ pháp đã lưu trong Thư viện học tập thông qua chế độ **Học**. Bài học bao gồm các thẻ nội dung, ví dụ, trắc nghiệm và sắp xếp từ. |
    | **Giao diện liên quan** | - Tab **Kiến thức** trong Thư viện học tập<br> - Nút **Luyện tập** tại khu vực Từ vựng / Ngữ pháp<br> - Popup chọn hình thức luyện tập (**Học** / Flashcard)<br> - Giao diện luyện tập: Card thông tin, trắc nghiệm, sắp xếp từ<br> - Giao diện kết thúc bài luyện tập |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình nhấn vào box **Thư viện học tập**<br>3. Chọn tab **Kiến thức**<br>4. Nhấn **Luyện tập** tại khu vực Từ vựng / Ngữ pháp<br>5. Chọn hình thức **Học**<br>6. Chọn loại kiến thức: **Từ vựng**, **Ngữ pháp**, hoặc cả hai<br>7. Chọn nội dung cụ thể (Tất cả / Chưa thuộc / từng item)<br>8. Nhấn **Bắt đầu**<br>9. Lần lượt học từng phần: Card nội dung → Trắc nghiệm → Sắp xếp từ<br>10. Trả lời đúng mới được học tiếp phần sau<br>12. Kết thúc bài → hiển thị màn hình tổng kết |
    | **Chi tiết hiển thị** | - **Popup chọn hình thức luyện tập:** chọn **Học**<br><br> - **Popup chọn nội dung:**<br>&emsp;• Chọn Từ vựng / Ngữ pháp / cả hai<br>&emsp;• Chọn tất cả hoặc chỉ hiển thị nội dung **Chưa thuộc**<br>&emsp;• Ràng buộc tối thiểu 5 nội dung mỗi loại<br><br> - **Trong bài học:**<br>&emsp;• **Card nội dung**: Hiển thị nghĩa, phiên âm, ví dụ minh hoạ<br>&emsp;• **Trắc nghiệm**: chọn đáp án đúng, ghép cặp, điền từ<br>&emsp;• **Sắp xếp từ**: kéo thả hoặc chạm để xếp thành câu<br>&emsp;• Thanh tiến độ hiển thị phần trăm hoàn thành<br>&emsp;• Phần kiểm tra xen kẽ giữa các nội dung |
    | **Kết quả hiển thị** | - Cập nhật tiến độ luyện tập sau khi học xong<br> - Trả lời đúng mới tiếp tục được học tiếp<br> - Giao diện cuối bài hiển thị thống kê tiến độ<br> - Trạng thái "Đã thuộc" được cập nhật cho từng nội dung đã học |
    | **Trường hợp không có dữ liệu** | Nếu không có đủ nội dung luyện tập (ít hơn 5 item mỗi loại) → hiển thị: **Không có nội dung để luyện tập** |

#### 3.18.6 Chức năng học kỹ năng Nghe trong Thư viện học tập { #toc-3-18-6 }

??? book "Học kỹ năng Nghe trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Học kỹ năng Nghe trong Thư viện học tập |
    | **Mô tả** | Học viên có thể luyện kỹ năng Nghe thông qua các bài hội thoại kèm audio đã lưu vào Thư viện học tập. Giao diện cho phép điều chỉnh phụ đề, phiên âm, tốc độ phát, và đánh dấu **Đã thuộc** hoặc **Lưu** để theo dõi tiến độ. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** trong Thư viện học tập → mục **Nghe**<br> - Danh sách bài nghe đã lưu<br> - Màn hình chi tiết bài nghe (audio + block phụ đề)<br> - Nút chức năng: **Đã thuộc**, **Lưu**, **Tùy chọn tốc độ**, **Hiển thị phụ đề** |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình nhấn vào box **Thư viện học tập**<br>3. Chọn tab **Kỹ năng**<br>4. Trong mục **Nghe** → chọn bài đã lưu<br>5. Giao diện chi tiết bài nghe hiển thị:<br>&emsp;– Nhấn **Play** để phát audio<br>&emsp;– Dùng các nút tùy chỉnh: **Phiên âm**, **Dịch nghĩa**, **Phụ đề**, **Tốc độ**<br>&emsp;– Có thể nhấn block phụ đề để tua đến đoạn tương ứng<br>&emsp;– Nhấn **Đã thuộc** hoặc **Lưu** nếu muốn ghi nhận tiến độ<br>6. Nhấn **Luyện tập** để chuyển sang chế độ luyện kỹ năng nếu có |
    | **Chi tiết hiển thị** | - **Danh sách bài nghe:**<br>&emsp;• Tiêu đề tiếng Nhật<br>&emsp;• Dịch nghĩa<br>&emsp;• Icon âm thanh hiển thị trạng thái đã nghe<br><br> - **Màn hình chi tiết:**<br>&emsp;• Thanh audio (play/pause, thời lượng)<br>&emsp;• Phụ đề chia theo block thoại<br>&emsp;• Mỗi block gồm: **Tiếng Nhật**, **Phiên âm**, **Dịch nghĩa**<br>&emsp;• Highlight dòng đang phát theo thời gian<br>&emsp;• Nhấn vào block để seek đến đoạn tương ứng<br>&emsp;• Nút điều khiển:<br>&emsp;&emsp;– **Phiên âm**: bật/tắt<br>&emsp;&emsp;– **Dịch nghĩa**: bật/tắt<br>&emsp;&emsp;– **Phụ đề**: hiển thị/ẩn toàn bộ block<br>&emsp;&emsp;– **Tốc độ**: Chậm / Bình thường / Nhanh<br>&emsp;• Nút **Đã thuộc** / **Lưu** ở góc trên |
    | **Kết quả hiển thị** | - Audio hoạt động bình thường, block thoại được đồng bộ highlight<br> - Các tuỳ chọn hiển thị đúng trạng thái<br> - Ghi nhận chính xác trạng thái **Đã thuộc** và **Lưu**<br> - **Tiến độ kỹ năng Nghe** được cập nhật khi học viên đánh dấu **Đã thuộc** |
    | **Trường hợp không có dữ liệu** | Nếu không có bài nghe nào được lưu → hiển thị: **Không có bài luyện nghe nào** |

#### 3.18.7 Chức năng học kỹ năng đọc trong thư viện học tập { #toc-3-18-7}

??? book "Kỹ năng Đọc trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Kỹ năng Đọc trong Thư viện học tập |
    | **Mô tả** | Học viên luyện kỹ năng đọc thông qua các bài đọc tiếng Nhật đã lưu trong Thư viện học tập. Giao diện hỗ trợ tuỳ chỉnh chế độ dịch, cỡ chữ, đánh dấu **Đã thuộc**, **Lưu**, và tra nghĩa từ vựng được highlight. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** trong Thư viện học tập → mục **Đọc**<br> - Danh sách bài đọc đã lưu<br> - Màn hình chi tiết bài đọc<br> - Popup **Tùy chỉnh** (chọn chế độ dịch + cỡ chữ)<br> - Popup tra nghĩa khi nhấn từ highlight<br> - Nút **Đã thuộc**, **Lưu** |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình nhấn vào box **Thư viện học tập**<br>3. Chuyển sang tab **Kỹ năng**<br>4. Trong mục **Đọc** → chọn bài đọc đã lưu<br>5. Màn hình chi tiết bài đọc hiển thị:<br>&emsp;– Đọc nội dung, từ được highlight có thể nhấn để tra nghĩa<br>&emsp;– Mở popup **Tùy chỉnh** để chọn chế độ hiển thị:<br>&emsp;&emsp;• **Đọc hiểu** / **Dịch câu** / **Dịch từ**<br>&emsp;&emsp;• Điều chỉnh **cỡ chữ**<br>&emsp;– Nhấn **Đã thuộc** để cập nhật tiến độ<br>&emsp;– Nhấn **Lưu** để lưu bài đọc lại<br>6. Nhấn **Luyện tập** nếu muốn chuyển sang chế độ luyện đọc |
    | **Chi tiết hiển thị** | - **Danh sách bài đọc:**<br>&emsp;• Tiêu đề tiếng Nhật<br>&emsp;• Dịch nghĩa<br>&emsp;• Icon hiển thị kỹ năng Đọc<br><br> - **Màn hình chi tiết bài đọc:**<br>&emsp;• Nội dung bài đọc có từ vựng được highlight<br>&emsp;• Nhấn từ highlight → hiện popup tra nghĩa gồm: nghĩa, phiên âm, audio, hình ảnh, ví dụ<br>&emsp;• Nút **Đã thuộc**, **Lưu** ở góc trên<br>&emsp;• Nút **Luyện tập** phía dưới<br>&emsp;• Nút **Tùy chỉnh** mở popup:<br>&emsp;&emsp;◦ **Chế độ dịch:**<br>&emsp;&emsp;&emsp;– Đọc hiểu: không dịch<br>&emsp;&emsp;&emsp;– Dịch câu: bật/tắt từng câu<br>&emsp;&emsp;&emsp;– Dịch từ: click vào từ highlight để tra<br>&emsp;&emsp;◦ **Cỡ chữ:** điều chỉnh kích thước văn bản |
    | **Kết quả hiển thị** | - Hiển thị chính xác nội dung bài đọc đã lưu<br> - Chế độ dịch, cỡ chữ hoạt động theo thiết lập<br> - Popup tra nghĩa đầy đủ thông tin<br> - **Khi nhấn Đã thuộc → tiến độ kỹ năng Đọc được cập nhật trong Thư viện học tập**<br> - Trạng thái **Lưu** được ghi nhận theo từng bài đọc |
    | **Trường hợp không có dữ liệu** | - Nếu không có bài đọc nào đã lưu → hiển thị: **Không có bài luyện đọc nào** |



#### 3.18.8 Chức năng Duyệt Kỹ năng trong Thư viện học tập { #toc-3-18-8 }

??? book "Duyệt Kỹ năng trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Duyệt Kỹ năng trong Thư viện học tập |
    | **Mô tả** | Chức năng cho phép học viên duyệt lại nội dung đã lưu trong Thư viện học tập theo dạng FlashCard. Học viên có thể chọn Duyệt **Tất cả**, hoặc chỉ Duyệt **Kỹ năng Đọc** hoặc **Kỹ năng Nghe**. Việc duyệt lại giúp ôn tập kiến thức nhưng không ảnh hưởng đến % tiến độ kỹ năng. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** trong Thư viện học tập → nút **Duyệt**<br> - Popup chọn nội dung Duyệt (**Tất cả / Đọc / Nghe**)<br> - Màn hình FlashCard Duyệt<br> - Màn hình **Hoàn thành Duyệt** |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình nhấn vào box **Thư viện học tập**<br>3. Chuyển sang tab **Kỹ năng**<br>4. Nhấn nút **Duyệt**<br>5. Chọn nội dung cần Duyệt:<br>&emsp;– Duyệt tất cả<br>&emsp;– Chỉ Đọc<br>&emsp;– Chỉ Nghe<br>6. Nhấn **Duyệt** → chuyển đến màn hình FlashCard<br>7. Lần lượt duyệt từng thẻ:<br>&emsp;• Với **Đọc**: hiển thị câu tiếng Nhật + dịch nghĩa<br>&emsp;• Với **Nghe**: hiển thị câu tiếng Nhật + auto phát âm<br>8. Với mỗi thẻ, chọn **Đã thuộc** hoặc **Cần học lại**<br>9. Duyệt hết → hiển thị **Màn hình Hoàn thành Duyệt** |
    | **Chi tiết hiển thị** | - **Popup chọn nội dung Duyệt:**<br>&emsp;• Duyệt tất cả<br>&emsp;• Chỉ Đọc<br>&emsp;• Chỉ Nghe<br><br> - **Màn hình FlashCard:**<br>&emsp;• Thanh tiến độ session Duyệt<br>&emsp;• Số thứ tự (ví dụ: 3/38)<br>&emsp;• FlashCard **Đọc**: hiển thị câu + dịch nghĩa<br>&emsp;• FlashCard **Nghe**: hiển thị câu + auto phát âm<br>&emsp;&emsp;– Có nút **Pause / Play** để điều khiển phát lại<br><br> - Nút đánh giá:<br>&emsp;• **Đã thuộc** (màu xanh)<br>&emsp;• **Cần học lại** (màu đỏ)<br><br> - Nút **Quay lại** góc trên phải |
    | **Kết quả hiển thị** | - FlashCard hiển thị đúng nội dung theo loại kỹ năng<br> - FlashCard **Nghe** tự động phát âm, có thể điều khiển<br> - Các lựa chọn **Đã thuộc** / **Cần học lại** được ghi nhận trong session Duyệt<br> - **Không ảnh hưởng đến tiến độ % kỹ năng trong Thư viện học tập**<br> - Màn hình Hoàn thành Duyệt hiển thị:<br>&emsp;• Số lượng **Đã thuộc** (cột trái, màu xanh)<br>&emsp;• Số lượng **Cần học lại** (cột phải, màu đỏ)<br>&emsp;• Nút **Duyệt lại** để ôn lại từ đầu |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung để duyệt → hiển thị: **Không có nội dung để duyệt** |

#### 3.18.9 Chức năng Luyện tập Kỹ năng trong Thư viện học tập { #toc-3-18-9 }

??? book "Luyện tập Kỹ năng trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kỹ năng trong Thư viện học tập |
    | **Mô tả** | Học viên luyện tập kỹ năng **Nghe** / **Đọc** trong Thư viện học tập thông qua 2 loại card: **FlashCard** và **Ghi nhớ nội dung**. Mỗi nội dung luyện tập gồm 3 bước: học qua FlashCard → Ghi nhớ nội dung → làm bài tập **Sắp xếp từ**. Học viên phải lần lượt học và làm đúng bài tập thì mới được tiếp tục. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** → nút **Luyện tập**<br> - Popup chọn **kỹ năng luyện tập** (Nghe / Đọc)<br> - Popup chọn **kiến thức luyện tập** (Chọn tất cả / Chưa thuộc / từng nội dung)<br> - Màn hình **FlashCard**<br> - Màn hình **Ghi nhớ nội dung**<br> - Màn hình **Sắp xếp thành câu có nghĩa** |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình nhấn vào box **Thư viện học tập**<br>3. Chuyển sang tab **Kỹ năng**<br>4. Nhấn nút **Luyện tập**<br>5. Chọn kỹ năng luyện tập: **Nghe** hoặc **Đọc**<br>6. Chọn nội dung luyện tập: **Chọn tất cả**, **Chưa thuộc**, hoặc chọn từng mục<br>7. Nhấn **Bắt đầu**<br>8. Luyện tập theo 3 bước:<br>&emsp;• **FlashCard**: hiển thị nội dung 2 mặt<br>&emsp;• **Ghi nhớ nội dung**: xem lại nội dung hoặc nghe audio<br>&emsp;• **Sắp xếp từ thành câu có nghĩa**<br>9. Nếu làm đúng bài tập → sang nội dung tiếp theo; nếu sai → phải thử lại |
    | **Chi tiết hiển thị** | - Popup chọn kỹ năng: Nghe / Đọc<br> - Popup chọn nội dung: Tất cả / Chưa thuộc / Từng item<br> - **FlashCard**:<br>&emsp;• Mặt trước: nội dung chính<br>&emsp;• Mặt sau: nội dung giải nghĩa<br>&emsp;• Nút **Tiếp tục**, **Hoàn thành**<br> - **Ghi nhớ nội dung**:<br>&emsp;• Đọc: hiển thị bản dịch<br>&emsp;• Nghe: auto phát âm + hiển thị text<br>&emsp;• Nút **Tiếp tục**<br> - **Sắp xếp thành câu có nghĩa**:<br>&emsp;• Hiển thị câu dịch<br>&emsp;• Từ gợi ý → nhấn để sắp xếp<br>&emsp;• Nút **Kiểm tra** kết quả |
    | **Kết quả hiển thị** | - Trình tự luyện tập đúng: FlashCard → Ghi nhớ → Sắp xếp từ<br> - Chỉ khi làm đúng mới chuyển nội dung tiếp theo<br> - Ghi nhận tiến độ và giúp học viên rèn luyện sâu |
    | **Trường hợp không có dữ liệu** | - Hiển thị **Không có nội dung để luyện tập** nếu không đủ điều kiện dữ liệu |


#### 3.18.10 Chức năng Thống kê Tiến trình trong Thư viện học tập { #toc-3-18-10 }

??? book "Thống kê Tiến trình trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Thống kê Tiến trình trong Thư viện học tập |
    | **Mô tả** | Chức năng giúp học viên theo dõi tiến trình học tập trong Thư viện học tập thông qua biểu đồ, số liệu và phân loại chi tiết theo từng kỹ năng / loại nội dung. |
    | **Giao diện liên quan** | - Tab **Tiến trình** trong Thư viện học tập<br> - Vòng tròn **% Tiến trình tổng**<br> - Bộ lọc **Loại nội dung**:<br>&emsp;• Toàn bộ<br>&emsp;• Kỹ năng / Kiến thức / Từ vựng / Ngữ pháp / Đọc / Nghe<br> - Bộ lọc **Thời gian**:<br>&emsp;• Tuần này / Tháng này / Toàn bộ<br> - Biểu đồ đường<br> - Khối thống kê chi tiết |
    | **Luồng thao tác chính** | 1. Học viên truy cập ứng dụng<br>2. Từ màn hình nhấn vào box **Thư viện học tập**<br>3. Chọn tab **Tiến trình**<br>4. Xem % tiến trình tổng<br>5. Chọn loại nội dung và thời gian muốn xem<br>6. Xem biểu đồ học tập theo ngày<br>7. Xem các khối chi tiết theo mốc thời gian:<br>&emsp;• Hôm nay / Tuần này / Tháng này / Năm nay<br>8. Expand khối để xem chi tiết theo kỹ năng |
    | **Chi tiết hiển thị** | - Vòng tròn tiến trình tổng (%)<br> - Bộ lọc loại nội dung:<br>&emsp;• Toàn bộ / Kỹ năng / Kiến thức / Từ vựng / Ngữ pháp / Đọc / Nghe<br> - Bộ lọc mốc thời gian:<br>&emsp;• Tuần này / Tháng này / Toàn bộ<br> - Biểu đồ đường:<br>&emsp;• Trục hoành: Ngày<br>&emsp;• Trục tung: Số lượng nội dung hoàn thành<br> - Khối chi tiết:<br>&emsp;• Tổng số nội dung đã hoàn thành<br>&emsp;• Xem theo từng kỹ năng khi mở rộng |
    | **Kết quả hiển thị** | - Hiển thị đúng tiến độ tổng và từng mục<br> - Biểu đồ, số liệu cập nhật chính xác theo thời gian và bộ lọc<br> - Có thông báo nếu không có nội dung: **Năm nay bạn chưa học được nội dung gì!!!** |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung học trong mốc thời gian / loại nội dung → hiển thị: **Không có nội dung** hoặc **Năm nay bạn chưa học được nội dung gì!!!** |
