# 🤖 Hướng dẫn Training AI cho người vận hành

## 1. Tài liệu này dành cho ai?

Tài liệu này dành cho người vận hành, tư vấn viên, quản lý nội dung hoặc người phụ trách hệ thống AI trong trung tâm. Mục tiêu là giúp bạn tự tạo dữ liệu huấn luyện cho AI mà không cần biết code hay kiến thức kỹ thuật sâu.

Bạn sẽ đi theo đúng quy trình thực tế:

1. Vào màn hình thiết lập AI.
2. Chọn hoặc tạo model.
3. Tạo dataset theo đúng scenario.
4. Viết `System`, `OR`, `AND`, `Tag AI`, JSON và lệnh điều hướng.
5. Test lại câu trả lời.
6. Cấu hình nâng cao nếu cần.
7. Bấm `Fine-tuning` để bắt đầu huấn luyện.

## 2. Cần chuẩn bị gì trước khi bắt đầu?

- Bạn đã có tài khoản và vào được màn hình `Thiết lập AI`.
- Bạn biết rõ AI này dùng cho mục đích nào.
- Bạn đã chuẩn bị sẵn các câu khách hay hỏi và câu trả lời chuẩn mà trung tâm muốn AI dùng.
- Bạn nên gom nội dung theo từng mục tiêu rõ ràng. Ví dụ: `Welcome học viên mới`, `Tư vấn lớp vỡ lòng`, `Nhắc khách sau tư vấn`.

!!! note "Mẹo dễ nhớ"
    Một AI nên phục vụ một mục tiêu rõ ràng. Càng rõ mục tiêu, AI càng dễ trả lời đúng và ổn định.

## 3. Hiểu nhanh các khái niệm quan trọng

<div class="table-container">
  <table class="custom-table" style="max-width:none;width:100%;">
    <thead>
      <tr>
        <th style="width:190px;white-space:nowrap;text-align:center;">Khái niệm</th>
        <th style="text-align:center;">Hiểu đơn giản</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>Model</code></td>
        <td style="text-align:left;">Là AI mà bạn đang tạo ra để dùng cho một mục đích cụ thể. Có thể hiểu là một "nhân vật AI" hoặc một "AI chuyên cho một việc".</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>Dataset</code></td>
        <td style="text-align:left;">Trong tài liệu này, <strong>1 dataset = 1 scenario</strong>. Nghĩa là một dataset chỉ nên đại diện cho một tình huống hoàn chỉnh.</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>System</code></td>
        <td style="text-align:left;">Là phần dặn dò chung cho AI: AI là ai, nói chuyện với ai, giọng điệu thế nào, được phép và không được phép nói gì.</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>OR</code></td>
        <td style="text-align:left;">Dùng khi khách có nhiều cách hỏi khác nhau nhưng AI nên trả về cùng một ý trả lời.</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>AND</code></td>
        <td style="text-align:left;">Dùng khi AI cần đi theo một chuỗi hội thoại từ trên xuống dưới, giống như một cuộc nói chuyện thật.</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>Tag AI</code></td>
        <td style="text-align:left;">Là nhãn điều hướng flow bên trong AI. Khi đổi tag, AI sẽ chuyển sang một flow khác.</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>JSON</code></td>
        <td style="text-align:left;">Là dữ liệu AI trả thêm ngoài phần text thường, dùng để điều hướng flow hoặc gửi thông tin vận hành như <code>next</code> và <code>note</code>.</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>note</code></td>
        <td style="text-align:left;">Là nội dung ghi chú sẽ hiển thị bên hội thoại tin nhắn để người vận hành nhìn thấy ngữ cảnh hoặc hành động tiếp theo.</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>Test AI</code></td>
        <td style="text-align:left;">Màn hình để bạn giả lập mình là khách hàng và thử xem AI trả lời đã đúng chưa.</td>
      </tr>
      <tr>
        <td style="white-space:nowrap;text-align:left;"><code>Fine-tune</code></td>
        <td style="text-align:left;">Bước bắt đầu huấn luyện AI từ dữ liệu bạn đã nhập.</td>
      </tr>
    </tbody>
  </table>
</div>

## 4. Dataset = 1 scenario

Đây là quy ước rất quan trọng trong tài liệu này:

**1 dataset = 1 scenario.**

Hiểu đơn giản:

- `Dataset` không phải là nơi để gom tất cả mọi thứ vào chung.
- `Dataset` nên đại diện cho một tình huống hoàn chỉnh mà AI cần xử lý.
- Bên trong một dataset, bạn có thể dùng `System`, `OR`, `AND`, `Tag AI`, JSON và lệnh điều hướng để hoàn thiện scenario đó.

Ví dụ các dataset hợp lý:

- `Welcome học viên mới`
- `Tư vấn lớp vỡ lòng`
- `Nhắc khách sau tư vấn`

Khi nào nên tạo dataset mới:

- Khi khác mục tiêu tư vấn.
- Khi khác ngữ cảnh nghiệp vụ.
- Khi flow chính đã khác hoàn toàn.

Ví dụ:

- `Welcome học viên mới` và `Tư vấn khóa giao tiếp` không nên để chung một dataset.
- `Nhắc khách seen sau 1 giờ` và `Chốt thông tin để nhân sự gọi lại` cũng không nên để chung một dataset nếu đó là hai scenario khác nhau.

!!! warning "Không nên làm"
    Không nên nhét nhiều scenario không liên quan vào cùng một dataset. Việc này làm AI bị loãng, trả lời sai ngữ cảnh và khó fine-tune ổn định.

## 5. Tag AI và flow

`Tag AI` không chỉ là nhãn để phân loại. Trong tài liệu này, `Tag AI` được hiểu là điểm chia flow bên trong AI.

Hiểu đơn giản:

- `Dataset` là scenario lớn.
- `Tag AI` là các chặng nhỏ bên trong scenario đó.
- Khi AI đổi tag, nghĩa là AI đang chuyển sang một flow khác.

Ví dụ mối quan hệ giữa dataset, tag và scenario:

- `Dataset`: `Welcome học viên mới`
- `Tag AI 1`: `WELCOME_OPEN`
- `Tag AI 2`: `ASK_GOAL`
- `Tag AI 3`: `ASK_LEVEL`

Trong ví dụ này:

- Cả 3 tag vẫn thuộc cùng một dataset.
- Nhưng mỗi tag đại diện cho một flow nhỏ khác nhau trong cùng scenario.
- Khi AI dùng `<<NEXT-TAG>>`, AI sẽ chuyển từ tag hiện tại sang tag tiếp theo để đi flow mới.

!!! tip "Cách nhớ nhanh"
    Dataset là câu chuyện lớn. Tag là từng chặng của câu chuyện đó.

## 6. JSON, `note` và các lệnh đặc biệt

### 6.1. Các lệnh điều hướng cần dùng đúng cú pháp

Trong tài liệu này, các lệnh điều hướng được hiểu như sau:

- `<<STOP>>`: dừng AI tại đây.
- `<<CONTINUE>>`: tiếp tục flow hiện tại.
- `<<NEXT-TAG>>`: chuyển sang tag khác để đi flow mới.
- `<<PUSH-3600>>`: chỉ đẩy tin nhắn sau khi khách đã seen và đủ 3600 giây.
- `<<WAIT-3600>>`: đợi đủ 3600 giây rồi đẩy luôn, không cần khách seen.

Ý nghĩa thực tế:

- `<<STOP>>` dùng khi AI cần dừng và không tự đi tiếp nữa.
- `<<CONTINUE>>` dùng khi AI vẫn còn đang ở đúng flow hiện tại và cần hỏi tiếp hoặc xử lý tiếp.
- `<<NEXT-TAG>>` dùng khi AI cần đổi sang một tag khác để mở flow mới.
- `<<PUSH-3600>>` phù hợp khi bạn chỉ muốn nhắc lại sau khi khách đã seen.
- `<<WAIT-3600>>` phù hợp khi hệ thống cần tự đẩy tiếp mà không phụ thuộc vào việc khách có seen hay chưa.

Ví dụ dễ hiểu:

- `<<PUSH-3600>>`: khách đã seen, đủ 1 tiếng mới nhắc lại.
- `<<WAIT-3600>>`: không cần seen, đủ 1 tiếng là hệ thống tự gửi luôn.

### 6.2. JSON AI trả thêm là gì?

Ngoài phần text thường, AI có thể trả thêm JSON để hệ thống hoặc người vận hành hiểu bước tiếp theo.

Trong tài liệu này, JSON cần hiểu theo 2 key chính:

- `next`: tag tiếp theo AI cần chuyển sang.
- `note`: ghi chú sẽ hiển thị bên hội thoại tin nhắn.

Schema cơ bản:

```json
{
  "next": "TEN_TAG_TIEP_THEO",
  "note": "Nội dung ghi chú hiển thị trong hội thoại"
}
```

Quy ước sử dụng:

- `next` chỉ cần khi AI thực sự phải chuyển tag.
- `note` nên viết ngắn, rõ, để người vận hành nhìn vào hội thoại là hiểu tình hình.

### 6.3. Ví dụ JSON và lệnh điều hướng

Ví dụ 1: dùng `<<NEXT-TAG>>` để chuyển sang flow mới

```text
Dạ em hiểu rồi. Cho em hỏi thêm anh/chị đang học để giao tiếp, đi làm hay thi chứng chỉ ạ? <<NEXT-TAG>>
```

```json
{
  "next": "ASK_GOAL",
  "note": "Khách đã đồng ý tư vấn tiếp, chuyển sang flow hỏi mục tiêu học."
}
```

Ý nghĩa:

- AI vẫn trả lời bình thường bằng text.
- Nhưng đồng thời báo rằng flow tiếp theo là `ASK_GOAL`.
- `note` sẽ hiển thị bên hội thoại tin nhắn.

Ví dụ 2: dùng `<<STOP>>` khi AI cần dừng lại

```text
Dạ em đã ghi nhận nhu cầu của anh/chị. Nhân sự sẽ liên hệ lại để tư vấn chi tiết hơn nhé. <<STOP>>
```

```json
{
  "note": "Khách đã chốt nhu cầu, dừng AI để nhân sự tiếp nhận."
}
```

Ý nghĩa:

- AI dừng tại đây.
- `note` giúp người vận hành thấy vì sao AI dừng.

## 7. Ví dụ dễ hiểu cho `OR`, `AND` và `NEXT-TAG`

### Ví dụ `OR`: nhiều cách hỏi, cùng một ý trả lời

**Dataset / scenario:** `Tư vấn lớp vỡ lòng`

**Tình huống:** khách mới bắt đầu học và cần được tư vấn khóa cơ bản.

**User có thể hỏi:**

- Em là người mới bắt đầu.
- Tư vấn lớp vỡ lòng cho mình với ạ.
- Có khóa cho người chưa biết gì không?
- Ad tư vấn giúp em khóa cho người mới bắt đầu.

**Assistant trả lời chuẩn:**

Chào anh/chị, hiện trung tâm có lộ trình dành cho người mới bắt đầu. Nếu anh/chị chưa biết mình nên học theo mục tiêu giao tiếp, đi làm hay thi chứng chỉ, AI sẽ hỏi thêm để tư vấn khóa phù hợp nhất.

**Cách hiểu:** tất cả câu hỏi trên đều cùng một nhu cầu, nên dùng `OR`.

### Ví dụ `AND`: hội thoại đi theo từng bước

**Dataset / scenario:** `Tư vấn khóa giao tiếp`

**Tình huống:** AI cần hỏi thêm thông tin trước khi tư vấn.

**Flow hội thoại:**

- `User`: Em muốn học tiếng Trung để đi làm.
- `Assistant`: Anh/chị đang cần tiếng Trung giao tiếp hay cần thêm chứng chỉ ạ?
- `User`: Em cần giao tiếp.
- `User`: Em đang đi làm rồi.
- `Assistant`: Vậy anh/chị phù hợp với lộ trình giao tiếp dành cho người đi làm, ưu tiên phản xạ hội thoại và tình huống thực tế tại nơi làm việc.

**Cách hiểu:** AI sẽ đọc cả flow theo thứ tự từ trên xuống dưới, nên đây là `AND`.

### Ví dụ dùng `NEXT-TAG`, `note` và JSON

**Dataset / scenario:** `Welcome học viên mới`

**Tag hiện tại:** `WELCOME_OPEN`

**Assistant trả lời:**

```text
Chào anh/chị, em là AI tư vấn của trung tâm. Em sẽ hỏi nhanh vài câu để tư vấn đúng lộ trình cho mình nhé. <<NEXT-TAG>>
```

**JSON đi kèm:**

```json
{
  "next": "ASK_GOAL",
  "note": "Đã chào khách xong, chuyển sang flow hỏi mục tiêu học."
}
```

**Cách hiểu:**

- `next` báo AI chuyển sang tag `ASK_GOAL`.
- `note` là ghi chú sẽ hiển thị bên hội thoại tin nhắn.
- Vì đã đổi tag, AI đang sang một flow mới bên trong cùng dataset.

## 8. Checklist nhanh trước khi bấm `Fine-tuning`

- Mỗi dataset đang đúng là một scenario riêng.
- Bạn đã có `System` rõ ràng cho AI.
- Bạn đã tách đúng chỗ nào là `OR`, chỗ nào là `AND`.
- Mỗi flow `AND` đều kết thúc bằng một dòng `Assistant`.
- `Tag AI` đã được đặt rõ ràng và không trùng nghĩa.
- Nếu dùng `<<NEXT-TAG>>`, bạn đã chỉ rõ `next` trong JSON.
- Nếu cần ghi chú cho người vận hành, bạn đã thêm `note`.
- Bạn đã dùng đúng lệnh `<<PUSH-3600>>` hoặc `<<WAIT-3600>>` theo đúng ý định.
- Bạn đã bật prompt hoặc dataset đang dùng.
- Bạn đã test bằng các câu hỏi thật giống khách hàng ngoài thực tế.
- Bạn đã lưu lại các thay đổi ở phần `Cài đặt`.

## 9. Những lỗi dễ gặp

- Dùng `OR` cho một tình huống thực ra cần nhiều bước hỏi đáp. Kết quả là AI trả lời thiếu ngữ cảnh.
- Dùng `AND` nhưng flow kết thúc bằng `User` thay vì `Assistant`. Kết quả là AI không học được câu trả lời cuối.
- Viết `System` quá chung chung, không nói rõ AI là ai và đang phục vụ ai.
- Gộp quá nhiều mục tiêu khác nhau vào cùng một dataset, khiến AI trả lời bị loãng.
- Dùng sai dataset cho nhiều scenario khác nhau.
- Dùng `<<NEXT-TAG>>` nhưng không chỉ rõ tag tiếp theo trong `next`.
- Có dùng flow điều hướng nhưng quên trả JSON.
- Có viết `note` nhưng note không rõ nghĩa hoặc quá dài, làm người vận hành khó đọc bên hội thoại.
- Dùng `<<PUSH-3600>>` trong khi thực tế cần `<<WAIT-3600>>`.
- Chưa test AI mà đã fine-tune ngay.
- Tự chỉnh `temperature` hoặc `top_p` khi chưa hiểu rõ ý nghĩa của các tham số này.

## 10. Các bước thực hành training AI

### Bước 1. Vào màn hình `Thiết lập AI`

Từ thanh menu trên cùng, bấm vào `Thiết lập AI`. Ở màn hình này, bạn sẽ nhìn thấy khu vực làm việc chính ở bên trái và danh sách model hoặc dataset ở bên phải.

<img src="/assets/images/ai-training/01-open-ai-setup-screen.png" alt="Bước 1 - Vào màn hình Thiết lập AI" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** vào đúng khu vực cấu hình AI và chuẩn bị chọn model huấn luyện.

### Bước 2. Chọn model đã có hoặc tạo model mới

Ở góc phải, bạn có thể:

- Chọn một model đã tồn tại trong danh sách.
- Hoặc bấm `Thêm mô hình huấn luyện` để tạo model mới.

Nếu đây là AI hoàn toàn mới, bạn nên tạo model mới để dễ quản lý và tránh trộn dữ liệu với AI khác.

<img src="/assets/images/ai-training/02-select-or-create-model.png" alt="Bước 2 - Chọn hoặc tạo model" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** xác định bạn đang chỉnh AI cũ hay tạo AI mới.

### Bước 3. Điền thông tin khi tạo model mới

Khi tạo model mới, hệ thống sẽ mở popup để bạn nhập thông tin.

Bạn cần chú ý các phần sau:

- `Nhập tên`: đặt tên dễ hiểu để người vận hành nhìn là biết AI này dùng cho việc gì.
- `Avatar`: chọn hình đại diện nếu hệ thống yêu cầu hiển thị ở hội thoại.
- `Tên hiển thị`: tên AI sẽ hiện ở phần chat hoặc phần quản lý.
- `Model AI`: chọn model theo quy ước của team. Nếu chưa có yêu cầu riêng, nên dùng model mặc định đã được team chọn sẵn trong hệ thống.

Sau khi điền xong, bấm `Thêm`.

<img src="/assets/images/ai-training/03-fill-model-information.png" alt="Bước 3 - Điền thông tin model" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** đặt tên rõ ràng, chọn đúng model và tạo AI mới.

### Bước 4. Chọn dataset và viết `System prompt`

Sau khi chọn model, cột bên phải sẽ hiển thị danh sách dataset của model đó.

Bạn có thể:

- Chọn dataset đã có sẵn để chỉnh sửa.
- Hoặc bấm `Thêm mới dataset` để tạo dataset mới.

Khi tạo dataset, hãy nhớ quy ước:

- Mỗi dataset chỉ nên là một scenario.
- Nếu khác mục tiêu hoặc khác flow chính, hãy tạo dataset mới.
- `OR` và `AND` là dữ liệu bên trong scenario đó, không phải lý do để gom nhiều scenario vào chung một dataset.

Sau khi chọn dataset, vào tab `System` để nhập prompt chung cho AI.

`System` là phần rất quan trọng. Đây là nơi bạn dặn AI:

- AI là ai.
- Đang tư vấn cho đối tượng nào.
- Cách xưng hô ra sao.
- Mục tiêu tư vấn là gì.
- Những nội dung nào không được trả lời sai hoặc không được nói lan man.

<img src="/assets/images/ai-training/04-select-dataset-and-system-prompt.png" alt="Bước 4 - Chọn dataset và viết System" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** chọn đúng dataset theo đúng scenario, viết phần định hướng chung cho AI và bật prompt hoạt động.

!!! tip "Cách hiểu dễ nhất về `System`"
    Nếu `OR`, `AND`, `Tag AI` là những ví dụ cụ thể, thì `System` là luật chung để AI luôn nói đúng vai trò và đúng giọng điệu.

### Bước 5. Thiết lập `OR` khi nhiều câu hỏi khác nhau nhưng cùng một ý trả lời

Chuyển sang phần `User & Assistant`, sau đó chọn chế độ `OR`.

Ở chế độ này, bạn sẽ làm theo logic sau:

1. Nhập nhiều câu khách có thể hỏi, mỗi câu là một dòng `User`.
2. Sau đó nhập một câu trả lời chuẩn ở phần `Assistant`.

Điều này có nghĩa là:

- Khách có thể hỏi bằng nhiều cách khác nhau.
- Nhưng AI vẫn nên hiểu đó là cùng một nhu cầu.
- Và AI sẽ trả về cùng một ý trả lời mà bạn đã chuẩn hóa.
- Tất cả các câu `OR` này vẫn đang nằm trong cùng một scenario của dataset hiện tại.

Ví dụ ảnh dưới đây đang minh họa nhiều cách khách hỏi cùng một ý:

<img src="/assets/images/ai-training/05-or-user-questions.png" alt="Bước 5 - OR cho nhiều câu hỏi của khách" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

Sau đó bạn nhập câu trả lời chuẩn của AI ở phần `Assistant`:

<img src="/assets/images/ai-training/06-or-assistant-answer.png" alt="Bước 5 - OR cho câu trả lời chuẩn của AI" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** gom nhiều cách hỏi giống nhau của khách vào nhóm `OR`, rồi viết một câu trả lời chuẩn cho AI.

!!! note "Mẹo phân biệt `OR`"
    `OR` phù hợp khi khách hỏi cùng một ý bằng nhiều câu chữ khác nhau, ví dụ: "Em mới bắt đầu", "Có lớp cho người chưa biết gì không?", "Tư vấn khóa cơ bản giúp em".

### Bước 6. Thiết lập `AND` khi muốn AI đi theo một flow hội thoại

Chế độ `AND` dùng khi bạn muốn AI học một cuộc trò chuyện theo trình tự từ trên xuống dưới.

Ở chế độ này:

- Bạn nhập lần lượt từng câu của `User` và `Assistant`.
- AI sẽ đọc theo đúng thứ tự bạn sắp xếp.
- Có thể có nhiều dòng `User` liên tiếp trước khi đến một dòng `Assistant`.
- Flow có thể dài nhiều lượt.
- Nên kết thúc mỗi flow bằng một dòng `Assistant` để AI hiểu được câu trả lời cuối cùng cần đưa ra.
- Flow `AND` vẫn là dữ liệu bên trong scenario hiện tại của dataset.

<img src="/assets/images/ai-training/07-and-conversation-flow.png" alt="Bước 6 - AND cho flow hội thoại" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** nhập hội thoại theo đúng thứ tự diễn ra thật, từ câu mở đầu đến câu AI cần trả lời.

!!! tip "Mẹo phân biệt `AND`"
    Nếu `OR` là nhiều cách hỏi nhưng một ý trả lời, thì `AND` là một cuộc hội thoại nhiều bước có ngữ cảnh đi tiếp từ trên xuống dưới.

### Bước 7. Test AI trước khi huấn luyện

Sau khi đã nhập dữ liệu, chuyển sang tab `Test AI`.

Tại đây bạn:

- Chọn AI cần test ở cột bên phải.
- Gõ câu hỏi như thể bạn đang là khách hàng thật.
- Xem AI có trả lời đúng theo ý mình mong muốn hay chưa.

Nếu AI chưa trả lời đúng, hãy quay lại phần training để chỉnh `System`, `OR`, `AND`, `Tag AI` hoặc JSON rồi test lại.

<img src="/assets/images/ai-training/08-test-ai-screen.png" alt="Bước 7 - Test AI" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** kiểm tra chất lượng câu trả lời của AI trước khi fine-tune.

### Bước 8. Cấu hình nâng cao trong tab `Cài đặt`

Tab `Cài đặt` là nơi bạn quản lý thêm một số thông tin vận hành cho AI.

Những mục quan trọng cần hiểu:

- `Mô hình huấn luyện`: chọn model mà prompt này đang thuộc về.
- `Tag AI`: nhãn điều hướng để AI chuyển từ flow này sang flow khác trong cùng scenario.
- `Prompt`: nội dung prompt đang dùng, có thể chứa text thường, JSON hoặc lệnh đặc biệt.
- `Dừng AI`: bật khi bạn muốn tạm ngưng sử dụng prompt này.
- `Đổi độ ưu tiên`: dùng khi team có quy ước chuyển prompt sang mức ưu tiên khác sau khi kết thúc prompt. Nếu không có yêu cầu riêng, có thể để mặc định.
- `Trung tâm`: chọn đúng trung tâm mà AI này áp dụng.
- `temperature`, `top_p`: tham số tinh chỉnh cách AI diễn đạt. Nếu bạn không rành kỹ thuật, nên giữ nguyên theo mặc định của team.
- Biểu tượng `lưu`: bắt buộc bấm lưu sau khi chỉnh sửa.
- Dấu `check` xanh: dùng để kích hoạt prompt đang sử dụng.

<img src="/assets/images/ai-training/09-advanced-settings.png" alt="Bước 8 - Cài đặt nâng cao" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** chọn đúng trung tâm, kiểm tra `Tag AI`, prompt đang dùng, chỉ chỉnh các thông số nâng cao khi thật sự cần, và nhớ lưu lại.

!!! warning "Nếu bạn không rành kỹ thuật"
    Bạn có thể tập trung vào 4 phần chính: `Trung tâm`, `Tag AI`, `Prompt`, `Dừng AI`. Các ô như `temperature` và `top_p` nên để nguyên nếu team chưa yêu cầu chỉnh.

### Bước 9. Mở `Fine-tuning`

Khi dữ liệu đã ổn, bấm nút `Fine-tuning` ở góc trên.

<img src="/assets/images/ai-training/10-open-fine-tune.png" alt="Bước 9 - Mở Fine-tuning" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** mở phần huấn luyện chính thức cho AI.

### Bước 10. Xem chi phí ước tính và xác nhận huấn luyện

Hệ thống sẽ hiển thị popup `Cài đặt Fine Tune` để bạn kiểm tra lại:

- Tên AI đang chuẩn bị huấn luyện.
- Chi phí input và output.
- Giá huấn luyện.
- Chi phí ước tính.
- Nút `Xem dữ liệu huấn luyện` để rà lại dữ liệu trước khi chạy.

Nếu mọi thứ đã đúng, bấm `OK` để bắt đầu fine-tune.

Theo ghi chú trong giao diện mẫu, thời gian huấn luyện trung bình có thể khoảng từ 1 đến 2 giờ.

<img src="/assets/images/ai-training/11-confirm-fine-tune.png" alt="Bước 10 - Xác nhận Fine-tuning" style="display:block;margin:0 auto;max-width:1100px;width:100%;" />

**Bạn cần làm gì ở bước này:** kiểm tra lại dữ liệu và xác nhận huấn luyện.

## 11. Kết luận

Muốn training AI dễ và hiệu quả, bạn chỉ cần nhớ 4 ý:

1. `1 dataset = 1 scenario`.
2. `Tag AI` dùng để chia flow và điều hướng flow.
3. `OR` là nhiều cách hỏi nhưng cùng một ý trả lời, còn `AND` là hội thoại đi từ trên xuống dưới.
4. JSON, `note` và các lệnh như `<<STOP>>`, `<<CONTINUE>>`, `<<NEXT-TAG>>`, `<<PUSH-3600>>`, `<<WAIT-3600>>` phải được dùng đúng mục đích.

Khi làm đúng 4 phần này, sau đó test lại và mới bấm `Fine-tuning`, AI sẽ ổn định và bám sát nội dung trung tâm mong muốn hơn rất nhiều.
