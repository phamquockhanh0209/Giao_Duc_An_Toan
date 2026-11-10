# SafeTeen — Hiểu ranh giới · Tôn trọng bản thân · Biết cách bảo vệ mình

Nền tảng giáo dục tương tác về ranh giới cá nhân, quyền riêng tư, sự đồng thuận và phòng chống xâm hại, quấy rối dành cho học sinh THPT.

---

## 1. Mục tiêu & Định hướng thiết kế
- **Đối tượng:** Học sinh Trung học phổ thông (THPT) tại Việt Nam.
- **Ngôn ngữ truyền đạt:** Thân thiện, không phán xét, dễ hiểu, tích cực, không gây sợ hãi hoặc mô tả nội dung nhạy cảm trực quan.
- **Phong cách thị giác:** Editorial + Educational + Human-centered + Modern.
  - Bảng màu trầm ấm, tự nhiên: `#F7F5F0` (nền chính), `#EEEAE2` (nền phụ), `#202321` (chữ chính), `#646862` (chữ phụ), `#5E7767` (xanh dịu), `#314A40` (xanh đậm), `#B87B5A` (màu nhấn ấm), viền `#D9D6CE`.
  - Phông chữ kết hợp: *Be Vietnam Pro* (rõ ràng, hiện đại) & *Newsreader* (tiêu đề trang nhã phong cách tạp chí học thuật).
  - Không sử dụng hiệu ứng màu neon, gradient AI tím xanh, glassmorphism hay emoji làm icon.

---

## 2. Cấu trúc thư mục

```
SafeTeen/
├── index.html            # Trang chủ: Tổng quan, 3 trục nội dung, 5 bước xử lý, xem trước tình huống
├── pre-test.html         # Trang đánh giá đầu vào (bắt buộc trước khi tiếp cận nội dung chính)
├── knowledge.html        # Sổ tay kiến thức: 11 chuyên đề số hóa với mục lục sticky và góc hỏi đáp ẩn danh
├── scenarios.html        # Tình huống thực tế: 5 bài tập tương tác có giải thích "Vì sao?" và thẻ kỹ năng
├── quiz.html             # Bài Quiz luyện tập & đánh giá: 5 mức độ tư duy, so sánh Hành trình Trước/Sau
├── css/
│   └── style.css         # Toàn bộ thiết kế responsive, biến màu sắc, typography và components
├── js/
│   ├── main.js           # Kiểm soát luồng điều hướng (gatekeeper), modal "Kết quả của tôi", menu mobile
│   ├── chatbot.js        # Giao diện chatbot SafeTeen AI
│   ├── pretest.js        # Động cơ 20 câu hỏi đánh giá nhận thức ban đầu, lưu trữ localStorage
│   ├── knowledge.js      # Scrollspy theo dõi mục lục, gửi câu hỏi ẩn danh và phản hồi mẫu
│   ├── scenarios.js      # Bộ 5 tình huống học đường với phản hồi chuyên sâu và tích lũy kỹ năng
│   └── quiz.js           # 10 câu hỏi theo 5 mức độ nhận thức, thang điểm 50, biểu đồ Trước/Sau thuần CSS
├── api/
│   └── gemini.js         # API serverless Vercel, giữ API key ở phía server
└── README.md             # Hướng dẫn sử dụng và giới thiệu dự án
```

---

## 3. Luồng trải nghiệm người dùng (Learning Journey)

1. **Pre-test (`pre-test.html`)**:
   - Người dùng mới truy cập bắt buộc phải hoàn thành bài đánh giá 20 câu nhận thức đầu vào.
   - Các liên kết đến các trang khác được kiểm soát chặt chẽ nhằm đảm bảo học sinh có dữ liệu đầu vào khách quan trước khi học.
   - Kết quả hiển thị nhẹ nhàng (ví dụ: `14 / 20`), không xếp hạng áp lực, không so sánh thứ bậc.

2. **Trang chủ (`index.html`)**:
   - Khái quát giá trị cốt lõi: 3 Trục nội dung (Hiểu - Nhận diện - Xử lý) và Quy trình 5 bước ứng phó an toàn.
   - Xem trước các tình huống thực tế và các kênh hỗ trợ khẩn cấp.

3. **Sổ tay kiến thức (`knowledge.html`)**:
   - 11 chủ đề chuyên sâu: Ranh giới cá nhân, Quyền nói "không", Sự đồng thuận (5 nguyên tắc), Nhận diện hành vi xâm phạm, Áp lực & thao túng, Nhận biết nguy cơ, Kỹ năng phòng tránh 5 bước, Xử lý sau sự việc, Bảng đối chiếu Tôn trọng vs Cảnh giác, Quyền riêng tư & bảo vệ không gian riêng, An toàn trên mạng & nhận diện nguy cơ giao tiếp trực tuyến.
   - Góc hỏi đáp ẩn danh hỗ trợ học sinh tự giải đáp các băn khoăn thầm kín.

4. **Tình huống tương tác (`scenarios.html`)**:
   - 5 tình huống thực tế: Bạn tự ý lấy điện thoại, Bị ép chụp ảnh đăng story, Nhận tin nhắn dồn dập lúc nửa đêm, Bị nhóm bạn gây áp lực ép đi chơi nơi rủi ro, Tài khoản lạ tặng quà và yêu cầu giữ bí mật.
   - Khi chọn đáp án, hệ thống giải thích cặn kẽ mục đích "Vì sao?", phân tích các phương án và tổng hợp thẻ kỹ năng đạt được.

5. **Quiz & Đánh giá tổng kết (`quiz.html`)**:
   - Gồm 10 câu hỏi thuộc 5 mức độ: Nhận biết cơ bản → Thông hiểu → Vận dụng → Phân tích tình huống → Vận dụng cao (tổng 50 điểm).
   - Biểu đồ **Hành trình của bạn** trực quan so sánh kết quả Trước (Pre-test) và Sau (Quiz) để học sinh tự hào về sự tiến bộ nhận thức của chính mình.
   - Hướng dẫn các nguồn trợ giúp chính thống: Gia đình, Thầy cô, Phòng tham vấn học đường và **Tổng đài Quốc gia Bảo vệ Trẻ em 111**.

---

## 4. Cách chạy trang web

Giao diện dùng HTML5, CSS3 và Vanilla JavaScript. Các tính năng học tập cơ bản có thể chạy tĩnh; riêng chatbot AI cần API serverless trên Vercel:
- **Cách 1:** Mở trực tiếp file `pre-test.html` hoặc `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Safari).
- **Cách 2:** Mở thư mục bằng VS Code và chọn **Open with Live Server**. Chatbot AI cần được triển khai trên Vercel (hoặc chạy bằng `vercel dev`) để gọi được API; Live Server và GitHub Pages không chạy thư mục `api/`.

Dữ liệu tiến độ học tập được lưu trữ riêng tư trên trình duyệt (`localStorage`) của người học. Người dùng có thể nhấn vào nút **"Kết quả của tôi"** ở góc trên cùng bên phải để xem bảng tổng hợp hoặc chọn **"Làm lại từ đầu (Xóa dữ liệu)"** bất cứ khi nào muốn kiểm tra lại.

---

## 5. Cấu hình SafeTeen AI (Google Gemini)

Chatbot gọi Gemini thông qua API serverless tại `api/gemini.js`. Không đặt API key trong HTML/JavaScript phía trình duyệt và không commit key lên GitHub.

### Tạo API key trong Google AI Studio

1. Đăng nhập Google và mở [Google AI Studio - API keys](https://aistudio.google.com/app/apikey).
2. Chọn **Create API key**, rồi tạo key cho một Google Cloud project (hoặc chọn project được yêu cầu).
3. Sao chép key và lưu ở nơi riêng tư. Không gửi key trong chat, ảnh chụp màn hình hoặc mã nguồn.
4. Kiểm tra hạn mức, điều khoản và khả năng sử dụng Gemini API trong tài khoản/khu vực của bạn; giới hạn miễn phí và model khả dụng có thể thay đổi.

### Thêm key vào Vercel

1. Đưa repository GitHub này lên Vercel và chọn đúng project.
2. Vào **Project Settings → Environment Variables**.
3. Tạo biến `GEMINI_API_KEY`, dán key làm giá trị, chọn môi trường cần dùng rồi lưu.
4. Vào **Deployments** và redeploy để deployment nhận biến mới.
5. Mở website trên domain Vercel, nhấn **Hỏi SafeTeen AI** và thử gửi câu hỏi. API không chạy khi chỉ mở HTML trực tiếp hoặc dùng GitHub Pages/Live Server; khi phát triển local, dùng Vercel CLI (`vercel dev`) để chạy cả trang và API.

Nếu key từng được đưa lên GitHub, hãy thu hồi/xóa key đó trong AI Studio và tạo key mới. Đừng chỉ xóa key khỏi file hoặc lịch sử commit.

## 6. Đẩy thay đổi lên GitHub

Vì repository đã được kết nối với `origin`, sau khi thay đổi code bạn có thể chạy trong terminal tại thư mục project:

```bash
git add README.md api/gemini.js css/style.css js/chatbot.js scenarios.html
git commit -m "Add SafeTeen Gemini chatbot"
git push origin main
```

Sau khi push, Vercel sẽ tự deploy nếu đã bật Git deployment. Chỉ đẩy code; không thêm API key vào commit.
