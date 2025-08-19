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
    | **Phạm vi sử dụng** | Hiển thị trong chi tiết nhóm từ vựng của mục từ vựng kiến thức nền |
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
    | **Mô tả** | Chức năng cho phép học viên luyện tập Hán tự theo hai dạng thẻ:<br>&emsp;• **Flashcard**: hiển thị chữ Hán và yêu cầu ghi nhớ cách đọc – nghĩa – ví dụ<br>&emsp;• **Card ghi nhớ nội dung**: hiển thị luôn toàn bộ nội dung (âm đọc, nghĩa, ví dụ)<br>Sau một số thẻ sẽ chèn các loại câu hỏi kiểm tra ghi nhớ như: trắc nghiệm chọn nghĩa đúng, chọn âm đọc đúng. |
    | **Giao diện liên quan** | - Màn hình nhóm Hán tự → nhấn nút “Luyện tập” → chọn chế độ “Học”<br> - Giao diện card ghi nhớ:<br>&emsp;• Hiển thị Hán tự, nghĩa, câu ví dụ<br>&emsp;• Nút “Tiếp tục”<br> - Giao diện flashcard:<br>&emsp;• Mặt trước: Hán tự<br>&emsp;• Mặt sau: âm On, âm Kun, bộ thủ, nghĩa, ví dụ<br>&emsp;• Nút “Tiếp theo”, “Hoàn thành”, “Tiếp tục”<br> - Giao diện câu hỏi:<br>&emsp;• Trắc nghiệm chọn nghĩa đúng<br>&emsp;• Trắc nghiệm chọn âm đọc đúng |
    | **Luồng thao tác chính** | 1. Người dùng truy cập ứng dụng<br>2. Từ màn hình chính chọn cấp độ (VD: N5)<br>3. Vào tab “Kiến thức nền” → chọn “Hán tự”<br>4. Chọn nhóm Hán tự → nhấn “Luyện tập” và chọn chế độ “Học”<br>5. Lần lượt xem từng thẻ:<br>&emsp;• Nếu là card ghi nhớ: hiển thị nội dung cố định → nhấn “Tiếp tục”<br>&emsp;• Nếu là flashcard: nhấn “Tiếp theo” để lật, nhấn “Hoàn thành” → “Tiếp tục”<br>6. Sau một số thẻ, hệ thống tự chèn câu hỏi kiểm tra:<br>&emsp;• Trắc nghiệm chọn nghĩa<br>&emsp;• Trắc nghiệm chọn cách đọc<br>7. Trả lời đúng → tiếp tục<br>8. Trả lời sai quá số lần quy định → yêu cầu trả lời đúng mới được tiếp tục |
    | **Chi tiết hiển thị** | - **Card ghi nhớ nội dung**:<br>&emsp;• Hiển thị Hán tự, nghĩa, ví dụ, không lật<br>&emsp;• Nút “Tiếp tục”<br><br> - **Flashcard**:<br>&emsp;• Mặt trước: Hán tự<br>&emsp;• Mặt sau: âm On, âm Kun, nghĩa, bộ thủ, ví dụ<br>&emsp;• Nút “Tiếp theo” → lật thẻ<br>&emsp;• Nút “Hoàn thành” → hiện “Tiếp tục”<br><br> - **Câu hỏi kiểm tra**:<br>&emsp;• Trắc nghiệm chọn nghĩa đúng<br>&emsp;• Trắc nghiệm chọn âm đọc đúng<br><br> - **Phản hồi**:<br>&emsp;• Trả lời đúng: chuyển tiếp<br>&emsp;• Trả lời sai: hiển thị đáp án đúng và yêu cầu chọn lại |
    | **Kết quả hiển thị** | - Khi hoàn tất toàn bộ thẻ và câu hỏi → hiển thị “Chúc mừng đã hoàn thành phần học” |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có Hán tự nào để luyện tập” |


#### 3.13.5 Chức năng luyện tập Hán tự – chế độ Flashcard {#toc-3-13-5}

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

#### 3.13.6 Chức năng luyện tập Hán tự – chế độ Vẽ {#toc-3-13-6}

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
    | **Chi tiết hiển thị** | - Văn bản được chia theo đoạn/câu rõ ràng<br>&emsp;• Dịch theo chế độ:<br>&emsp;&emsp;– **Đọc hiểu**: hiện toàn bộ nội dung dịch<br>&emsp;&emsp;– **Dịch câu**: hiển thị dịch dưới mỗi câu<br>&emsp;&emsp;– **Dịch từ vựng**: gắn nghĩa ngay trên từ khóa<br> - 💡 Dùng để đánh dấu **bài đã thuộc** và tăng tiến độ kỹ năng Đọc<br> - ⭐ Dùng để lưu bài vào thư viện cá nhân |
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

### 3.19 Chức năng quản lý lộ trình học tập {#toc-3-19}

#### 3.19.1 Chức năng tạo lộ trình học tập cá nhân { #toc-3-19-1}
??? book "Tạo lộ trình học cá nhân hóa"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Tạo lộ trình học cá nhân hóa |
    | **Mô tả** | Cho phép người dùng tạo lộ trình học dựa trên cấp độ (N5–N2), mục tiêu học, khối lượng học mỗi ngày, số ngày học trong tuần và thời gian học mỗi ngày. Hệ thống sẽ sinh lộ trình chi tiết phù hợp và hiển thị dạng tuần – buổi. |
    | **Giao diện liên quan** | - Tab **Lộ trình**<br> - Màn hình chọn cấp độ + mục tiêu<br> - Popup chọn nội dung học<br> - Giao diện kiểm tra trình độ<br> - Màn hình chọn thời lượng học<br> - Giao diện chọn ngày trong tuần<br> - Màn hình đặt tên lộ trình<br> - Màn hình tổng kết lộ trình |
    | **Luồng thao tác chính** | 1. Người dùng mở ứng dụng<br>2. Truy cập tab **Lộ trình**<br>3. Nhấn nút **➕ Thêm lộ trình mới** ở góc phải<br>4. Chọn cấp độ học (N5 → N2)<br>5. Chọn loại lộ trình: Tổng hợp / Ôn tập / JLPT<br>6. Nhấn **Tiếp theo**<br>7. Giao diện hiển thị mô tả nội dung học mỗi buổi → người dùng xác nhận<br>8. Màn hình hỏi “Bạn có muốn kiểm tra trình độ không?” → chọn **Bắt đầu kiểm tra** hoặc **Bỏ qua**<br>9. Chọn **thời gian học mỗi ngày** bằng cách kéo chọn (ví dụ: 30 phút)<br>10. Chọn **các ngày học trong tuần** bằng cách tick thứ (T2–CN), có thể chọn tùy ý<br>11. Đặt **tên lộ trình học** (ví dụ: “Lộ trình N2 tháng 6”)<br>12. Nhấn **Xác nhận** → hệ thống sinh lộ trình<br>13. Màn hình hiển thị lộ trình tổng thể: Tuần 1, Tuần 2,... với các buổi học phân bố theo thứ đã chọn |
    | **Chi tiết hiển thị** | - Mỗi buổi học gồm: từ vựng, ngữ pháp, kỹ năng (nghe – đọc – nói – hán tự)<br> - Có trạng thái hiển thị: Chưa hoàn thành, Chưa bắt đầu<br> - Lịch học hiển thị theo các thứ trong tuần đã chọn<br> - Tổng thời gian mỗi ngày = thời lượng đã thiết lập |
    | **Kết quả hiển thị** | - Lộ trình học được khởi tạo và hiển thị dạng Tuần – Buổi<br> - Các buổi học hiển thị đầy đủ nội dung, có thể bắt đầu học ngay<br> - Tiến độ được theo dõi xuyên suốt trong tab **Lộ trình** |
    | **Trường hợp không có dữ liệu** | - Nếu người dùng không chọn đủ thông tin → không thể nhấn **Tạo lộ trình**<br> - Nếu lỗi khi sinh lộ trình → hiển thị: **“Không thể tạo lộ trình. Vui lòng thử lại sau.”** |

#### 3.19.2 Chức năng xem chi tiết một ngày học trong lộ trình {#toc-3-19-2}

??? book "Xem chi tiết một ngày học trong lộ trình"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Xem chi tiết một ngày học trong lộ trình |
    | **Mô tả** | Cho phép người dùng xem chi tiết nội dung cần học trong từng ngày thuộc lộ trình học đã tạo. Mỗi buổi học được trình bày rõ các phần: từ vựng, ngữ pháp, Hán tự, kỹ năng (nghe – đọc). |
    | **Giao diện liên quan** | - Tab **Lộ trình**<br> - Màn hình lộ trình theo tuần<br> - Danh sách ngày học trong tuần<br> - Mỗi ngày là một khối nội dung mở rộng |
    | **Luồng thao tác chính** | 1. Người dùng truy cập tab **Lộ trình**<br>2. Chọn tuần học (ví dụ: Tuần 1)<br>3. Danh sách các ngày học hiển thị theo chiều dọc<br>4. Nhấn vào ngày bất kỳ (VD: Ngày 1) để mở chi tiết<br>5. Nội dung hiển thị gồm:<br>&emsp;• **Từ vựng**: số lượng từ + nội dung<br>&emsp;• **Ngữ pháp**: tiêu đề + ví dụ (VD: câu khẳng định / câu phủ định)<br>&emsp;• **Hán tự**: số lượng và bài học<br>&emsp;• **Nghe**: tên bài nghe (VD: “Tọa độ TQ”)<br>&emsp;• **Đọc hiểu**: tiêu đề văn bản<br>6. Với mỗi mục, hiển thị trạng thái: **Đã hoàn thành** / **Chưa hoàn thành**<br>7. Có thể nhấn vào mục bất kỳ để bắt đầu học ngay |
    | **Chi tiết hiển thị** | - Mỗi khối nội dung được phân rõ bằng biểu tượng (📘 từ vựng, 🧠 ngữ pháp, 🀄 hán tự...)<br> - Trạng thái hoàn thành hiển thị bằng nhãn màu (VD: “Chưa hoàn thành”)<br> - Thứ tự học có thể cố định hoặc tự do tùy thiết kế hệ thống |
    | **Kết quả hiển thị** | - Người dùng có cái nhìn tổng quan về nội dung cần học trong ngày<br> - Có thể chọn học trực tiếp từng phần<br> - Trạng thái học được cập nhật ngay khi hoàn tất từng phần |
    | **Trường hợp không có dữ liệu** | - Nếu ngày chưa có nội dung học → hiển thị: **“Ngày này chưa có bài học.”** hoặc không cho mở chi tiết |


### 3.20 Chức năng giới thiệu ứng dụng

#### 3.20.1 Chức năng giới thiệu Nhật Ngữ Sakumi { #toc-3-20-1}

??? book "Giới thiệu Nhật ngữ Sakumi"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Giới thiệu Nhật ngữ Sakumi |
    | **Mô tả** | Trình bày các nội dung giới thiệu về thương hiệu Sakumi thông qua nhiều slide liên tiếp. Mỗi slide có thể là dạng video hoặc văn bản tùy nội dung. Người dùng có thể điều hướng bằng vuốt hoặc nút, và tương tác với video như chỉnh tốc độ, fullscreen. |
    | **Giao diện liên quan** | - Màn hình slide giới thiệu<br> - Slide có thể là: video / văn bản<br> - Nút điều hướng: **Tiếp theo**, **Bắt đầu trải nghiệm**<br> - Dấu chấm tiến độ (slide indicator)<br> - Khung phát video có tốc độ và fullscreen |
    | **Luồng thao tác chính** | 1. Người dùng truy cập mục **Giới thiệu Sakumi** từ menu hoặc khi đăng nhập lần đầu<br>2. Các slide lần lượt hiển thị nội dung giới thiệu về thương hiệu<br>3. Người dùng có thể:<br>&emsp;• Vuốt trái/phải để điều hướng<br>&emsp;• Nhấn **Tiếp theo** để chuyển slide<br>4. Nếu slide là video:<br>&emsp;• Nhấn nút Play để phát<br>&emsp;• Chỉnh tốc độ phát: 0.25x → 2.0x<br>&emsp;• Nhấn **Fullscreen** để xem toàn màn hình<br>5. Slide cuối cùng hiển thị nội dung kết thúc<br>6. Nhấn **Bắt đầu trải nghiệm** để vào màn hình chính |
    | **Chi tiết hiển thị** | - Giao diện slide được thiết kế đồng nhất:<br>&emsp;• Slide video có thanh điều khiển và tốc độ<br>&emsp;• Slide văn bản có tiêu đề + đoạn mô tả<br> - Indicator dưới đáy thể hiện vị trí hiện tại<br> - Trải nghiệm mượt trên cả Android & iOS |
    | **Kết quả hiển thị** | - Truyền tải rõ nét hình ảnh thương hiệu, phương pháp, sứ mệnh Sakumi<br> - Người dùng cảm thấy được định hướng và gắn kết trước khi vào học |
    | **Trường hợp không có dữ liệu** | - Nếu video lỗi → hiển thị: **“Không thể phát video. Vui lòng thử lại sau.”**<br> - Nếu slide lỗi → hiển thị: **“Không thể tải nội dung giới thiệu.”** |


#### 3.20.2 Chức năng Giới thiệu các khóa học tương tác tại Sakumi {#toc-3-20-2}

??? book "Giới thiệu khóa học tương tác tại Sakumi"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Giới thiệu các khóa học tương tác tại Sakumi |
    | **Mô tả** | Chuỗi slide giới thiệu hình thức học tương tác trực tuyến tại Nhật Ngữ Sakumi. Người học sẽ nắm rõ cách hoạt động của các lớp học thực tế, từ việc vào lớp – luyện tập – tương tác – kiểm tra – chấm điểm. Slide được trình bày bằng video hoặc văn bản, có thể điều hướng và tương tác dễ dàng. |
    | **Giao diện liên quan** | - Màn hình slide giới thiệu<br> - Slide chứa video hoặc mô tả<br> - Nút điều hướng: **Tiếp theo**, **Bắt đầu trải nghiệm**<br> - Dấu chấm chỉ vị trí slide<br> - Trình phát video tích hợp: điều chỉnh tốc độ + fullscreen |
    | **Luồng thao tác chính** | 1. Người dùng truy cập mục **Giới thiệu khóa học tương tác** trong app (hoặc tự động hiển thị khi lần đầu vào tab “Lớp học tương tác”)<br>2. Slide lần lượt trình bày các chủ đề như:<br>&emsp;• Giới thiệu mô hình học tương tác trực tuyến tại Sakumi<br>&emsp;• Vào lớp – tham gia học qua Zoom / Google Meet<br>&emsp;• Giáo viên giảng bài – tương tác qua bảng điện tử / mic<br>&emsp;• Làm bài tập ngay trên hệ thống<br>&emsp;• Hệ thống tự động chấm điểm – phản hồi<br>3. Các slide có thể ở dạng video minh họa hoặc mô tả ngắn<br>4. Nếu slide là video:<br>&emsp;• Có thể nhấn Play để phát<br>&emsp;• Tùy chọn tốc độ: 0.25x – 2.0x<br>&emsp;• Xem toàn màn hình với nút Fullscreen<br>5. Điều hướng bằng vuốt trái/phải hoặc nút **Tiếp theo**<br>6. Kết thúc bằng nút **Bắt đầu trải nghiệm lớp học tương tác** |
    | **Chi tiết hiển thị** | - Slide video: player có tốc độ & fullscreen<br> - Slide văn bản: tiêu đề, mô tả ngắn căn giữa<br> - Indicator dưới cùng thể hiện tiến độ<br> - Thiết kế trực quan, đồng bộ phong cách Sakumi |
    | **Kết quả hiển thị** | - Người học hiểu rõ cách hoạt động của lớp học tương tác<br> - Tăng tỷ lệ tham gia lớp và tương tác hiệu quả với giáo viên<br> - Giao diện onboarding hiện đại, tối ưu trải nghiệm người học |
    | **Trường hợp không có dữ liệu** | - Nếu không thể phát video → hiển thị: **“Không thể phát video. Vui lòng thử lại sau.”**<br> - Nếu nội dung slide không tải được → hiển thị: **“Không thể tải nội dung giới thiệu.”** |


#### 3.20.3 Chức năng Giới thiệu cộng đồng Nhật Ngữ Sakumi {#toc-3-20-3}

??? book "Giới thiệu cộng đồng Nhật Ngữ Sakumi"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Giới thiệu cộng đồng Nhật Ngữ Sakumi |
    | **Mô tả** | Hiển thị màn hình giới thiệu các kênh cộng đồng chính thức của Sakumi trên mạng xã hội, bao gồm Facebook, YouTube và TikTok. Người dùng có thể nhấn vào từng biểu tượng để mở trang tương ứng trong trình duyệt hoặc app. |
    | **Giao diện liên quan** | - Màn hình “Giới thiệu cộng đồng”<br> - Logo thương hiệu Sakumi<br> - Các nút liên kết có icon: Facebook, YouTube, TikTok<br> - Nút quay lại |
    | **Luồng thao tác chính** | 1. Người dùng truy cập mục **Cộng đồng Sakumi** từ menu hoặc banner trên trang chủ<br>2. Màn hình hiển thị giới thiệu ngắn gọn cộng đồng học viên Sakumi<br>3. Bên dưới là 3 biểu tượng tương ứng:<br>&emsp;• Facebook (truy cập fanpage Sakumi)<br>&emsp;• YouTube (truy cập kênh video học tập Sakumi)<br>&emsp;• TikTok (xem mẹo học & nội dung ngắn)<br>4. Người dùng nhấn vào biểu tượng bất kỳ → hệ thống mở liên kết trong trình duyệt hoặc app mặc định<br>5. Có thể nhấn nút “Quay lại” để trở về trang chính |
    | **Chi tiết hiển thị** | - Logo Sakumi hiển thị nổi bật phía trên<br> - Mỗi liên kết là một nút hình tròn với icon tương ứng (theo brand màu của mạng xã hội)<br> - Khoảng cách và căn giữa hợp lý giữa các nút<br> - Có thể track lượt click (nếu tích hợp analytics) |
    | **Kết quả hiển thị** | - Người dùng dễ dàng theo dõi các kênh cộng đồng chính thức của Sakumi<br> - Tăng tương tác qua các nền tảng mạng xã hội<br> - Kết nối học viên ngoài phạm vi ứng dụng |
    | **Trường hợp không có dữ liệu** | - Nếu không mở được liên kết → hiển thị toast: **“Không thể mở liên kết. Vui lòng thử lại.”**<br> - Nếu mất kết nối mạng → hiển thị: **“Vui lòng kiểm tra kết nối internet.”** |


#### 3.20.4 Chức năng Giới thiệu Ưu đãi Khóa học Dành cho Bạn {#toc-3-20-4}

??? book "Giới thiệu Ưu đãi khóa học dành cho bạn"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Giới thiệu Ưu đãi Khóa học Dành cho Bạn |
    | **Mô tả** | Hiển thị các chương trình ưu đãi học phí hiện có dưới dạng slide, giúp người dùng dễ dàng cập nhật thông tin khuyến mãi và khuyến khích đăng ký khóa học. |
    | **Giao diện liên quan** | - Màn hình ưu đãi khóa học<br> - Slide hình ảnh + tiêu đề + mô tả<br> - Nút **Tiếp theo** / **Quay lại**<br> - Indicator vị trí slide |
    | **Luồng thao tác chính** | 1. Người dùng truy cập chức năng **Ưu đãi Khóa học** từ menu hoặc trang chủ<br>2. Giao diện hiển thị các ưu đãi dưới dạng slide ngang<br>3. Người dùng có thể:<br>&emsp;• Vuốt trái/phải để chuyển slide<br>&emsp;• Nhấn nút **Tiếp theo** để chuyển đến ưu đãi kế tiếp<br>4. Ở mỗi slide hiển thị:<br>&emsp;• Hình ảnh minh họa ưu đãi<br>&emsp;• Tiêu đề + mô tả ngắn gọn<br>5. Sau khi xem xong, có thể thoát ra hoặc chuyển tới chức năng liên quan như đăng ký tư vấn |
    | **Chi tiết hiển thị** | - Slide thiết kế trực quan, nổi bật mức giảm giá / nội dung ưu đãi<br> - Các slide có định dạng đồng nhất: hình ảnh + tiêu đề + mô tả<br> - Có thể thêm nút CTA nếu muốn điều hướng đến đăng ký hoặc chat tư vấn |
    | **Kết quả hiển thị** | - Người dùng biết rõ các ưu đãi đang được áp dụng tại Sakumi<br> - Gia tăng tỉ lệ đăng ký khóa học qua các kênh trực tiếp<br> - Giao diện rõ ràng, dễ thao tác và thu hút |
    | **Trường hợp không có dữ liệu** | - Nếu không có chương trình ưu đãi → hiển thị: **“Hiện tại chưa có chương trình ưu đãi nào.”** |

#### 3.20.5 Chức năng Giới thiệu phản hồi 5 sao từ học viên {#toc-3-20-5}

??? book "Giới thiệu phản hồi 5 sao từ học viên"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Giới thiệu phản hồi 5 sao từ học viên |
    | **Mô tả** | Hiển thị các đánh giá tích cực từ học viên đã trải nghiệm khóa học tại Sakumi, nhằm tạo độ tin cậy và tăng tỷ lệ chuyển đổi. Các phản hồi được trình bày theo dạng slide có thể vuốt hoặc điều hướng bằng nút. |
    | **Giao diện liên quan** | - Màn hình phản hồi học viên<br> - Slide chứa ảnh chụp đánh giá từ App Store / Google Play<br> - Tên học viên + khóa học tương ứng<br> - Nút **Tiếp theo** / **Quay lại**<br> - Indicator vị trí slide |
    | **Luồng thao tác chính** | 1. Người dùng truy cập chức năng **Phản hồi học viên** từ menu hoặc cuối màn giới thiệu<br>2. Giao diện hiển thị các phản hồi 5 sao từ học viên<br>3. Mỗi slide hiển thị:<br>&emsp;• Ảnh chụp màn hình phần đánh giá (xếp hạng + bình luận)<br>&emsp;• Tên học viên + khóa học đang học<br>4. Người dùng có thể:<br>&emsp;• Vuốt trái/phải để xem tiếp<br>&emsp;• Nhấn nút **Tiếp theo** để chuyển slide<br>5. Sau khi xem xong, có thể chuyển sang chức năng tiếp theo (VD: xem ưu đãi / đăng ký) |
    | **Chi tiết hiển thị** | - Mỗi slide hiển thị rõ phần nhận xét + sao đánh giá<br> - Phần tên học viên và khóa học căn giữa, chữ nhỏ hơn<br> - Giao diện thống nhất, nhẹ nhàng, mang tính truyền cảm hứng |
    | **Kết quả hiển thị** | - Tăng độ tin cậy cho ứng dụng thông qua phản hồi thực tế<br> - Học viên mới được tiếp thêm động lực để tham gia<br> - Hỗ trợ thuyết phục trong quá trình onboarding |
    | **Trường hợp không có dữ liệu** | - Nếu không có phản hồi → hiển thị: **“Chưa có phản hồi từ học viên.”** |

#### 3.20.6 Chức năng Nhận Tư Vấn Khóa Học Miễn Phí {#toc-3-20-6}

??? book "Nhận tư vấn khóa học miễn phí"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Nhận tư vấn khóa học miễn phí |
    | **Mô tả** | Cho phép người dùng dễ dàng liên hệ với trung tâm Sakumi để nhận tư vấn khóa học miễn phí thông qua nhiều kênh liên lạc như Messenger, Zalo hoặc gọi điện thoại. |
    | **Giao diện liên quan** | - Màn hình danh sách tính năng<br> - Popup lựa chọn kênh liên lạc<br> - Trình gọi hệ thống / mở ứng dụng Zalo hoặc Messenger |
    | **Luồng thao tác chính** | 1. Người dùng truy cập tính năng **Nhận Tư Vấn Khóa Học Miễn Phí** từ danh sách menu<br>2. Ứng dụng hiển thị popup lựa chọn phương thức liên lạc gồm:<br>&emsp;• Messenger<br>&emsp;• Zalo<br>&emsp;• Điện thoại<br>3. Người dùng chọn 1 phương thức:<br>&emsp;• Nếu chọn **Messenger** → mở ứng dụng Messenger và vào chat với fanpage Sakumi<br>&emsp;• Nếu chọn **Zalo** → mở ứng dụng Zalo và đến trang tư vấn<br>&emsp;• Nếu chọn **Điện thoại** → gọi đến số hotline định sẵn<br>4. Sau khi hoàn tất hoặc quay lại, người dùng được đưa về giao diện trước đó |
    | **Chi tiết hiển thị** | - Popup thiết kế dạng bo góc, nền sáng, 3 dòng lựa chọn rõ ràng<br> - Icon ứng với từng kênh (Messenger, Zalo, Điện thoại)<br> - Mỗi kênh có thể mở bằng `URL scheme` hoặc `tel:` tùy hệ điều hành<br> - Có nút “Hủy” để đóng popup |
    | **Kết quả hiển thị** | - Người dùng nhanh chóng kết nối tư vấn mà không cần nhập form<br> - Trải nghiệm thân thiện, đa kênh, linh hoạt<br> - Tăng tỷ lệ liên hệ và chốt học viên |
    | **Trường hợp không có dữ liệu** | - Nếu không mở được app → hiển thị: **“Không thể mở ứng dụng. Vui lòng thử lại.”**<br> - Nếu không có số hotline → không hiển thị tùy chọn gọi điện |


### 3.21 Chức năng quản lý luyện thi JLPT
#### 3.21.1 Chức năng Luyện Mondai (Từ vựng – Ngữ pháp – Đọc – Nghe) {#toc-3-27}

??? book "Luyện Mondai – Từ vựng, Ngữ pháp, Đọc hiểu, Nghe hiểu"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện Mondai |
    | **Mô tả** | Cho phép người dùng luyện đề theo từng kỹ năng trong kỳ thi JLPT: Từ vựng, Ngữ pháp, Đọc hiểu và Nghe hiểu. Hỗ trợ 2 chế độ luyện tập là "Luyện từng câu" và "Làm tính giờ". |
    | **Giao diện liên quan** | - Màn hình chọn kỹ năng<br> - Danh sách Mondai (Mondai 1, 2...)<br> - Popup chọn chế độ luyện: Luyện từng câu / Làm tính giờ<br> - Giao diện câu hỏi + đáp án<br> - Giao diện kết quả chấm điểm |
    | **Luồng thao tác chính** | 1. Người dùng truy cập chức năng **Luyện Mondai** từ menu hoặc tab kỹ năng<br>2. Chọn kỹ năng: Từ vựng / Ngữ pháp / Đọc / Nghe<br>3. Chọn mondai muốn luyện (Mondai 1, Mondai 2...)<br>4. Popup hiển thị 2 chế độ luyện:<br>&emsp;• **Luyện từng câu**: Hiện kết quả và giải thích sau mỗi câu<br>&emsp;• **Làm tính giờ**: Làm hết bài mới chấm điểm + phân tích<br>5. Người dùng chọn chế độ và nhấn **Luyện tập** để bắt đầu<br>6. Trong quá trình luyện:<br>&emsp;• Hiển thị từng câu hỏi và lựa chọn<br>&emsp;• Chuyển câu bằng nút “Câu tiếp theo”<br>7. Sau khi hoàn tất:<br>&emsp;• Nếu là “Làm tính giờ” → hiện popup kết quả tổng thể (số điểm, thời gian, đúng/sai)<br>&emsp;• Nếu là “Luyện từng câu” → mỗi câu hiện đáp án + giải thích sau khi chọn |
    | **Chi tiết hiển thị** | - Câu hỏi trắc nghiệm: 3–4 đáp án<br> - Câu Nghe có nút phát audio<br> - Giao diện gọn, rõ, tập trung vào nội dung<br> - Chế độ “Làm tính giờ” có tính thời gian thực tế<br> - Chế độ “Luyện từng câu” giúp người học hiểu bài sâu hơn |
    | **Kết quả hiển thị** | - Người học có thể ôn tập hiệu quả, sát đề thi thật<br> - Có thể chọn chế độ phù hợp với mục tiêu học: hiểu sâu / kiểm tra nhanh<br> - Hệ thống cập nhật tiến độ học |
    | **Trường hợp không có dữ liệu** | - Nếu chưa có mondai cho kỹ năng được chọn → hiển thị: **“Chưa có nội dung luyện tập cho mục này.”** |

#### 3.21.2 Chức năng Luyện thi JLPT – Thi Thử {#toc-3-21-2}

??? book "Luyện thi JLPT – Thi Thử"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện thi JLPT – Thi Thử |
    | **Phạm vi sử dụng** | Tab "Luyện thi JLPT" trên thanh menu dưới cùng của app |
    | **Mô tả** | Cung cấp hệ thống đề thi thử theo cấu trúc kỳ thi JLPT thực tế. Gồm 2 loại đề: (1) Đề thi chính thức do JLPT công bố, (2) Đề mẫu JLPT. Mỗi đề có thể chứa các phần kiến thức cần ôn và/hoặc phần thi thử có chấm điểm. Hỗ trợ đếm ngược thời gian khi làm bài, chấm điểm tự động và lưu trạng thái đã hoàn thành. |
    | **Giao diện liên quan** | - Màn hình chọn loại đề (Chính thức / Đề mẫu)<br>- Danh sách đề theo năm (hoặc mã số)<br>- Màn hình chi tiết từng đề<br>- Giao diện luyện tập từng kỹ năng<br>- Màn hình làm bài thi có đếm ngược<br>- Màn hình kết quả sau khi làm bài |
    | **Luồng thao tác chính** | <br>1. Người dùng chọn tab **Luyện thi JLPT**<br>2. Màn hình hiển thị 2 nhóm đề:<br>&emsp;• **JLPT Chính Thức**: hiển thị theo năm (VD: 07.2024, 12.2012...)<br>&emsp;• **Đề Mẫu JLPT**: hiển thị theo mã đề (VD: 模擬試験 1, 2...)<br>3. Nhấn vào 1 đề → mở chi tiết đề gồm 2 phần (nếu có):<br>&emsp;**A. Kiến thức cần ôn**:<br>&emsp;&emsp;– Từ vựng<br>&emsp;&emsp;– Hán tự<br>&emsp;&emsp;– Ngữ pháp<br>&emsp;→ Dùng để ôn luyện trước, không giới hạn thời gian<br>&emsp;**B. Thi thử**:<br>&emsp;&emsp;– Từ vựng (20 phút)<br>&emsp;&emsp;– Ngữ pháp – Đọc hiểu (40 phút)<br>&emsp;&emsp;– Nghe hiểu (30 phút)<br>4. Người dùng nhấn vào một phần thi → vào giao diện làm bài:<br>&emsp;• Câu hỏi dạng trắc nghiệm<br>&emsp;• Thanh đếm ngược thời gian (ví dụ: 20:00 phút)<br>&emsp;• Có thể chuyển câu bằng mũi tên trái/phải<br>5. Khi làm xong (hoặc hết giờ) → hệ thống chấm điểm tự động<br>6. Hiển thị điểm số, số câu đúng, thời gian làm<br>7. Phần thi hoàn thành sẽ hiển thị **dấu tích ✅** trên danh sách đề |
    | **Điều kiện hiển thị** | Có dữ liệu đề tương ứng với cấp độ và năm hoặc mã đề |
    | **Kết quả hiển thị** | - Danh sách đề rõ ràng, phân loại theo nhóm<br>- Khi chọn đề hiển thị chi tiết đầy đủ (có hoặc không có đủ phần)<br>- Khi làm bài có đếm thời gian, chấm điểm, lưu kết quả<br>- Các đề đã làm hiển thị dấu ✅ |
    | **Trường hợp không có dữ liệu** | Hiển thị: “Không tìm thấy đề phù hợp với cấp độ hiện tại” |
    | **Ghi chú** | - Một số đề có thể chỉ có phần thi thử, không có kiến thức ôn<br>- Một số đề có thể thiếu phần nghe hiểu nếu không có file âm thanh |




### 3.22 Quản lý bảng chữ (Chỉ có ở cấp độ N5)
#### 3.22.1 Hiển thị bảng chữ Hiragana { #toc-3-22-1}

??? book "Hiển thị bảng chữ Hiragana"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị bảng chữ Hiragana |
    | **Phạm vi sử dụng** | Mục “Bảng chữ” trên màn hình chính |
    | **Mô tả** | Hiển thị toàn bộ bảng chữ Hiragana, bao gồm 3 phần: bảng chữ chính, bảng biến âm và bảng chữ kết hợp. Mỗi chữ cái được trình bày cùng phiên âm romaji. Các **nguyên âm** (a, i, u, e, o) hiển thị theo hàng ngang trên cùng, còn **phụ âm** (k, s, t, n, h...) nằm dọc bên trái. Những chữ **đã đánh dấu "Đã thuộc" sẽ được tô nền hồng** để theo dõi tiến độ ghi nhớ. |
    | **Giao diện liên quan** | - Màn hình “Hiragana”<br> - Tabs: **Cơ bản**, **Biến âm**, **Kết hợp**<br> - Nút “Luyện tập” (góc trên bên phải)<br> - Lưới chữ cái dạng bảng: cột dọc phụ âm, hàng ngang nguyên âm |
    | **Luồng thao tác chính** | 1. Người dùng mở ứng dụng → nhấn “Bảng chữ Hiragana”<br>2. Màn hình hiển thị 3 tab tương ứng:<br>&emsp;• **Cơ bản**: bảng 46 chữ chính (あ〜ん)<br>&emsp;• **Biến âm**: tenten (が, だ...) + maru (ぱ, ぴ...)<br>&emsp;• **Kết hợp**: các âm ghép (きゃ, しゅ, にょ...)<br>3. Trong mỗi tab, bảng được trình bày:<br>&emsp;• Cột trái: phụ âm (k, s, t, n, h, m, y, r, w)<br>&emsp;• Hàng ngang trên cùng: nguyên âm (a, i, u, e, o)<br>&emsp;• Ô giao giữa hàng và cột là chữ Hiragana kèm phiên âm romaji<br>4. Chữ đã đánh dấu "Đã thuộc" → tô nền hồng<br>5. Người dùng có thể nhấn vào từng chữ để xem chi tiết hoặc luyện tập |
    | **Điều kiện hiển thị** | Dữ liệu bảng chữ Hiragana được tải thành công |
    | **Kết quả hiển thị** | - Giao diện bảng chữ hiển thị đầy đủ, rõ ràng và phản hồi nhanh<br> - Nguyên âm / phụ âm sắp xếp đúng quy tắc phát âm tiếng Nhật<br> - Các chữ đã thuộc được hiển thị nổi bật bằng màu nền hồng<br> - Người dùng có thể nhấn vào ô chữ để học hoặc luyện tập trực tiếp |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có dữ liệu bảng chữ cho chế độ này” |

#### 3.22.2 Chức năng xem chi tiết chữ Hiragana {#toc-3-22-2}

??? book "Xem chi tiết chữ Hiragana (áp dụng cho Cơ bản, Biến âm, Kết hợp)"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Xem chi tiết một chữ Hiragana |
    | **Phạm vi sử dụng** | Màn hình Bảng chữ → nhấn vào 1 ô chữ bất kỳ (thuộc Cơ bản, Biến âm hoặc Kết hợp) |
    | **Mô tả** | Hiển thị chi tiết thông tin học tập cho từng chữ Hiragana, bao gồm: chữ viết, phát âm, mẹo ghi nhớ, chữ dễ nhầm và từ vựng ứng dụng. Cho phép người dùng lưu chữ vào Thư viện cá nhân và đánh dấu là "Đã thuộc". |
    | **Giao diện liên quan** | - Màn hình chi tiết chữ Hiragana<br>- Có nút quay lại, biểu tượng ⭐ và 💡 ở góc phải trên |
    | **Luồng thao tác chính** | <br>1. Người dùng truy cập Bảng chữ Hiragana<br>2. Nhấn vào 1 ô chữ bất kỳ → chuyển sang màn hình chi tiết<br>3. Màn hình hiển thị nội dung sau:<br>&emsp;• **Chữ Hiragana lớn** + **romaji** + nút **nghe phát âm**<br>&emsp;• **Mẹo nhớ**: hình minh họa và ví dụ gợi nhớ<br>&emsp;• **Dễ nhầm**: các chữ thường bị nhầm với chữ hiện tại<br>&emsp;• **Từ vựng**: danh sách từ có chứa chữ này, gồm hiragana, nghĩa tiếng Việt, nút nghe<br>4. Người dùng có thể:<br>&emsp;• Nhấn biểu tượng ⭐ → **lưu chữ vào Thư viện học tập cá nhân**<br>&emsp;• Nhấn biểu tượng 💡 → **đánh dấu "Đã thuộc"**, dùng để tô hồng ở bảng chữ<br>&emsp;• Dùng mũi tên trái/phải để xem chữ trước/sau |
    | **Điều kiện hiển thị** | Có dữ liệu chi tiết của chữ đã chọn (được load hoặc cache nội bộ) |
    | **Kết quả hiển thị** | - Thông tin đầy đủ, trực quan, dễ nhớ<br> - Chữ sau khi đánh dấu "Đã thuộc" → hiển thị nền hồng trong bảng chữ<br> - Chữ sau khi lưu vào Thư viện → hiển thị trong mục Thư viện học tập (tab Bảng chữ) |
    | **Trường hợp không có dữ liệu** | Hiển thị: “Hiện chưa có dữ liệu chi tiết cho chữ này. Vui lòng thử lại sau.” |


#### 3.22.3 Chức năng thêm nhiều chữ cái vào Thư viện học tập {#toc-3-22-3}

??? book "Thêm nhiều chữ cái vào Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Thêm nhiều chữ cái vào Thư viện học tập |
    | **Phạm vi sử dụng** | Biểu tượng ⭐➕ (nằm ở góc phải màn hình Bảng chữ Hiragana) |
    | **Mô tả** | Khi người dùng nhấn vào biểu tượng “⭐➕”, một popup hiển thị cho phép chọn nhanh nhiều chữ cái để thêm vào Thư viện. Chữ đã có trong Thư viện được tô **hồng đậm**. Chữ đang được chọn thêm mới sẽ được **highlight viền trắng**. |
    | **Giao diện liên quan** | - Biểu tượng ⭐➕ ở màn hình “Hiragana”<br>- Popup “Cập nhật danh sách yêu thích”<br>- 2 dropdown lọc theo **Loại bảng chữ** và **Phạm vi hàng/cột**<br>- Checkbox “Chọn tất cả”<br>- Lưới các chữ cái (dạng ô vuông) |
    | **Luồng thao tác chính** | 1. Từ màn hình chính, người dùng nhấn vào “Bảng chữ”<br>2. Hiển thị bảng Hiragana với tab mặc định là “Cơ bản” (gồm các chữ cái thuộc hàng -, k, s, t, n, h, m, y, r, w và các cột a, i, u, e, o)<br>3. Nhấn vào biểu tượng ⭐➕ ở góc trên bên phải màn hình<br>4. Hiện popup “Cập nhật danh sách yêu thích” gồm 2 bộ lọc: Loại bảng chữ (Bảng chữ chính, Tenten, Maru, Ảo âm) và Phạm vi (Hàng -, k, s, t, n, h, m, y, r, w, z, p hoặc Cột a, i, u, e, o)<br>5. Người dùng chọn một loại bảng và hàng/cột để lọc hiển thị chữ cái tương ứng<br>6. Các chữ cái hiển thị có 3 trạng thái: (i) Đã có trong Thư viện – nền hồng đậm, người dùng vẫn có thể nhấn để **bỏ chọn** (khi nhấn “Đồng ý” sẽ bị **xóa khỏi Thư viện**); (ii) Chữ đang được thêm mới – viền trắng nền hồng nhạt; (iii) Chữ chưa chọn – nền trắng<br>7. Có thể chọn thủ công từng chữ hoặc chọn nhanh toàn bộ bằng checkbox “Chọn tất cả”<br>8. Nhấn nút “Đồng ý” để cập nhật: thêm chữ mới và gỡ các chữ đã bỏ chọn khỏi Thư viện<br>9. Popup đóng lại, quay về bảng chữ, các ô chữ được thêm sẽ hiển thị nền hồng đậm, còn các chữ bị gỡ sẽ trở lại nền trắng. |
    | **Kết quả hiển thị** | - Các chữ được chọn sẽ được thêm mới vào Thư viện học tập<br>- Khi quay lại bảng chữ, những chữ này sẽ được **tô hồng**<br>- Popup đóng lại, người dùng nhận phản hồi thành công |
    | **Trường hợp không có dữ liệu** | - Nếu không có chữ nào hiển thị: “Không tìm thấy chữ phù hợp với bộ lọc hiện tại.”<br>- Nếu không chọn chữ nào mà vẫn nhấn “Đồng ý”: không lưu, popup giữ nguyên |


#### 3.22.4 Chức năng Luyện tập chế độ duyệt bài {#toc-3-22-4}

??? book "Luyện tập – Duyệt bài"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Duyệt bài |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Hiragana |
    | **Mô tả** | Người dùng chọn chế độ "Duyệt bài" để lần lượt xem từng chữ cái Hiragana theo dạng flashcard. Với mỗi thẻ, người dùng xác nhận “Đã nhớ” hoặc bỏ qua. Chữ đã nhớ sẽ được đánh dấu nền hồng trên bảng chữ và có trạng thái đã thuộc khi quay lại popup. |
    | **Giao diện liên quan** | - Màn hình Bảng chữ Hiragana<br>- Popup “Luyện tập”<br>- Giao diện flashcard chế độ Duyệt bài<br>- Màn hình thống kê sau duyệt |
    | **Luồng thao tác chính** | 1. Từ **màn hình chính**, chọn tab **Bảng chữ Hiragana**<br>2. Người dùng có thể:<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nhấn nút **“Luyện tập”** ở góc trên<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nhấn vào tiêu đề **Bảng chữ chính / Tenten / Maru / Ảo âm**<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nhấn vào **hàng** (ví dụ: `k`, `s`, `t`...) hoặc **cột** (ví dụ: `a`, `i`, `u`...)<br>3. Popup “Luyện tập” hiển thị tương ứng với bảng chữ, hàng/cột đã chọn<br>4. Chọn chế độ **Duyệt bài**<br>5. Giao diện flashcard hiển thị lần lượt từng chữ:<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nút **“Đã nhớ”** → đánh dấu là đã thuộc<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nút **“Quay lại”** (từ flashcard thứ 2 trở đi) để xem lại thẻ trước đó<br>6. Khi duyệt xong toàn bộ chữ:<br>&nbsp;&nbsp;&nbsp;&nbsp;→ Màn hình **thống kê kết quả** hiển thị:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Số chữ **đã nhớ** (nền xanh, đậm)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Số chữ **cần học lại** (nền đỏ, đậm)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Nút **“Duyệt lại”** để luyện lại toàn bộ phần nội dung vừa học |
    | **Điều kiện hiển thị** | Có dữ liệu chữ cái thuộc bảng chữ và hàng/cột đã chọn |
    | **Kết quả hiển thị** | - Flashcard hiển thị các chữ lần lượt<br>- Trạng thái “đã nhớ” được lưu và đồng bộ trên bảng chữ<br>- Giao diện thống kê kết quả hiện ra sau khi duyệt xong |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không tìm thấy chữ phù hợp để luyện tập” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Hàng: `-`, `k`, `s`, `t`, `n`, `h`, `m`, `y`, `r`, `w`...<br>Cột: `a`, `i`, `u`, `e`, `o` |


#### 3.22.5 Chức năng Luyện tập – Chế độ Học {#toc-3-22-5}

??? book "Luyện tập – Chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Chế độ Học |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Hiragana: nhấn nút “Luyện tập” hoặc nhấn vào tên bảng chữ, hàng, cột |
    | **Mô tả** | Chế độ Học cho phép người dùng học chữ Hiragana thông qua các card nội dung và flashcard, xen kẽ với các chặn kiểm tra tiến độ. Mỗi chữ có thể được đánh dấu đã nhớ hoặc thêm vào thư viện. Sau khi hoàn thành, người học sẽ nhận được thống kê và thông báo chúc mừng. |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình card học<br>- Flashcard có 2 mặt (trước/sau)<br>- Bài kiểm tra giữa chừng (câu hỏi)<br>- Thống kê kết quả<br>- Popup hoàn thành luyện tập |
    | **Luồng thao tác chính** | 1. Từ màn hình chính → vào Bảng chữ Hiragana<br>2. Nhấn nút “Luyện tập” hoặc nhấn vào bảng chữ / hàng / cột<br>3. Popup “Luyện tập” hiển thị<br>4. Người dùng chọn chế độ “Học”<br>5. Hệ thống hiển thị lần lượt các nội dung học:<br>&nbsp;&nbsp;&nbsp;&nbsp;– Với card chữ: hiện chữ + phiên âm + nghĩa, nhấn **“Hoàn thành”** → sang nội dung kế tiếp<br>&nbsp;&nbsp;&nbsp;&nbsp;– Với flashcard:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Mặt trước: hiện chữ + nút **🌟** (Thêm vào Thư viện), **💡** (Đánh dấu đã thuộc)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Nhấn “Tiếp theo” → lật sang mặt sau<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Nhấn “Hoàn thành” → sang nội dung kế tiếp<br>6. Sau một số lượng nội dung, hiển thị **bài kiểm tra chặn tiến độ** gồm các dạng:<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nối chữ (drag and drop)<br>&nbsp;&nbsp;&nbsp;&nbsp;– Vẽ chữ<br>&nbsp;&nbsp;&nbsp;&nbsp;– Chọn đáp án đúng<br>&nbsp;&nbsp;&nbsp;&nbsp;– Phát âm đúng từ<br>&nbsp;&nbsp;&nbsp;&nbsp;• Câu đúng → hiện “Hoàn thành”<br>&nbsp;&nbsp;&nbsp;&nbsp;• Câu sai → hiện “Không hoàn thành”<br>7. Sau khi hoàn tất tất cả nội dung học → hiển thị:<br>&nbsp;&nbsp;&nbsp;&nbsp; - Popup “Chúc mừng bạn đã hoàn thành luyện tập” + nút “Quay lại” và nút “Học” |
    | **Điều kiện hiển thị** | Có dữ liệu bảng chữ phù hợp với lựa chọn (bảng chữ chính, tenten, maru, ảo âm, hàng/cột) |
    | **Kết quả hiển thị** | - Giao diện học từng nội dung 1 cách tuần tự<br>- Các chữ được đánh dấu **“đã nhớ”** sẽ chuyển nền **hồng** tại bảng chữ<br>- Các chữ được thêm vào Thư viện bằng nút **🌟**<br>- Hiển thị popup hoàn thành cuối buổi học |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo “Không tìm thấy chữ phù hợp để luyện tập” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Có thể lọc và học theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`,...) tùy vào lựa chọn trước đó |


#### 3.22.6 Chức năng Luyện tập – Chế độ Xem Chi tiết {#toc-3-22-6}

??? book "Luyện tập – Chế độ Xem Chi tiết"

    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Chế độ Xem Chi tiết |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Hiragana: nhấn nút “Luyện tập” hoặc nhấn vào từng bảng/hàng/cột để chọn chế độ "Chi tiết" |
    | **Mô tả** | Cho phép người dùng xem chi tiết từng chữ Hiragana: hình chữ, cách đọc, phát âm, mẹo nhớ, chữ dễ nhầm, từ vựng minh họa. Có thể thao tác thêm vào thư viện (⭐) hoặc đánh dấu đã thuộc (💡) cho từng chữ |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình chi tiết chữ Hiragana |
    | **Luồng thao tác chính** | 1. Từ màn hình chính ➝ vào Bảng chữ Hiragana<br>2. Nhấn nút “Luyện tập” hoặc chọn trực tiếp bảng/chữ hàng/cột<br>3. Popup xuất hiện ➝ chọn chế độ **Chi tiết** ➝ chọn bảng chữ (Bảng chữ chính, Tenten, Maru, Ảo âm) và lọc theo hàng/cột nếu muốn<br>4. Màn hình chi tiết chữ xuất hiện với nội dung từng chữ và các thao tác kèm theo |
    | **Điều kiện hiển thị** | Có dữ liệu bảng chữ phù hợp với lựa chọn |
    | **Kết quả hiển thị** | Giao diện chi tiết chữ gồm:<br>• Chữ + romaji + nút phát âm<br>• Mẹo nhớ: hình minh họa và ghi chú<br>• Dễ nhầm: liệt kê các chữ dễ nhầm lẫn<br>• Từ vựng: các từ chứa chữ đang xem<br>• ⭐: Thêm vào thư viện<br>• 💡: Đánh dấu đã thuộc |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo “Không tìm thấy chữ phù hợp để luyện tập” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Có thể lọc theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`,...) |


#### 3.22.7 Chức năng Luyện tập – Chế độ Luyện viết {#toc-3-22-7}

??? book "Luyện tập – Chế độ Luyện viết"

    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng**  | Luyện tập – Chế độ Luyện viết |
    | **Phạm vi sử dụng**| Popup "Luyện tập" tại màn hình Bảng chữ Hiragana: nhấn nút “Luyện tập” hoặc nhấn vào Bảng chữ, Hàng, Cột → chọn mục “Luyện viết”. |
    | **Mô tả** | Cho phép người dùng luyện cách viết từng chữ Hiragana bằng tay theo đúng thứ tự nét, kèm hướng dẫn viết, phát âm và điều hướng giữa các chữ trong danh sách luyện. |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình luyện viết tay chữ Hiragana với:<br>• Nét viết mẫu động (animation)<br>• Số thứ tự nét<br>• Khung viết tay<br>• Nút “Hoàn tác nét viết”<br>• Nút “Xóa”<br>• Nút “Ẩn/Hiện hướng dẫn viết”<br>• Nút **🔊 Phát âm chữ**<br>• Nút điều hướng ← → để chuyển sang chữ khác |
    | **Luồng thao tác chính** | 1. Từ màn hình chính → vào Bảng chữ Hiragana<br>2. Nhấn nút “Luyện tập” hoặc nhấn vào bảng/chữ/hàng/cột → hiện popup luyện tập<br>3. Chọn chế độ **Luyện viết**<br>4. Giao diện luyện chữ hiển thị từng chữ theo danh sách đã chọn<br>5. Người dùng có thể:<br>&emsp;- Xem nét viết động kèm số thứ tự<br>&emsp;- Viết tay theo khung<br>&emsp;- Nhấn 🔊 để phát âm chữ hiện tại<br>&emsp;- Nhấn **Hoàn tác** để quay lại từng nét<br>&emsp;- Nhấn **Xóa** để viết lại<br>&emsp;- Nhấn **Ẩn/Hiện hướng dẫn** để bật/tắt nét mẫu<br>&emsp;- Dùng **← / →** để chuyển sang chữ khác hoặc quay lại chữ trước |
    | **Điều kiện hiển thị** | Có dữ liệu chữ viết phù hợp với lựa chọn bảng/hàng/cột |
    | **Kết quả hiển thị** | - Người học luyện viết từng chữ đúng thứ tự nét<br>- Có thể nghe phát âm và tự đánh giá<br>- Giao diện phản hồi tốt với thao tác viết và chuyển trang |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không tìm thấy chữ phù hợp để luyện viết” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Có thể luyện theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`, `e`, `o`) |


#### 3.22.8 Chức năng Luyện tập – Chế độ Flashcard {#toc-3-22-8}

??? book "Luyện tập – Chế độ Flashcard"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Chế độ Flashcard |
    | **Phạm vi sử dụng** | Popup “Luyện tập” tại màn hình Bảng chữ Hiragana: nhấn nút “Luyện tập” hoặc chọn trực tiếp bảng chữ, cột, hàng |
    | **Mô tả** | Chế độ Flashcard cho phép người học ôn tập bảng chữ Hiragana thông qua các thẻ 2 mặt, có thể đánh dấu “Đã thuộc” hoặc thêm vào thư viện để học tiếp. Có 3 loại flashcard: <br>- Loại 1: Hiển thị hướng viết chữ<br>- Loại 2: Hiển thị chữ + phiên âm + âm thanh + câu gợi nhớ<br>- Loại 3: Hình minh họa + nét viết + câu gợi nhớ |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình flashcard<br>- Popup tùy chỉnh (hiện tất cả, xáo trộn, tự chạy, chọn loại flashcard)<br>- Popup hoàn thành khi đánh dấu hết các thẻ đã thuộc |
    | **Luồng thao tác chính** | 1. Từ màn hình chính → vào Bảng chữ Hiragana<br>2. Nhấn nút “Luyện tập” hoặc chọn bảng chữ/cột/hàng<br>3. Chọn chế độ “Flashcard”<br>4. Giao diện hiển thị thẻ flashcard (1 trong 3 loại)<br>5. Người dùng có thể:<br> • Lật mặt sau flashcard<br> • Đánh dấu thuộc (biểu tượng bóng đèn)<br> • Thêm vào thư viện (biểu tượng ngôi sao)<br> • Chuyển thẻ bằng nút trái/phải<br>6. Khi tất cả thẻ được đánh dấu là đã thuộc → hiện popup “Chúc mừng” |
    | **Điều kiện hiển thị** | Có dữ liệu bảng chữ phù hợp với lựa chọn (bảng chữ chính, tenten, maru, ảo âm...) |
    | **Kết quả hiển thị** | - Giao diện flashcard với nội dung tương ứng<br>- Biểu tượng trạng thái: đã thuộc / thêm thư viện<br>- Điều hướng giữa các thẻ<br>- Tùy chọn điều chỉnh cách học |
    | **Tùy chỉnh flashcard** | - **Hiện tất cả**: Hiển thị cả thẻ đã thuộc và chưa thuộc<br>- **Xáo trộn**: Đảo thứ tự flashcard<br>- **Tự chạy**: Tự động chuyển flashcard theo tốc độ (Chậm – Tiêu chuẩn – Nhanh)<br>⮕ Lưu ý: Tự chạy chỉ tự lướt, không tự lật thẻ<br>- **Chọn loại flashcard**: Chuyển giữa loại 1, 2, 3 |
    | **Kết thúc luyện tập** | - Khi người dùng đã đánh dấu tất cả flashcard là “đã thuộc” (nếu không bật “Hiện tất cả”) → hiện popup “Chúc mừng – Bạn đã nhớ hết phần Flashcard rồi !!!” kèm nút “Học lại” |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo “Không tìm thấy chữ phù hợp để luyện tập” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Có thể lọc và học theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`, `e`, `o`) |


#### 3.22.9 Chức năng Luyện tập – Chế độ Trắc nghiệm {#toc-3-22-9}

??? book "Luyện tập – Chế độ Trắc nghiệm"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Chế độ Trắc nghiệm |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Hiragana: nhấn nút “Luyện tập” hoặc chọn trực tiếp từng bảng, cột hoặc hàng, sau đó chọn “Trắc nghiệm” |
    | **Mô tả** | Chế độ Trắc nghiệm cho phép người dùng kiểm tra khả năng ghi nhớ chữ Hiragana thông qua các câu hỏi dạng chọn đáp án đúng. Mỗi câu có 1 câu hỏi và 4 phương án. Có phát âm chữ để nghe trước khi chọn. |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình bài kiểm tra trắc nghiệm với thanh tiến độ, câu hỏi, lựa chọn đáp án và biểu tượng loa |
    | **Luồng thao tác chính** | 1. Từ màn hình chính → vào Bảng chữ Hiragana<br>2. Nhấn nút “Luyện tập” hoặc chọn trực tiếp bảng/cột/hàng<br>3. Chọn chế độ “Trắc nghiệm”<br>4. Hệ thống hiển thị từng câu hỏi: có thể là **âm thanh phát âm chữ** hoặc **ký tự**<br>5. Người dùng chọn 1 trong 4 đáp án<br>6. Hiển thị phản hồi đúng/sai: màu xanh lá (đúng), đỏ (sai)<br>7. Tự động chuyển sang câu tiếp theo<br>8. Sau khi làm xong, hiển thị kết quả tổng hợp phần trăm và thống kê đúng/sai từng chữ |
    | **Điều kiện hiển thị** | Có dữ liệu bảng chữ phù hợp với lựa chọn (Bảng chữ Chính, Tenten, Maru, Kết hợp) |
    | **Kết quả hiển thị** | - Câu hỏi + 4 lựa chọn<br>- Biểu tượng phát âm trung tâm để phát lại câu hỏi (không bị tắt khi tắt âm)<br>- Màu sắc phản hồi sau chọn: đỏ (sai), xanh lá (đúng)<br>- **Thanh tiến độ**:<br>&nbsp;&nbsp;&nbsp;&nbsp;+ Màu xanh: số câu đã làm hoặc đang làm<br>&nbsp;&nbsp;&nbsp;&nbsp;+ Màu đỏ: số câu làm đúng<br>- Màn hình kết quả cuối: phần trăm đúng, danh sách chữ, nút “Làm lại” |
    | **Âm thanh** | - Có 2 loại âm thanh:<br>&nbsp;&nbsp;&nbsp;&nbsp;+ Âm thanh câu hỏi (phát âm chữ): luôn phát được, không bị tắt<br>&nbsp;&nbsp;&nbsp;&nbsp;+ Âm thanh hiệu ứng chọn đáp án: có thể tắt bằng cách nhấn biểu tượng **loa** ở góc phải trên màn hình |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo “Không có dữ liệu để kiểm tra” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ Chính, Tenten, Maru, Kết hợp |
    | **Phân loại theo hàng/cột** | Có thể lọc và luyện tập theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`,...) |


#### 3.22.10 Chức năng Luyện tập – chế độ Thử thách 1 {#toc-3-22-10}

??? book "Luyện tập – chế độ Thử thách 1"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – chế độ Thử thách 1 |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Hiragana |
    | **Mô tả** | Chế độ Thử thách 1 kiểm tra khả năng nhận diện nhanh Hiragana bằng cách hiển thị **romaji (phiên âm)**, yêu cầu người dùng chọn đúng **chữ Hiragana tương ứng**. Có giới hạn **thời gian cho từng câu** (thể hiện bằng thanh tiến độ) và **tối đa 3 lần sai toàn bài** (bao gồm cả chọn sai và hết giờ). |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình thử thách: romaji + lưới đáp án<br>- Thanh tiến độ thời gian (mỗi câu)<br>- Trái tim hiển thị số lần sai còn lại<br>- Popup “Thành công” hoặc “Thua”<br>- Thông báo phản hồi đúng/sai/hết giờ |
    | **Luồng thao tác chính** |<br>1. Người dùng vào **Bảng chữ Hiragana**<br>2. Nhấn **Luyện tập** → chọn chế độ **Thử thách 1**<br>3. Bài gồm 16 câu hỏi:<br>&emsp;• Hiển thị 1 romaji (VD: `sa`, `ryu`)<br>&emsp;• 16 đáp án là chữ Hiragana<br>&emsp;• Thanh thời gian + trái tim<br>4. Người dùng chọn đáp án hoặc hết giờ:<br>&emsp;• ✅ Đúng:<br>&emsp;&emsp;– Tô xanh lá đáp án đúng<br>&emsp;&emsp;– Hiện thông báo “Làm tốt lắm, tiếp tục nào”<br>&emsp;&emsp;– Cập nhật vào **đã thuộc**, tô **hồng** trong bảng<br>&emsp;&emsp;– Tăng % tiến độ<br>&emsp;&emsp;– Tự chuyển câu tiếp theo<br>&emsp;• ❌ Sai:<br>&emsp;&emsp;– Tô đỏ chữ sai, xanh lá chữ đúng<br>&emsp;&emsp;– Hiện thông báo “Sai rồi bạn ơi, ‘xx’ mới đúng”<br>&emsp;&emsp;– Mất 1 tim<br>&emsp;• ⏰ Hết giờ:<br>&emsp;&emsp;– Tô xanh chữ đúng<br>&emsp;&emsp;– Hiện thông báo “Hết giờ cho câu này”<br>&emsp;&emsp;– Mất 1 tim<br>5. Sai đủ **3 lần** → popup “Thua”<br>6. Hoàn thành đúng → popup “Thành công” |
    | **Chi tiết hiển thị** | - Câu hỏi: romaji lớn, màu đậm<br>- 16 ô đáp án chữ Hiragana<br>- Thanh thời gian: 5–7s / câu<br>- Mỗi sai/hết giờ mất 1 tim (tối đa 3)<br>- Thông báo:<br>&emsp;• ✅ “Làm tốt lắm, tiếp tục nào”<br>&emsp;• ❌ “Sai rồi bạn ơi, ‘さ’ mới đúng”<br>&emsp;• ⏰ “Hết giờ cho câu này”<br>- Popup kết quả:<br>&emsp;• 🎉 “Thành công rồi!”<br>&emsp;• 😢 “Hãy luyện tập thật tốt nhé!” |
    | **Kết quả hiển thị** | - Cập nhật từ đã thuộc (tô hồng trong bảng)<br>- Cập nhật % hoàn thành bảng chữ<br>- Hiện popup kết quả<br>- Cho làm lại |
    | **Điều kiện hiển thị** | Có đủ số lượng chữ trong bảng hiện tại để tạo thử thách |
    | **Trường hợp không có dữ liệu** | “Không đủ dữ liệu để bắt đầu thử thách. Vui lòng chọn nhiều chữ hơn nhé.” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ Chính, Biến âm, Kết hợp |


#### 3.22.11 Chức năng Luyện tập – chế độ Thử thách 2 {#toc-3-22-11}

??? book "Luyện tập – chế độ Thử thách 2"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – chế độ Thử thách 2 |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Hiragana |
    | **Mô tả** | Chế độ Thử thách 2 kiểm tra khả năng đọc Hiragana bằng cách hiển thị **chữ Hiragana**, yêu cầu người dùng chọn đúng **romaji tương ứng**. Luật chơi, giao diện, thời gian, tim và chấm điểm hoàn toàn giống Thử thách 1, chỉ khác chiều câu hỏi – đáp án. |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình thử thách: chữ Hiragana + lưới đáp án romaji<br>- Thanh tiến độ thời gian (mỗi câu)<br>- Trái tim hiển thị số lần sai còn lại<br>- Popup “Thành công” hoặc “Thua”<br>- Thông báo phản hồi đúng/sai/hết giờ |
    | **Luồng thao tác chính** |<br>1. Người dùng vào **Bảng chữ Hiragana**<br>2. Nhấn **Luyện tập** → chọn chế độ **Thử thách 2**<br>3. Bài gồm 16 câu hỏi:<br>&emsp;• Hiển thị 1 chữ Hiragana (VD: `き`, `ちゅ`)<br>&emsp;• 16 đáp án là romaji<br>&emsp;• Thanh thời gian + trái tim<br>4. Người dùng chọn hoặc hết giờ:<br>&emsp;• ✅ Đúng → tô xanh, thông báo, cập nhật từ đã thuộc, tăng %<br>&emsp;• ❌ Sai → tô đỏ/sai, hiện đúng, trừ tim<br>&emsp;• ⏰ Hết giờ → hiện đúng, trừ tim<br>5. Sai đủ 3 lần → popup “Thua”<br>6. Làm đúng hết → popup “Thành công” |
    | **Chi tiết hiển thị** | - Câu hỏi: chữ Hiragana to, màu đậm<br>- 16 ô đáp án romaji<br>- Thanh thời gian: 5–7s / câu<br>- Mỗi sai/hết giờ mất 1 tim<br>- Thông báo:<br>&emsp;• ✅ “Làm tốt lắm, tiếp tục nào”<br>&emsp;• ❌ “Sai rồi bạn ơi, ‘ki’ mới đúng”<br>&emsp;• ⏰ “Hết giờ cho câu này”<br>- Popup kết quả:<br>&emsp;• 🎉 “Thành công rồi!”<br>&emsp;• 😢 “Hãy luyện tập thật tốt nhé!” |
    | **Kết quả hiển thị** | - Từ đúng → vào danh sách đã thuộc (tô hồng)<br>- Tăng % bảng chữ<br>- Hiện popup kết quả<br>- Có thể làm lại |
    | **Điều kiện hiển thị** | Có đủ số lượng chữ để tạo thử thách |
    | **Trường hợp không có dữ liệu** | “Không đủ dữ liệu để bắt đầu thử thách. Vui lòng chọn nhiều chữ hơn nhé.” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ Chính, Biến âm, Kết hợp |



#### 3.22.12 Hiển thị bảng chữ Katakana { #toc-3-22-12}

??? book "Hiển thị bảng chữ Katakana"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Hiển thị bảng chữ Katakana |
    | **Phạm vi sử dụng** | Mục “Bảng chữ” trên màn hình chính |
    | **Mô tả** | Hiển thị toàn bộ bảng chữ Katakana, bao gồm 3 phần: bảng chữ chính, bảng biến âm và bảng chữ kết hợp. Mỗi chữ cái được trình bày cùng phiên âm romaji. Các **nguyên âm** (a, i, u, e, o) hiển thị theo hàng ngang trên cùng, còn **phụ âm** (k, s, t, n, h...) nằm dọc bên trái. Những chữ **đã đánh dấu "Đã thuộc" sẽ được tô nền hồng** để theo dõi tiến độ ghi nhớ. |
    | **Giao diện liên quan** | - Màn hình “Katakana”<br> - Tabs: **Cơ bản**, **Biến âm**, **Kết hợp**<br> - Nút “Luyện tập” (góc trên bên phải)<br> - Lưới chữ cái dạng bảng: cột dọc phụ âm, hàng ngang nguyên âm |
    | **Luồng thao tác chính** | 1. Người dùng mở ứng dụng → nhấn “Bảng chữ Katakana”<br>2. Màn hình hiển thị 3 tab tương ứng:<br>&emsp;• **Cơ bản**: bảng 46 chữ chính (あ〜ん)<br>&emsp;• **Biến âm**: tenten (が, だ...) + maru (ぱ, ぴ...)<br>&emsp;• **Kết hợp**: các âm ghép (きゃ, しゅ, にょ...)<br>3. Trong mỗi tab, bảng được trình bày:<br>&emsp;• Cột trái: phụ âm (k, s, t, n, h, m, y, r, w)<br>&emsp;• Hàng ngang trên cùng: nguyên âm (a, i, u, e, o)<br>&emsp;• Ô giao giữa hàng và cột là chữ Katakana kèm phiên âm romaji<br>4. Chữ đã đánh dấu "Đã thuộc" → tô nền hồng<br>5. Người dùng có thể nhấn vào từng chữ để xem chi tiết hoặc luyện tập |
    | **Điều kiện hiển thị** | Dữ liệu bảng chữ Katakana được tải thành công |
    | **Kết quả hiển thị** | - Giao diện bảng chữ hiển thị đầy đủ, rõ ràng và phản hồi nhanh<br> - Nguyên âm / phụ âm sắp xếp đúng quy tắc phát âm tiếng Nhật<br> - Các chữ đã thuộc được hiển thị nổi bật bằng màu nền hồng<br> - Người dùng có thể nhấn vào ô chữ để học hoặc luyện tập trực tiếp |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không có dữ liệu bảng chữ cho chế độ này” |

#### 3.22.13 Chức năng xem chi tiết chữ Katakana {#toc-3-22-13}

??? book "Xem chi tiết chữ Katakana (áp dụng cho Cơ bản, Biến âm, Kết hợp)"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Xem chi tiết một chữ Katakana |
    | **Phạm vi sử dụng** | Màn hình Bảng chữ → nhấn vào 1 ô chữ bất kỳ (thuộc Cơ bản, Biến âm hoặc Kết hợp) |
    | **Mô tả** | Hiển thị chi tiết thông tin học tập cho từng chữ Katakana, bao gồm: chữ viết, phát âm, mẹo ghi nhớ, chữ dễ nhầm và từ vựng ứng dụng. Cho phép người dùng lưu chữ vào Thư viện cá nhân và đánh dấu là "Đã thuộc". |
    | **Giao diện liên quan** | - Màn hình chi tiết chữ Katakana<br>- Có nút quay lại, biểu tượng ⭐ và 💡 ở góc phải trên |
    | **Luồng thao tác chính** | <br>1. Người dùng truy cập Bảng chữ Katakana<br>2. Nhấn vào 1 ô chữ bất kỳ → chuyển sang màn hình chi tiết<br>3. Màn hình hiển thị nội dung sau:<br>&emsp;• **Chữ Katakana lớn** + **romaji** + nút **nghe phát âm**<br>&emsp;• **Mẹo nhớ**: hình minh họa và ví dụ gợi nhớ<br>&emsp;• **Dễ nhầm**: các chữ thường bị nhầm với chữ hiện tại<br>&emsp;• **Từ vựng**: danh sách từ có chứa chữ này, gồm Katakana, nghĩa tiếng Việt, nút nghe<br>4. Người dùng có thể:<br>&emsp;• Nhấn biểu tượng ⭐ → **lưu chữ vào Thư viện học tập cá nhân**<br>&emsp;• Nhấn biểu tượng 💡 → **đánh dấu "Đã thuộc"**, dùng để tô hồng ở bảng chữ<br>&emsp;• Dùng mũi tên trái/phải để xem chữ trước/sau |
    | **Điều kiện hiển thị** | Có dữ liệu chi tiết của chữ đã chọn (được load hoặc cache nội bộ) |
    | **Kết quả hiển thị** | - Thông tin đầy đủ, trực quan, dễ nhớ<br> - Chữ sau khi đánh dấu "Đã thuộc" → hiển thị nền hồng trong bảng chữ<br> - Chữ sau khi lưu vào Thư viện → hiển thị trong mục Thư viện học tập (tab Bảng chữ) |
    | **Trường hợp không có dữ liệu** | Hiển thị: “Hiện chưa có dữ liệu chi tiết cho chữ này. Vui lòng thử lại sau.” |


#### 3.22.14 Chức năng thêm nhiều chữ cái vào Thư viện học tập {#toc-3-22-14}

??? book "Thêm nhiều chữ cái vào Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Thêm nhiều chữ cái vào Thư viện học tập |
    | **Phạm vi sử dụng** | Biểu tượng ⭐➕ (nằm ở góc phải màn hình Bảng chữ Katakana) |
    | **Mô tả** | Khi người dùng nhấn vào biểu tượng “⭐➕”, một popup hiển thị cho phép chọn nhanh nhiều chữ cái để thêm vào Thư viện. Chữ đã có trong Thư viện được tô **hồng đậm**. Chữ đang được chọn thêm mới sẽ được **highlight viền trắng**. |
    | **Giao diện liên quan** | - Biểu tượng ⭐➕ ở màn hình “Katakana”<br>- Popup “Cập nhật danh sách yêu thích”<br>- 2 dropdown lọc theo **Loại bảng chữ** và **Phạm vi hàng/cột**<br>- Checkbox “Chọn tất cả”<br>- Lưới các chữ cái (dạng ô vuông) |
    | **Luồng thao tác chính** | 1. Từ màn hình chính, người dùng nhấn vào “Bảng chữ”<br>2. Hiển thị bảng Katakana với tab mặc định là “Cơ bản” (gồm các chữ cái thuộc hàng -, k, s, t, n, h, m, y, r, w và các cột a, i, u, e, o)<br>3. Nhấn vào biểu tượng ⭐➕ ở góc trên bên phải màn hình<br>4. Hiện popup “Cập nhật danh sách yêu thích” gồm 2 bộ lọc: Loại bảng chữ (Bảng chữ chính, Tenten, Maru, Ảo âm) và Phạm vi (Hàng -, k, s, t, n, h, m, y, r, w, z, p hoặc Cột a, i, u, e, o)<br>5. Người dùng chọn một loại bảng và hàng/cột để lọc hiển thị chữ cái tương ứng<br>6. Các chữ cái hiển thị có 3 trạng thái: (i) Đã có trong Thư viện – nền hồng đậm, người dùng vẫn có thể nhấn để **bỏ chọn** (khi nhấn “Đồng ý” sẽ bị **xóa khỏi Thư viện**); (ii) Chữ đang được thêm mới – viền trắng nền hồng nhạt; (iii) Chữ chưa chọn – nền trắng<br>7. Có thể chọn thủ công từng chữ hoặc chọn nhanh toàn bộ bằng checkbox “Chọn tất cả”<br>8. Nhấn nút “Đồng ý” để cập nhật: thêm chữ mới và gỡ các chữ đã bỏ chọn khỏi Thư viện<br>9. Popup đóng lại, quay về bảng chữ, các ô chữ được thêm sẽ hiển thị nền hồng đậm, còn các chữ bị gỡ sẽ trở lại nền trắng. |
    | **Kết quả hiển thị** | - Các chữ được chọn sẽ được thêm mới vào Thư viện học tập<br>- Khi quay lại bảng chữ, những chữ này sẽ được **tô hồng**<br>- Popup đóng lại, người dùng nhận phản hồi thành công |
    | **Trường hợp không có dữ liệu** | - Nếu không có chữ nào hiển thị: “Không tìm thấy chữ phù hợp với bộ lọc hiện tại.”<br>- Nếu không chọn chữ nào mà vẫn nhấn “Đồng ý”: không lưu, popup giữ nguyên |


#### 3.22.15 Chức năng Luyện tập chế độ duyệt bài {#toc-3-22-15}

??? book "Luyện tập – Duyệt bài"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Duyệt bài |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Katakana |
    | **Mô tả** | Người dùng chọn chế độ "Duyệt bài" để lần lượt xem từng chữ cái Katakana theo dạng flashcard. Với mỗi thẻ, người dùng xác nhận “Đã nhớ” hoặc bỏ qua. Chữ đã nhớ sẽ được đánh dấu nền hồng trên bảng chữ và có trạng thái đã thuộc khi quay lại popup. |
    | **Giao diện liên quan** | - Màn hình Bảng chữ Katakana<br>- Popup “Luyện tập”<br>- Giao diện flashcard chế độ Duyệt bài<br>- Màn hình thống kê sau duyệt |
    | **Luồng thao tác chính** | 1. Từ **màn hình chính**, chọn tab **Bảng chữ Katakana**<br>2. Người dùng có thể:<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nhấn nút **“Luyện tập”** ở góc trên<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nhấn vào tiêu đề **Bảng chữ chính / Tenten / Maru / Ảo âm**<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nhấn vào **hàng** (ví dụ: `k`, `s`, `t`...) hoặc **cột** (ví dụ: `a`, `i`, `u`...)<br>3. Popup “Luyện tập” hiển thị tương ứng với bảng chữ, hàng/cột đã chọn<br>4. Chọn chế độ **Duyệt bài**<br>5. Giao diện flashcard hiển thị lần lượt từng chữ:<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nút **“Đã nhớ”** → đánh dấu là đã thuộc<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nút **“Quay lại”** (từ flashcard thứ 2 trở đi) để xem lại thẻ trước đó<br>6. Khi duyệt xong toàn bộ chữ:<br>&nbsp;&nbsp;&nbsp;&nbsp;→ Màn hình **thống kê kết quả** hiển thị:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Số chữ **đã nhớ** (nền xanh, đậm)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Số chữ **cần học lại** (nền đỏ, đậm)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Nút **“Duyệt lại”** để luyện lại toàn bộ phần nội dung vừa học |
    | **Điều kiện hiển thị** | Có dữ liệu chữ cái thuộc bảng chữ và hàng/cột đã chọn |
    | **Kết quả hiển thị** | - Flashcard hiển thị các chữ lần lượt<br>- Trạng thái “đã nhớ” được lưu và đồng bộ trên bảng chữ<br>- Giao diện thống kê kết quả hiện ra sau khi duyệt xong |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không tìm thấy chữ phù hợp để luyện tập” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Hàng: `-`, `k`, `s`, `t`, `n`, `h`, `m`, `y`, `r`, `w`...<br>Cột: `a`, `i`, `u`, `e`, `o` |


#### 3.22.16 Chức năng Luyện tập – Chế độ Học {#toc-3-22-16}

??? book "Luyện tập – Chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Chế độ Học |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Katakana: nhấn nút “Luyện tập” hoặc nhấn vào tên bảng chữ, hàng, cột |
    | **Mô tả** | Chế độ Học cho phép người dùng học chữ Katakana thông qua các card nội dung và flashcard, xen kẽ với các chặn kiểm tra tiến độ. Mỗi chữ có thể được đánh dấu đã nhớ hoặc thêm vào thư viện. Sau khi hoàn thành, người học sẽ nhận được thống kê và thông báo chúc mừng. |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình card học<br>- Flashcard có 2 mặt (trước/sau)<br>- Bài kiểm tra giữa chừng (câu hỏi)<br>- Thống kê kết quả<br>- Popup hoàn thành luyện tập |
    | **Luồng thao tác chính** | 1. Từ màn hình chính → vào Bảng chữ Katakana<br>2. Nhấn nút “Luyện tập” hoặc nhấn vào bảng chữ / hàng / cột<br>3. Popup “Luyện tập” hiển thị<br>4. Người dùng chọn chế độ “Học”<br>5. Hệ thống hiển thị lần lượt các nội dung học:<br>&nbsp;&nbsp;&nbsp;&nbsp;– Với card chữ: hiện chữ + phiên âm + nghĩa, nhấn **“Hoàn thành”** → sang nội dung kế tiếp<br>&nbsp;&nbsp;&nbsp;&nbsp;– Với flashcard:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Mặt trước: hiện chữ + nút **🌟** (Thêm vào Thư viện), **💡** (Đánh dấu đã thuộc)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Nhấn “Tiếp theo” → lật sang mặt sau<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Nhấn “Hoàn thành” → sang nội dung kế tiếp<br>6. Sau một số lượng nội dung, hiển thị **bài kiểm tra chặn tiến độ** gồm các dạng:<br>&nbsp;&nbsp;&nbsp;&nbsp;– Nối chữ (drag and drop)<br>&nbsp;&nbsp;&nbsp;&nbsp;– Vẽ chữ<br>&nbsp;&nbsp;&nbsp;&nbsp;– Chọn đáp án đúng<br>&nbsp;&nbsp;&nbsp;&nbsp;– Phát âm đúng từ<br>&nbsp;&nbsp;&nbsp;&nbsp;• Câu đúng → hiện “Hoàn thành”<br>&nbsp;&nbsp;&nbsp;&nbsp;• Câu sai → hiện “Không hoàn thành”<br>7. Sau khi hoàn tất tất cả nội dung học → hiển thị:<br>&nbsp;&nbsp;&nbsp;&nbsp; - Popup “Chúc mừng bạn đã hoàn thành luyện tập” + nút “Quay lại” và nút “Học” |
    | **Điều kiện hiển thị** | Có dữ liệu bảng chữ phù hợp với lựa chọn (bảng chữ chính, tenten, maru, ảo âm, hàng/cột) |
    | **Kết quả hiển thị** | - Giao diện học từng nội dung 1 cách tuần tự<br>- Các chữ được đánh dấu **“đã nhớ”** sẽ chuyển nền **hồng** tại bảng chữ<br>- Các chữ được thêm vào Thư viện bằng nút **🌟**<br>- Hiển thị popup hoàn thành cuối buổi học |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo “Không tìm thấy chữ phù hợp để luyện tập” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Có thể lọc và học theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`,...) tùy vào lựa chọn trước đó |


#### 3.22.17 Chức năng Luyện tập – Chế độ Xem Chi tiết {#toc-3-22-17}

??? book "Luyện tập – Chế độ Xem Chi tiết"

    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Chế độ Xem Chi tiết |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Katakana: nhấn nút “Luyện tập” hoặc nhấn vào từng bảng/hàng/cột để chọn chế độ "Chi tiết" |
    | **Mô tả** | Cho phép người dùng xem chi tiết từng chữ Katakana: hình chữ, cách đọc, phát âm, mẹo nhớ, chữ dễ nhầm, từ vựng minh họa. Có thể thao tác thêm vào thư viện (⭐) hoặc đánh dấu đã thuộc (💡) cho từng chữ |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình chi tiết chữ Katakana |
    | **Luồng thao tác chính** | 1. Từ màn hình chính ➝ vào Bảng chữ Katakana<br>2. Nhấn nút “Luyện tập” hoặc chọn trực tiếp bảng/chữ hàng/cột<br>3. Popup xuất hiện ➝ chọn chế độ **Chi tiết** ➝ chọn bảng chữ (Bảng chữ chính, Tenten, Maru, Ảo âm) và lọc theo hàng/cột nếu muốn<br>4. Màn hình chi tiết chữ xuất hiện với nội dung từng chữ và các thao tác kèm theo |
    | **Điều kiện hiển thị** | Có dữ liệu bảng chữ phù hợp với lựa chọn |
    | **Kết quả hiển thị** | Giao diện chi tiết chữ gồm:<br>• Chữ + romaji + nút phát âm<br>• Mẹo nhớ: hình minh họa và ghi chú<br>• Dễ nhầm: liệt kê các chữ dễ nhầm lẫn<br>• Từ vựng: các từ chứa chữ đang xem<br>• ⭐: Thêm vào thư viện<br>• 💡: Đánh dấu đã thuộc |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo “Không tìm thấy chữ phù hợp để luyện tập” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Có thể lọc theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`,...) |


#### 3.22.18 Chức năng Luyện tập – Chế độ Luyện viết {#toc-3-22-18}

??? book "Luyện tập – Chế độ Luyện viết"

    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng**  | Luyện tập – Chế độ Luyện viết |
    | **Phạm vi sử dụng**| Popup "Luyện tập" tại màn hình Bảng chữ Katakana: nhấn nút “Luyện tập” hoặc nhấn vào Bảng chữ, Hàng, Cột → chọn mục “Luyện viết”. |
    | **Mô tả** | Cho phép người dùng luyện cách viết từng chữ Katakana bằng tay theo đúng thứ tự nét, kèm hướng dẫn viết, phát âm và điều hướng giữa các chữ trong danh sách luyện. |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình luyện viết tay chữ Katakana với:<br>• Nét viết mẫu động (animation)<br>• Số thứ tự nét<br>• Khung viết tay<br>• Nút “Hoàn tác nét viết”<br>• Nút “Xóa”<br>• Nút “Ẩn/Hiện hướng dẫn viết”<br>• Nút **🔊 Phát âm chữ**<br>• Nút điều hướng ← → để chuyển sang chữ khác |
    | **Luồng thao tác chính** | 1. Từ màn hình chính → vào Bảng chữ Katakana<br>2. Nhấn nút “Luyện tập” hoặc nhấn vào bảng/chữ/hàng/cột → hiện popup luyện tập<br>3. Chọn chế độ **Luyện viết**<br>4. Giao diện luyện chữ hiển thị từng chữ theo danh sách đã chọn<br>5. Người dùng có thể:<br>&emsp;- Xem nét viết động kèm số thứ tự<br>&emsp;- Viết tay theo khung<br>&emsp;- Nhấn 🔊 để phát âm chữ hiện tại<br>&emsp;- Nhấn **Hoàn tác** để quay lại từng nét<br>&emsp;- Nhấn **Xóa** để viết lại<br>&emsp;- Nhấn **Ẩn/Hiện hướng dẫn** để bật/tắt nét mẫu<br>&emsp;- Dùng **← / →** để chuyển sang chữ khác hoặc quay lại chữ trước |
    | **Điều kiện hiển thị** | Có dữ liệu chữ viết phù hợp với lựa chọn bảng/hàng/cột |
    | **Kết quả hiển thị** | - Người học luyện viết từng chữ đúng thứ tự nét<br>- Có thể nghe phát âm và tự đánh giá<br>- Giao diện phản hồi tốt với thao tác viết và chuyển trang |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: “Không tìm thấy chữ phù hợp để luyện viết” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Có thể luyện theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`, `e`, `o`) |


#### 3.22.19 Chức năng Luyện tập – Chế độ Flashcard {#toc-3-22-19}

??? book "Luyện tập – Chế độ Flashcard"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Chế độ Flashcard |
    | **Phạm vi sử dụng** | Popup “Luyện tập” tại màn hình Bảng chữ Katakana: nhấn nút “Luyện tập” hoặc chọn trực tiếp bảng chữ, cột, hàng |
    | **Mô tả** | Chế độ Flashcard cho phép người học ôn tập bảng chữ Katakana thông qua các thẻ 2 mặt, có thể đánh dấu “Đã thuộc” hoặc thêm vào thư viện để học tiếp. Có 3 loại flashcard: <br>- Loại 1: Hiển thị hướng viết chữ<br>- Loại 2: Hiển thị chữ + phiên âm + âm thanh + câu gợi nhớ<br>- Loại 3: Hình minh họa + nét viết + câu gợi nhớ |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình flashcard<br>- Popup tùy chỉnh (hiện tất cả, xáo trộn, tự chạy, chọn loại flashcard)<br>- Popup hoàn thành khi đánh dấu hết các thẻ đã thuộc |
    | **Luồng thao tác chính** | 1. Từ màn hình chính → vào Bảng chữ Katakana<br>2. Nhấn nút “Luyện tập” hoặc chọn bảng chữ/cột/hàng<br>3. Chọn chế độ “Flashcard”<br>4. Giao diện hiển thị thẻ flashcard (1 trong 3 loại)<br>5. Người dùng có thể:<br> • Lật mặt sau flashcard<br> • Đánh dấu thuộc (biểu tượng bóng đèn)<br> • Thêm vào thư viện (biểu tượng ngôi sao)<br> • Chuyển thẻ bằng nút trái/phải<br>6. Khi tất cả thẻ được đánh dấu là đã thuộc → hiện popup “Chúc mừng” |
    | **Điều kiện hiển thị** | Có dữ liệu bảng chữ phù hợp với lựa chọn (bảng chữ chính, tenten, maru, ảo âm...) |
    | **Kết quả hiển thị** | - Giao diện flashcard với nội dung tương ứng<br>- Biểu tượng trạng thái: đã thuộc / thêm thư viện<br>- Điều hướng giữa các thẻ<br>- Tùy chọn điều chỉnh cách học |
    | **Tùy chỉnh flashcard** | - **Hiện tất cả**: Hiển thị cả thẻ đã thuộc và chưa thuộc<br>- **Xáo trộn**: Đảo thứ tự flashcard<br>- **Tự chạy**: Tự động chuyển flashcard theo tốc độ (Chậm – Tiêu chuẩn – Nhanh)<br>⮕ Lưu ý: Tự chạy chỉ tự lướt, không tự lật thẻ<br>- **Chọn loại flashcard**: Chuyển giữa loại 1, 2, 3 |
    | **Kết thúc luyện tập** | - Khi người dùng đã đánh dấu tất cả flashcard là “đã thuộc” (nếu không bật “Hiện tất cả”) → hiện popup “Chúc mừng – Bạn đã nhớ hết phần Flashcard rồi !!!” kèm nút “Học lại” |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo “Không tìm thấy chữ phù hợp để luyện tập” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ chính, Tenten, Maru, Ảo âm |
    | **Phân loại theo hàng/cột** | Có thể lọc và học theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`, `e`, `o`) |


#### 3.22.20 Chức năng Luyện tập – Chế độ Trắc nghiệm {#toc-3-22-20}

??? book "Luyện tập – Chế độ Trắc nghiệm"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – Chế độ Trắc nghiệm |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Katakana: nhấn nút “Luyện tập” hoặc chọn trực tiếp từng bảng, cột hoặc hàng, sau đó chọn “Trắc nghiệm” |
    | **Mô tả** | Chế độ Trắc nghiệm cho phép người dùng kiểm tra khả năng ghi nhớ chữ Katakana thông qua các câu hỏi dạng chọn đáp án đúng. Mỗi câu có 1 câu hỏi và 4 phương án. Có phát âm chữ để nghe trước khi chọn. |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình bài kiểm tra trắc nghiệm với thanh tiến độ, câu hỏi, lựa chọn đáp án và biểu tượng loa |
    | **Luồng thao tác chính** | 1. Từ màn hình chính → vào Bảng chữ Katakana<br>2. Nhấn nút “Luyện tập” hoặc chọn trực tiếp bảng/cột/hàng<br>3. Chọn chế độ “Trắc nghiệm”<br>4. Hệ thống hiển thị từng câu hỏi: có thể là **âm thanh phát âm chữ** hoặc **ký tự**<br>5. Người dùng chọn 1 trong 4 đáp án<br>6. Hiển thị phản hồi đúng/sai: màu xanh lá (đúng), đỏ (sai)<br>7. Tự động chuyển sang câu tiếp theo<br>8. Sau khi làm xong, hiển thị kết quả tổng hợp phần trăm và thống kê đúng/sai từng chữ |
    | **Điều kiện hiển thị** | Có dữ liệu bảng chữ phù hợp với lựa chọn (Bảng chữ Chính, Tenten, Maru, Kết hợp) |
    | **Kết quả hiển thị** | - Câu hỏi + 4 lựa chọn<br>- Biểu tượng phát âm trung tâm để phát lại câu hỏi (không bị tắt khi tắt âm)<br>- Màu sắc phản hồi sau chọn: đỏ (sai), xanh lá (đúng)<br>- **Thanh tiến độ**:<br>&nbsp;&nbsp;&nbsp;&nbsp;+ Màu xanh: số câu đã làm hoặc đang làm<br>&nbsp;&nbsp;&nbsp;&nbsp;+ Màu đỏ: số câu làm đúng<br>- Màn hình kết quả cuối: phần trăm đúng, danh sách chữ, nút “Làm lại” |
    | **Âm thanh** | - Có 2 loại âm thanh:<br>&nbsp;&nbsp;&nbsp;&nbsp;+ Âm thanh câu hỏi (phát âm chữ): luôn phát được, không bị tắt<br>&nbsp;&nbsp;&nbsp;&nbsp;+ Âm thanh hiệu ứng chọn đáp án: có thể tắt bằng cách nhấn biểu tượng **loa** ở góc phải trên màn hình |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo “Không có dữ liệu để kiểm tra” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ Chính, Tenten, Maru, Kết hợp |
    | **Phân loại theo hàng/cột** | Có thể lọc và luyện tập theo từng hàng (`k`, `s`, `t`,...) hoặc từng cột (`a`, `i`, `u`,...) |


#### 3.22.21 Chức năng Luyện tập – chế độ Thử thách 1 {#toc-3-22-21}

??? book "Luyện tập – chế độ Thử thách 1"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – chế độ Thử thách 1 |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Katakana |
    | **Mô tả** | Chế độ Thử thách 1 kiểm tra khả năng nhận diện nhanh Katakana bằng cách hiển thị **romaji (phiên âm)**, yêu cầu người dùng chọn đúng **chữ Katakana tương ứng**. Có giới hạn **thời gian cho từng câu** (thể hiện bằng thanh tiến độ) và **tối đa 3 lần sai toàn bài** (bao gồm cả chọn sai và hết giờ). |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình thử thách: romaji + lưới đáp án<br>- Thanh tiến độ thời gian (mỗi câu)<br>- Trái tim hiển thị số lần sai còn lại<br>- Popup “Thành công” hoặc “Thua”<br>- Thông báo phản hồi đúng/sai/hết giờ |
    | **Luồng thao tác chính** |<br>1. Người dùng vào **Bảng chữ Katakana**<br>2. Nhấn **Luyện tập** → chọn chế độ **Thử thách 1**<br>3. Bài gồm 16 câu hỏi:<br>&emsp;• Hiển thị 1 romaji (VD: `sa`, `ryu`)<br>&emsp;• 16 đáp án là chữ Katakana<br>&emsp;• Thanh thời gian + trái tim<br>4. Người dùng chọn đáp án hoặc hết giờ:<br>&emsp;• ✅ Đúng:<br>&emsp;&emsp;– Tô xanh lá đáp án đúng<br>&emsp;&emsp;– Hiện thông báo “Làm tốt lắm, tiếp tục nào”<br>&emsp;&emsp;– Cập nhật vào **đã thuộc**, tô **hồng** trong bảng<br>&emsp;&emsp;– Tăng % tiến độ<br>&emsp;&emsp;– Tự chuyển câu tiếp theo<br>&emsp;• ❌ Sai:<br>&emsp;&emsp;– Tô đỏ chữ sai, xanh lá chữ đúng<br>&emsp;&emsp;– Hiện thông báo “Sai rồi bạn ơi, ‘xx’ mới đúng”<br>&emsp;&emsp;– Mất 1 tim<br>&emsp;• ⏰ Hết giờ:<br>&emsp;&emsp;– Tô xanh chữ đúng<br>&emsp;&emsp;– Hiện thông báo “Hết giờ cho câu này”<br>&emsp;&emsp;– Mất 1 tim<br>5. Sai đủ **3 lần** → popup “Thua”<br>6. Hoàn thành đúng → popup “Thành công” |
    | **Chi tiết hiển thị** | - Câu hỏi: romaji lớn, màu đậm<br>- 16 ô đáp án chữ Katakana<br>- Thanh thời gian: 5–7s / câu<br>- Mỗi sai/hết giờ mất 1 tim (tối đa 3)<br>- Thông báo:<br>&emsp;• ✅ “Làm tốt lắm, tiếp tục nào”<br>&emsp;• ❌ “Sai rồi bạn ơi, ‘さ’ mới đúng”<br>&emsp;• ⏰ “Hết giờ cho câu này”<br>- Popup kết quả:<br>&emsp;• 🎉 “Thành công rồi!”<br>&emsp;• 😢 “Hãy luyện tập thật tốt nhé!” |
    | **Kết quả hiển thị** | - Cập nhật từ đã thuộc (tô hồng trong bảng)<br>- Cập nhật % hoàn thành bảng chữ<br>- Hiện popup kết quả<br>- Cho làm lại |
    | **Điều kiện hiển thị** | Có đủ số lượng chữ trong bảng hiện tại để tạo thử thách |
    | **Trường hợp không có dữ liệu** | “Không đủ dữ liệu để bắt đầu thử thách. Vui lòng chọn nhiều chữ hơn nhé.” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ Chính, Biến âm, Kết hợp |


#### 3.22.22 Chức năng Luyện tập – chế độ Thử thách 2 {#toc-3-22-22}

??? book "Luyện tập – chế độ Thử thách 2"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập – chế độ Thử thách 2 |
    | **Phạm vi sử dụng** | Popup "Luyện tập" tại màn hình Bảng chữ Katakana |
    | **Mô tả** | Chế độ Thử thách 2 kiểm tra khả năng đọc Katakana bằng cách hiển thị **chữ Katakana**, yêu cầu người dùng chọn đúng **romaji tương ứng**. Luật chơi, giao diện, thời gian, tim và chấm điểm hoàn toàn giống Thử thách 1, chỉ khác chiều câu hỏi – đáp án. |
    | **Giao diện liên quan** | - Popup “Luyện tập”<br>- Màn hình thử thách: chữ Katakana + lưới đáp án romaji<br>- Thanh tiến độ thời gian (mỗi câu)<br>- Trái tim hiển thị số lần sai còn lại<br>- Popup “Thành công” hoặc “Thua”<br>- Thông báo phản hồi đúng/sai/hết giờ |
    | **Luồng thao tác chính** |<br>1. Người dùng vào **Bảng chữ Katakana**<br>2. Nhấn **Luyện tập** → chọn chế độ **Thử thách 2**<br>3. Bài gồm 16 câu hỏi:<br>&emsp;• Hiển thị 1 chữ Katakana (VD: `き`, `ちゅ`)<br>&emsp;• 16 đáp án là romaji<br>&emsp;• Thanh thời gian + trái tim<br>4. Người dùng chọn hoặc hết giờ:<br>&emsp;• ✅ Đúng → tô xanh, thông báo, cập nhật từ đã thuộc, tăng %<br>&emsp;• ❌ Sai → tô đỏ/sai, hiện đúng, trừ tim<br>&emsp;• ⏰ Hết giờ → hiện đúng, trừ tim<br>5. Sai đủ 3 lần → popup “Thua”<br>6. Làm đúng hết → popup “Thành công” |
    | **Chi tiết hiển thị** | - Câu hỏi: chữ Katakana to, màu đậm<br>- 16 ô đáp án romaji<br>- Thanh thời gian: 5–7s / câu<br>- Mỗi sai/hết giờ mất 1 tim<br>- Thông báo:<br>&emsp;• ✅ “Làm tốt lắm, tiếp tục nào”<br>&emsp;• ❌ “Sai rồi bạn ơi, ‘ki’ mới đúng”<br>&emsp;• ⏰ “Hết giờ cho câu này”<br>- Popup kết quả:<br>&emsp;• 🎉 “Thành công rồi!”<br>&emsp;• 😢 “Hãy luyện tập thật tốt nhé!” |
    | **Kết quả hiển thị** | - Từ đúng → vào danh sách đã thuộc (tô hồng)<br>- Tăng % bảng chữ<br>- Hiện popup kết quả<br>- Có thể làm lại |
    | **Điều kiện hiển thị** | Có đủ số lượng chữ để tạo thử thách |
    | **Trường hợp không có dữ liệu** | “Không đủ dữ liệu để bắt đầu thử thách. Vui lòng chọn nhiều chữ hơn nhé.” |
    | **Phạm vi bảng chữ hỗ trợ** | Bảng chữ Chính, Biến âm, Kết hợp |

## 4. Đặc tả các chức năng chính Sakumi - Học viên

### 4.1 Chức năng Góp ý { #toc-4-1 }

??? book "Góp ý"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Góp ý |
    | **Mô tả** | Chức năng cho phép học viên gửi góp ý trực tiếp về trung tâm để cải thiện chất lượng dịch vụ và trải nghiệm học tập. Học viên có thể chọn loại góp ý và gửi góp ý có/không kèm thông tin cá nhân. |
    | **Giao diện liên quan** | - Màn hình lớp học (tab Tổng quan / Bài học / Kiểm tra...) → button **Gửi góp ý đến trung tâm**<br> - Popup **Góp ý** |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Vào 1 lớp học cụ thể → tại tab **Tổng quan** (hoặc các tab khác nếu có)<br>3. Nhấn **Gửi góp ý đến trung tâm** → mở popup Góp ý<br>4. Tại popup, học viên thực hiện:<br>&emsp;• Chọn **Loại góp ý** (Dropdown, bắt buộc chọn)<br>&emsp;• Nhập **Nội dung góp ý** (Textbox, bắt buộc nhập)<br>&emsp;• (Tùy chọn) Tick **Ẩn danh** nếu không muốn gửi kèm thông tin cá nhân<br>5. Nhấn **Gửi góp ý**:<br>&emsp;• Nếu đầy đủ thông tin → gửi thành công → hiển thị thông báo gửi thành công<br>&emsp;• Nếu thiếu loại góp ý hoặc nội dung → báo lỗi yêu cầu nhập đầy đủ<br>6. Nếu nhấn **Hủy** → đóng popup, không gửi |
    | **Chi tiết hiển thị** | - **Dropdown Loại góp ý** (bắt buộc chọn):<br>&emsp;• Góp ý chung<br>&emsp;• Góp ý về Giáo trình<br>&emsp;• Góp ý về Giảng viên<br>&emsp;• Góp ý về Hỗ trợ học viên<br>&emsp;• Góp ý về Lộ trình<br>&emsp;• Góp ý về Bài tập về nhà<br>&emsp;• Góp ý về Kiểm tra<br>&emsp;• Góp ý về Học phí<br>&emsp;• Các loại khác nếu có (danh sách có thể mở rộng bởi trung tâm)<br> - **Textbox nhập nội dung góp ý**:<br>&emsp;• Placeholder: “Góp ý của bạn rất quan trọng với chúng tôi. Bạn hãy thoải mái góp ý mọi điểm tại đây nhé!”<br> - **Checkbox Ẩn danh**:<br>&emsp;• Nếu tick **Ẩn danh** → góp ý sẽ không gửi kèm thông tin cá nhân (Họ tên, Email, SĐT).<br>&emsp;• Nếu không tick → gửi kèm thông tin cá nhân của học viên.<br> - **Nút Gửi góp ý**:<br>&emsp;• Khi gửi thành công → hiển thị thông báo **Gửi góp ý thành công**<br> - **Nút Hủy**:<br>&emsp;• Đóng popup, không gửi dữ liệu |
    | **Kết quả hiển thị** | - Góp ý được gửi về **BAN QUẢN LÝ CHẤT LƯỢNG & BAN HỖ TRỢ KHÁCH HÀNG**.<br> - Nếu tick **Ẩn danh** → không kèm thông tin cá nhân.<br> - Nếu không tick Ẩn danh → kèm thông tin học viên. |
    | **Trường hợp không có dữ liệu** | - Nếu không chọn **Loại góp ý** → cảnh báo: **"Vui lòng chọn loại góp ý"**.<br> - Nếu không nhập **Nội dung góp ý** → cảnh báo: **"Vui lòng nhập nội dung góp ý"**. |

### 4.2 Chức năng Đổi mật khẩu { #toc-3-6-2 }

??? book "Đổi mật khẩu"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Đổi mật khẩu |
    | **Mô tả** | Chức năng cho phép học viên thay đổi mật khẩu tài khoản của mình để đảm bảo an toàn bảo mật. |
    | **Giao diện liên quan** | - Màn hình **Cài đặt** → chọn **Tài khoản sakumi** → nút **Đổi mật khẩu**<br> - Màn hình **Đổi mật khẩu** |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình chính → vào **Cài đặt**<br>3. Chọn **Tài khoản Sakumi** → nhấn nút **Đổi mật khẩu**<br>4. Màn hình **Đổi mật khẩu** hiển thị các trường:<br>&emsp;– Mật khẩu cũ<br>&emsp;– Mật khẩu mới<br>&emsp;– Xác nhận mật khẩu mới<br>5. Học viên nhập đầy đủ thông tin<br>6. Nhấn **Lưu thông tin** để cập nhật<br>7. Hệ thống kiểm tra:<br>&emsp;– Nếu thành công → hiển thị thông báo thành công<br>&emsp;– Nếu lỗi (mật khẩu cũ sai / mật khẩu mới không khớp / chưa đủ 6 ký tự) → hiển thị thông báo lỗi |
    | **Chi tiết hiển thị** | - **Mật khẩu cũ**:<br>&emsp;• Học viên nhập mật khẩu hiện tại<br> - **Mật khẩu mới**:<br>&emsp;• Nhập mật khẩu mới (tối thiểu 6 ký tự)<br> - **Xác nhận mật khẩu mới**:<br>&emsp;• Nhập lại mật khẩu mới để xác nhận<br> - **Nút Lưu thông tin**:<br>&emsp;• Sau khi nhấn → thực hiện kiểm tra và lưu lại mật khẩu mới |
    | **Kết quả hiển thị** | - Nếu đổi mật khẩu thành công → hiển thị thông báo thành công<br> - Nếu có lỗi → hiển thị thông báo lỗi tương ứng |
    | **Trường hợp không có dữ liệu** | - Nếu bỏ trống trường nào → hiển thị yêu cầu nhập đầy đủ |

