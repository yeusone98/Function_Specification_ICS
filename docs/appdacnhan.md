# 📄 Tài liệu đặc tả chức năng App Đắc Nhân

## 1. Giới thiệu

- **Mục tiêu:** <div class="justified-text">
  Ứng dụng **Đắc Nhân Tiếng Trung** được xây dựng để hỗ trợ học viên theo dõi quá trình học tập tiếng Trung tại trung tâm, bao gồm: bài học theo buổi, bài tập về nhà, kiểm tra định kỳ, tổng quan tiến độ và thư viện học tập.
  Hệ thống cung cấp trải nghiệm học tập minh bạch, cá nhân hóa, đồng thời giúp giáo viên và trung tâm nắm bắt tiến độ học và mức độ hoàn thành của học viên một cách trực quan.
  Ứng dụng hướng đến việc tự động hóa phần lớn quy trình đào tạo và nâng cao hiệu quả giảng dạy.</div>

- **Đối tượng sử dụng:**<br>
  🔹 Developer: triển khai các module chức năng dựa trên mô tả nghiệp vụ<br>
  🔹 Tester: xây dựng và thực hiện test case để kiểm thử hệ thống

---

## 2. Phạm vi hệ thống

Hệ thống Đắc Nhân Tiếng Trung là nền tảng học tập dành cho học viên đang theo học các khoá tiếng Trung tại trung tâm. Ứng dụng hỗ trợ học viên theo dõi quá trình học, kiểm tra và tự học theo lộ trình đã được phân phối bởi giáo viên. Tất cả nội dung học tập đều được đồng bộ từ hệ thống giảng dạy chính và hiển thị cá nhân hóa theo từng lớp và từng khoá học mà học viên tham gia.

Ứng dụng hướng đến người dùng duy nhất là:

* **Student (Học viên)**: Người học tiếng Trung tại trung tâm

* **Các chức năng chính dành cho học viên**:

* 📘 **Bài học**:<br>
   • Xem danh sách các buổi học theo thứ tự thời gian<br>
   • Truy cập nội dung bài học chi tiết: chủ đề, mục tiêu học, từ vựng, ngữ pháp, kỹ năng<br>
   • Xem trạng thái từng buổi học: Có mặt, Vắng, Vào trễ

* 📝 **Kiểm tra**:<br>
   • Xem danh sách bài kiểm tra được giao<br>
   • Thực hiện bài kiểm tra (nếu hệ thống mở truy cập)<br>
   • Theo dõi điểm số, trạng thái hoàn thành

* 🎯 **Tự học**:<br>
   • Ôn tập từ vựng, ngữ pháp và kỹ năng nghe đọc theo dạng flashcard hoặc bài tập<br>
   • Theo dõi tiến độ học tập theo từng hoạt động: Luyện nhớ, Củng cố, Kiến thức nền, Kỹ năng

* 📊 **Tổng quan lớp học**:<br>
   • Xem tổng số buổi học đã hoàn thành / tổng số buổi<br>
   • Tỉ lệ điểm danh, tỉ lệ làm bài tập về nhà<br>
   • Điểm trung bình bài tập và điểm kiểm tra

* 📚 **Thư viện học tập**:<br>
   • Gồm 3 mục: **Kiến thức**, **Kỹ năng** và **Tiến trình**<br>
   • Học viên ôn tập lại các nội dung đã học và đã note từ bài học chính (bao gồm Từ vựng, Ngữ pháp, Nghe, Đọc)<br>
   • Hiển thị tiến độ học tập cá nhân bằng biểu đồ trực quan theo ngày/tuần/tháng<br>
   • Cung cấp 2 chế độ luyện tập: *Duyệt* và *Luyện tập*


---

## 3. Các chức năng chính

#### 3.1 Chức năng đăng nhập { #toc-3-1 }

??? book "Đăng nhập"
    | Trường                | Nội dung |
    |-----------------------|----------|
    | **Tên chức năng**     | Đăng nhập |
    | **Mô tả**              | Chức năng cho phép học viên đăng nhập vào ứng dụng bằng email và mật khẩu được cấp bởi trung tâm. Việc đăng nhập giúp xác thực tài khoản và truy xuất dữ liệu học tập cá nhân như lớp học, bài học, kiểm tra, thư viện…<br><br>**Tài khoản học viên sẽ được cấp bởi bộ phận Support của trung tâm.** |
    | **Giao diện liên quan** | - Màn hình đăng nhập (email, mật khẩu)<br> - Nút “Đăng nhập”<br> - Link “Quên mật khẩu”<br> - Nút “Liên hệ Support để được hỗ trợ” |
    | **Luồng thao tác chính** | 1. Truy cập ứng dụng → hiển thị form Email và Mật khẩu, kèm nút Đăng nhập<br>2. Học viên nhập thông tin → có thể ẩn/hiện mật khẩu<br>3. Nhấn Đăng nhập:<br>&emsp;– Nếu hợp lệ → đăng nhập thành công<br>&emsp;– Nếu sai → hiển thị lỗi tương ứng:<br>&emsp;&emsp;• Email không đúng format → lỗi **"Email không hợp lệ"**<br>&emsp;&emsp;• Email hợp lệ nhưng không tồn tại → lỗi **"Email không tồn tại"**<br>&emsp;&emsp;• Email đúng, password sai → lỗi **"Mật khẩu không đúng"**<br>&emsp;&emsp;• Password không đạt yêu cầu (ít hơn 6 ký tự) → lỗi **"Mật khẩu phải có ít nhất 6 ký tự"**<br>4. Nhấn “Quên mật khẩu” → hiển thị: “Liên hệ support để được hỗ trợ” |
    | **Điều kiện**          | - Nút “Đăng nhập” luôn cho phép nhấn dù chưa nhập đủ thông tin<br> - Hệ thống kiểm tra và hiển thị lỗi tương ứng nếu để trống / sai định dạng / sai thông tin |
    | **Kết quả hiển thị**   | - Nếu đăng nhập thành công → chuyển sang màn hình chính<br> - Nếu lỗi:<br>&emsp;• Email không nhập → lỗi **"Vui lòng nhập email"**<br>&emsp;• Mật khẩu không nhập → lỗi **"Vui lòng nhập mật khẩu"**<br>&emsp;• Email sai format → lỗi **"Email không hợp lệ"**<br>&emsp;• Email không tồn tại → lỗi **"Email không tồn tại"**<br>&emsp;• Mật khẩu sai → lỗi **"Mật khẩu không đúng"**<br>&emsp;• Mật khẩu không đạt yêu cầu → lỗi **"Mật khẩu phải có ít nhất 6 ký tự"** |
    | **Trường hợp không có dữ liệu** | Email, mật khẩu trống → vẫn cho phép nhấn nút “Đăng nhập”, hệ thống sẽ cảnh báo lỗi tương ứng sau đó |


### 3.2 Chức năng quản lý khóa học

#### 3.2.1 Chức năng hiển thi danh sách khóa học { #toc-3-2-1}
??? book "Hiển thị khoá học"
    | Trường                | Nội dung |
    |-----------------------|----------|
    | **Tên chức năng**     | Hiển thị khoá học |
    | **Mô tả**              | Chức năng cho phép học viên xem danh sách các khoá học mà mình đang tham gia. Mỗi khoá học được hiển thị cùng với mã khoá học, tên khoá học, trạng thái và tiến độ học tập. |
    | **Giao diện liên quan** | - Trang “Khoá học của bạn”<br> - Các card hiển thị thông tin khoá học |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công → hiển thị danh sách khoá học đang tham gia<br>2. Mỗi khoá học hiển thị:<br>&emsp;• **Mã khoá học** (ví dụ: H1 TEST)<br>&emsp;• **Tên khoá học** (ví dụ: Tiếng Trung Nhập Môn)<br>&emsp;• **Trạng thái**: “Chưa bắt đầu”, “Đang học”, “Đã hoàn thành”<br>&emsp;• **Tiến độ học**: % hoàn thành (ví dụ: 100%) |
    | **Điều kiện**          | Học viên đã có khoá học được phân công trong hệ thống |
    | **Kết quả hiển thị**   | - Danh sách khoá học được hiển thị theo thứ tự (có thể mặc định theo trạng thái)<br> - Mỗi khoá học thể hiện rõ: mã, tên, trạng thái và % tiến độ<br> - Các trạng thái có màu phân biệt:<br>&emsp;• Xanh lá: Đã hoàn thành<br>&emsp;• Cam: Đang học<br>&emsp;• Xám: Chưa bắt đầu |
    | **Trường hợp không có dữ liệu** | Hiển thị dòng thông báo: “Bạn chưa được phân công khoá học nào” |

#### 3.2.2 Chức năng hiển thị thông số tổng quát một khóa học { #toc-3-2-2}
??? book "Hiển thị thông số tổng quát một khóa học"
    | Trường                | Nội dung |
    |-----------------------|----------|
    | **Tên chức năng**     | Hiển thị tổng quát một khóa học |
    | **Mô tả**              | Chức năng cho phép học viên theo dõi tổng quan tình hình học tập của lớp mình, hiển thị các chỉ số trung bình như số buổi đã học, tỉ lệ điểm danh, tỉ lệ làm bài tập, điểm bài tập và điểm kiểm tra. |
    | **Giao diện liên quan** | - Tab "Tổng quát" trong chi tiết lớp học<br> - Các thành phần thống kê dạng biểu đồ tròn và thanh ngang |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ danh sách khóa học → chọn một khóa cụ thể<br>3. Hệ thống hiển thị tab “Tổng quát” mặc định<br>4. Các chỉ số hiển thị gồm:<br>&emsp;• Số buổi đã học / tổng số buổi<br>&emsp;• Tỉ lệ điểm danh (%)<br>&emsp;• Tỉ lệ làm bài tập về nhà (%)<br>&emsp;• Điểm trung bình bài tập về nhà<br>&emsp;• Điểm trung bình kiểm tra |
    | **Điều kiện**          | Học viên đã được phân vào lớp có dữ liệu học tập |
    | **Kết quả hiển thị**   | - Tất cả chỉ số hiển thị dạng số và thanh progress<br> - Dữ liệu được tổng hợp trung bình từ kết quả học tập của chính học viên |
    | **Trường hợp không có dữ liệu** | Nếu chưa học buổi nào hoặc chưa có bài tập/kiểm tra → hiển thị giá trị “0” tương ứng và thanh tiến độ rỗng |


### 3.3 Chức năng quản lý bài học

#### 3.3.1 Chức năng hiển thị danh sách bài học { #toc-3-3-1}

??? book "Hiển thị danh sách bài học"
    | Trường                  | Nội dung |
    |-------------------------|----------|
    | **Tên chức năng**       | Hiển thị danh sách bài học |
    | **Mô tả**                | Học viên có thể theo dõi toàn bộ danh sách buổi học của lớp mà mình đang tham gia. Mỗi buổi học sẽ hiển thị thông tin chi tiết như tiêu đề, nội dung học, trạng thái điểm danh, trạng thái hoàn thành buổi và các chỉ số đi kèm. |
    | **Giao diện liên quan** | - Màn hình đăng nhập<br> - Màn hình danh sách khóa học<br> - Tab **Bài học** trong giao diện lớp học<br> - Các thẻ buổi học |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công bằng email và mật khẩu được cấp.<br>2. Tại màn hình chính, chọn một **khóa học bất kỳ** từ danh sách hiển thị.<br>3. Giao diện chuyển đến màn hình lớp học tương ứng.<br>4. Nhấn vào tab **Bài học** để xem toàn bộ danh sách buổi học.<br>5. Với mỗi buổi học:<br>&emsp;• Hiển thị tiêu đề (VD: Buổi 1, Buổi 2…) và chủ đề chính<br>&emsp;• Nội dung học: từ vựng, ngữ pháp, luyện nói, đọc hiểu…<br>&emsp;• Trạng thái điểm danh: Có mặt, Vắng, Vào trễ, Chưa điểm danh<br>&emsp;• Trạng thái học: Hoàn thành, Đang học, Chưa bắt đầu, Xem sớm |
    | **Điều kiện**           | - Chỉ hiển thị các buổi học thuộc lớp mà học viên đang tham gia<br> - Trạng thái điểm danh và hoàn thành được cập nhật bởi giáo viên |
    | **Kết quả hiển thị**    | - Danh sách buổi học được sắp xếp theo thứ tự thời gian<br> - Mỗi thẻ buổi học hiển thị:<br>&emsp;• Số buổi và tiêu đề<br>&emsp;• Nội dung chi tiết<br>&emsp;• Trạng thái học (theo màu)<br>&emsp;• Trạng thái điểm danh (theo tag chữ) |
    | **Trường hợp không có dữ liệu** | Nếu lớp chưa có buổi học nào → hiển thị thông báo: “Chưa có buổi học nào được tạo cho lớp này” |


#### 3.3.2 Chức năng hiển thị chi tiết bài học { #toc-3-3-2}

??? book "Hiển thị chi tiết bài học"
    | Trường                       | Nội dung |
    |-----------------------------|----------|
    | **Tên chức năng**           | Hiển thị chi tiết bài học |
    | **Mô tả**                   | Học viên có thể xem nội dung chi tiết từng buổi học của lớp đang theo học, bao gồm phân loại phần bắt buộc, kiến thức nền, kỹ năng, trạng thái hoàn thành, và mô tả tóm tắt từng hoạt động học tập. |
    | **Giao diện liên quan**     | - Màn hình chi tiết bài học<br> - Các khối nội dung theo từng phần: Phần bắt buộc, Kiến thức nền, Kỹ năng<br> - Các dòng trạng thái như: “Chưa hoàn thành”, “Hoàn thành” |
    | **Luồng thao tác chính**   | 1. Học viên đăng nhập thành công<br>2. Từ danh sách khóa học → chọn một khóa học cụ thể<br>3. Chuyển đến màn hình chi tiết lớp → chọn tab “Bài học”<br>4. Nhấn vào một buổi học trong danh sách<br>5. Hệ thống hiển thị chi tiết bài học |
    | **Chi tiết hiển thị**       | **– Phần bắt buộc**: Dạng timeline, hiển thị các mục như “Duyệt Kiến Thức”, “Học qua Flashcard”, “Luyện nhớ chuyên sâu”, “Bài tập củng cố”. Mỗi mục có icon, tên hoạt động và trạng thái (Chưa hoàn thành / Hoàn thành)<br>**– Kiến thức nền**: Tách riêng thành 2 mục “Từ vựng” và “Ngữ pháp” kèm tiến độ phần trăm<br>**– Kỹ năng**: Gồm “Nghe” và “Đọc” hiển thị tiến độ phần trăm tương ứng |
    | **Kết quả hiển thị**        | - Danh sách nội dung học tập theo từng phần<br> - Các trạng thái hiển thị nổi bật bằng màu sắc (cam cho “Chưa hoàn thành”, xanh cho “Hoàn thành”)<br> - Bar tiến độ phần trăm thể hiện rõ mức độ hoàn thành mỗi mục |
    | **Trường hợp không có dữ liệu** | - Nếu chưa có dữ liệu ở một mục nào đó → mục đó không hiển thị<br> - Nếu toàn bộ nội dung chưa có → hiển thị thông báo: “Chưa có nội dung học tập cho buổi học này” |


#### 3.3.3 Chức năng duyệt kiến thức { #toc-3-3-3}
??? book "Duyệt kiến thức"
    | Trường                       | Nội dung |
    |-----------------------------|----------|
    | **Tên chức năng**           | Duyệt kiến thức |
    | **Mô tả**                   | Chức năng giúp học viên ôn lại từ vựng và ngữ pháp đã học thông qua các card hiển thị nội dung. Mỗi thẻ gồm từ trọng tâm, ví dụ minh họa và hai lựa chọn: “Đã thuộc” hoặc “Cần học lại”. |
    | **Giao diện liên quan**     | - Mục “Duyệt Kiến Thức” trong chi tiết bài học<br> - Card hiển thị: từ vựng (chữ Hán + nghĩa), ví dụ minh họa có highlight từ chính<br> - Màn hình tổng kết số lượng “Đã thuộc” / “Cần học lại” |
    | **Luồng thao tác chính**   | 1. Học viên đăng nhập thành công<br>2. Từ danh sách khóa học → chọn một khóa học<br>3. Vào tab “Bài học” → chọn một buổi học cụ thể<br>4. Trong phần bắt buộc → chọn “Duyệt Kiến Thức”<br>5. Lần lượt xem các card và chọn “Đã thuộc” hoặc “Cần học lại”<br>6. Sau card cuối → hiển thị kết quả tổng kết |
    | **Chi tiết hiển thị**       | - Mỗi card gồm:<br>&emsp;• Từ trọng tâm (chữ Hán, nghĩa tiếng Việt)<br>&emsp;• Câu ví dụ minh họa có highlight từ trọng tâm<br>&emsp;• Thanh tiến độ<br>&emsp;• Nút lựa chọn: “Đã thuộc” / “Cần học lại”<br> - Giao diện kết thúc thể hiện tổng số nội dung theo từng nhóm |
    | **Kết quả hiển thị**        | - Các card hiển thị lần lượt, không có hành động lật<br> - Tiến độ được cập nhật theo thao tác<br> - Màn hình tổng kết số lượng đã học / cần học lại sau khi hoàn tất |
    | **Trường hợp không có dữ liệu** | Nếu không có nội dung duyệt sẽ hiển thị không có dữ liệu |

#### 3.3.4 Chức năng học qua flashcard { #toc-3-3-4}

??? book "Học qua Flashcard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Học qua Flashcard |
    | **Mô tả**                 | Học viên ôn luyện từ vựng, ngữ pháp và ví dụ thông qua các flashcard có thể lật và phát âm thanh. Có 3 loại flashcard hiển thị khác nhau, tùy chỉnh tốc độ phát và thứ tự trình bày. |
    | **Giao diện liên quan**   | - Mục “Học qua Flashcard” trong chi tiết bài học<br> - Màn hình flashcard có thể lật<br> - Pop-up “Tùy chọn” gồm: Xem tất cả, Xáo trộn, Tự chạy, Chậm / Bình thường / Nhanh |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ danh sách khóa học → chọn một khóa học<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Trong phần bắt buộc → chọn “Học qua Flashcard”<br>5. Chọn loại flashcard hiển thị<br>6. Tùy chỉnh tùy chọn: tốc độ phát tự động, tự chạy, xáo trộn, xem tất cả |
    | **Chi tiết hiển thị**     | • **Flashcard loại 1**: Mặt trước hiển thị chữ Hán, phiên âm, nghĩa và ví dụ minh họa; mặt sau là dịch nghĩa ví dụ<br>• **Flashcard loại 2**: Mặt trước hiển thị hình ảnh + nghĩa tiếng Việt; mặt sau là chữ Hán, phiên âm và ví dụ minh họa<br>• **Flashcard loại 3**: Mặt trước hiển thị ví dụ tiếng Trung; mặt sau là nghĩa dịch, từ trọng tâm, hình minh họa và phiên âm<br><br>**Tùy chọn:**<br>Học viên có thể sử dụng các tuỳ chọn:<br> &emsp;- **Xem tất cả**: hiển thị toàn bộ FlashCard<br> &emsp;- **Xáo trộn**: xáo trộn thứ tự FlashCard<br> &emsp;- **Tự chạy**: nút trên màn hình có vòng lặp trạng thái:<br> &emsp;&emsp;→ Nhanh → Tự chạy (thủ công, học viên tự bấm qua card) → Chậm → Bình thường → Nhanh → ...<br> &emsp;- Khi đang ở trạng thái nào, label trên nút hiển thị tên trạng thái đó<br>**Tương tác:**<br>&emsp;– Bấm một lần vào thẻ để lật mặt<br>&emsp;– Nhấn biểu tượng loa để nghe phát âm<br>&emsp;– Nhấn vào trạng thái “Chưa thuộc” / “Đã thuộc” để đánh dấu ghi nhớ<br>&emsp;– Khi học hết tất cả flashcard → mục “Học qua Flashcard” sẽ được đánh dấu hoàn thành |
    | **Kết quả hiển thị**      | - Flashcard hiển thị đúng loại đã chọn<br> - Tùy chọn hoạt động chính xác<br> - Có thể nghe phát âm qua nút loa<br> - Thanh điều hướng hiển thị tổng số và thứ tự thẻ<br> - Trạng thái ghi nhớ (Chưa thuộc / Đã thuộc) thay đổi đúng thao tác<br> - Mục học được đánh dấu hoàn thành sau khi hoàn tất tất cả flashcard |
    | **Trường hợp không có dữ liệu** | - Không có flashcard → Hiển thị không có dữ liệu |

#### 3.3.5 Chức năng luyện nhớ chuyển sâu { #toc-3-3-5}

??? book "Luyện nhớ chuyên sâu"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện nhớ chuyên sâu |
    | **Mô tả**                 | Chức năng giúp học viên củng cố từ vựng và ngữ pháp đã học thông qua nhiều hình thức tương tác như flashcard, card nội dung, trắc nghiệm và sắp xếp câu. |
    | **Giao diện liên quan**   | - Mục “Luyện nhớ chuyên sâu” trong chi tiết bài học<br> - Các loại giao diện tương ứng với từng dạng nội dung học:<br>&emsp;• Flashcard có thể lật và phát âm thanh<br>&emsp;• Card đơn hiển thị nghĩa và ví dụ<br>&emsp;• Trắc nghiệm lựa chọn hoặc ghép cặp<br>&emsp;• Sắp xếp từ thành câu đúng |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ danh sách khóa học → chọn một khóa học<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Trong phần bắt buộc → chọn “Luyện nhớ chuyên sâu”<br>5. Thực hiện lần lượt từng nội dung học được hệ thống hiển thị<br>6. Sau mỗi phần nội dung học sẽ có câu hỏi kiểm tra. Nếu trả lời đúng toàn bộ, học viên mới được tiếp tục học nội dung tiếp theo |
    | **Chi tiết hiển thị**     | • **Flashcard**:<br>&emsp;– Hiển thị nhiều loại flashcard (giống chức năng "Học qua Flashcard")<br>&emsp;– Cho phép nghe âm <br><br>• **Card nội dung**:<br>&emsp;– Hiển thị từ mới (Chữ Hán + Nghĩa tiếng Việt)<br>&emsp;– Ví dụ minh họa có highlight từ cần ghi nhớ<br><br>• **Trắc nghiệm**:<br>&emsp;– Dạng lựa chọn 1 đáp án đúng<br>&emsp;– Dạng ghép cặp nghĩa - chữ Hán<br>&emsp;– Dạng điền chỗ trống vào câu<br><br>• **Sắp xếp từ thành câu**:<br>&emsp;– Câu được chia nhỏ thành các từ / cụm từ<br>&emsp;– Học viên kéo thả để sắp xếp thành câu hoàn chỉnh |
    | **Kết quả hiển thị**      | - Mỗi loại bài học có tiến độ phần trăm<br> - Trả lời đúng câu hỏi kiểm tra sau mỗi mốc phần trăm mới được học tiếp<br> - Màn hình kết thúc hiển thị tiến độ hoàn thành, thông báo nếu hoàn thành toàn bộ<br>- Mục học được đánh dấu hoàn thành sau khi hoàn tất luyện nhớ chuyên sâu |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung luyện nhớ chuyên sâu -> Hiển thị không có dữ liệu |


#### 3.3.6 Chức năng bài tập củng cố { #toc-3-3-6}


??? book "Bài Tập Củng Cố"

    | Trường                 | Nội dung |
    |------------------------|---------|
    | **Tên chức năng**      | Bài Tập Củng Cố |
    | **Vai trò**            | Học viên |
    | **Mô tả**              | Học viên làm bài tập để ôn luyện và kiểm tra khả năng ghi nhớ, áp dụng từ vựng và ngữ pháp đã học. Các câu hỏi sẽ được sinh ngẫu nhiên theo bài học tương ứng và bao phủ nhiều dạng bài. Không có phần học, chỉ có phần làm bài liên tiếp các câu. Kết quả đúng/sai không ảnh hưởng tới việc được làm tiếp. |
    | **Giao diện liên quan** | Giao diện làm bài tập, giao diện hiển thị kết quả sau khi chấm |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Chọn tab bài học → chọn "Bài Tập Củng Cố"<br>4. Làm lần lượt các loại bài tập (30 câu hoặc tuỳ mỗi bài)<br>5. Sau khi làm xong, chuyển sang màn hình hiển thị kết quả |
    | **Điều kiện**          | Học viên đã vào bài học có bài tập củng cố |
    | **Kết quả hiển thị**   | 1. Giao diện bài tập: hiện từng câu hỏi, có thể chuyển qua lại giữa các câu<br>2. Giao diện kết quả:<br>&emsp;- Nếu đã chấm: hiển thị điểm và từng câu đúng/sai, trạng thái hiển thị điểm<br>&emsp;- Nếu chưa chấm: hiện thông báo “Kết quả đang được chấm. Bạn đợi một tí nhé!” và hiển thị đáp án đúng/sai một số câu tự động chấm trước, trạng thái hiển thị chưa chấm |
    | **Trường hợp không có dữ liệu** | Hiển thị thông báo: "Chưa có bài tập cho bài học này" |

    ??? info "Các loại câu hỏi"

        - **Loại 1: Viết chữ Hán từ phiên âm và nghĩa**
          Hiển thị phiên âm và nghĩa tiếng Việt, học viên dùng vẽ tay để viết chữ Hán tương ứng. Có nút "Xóa nét" và "Hoàn tác nét vẽ".

        - **Loại 2: Nối từ vựng với nghĩa tương ứng**
          Hiển thị 2 cột gồm từ tiếng Trung và nghĩa tiếng Việt, học viên dùng thao tác kéo – nối cặp tương ứng.

        - **Loại 3: Sắp xếp thành câu hoàn chỉnh**
          Các thẻ từ bị xáo trộn, học viên kéo thả theo đúng thứ tự tạo thành câu hoàn chỉnh.

        - **Loại 4: Điền từ vào chỗ trống**
          Một câu có chỗ trống và 4 lựa chọn từ, học viên chọn từ phù hợp điền vào chỗ trống.

        - **Loại 5: Chọn câu trả lời đúng**
          Câu hỏi hiển thị tiếng Trung và 4 đáp án (câu hoặc từ), học viên chọn đáp án đúng.

        - **Loại 6: Chọn câu tiếng Trung tương ứng với nghĩa tiếng Việt**
          Câu tiếng Việt và 4 câu tiếng Trung, học viên chọn câu dịch đúng nhất.

        - **Loại 7: Nghe đoạn ghi âm và chọn đáp án đúng**
          Hiển thị nút phát audio, 4 đáp án lựa chọn để xác định âm đúng hoặc nghĩa.

        - **Loại 8: Đọc to từ được yêu cầu**
          Hiển thị từ cần đọc. Học viên nhấn nút micro, ghi âm và gửi bài.

        - **Loại 9: Đặt câu với từ cho trước**
          Hiển thị 1 từ. Học viên tự viết một câu hoàn chỉnh có sử dụng từ đó.

        - **Loại 10: Đặt câu với cấu trúc cho trước**
          Hiển thị cấu trúc ngữ pháp (ví dụ: 几 + lượng từ + danh từ). Học viên viết một câu đúng mẫu.

        - **Loại 11: Nói đoạn văn gồm 3–5 câu**
          Học viên được yêu cầu trình bày 1 đoạn văn bằng lời, có thể bấm ghi âm để nói.

    ??? info "Hiển thị kết quả sau khi làm bài"

        - Nếu **chưa chấm**:
          Hiển thị thông báo `"Kết quả đang được chấm. Bạn đợi một tí nhé!"`
          Có biểu tượng đồng hồ lớn ở giữa.

        - Nếu **đã chấm**:
          - Hiển thị điểm tổng (ví dụ: `Điểm số: 1.6`)
          - Với từng câu:
            - ✅ Đúng: viền xanh, có tick xanh
            - ❌ Sai: viền đỏ, có dấu x đỏ
            - Nếu bỏ qua: dòng `"Bạn đã bỏ qua câu này!"`
            - Nếu là câu viết tay: hiển thị lại phần chữ học viên đã viết
            - Nếu là nghe – nói: có thể phát lại đoạn âm thanh hoặc xem nút ghi âm
            - Nếu là câu sắp xếp hoặc nối: hiển thị đồng thời **Đáp án của bạn** và **Đáp án đúng**


#### 3.3.7 Chức năng học từ vựng { #toc-3-3-7 }

??? book "Học từ vựng"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Học từ vựng |
    | **Mô tả**                 | Chức năng giúp học viên ghi nhớ từ mới thông qua hình ảnh, âm thanh, ví dụ minh họa và thao tác tương tác như đánh dấu đã thuộc hoặc lưu vào thư viện từ cá nhân. |
    | **Giao diện liên quan**   | - Mục “Từ vựng” trong phần “Kiến thức nền” của bài học<br> - Giao diện danh sách từ gồm nhiều thẻ từ<br> - Giao diện chi tiết từ vựng khi nhấn vào từng thẻ |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Trong phần “Kiến thức nền” → chọn “Từ vựng”<br>5. Nhấn vào một từ bất kỳ để xem thông tin chi tiết<br>6. Học viên có thể nghe phát âm, xem nghĩa, ví dụ minh họa<br>7. Có thể đánh dấu đã thuộc hoặc lưu vào thư viện |
    | **Chi tiết hiển thị**     | • Danh sách từ:<br>&emsp;– Hiển thị thẻ từ gồm: hình ảnh, chữ Hán, phiên âm, nghĩa tiếng Việt<br>&emsp;– Có nút loa để phát âm<br>&emsp;– Nhãn “Đã thuộc” nếu đã ghi nhớ<br><br>• Màn hình chi tiết từ:<br>&emsp;– Hiển thị rõ hình ảnh, chữ Hán, phiên âm, loại từ, nghĩa<br>&emsp;– Ví dụ đầy đủ: tiếng Trung + dịch tiếng Việt, highlight từ đang học<br>&emsp;– Nút loa phát âm<br>&emsp;– Nút “Đánh dấu đã thuộc” (biểu tượng bóng đèn); từ đã đánh dấu sẽ được tính vào % từ vựng đã thuộc<br>&emsp;– Nút lưu từ vào thư viện (biểu tượng ngôi sao) |
    | **Kết quả hiển thị**      | - Học viên nắm rõ nghĩa và cách dùng từ thông qua ví dụ minh họa<br> - Trạng thái “Đã thuộc” được lưu lại và hiển thị trực tiếp trên thẻ từ<br> - Từ vựng được lưu vào thư viện cá nhân nếu học viên chọn lưu |
    | **Trường hợp không có dữ liệu** | - Nếu bài học không có từ vựng → hiển thị thông báo “Không có từ vựng để học” |

#### 3.3.8 Chức năng duyệt từ vựng { #toc-3-3-8 }

??? book "Duyệt từ vựng"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Duyệt từ vựng |
    | **Mô tả**                 | Chức năng cho phép học viên lần lượt xem lại các từ vựng dưới dạng card đơn, gồm chữ Hán, nghĩa và ví dụ minh họa. Học viên có thể tự đánh giá từng từ là “Đã thuộc” hoặc “Cần học lại”. |
    | **Giao diện liên quan**   | - Mục “Từ vựng” → nút “Duyệt”<br> - Card từ không lật được, chỉ hiển thị thông tin một chiều<br> - Nút chọn “Đã thuộc” hoặc “Cần học lại” dưới mỗi card<br> - Màn hình kết thúc hiển thị số lượng đã thuộc / cần học lại |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Trong phần “Từ vựng” → chọn nút “Duyệt”<br>5. Lần lượt xem từng card nội dung từ vựng<br>6. Nhấn “Đã thuộc” hoặc “Cần học lại” để chuyển sang từ tiếp theo<br>7. Xem màn hình thống kê kết quả sau khi duyệt xong |
    | **Chi tiết hiển thị**     | • Card từ:<br>&emsp;– Hiển thị chữ Hán, nghĩa tiếng Việt<br>&emsp;– Câu ví dụ có highlight từ cần học<br>&emsp;– Thanh tiến độ theo số lượng từ<br><br>• Tác vụ:<br>&emsp;– Nhấn “Đã thuộc” để đánh dấu và chuyển tiếp<br>&emsp;– Nhấn “Cần học lại” để ghi nhận và chuyển tiếp<br><br>• Màn hình kết thúc:<br>&emsp;– Tổng kết số từ đã thuộc và cần học lại<br>&emsp;– Nút “Duyệt lại” để làm lại từ đầu |
    | **Kết quả hiển thị**      | - Những từ được chọn “Đã thuộc” sẽ được tính vào % hoàn thành từ vựng<br> - Giao diện hiển thị rõ tiến độ đã học và thống kê khi kết thúc duyệt |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ nào để duyệt → hiển thị “Không có từ vựng để duyệt” |

#### 3.3.9 Chức năng luyện tập từ vựng – chế độ Học { #toc-3-3-9 }

??? book "Luyện tập từ vựng – chế độ Học"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập từ vựng – chế độ Học |
    | **Mô tả**                 | Chức năng cho phép học viên luyện tập từ vựng theo trình tự từng bước: xem câu ví dụ chứa từ vựng, lật thẻ để xem nghĩa đầy đủ, xác nhận đã hiểu. Sau một số thẻ sẽ chèn câu hỏi trắc nghiệm để kiểm tra ghi nhớ. |
    | **Giao diện liên quan**   | - Mục “Từ vựng” → nhấn nút “Luyện tập” → chọn chế độ “Học”<br> - Giao diện flashcard:<br>&emsp;• Mặt trước: câu ví dụ có từ cần học + nút phát âm<br>&emsp;• Mặt sau: hình ảnh, nghĩa, loại từ, ví dụ dịch<br>&emsp;• Nút “Tiếp theo” để lật card<br>&emsp;• Nút “Hoàn thành” → “Tiếp tục” để chuyển sang từ khác<br> - Câu hỏi trắc nghiệm xuất hiện sau một số thẻ |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Trong phần “Từ vựng” → nhấn “Luyện tập” → chọn chế độ “Học”<br>5. Xem câu ví dụ ở mặt trước của flashcard<br>6. Nhấn “Tiếp theo” để lật thẻ hiển thị mặt sau<br>7. Xem nội dung chi tiết: từ, hình, nghĩa, dịch<br>8. Nhấn “Hoàn thành” → “Tiếp tục” để chuyển sang từ tiếp theo<br>9. Sau một số từ, hệ thống hiển thị câu hỏi trắc nghiệm kiểm tra<br>10. Trả lời đúng → tiếp tục học; nếu sai → phải thử lại |
    | **Chi tiết hiển thị**     | • Flashcard:<br>&emsp;– Mặt trước: câu tiếng Trung có từ cần học (highlight), có nút phát âm<br>&emsp;– Mặt sau: hình ảnh, nghĩa tiếng Việt, loại từ, ví dụ dịch nghĩa<br><br>• Hành động:<br>&emsp;– Nút “Tiếp theo” lật card<br>&emsp;– Nút “Hoàn thành” → hiển thị nút “Tiếp tục”<br><br>• Câu hỏi trắc nghiệm:<br>&emsp;– Dạng chọn 1 đáp án đúng<br>&emsp;– Có phản hồi đúng/sai<br>&emsp;– Sau đúng → hiển thị “Tiếp tục” |
    | **Kết quả hiển thị**      | - Khi hoàn tất toàn bộ thẻ → hiển thị “Chúc mừng đã hoàn thành phần học” |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ nào để luyện → hiển thị “Không có nội dung để luyện tập” |

#### 3.3.10 Chức năng luyện tập từ vựng – chế độ FlashCard { #toc-3-3-10 }

??? book "Luyện tập từ vựng – chế độ FlashCard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập từ vựng – chế độ FlashCard |
    | **Mô tả**                 | Chức năng giúp học viên ôn luyện từ vựng bằng flashcard có thể lật, phát âm thanh và tùy chỉnh hiển thị. Tương tự chức năng “Học qua Flashcard” nhưng không ảnh hưởng tới % tiến độ từ vựng. |
    | **Giao diện liên quan**   | - Mục “Từ vựng” → chọn “Luyện tập” → chọn “FlashCard”<br> - Giao diện flashcard giống chức năng “Học qua Flashcard”<br> - Có nút tùy chọn: Xem tất cả, Xáo trộn, Tự chạy, FlashCard 2 |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Trong phần “Từ vựng” → nhấn “Luyện tập” → chọn “FlashCard”<br>5. Lựa chọn loại flashcard<br>6. Tùy chỉnh hiển thị và thao tác luyện tập |
    | **Chi tiết hiển thị**     | • **Loại flashcard** (giống “Học qua Flashcard”):<br>&emsp;– **Flashcard loại 1**: Mặt trước hiển thị chữ Hán, phiên âm, nghĩa và ví dụ minh họa; mặt sau là dịch nghĩa ví dụ<br>&emsp;– **Flashcard loại 2**: Mặt trước hiển thị hình ảnh + nghĩa tiếng Việt; mặt sau là chữ Hán, phiên âm và ví dụ minh họa<br>&emsp;– **Flashcard loại 3**: Mặt trước hiển thị ví dụ tiếng Trung; mặt sau là nghĩa dịch, từ trọng tâm, hình minh họa và phiên âm<br><br>• **Tùy chọn:**<br>&emsp;– **Xem tất cả**: Hiển thị toàn bộ flashcard<br>&emsp;– **Xáo trộn**: Trộn ngẫu nhiên thứ tự các thẻ trong bộ hiện tại<br>&emsp;- **Tự chạy**: nút trên màn hình có vòng lặp trạng thái:<br> &emsp;&emsp;→ Nhanh → Tự chạy (thủ công, học viên tự bấm qua card) → Chậm → Bình thường → Nhanh → ...<br> – **FlashCard 2**: Chuyển sang loại flashcard thứ 2 (mặt trước là hình + nghĩa, mặt sau là chữ Hán + ví dụ)<br><br>• **Tương tác:**<br>&emsp;– Bấm 1 lần vào thẻ để lật mặt<br>&emsp;– Nhấn biểu tượng loa để nghe phát âm<br>&emsp;– Dùng thanh điều hướng để chuyển qua lại giữa các thẻ<br>&emsp;– Có hiển thị trạng thái “Đã thuộc” nếu từ vựng đó đã được học trước đó |
    | **Kết quả hiển thị**      | - Flashcard hiển thị đúng loại đã chọn<br> - Tùy chọn hoạt động chính xác theo thiết lập<br> - Có thể nghe phát âm qua nút loa<br> - Tính vào % tiến độ từ vựng<br>|
    | **Trường hợp không có dữ liệu** | - Nếu không có flashcard → hiển thị “Không có nội dung để luyện tập” |


#### 3.3.11 Chức năng luyện tập từ vựng – chế độ Thử thách { #toc-3-3-11 }

??? book "Luyện tập từ vựng – chế độ Thử thách"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập từ vựng – chế độ Thử thách |
    | **Mô tả**                 | Chức năng giúp học viên kiểm tra khả năng ghi nhớ từ vựng thông qua hình thức trắc nghiệm có thời gian giới hạn và giới hạn số lần sai. |
    | **Giao diện liên quan**   | - Mục “Từ vựng” → nhấn “Luyện tập” → chọn “Thử thách”<br> - Giao diện hiển thị từng thẻ từ có hình ảnh, chữ Hán<br> - Danh sách 4 đáp án nghĩa tiếng Việt<br> - Thanh thời gian và biểu tượng sao thể hiện số lượt sai |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Trong phần “Từ vựng” → nhấn “Luyện tập” → chọn “Thử thách”<br>5. Trả lời lần lượt các câu hỏi trắc nghiệm từ vựng<br>6. Mỗi câu có giới hạn thời gian và tối đa 3 lượt sai (3 sao)<br>7. Trả lời đúng → tiếp tục sang câu tiếp theo<br>8. Trả lời sai → mất 1 sao<br>9. Sai 3 lần hoặc hết câu hỏi → hiển thị kết quả (Win hoặc Lose) |
    | **Chi tiết hiển thị**     | • Mỗi câu hỏi gồm:<br>&emsp;– Hình ảnh minh họa + chữ Hán<br>&emsp;– 4 lựa chọn nghĩa tiếng Việt<br>&emsp;– Đáp án đúng sẽ có viền xanh, sai có viền đỏ<br><br>• Thanh công cụ:<br>&emsp;– **Đồng hồ đếm thời gian**: giới hạn mỗi câu ~10s<br>&emsp;– **Ba sao**: tượng trưng 3 lượt sai<br><br>• Kết thúc:<br>&emsp;– **Win**: Trả lời đúng toàn bộ trong giới hạn sai → hiển thị "Chúc mừng bạn đã vượt qua thử thách"<br>&emsp;– **Lose**: Sai quá 3 lần → hiển thị "Thật tiếc bạn không vượt qua được thử thách"<br>&emsp;– Có nút “Quay lại” hoặc “Làm lại” |
    | **Kết quả hiển thị**      | - Câu trả lời được phản hồi đúng/sai ngay lập tức<br> - Hiển thị sao mất và thời gian thực tế<br> - Có popup kết thúc với hai lựa chọn: quay lại hoặc làm lại<br> - Không ảnh hưởng đến % tiến độ từ vựng |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ nào để thử thách → hiển thị “Không có nội dung để luyện tập” |


#### 3.3.12 Chức năng học ngữ pháp { #toc-3-3-12 }

??? book "Học ngữ pháp"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Học ngữ pháp |
    | **Mô tả**                 | Chức năng cho phép học viên xem chi tiết các điểm ngữ pháp có trong bài học bao gồm cấu trúc, công thức, giải thích và ví dụ minh họa. Học viên có thể đánh dấu “Đã thuộc” các điểm ngữ pháp và lưu vào thư viện để xem lại sau. |
    | **Giao diện liên quan**   | - Mục “Ngữ pháp” trong bài học<br> - Danh sách ngữ pháp dạng thẻ<br> - Màn hình chi tiết hiển thị đầy đủ công thức, giải nghĩa và ví dụ<br> - Biểu tượng “Đã thuộc” và “Lưu vào thư viện” trên màn hình chi tiết |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Chọn mục “Ngữ pháp”<br>5. Xem danh sách các cấu trúc ngữ pháp<br>6. Nhấn vào một cấu trúc để xem chi tiết giải thích<br>7. Đọc công thức, ví dụ, dịch nghĩa<br>8. Nhấn biểu tượng “Đã thuộc” để đánh dấu<br>9. Nhấn biểu tượng lưu để thêm vào thư viện cá nhân<br>10. Có thể nhấn “Luyện tập” để chuyển sang bài tập luyện tập ngữ pháp tương ứng |
    | **Chi tiết hiển thị**     | • Thẻ danh sách:<br>&emsp;– Tên cấu trúc ngữ pháp bằng tiếng Trung và tiếng Việt<br><br>• Màn hình chi tiết:<br>&emsp;– Công thức ngữ pháp<br>&emsp;– Giải thích ngắn gọn cách dùng<br>&emsp;– Các ví dụ minh họa bằng tiếng Trung, phiên âm, dịch nghĩa tiếng Việt<br>&emsp;– Các điểm nhấn tô đậm, gạch dưới các thành phần quan trọng<br>&emsp;– Nút “Luyện tập” ở cuối màn hình<br>&emsp;– Biểu tượng “Đã thuộc” để đánh dấu ghi nhớ<br>&emsp;– Biểu tượng lưu vào thư viện cá nhân |
    | **Kết quả hiển thị**      | - Hiển thị đúng danh sách ngữ pháp có trong bài học<br> - Hiển thị đúng công thức, giải thích, ví dụ tương ứng<br> - Các mục đã đánh dấu “Đã thuộc” sẽ được tính vào tiến độ học tập<br> - Mục đã lưu có thể được truy xuất từ thư viện |
    | **Trường hợp không có dữ liệu** | - Nếu không có cấu trúc ngữ pháp → hiển thị “Không có nội dung để học” |


#### 3.3.13 Chức năng luyện tập ngữ pháp – chế độ Trắc nghiệm { #toc-3-3-13 }

??? book "Luyện tập ngữ pháp – chế độ Trắc nghiệm"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp – chế độ Trắc nghiệm |
    | **Mô tả**                 | Chức năng cho phép học viên luyện tập điểm ngữ pháp thông qua các câu hỏi trắc nghiệm dạng điền chỗ trống và sắp xếp câu. Kết quả chỉ mang tính luyện tập, không được lưu lại. |
    | **Giao diện liên quan**   | - Popup “Luyện tập” trong danh sách ngữ pháp hoặc chi tiết cấu trúc<br> - Màn hình câu hỏi trắc nghiệm<br> - Màn hình kết quả sau khi hoàn thành bài |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Chọn mục “Ngữ pháp”<br>5. Chọn một cấu trúc hoặc nhấn luyện tập từ danh sách<br>6. Chọn chế độ “Trắc nghiệm”<br>7. Trả lời lần lượt các câu hỏi<br>8. Nhấn “Kết thúc” để xem kết quả tổng hợp |
    | **Chi tiết hiển thị**     | • Có thể bao gồm 2 loại câu hỏi:<br>&emsp;– **Chọn đáp án đúng**: điền vào chỗ trống phù hợp với ngữ pháp<br>&emsp;– **Sắp xếp câu**: kéo thả các thành phần để tạo câu đúng theo ngữ pháp<br><br>• Mỗi câu hiển thị:<br>&emsp;– Nội dung câu hỏi<br>&emsp;– Các lựa chọn hoặc khối từ cần sắp xếp<br>&emsp;– Chỉ báo số thứ tự câu hỏi<br><br>• Khi nhấn "Kết thúc":<br>&emsp;– Hiển thị điểm số tổng (nếu có)<br>&emsp;– Danh sách câu đúng/sai<br>&emsp;– Câu bị bỏ qua được đánh dấu rõ ràng<br>&emsp;– Hiển thị đáp án đúng để học viên so sánh |
    | **Kết quả hiển thị**      | - Hiển thị toàn bộ danh sách câu hỏi đã làm kèm trạng thái đúng/sai<br> - Câu trả lời sai được tô đỏ, đúng được tô xanh<br> - Có ghi chú rõ: "Bạn đã bỏ qua câu này" nếu chưa chọn đáp án<br> - Kết quả không lưu vào hệ thống, chỉ hiển thị tại thời điểm hoàn thành |
    | **Trường hợp không có dữ liệu** | - Nếu cấu trúc ngữ pháp chưa có câu hỏi luyện tập → hiển thị “Chưa có bài luyện tập cho mục này” |


#### 3.3.14 Chức năng Luyện tập ngữ pháp – chế độ Học { #toc-3-3-14 }

??? book "Luyện tập ngữ pháp – chế độ Học"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp – chế độ Học |
    | **Mô tả**                 | Học viên học từng cấu trúc ngữ pháp thông qua flashcard trình bày ví dụ cụ thể. Sau mỗi flashcard có thể làm bài luyện tập nhanh như điền chỗ trống hoặc sắp xếp câu. |
    | **Giao diện liên quan**   | - Tab **Bài học** → tab **Ngữ pháp** → chọn mục Ngữ pháp cụ thể → nút **Luyện tập** → chọn **Học**<br> - Giao diện học FlashCard ngữ pháp<br> - Giao diện sắp xếp câu / điền từ sau mỗi flashcard<br> - Giao diện kết quả đúng/sai từng câu<br> - Giao diện tổng kết hoàn thành |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học → chọn 1 khóa học cụ thể<br>3. Vào tab **Bài học** → chọn 1 buổi học<br>4. Chọn tab **Ngữ pháp**<br>5. Chọn mục Ngữ pháp cụ thể<br>6. Nhấn nút **Luyện tập** → chọn **Học**<br>7. Học qua từng flashcard ngữ pháp<br>8. Thực hiện các bài luyện tập nhanh (trắc nghiệm / sắp xếp)<br>9. Tiếp tục đến flashcard tiếp theo cho đến khi kết thúc |
    | **Chi tiết hiển thị**     | - FlashCard hiển thị cấu trúc + ví dụ minh họa<br> - Sau mỗi thẻ có thể xuất hiện bài luyện tập nhanh (sắp xếp hoặc chọn đáp án đúng)<br> - Câu trả lời được đánh giá đúng/sai ngay sau khi trả lời<br> - Hiển thị tiến độ và nút **Tiếp tục** chuyển sang thẻ tiếp theo<br> - Hiển thị thông báo **Hoàn thành** sau khi học xong toàn bộ |
    | **Kết quả hiển thị**      | - Hiển thị đúng/sai từng câu luyện tập<br> - FlashCard đánh dấu hoàn thành<br> - Giao diện tổng kết hiển thị điểm hoặc nhận xét động viên |
    | **Trường hợp không có dữ liệu** | - Không có cấu trúc ngữ pháp → hiển thị **Không có dữ liệu để học** |


#### 3.3.16 Chức năng Luyện tập ngữ pháp – chế độ Flashcard { #toc-3-3-16 }
??? book "Luyện tập ngữ pháp – chế độ Flashcard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp – chế độ Flashcard |
    | **Mô tả**                 | Học viên ôn tập ngữ pháp bằng thẻ flashcard có thể tự đánh dấu "Đã thuộc", hỗ trợ 3 loại flashcard hiển thị (tiêu đề, ví dụ, giải nghĩa). Kết thúc sẽ có thống kê số lượng đã thuộc và cần học lại. |
    | **Giao diện liên quan**   | - Tab **Bài học** → tab **Ngữ pháp** → chọn mục Ngữ pháp cụ thể → nút **Luyện tập** → chọn **Flashcard**<br> - Màn hình flashcard<br> - Popup tuỳ chọn: Xem tất cả, Xáo trộn, Tự chạy<br> - Màn hình kết quả tổng kết sau khi duyệt |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học → chọn 1 khóa học cụ thể<br>3. Vào tab **Bài học** → chọn 1 buổi học<br>4. Chọn tab **Ngữ pháp**<br>5. Chọn mục Ngữ pháp cụ thể<br>6. Nhấn nút **Luyện tập** → chọn **Flashcard**<br>7. Xem lần lượt từng flashcard, bấm lật mặt sau nếu cần<br>8. Nhấn **Đã thuộc** hoặc **Cần học lại** để đánh dấu<br>9. Sau khi duyệt hết, hệ thống hiển thị tổng kết số lượng và phần trăm<br>10. Học viên có thể chọn **Duyệt lại** nếu muốn |
    | **Chi tiết hiển thị**     | - Có 3 loại flashcard:<br>&emsp;• **Loại 1**: Mặt trước là tiêu đề, mặt sau là ví dụ<br>&emsp;• **Loại 2**: Mặt trước là tiêu đề + ví dụ, mặt sau lặp lại ví dụ<br>&emsp;• **Loại 3**: Mặt trước là ví dụ, mặt sau là tiêu đề + dịch nghĩa<br> - Nút đánh dấu: **Đã thuộc** / **Chưa thuộc** hiển thị rõ ràng<br> - Có nút cài đặt với các tuỳ chọn: **Xem tất cả**, **Xáo trộn**, **Tự chạy** |
    | **Kết quả hiển thị**      | - Thống kê số lượng ngữ pháp **Đã thuộc** và **Cần học lại**<br> - Tính tỷ lệ phần trăm đã nắm của ngữ pháp<br> - Ghi nhận kết quả để hiển thị % nắm ngữ pháp ở danh sách tổng quan |
    | **Trường hợp không có dữ liệu** | - Hiển thị thông báo **Không có nội dung để học** |

#### 3.3.17 Chức năng duyệt ngữ pháp { #toc-3-3-17 }

??? book "Duyệt ngữ pháp"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Duyệt ngữ pháp |
    | **Mô tả** | Chức năng cho phép học viên xem lại các cấu trúc ngữ pháp ở dạng card thông tin (không phải flashcard), bao gồm công thức, giải nghĩa và ví dụ. Học viên có thể tự đánh dấu “Đã thuộc” hoặc “Cần học lại” cho từng cấu trúc. Sau khi duyệt xong sẽ có thống kê kết quả. |
    | **Giao diện liên quan** | - Mục “Ngữ pháp” trong bài học<br> - Giao diện danh sách ngữ pháp<br> - Giao diện card nội dung ngữ pháp (không lật)<br> - Giao diện thống kê sau khi duyệt |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn một buổi học<br>4. Chọn mục “Ngữ pháp”<br>5. Nhấn nút “Duyệt”<br>6. Xem từng card ngữ pháp (không lật mặt)<br>7. Với mỗi card, chọn “Đã thuộc” hoặc “Cần học lại”<br>8. Sau khi duyệt hết, hiển thị màn hình thống kê kết quả |
    | **Chi tiết hiển thị** | - Card thông tin gồm:<br>&emsp;• Tên cấu trúc (tiếng Trung & tiếng Việt)<br>&emsp;• Mô tả/giải thích ngắn gọn<br>&emsp;• Ví dụ minh họa (câu tiếng Trung + dịch tiếng Việt)<br> - Nút lựa chọn: “Đã thuộc” / “Cần học lại”<br> - Thanh tiến độ thể hiện % duyệt<br> - Giao diện kết thúc hiển thị số lượng đã thuộc và cần học lại |
    | **Kết quả hiển thị** | - Hiển thị nội dung cấu trúc đúng như dữ liệu ngữ pháp<br> - Ghi nhận được lựa chọn học viên (đã thuộc/cần học lại)<br> - Hiển thị chính xác thống kê kết quả duyệt |
    | **Trường hợp không có dữ liệu** | - Nếu không có cấu trúc ngữ pháp nào, hiển thị thông báo “Không có dữ liệu để duyệt” |

#### 3.3.18 Chức năng kỹ năng nghe { #toc-3-3-18 }

??? book "Kỹ năng nghe"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Kỹ năng nghe |
    | **Mô tả**                 | Học viên luyện tập kỹ năng nghe thông qua các đoạn hội thoại có kèm audio. Giao diện cho phép tùy chỉnh hiển thị và tốc độ phát, đồng thời có thể đánh dấu đã thuộc hoặc lưu vào thư viện để học lại sau. |
    | **Giao diện liên quan**   | - Danh sách bài nghe<br> - Màn hình chi tiết bài nghe (audio + phụ đề)<br> - Popup tùy chọn tốc độ<br> - Nút đánh dấu “Đã thuộc” và “Lưu vào thư viện” |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn kỹ năng “Nghe”<br>4. Xem danh sách các bài hội thoại → chọn một bài<br>5. Tại màn hình chi tiết bài nghe:<br>&emsp;– Nhấn nút phát audio<br>&emsp;– Có thể bật/tắt phiên âm, dịch nghĩa, phụ đề<br>&emsp;– Tùy chọn tốc độ phát (Chậm / Bình thường / Nhanh)<br>&emsp;– Đánh dấu “Đã thuộc” hoặc “Lưu vào thư viện” nếu cần<br>6. Nhấn nút “Luyện tập” để chuyển sang phần luyện tập nếu có |
    | **Chi tiết hiển thị**     | - Danh sách bài nghe gồm tiêu đề tiếng Trung và dịch nghĩa<br> - Mỗi bài có icon tai nghe thể hiện kỹ năng nghe<br> - Màn hình chi tiết bài nghe hiển thị:<br>&emsp;• Thanh phát audio (có nút play, thời gian)<br>&emsp;• Các khối thoại gồm Phiên âm, Tiếng Trung, Dịch nghĩa<br>&emsp;• Các khối thoại hiển thị theo block → **khi audio phát đến đoạn nào thì block đoạn đó được highlight màu cam**<br>&emsp;• Người dùng có thể nhấn vào từng block → player sẽ chuyển (seek) tới thời gian bắt đầu của đoạn đó và phát tiếp<br>&emsp;• Các nút chức năng: “Phiên âm”, “Dịch nghĩa”, “Phụ đề”, “Tốc độ”<br>&emsp;• Nút “Đã thuộc” và “Lưu vào thư viện” nằm góc phải phía trên |
    | **Kết quả hiển thị**      | - Audio được phát đúng nội dung hội thoại<br> - Block hội thoại được highlight theo đúng đoạn audio đang phát<br> - Khi nhấn vào block đoạn văn → player sẽ phát từ thời điểm đó<br> - Hiển thị đúng các khối thoại với cấu trúc: Phiên âm – Tiếng Trung – Dịch nghĩa<br> - Cho phép thay đổi hiển thị từng lớp thông tin<br> - Cập nhật trạng thái “Đã thuộc” và “Lưu vào thư viện” cho từng bài nghe |
    | **Trường hợp không có dữ liệu** | - Không có bài nghe trong danh sách → hiển thị thông báo “Không có bài luyện nghe nào” |


#### 3.3.19 Chức năng Luyện tập kỹ năng nghe – chế độ Học { #toc-3-3-19 }

??? book "Chức năng Luyện tập kỹ năng nghe – chế độ Học"
    | Trường                    | Nội dung |
    |--------------------------|---------|
    | **Tên chức năng**        | Luyện tập kỹ năng nghe – chế độ Học |
    | **Mô tả**                | Học viên chọn chế độ "Học" trong Luyện tập kỹ năng nghe. Hệ thống lần lượt hiển thị các phần nội dung giúp học viên ghi nhớ và rèn luyện kỹ năng nghe: nghe - hiểu - ghi nhớ - vận dụng. |
    | **Giao diện liên quan**   | Danh sách bài nghe <br> Chi tiết bài nghe <br> Popup chọn chế độ Luyện tập <br> Màn hình Học qua FlashCard <br> Màn hình Ghi nhớ nội dung <br> Màn hình Câu hỏi xếp câu <br> Màn hình hoàn thành phần học |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công <br> 2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể <br> 3. Chọn mục Kỹ năng nghe, nhấn "Luyện tập" <br> 4. Chọn chế độ "Học" trong popup chọn chế độ <br> 5. Hệ thống lần lượt hiển thị các phần học như sau: <br> &emsp; • **Phần 1**: Học qua FlashCard — tự động phát âm thanh lần đầu khi hiển thị card <br> &emsp; &emsp; - Học viên nhấn "Tiếp theo" để lật card, xem nghĩa <br> &emsp; &emsp; - Nhấn "Hoàn thành" để chuyển sang phần Ghi nhớ nội dung <br> &emsp; • **Phần 2**: Ghi nhớ nội dung — hiển thị câu tiếng Trung + nghĩa tiếng Việt, học viên nhấn "Tiếp tục" để sang câu tiếp theo <br> &emsp; • **Phần 3**: Câu hỏi **Sắp xếp thành câu có nghĩa** — học viên kéo thả hoặc chọn các từ để sắp xếp thành câu đúng <br> &emsp; &emsp; - Nhấn "Kiểm tra" để kiểm tra kết quả <br> &emsp; - Tiếp tục luyện tập các câu tiếp theo <br> 6. Sau khi hoàn thành toàn bộ nội dung, hiển thị màn hình chúc mừng hoàn thành phần học |
    | **Chi tiết hiển thị**    | - Popup chọn chế độ Luyện tập gồm: "Học", "FlashCard" <br> - Với chế độ "Học": <br> &emsp; • Phần Học qua FlashCard tự phát âm thanh lần đầu khi vào card <br> &emsp; • Học viên thao tác lần lượt qua các bước (xem nghĩa → ghi nhớ → sắp xếp câu) <br> &emsp; • Phần Sắp xếp câu có nghĩa là **bài tập dạng câu hỏi**, không phải card FlashCard <br> - Không có chức năng "Đã thuộc" hoặc "Lưu vào thư viện" trong chế độ Học |
    | **Kết quả hiển thị**     | - Hiển thị lần lượt 3 phần học: Học qua FlashCard → Ghi nhớ nội dung → Câu hỏi Sắp xếp câu <br> - Không có nút "Đã thuộc", "Lưu vào thư viện" trong toàn bộ chế độ Học <br> - Kết thúc hiển thị màn hình chúc mừng hoàn thành phần học |
    | **Trường hợp không có dữ liệu** | - Nếu bài nghe chưa có nội dung, hiển thị thông báo "Chưa có nội dung để luyện tập" |


#### 3.3.20 Chức năng Luyện tập kỹ năng nghe – chế độ FlashCard { #toc-3-3-20 }

??? book "Luyện tập kỹ năng nghe – chế độ FlashCard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập kỹ năng nghe – chế độ FlashCard |
    | **Mô tả**                 | Học viên luyện tập kỹ năng nghe thông qua FlashCard. Có 3 loại FlashCard. Mỗi FlashCard tự phát âm lần đầu khi hiển thị. Học viên có thể sử dụng nút Tự chạy để điều chỉnh cách chuyển card theo vòng lặp Nhanh → Tự chạy → Chậm → Bình thường → Nhanh. |
    | **Giao diện liên quan**   | - Danh sách bài nghe → Luyện tập → chọn chế độ FlashCard<br> - Màn hình FlashCard từng câu<br> - Nút "Tự chạy" hiển thị trạng thái hiện tại |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br> 2. Từ danh sách khóa học → chọn một khóa học cụ thể<br> 3. Vào tab **Bài học** → chọn 1 **buổi học**<br> 4. Trong buổi học → chọn tab **Kỹ năng nghe**<br> 5. Chọn bài nghe → vào màn hình chi tiết bài nghe<br> 6. Nhấn **Luyện tập** → chọn chế độ **FlashCard**<br> 7. FlashCard tự động phát âm lần đầu khi hiển thị<br> 8. Học viên có thể sử dụng các tuỳ chọn:<br> &emsp;- **Xem tất cả**: hiển thị toàn bộ FlashCard ở dạng danh sách<br> &emsp;- **Xáo trộn**: xáo trộn thứ tự FlashCard<br> &emsp;- **Tự chạy**: nút trên màn hình có vòng lặp trạng thái:<br> &emsp;&emsp;→ Nhanh → Tự chạy (thủ công, học viên tự bấm qua card) → Chậm → Bình thường → Nhanh → ...<br> &emsp;- Khi đang ở trạng thái nào, label trên nút hiển thị tên trạng thái đó<br> 9. Học viên có thể điều hướng FlashCard bằng nút trái/phải hoặc vuốt ngang<br> 10. Hoàn thành bài luyện tập hoặc thoát |
    | **Chi tiết hiển thị**     | - **FlashCard loại 1**: Mặt trước có icon phát âm thanh, mặt sau có câu tiếng Trung + dịch nghĩa<br> - **FlashCard loại 2**: Mặt trước có câu tiếng Trung + icon phát âm thanh, mặt sau có dịch nghĩa + icon phát âm thanh<br> - **FlashCard loại 3**: Mặt trước có câu tiếng Trung + icon phát âm thanh, mặt sau có dịch nghĩa<br> - Nút "Đã thuộc / Chưa thuộc" hiển thị trên mỗi card (không ảnh hưởng % tiến độ)<br> - Thanh phân trang hiển thị số lượng card (VD: 1/6)<br> - Nút "Tùy chọn" chứa các chức năng: Xem tất cả, Xáo trộn, Tự chạy (vòng lặp trạng thái) |
    | **Kết quả hiển thị**      | - FlashCard tự động phát âm khi hiển thị<br> - Học viên có thể đánh dấu Đã thuộc / Chưa thuộc<br> - Nút "Tự chạy" hoạt động theo đúng vòng lặp trạng thái<br> - Toàn bộ tuỳ chọn hoạt động chính xác theo logic yêu cầu |
    | **Trường hợp không có dữ liệu** | - Nếu không có FlashCard → hiển thị "Không có nội dung để luyện tập" |


#### 3.3.21 Chức năng kỹ năng đọc { #toc-3-3-21 }

??? book "Kỹ năng đọc"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Kỹ năng đọc |
    | **Mô tả**                 | Học viên luyện tập kỹ năng đọc qua các bài đọc tiếng Trung có sẵn. Giao diện cho phép tùy chỉnh chế độ dịch, cỡ chữ, đánh dấu "Đã thuộc", "Lưu vào thư viện", và tra nghĩa từ vựng được highlight sẵn trong bài đọc. |
    | **Giao diện liên quan**   | - Danh sách bài đọc<br> - Màn hình chi tiết bài đọc<br> - Popup "Tùy chỉnh" (chọn chế độ dịch + chỉnh cỡ chữ)<br> - Popup tra nghĩa khi nhấn vào từ highlight<br> - Nút "Đã thuộc", "Lưu vào thư viện" |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab "Bài học" → chọn kỹ năng "Đọc"<br>4. Xem danh sách các bài đọc → chọn một bài<br>5. Tại màn hình chi tiết bài đọc:<br>&emsp;– Xem bài đọc với từ được highlight sẵn<br>&emsp;– Có thể nhấn vào từ highlight để xem popup tra nghĩa<br>&emsp;– Có thể mở popup "Tùy chỉnh" để:<br>&emsp;&emsp;• Chọn chế độ dịch: "Đọc hiểu", "Dịch câu", "Dịch từ"<br>&emsp;&emsp;• Điều chỉnh cỡ chữ<br>&emsp;– Có thể đánh dấu "Đã thuộc" hoặc "Lưu vào thư viện"<br>6. Nhấn "Luyện tập" để chuyển sang phần luyện tập nếu có |
    | **Chi tiết hiển thị**     | - Danh sách bài đọc gồm tiêu đề tiếng Trung và dịch nghĩa<br> - Mỗi bài có icon "giấy + bút" thể hiện kỹ năng đọc<br> - Màn hình chi tiết bài đọc hiển thị:<br>&emsp;• Nội dung bài đọc, có từ được highlight sẵn<br>&emsp;• Popup tra nghĩa khi nhấn vào từ highlight (hiển thị: nghĩa tiếng Việt, phiên âm, audio, ảnh minh họa nếu có, ví dụ câu)<br>&emsp;• Nút "Đã thuộc", "Lưu vào thư viện" góc trên bên phải<br>&emsp;• Nút "Luyện tập" ở dưới cùng<br>&emsp;• Nút "Cài đặt" mở popup "Tùy chỉnh" với:<br>&emsp;&emsp;◦ **Chế độ dịch**:<br>&emsp;&emsp;&emsp;– **Đọc hiểu**: hiển thị toàn bộ bài đọc, không dịch câu nào sang tiếng Việt<br>&emsp;&emsp;&emsp;– **Dịch câu**: mỗi câu có thể bật/tắt dịch nghĩa câu đó<br>&emsp;&emsp;&emsp;– **Dịch từ**: từ được highlight sẵn trong bài, nhấn vào để xem popup tra nghĩa<br>&emsp;&emsp;◦ **Cỡ chữ**: chỉnh thanh trượt để thay đổi cỡ chữ của nội dung bài đọc |
    | **Kết quả hiển thị**      | - Hiển thị đúng nội dung bài đọc<br> - Có từ được highlight sẵn, popup tra nghĩa hiển thị đúng khi nhấn vào từ<br> - Thay đổi chế độ dịch và cỡ chữ theo lựa chọn của học viên<br> - Đánh dấu "Đã thuộc" sẽ cập nhật vào % tiến độ kỹ năng đọc<br> - Bài đọc được lưu vào thư viện khi chọn "Lưu vào thư viện" |
    | **Trường hợp không có dữ liệu** | - Không có bài đọc trong danh sách → hiển thị thông báo "Không có bài luyện đọc nào" |


#### 3.3.22 Chức năng luyện tập kỹ năng đọc - chế độ học { #toc-3-3-22}
??? book "Luyện tập kỹ năng đọc – chế độ Học"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập kỹ năng đọc – chế độ Học |
    | **Mô tả**                 | Học viên luyện tập đọc hiểu nội dung bài đọc thông qua chế độ học với flashcard và câu hỏi sắp xếp câu. Các từ được highlight sẵn có thể nhấn để tra nghĩa. |
    | **Giao diện liên quan**   | - Popup chọn chế độ Luyện tập (Học / Flashcard / Trắc nghiệm)<br> - Màn hình Học qua Flashcard<br> - Popup Tiếp tục (nội dung flashcard + dịch nghĩa)<br> - Màn hình Sắp xếp thành câu có nghĩa |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab **Bài học** → chọn **Kỹ năng Đọc**<br>4. Xem danh sách bài đọc → chọn một bài<br>5. Tại màn hình chi tiết bài đọc → nhấn **Luyện tập** → chọn chế độ **Học**<br>6. Luồng luyện tập:<br>&emsp;– **Flashcard:** hiển thị mặt trước (dịch hoặc tiếng Trung) → nhấn **Tiếp tục** để lật mặt sau<br>&emsp;– Mặt sau: hiển thị nội dung còn lại → nhấn **Hoàn thành** → hiện **popup Tiếp tục** gồm nội dung flashcard + dịch nghĩa → nhấn Tiếp tục mới sang từ tiếp theo<br>&emsp;– **Sắp xếp thành câu có nghĩa:** hiển thị **câu dịch nghĩa tiếng Việt** → bên dưới hiển thị **các từ tiếng Trung** (theo thứ tự ngẫu nhiên), học viên **nhấn vào từng từ** → từ đó sẽ tự động nhảy lên ô sắp xếp phía trên theo thứ tự đã chọn<br>7. Sau khi hoàn thành → màn hình chúc mừng hoàn thành phần học |
    | **Chi tiết hiển thị**     | - Các từ được highlight sẵn (dạng màu cam) → có thể nhấn vào để xem popup chi tiết từ vựng (nghĩa, phiên âm, ví dụ minh họa, hình ảnh)<br> - Flashcard:<br>&emsp;• Một mặt hiển thị câu dịch hoặc câu tiếng Trung<br>&emsp;• Nhấn **Tiếp tục** để lật mặt sau<br>&emsp;• Nhấn **Hoàn thành** → hiện popup **Tiếp tục** gồm nội dung flashcard + dịch nghĩa → nhấn tiếp mới qua từ tiếp theo<br> - Sắp xếp thành câu có nghĩa:<br>&emsp;• Dịch nghĩa câu → danh sách các từ tiếng Trung → học viên **nhấn vào từ**, từ đó sẽ tự động nhảy lên ô sắp xếp phía trên<br> - Thanh tiến độ hiển thị phần trăm hoàn thành bài luyện tập |
    | **Kết quả hiển thị**      | - Các flashcard hiển thị đúng nội dung bài đọc đã chọn<br> - Popup từ vựng hiển thị chính xác khi nhấn vào từ highlight<br> - Câu sắp xếp đúng thì được tính hoàn thành, cập nhật thanh tiến độ<br> - Hoàn thành bài luyện tập → hiển thị màn hình chúc mừng |
    | **Trường hợp không có dữ liệu** | - Không có câu nào trong bài đọc → hiển thị thông báo “Không có nội dung luyện tập” |


#### 3.3.23 Chức năng luyện tập kỹ năng đọc – chế độ FlashCard { #toc-3-3-23 }

??? book "Luyện tập kỹ năng đọc – chế độ FlashCard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập kỹ năng đọc – chế độ FlashCard |
    | **Mô tả**                 | Học viên luyện tập kỹ năng đọc thông qua FlashCard. Có 2 loại FlashCard. Học viên có thể sử dụng nút Tự chạy để điều chỉnh cách chuyển card theo vòng lặp Nhanh → Tự chạy → Chậm → Bình thường → Nhanh. |
    | **Giao diện liên quan**   | - Danh sách bài đọc → Luyện tập → chọn chế độ FlashCard<br> - Màn hình FlashCard từng câu<br> - Nút "Tự chạy" hiển thị trạng thái hiện tại |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br> 2. Từ danh sách khóa học → chọn một khóa học cụ thể<br> 3. Vào tab **Bài học** → chọn 1 **buổi học**<br> 4. Trong buổi học → chọn tab **Kỹ năng đọc**<br> 5. Chọn bài đọc → vào màn hình chi tiết bài đọc<br> 6. Nhấn **Luyện tập** → chọn chế độ **FlashCard**<br> 7. Học viên có thể sử dụng các tuỳ chọn:<br> &emsp;- **Xem tất cả**: hiển thị toàn bộ FlashCard ở dạng danh sách<br> &emsp;- **Xáo trộn**: xáo trộn thứ tự FlashCard<br> &emsp;- **Tự chạy**: nút trên màn hình có vòng lặp trạng thái:<br> &emsp;&emsp;→ Nhanh → Tự chạy (thủ công, học viên tự bấm qua card) → Chậm → Bình thường → Nhanh → ...<br> &emsp;- Khi đang ở trạng thái nào, label trên nút hiển thị tên trạng thái đó<br> 8. Học viên có thể điều hướng FlashCard bằng nút trái/phải hoặc vuốt ngang<br> 9. Hoàn thành bài luyện tập hoặc thoát |
    | **Chi tiết hiển thị**     | - **FlashCard loại 1**: Mặt trước hiển thị **tiếng Trung**, mặt sau **dịch nghĩa**<br> - **FlashCard loại 2**: Mặt trước hiển thị **dịch nghĩa**, mặt sau **tiếng Trung**<br> - Nút "Đã thuộc / Chưa thuộc" hiển thị trên mỗi card (không ảnh hưởng % tiến độ kỹ năng đọc)<br> - Thanh phân trang hiển thị số lượng card hiện có (VD: 1/9 — tuỳ vào bài học có bao nhiêu card)<br> - Nút "Tùy chọn" chứa các chức năng: Xem tất cả, Xáo trộn, Tự chạy (vòng lặp trạng thái) |
    | **Kết quả hiển thị**      | - Học viên có thể đánh dấu Đã thuộc / Chưa thuộc (không ảnh hưởng % kỹ năng đọc)<br> - Nút "Tự chạy" hoạt động theo đúng vòng lặp trạng thái<br> - Toàn bộ tuỳ chọn hoạt động chính xác theo logic yêu cầu |
    | **Trường hợp không có dữ liệu** | - Nếu không có FlashCard → hiển thị "Không có nội dung để luyện tập" |

#### 3.3.24 Chức năng Luyện tập Kỹ năng Đọc – chế độ Trắc nghiệm { #toc-3-3-24 }

??? book "Luyện tập Kỹ năng Đọc – chế độ Trắc nghiệm"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kỹ năng Đọc – chế độ Trắc nghiệm |
    | **Mô tả** | Học viên luyện tập kỹ năng đọc hiểu bài đọc thông qua chế độ Trắc nghiệm. Mỗi câu hỏi có nhiều lựa chọn, học viên chọn 1 đáp án đúng. Học viên có thể xem danh sách các câu hỏi để chọn câu làm tiếp. Sau khi làm xong toàn bộ câu hỏi và **Nộp bài** → hệ thống mới hiển thị kết quả và giải thích từng câu. |
    | **Giao diện liên quan** | - Tab **Bài học** → chọn buổi học → tab **Kỹ năng Đọc**<br> - Danh sách bài đọc → màn hình chi tiết bài đọc<br> - Nhấn **Luyện tập** → chọn chế độ **Trắc nghiệm**<br> - Màn hình câu hỏi trắc nghiệm<br> - Danh sách các câu hỏi (dạng số thứ tự 1 / 2 / 3 / ...), cho phép chọn câu bất kỳ<br> - Màn hình hiển thị kết quả sau khi Nộp bài |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học → chọn 1 khóa học cụ thể<br>3. Vào tab **Bài học** → chọn buổi học<br>4. Chọn tab **Kỹ năng Đọc**<br>5. Chọn bài đọc → vào màn hình chi tiết bài đọc<br>6. Nhấn **Luyện tập** → chọn chế độ **Trắc nghiệm**<br>7. Lần lượt trả lời từng câu hỏi:<br>&emsp;– Đọc câu hỏi + các lựa chọn đáp án<br>&emsp;– Chọn 1 đáp án đúng<br>8. Có thể mở **danh sách các câu hỏi** (dạng số thứ tự 1/2/3/...) → chọn sang câu bất kỳ để làm tiếp<br>9. Sau khi trả lời xong tất cả câu → nhấn **Nộp bài**<br>10. Sau khi Nộp bài → hệ thống hiển thị kết quả:<br>&emsp;– Hiển thị đúng/sai từng câu<br>&emsp;– Hiển thị block **Giải thích** cho từng câu<br>11. Học viên có thể duyệt lại từng câu để xem giải thích |
    | **Chi tiết hiển thị** | - Câu hỏi dạng **nhiều lựa chọn** → chọn 1 đáp án đúng<br> - Màn hình mỗi câu hiển thị:<br>&emsp;• Câu hỏi (text tiếng Trung hoặc dịch nghĩa)<br>&emsp;• Danh sách các đáp án dạng button<br> - **Trước khi Nộp bài:**<br>&emsp;• Học viên chỉ có thể chọn đáp án<br>&emsp;• Không hiển thị Giải thích<br> - **Danh sách câu hỏi:**<br>&emsp;• Mở được menu danh sách các câu hỏi (dạng số thứ tự 1 / 2 / 3 / ...)<br>&emsp;• Có thể chọn sang câu bất kỳ để làm tiếp<br> - **Sau khi Nộp bài:**<br>&emsp;• Hiển thị kết quả đúng/sai từng câu (màu xanh/đỏ)<br>&emsp;• Hiển thị block **Giải thích** bên dưới mỗi câu<br> - Thanh phân trang + điều hướng dưới cùng có nút **Quay lại**, **Tiếp theo**, **Nộp bài** (ở câu cuối) |
    | **Kết quả hiển thị** | - Học viên làm xong toàn bộ câu hỏi → nhấn **Nộp bài** → mới hiển thị kết quả<br> - Mỗi câu sau khi Nộp bài sẽ hiển thị **Đúng/Sai** + **Giải thích** rõ ràng<br> - Có thể duyệt lại từng câu để xem lại kết quả + giải thích<br> - Danh sách câu hỏi (menu số thứ tự) hoạt động chính xác<br> - Không có nút **Đã thuộc** / **Lưu** trong chế độ Trắc nghiệm |
    | **Trường hợp không có dữ liệu** | - Nếu bài đọc không có câu hỏi → hiển thị **Không có nội dung luyện tập** |


### 3.4 Chức năng làm bài kiểm tra { #toc-3-4}

??? book "Làm bài kiểm tra"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Làm bài kiểm tra |
    | **Mô tả**                 | Học viên làm bài kiểm tra tổng hợp tại lớp với nhiều loại câu hỏi. Thời gian làm bài sẽ được tính từ lúc vào bài, nếu thoát ra thì sẽ tạm dừng và được tính tiếp khi vào lại. Kết thúc bài kiểm tra sẽ hiển thị kết quả và điểm số. |
    | **Giao diện liên quan**   | - Tab **Kiểm tra** trong lớp học<br> - Danh sách các bài kiểm tra<br> - Màn hình làm bài kiểm tra<br> - Màn hình kết quả kiểm tra |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br> 2. Từ danh sách khóa học → chọn một khóa học cụ thể<br> 3. Vào tab **Kiểm tra**<br> 4. Chọn một bài kiểm tra trong danh sách<br> 5. Nhấn vào bài kiểm tra → vào màn hình làm bài<br> &emsp;- Thời gian làm bài bắt đầu tính ngay khi vào bài<br> &emsp;- Nếu học viên thoát ra (back hoặc đóng app) → thời gian tạm dừng<br> &emsp;- Vào lại bài kiểm tra → tiếp tục tính thời gian từ chỗ đã dừng<br> 6. Làm lần lượt các câu hỏi (thứ tự câu hỏi cố định)<br> 7. Sau khi làm xong → hiển thị màn hình kết quả:<br> &emsp;- Điểm số<br> &emsp;- Thời gian làm bài<br> &emsp;- Danh sách câu hỏi → trạng thái đúng/sai, nội dung từng câu<br> 8. Có thể xem lại từng câu đã làm |
    | **Chi tiết hiển thị**     | - Danh sách bài kiểm tra:<br> &emsp;• Tên bài kiểm tra<br> &emsp;• Trạng thái: chưa hoàn thành / điểm số hiện tại<br> &emsp;• Thanh tiến độ điểm<br> - Màn hình làm bài:<br> &emsp;• Hiển thị tổng số câu và số thứ tự câu hiện tại (VD: 1/40)<br> &emsp;• Đồng hồ đếm thời gian đang chạy<br> &emsp;• Nút "Xem hướng dẫn" nếu có<br> &emsp;• Câu hỏi và các loại đáp án tương ứng (chi tiết bên dưới)<br> &emsp;• Nút điều hướng câu trước / sau<br> - Màn hình kết quả:<br> &emsp;• Điểm số tổng kết (biểu đồ vòng, màu sắc theo mức độ)<br> &emsp;• Thời gian làm bài<br> &emsp;• Danh sách từng câu → trạng thái đúng/sai, đáp án của học viên, đáp án đúng |
    | **Các loại câu hỏi hỗ trợ** | - **Loại 1**: Viết chữ Hán từ phiên âm và nghĩa → vẽ tay chữ Hán, có nút "Xóa nét", "Hoàn tác nét vẽ"<br> - **Loại 2**: Nối từ vựng với nghĩa tương ứng → kéo – nối cặp từ và nghĩa<br> - **Loại 3**: Sắp xếp thành câu hoàn chỉnh → kéo thả thẻ từ theo thứ tự đúng<br> - **Loại 4**: Điền từ vào chỗ trống → chọn từ phù hợp từ 4 lựa chọn<br> - **Loại 5**: Chọn câu trả lời đúng → chọn 1 trong 4 đáp án<br> - **Loại 6**: Chọn câu tiếng Trung tương ứng với nghĩa tiếng Việt → chọn câu dịch đúng nhất trong 4 lựa chọn<br> - **Loại 7**: Nghe đoạn ghi âm và chọn đáp án đúng → nghe audio, chọn đáp án đúng trong 4 lựa chọn<br> - **Loại 8**: Đọc to từ được yêu cầu → hiển thị từ cần đọc, ghi âm giọng đọc của học viên<br> - **Loại 9**: Đặt câu với từ cho trước → nhập câu có sử dụng từ cho trước<br> - **Loại 10**: Đặt câu với cấu trúc cho trước → nhập câu đúng theo cấu trúc ngữ pháp cho sẵn<br> - **Loại 11**: Nói đoạn văn gồm 3–5 câu → ghi âm đoạn văn học viên nói |
    | **Kết quả hiển thị**      | - Hiển thị tổng điểm<br> - Thời gian làm bài<br> - Danh sách từng câu với trạng thái đúng/sai<br> - Xem lại chi tiết từng câu đã làm |
    | **Trường hợp không có dữ liệu** | - Nếu bài kiểm tra không có dữ liệu → hiển thị "Bài kiểm tra chưa có nội dung" |


### 3.5 Chức năng quản lý thư viện học tập { #toc-3-5}

#### 3.5.1 Chức năng Thư viện học tập { #toc-3-5-1 }

??? book "Thư viện học tập"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Thư viện học tập |
    | **Mô tả**                 | Thư viện học tập là nơi học viên có thể ôn tập lại toàn bộ kiến thức đã học, bao gồm: từ vựng, ngữ pháp, kỹ năng nghe, kỹ năng đọc. Học viên có thể vào thư viện từ màn hình "Cùng học kiến thức mới". Tiến độ Thư viện học tập hiển thị ngoài màn hình chính, được tính trung bình cộng từ 4 mục: % Từ vựng, % Ngữ pháp, % Nghe, % Đọc. |
    | **Giao diện liên quan**   | - Màn hình chính **Cùng học kiến thức mới** → box Thư viện học tập<br> - Màn hình Thư viện học tập (các tab: Kiến thức / Kỹ năng / Tiến trình)<br> - Giao diện danh sách từ vựng, ngữ pháp, bài đọc, bài nghe đã lưu |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình chính **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào giao diện Thư viện học tập<br>4. Xem tab **Kiến thức** → gồm các mục Từ vựng, Ngữ pháp<br>5. Xem tab **Kỹ năng** → gồm các mục Nghe, Đọc<br>6. Tiến độ % hiển thị tương ứng từng mục<br>7. Học viên có thể nhấn **Chi tiết** để vào từng mục và học lại hoặc luyện tập |
    | **Chi tiết hiển thị**     | - Box Thư viện học tập trên màn chính hiển thị % tiến độ tổng hợp<br> - % tiến độ Thư viện học tập = ( % Từ vựng + % Ngữ pháp + % Nghe + % Đọc ) / 4<br> - Các mục trong Thư viện có hiển thị % riêng<br> - Khi học viên đánh dấu "Đã thuộc" hoặc hoàn thành các bài luyện tập → % các mục tương ứng sẽ được cập nhật, từ đó cập nhật lại % tổng của Thư viện học tập ngoài màn chính |
    | **Kết quả hiển thị**      | - Box Thư viện học tập hiển thị đúng % trung bình của 4 mục<br> - % từng mục hiển thị chính xác theo trạng thái học tập của học viên<br> - Học viên có thể vào từng mục để tiếp tục học và cập nhật tiến độ |
    | **Trường hợp không có dữ liệu** | - Nếu học viên chưa học gì hoặc chưa lưu bất kỳ nội dung nào → % sẽ hiển thị 0% |


#### 3.5.2 Chức năng học từ vựng trong Thư viện học tập { #toc-3-5-2}

??? book "Học từ vựng trong Thư viện học tập"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Học từ vựng trong Thư viện học tập |
    | **Mô tả**                 | Chức năng giúp học viên ôn lại và ghi nhớ từ vựng đã lưu vào Thư viện học tập. Học viên có thể duyệt hoặc luyện tập các từ đã lưu, với giao diện rõ ràng, dễ thao tác. |
    | **Giao diện liên quan**   | - Màn hình Thư viện học tập → mục "Từ vựng"<br> - Danh sách từ vựng dạng tag và danh sách chi tiết<br> - Popup xem nhanh từ vựng khi nhấn vào tag ở màn hình Thư viện<br> - Màn hình "Chi tiết từ vựng" khi nhấn **Chi tiết** |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình chính → nhấn vào **Thư viện học tập**<br>3. Chọn tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục "Từ vựng":<br>&emsp;• Xem % từ đã thuộc<br>&emsp;• Nhấn vào tag từ vựng → popup hiển thị từ vựng (hình ảnh, phiên âm, nghĩa, ví dụ, loa phát âm, nút "Đã thuộc" và "Lưu")<br>&emsp;• Nhấn **Chi tiết** → vào màn hình danh sách từ vựng<br>5. Trên màn hình danh sách từ vựng:<br>&emsp;• Hiển thị danh sách thẻ từ: hình ảnh, chữ Hán, phiên âm, nghĩa tiếng Việt, nút loa phát âm, trạng thái "Đã thuộc" (nếu có)<br>&emsp;• Nhấn vào từng thẻ từ → vào màn hình **Chi tiết từ vựng**<br>6. Màn hình chi tiết từ vựng:<br>&emsp;• Hiển thị: hình ảnh, chữ Hán, phiên âm, loại từ, nghĩa, ví dụ (tiếng Trung + tiếng Việt), từ được highlight trong ví dụ<br>&emsp;• Có nút **Lưu** (biểu tượng ngôi sao) và **Đã thuộc** (biểu tượng bóng đèn)<br>7. Học viên có thể chọn chế độ **Duyệt** hoặc **Luyện tập** từ các nút ở cuối màn hình |
    | **Chi tiết hiển thị**     | • Mục "Từ vựng" Thư viện học tập:<br>&emsp;– Thanh % tiến độ<br>&emsp;– Dòng tag từ vựng (tối đa 5 từ, đã thuộc được highlight cam)<br>&emsp;– Nút **Chi tiết**<br><br>• Popup khi nhấn tag từ:<br>&emsp;– Chữ Hán + nghĩa tiếng Việt + hình ảnh<br>&emsp;– Ví dụ (giống màn hình chi tiết từ vựng)<br>&emsp;– Nút loa phát âm<br>&emsp;– Nút **Đã thuộc / Chưa thuộc**<br>&emsp;– Nút **Lưu** (ngôi sao)<br><br>• Danh sách từ vựng (sau khi nhấn Chi tiết):<br>&emsp;– Thẻ từ gồm: hình ảnh, chữ Hán, phiên âm, nghĩa, loa phát âm, trạng thái "Đã thuộc"<br>&emsp;– Nhấn vào thẻ → vào màn hình chi tiết từ vựng<br><br>• Màn hình chi tiết từ vựng:<br>&emsp;– Chữ Hán, nghĩa, phiên âm, loại từ<br>&emsp;– Ví dụ có highlight từ<br>&emsp;– Nút loa phát âm<br>&emsp;– Nút "Đã thuộc" và "Lưu" nằm trên góc phải màn hình |
    | **Kết quả hiển thị**      | - Học viên có thể nhanh chóng xem, ôn lại các từ vựng đã lưu<br> - Popup từ vựng tiện lợi khi nhấn tag<br> - Trạng thái **Đã thuộc** và **Lưu** được đồng bộ giữa các màn hình<br> - % tiến độ **Từ vựng** được cập nhật theo trạng thái "Đã thuộc" |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ nào được lưu → hiển thị "Không có từ vựng nào trong thư viện" |

#### 3.5.3 Chức năng Duyệt từ vựng trong Thư viện học tập { #toc-3-5-3 }

??? book "Duyệt từ vựng trong Thư viện học tập"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Duyệt từ vựng trong Thư viện học tập |
    | **Mô tả**                 | Chức năng cho phép học viên lần lượt xem lại các từ vựng đã lưu trong Thư viện học tập dưới dạng card đơn, gồm chữ Hán, nghĩa và ví dụ minh họa. Học viên có thể tự đánh giá từng từ là “Đã thuộc” hoặc “Cần học lại”. |
    | **Giao diện liên quan**   | - Mục **Từ vựng** trong **Thư viện học tập** → nhấn **Chi tiết** → màn hình danh sách từ vựng<br> - Màn hình danh sách từ vựng: có nút **Duyệt** và **Luyện tập** ở cuối màn hình<br> - Card từ không lật được, chỉ hiển thị thông tin một chiều<br> - Nút chọn **Đã thuộc** hoặc **Cần học lại** dưới mỗi card<br> - Màn hình kết thúc hiển thị số lượng **Đã thuộc** / **Cần học lại** |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Từ vựng** → nhấn nút **Chi tiết**<br>5. Vào màn hình **Danh sách từ vựng** → nhấn nút **Duyệt** ở cuối màn hình<br>6. Lần lượt xem từng card nội dung từ vựng<br>7. Nhấn **Đã thuộc** hoặc **Cần học lại** để chuyển sang từ tiếp theo<br>8. Xem màn hình thống kê kết quả sau khi duyệt xong |
    | **Chi tiết hiển thị**     | • Card từ:<br>&emsp;– Hiển thị chữ Hán, nghĩa tiếng Việt<br>&emsp;– Câu ví dụ có highlight từ cần học<br>&emsp;– Thanh tiến độ theo số lượng từ<br><br>• Tác vụ:<br>&emsp;– Nhấn **Đã thuộc** để đánh dấu và chuyển tiếp<br>&emsp;– Nhấn **Cần học lại** để ghi nhận và chuyển tiếp<br><br>• Màn hình kết thúc:<br>&emsp;– Tổng kết số từ **Đã thuộc** và **Cần học lại**<br>&emsp;– Nút **Duyệt lại** để làm lại từ đầu |
    | **Kết quả hiển thị**      | - Những từ được chọn **Đã thuộc** sẽ được tính vào % hoàn thành mục **Từ vựng** trong Thư viện học tập<br> - Giao diện hiển thị rõ tiến độ đã học và thống kê khi kết thúc duyệt |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ nào để duyệt → hiển thị **Không có từ vựng để duyệt** |


#### 3.5.4 Chức năng Luyện tập từ vựng trong Thư viện học tập – chế độ Học { #toc-3-5-4 }

??? book "Luyện tập từ vựng trong Thư viện học tập – chế độ Học"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập từ vựng trong Thư viện học tập – chế độ Học |
    | **Mô tả**                 | Chức năng cho phép học viên luyện tập từ vựng theo trình tự từng bước: xem câu ví dụ chứa từ vựng, lật thẻ để xem nghĩa đầy đủ, xác nhận đã hiểu. Sau một số thẻ sẽ chèn câu hỏi trắc nghiệm để kiểm tra ghi nhớ. |
    | **Giao diện liên quan**   | - Mục **Từ vựng** trong **Thư viện học tập** → nhấn **Chi tiết** → màn hình danh sách từ vựng → nhấn nút **Luyện tập** → chọn chế độ **Học**<br> - Giao diện flashcard:<br>&emsp;• Mặt trước: câu ví dụ có từ cần học + nút phát âm<br>&emsp;• Mặt sau: hình ảnh, nghĩa, loại từ, ví dụ dịch<br>&emsp;• Nút **Tiếp theo** để lật card<br>&emsp;• Nút **Hoàn thành** → **Tiếp tục** để chuyển sang từ khác<br> - Câu hỏi trắc nghiệm xuất hiện sau một số thẻ |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Từ vựng** → nhấn **Chi tiết**<br>5. Vào màn hình **Danh sách từ vựng** → nhấn nút **Luyện tập** ở cuối màn hình<br>6. Chọn chế độ **Học**<br>7. Xem câu ví dụ ở mặt trước của flashcard<br>8. Nhấn **Tiếp theo** để lật thẻ hiển thị mặt sau<br>9. Xem nội dung chi tiết: từ, hình, nghĩa, dịch<br>10. Nhấn **Hoàn thành** → **Tiếp tục** để chuyển sang từ tiếp theo<br>11. Sau một số từ, hệ thống hiển thị câu hỏi trắc nghiệm kiểm tra<br>12. Trả lời đúng → tiếp tục học; nếu sai → phải thử lại |
    | **Chi tiết hiển thị**     | • Flashcard:<br>&emsp;– Mặt trước: câu tiếng Trung có từ cần học (highlight), có nút phát âm<br>&emsp;– Mặt sau: hình ảnh, nghĩa tiếng Việt, loại từ, ví dụ dịch nghĩa<br><br>• Hành động:<br>&emsp;– Nút **Tiếp theo** lật card<br>&emsp;– Nút **Hoàn thành** → hiển thị nút **Tiếp tục**<br><br>• Câu hỏi trắc nghiệm:<br>&emsp;– Dạng chọn 1 đáp án đúng<br>&emsp;– Có phản hồi đúng/sai<br>&emsp;– Sau đúng → hiển thị **Tiếp tục** |
    | **Kết quả hiển thị**      | - Khi hoàn tất toàn bộ thẻ → hiển thị **Chúc mừng đã hoàn thành phần học** |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ nào để luyện → hiển thị **Không có nội dung để luyện tập** |

#### 3.5.5 Chức năng Luyện tập từ vựng trong Thư viện học tập – chế độ FlashCard { #toc-3-5-5 }

??? book "Luyện tập từ vựng trong Thư viện học tập – chế độ FlashCard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập từ vựng trong Thư viện học tập – chế độ FlashCard |
    | **Mô tả**                 | Chức năng giúp học viên ôn luyện từ vựng bằng flashcard có thể lật, phát âm thanh và tùy chỉnh hiển thị. Tương tự chức năng “Học qua Flashcard” nhưng không ảnh hưởng tới % tiến độ từ vựng. |
    | **Giao diện liên quan**   | - Mục **Từ vựng** trong **Thư viện học tập** → nhấn **Chi tiết** → màn hình danh sách từ vựng → nhấn nút **Luyện tập** → chọn chế độ **FlashCard**<br> - Giao diện flashcard giống chức năng “Học qua Flashcard”<br> - Có nút tùy chọn: **Xem tất cả**, **Xáo trộn**, **Tự chạy**, **FlashCard 2** |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Từ vựng** → nhấn **Chi tiết**<br>5. Vào màn hình **Danh sách từ vựng** → nhấn nút **Luyện tập** ở cuối màn hình<br>6. Chọn chế độ **FlashCard**<br>7. Lựa chọn loại flashcard<br>8. Tùy chỉnh hiển thị và thao tác luyện tập |
    | **Chi tiết hiển thị**     | • **Loại flashcard**:<br>&emsp;– **Flashcard loại 1**: Mặt trước hiển thị chữ Hán, phiên âm, nghĩa và ví dụ minh họa; mặt sau là dịch nghĩa ví dụ<br>&emsp;– **Flashcard loại 2**: Mặt trước hiển thị hình ảnh + nghĩa tiếng Việt; mặt sau là chữ Hán, phiên âm và ví dụ minh họa<br>&emsp;– **Flashcard loại 3**: Mặt trước hiển thị ví dụ tiếng Trung; mặt sau là nghĩa dịch, từ trọng tâm, hình minh họa và phiên âm<br><br>• **Tùy chọn:**<br>&emsp;– **Xem tất cả**: Hiển thị toàn bộ flashcard dạng danh sách dọc (list view)<br>&emsp;– **Xáo trộn**: Trộn ngẫu nhiên thứ tự các thẻ trong bộ hiện tại<br>&emsp;– **Tự chạy**: Flashcard lật tự động theo thời gian mặc định<br>&emsp;– **FlashCard 2**: Chuyển sang loại flashcard thứ 2 |
    | **Kết quả hiển thị**      | - Flashcard hiển thị đúng loại đã chọn<br> - Tùy chọn hoạt động chính xác theo thiết lập<br> - Có thể nghe phát âm qua nút loa<br> - Không tính vào % tiến độ từ vựng<br> - Không đánh dấu hoàn thành phần học |
    | **Trường hợp không có dữ liệu** | - Nếu không có flashcard → hiển thị **Không có nội dung để luyện tập** |

#### 3.5.6 Chức năng Luyện tập từ vựng trong Thư viện học tập – chế độ Thử thách { #toc-3-5-6 }

??? book "Luyện tập từ vựng trong Thư viện học tập – chế độ Thử thách"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập từ vựng trong Thư viện học tập – chế độ Thử thách |
    | **Mô tả**                 | Chức năng giúp học viên kiểm tra khả năng ghi nhớ từ vựng thông qua hình thức trắc nghiệm có thời gian giới hạn và giới hạn số lần sai. |
    | **Giao diện liên quan**   | - Mục **Từ vựng** trong **Thư viện học tập** → nhấn **Chi tiết** → màn hình danh sách từ vựng → nhấn nút **Luyện tập** → chọn chế độ **Thử thách**<br> - Giao diện hiển thị từng thẻ từ có hình ảnh, chữ Hán<br> - Danh sách 4 đáp án nghĩa tiếng Việt<br> - Thanh thời gian và biểu tượng sao thể hiện số lượt sai |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Từ vựng** → nhấn **Chi tiết**<br>5. Vào màn hình **Danh sách từ vựng** → nhấn nút **Luyện tập** ở cuối màn hình<br>6. Chọn chế độ **Thử thách**<br>7. Trả lời lần lượt các câu hỏi trắc nghiệm từ vựng<br>8. Mỗi câu có giới hạn thời gian và tối đa 3 lượt sai (3 sao)<br>9. Trả lời đúng → tiếp tục sang câu tiếp theo<br>10. Trả lời sai → mất 1 sao<br>11. Sai 3 lần hoặc hết câu hỏi → hiển thị kết quả (Win hoặc Lose) |
    | **Chi tiết hiển thị**     | • Mỗi câu hỏi gồm:<br>&emsp;– Hình ảnh minh họa + chữ Hán<br>&emsp;– 4 lựa chọn nghĩa tiếng Việt<br>&emsp;– Đáp án đúng có viền xanh, sai có viền đỏ<br><br>• Thanh công cụ:<br>&emsp;– **Đồng hồ đếm thời gian** (~10s/câu)<br>&emsp;– **Ba sao**: tượng trưng 3 lượt sai<br><br>• Kết thúc:<br>&emsp;– **Win**: Trả lời đúng toàn bộ trong giới hạn sai → hiển thị **Chúc mừng bạn đã vượt qua thử thách**<br>&emsp;– **Lose**: Sai quá 3 lần → hiển thị **Thật tiếc bạn không vượt qua được thử thách**<br>&emsp;– Có nút **Quay lại** hoặc **Làm lại** |
    | **Kết quả hiển thị**      | - Câu trả lời được phản hồi đúng/sai ngay lập tức<br> - Hiển thị sao mất và thời gian thực tế<br> - Có popup kết thúc với 2 lựa chọn: **Quay lại** hoặc **Làm lại**<br> - Không ảnh hưởng đến % tiến độ từ vựng |
    | **Trường hợp không có dữ liệu** | - Nếu không có từ nào để thử thách → hiển thị **Không có nội dung để luyện tập** |

#### 3.5.7 Chức năng Học Ngữ pháp trong Thư viện học tập { #toc-3-5-7 }

??? book "Học Ngữ pháp trong Thư viện học tập"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Học Ngữ pháp trong Thư viện học tập |
    | **Mô tả**                 | Chức năng giúp học viên ôn lại và ghi nhớ các điểm ngữ pháp đã lưu vào Thư viện học tập. Học viên có thể xem nhanh hoặc vào chi tiết để xem đầy đủ mô tả và ví dụ minh họa. |
    | **Giao diện liên quan**   | - Mục **Ngữ pháp** trong **Thư viện học tập**<br> - Danh sách ngữ pháp (có % tiến độ)<br> - Popup xem nhanh khi nhấn vào từng item ngữ pháp trong danh sách<br> - Màn hình **Danh sách ngữ pháp** khi nhấn **Chi tiết**<br> - Màn hình **Chi tiết ngữ pháp** khi nhấn vào 1 item trong danh sách ngữ pháp |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Ngữ pháp** → xem % tiến độ và danh sách ngữ pháp<br>5. Nhấn vào 1 item ngữ pháp → hiển thị popup mô tả ngắn + ví dụ<br>6. Nhấn **Chi tiết** → vào màn hình **Danh sách ngữ pháp**<br>7. Từ danh sách → nhấn vào 1 item → vào **Chi tiết ngữ pháp**<br>8. Tại màn hình **Chi tiết ngữ pháp**:<br>&emsp;– Xem mô tả chi tiết, cấu trúc ngữ pháp<br>&emsp;– Xem các ví dụ minh họa (có highlight từ khóa)<br>&emsp;– Nhấn **Đã thuộc** hoặc **Lưu** (icon góc trên phải)<br>&emsp;– Có nút **Luyện tập** ở cuối màn hình |
    | **Chi tiết hiển thị**     | • Mục **Ngữ pháp** Thư viện học tập:<br>&emsp;– Thanh % tiến độ<br>&emsp;– Danh sách ngữ pháp dạng card (hiển thị tiêu đề + phụ đề)<br>&emsp;– Nút **Chi tiết**<br><br>• Popup khi nhấn item:<br>&emsp;– Tiêu đề ngữ pháp<br>&emsp;– Mô tả ngắn<br>&emsp;– Ví dụ minh họa<br><br>• Màn hình **Danh sách ngữ pháp**:<br>&emsp;– Danh sách các item ngữ pháp<br>&emsp;– Nhấn vào item → vào màn hình chi tiết<br><br>• Màn hình **Chi tiết ngữ pháp**:<br>&emsp;– Mô tả đầy đủ, cấu trúc sử dụng<br>&emsp;– Danh sách ví dụ (tiếng Trung + phiên âm + dịch tiếng Việt)<br>&emsp;– Các từ trọng tâm được highlight<br>&emsp;– Nút **Đã thuộc** (biểu tượng bóng đèn) góc trên phải → đánh dấu đã học<br>&emsp;– Nút **Lưu** (biểu tượng ngôi sao) góc trên phải → lưu hoặc bỏ lưu<br>&emsp;– Nút **Luyện tập** ở cuối màn hình |
    | **Kết quả hiển thị**      | - Học viên có thể dễ dàng tra cứu và học lại các điểm ngữ pháp đã lưu<br> - Popup giúp xem nhanh không cần chuyển màn hình<br> - Màn hình chi tiết đầy đủ thông tin giúp học sâu<br> - Trạng thái **Đã thuộc** và **Lưu** được đồng bộ giữa các màn hình<br> - Nút **Luyện tập** có thể dẫn sang các chế độ luyện tập tương ứng |
    | **Trường hợp không có dữ liệu** | - Nếu không có ngữ pháp nào được lưu → hiển thị **Không có nội dung ngữ pháp trong thư viện** |

#### 3.5.8 Chức năng Luyện tập ngữ pháp trong Thư viện học tập – chế độ Trắc nghiệm { #toc-3-5-8 }

??? book "Luyện tập ngữ pháp trong Thư viện học tập – chế độ Trắc nghiệm"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp trong Thư viện học tập – chế độ Trắc nghiệm |
    | **Mô tả**                 | Chức năng cho phép học viên luyện tập điểm ngữ pháp đã lưu vào Thư viện học tập thông qua các câu hỏi trắc nghiệm dạng điền chỗ trống và sắp xếp câu. Kết quả chỉ mang tính luyện tập, không được lưu lại. |
    | **Giao diện liên quan**   | - Popup **Luyện tập** trong **Chi tiết ngữ pháp** trong Thư viện học tập<br> - Màn hình câu hỏi trắc nghiệm<br> - Màn hình kết quả sau khi hoàn thành bài |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Ngữ pháp** → nhấn **Chi tiết**<br>5. Từ danh sách ngữ pháp → nhấn vào 1 item → vào **Chi tiết ngữ pháp**<br>6. Tại màn hình **Chi tiết ngữ pháp** → nhấn **Luyện tập** → chọn chế độ **Trắc nghiệm**<br>7. Trả lời lần lượt các câu hỏi<br>8. Nhấn **Kết thúc** để xem kết quả tổng hợp |
    | **Chi tiết hiển thị**     | • Có thể bao gồm 2 loại câu hỏi:<br>&emsp;– **Chọn đáp án đúng**: điền vào chỗ trống phù hợp với ngữ pháp<br>&emsp;– **Sắp xếp câu**: kéo thả các thành phần để tạo câu đúng theo ngữ pháp<br><br>• Mỗi câu hiển thị:<br>&emsp;– Nội dung câu hỏi<br>&emsp;– Các lựa chọn hoặc khối từ cần sắp xếp<br>&emsp;– Chỉ báo số thứ tự câu hỏi<br><br>• Khi nhấn **Kết thúc**:<br>&emsp;– Hiển thị điểm số tổng (nếu có)<br>&emsp;– Danh sách câu đúng/sai<br>&emsp;– Câu bị bỏ qua được đánh dấu rõ ràng<br>&emsp;– Hiển thị đáp án đúng để học viên so sánh |
    | **Kết quả hiển thị**      | - Hiển thị toàn bộ danh sách câu hỏi đã làm kèm trạng thái đúng/sai<br> - Câu trả lời sai được tô đỏ, đúng được tô xanh<br> - Có ghi chú rõ: **Bạn đã bỏ qua câu này** nếu chưa chọn đáp án<br> - Kết quả không lưu vào hệ thống, chỉ hiển thị tại thời điểm hoàn thành |
    | **Trường hợp không có dữ liệu** | - Nếu cấu trúc ngữ pháp chưa có câu hỏi luyện tập → hiển thị **Chưa có bài luyện tập cho mục này** |

#### 3.5.9 Chức năng Luyện tập Ngữ pháp trong Thư viện học tập – chế độ Học { #toc-3-5-9 }

??? book "Luyện tập Ngữ pháp trong Thư viện học tập – chế độ Học"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập Ngữ pháp trong Thư viện học tập – chế độ Học |
    | **Mô tả**                 | Học viên học các cấu trúc ngữ pháp đã lưu trong Thư viện học tập thông qua flashcard trình bày ví dụ cụ thể. Sau mỗi flashcard có thể làm bài luyện tập nhanh như điền chỗ trống hoặc sắp xếp câu. |
    | **Giao diện liên quan**   | - Tab **Kiến thức** → mục **Ngữ pháp** → **Danh sách ngữ pháp** → nút **Luyện tập**<br> - Giao diện học FlashCard ngữ pháp<br> - Giao diện sắp xếp câu / điền từ sau mỗi flashcard<br> - Giao diện kết quả đúng/sai từng câu<br> - Giao diện tổng kết hoàn thành |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Ngữ pháp** → nhấn **Chi tiết** để vào **Danh sách ngữ pháp**<br>5. Tại màn hình **Danh sách ngữ pháp** → nhấn nút **Luyện tập**<br>6. Học qua lần lượt các flashcard ngữ pháp đã lưu<br>7. Thực hiện các bài luyện tập nhanh (trắc nghiệm / sắp xếp)<br>8. Tiếp tục đến flashcard tiếp theo cho đến khi kết thúc |
    | **Chi tiết hiển thị**     | - FlashCard hiển thị cấu trúc + ví dụ minh họa<br> - Sau mỗi thẻ có thể xuất hiện bài luyện tập nhanh (sắp xếp hoặc chọn đáp án đúng)<br> - Câu trả lời được đánh giá đúng/sai ngay sau khi trả lời<br> - Hiển thị tiến độ và nút **Tiếp tục** chuyển sang thẻ tiếp theo<br> - Hiển thị thông báo **Hoàn thành** sau khi học xong toàn bộ |
    | **Kết quả hiển thị**      | - Hiển thị đúng/sai từng câu luyện tập<br> - FlashCard đánh dấu hoàn thành<br> - Giao diện tổng kết hiển thị điểm hoặc nhận xét động viên |
    | **Trường hợp không có dữ liệu** | - Không có cấu trúc ngữ pháp → hiển thị **Không có nội dung để học** |

#### 3.5.10 Chức năng Luyện tập Ngữ pháp trong Thư viện học tập – chế độ Flashcard { #toc-3-5-10 }

??? book "Luyện tập Ngữ pháp trong Thư viện học tập – chế độ Flashcard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập Ngữ pháp trong Thư viện học tập – chế độ Flashcard |
    | **Mô tả**                 | Học viên ôn tập các cấu trúc ngữ pháp đã lưu trong Thư viện học tập bằng flashcard có thể tự đánh dấu "Đã thuộc", hỗ trợ 3 loại flashcard hiển thị (tiêu đề, ví dụ, giải nghĩa). Kết thúc sẽ có thống kê số lượng đã thuộc và cần học lại. |
    | **Giao diện liên quan**   | - Tab **Kiến thức** → mục **Ngữ pháp** → **Danh sách ngữ pháp** → nút **Luyện tập** → chọn **Flashcard**<br> - Màn hình flashcard<br> - Popup tuỳ chọn: Xem tất cả, Xáo trộn, Tự chạy<br> - Màn hình kết quả tổng kết sau khi duyệt |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Ngữ pháp** → nhấn **Chi tiết** để vào **Danh sách ngữ pháp**<br>5. Tại màn hình **Danh sách ngữ pháp** → nhấn nút **Luyện tập** → chọn **Flashcard**<br>6. Xem lần lượt từng flashcard, bấm lật mặt sau nếu cần<br>7. Nhấn **Đã thuộc** hoặc **Cần học lại** để đánh dấu<br>8. Sau khi duyệt hết, hệ thống hiển thị tổng kết số lượng và phần trăm<br>9. Học viên có thể chọn **Duyệt lại** nếu muốn |
    | **Chi tiết hiển thị**     | - Có 3 loại flashcard:<br>&emsp;• **Loại 1**: Mặt trước là tiêu đề, mặt sau là ví dụ<br>&emsp;• **Loại 2**: Mặt trước là tiêu đề + ví dụ, mặt sau lặp lại ví dụ<br>&emsp;• **Loại 3**: Mặt trước là ví dụ, mặt sau là tiêu đề + dịch nghĩa<br> - Nút đánh dấu: **Đã thuộc** / **Cần học lại** hiển thị rõ ràng<br> - Có nút cài đặt với các tuỳ chọn: **Xem tất cả**, **Xáo trộn**, **Tự chạy** |
    | **Kết quả hiển thị**      | - Thống kê số lượng ngữ pháp **Đã thuộc** và **Cần học lại**<br> - Tính tỷ lệ phần trăm đã nắm của ngữ pháp<br> - Ghi nhận kết quả để hiển thị % nắm ngữ pháp ở danh sách tổng quan |
    | **Trường hợp không có dữ liệu** | - Hiển thị thông báo **Không có nội dung để học** |


#### 3.5.11 Chức năng Duyệt Ngữ pháp trong Thư viện học tập { #toc-3-5-11 }

??? book "Duyệt Ngữ pháp trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Duyệt Ngữ pháp trong Thư viện học tập |
    | **Mô tả** | Chức năng cho phép học viên xem lại các cấu trúc ngữ pháp đã lưu trong Thư viện học tập ở dạng card thông tin (không phải flashcard), bao gồm công thức, giải nghĩa và ví dụ. Học viên có thể tự đánh dấu “Đã thuộc” hoặc “Cần học lại” cho từng cấu trúc. Sau khi duyệt xong sẽ có thống kê kết quả. |
    | **Giao diện liên quan** | - Tab **Kiến thức** → mục **Ngữ pháp** → **Danh sách ngữ pháp** → nút **Duyệt**<br> - Giao diện danh sách ngữ pháp<br> - Giao diện card nội dung ngữ pháp (không lật)<br> - Giao diện thống kê sau khi duyệt |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Tại mục **Ngữ pháp** → nhấn **Chi tiết** để vào **Danh sách ngữ pháp**<br>5. Tại màn hình **Danh sách ngữ pháp** → nhấn nút **Duyệt**<br>6. Xem từng card ngữ pháp (không lật mặt)<br>7. Với mỗi card, chọn **Đã thuộc** hoặc **Cần học lại**<br>8. Sau khi duyệt hết, hiển thị màn hình thống kê kết quả |
    | **Chi tiết hiển thị** | - Card thông tin gồm:<br>&emsp;• Tên cấu trúc (tiếng Trung & tiếng Việt)<br>&emsp;• Mô tả/giải thích ngắn gọn<br>&emsp;• Ví dụ minh họa (câu tiếng Trung + dịch tiếng Việt)<br> - Nút lựa chọn: **Đã thuộc** / **Cần học lại**<br> - Thanh tiến độ thể hiện % duyệt<br> - Giao diện kết thúc hiển thị số lượng **Đã thuộc** và **Cần học lại** |
    | **Kết quả hiển thị** | - Hiển thị nội dung cấu trúc đúng như dữ liệu ngữ pháp<br> - Ghi nhận được lựa chọn học viên (**Đã thuộc** / **Cần học lại**)<br> - Hiển thị chính xác thống kê kết quả duyệt |
    | **Trường hợp không có dữ liệu** | - Nếu không có cấu trúc ngữ pháp nào, hiển thị thông báo **Không có dữ liệu để duyệt** |

#### 3.5.12 Chức năng Duyệt Kiến thức trong Thư viện học tập { #toc-3-5-12 }

??? book "Duyệt Kiến thức trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Duyệt Kiến thức trong Thư viện học tập |
    | **Mô tả** | Chức năng cho phép học viên xem lại các nội dung đã lưu trong Thư viện học tập ở dạng card thông tin (không phải flashcard), bao gồm: Từ vựng và Ngữ pháp. Học viên có thể chọn Duyệt cả hai cùng lúc hoặc Duyệt riêng từng mục. Mỗi card có thể đánh dấu “Đã thuộc” hoặc “Cần học lại”. |
    | **Giao diện liên quan** | - Tab **Kiến thức** → dưới mục Từ vựng / Ngữ pháp → nút **Duyệt**<br> - Popup chọn chế độ duyệt: **Từ vựng + Ngữ pháp**, hoặc chỉ **Từ vựng**, hoặc chỉ **Ngữ pháp**<br> - Giao diện card nội dung (không lật)<br> - Giao diện thống kê sau khi duyệt |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Nhấn nút **Duyệt** dưới khu vực Từ vựng / Ngữ pháp<br>5. Chọn chế độ Duyệt:<br>&emsp;– **Từ vựng + Ngữ pháp**<br>&emsp;– **Chỉ Từ vựng**<br>&emsp;– **Chỉ Ngữ pháp**<br>6. Lần lượt xem từng card kiến thức (theo loại đã chọn)<br>7. Với mỗi card, chọn **Đã thuộc** hoặc **Cần học lại**<br>8. Sau khi duyệt hết, hiển thị màn hình thống kê kết quả |
    | **Chi tiết hiển thị** | - **Card Từ vựng:**<br>&emsp;• Chữ Hán<br>&emsp;• Phiên âm<br>&emsp;• Nghĩa tiếng Việt<br>&emsp;• Hình ảnh (nếu có)<br>&emsp;• Ví dụ minh họa (tiếng Trung + dịch tiếng Việt)<br> - **Card Ngữ pháp:**<br>&emsp;• Tên cấu trúc (tiếng Trung & tiếng Việt)<br>&emsp;• Mô tả/giải thích ngắn gọn<br>&emsp;• Ví dụ minh họa (câu tiếng Trung + dịch tiếng Việt)<br> - Nút lựa chọn: **Đã thuộc** / **Cần học lại**<br> - Thanh tiến độ thể hiện % duyệt<br> - Giao diện kết thúc hiển thị số lượng **Đã thuộc** và **Cần học lại** cho từng loại (Từ vựng / Ngữ pháp) |
    | **Kết quả hiển thị** | - Hiển thị nội dung kiến thức đúng như dữ liệu đã lưu<br> - Ghi nhận được lựa chọn học viên (**Đã thuộc** / **Cần học lại**) cho từng item<br> - Hiển thị chính xác thống kê kết quả Duyệt theo từng loại<br> - Nếu Duyệt cả hai mục, thống kê tách riêng Từ vựng và Ngữ pháp |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung nào được lưu trong mục đã chọn, hiển thị thông báo **Không có dữ liệu để duyệt** |


#### 3.5.13 Chức năng Luyện tập Kiến thức trong Thư viện học tập – chế độ Học { #toc-3-5-13 }

??? book "Luyện tập Kiến thức trong Thư viện học tập – chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kiến thức trong Thư viện học tập – chế độ Học |
    | **Mô tả** | Chức năng giúp học viên củng cố Từ vựng và Ngữ pháp đã học trong Thư viện học tập thông qua hình thức **Học**, kết hợp nhiều dạng tương tác như card nội dung, trắc nghiệm và sắp xếp câu. Học viên có thể chọn luyện tập Từ vựng, Ngữ pháp hoặc cả hai. |
    | **Giao diện liên quan** | - Tab **Kiến thức** → dưới khu vực Từ vựng / Ngữ pháp → nút **Luyện tập**<br> - Popup chọn **Hình thức luyện tập** (**Học** / **Flashcard**)<br> - Popup chọn **Kiến thức luyện tập** (**Từ vựng** / **Ngữ pháp** / cả hai)<br> - Popup chọn **nội dung cụ thể** (Chọn tất cả / Chưa thuộc, tối thiểu 5 nội dung mỗi loại)<br> - Giao diện luyện tập theo bài (giống Luyện nhớ chuyên sâu):<br>&emsp;• Card nội dung<br>&emsp;• Trắc nghiệm<br>&emsp;• Sắp xếp câu<br> - Màn hình kết quả cuối bài |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Nhấn nút **Luyện tập** dưới khu vực Từ vựng / Ngữ pháp<br>5. Chọn **Hình thức luyện tập** → chọn **Học**<br>6. Chọn **Kiến thức luyện tập**: **Từ vựng**, **Ngữ pháp**, hoặc cả hai<br>7. Popup chọn **nội dung cụ thể**:<br>&emsp;– **Chọn tất cả** hoặc **Chưa thuộc**<br>&emsp;– Chọn từng item cụ thể<br>&emsp;– Mỗi loại cần chọn tối thiểu **5 nội dung** → nếu không đủ → hiển thị cảnh báo "Cần tối thiểu 5 nội dung"<br>8. Nhấn **Bắt đầu** để vào bài học<br>9. Lần lượt thực hiện các dạng bài:<br>&emsp;– **Card nội dung**<br>&emsp;– **Trắc nghiệm** (chọn đáp án / ghép cặp / điền chỗ trống)<br>&emsp;– **Sắp xếp từ thành câu**<br>10. Sau mỗi phần có kiểm tra → nếu trả lời đúng mới được học tiếp phần tiếp theo<br>11. Kết thúc bài → hiển thị màn hình kết quả |
    | **Chi tiết hiển thị** | - **Popup chọn hình thức luyện tập:**<br>&emsp;• **Học** (chế độ đang mô tả)<br>&emsp;• Flashcard (không thuộc chức năng này)<br><br> - **Popup chọn kiến thức luyện tập:**<br>&emsp;• Từ vựng<br>&emsp;• Ngữ pháp<br>&emsp;• Cả hai<br><br> - **Popup chọn nội dung cụ thể:**<br>&emsp;• **Chọn tất cả** hoặc **Chưa thuộc**<br>&emsp;• Danh sách các item để chọn<br>&emsp;• **Ràng buộc tối thiểu 5 nội dung mỗi loại** → nếu không đủ → cảnh báo + không cho qua bước tiếp theo<br><br> - **Bài học:**<br>&emsp;• **Card nội dung:** hiển thị nghĩa + ví dụ (giống Luyện nhớ chuyên sâu)<br>&emsp;• **Trắc nghiệm:** chọn đáp án / ghép cặp / điền chỗ trống<br>&emsp;• **Sắp xếp từ thành câu:** kéo thả từ / cụm từ tạo thành câu đúng<br>&emsp;• Có thanh tiến độ %<br>&emsp;• Phần kiểm tra sau mỗi phần học → đúng mới tiếp tục học phần tiếp theo |
    | **Kết quả hiển thị** | - Mỗi loại bài học có tiến độ phần trăm<br> - Trả lời đúng câu hỏi kiểm tra sau mỗi phần mới được học tiếp<br> - Màn hình kết thúc hiển thị tiến độ hoàn thành, thông báo nếu hoàn thành toàn bộ<br> - Mục học được đánh dấu hoàn thành sau khi hoàn tất Luyện tập Kiến thức chế độ Học |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung phù hợp (không có nội dung đã lưu hoặc không đủ 5 nội dung mỗi loại) → hiển thị **Không có nội dung để luyện tập** |

#### 3.5.14 Chức năng Luyện tập Kiến thức trong Thư viện học tập – chế độ FlashCard { #toc-3-5-14 }

??? book "Luyện tập Kiến thức trong Thư viện học tập – chế độ FlashCard"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kiến thức trong Thư viện học tập – chế độ FlashCard |
    | **Mô tả** | Chức năng giúp học viên ôn luyện Từ vựng và Ngữ pháp đã lưu trong Thư viện học tập bằng flashcard có thể lật, phát âm thanh và tùy chỉnh hiển thị. Mỗi loại kiến thức đều hỗ trợ 3 loại flashcard tương ứng. |
    | **Giao diện liên quan** | - Tab **Kiến thức** → dưới khu vực Từ vựng / Ngữ pháp → nút **Luyện tập**<br> - Popup chọn **Hình thức luyện tập** (**FlashCard**)<br> - Popup chọn **Kiến thức luyện tập** (**Từ vựng** / **Ngữ pháp** / cả hai)<br> - Popup chọn **nội dung cụ thể** (Chọn tất cả / Chưa thuộc, tối thiểu 5 nội dung mỗi loại)<br> - Màn hình Flashcard<br> - Popup **Tùy chọn**: Xem tất cả, Xáo trộn, Tự chạy, Chọn loại FlashCard |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kiến thức** (mặc định đang chọn)<br>4. Nhấn nút **Luyện tập** dưới khu vực Từ vựng / Ngữ pháp<br>5. Chọn **Hình thức luyện tập** → chọn **FlashCard**<br>6. Chọn **Kiến thức luyện tập**: **Từ vựng**, **Ngữ pháp**, hoặc cả hai<br>7. Popup chọn **nội dung cụ thể**:<br>&emsp;– **Chọn tất cả** hoặc **Chưa thuộc**<br>&emsp;– Chọn từng item cụ thể<br>&emsp;– Mỗi loại cần chọn tối thiểu **5 nội dung** → nếu không đủ → hiển thị cảnh báo "Cần tối thiểu 5 nội dung"<br>8. Nhấn **Bắt đầu** để vào bài học<br>9. Lần lượt xem từng Flashcard theo thứ tự<br>10. Có thể bấm lật thẻ, nghe phát âm (nếu là từ vựng), đánh dấu **Đã thuộc** / **Cần học lại**<br>11. Có thể mở Popup **Tùy chọn** để điều chỉnh chế độ xem |
    | **Chi tiết hiển thị** | - **Popup chọn hình thức luyện tập:**<br>&emsp;• **FlashCard** (chế độ đang mô tả)<br><br> - **Popup chọn kiến thức luyện tập:**<br>&emsp;• Từ vựng<br>&emsp;• Ngữ pháp<br>&emsp;• Cả hai<br><br> - **Popup chọn nội dung cụ thể:**<br>&emsp;• **Chọn tất cả** hoặc **Chưa thuộc**<br>&emsp;• Danh sách các item để chọn<br>&emsp;• **Ràng buộc tối thiểu 5 nội dung mỗi loại** → nếu không đủ → cảnh báo + không cho qua bước tiếp theo<br><br> - **Flashcard:**<br>&emsp;• **Từ vựng – có 3 loại Flashcard:**<br>&emsp;&emsp;– **Loại 1:** Mặt trước: chữ Hán, phiên âm, nghĩa, ví dụ; mặt sau: dịch nghĩa ví dụ<br>&emsp;&emsp;– **Loại 2:** Mặt trước: hình ảnh + nghĩa tiếng Việt; mặt sau: chữ Hán + phiên âm + ví dụ<br>&emsp;&emsp;– **Loại 3:** Mặt trước: ví dụ tiếng Trung; mặt sau: nghĩa dịch, từ trọng tâm, hình ảnh, phiên âm<br><br>&emsp;• **Ngữ pháp – có 3 loại Flashcard:**<br>&emsp;&emsp;– **Loại 1:** Mặt trước: tiêu đề ngữ pháp; mặt sau: ví dụ<br>&emsp;&emsp;– **Loại 2:** Mặt trước: tiêu đề + ví dụ; mặt sau: lặp lại ví dụ<br>&emsp;&emsp;– **Loại 3:** Mặt trước: ví dụ; mặt sau: tiêu đề + dịch nghĩa<br><br> - **Tùy chọn:**<br>&emsp;• **Xem tất cả**: hiển thị toàn bộ FlashCard ở dạng danh sách<br>&emsp;• **Xáo trộn**: xáo trộn thứ tự FlashCard<br>&emsp;• **Tự chạy**: nút trên màn hình có vòng lặp trạng thái:<br>&emsp;&emsp;→ **Nhanh** → **Tự chạy** (thủ công, học viên tự bấm qua card) → **Chậm** → **Bình thường** → **Nhanh** → ...<br>&emsp;• Khi đang ở trạng thái nào, label trên nút hiển thị **tên trạng thái đó** (ví dụ: Nhanh / Chậm / Bình thường / Tự chạy)<br><br> - **Tương tác:**<br>&emsp;• Bấm 1 lần vào thẻ để lật mặt<br>&emsp;• Nhấn biểu tượng loa để nghe phát âm (với từ vựng)<br>&emsp;• Nhấn **Đã thuộc** / **Cần học lại** |
    | **Kết quả hiển thị** | - Flashcard hiển thị đúng loại đã chọn<br> - Tùy chọn hoạt động chính xác theo thiết lập (bao gồm vòng lặp trạng thái **Tự chạy**)<br> - Có thể nghe phát âm với Từ vựng<br> - **Khi học viên chọn Đã thuộc → cập nhật vào % tiến độ Từ vựng / Ngữ pháp trong Thư viện học tập**<br> - Các lựa chọn **Đã thuộc** / **Cần học lại** được ghi nhận và đồng bộ trạng thái giữa các lần học |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung để luyện tập → hiển thị **Không có nội dung để luyện tập** |


#### 3.5.15 Chức năng Kỹ năng Nghe trong Thư viện học tập { #toc-3-5-15 }

??? book "Kỹ năng Nghe trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Kỹ năng Nghe trong Thư viện học tập |
    | **Mô tả** | Học viên luyện tập kỹ năng nghe thông qua các đoạn hội thoại có kèm audio trong Thư viện học tập. Giao diện cho phép tùy chỉnh hiển thị và tốc độ phát, đồng thời có thể đánh dấu **Đã thuộc** hoặc **Lưu** để học lại sau. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** trong Thư viện học tập → mục **Nghe**<br> - Danh sách bài nghe<br> - Màn hình chi tiết bài nghe (audio + phụ đề)<br> - Popup tùy chọn tốc độ<br> - Nút đánh dấu **Đã thuộc** và **Lưu** |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kỹ năng**<br>4. Tại mục **Nghe** → chọn bài nghe từ danh sách<br>5. Vào màn hình chi tiết bài nghe:<br>&emsp;– Nhấn nút phát audio<br>&emsp;– Có thể bật/tắt **Phiên âm**, **Dịch nghĩa**, **Phụ đề**<br>&emsp;– Tùy chọn tốc độ phát (**Chậm / Bình thường / Nhanh**)<br>&emsp;– Đánh dấu **Đã thuộc** hoặc **Lưu** bài nếu muốn<br>6. Nhấn nút **Luyện tập** để chọn chế độ luyện tập nếu có |
    | **Chi tiết hiển thị** | - Danh sách bài nghe gồm tiêu đề tiếng Trung + dịch nghĩa<br> - Mỗi bài có icon tai nghe<br> - Màn hình chi tiết bài nghe:<br>&emsp;• Thanh phát audio (play, thời gian)<br>&emsp;• Các block thoại: Phiên âm – Tiếng Trung – Dịch nghĩa<br>&emsp;• Block thoại highlight theo đoạn audio đang phát<br>&emsp;• Người dùng có thể nhấn block → seek đến đoạn đó<br>&emsp;• Các nút: **Phiên âm**, **Dịch nghĩa**, **Phụ đề**, **Tốc độ**<br>&emsp;• Nút **Đã thuộc** và **Lưu** ở góc phải trên |
    | **Kết quả hiển thị** | - Audio phát đúng nội dung<br> - Block thoại highlight chính xác theo audio<br> - Seek block hoạt động đúng<br> - Hiển thị đầy đủ thông tin thoại<br> - **Khi học viên nhấn Đã thuộc → cập nhật vào % tiến độ Kỹ năng Nghe trong Thư viện học tập**<br> - Cập nhật trạng thái **Lưu** cho từng bài nghe |
    | **Trường hợp không có dữ liệu** | - Nếu không có bài nghe → hiển thị **Không có bài luyện nghe nào** |


#### 3.5.16 Chức năng Luyện tập Kỹ năng Nghe trong Thư viện học tập – chế độ Học { #toc-3-5-16 }

??? book "Luyện tập Kỹ năng Nghe trong Thư viện học tập – chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kỹ năng Nghe trong Thư viện học tập – chế độ Học |
    | **Mô tả** | Học viên chọn chế độ **Học** trong Luyện tập kỹ năng nghe từ Thư viện học tập. Hệ thống lần lượt hiển thị các phần nội dung giúp học viên ghi nhớ và rèn luyện kỹ năng nghe: nghe – hiểu – ghi nhớ – vận dụng. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** → mục **Nghe** → chọn bài nghe → màn hình chi tiết → nhấn **Luyện tập** → chọn chế độ **Học**<br> - Màn hình Học qua FlashCard<br> - Màn hình Ghi nhớ nội dung<br> - Màn hình Câu hỏi xếp câu<br> - Màn hình hoàn thành phần học |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → vào box **Thư viện học tập**<br>3. Vào tab **Kỹ năng**<br>4. Chọn bài nghe → vào màn hình chi tiết<br>5. Nhấn **Luyện tập** → chọn chế độ **Học**<br>6. Thực hiện các phần học:<br>&emsp;• **Phần 1:** Học qua FlashCard → auto phát âm lần đầu khi hiển thị<br>&emsp;• **Phần 2:** Ghi nhớ nội dung → hiển thị câu + nghĩa → học viên nhấn **Tiếp tục**<br>&emsp;• **Phần 3:** Câu hỏi **Sắp xếp thành câu có nghĩa** → kéo thả / chọn các từ → kiểm tra kết quả<br>7. Hoàn thành toàn bộ bài → hiển thị màn hình chúc mừng |
    | **Chi tiết hiển thị** | - Popup chọn chế độ **Học**<br> - Phần FlashCard tự phát âm lần đầu<br> - Lần lượt qua các bước:<br>&emsp;• Xem nghĩa → Ghi nhớ → Sắp xếp câu<br> - **Sắp xếp câu** là bài tập, không phải FlashCard<br> - Không có **Đã thuộc** / **Lưu** trong chế độ Học |
    | **Kết quả hiển thị** | - Hiển thị lần lượt 3 phần học<br> - Không có nút **Đã thuộc** / **Lưu** trong toàn bộ chế độ Học<br> - Kết thúc hiển thị màn hình chúc mừng hoàn thành phần học |
    | **Trường hợp không có dữ liệu** | - Nếu bài nghe không có nội dung → hiển thị **Chưa có nội dung để luyện tập** |


#### 3.5.17 Chức năng Luyện tập Kỹ năng Nghe trong Thư viện học tập – chế độ FlashCard { #toc-3-5-17 }

??? book "Luyện tập Kỹ năng Nghe trong Thư viện học tập – chế độ FlashCard"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kỹ năng Nghe trong Thư viện học tập – chế độ FlashCard |
    | **Mô tả** | Học viên luyện tập kỹ năng nghe thông qua FlashCard. Có 3 loại FlashCard. Mỗi FlashCard tự phát âm lần đầu khi hiển thị. Học viên có thể sử dụng nút **Tự chạy** để điều chỉnh cách chuyển card theo vòng lặp **Nhanh → Tự chạy → Chậm → Bình thường → Nhanh**. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** → mục **Nghe** → chọn bài nghe → màn hình chi tiết → nhấn **Luyện tập** → chọn chế độ **FlashCard**<br> - Màn hình FlashCard từng câu<br> - Nút **Tự chạy** hiển thị trạng thái hiện tại |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → vào box **Thư viện học tập**<br>3. Vào tab **Kỹ năng**<br>4. Chọn bài nghe → vào màn hình chi tiết<br>5. Nhấn **Luyện tập** → chọn chế độ **FlashCard**<br>6. FlashCard auto phát âm lần đầu<br>7. Học viên có thể sử dụng các tùy chọn:<br>&emsp;– **Xem tất cả**<br>&emsp;– **Xáo trộn**<br>&emsp;– **Tự chạy**: vòng lặp trạng thái<br>&emsp;&emsp;→ Nhanh → Tự chạy → Chậm → Bình thường → Nhanh → ...<br>&emsp;– Label nút hiển thị đúng trạng thái hiện tại<br>8. Điều hướng FlashCard bằng nút / vuốt ngang<br>9. Hoàn thành bài hoặc thoát |
    | **Chi tiết hiển thị** | - FlashCard 3 loại:<br>&emsp;• **Loại 1:** Mặt trước: icon phát âm + câu; mặt sau: câu + dịch nghĩa<br>&emsp;• **Loại 2:** Mặt trước: câu + icon phát âm; mặt sau: dịch nghĩa + icon phát âm<br>&emsp;• **Loại 3:** Mặt trước: câu + icon phát âm; mặt sau: dịch nghĩa<br> - Nút **Đã thuộc** / **Chưa thuộc** (không ảnh hưởng % tiến độ)<br> - Thanh phân trang hiện số card<br> - Nút **Tùy chọn**: Xem tất cả, Xáo trộn, Tự chạy |
    | **Kết quả hiển thị** | - FlashCard auto phát âm<br> - Đánh dấu **Đã thuộc** / **Chưa thuộc**<br> - **Tự chạy** hoạt động đúng vòng lặp<br> - Toàn bộ tùy chọn hoạt động đúng yêu cầu |
    | **Trường hợp không có dữ liệu** | - Nếu không có FlashCard → hiển thị **Không có nội dung để luyện tập** |


#### 3.5.18 Chức năng Kỹ năng Đọc trong Thư viện học tập { #toc-3-5-18 }

??? book "Kỹ năng Đọc trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Kỹ năng Đọc trong Thư viện học tập |
    | **Mô tả** | Học viên luyện tập kỹ năng đọc qua các bài đọc tiếng Trung đã lưu trong Thư viện học tập. Giao diện cho phép tùy chỉnh chế độ dịch, cỡ chữ, đánh dấu **Đã thuộc**, **Lưu**, và tra nghĩa từ vựng được highlight sẵn trong bài đọc. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** trong Thư viện học tập → mục **Đọc**<br> - Danh sách bài đọc<br> - Màn hình chi tiết bài đọc<br> - Popup **Tùy chỉnh** (chọn chế độ dịch + chỉnh cỡ chữ)<br> - Popup tra nghĩa khi nhấn từ highlight<br> - Nút **Đã thuộc**, **Lưu** |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → nhấn vào box **Thư viện học tập**<br>3. Vào tab **Kỹ năng**<br>4. Tại mục **Đọc** → chọn bài đọc từ danh sách<br>5. Vào màn hình chi tiết bài đọc:<br>&emsp;– Xem bài đọc, từ highlight có thể nhấn để tra nghĩa<br>&emsp;– Mở popup **Tùy chỉnh** để:<br>&emsp;&emsp;• Chọn chế độ dịch (**Đọc hiểu** / **Dịch câu** / **Dịch từ**)<br>&emsp;&emsp;• Điều chỉnh cỡ chữ<br>&emsp;– Đánh dấu **Đã thuộc** → cập nhật vào % tiến độ Kỹ năng Đọc<br>&emsp;– Nhấn **Lưu** để lưu bài đọc vào Thư viện<br>6. Nhấn **Luyện tập** để vào phần luyện tập nếu có |
    | **Chi tiết hiển thị** | - Danh sách bài đọc gồm tiêu đề tiếng Trung + dịch nghĩa<br> - Mỗi bài có icon kỹ năng đọc<br> - Màn hình chi tiết bài đọc:<br>&emsp;• Nội dung bài đọc có từ được highlight sẵn<br>&emsp;• Popup tra nghĩa (nghĩa, phiên âm, audio, ảnh, ví dụ)<br>&emsp;• Nút **Đã thuộc**, **Lưu** ở góc phải trên<br>&emsp;• Nút **Luyện tập** ở dưới cùng<br>&emsp;• Nút **Cài đặt** mở popup **Tùy chỉnh**:<br>&emsp;&emsp;◦ **Chế độ dịch**:<br>&emsp;&emsp;&emsp;– **Đọc hiểu**: không dịch<br>&emsp;&emsp;&emsp;– **Dịch câu**: bật/tắt dịch từng câu<br>&emsp;&emsp;&emsp;– **Dịch từ**: từ highlight, nhấn vào để tra nghĩa<br>&emsp;&emsp;◦ **Cỡ chữ**: chỉnh cỡ chữ bài đọc |
    | **Kết quả hiển thị** | - Nội dung bài đọc hiển thị đúng<br> - Popup tra nghĩa hoạt động chính xác<br> - Chế độ dịch và cỡ chữ thay đổi theo lựa chọn<br> - **Khi nhấn Đã thuộc → cập nhật vào % tiến độ Kỹ năng Đọc trong Thư viện học tập**<br> - Bài đọc được lưu khi chọn **Lưu** |
    | **Trường hợp không có dữ liệu** | - Không có bài đọc → hiển thị **Không có bài luyện đọc nào** |


#### 3.5.19 Chức năng Luyện tập Kỹ năng Đọc trong Thư viện học tập – chế độ Học { #toc-3-5-19 }

??? book "Luyện tập Kỹ năng Đọc trong Thư viện học tập – chế độ Học"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kỹ năng Đọc trong Thư viện học tập – chế độ Học |
    | **Mô tả** | Học viên luyện tập đọc hiểu nội dung bài đọc trong Thư viện học tập thông qua chế độ học với Flashcard và câu hỏi **Sắp xếp câu có nghĩa**. Các từ được highlight có thể nhấn để tra nghĩa. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** → mục **Đọc** → chọn bài đọc → màn hình chi tiết → nhấn **Luyện tập** → chọn chế độ **Học**<br> - Màn hình Học qua Flashcard<br> - Popup **Tiếp tục** (nội dung Flashcard + dịch nghĩa)<br> - Màn hình **Sắp xếp thành câu có nghĩa** |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → vào box **Thư viện học tập**<br>3. Vào tab **Kỹ năng**<br>4. Chọn bài đọc → vào màn hình chi tiết<br>5. Nhấn **Luyện tập** → chọn chế độ **Học**<br>6. Luồng luyện tập:<br>&emsp;– **Flashcard:** hiển thị mặt trước → nhấn **Tiếp tục** để lật mặt sau<br>&emsp;– Mặt sau: hiển thị nội dung còn lại → nhấn **Hoàn thành** → hiện popup **Tiếp tục** → sang từ tiếp theo<br>&emsp;– **Sắp xếp thành câu có nghĩa:** hiển thị dịch nghĩa câu → học viên nhấn vào từ tiếng Trung để sắp xếp thành câu đúng<br>7. Sau khi hoàn thành → màn hình chúc mừng hoàn thành phần học |
    | **Chi tiết hiển thị** | - Các từ được highlight (màu cam) → nhấn để tra nghĩa<br> - Flashcard:<br>&emsp;• Một mặt hiển thị câu dịch hoặc câu tiếng Trung<br>&emsp;• Nhấn **Tiếp tục** để lật mặt sau<br>&emsp;• Nhấn **Hoàn thành** → popup **Tiếp tục** → sang từ tiếp theo<br> - **Sắp xếp thành câu có nghĩa:**<br>&emsp;• Hiển thị câu dịch nghĩa<br>&emsp;• Các từ tiếng Trung ngẫu nhiên bên dưới → nhấn từ để sắp xếp vào ô phía trên<br> - Thanh tiến độ hiển thị % hoàn thành |
    | **Kết quả hiển thị** | - Flashcard hiển thị đúng nội dung bài đọc đã chọn<br> - Popup tra nghĩa từ highlight hoạt động chính xác<br> - Câu sắp xếp đúng → cập nhật tiến độ<br> - Hoàn thành bài luyện tập → hiển thị màn hình chúc mừng |
    | **Trường hợp không có dữ liệu** | - Nếu bài đọc không có nội dung → hiển thị **Không có nội dung luyện tập** |


#### 3.5.20 Chức năng Luyện tập Kỹ năng Đọc trong Thư viện học tập – chế độ Trắc nghiệm { #toc-3-5-20 }

??? book "Luyện tập Kỹ năng Đọc trong Thư viện học tập – chế độ Trắc nghiệm"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kỹ năng Đọc trong Thư viện học tập – chế độ Trắc nghiệm |
    | **Mô tả** | Học viên luyện tập kỹ năng đọc hiểu bài đọc thông qua chế độ Trắc nghiệm. Mỗi câu hỏi có nhiều lựa chọn, học viên chọn 1 đáp án đúng. Học viên có thể xem danh sách các câu hỏi để chọn câu làm tiếp. Sau khi làm xong toàn bộ câu hỏi và **Nộp bài** → hệ thống mới hiển thị kết quả và giải thích từng câu. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** → mục **Đọc** → chọn bài đọc → màn hình chi tiết → nhấn **Luyện tập** → chọn chế độ **Trắc nghiệm**<br> - Màn hình câu hỏi trắc nghiệm<br> - Danh sách các câu hỏi (dạng số thứ tự 1 / 2 / 3 / ...), cho phép chọn câu bất kỳ<br> - Màn hình hiển thị kết quả sau khi Nộp bài |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → vào box **Thư viện học tập**<br>3. Vào tab **Kỹ năng**<br>4. Chọn bài đọc → vào màn hình chi tiết<br>5. Nhấn **Luyện tập** → chọn chế độ **Trắc nghiệm**<br>6. Lần lượt trả lời từng câu hỏi:<br>&emsp;– Đọc câu hỏi + các lựa chọn đáp án<br>&emsp;– Chọn 1 đáp án đúng<br>7. Có thể mở **danh sách các câu hỏi** (dạng số thứ tự 1/2/3/...) → chọn sang câu bất kỳ để làm tiếp<br>8. Sau khi trả lời xong tất cả câu → nhấn **Nộp bài**<br>9. Sau khi Nộp bài → hệ thống hiển thị kết quả:<br>&emsp;– Hiển thị đúng/sai từng câu<br>&emsp;– Hiển thị block **Giải thích** cho từng câu<br>10. Học viên có thể duyệt lại từng câu để xem giải thích |
    | **Chi tiết hiển thị** | - Câu hỏi dạng **nhiều lựa chọn** → chọn 1 đáp án đúng<br> - Màn hình mỗi câu hiển thị:<br>&emsp;• Câu hỏi (text tiếng Trung hoặc dịch nghĩa)<br>&emsp;• Danh sách các đáp án dạng button<br> - **Trước khi Nộp bài:**<br>&emsp;• Học viên chỉ có thể chọn đáp án<br>&emsp;• Không hiển thị Giải thích<br> - **Danh sách câu hỏi:**<br>&emsp;• Mở được menu danh sách các câu hỏi (dạng số thứ tự 1 / 2 / 3 / ...)<br>&emsp;• Có thể chọn sang câu bất kỳ để làm tiếp<br> - **Sau khi Nộp bài:**<br>&emsp;• Hiển thị kết quả đúng/sai từng câu (màu xanh/đỏ)<br>&emsp;• Hiển thị block **Giải thích** bên dưới mỗi câu<br> - Thanh phân trang + điều hướng dưới cùng có nút **Quay lại**, **Tiếp theo**, **Nộp bài** (ở câu cuối) |
    | **Kết quả hiển thị** | - Học viên làm xong toàn bộ câu hỏi → nhấn **Nộp bài** → mới hiển thị kết quả<br> - Mỗi câu sau khi Nộp bài sẽ hiển thị **Đúng/Sai** + **Giải thích** rõ ràng<br> - Có thể duyệt lại từng câu để xem lại kết quả + giải thích<br> - Danh sách câu hỏi (menu số thứ tự) hoạt động chính xác<br> - Không có nút **Đã thuộc** / **Lưu** trong chế độ Trắc nghiệm |
    | **Trường hợp không có dữ liệu** | - Nếu bài đọc không có câu hỏi → hiển thị **Không có nội dung luyện tập** |


#### 3.5.21 Chức năng Duyệt Kỹ năng trong Thư viện học tập { #toc-3-5-21 }

??? book "Duyệt Kỹ năng trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Duyệt Kỹ năng trong Thư viện học tập |
    | **Mô tả** | Chức năng cho phép học viên duyệt lại nội dung đã lưu trong Thư viện học tập theo dạng FlashCard. Học viên có thể chọn Duyệt **Tất cả**, hoặc chỉ Duyệt **Kỹ năng Đọc** hoặc **Kỹ năng Nghe**. Duyệt các nội dung này giúp học viên ôn tập lại mà không làm thay đổi % tiến độ kỹ năng. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** → nút **Duyệt**<br> - Popup chọn nội dung Duyệt (**Tất cả / Đọc / Nghe**)<br> - Màn hình FlashCard Duyệt nội dung<br> - Màn hình **Hoàn thành Duyệt** |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → vào box **Thư viện học tập**<br>3. Vào tab **Kỹ năng**<br>4. Nhấn nút **Duyệt**<br>5. Popup chọn nội dung cần Duyệt:<br>&emsp;– **Duyệt tất cả**<br>&emsp;– **Đọc**<br>&emsp;– **Nghe**<br>6. Nhấn **Duyệt** → vào màn hình FlashCard Duyệt<br>7. Lần lượt Duyệt các FlashCard:<br>&emsp;– Nếu là **Đọc**: FlashCard hiển thị câu tiếng Trung + dịch nghĩa<br>&emsp;– Nếu là **Nghe**: FlashCard tự động phát âm + hiển thị câu + điều khiển phát âm (Pause / Play)<br>8. Học viên nhấn **Đã thuộc** hoặc **Cần học lại** cho từng card<br>9. Sau khi Duyệt hết → hiển thị **Màn hình Hoàn thành Duyệt** |
    | **Chi tiết hiển thị** | - **Popup chọn nội dung Duyệt**:<br>&emsp;• Duyệt tất cả<br>&emsp;• Đọc<br>&emsp;• Nghe<br> - Màn hình FlashCard:<br>&emsp;• Thanh tiến độ session Duyệt<br>&emsp;• Số thứ tự card (VD: 3/38)<br>&emsp;• **FlashCard Đọc**:<br>&emsp;&emsp;– Hiển thị câu tiếng Trung + dịch nghĩa<br>&emsp;• **FlashCard Nghe**:<br>&emsp;&emsp;– Hiển thị câu tiếng Trung<br>&emsp;&emsp;– Auto phát âm khi hiển thị card<br>&emsp;&emsp;– Có nút **Pause / Play** để điều khiển phát âm<br> - Nút **Đã thuộc** / **Cần học lại** hiển thị rõ dưới mỗi card<br> - Nút **Quay lại** ở góc phải trên cùng |
    | **Kết quả hiển thị** | - FlashCard hiển thị đúng nội dung theo loại Kỹ năng đã chọn<br> - FlashCard Nghe auto phát âm + có điều khiển<br> - Học viên nhấn **Đã thuộc** / **Cần học lại** → tự đánh giá trong session Duyệt<br> - **Hành động Duyệt không cập nhật vào % tiến độ Kỹ năng Đọc / Nghe**<br> - Thanh tiến độ hiển thị % duyệt của session Duyệt<br> - **Sau khi Duyệt hết** → hiển thị **Màn hình Hoàn thành Duyệt**:<br>&emsp;• Cột trái: **Đã thuộc** → số lượng → màu xanh<br>&emsp;• Cột phải: **Cần học lại** → số lượng → màu đỏ<br>&emsp;• Nút **Duyệt lại** để lặp lại session Duyệt |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung để Duyệt → hiển thị **Không có nội dung để duyệt** |

#### 3.5.22 Chức năng Luyện tập Kỹ năng trong Thư viện học tập { #toc-3-5-22 }

??? book "Luyện tập Kỹ năng trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Luyện tập Kỹ năng trong Thư viện học tập |
    | **Mô tả** | Học viên luyện tập kỹ năng **Nghe** / **Đọc** trong Thư viện học tập thông qua 2 loại card: **FlashCard** và **Ghi nhớ nội dung**. Mỗi nội dung luyện tập gồm 3 bước: học qua FlashCard → Ghi nhớ nội dung → làm bài tập **Sắp xếp từ**. Học viên phải lần lượt học và làm đúng bài tập thì mới được tiếp tục. |
    | **Giao diện liên quan** | - Tab **Kỹ năng** → nút **Luyện tập**<br> - Popup chọn **kỹ năng luyện tập** (Nghe / Đọc)<br> - Popup chọn **kiến thức luyện tập** (Chọn tất cả / Chưa thuộc / từng nội dung)<br> - Màn hình **FlashCard**<br> - Màn hình **Ghi nhớ nội dung**<br> - Màn hình **Sắp xếp thành câu có nghĩa** |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → vào box **Thư viện học tập**<br>3. Vào tab **Kỹ năng**<br>4. Nhấn nút **Luyện tập**<br>5. Popup chọn **kỹ năng luyện tập**:<br>&emsp;– Nghe<br>&emsp;– Đọc<br>6. Chọn xong kỹ năng → popup chọn **kiến thức luyện tập**:<br>&emsp;– Chọn tất cả<br>&emsp;– Chưa thuộc<br>&emsp;– Chọn từng nội dung<br>7. Nhấn **Bắt đầu** để vào luyện tập<br>8. Luyện tập từng nội dung theo 3 bước:<br>&emsp;• **Bước 1: FlashCard**<br>&emsp;&emsp;– Mặt trước: hiển thị nội dung (text / audio)<br>&emsp;&emsp;– Nhấn **Tiếp tục** → lật mặt sau<br>&emsp;&emsp;– Mặt sau: hiển thị nội dung còn lại<br>&emsp;&emsp;– Nhấn **Hoàn thành** → hiện popup câu + dịch nghĩa → nhấn **Tiếp tục** → sang Bước 2<br>&emsp;• **Bước 2: Ghi nhớ nội dung card**<br>&emsp;&emsp;– Hiển thị card **Ghi nhớ nội dung**:<br>&emsp;&emsp;&emsp;• Đọc: hiển thị câu dịch nghĩa<br>&emsp;&emsp;&emsp;• Nghe: auto phát audio + hiển thị text / dịch<br>&emsp;&emsp;– Nhấn **Tiếp tục** → sang Bước 3<br>&emsp;• **Bước 3: Sắp xếp thành câu có nghĩa**<br>&emsp;&emsp;– Hiển thị dịch nghĩa câu<br>&emsp;&emsp;– Các từ tiếng Trung → học viên nhấn để sắp xếp vào ô phía trên<br>&emsp;&emsp;– Nhấn **Kiểm tra** để kiểm tra kết quả<br>&emsp;&emsp;– Nếu đúng → tiếp tục nội dung tiếp theo<br>&emsp;&emsp;– Nếu sai → thử lại |
    | **Chi tiết hiển thị** | - Popup chọn **kỹ năng Luyện tập**:<br>&emsp;• Nghe<br>&emsp;• Đọc<br> - Popup chọn **kiến thức Luyện tập**:<br>&emsp;• Chọn tất cả<br>&emsp;• Chưa thuộc<br>&emsp;• Chọn từng nội dung<br> - FlashCard:<br>&emsp;• Mặt trước: nội dung (text / audio)<br>&emsp;• Mặt sau: nội dung còn lại<br>&emsp;• **Tiếp tục** → lật mặt sau<br>&emsp;• **Hoàn thành** → hiển thị popup câu + dịch nghĩa → nhấn **Tiếp tục** sang Ghi nhớ nội dung<br> - **Ghi nhớ nội dung**:<br>&emsp;• Đọc: hiển thị câu dịch nghĩa<br>&emsp;• Nghe: auto phát âm thanh + hiển thị text / dịch<br>&emsp;• Nhấn **Tiếp tục** sang Sắp xếp từ<br> - **Sắp xếp thành câu có nghĩa**:<br>&emsp;• Hiển thị dịch nghĩa câu<br>&emsp;• Các từ tiếng Trung → nhấn vào từ để sắp xếp<br>&emsp;• Nút **Kiểm tra** → nếu đúng → tiếp tục nội dung tiếp theo<br>&emsp;• Nếu sai → thử lại |
    | **Kết quả hiển thị** | - Lần lượt học qua **FlashCard → Ghi nhớ nội dung → Sắp xếp từ** cho từng nội dung<br> - Học viên phải làm đúng **Sắp xếp từ** mới được tiếp tục<br> - Đảm bảo học viên rèn luyện sâu từng nội dung đã chọn |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung → hiển thị **Không có nội dung để luyện tập** |


#### 3.5.23 Chức năng Thống kê Tiến trình trong Thư viện học tập { #toc-3-5-23 }

??? book "Thống kê Tiến trình trong Thư viện học tập"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Thống kê Tiến trình trong Thư viện học tập |
    | **Mô tả** | Chức năng giúp học viên theo dõi tiến trình học tập của bản thân trong Thư viện học tập thông qua các thống kê trực quan: **% Tiến trình tổng**, biểu đồ nội dung hoàn thành, và bảng chi tiết theo từng kỹ năng / kiến thức. |
    | **Giao diện liên quan** | - Tab **Tiến trình** trong Thư viện học tập<br> - Vòng tròn **% Tiến trình tổng**<br> - Filter chọn **Loại nội dung**:<br>&emsp;• Toàn bộ<br>&emsp;• Kỹ năng<br>&emsp;• Kiến thức<br>&emsp;• Từ vựng<br>&emsp;• Ngữ pháp<br>&emsp;• Đọc<br>&emsp;• Nghe<br> - Filter chọn **Thời gian**:<br>&emsp;• Tuần này<br>&emsp;• Tháng này<br>&emsp;• Toàn bộ<br> - Biểu đồ đường (số nội dung hoàn thành theo ngày)<br> - Các khối chi tiết số nội dung hoàn thành theo từng kỹ năng |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình **Cùng học kiến thức mới** → vào box **Thư viện học tập**<br>3. Chọn tab **Tiến trình**<br>4. Xem vòng tròn **% Tiến trình tổng**:<br>&emsp;• % tiến trình tính trên tổng số nội dung đã học / tổng số nội dung trong Thư viện<br>5. Chọn **Loại nội dung** muốn xem thống kê:<br>&emsp;• Toàn bộ<br>&emsp;• Kỹ năng / Kiến thức / Từ vựng / Ngữ pháp / Đọc / Nghe<br>6. Chọn **Mốc thời gian** muốn xem:<br>&emsp;• Tuần này / Tháng này / Toàn bộ<br>7. Xem biểu đồ tổng quan số nội dung đã hoàn thành:<br>&emsp;• Trục hoành: Ngày<br>&emsp;• Trục tung: Số nội dung<br>8. Dưới biểu đồ, xem các khối chi tiết:<br>&emsp;– Mỗi khối hiển thị tổng số **Nội dung đã hoàn thành** theo mốc thời gian<br>&emsp;– Có thể expand khối để xem chi tiết theo từng kỹ năng:<br>&emsp;&emsp;• Từ vựng<br>&emsp;&emsp;• Ngữ pháp<br>&emsp;&emsp;• Đọc<br>&emsp;&emsp;• Nghe |
    | **Chi tiết hiển thị** | - **Vòng tròn % Tiến trình tổng**:<br>&emsp;• Hiển thị % tiến trình học tập tổng (số nội dung đã học / tổng số nội dung trong Thư viện)<br> - **Filter loại nội dung**:<br>&emsp;• Toàn bộ<br>&emsp;• Kỹ năng<br>&emsp;• Kiến thức<br>&emsp;• Từ vựng<br>&emsp;• Ngữ pháp<br>&emsp;• Đọc<br>&emsp;• Nghe<br> - **Filter mốc thời gian**:<br>&emsp;• Tuần này<br>&emsp;• Tháng này<br>&emsp;• Toàn bộ<br> - **Biểu đồ đường**:<br>&emsp;• Trục hoành: Ngày<br>&emsp;• Trục tung: Số nội dung<br>&emsp;• Mỗi điểm thể hiện số nội dung hoàn thành trong ngày tương ứng<br>&emsp;• Nếu không có nội dung → hiển thị **Năm nay bạn chưa học được nội dung gì!!!**<br> - **Khối chi tiết số nội dung đã hoàn thành**:<br>&emsp;• Mỗi khối có tiêu đề: **Hôm nay / Tuần này / Tháng này / Năm nay**<br>&emsp;• Số tổng **Nội dung đã hoàn thành**<br>&emsp;• Expand khối sẽ hiển thị số nội dung theo từng kỹ năng:<br>&emsp;&emsp;– Từ vựng<br>&emsp;&emsp;– Ngữ pháp<br>&emsp;&emsp;– Đọc<br>&emsp;&emsp;– Nghe |
    | **Kết quả hiển thị** | - Hiển thị vòng tròn % tiến trình tổng chính xác<br> - Biểu đồ hiển thị đúng số nội dung hoàn thành theo ngày, theo mốc thời gian và loại nội dung đã chọn<br> - Các khối chi tiết hiển thị đúng số **Nội dung đã hoàn thành** tổng + chi tiết theo từng kỹ năng<br> - Cho phép học viên theo dõi tiến trình học tập một cách trực quan và chi tiết<br> - Nếu không có dữ liệu → hiển thị thông báo phù hợp (**Năm nay bạn chưa học được nội dung gì!!!**) |
    | **Trường hợp không có dữ liệu** | - Nếu không có nội dung nào hoàn thành trong mốc thời gian / loại nội dung → hiển thị **Không có nội dung** hoặc thông báo phù hợp |


### 3.6 Chức năng cài đặt

#### 3.6.1 Chức năng Chỉnh sửa hồ sơ { #toc-3-6-1 }

??? book "Chỉnh sửa hồ sơ"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Chỉnh sửa hồ sơ |
    | **Mô tả** | Chức năng cho phép học viên chỉnh sửa thông tin cá nhân của mình trong hồ sơ tài khoản, bao gồm: ảnh đại diện, họ tên, số điện thoại, tỉnh/thành phố. |
    | **Giao diện liên quan** | - Màn hình **Cài đặt** → chọn **Chỉnh sửa hồ sơ**<br> - Màn hình **Chỉnh sửa hồ sơ** (có nút Lưu thông tin) |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình chính → vào **Cài đặt**<br>3. Chọn **Chỉnh sửa hồ sơ**<br>4. Màn hình hiển thị các trường thông tin:<br>&emsp;– Ảnh đại diện (bấm icon bút để thay ảnh)<br>&emsp;– Họ và tên (editable)<br>&emsp;– Email (không cho phép sửa)<br>&emsp;– Số điện thoại (editable)<br>&emsp;– Tỉnh/Thành phố (editable)<br>5. Học viên chỉnh sửa thông tin mong muốn<br>6. Nhấn **Lưu thông tin** để cập nhật |
    | **Chi tiết hiển thị** | - **Ảnh đại diện**:<br>&emsp;• Hiển thị ảnh hiện tại → bấm icon bút để mở upload ảnh mới<br> - **Họ và tên**:<br>&emsp;• Có thể chỉnh sửa<br> - **Email**:<br>&emsp;• Hiển thị email hiện tại → không cho sửa<br> - **Số điện thoại**:<br>&emsp;• Có thể chỉnh sửa<br>&emsp;• Bàn phím số khi chỉnh sửa<br> - **Tỉnh/Thành phố**:<br>&emsp;• Có thể chỉnh sửa<br> - **Nút Lưu thông tin**:<br>&emsp;• Sau khi nhấn → lưu lại thông tin mới<br>&emsp;• Nếu có lỗi → hiển thị thông báo lỗi |
    | **Kết quả hiển thị** | - Thông tin sau khi chỉnh sửa được lưu lại thành công<br> - Màn hình hiển thị thông báo cập nhật thành công |
    | **Trường hợp không có dữ liệu** | - Nếu chưa có dữ liệu của một trường → hiển thị trống để học viên điền mới |

#### 3.6.2 Chức năng Đổi mật khẩu { #toc-3-6-2 }

??? book "Đổi mật khẩu"
    | Trường | Nội dung |
    |--------|----------|
    | **Tên chức năng** | Đổi mật khẩu |
    | **Mô tả** | Chức năng cho phép học viên thay đổi mật khẩu tài khoản của mình để đảm bảo an toàn bảo mật. |
    | **Giao diện liên quan** | - Màn hình **Cài đặt** → chọn **Chỉnh sửa hồ sơ** → nút **Đổi mật khẩu**<br> - Màn hình **Đổi mật khẩu** |
    | **Luồng thao tác chính** | 1. Học viên đăng nhập thành công<br>2. Từ màn hình chính → vào **Cài đặt**<br>3. Chọn **Chỉnh sửa hồ sơ** → nhấn nút **Đổi mật khẩu**<br>4. Màn hình **Đổi mật khẩu** hiển thị các trường:<br>&emsp;– Mật khẩu cũ<br>&emsp;– Mật khẩu mới<br>&emsp;– Xác nhận mật khẩu mới<br>5. Học viên nhập đầy đủ thông tin<br>6. Nhấn **Lưu thông tin** để cập nhật<br>7. Hệ thống kiểm tra:<br>&emsp;– Nếu thành công → hiển thị thông báo thành công<br>&emsp;– Nếu lỗi (mật khẩu cũ sai / mật khẩu mới không khớp / chưa đủ 6 ký tự) → hiển thị thông báo lỗi |
    | **Chi tiết hiển thị** | - **Mật khẩu cũ**:<br>&emsp;• Học viên nhập mật khẩu hiện tại<br> - **Mật khẩu mới**:<br>&emsp;• Nhập mật khẩu mới (tối thiểu 6 ký tự)<br> - **Xác nhận mật khẩu mới**:<br>&emsp;• Nhập lại mật khẩu mới để xác nhận<br> - **Nút Lưu thông tin**:<br>&emsp;• Sau khi nhấn → thực hiện kiểm tra và lưu lại mật khẩu mới |
    | **Kết quả hiển thị** | - Nếu đổi mật khẩu thành công → hiển thị thông báo thành công<br> - Nếu có lỗi → hiển thị thông báo lỗi tương ứng |
    | **Trường hợp không có dữ liệu** | - Nếu bỏ trống trường nào → hiển thị yêu cầu nhập đầy đủ |


### 3.7 Chức năng Góp ý { #toc-3-7 }

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
