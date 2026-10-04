# Website Nạp mực & Sửa máy in tận nhà

Xây bằng [Astro](https://astro.build) (web tĩnh, tải nhanh, chuẩn SEO) + [Keystatic](https://keystatic.com) (trang quản trị nội dung).

## Chạy trên máy

```bash
npm install      # lần đầu
npm run dev
```

- Website: http://127.0.0.1:4321
- **Trang quản trị (CMS): http://127.0.0.1:4321/keystatic**

Trong CMS bạn có thể:

| Mục | Dùng để |
|---|---|
| Bài viết blog | Viết/sửa bài, chèn ảnh, đặt mô tả SEO, lưu nháp |
| Dịch vụ | Mỗi dịch vụ là 1 trang riêng `/dich-vu/...` kèm hỏi đáp |
| Hộp mực | Mỗi mã hộp mực là 1 trang `/nap-muc/...` (VD "nạp mực HP 12A") |
| Khu vực phục vụ | Mỗi quận là 1 trang SEO `/khu-vuc/...` (tự sinh nội dung nếu để trống) |
| Trang chủ | Tiêu đề, cam kết, số liệu, quy trình, đánh giá, hỏi đáp |
| Bảng giá | Các dòng giá (hiện ở trang chủ, trang bảng giá, trang khu vực) |
| Thông tin & cài đặt | SĐT, Zalo, địa chỉ, mã Google Ads / GA4 / Facebook Pixel |

Bấm **Save** trong CMS là file nội dung được lưu ngay vào thư mục `src/`.

## Trước khi chạy quảng cáo

1. Sửa `site` trong [astro.config.mjs](astro.config.mjs) thành tên miền thật.
2. Vào CMS → **Thông tin & cài đặt chung**: nhập SĐT, Zalo, địa chỉ, ảnh chia sẻ.
3. Nhập **Google Ads ID + nhãn chuyển đổi** (gọi điện, gửi form), GA4, Facebook Pixel.
   Trang tự gửi chuyển đổi khi khách bấm Gọi, Zalo hoặc gửi form.
4. Kiểm tra lại bảng giá, số liệu, quận phục vụ cho đúng thực tế.
5. Đánh giá khách hàng: chỉ nhập đánh giá thật (để trống thì mục này tự ẩn).

## SEO

Xem **[SEO.md](SEO.md)** – checklist các việc cần làm để lên top (Google Business Profile, đánh giá, Search Console, lịch viết blog).

## Đưa lên mạng

Web đang chạy trên **Vercel** tại https://napmuctannoi.nayva.vn (repo GitHub `ThuongDoo/mayin`, nhánh `main`).
Cấu hình Vercel nằm trong [vercel.json](vercel.json) – `cleanUrls` bắt buộc phải bật, nếu tắt thì mọi trang con sẽ lỗi 404.

Đổi tên miền: sửa `site` trong [astro.config.mjs](astro.config.mjs).
Sitemap khai báo với Google Search Console: `https://napmuctannoi.nayva.vn/sitemap-index.xml`

Quy trình viết bài sau này: `npm run dev` → viết trong `/keystatic` → `git commit` + `git push` → web tự cập nhật sau 1–2 phút.

> Trang `/keystatic` chỉ chạy trên máy của bạn, không có trên web thật, nên không ai truy cập trái phép được.
> Nếu sau này muốn viết bài trực tiếp trên web (không cần máy tính có code), có thể chuyển Keystatic sang chế độ GitHub.

## Cấu trúc

```
keystatic.config.ts     ← cấu hình các ô nhập trong CMS
src/
  data/*.json           ← cài đặt, trang chủ, bảng giá (sửa qua CMS)
  content/blog/         ← bài viết (.mdoc)
  content/services/     ← dịch vụ
  content/areas/        ← khu vực
  pages/                ← các trang
  components/           ← Header, Footer, form, nút gọi…
  styles/global.css     ← giao diện (màu chính ở đầu file)
```
"# mayin" 
