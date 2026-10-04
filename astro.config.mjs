import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';

// Trang quản trị /keystatic chỉ chạy khi `npm run dev` (máy của bạn).
// Bản build đưa lên mạng là web tĩnh 100%, nhanh và an toàn.
const isDev = process.argv.includes('dev');

export default defineConfig({
  // Tên miền chính (dùng cho sitemap, canonical, chia sẻ mạng xã hội)
  site: 'https://napmuctannoi.nayva.vn',
  // URL thống nhất không có dấu "/" cuối (/bang-gia) – canonical, sitemap và link nội bộ khớp nhau
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [markdoc(), sitemap(), ...(isDev ? [react(), keystatic()] : [])],
});
