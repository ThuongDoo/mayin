import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';

// Trang quản trị /keystatic chỉ chạy khi `npm run dev` (máy của bạn).
// Bản build đưa lên mạng là web tĩnh 100%, nhanh và an toàn.
const isDev = process.argv.includes('dev');

export default defineConfig({
  // ĐỔI thành tên miền thật của bạn (dùng cho sitemap, canonical, chia sẻ mạng xã hội)
  site: 'https://www.example.com',
  // URL thống nhất không có dấu "/" cuối (/bang-gia) – canonical, sitemap và link nội bộ khớp nhau
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [markdoc(), sitemap(), ...(isDev ? [react(), keystatic()] : [])],
});
