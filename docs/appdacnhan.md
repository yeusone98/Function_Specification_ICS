# 📄 Tài liệu đặc tả chức năng App Đắc Nhân

## 1. Giới thiệu

- **Mục tiêu:**  
  Ứng dụng **Đắc Nhân Tiếng Trung** được xây dựng để hỗ trợ học viên theo dõi quá trình học tập tiếng Trung tại trung tâm, bao gồm: bài học theo buổi, bài tập về nhà, kiểm tra định kỳ, tổng quan tiến độ và thư viện học tập.  
  Hệ thống cung cấp trải nghiệm học tập minh bạch, cá nhân hóa, đồng thời giúp giáo viên và trung tâm nắm bắt tiến độ học và mức độ hoàn thành của học viên một cách trực quan.  
  Ứng dụng hướng đến việc tự động hóa phần lớn quy trình đào tạo và nâng cao hiệu quả giảng dạy.

- **Đối tượng sử dụng:**  
  🔹 Developer: triển khai các module chức năng dựa trên mô tả nghiệp vụ  
  🔹 Tester: xây dựng và thực hiện test case để kiểm thử hệ thống


Dưới đây là nội dung **phạm vi hệ thống** đã được bổ sung phần **Thư viện học tập**, trình bày theo định dạng MkDocs như bạn yêu cầu:

---

## 2. Phạm vi hệ thống

Hệ thống Đắc Nhân Tiếng Trung là nền tảng học tập dành cho học viên đang theo học các khoá tiếng Trung tại trung tâm. Ứng dụng hỗ trợ học viên theo dõi quá trình học, kiểm tra và tự học theo lộ trình đã được phân phối bởi giáo viên. Tất cả nội dung học tập đều được đồng bộ từ hệ thống giảng dạy chính và hiển thị cá nhân hóa theo từng lớp và từng khoá học mà học viên tham gia.

Ứng dụng hướng đến người dùng duy nhất là:

* **Student (Học viên)**: Người học tiếng Trung tại trung tâm

### Các chức năng chính dành cho học viên:

* 📘 **Bài học**:  
   • Xem danh sách các buổi học theo thứ tự thời gian  
   • Truy cập nội dung bài học chi tiết: chủ đề, mục tiêu học, từ vựng, ngữ pháp, kỹ năng  
   • Xem trạng thái từng buổi học: Có mặt, Vắng, Vào trễ  

* 📝 **Kiểm tra**:  
   • Xem danh sách bài kiểm tra được giao  
   • Thực hiện bài kiểm tra (nếu hệ thống mở truy cập)  
   • Theo dõi điểm số, trạng thái hoàn thành  

* 🎯 **Tự học**:  
   • Ôn tập từ vựng, ngữ pháp và kỹ năng nghe đọc theo dạng flashcard hoặc bài tập  
   • Theo dõi tiến độ học tập theo từng hoạt động: Luyện nhớ, Củng cố, Kiến thức nền, Kỹ năng  

* 📊 **Tổng quan lớp học**:  
   • Xem tổng số buổi học đã hoàn thành / tổng số buổi  
   • Tỉ lệ điểm danh, tỉ lệ làm bài tập về nhà  
   • Điểm trung bình bài tập và điểm kiểm tra  

* 📚 **Thư viện học tập**:  
   • Gồm 3 mục: **Kiến thức**, **Kỹ năng** và **Tiến trình**  
   • Học viên ôn tập lại các nội dung đã học và đã note từ bài học chính (bao gồm Từ vựng, Ngữ pháp, Nghe, Đọc)  
   • Hiển thị tiến độ học tập cá nhân bằng biểu đồ trực quan theo ngày/tuần/tháng  
   • Cung cấp 2 chế độ luyện tập: *Duyệt* và *Luyện tập*    

Ứng dụng không hỗ trợ các vai trò khác như admin, giáo viên hay quản trị. Toàn bộ dữ liệu học tập được đồng bộ từ hệ thống chính do giáo viên và bộ phận điều phối cập nhật.

---  

## 3. Các chức năng chính  

### 3.1 Chức năng đăng nhập { #toc-3-1}  

??? book "Đăng nhập"
    | Trường                | Nội dung |
    |-----------------------|----------|
    | **Tên chức năng**     | Đăng nhập |
    | **Mô tả**              | Chức năng cho phép học viên đăng nhập vào ứng dụng bằng email và mật khẩu được cấp bởi trung tâm. Việc đăng nhập giúp xác thực tài khoản và truy xuất dữ liệu học tập cá nhân như lớp học, bài học, kiểm tra, thư viện…<br><br>**Tài khoản học viên sẽ được cấp bởi bộ phận Support của trung tâm.** |
    | **Giao diện liên quan** | - Màn hình đăng nhập (email, mật khẩu)<br> - Nút “Đăng nhập”<br> - Link “Quên mật khẩu”<br> - Nút “Liên hệ Support để được hỗ trợ” |
    | **Luồng thao tác chính** | 1. Truy cập ứng dụng → hiển thị form Email và Mật khẩu, kèm nút Đăng nhập<br>2. Học viên nhập thông tin → có thể ẩn/hiện mật khẩu<br>3. Nhấn Đăng nhập:<br>&emsp;– Nếu hợp lệ → đăng nhập thành công<br>&emsp;– Nếu sai → báo lỗi “Email hoặc mật khẩu không đúng”<br>4. Nhấn “Quên mật khẩu” → hiển thị: “Liên hệ support để được hỗ trợ” |
    | **Điều kiện**          | - Nút “Đăng nhập” luôn cho phép nhấn dù chưa nhập đủ thông tin<br> - Hệ thống kiểm tra và hiển thị lỗi tương ứng nếu để trống |
    | **Kết quả hiển thị**   | - Nếu đăng nhập thành công → chuyển sang màn hình chính<br> - Nếu sai thông tin → hiển thị lỗi: “Email hoặc mật khẩu không đúng”<br> - Nếu để trống:<br>&emsp;• Không nhập email → lỗi “Vui lòng nhập email”<br>&emsp;• Không nhập mật khẩu → lỗi “Vui lòng nhập mật khẩu” |
    | **Trường hợp không có dữ liệu** | Email, mật khẩu trống nhưng vẫn cho phép nhấn nút “Đăng nhập”, hệ thống sẽ cảnh báo lỗi tương ứng sau đó |

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
    | **Chi tiết hiển thị**     | • **Flashcard loại 1**: Mặt trước hiển thị chữ Hán, phiên âm, nghĩa và ví dụ minh họa; mặt sau là dịch nghĩa ví dụ<br>• **Flashcard loại 2**: Mặt trước hiển thị hình ảnh + nghĩa tiếng Việt; mặt sau là chữ Hán, phiên âm và ví dụ minh họa<br>• **Flashcard loại 3**: Mặt trước hiển thị ví dụ tiếng Trung; mặt sau là nghĩa dịch, từ trọng tâm, hình minh họa và phiên âm<br><br>**Tùy chọn:**<br>&emsp;– Xem tất cả: hiển thị toàn bộ flashcard dạng list<br>&emsp;– Xáo trộn: trộn ngẫu nhiên thứ tự thẻ<br>&emsp;– Tự chạy: lật và phát âm thủ công<br>&emsp;– Phát tự động (Chậm / Bình thường / Nhanh): tự động lật và phát âm thanh theo tốc độ chọn<br><br>**Tương tác:**<br>&emsp;– Bấm một lần vào thẻ để lật mặt<br>&emsp;– Nhấn biểu tượng loa để nghe phát âm<br>&emsp;– Nhấn vào trạng thái “Chưa thuộc” / “Đã thuộc” để đánh dấu ghi nhớ<br>&emsp;– Khi học hết tất cả flashcard → mục “Học qua Flashcard” sẽ được đánh dấu hoàn thành |
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
    | **Chi tiết hiển thị**     | • **Loại flashcard** (giống “Học qua Flashcard”):<br>&emsp;– **Flashcard loại 1**: Mặt trước hiển thị chữ Hán, phiên âm, nghĩa và ví dụ minh họa; mặt sau là dịch nghĩa ví dụ<br>&emsp;– **Flashcard loại 2**: Mặt trước hiển thị hình ảnh + nghĩa tiếng Việt; mặt sau là chữ Hán, phiên âm và ví dụ minh họa<br>&emsp;– **Flashcard loại 3**: Mặt trước hiển thị ví dụ tiếng Trung; mặt sau là nghĩa dịch, từ trọng tâm, hình minh họa và phiên âm<br><br>• **Tùy chọn:**<br>&emsp;– **Xem tất cả**: Hiển thị toàn bộ flashcard dạng danh sách dọc (list view)<br>&emsp;– **Xáo trộn**: Trộn ngẫu nhiên thứ tự các thẻ trong bộ hiện tại<br>&emsp;– **Tự chạy**: Flashcard lật tự động theo thời gian mặc định<br>&emsp;– **FlashCard 2**: Chuyển sang loại flashcard thứ 2 (mặt trước là hình + nghĩa, mặt sau là chữ Hán + ví dụ)<br><br>• **Tương tác:**<br>&emsp;– Bấm 1 lần vào thẻ để lật mặt<br>&emsp;– Nhấn biểu tượng loa để nghe phát âm<br>&emsp;– Dùng thanh điều hướng để chuyển qua lại giữa các thẻ<br>&emsp;– Có hiển thị trạng thái “Đã thuộc” nếu từ vựng đó đã được học trước đó |
    | **Kết quả hiển thị**      | - Flashcard hiển thị đúng loại đã chọn<br> - Tùy chọn hoạt động chính xác theo thiết lập<br> - Có thể nghe phát âm qua nút loa<br> - Không tính vào % tiến độ từ vựng<br> - Không đánh dấu hoàn thành phần học |
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


#### 3.3.14 Chức năng luyện tập ngữ pháp – chế độ Học { #toc-3-3-14 }

??? book "Luyện tập ngữ pháp – chế độ Học"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp – chế độ Học |
    | **Mô tả**                 | Học viên học từng cấu trúc ngữ pháp thông qua flashcard trình bày ví dụ cụ thể. Sau mỗi flashcard có thể làm bài luyện tập nhanh như điền chỗ trống hoặc sắp xếp câu. |
    | **Giao diện liên quan**   | - Giao diện học FlashCard ngữ pháp<br> - Giao diện sắp xếp câu / điền từ sau mỗi flashcard<br> - Giao diện kết quả đúng/sai từng câu<br> - Giao diện tổng kết hoàn thành |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học → chọn khóa học<br>3. Vào tab "Ngữ pháp" → chọn một mục ngữ pháp cụ thể<br>4. Nhấn nút “Luyện tập” → chọn “Học”<br>5. Học qua từng flashcard ngữ pháp<br>6. Thực hiện các bài luyện tập nhanh (trắc nghiệm / sắp xếp)<br>7. Tiếp tục đến flashcard tiếp theo cho đến khi kết thúc |
    | **Chi tiết hiển thị**     | - FlashCard hiển thị cấu trúc + ví dụ minh họa<br> - Sau mỗi thẻ có thể xuất hiện bài luyện tập nhanh (sắp xếp hoặc chọn đáp án đúng)<br> - Câu trả lời được đánh giá đúng/sai ngay sau khi trả lời<br> - Hiển thị tiến độ và nút “Tiếp tục” chuyển sang thẻ tiếp theo<br> - Hiển thị thông báo “Hoàn thành” sau khi học xong toàn bộ |
    | **Kết quả hiển thị**      | - Hiển thị đúng/sai từng câu luyện tập<br> - FlashCard đánh dấu hoàn thành<br> - Giao diện tổng kết hiển thị điểm hoặc nhận xét động viên |
    | **Trường hợp không có dữ liệu** | - Không có cấu trúc ngữ pháp → hiển thị “Không có dữ liệu để học” |


#### 3.3.15 Chức năng luyện tập ngữ pháp – chế độ FlashCard { #toc-3-3-15 }

??? book "Luyện tập ngữ pháp – chế độ FlashCard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp – chế độ FlashCard |
    | **Mô tả**                 | Học viên học từng điểm ngữ pháp dưới dạng thẻ FlashCard. Mỗi thẻ gồm mặt trước – sau để luyện ghi nhớ, có thể đánh dấu “Đã thuộc”. Có 3 loại thẻ: (1) Tên & ví dụ, (2) Tên & định nghĩa, (3) Ví dụ & dịch nghĩa. |
    | **Giao diện liên quan**   | - Màn hình flashcard luyện ngữ pháp<br> - Màn hình chọn chế độ flashcard<br> - Tùy chọn: xem tất cả, xáo trộn, tự chạy<br> - Giao diện trạng thái “Đã thuộc” và thanh tiến độ |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Chọn khóa học cụ thể<br>3. Vào tab “Ngữ pháp” → chọn cấu trúc cần luyện<br>4. Chọn nút “Luyện tập” → chọn chế độ “FlashCard”<br>5. Flashcard hiển thị lần lượt theo thứ tự<br>6. Học viên lật thẻ và nhấn đánh dấu “Đã thuộc” (nếu cần)<br>7. Có thể sử dụng tùy chọn: xem tất cả, xáo trộn, tự chạy<br>8. Kết thúc khi học hết tất cả thẻ |
    | **Chi tiết hiển thị**     | - **Flashcard loại 1**: Mặt trước là tên cấu trúc + định nghĩa, mặt sau là 1–2 ví dụ minh họa kèm dịch nghĩa<br> - **Flashcard loại 2**: Mặt trước là định nghĩa bằng tiếng Việt, mặt sau là tên cấu trúc<br> - **Flashcard loại 3**: Mặt trước là ví dụ tiếng Trung, mặt sau là dịch nghĩa + cấu trúc liên quan<br> - Nút đánh dấu “Đã thuộc” hiển thị ở góc flashcard<br> - Giao diện chuyển thẻ bằng nút trái/phải hoặc vuốt ngang<br> - Tùy chọn khi bấm nút ⚙: “Xem tất cả” – hiển thị toàn bộ flashcard trong 1 danh sách; “Xáo trộn” – học ngẫu nhiên; “Tự chạy” – lật và chuyển thẻ tự động theo thời gian |
    | **Kết quả hiển thị**      | - Flashcard đánh dấu “Đã thuộc” sẽ hiển thị trạng thái và cập nhật vào % tiến độ đã học ngữ pháp<br> - Tính phần trăm số cấu trúc đã đánh dấu thuộc (áp dụng cho thống kê tổng ngữ pháp đã nắm)<br> - Lưu trạng thái flashcard đã học để đồng bộ giữa các lần mở ứng dụng |
    | **Trường hợp không có dữ liệu** | - Nếu chưa có flashcard cho cấu trúc ngữ pháp → hiển thị “Không có dữ liệu để luyện tập” |

#### 3.3.16 Chức năng luyện tập ngữ pháp – chế độ Flashcard { #toc-3-3-16 }

??? book "Luyện tập ngữ pháp – chế độ Flashcard"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Luyện tập ngữ pháp – chế độ Flashcard |
    | **Mô tả**                 | Học viên ôn tập ngữ pháp bằng thẻ flashcard có thể tự đánh dấu "Đã thuộc", hỗ trợ 3 loại flashcard hiển thị (tiêu đề, ví dụ, giải nghĩa). Kết thúc sẽ có thống kê số lượng đã thuộc và cần học lại. |
    | **Giao diện liên quan**   | - Màn hình flashcard<br> - Popup chọn chế độ học<br> - Popup tuỳ chọn: Xem tất cả, Xáo trộn, Tự chạy<br> - Màn hình kết quả tổng kết sau khi duyệt |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Vào tab “Ngữ pháp” trong bài học<br>3. Nhấn nút “Luyện tập” → chọn “Flashcard”<br>4. Xem lần lượt từng flashcard, bấm lật mặt sau nếu cần<br>5. Nhấn “Đã thuộc” hoặc “Cần học lại” để đánh dấu<br>6. Sau khi duyệt hết, hệ thống hiển thị tổng kết số lượng và phần trăm<br>7. Học viên có thể chọn “Duyệt lại” nếu muốn |
    | **Chi tiết hiển thị**     | - Có 3 loại flashcard:<br>&emsp;• **Loại 1**: Mặt trước là tiêu đề, mặt sau là ví dụ<br>&emsp;• **Loại 2**: Mặt trước là tiêu đề + ví dụ, mặt sau lặp lại ví dụ<br>&emsp;• **Loại 3**: Mặt trước là ví dụ, mặt sau là tiêu đề + dịch nghĩa<br> - Nút đánh dấu: “Đã thuộc” / “Cần học lại” hiển thị rõ ràng<br> - Có nút cài đặt với các tuỳ chọn: Xem tất cả, Xáo trộn, Tự chạy |
    | **Kết quả hiển thị**      | - Thống kê số lượng ngữ pháp “Đã thuộc” và “Cần học lại”<br> - Tính tỷ lệ phần trăm đã nắm của ngữ pháp<br> - Ghi nhận kết quả để hiển thị % nắm ngữ pháp ở danh sách tổng quan |
    | **Trường hợp không có dữ liệu** | - Hiển thị thông báo “Không có nội dung để học” |


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


#### 3.3.18 Chức năng Học kỹ năng nghe { #toc-3-3-18 }

??? book "Học kỹ năng nghe"
    | Trường                     | Nội dung |
    |---------------------------|----------|
    | **Tên chức năng**         | Học kỹ năng nghe |
    | **Mô tả**                 | Học viên luyện tập kỹ năng nghe thông qua các đoạn hội thoại có kèm audio. Giao diện cho phép tùy chỉnh hiển thị và tốc độ phát, đồng thời có thể đánh dấu đã thuộc hoặc lưu vào thư viện để học lại sau. |
    | **Giao diện liên quan**   | - Danh sách bài nghe<br> - Màn hình chi tiết bài nghe (audio + phụ đề)<br> - Popup tùy chọn tốc độ<br> - Nút đánh dấu “Đã thuộc” và “Lưu vào thư viện” |
    | **Luồng thao tác chính**  | 1. Học viên đăng nhập thành công<br>2. Từ màn hình danh sách khóa học chọn một khóa học cụ thể<br>3. Vào tab “Bài học” → chọn kỹ năng “Nghe”<br>4. Xem danh sách các bài hội thoại → chọn một bài<br>5. Tại màn hình chi tiết bài nghe:<br>&emsp;– Nhấn nút phát audio<br>&emsp;– Có thể bật/tắt phiên âm, dịch nghĩa, phụ đề<br>&emsp;– Tùy chọn tốc độ phát (Chậm / Bình thường / Nhanh)<br>&emsp;– Đánh dấu “Đã thuộc” hoặc “Lưu vào thư viện” nếu cần<br>6. Nhấn nút “Luyện tập” để chuyển sang phần luyện tập nếu có |
    | **Chi tiết hiển thị**     | - Danh sách bài nghe gồm tiêu đề tiếng Trung và dịch nghĩa<br> - Mỗi bài có icon tai nghe thể hiện kỹ năng nghe<br> - Màn hình chi tiết bài nghe hiển thị:<br>&emsp;• Thanh phát audio (có nút play, thời gian)<br>&emsp;• Các khối thoại gồm phiên âm, tiếng Trung, dịch nghĩa<br>&emsp;• Các nút chức năng: “Phiên âm”, “Dịch nghĩa”, “Phụ đề”, “Tốc độ”<br>&emsp;• Nút “Đã thuộc” và “Lưu vào thư viện” nằm góc phải phía trên |
    | **Kết quả hiển thị**      | - Audio được phát đúng nội dung hội thoại<br> - Hiển thị đúng các khối thoại với cấu trúc: Phiên âm – Tiếng Trung – Dịch nghĩa<br> - Cho phép thay đổi hiển thị từng lớp thông tin<br> - Cập nhật trạng thái “Đã thuộc” và “Lưu vào thư viện” cho từng bài nghe |
    | **Trường hợp không có dữ liệu** | - Không có bài nghe trong danh sách → hiển thị thông báo “Không có bài luyện nghe nào” |
