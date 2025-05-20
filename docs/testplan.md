# Kế hoạch kiểm thử (Test Plan)

---

| **Mục**              | **Chi tiết**                                |
|----------------------|----------------------------------------------|
| Tên kế hoạch kiểm thử| ICS Sakumi – Tính năng quản lý lớp học dành cho giáo viên   |
| Người lập            | Vương (QC Tester)            |
| Ngày lập             | 20/05/2025                                   |

---

### 1. Giới thiệu

Tài liệu này mô tả kế hoạch kiểm thử cho các chức năng thuộc module **Quản lý lớp học** trong hệ thống ICS Nhật Ngữ Sakumi, được sử dụng bởi người dùng có vai trò **Giáo viên**.

Mục tiêu của kế hoạch kiểm thử:
- Đảm bảo các chức năng hoạt động đúng theo đặc tả đã được phê duyệt.
- Phát hiện và ghi nhận lỗi phần mềm trong quá trình sử dụng thực tế.
- Đánh giá tính ổn định, khả năng sử dụng và trải nghiệm người dùng từ góc nhìn của giáo viên.

---

### 2. Phạm vi kiểm thử

Kiểm thử tất cả các chức năng trong module **Quản lý lớp học** dành cho **giáo viên**, bao gồm:

- Hiển thị danh sách lớp và thống kê tổng quan (H-001, H-002)
- Truy cập và xem chi tiết bài học (đã học, chưa học, đang học) (H-003, H-004)
- Quản lý quy trình dạy học theo từng trạng thái buổi học (**F-001**):  
  &nbsp;&nbsp;&nbsp;&nbsp;• Chưa bắt đầu  
  &nbsp;&nbsp;&nbsp;&nbsp;• Đã bắt đầu – chưa điểm danh  
  &nbsp;&nbsp;&nbsp;&nbsp;• Đã điểm danh – chưa hoàn tất
- Thực hiện điểm danh và ghi chú buổi học (H-005, H-006)
- Chấm điểm bài tập và bài kiểm tra (F-002, F-003)
- Quản lý bài tập và kiểm tra (H-007)
- Theo dõi tiến độ tự học của học viên (H-008)
- Xem đánh giá giáo viên trong lớp (H-009)  
- Giao bài kiểm tra cho học viên (F-005)
- Thu hồi bài kiểm tra đã giao (F-006)
---

### 3. Mục tiêu kiểm thử

- Kiểm tra hiển thị chính xác danh sách lớp và chỉ số tổng quan (H-001, H-002)
- Đảm bảo giáo viên xem được chi tiết bài học (H-003, H-004)
- Kiểm tra luồng thao tác buổi học theo từng trạng thái (F-001)
- Kiểm tra thao tác điểm danh và ghi chú lớp học (H-005, H-006)
- Đảm bảo chức năng chấm bài hoạt động đúng và cập nhật trạng thái bài chấm (F-002, F-003)
- Xác minh dữ liệu tổng quan bài tập/kiểm tra hiển thị chính xác (H-007)
- Đảm bảo dữ liệu tự học được ghi nhận và hiển thị đúng theo học viên (H-008)
- Kiểm tra hiển thị đánh giá giáo viên trong từng buổi học (H-009)
- Đảm bảo hệ thống hoạt động mượt trên trình duyệt phổ biến (Chrome, Firefox, Edge)
- Kiểm tra trải nghiệm thực tế của giáo viên khi thao tác liên tục    
- Đảm bảo chức năng giao bài kiểm tra cho học viên đúng điều kiện, trạng thái cập nhật chính xác (F-005)
- Kiểm tra khả năng thu hồi bài kiểm tra đã giao và cập nhật lại trạng thái phù hợp (F-006)

---

### 4. Phương pháp kiểm thử

#### 4.1 Phương pháp:
- **Kiểm thử thủ công (Manual Testing)**
- **Kiểm thử tự động (Automated Testing)**

#### 4.2  Loại kiểm thử:
- **Kiểm thử chức năng (Functional Testing):** Kiểm tra hệ thống hoạt động đúng theo mô tả.
- **Kiểm thử hồi quy (Regression Testing):** Kiểm tra chức năng cũ vẫn hoạt động đúng sau cập nhật. *(Chạy sau khi hoàn tất kiểm thử thủ công)*
- **Kiểm thử khả dụng (Usability Testing):** Đánh giá trải nghiệm người dùng là giáo viên.
- **Kiểm thử tương thích trình duyệt (Compatibility Testing):** Kiểm tra hiển thị và thao tác trên Chrome, Firefox, Edge.

#### 4.3 Công cụ sử dụng:
- **Microsoft Excel:** Quản lý test case và tổng hợp kết quả.
- **Selenium:** Viết kịch bản kiểm thử tự động cho các luồng lặp lại.

---

### 5. Lịch trình kiểm thử

| **Giai đoạn**            | **Ngày bắt đầu** | **Ngày kết thúc** |
|--------------------------|------------------|--------------------|
| Lập kế hoạch             | 20/05/2025       |                    |
| Thiết kế test case       | 20/05/2025       |                    |
| Thực thi kiểm thử        | 20/05/2025       |                    |
| Kiểm tra lỗi sau khi   sửa     | 20/05/2025       |                    |
| Hoàn tất kiểm thử        | 20/05/2025       |                    |
| Báo cáo kết quả kiểm thử | 20/05/2025       |                    |

---

### 6. Môi trường kiểm thử

- **Trình duyệt & phần mềm:** Google Chrome bản mới nhất
- **Đường dẫn kiểm thử (Staging):** [https://ics.pls.edu.vn/](https://ics.pls.edu.vn/)

---

### 7. Nhân sự và trách nhiệm

| **Vai trò**         | **Tên**            | **Trách nhiệm**                                       |
|---------------------|--------------------|--------------------------------------------------------|
| QC | Vương              | Lập kế hoạch kiểm thử, điều phối thực hiện             |
| QC       | Vương              | Thực hiện test, ghi nhận lỗi, phối hợp xử lý bug, viết test report       |
| Dev support     | Long, Trí          | Phân tích lỗi, sửa lỗi, hỗ trợ thiết lập và cấu hình môi trường |

---    
### 8. Rủi ro và phương án giảm thiểu

| **Rủi ro**                                     | **Phương án giảm thiểu**                                                                 |
|------------------------------------------------|------------------------------------------------------------------------------------------|
| Thay đổi yêu cầu giữa chừng                    | Khóa phạm vi kiểm thử trước khi chạy test chính thức                                    |
| Thiếu dữ liệu học viên thực tế để kiểm thử     | Tạo dữ liệu mẫu có tính đại diện cao, mô phỏng tình huống thực tế                      |
| Không thể kiểm thử toàn bộ test case (thiếu thời gian, nguồn lực) | Ưu tiên chạy test case theo mức độ ưu tiên (High/Medium trước)          |
| Thiết kế test case chưa bao phủ hết luồng thực tế → Khách hàng phát hiện lỗi ngoài dự đoán | Review chéo test case, tổ chức test exploratory và bổ sung tình huống thực tế từ end-user |

---  
### 9. Tiêu chí bắt đầu và kết thúc kiểm thử (Entry & Exit Criteria)

#### 9.1 Tiêu chí bắt đầu (Entry Criteria):
- Chức năng đã được phát triển đầy đủ và ổn định (**code complete**)
- Môi trường staging đã sẵn sàng và ổn định
- Test case đã được viết và được review nội bộ
- Đã có dữ liệu test hoặc dữ liệu mẫu phù hợp

#### 9.2 Tiêu chí kết thúc (Exit Criteria):
- Tối thiểu **95% test case pass**
- **5% còn lại** bắt buộc là những test case có **mức độ ưu tiên thấp** (Low Priority)
- Không còn lỗi **Critical** hoặc **High severity** chưa xử lý
- Tất cả lỗi còn lại đã được ghi nhận và có kế hoạch xử lý cụ thể
- Hoàn tất báo cáo test và gửi cho các bên liên quan


<div style="text-align: center;"> - HẾT - </div>