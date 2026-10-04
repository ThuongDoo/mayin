# Kế hoạch SEO – lên top tìm kiếm

Website đã được tối ưu kỹ thuật sẵn (tốc độ, schema, sitemap, URL, trang theo khu vực / mã hộp mực).
Phần còn lại phụ thuộc vào **Google Business Profile, đánh giá thật và nội dung đều đặn**.
Với dịch vụ tại nhà, khách tìm "nạp mực gần đây", "sửa máy in Cầu Giấy" sẽ thấy **khung bản đồ (Map Pack) trước** rồi mới đến website – nên việc số 1 là Google Maps.

Thời gian thực tế: từ khóa dài (VD "nạp mực hp 12a cầu giấy") 1–3 tháng; từ khóa chính ("nạp mực tận nơi hà nội") 3–6 tháng trở lên, tùy mức cạnh tranh.

---

## Tuần 1 – Bắt buộc làm ngay

### 1. Google Business Profile (quan trọng nhất)
- [ ] Tạo tại https://business.google.com – tên đúng tên thương hiệu (không nhồi từ khóa vào tên, dễ bị khóa).
- [ ] Danh mục chính: **Dịch vụ sửa chữa máy in**; danh mục phụ: *Cửa hàng mực in*, *Dịch vụ sửa chữa máy tính*.
- [ ] Không có cửa hàng đón khách → chọn **doanh nghiệp theo khu vực phục vụ**, ẩn địa chỉ, thêm các quận/phường phục vụ.
- [ ] Điền đủ: SĐT (giống hệt trên web), giờ mở cửa, link website, mô tả 750 ký tự có từ khóa tự nhiên.
- [ ] Thêm **Dịch vụ** kèm giá (lấy từ bảng giá trên web).
- [ ] Đăng 10+ ảnh thật: kỹ thuật viên, xe, dụng cụ, trước/sau khi nạp mực.
- [ ] Sau khi xác minh: copy link Google Maps dán vào CMS → *Thông tin & cài đặt chung* → **Link Google Maps** (và tọa độ, link nhúng bản đồ).

### 2. Google Search Console
- [ ] Đổi `site` trong `astro.config.mjs` thành tên miền thật, đưa web lên mạng.
- [ ] Xác minh tên miền tại https://search.google.com/search-console
- [ ] Gửi sitemap: `https://tên-miền/sitemap-index.xml`
- [ ] Dùng *Kiểm tra URL → Yêu cầu lập chỉ mục* cho trang chủ, trang dịch vụ, trang khu vực.
- [ ] Kiểm tra schema tại https://search.google.com/test/rich-results

### 3. Thông tin nhất quán (NAP)
Tên – địa chỉ – SĐT phải **giống hệt nhau** ở mọi nơi: website, Google Maps, Facebook, Zalo OA, các trang danh bạ.
- [ ] Fanpage Facebook (dán link vào CMS)
- [ ] Zalo Official Account
- [ ] Bing Places, Apple Business Connect (có thể nhập từ Google)
- [ ] Các trang danh bạ doanh nghiệp Việt Nam (trang vàng…)

---

## Hàng tuần – Duy trì

### Đánh giá Google (yếu tố số 1 của Map Pack)
- [ ] Sau **mỗi lần làm xong**, gửi khách link viết đánh giá qua Zalo (lấy link "Yêu cầu đánh giá" trong Google Business Profile). In mã QR dán lên máy in sau khi nạp mực.
- [ ] Trả lời **mọi** đánh giá trong 24h, nhắc tên dịch vụ + khu vực tự nhiên (VD "Cảm ơn anh đã dùng dịch vụ nạp mực HP 12A tại Cầu Giấy").
- [ ] Đưa đánh giá thật lên web: CMS → Trang chủ → Đánh giá khách hàng.
- ❌ Không mua / tự viết đánh giá giả – Google phát hiện và có thể xóa hồ sơ.

### Bài đăng Google Business Profile
- [ ] 1–2 bài/tuần: ảnh công việc thực tế + mô tả ngắn + nút Gọi.

### Blog: 1–2 bài/tuần
Viết trong CMS → Bài viết blog. Mỗi bài: 1 từ khóa chính trong tiêu đề, mô tả SEO 120–160 ký tự, ít nhất 600 chữ, có ảnh thật, cuối bài dẫn link sang trang dịch vụ liên quan.

Gợi ý chủ đề (người tìm lỗi → hay gọi thợ):
- [ ] Máy in in ra bị mờ – 6 nguyên nhân và cách khắc phục
- [ ] Máy in in ra có vệt đen, sọc đen – lỗi do đâu?
- [ ] Máy in không kéo giấy – cách xử lý
- [ ] Máy in Canon LBP 2900 báo đèn cam nhấp nháy
- [ ] Máy in HP báo lỗi "Cartridge depleted" sau khi nạp mực
- [ ] Máy in Brother báo "Replace Toner" – cách reset
- [ ] Máy in Brother báo "Drum End Soon" – cách reset
- [ ] Cách chia sẻ máy in qua mạng LAN trên Windows 11
- [ ] Cách in 2 mặt tự động / thủ công
- [ ] Cách kết nối máy in với điện thoại qua Wi-Fi
- [ ] Bản in bị nhòe, lem khi chạm tay – lỗi bộ sấy
- [ ] Mực máy in phun bị tắc – cách vệ sinh đầu phun Epson
- [ ] Nên mua máy in laser hay máy in phun cho gia đình / văn phòng?
- [ ] Top máy in tiết kiệm mực cho văn phòng nhỏ
- [ ] Hộp mực nạp được mấy lần? Khi nào cần thay trống?
- [ ] Bảo quản máy in đúng cách để bền lâu
- [ ] Chi phí in 1 trang A4: nạp mực vs hộp mực chính hãng

### Mở rộng trang
- [ ] **Thêm mã hộp mực** (CMS → Hộp mực): mỗi mã là 1 trang riêng bắt từ khóa "nạp mực + mã". Ưu tiên mã khách hay gọi hỏi.
- [ ] **Thêm khu vực**: viết đoạn giới thiệu **riêng** cho từng khu vực (không copy), điền các phường theo địa giới mới sau sáp nhập 2025 và tuyến phố. Người dùng vẫn tìm theo tên quận cũ nên giữ tên quận làm tiêu đề.

---

## Hàng tháng – Đo lường

- [ ] Search Console → *Hiệu suất*: xem từ khóa nào đang ở vị trí 5–20 → bổ sung nội dung cho trang đó (thêm FAQ, thêm đoạn mô tả, ảnh).
- [ ] Trang có nhiều lượt hiển thị nhưng ít click → viết lại tiêu đề / mô tả SEO hấp dẫn hơn (có giá, có "30 phút").
- [ ] Google Business Profile → *Hiệu suất*: số cuộc gọi, lượt chỉ đường.
- [ ] Cập nhật bài blog cũ (điền "Ngày cập nhật" trong CMS).

## Backlink (liên kết từ trang khác)
- [ ] Hợp tác với cửa hàng photocopy, cửa hàng máy tính trong khu vực – đặt link chéo.
- [ ] Đăng bài hướng dẫn hữu ích trong các nhóm Facebook văn phòng, chung cư (không spam).
- [ ] Nhà cung cấp mực, đối tác: xin đặt link về website.
- ❌ Không mua backlink hàng loạt.

## Những điều KHÔNG làm
- Nhồi từ khóa lặp đi lặp lại trong bài.
- Copy nội dung trang khu vực này sang khu vực khác chỉ đổi tên quận.
- Copy bài từ website khác.
- Đánh giá giả, tên doanh nghiệp nhồi từ khóa trên Google Maps.
