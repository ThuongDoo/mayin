import { config, collection, singleton, fields } from '@keystatic/core';

const faqItems = (label = 'Câu hỏi thường gặp') =>
  fields.array(
    fields.object({
      q: fields.text({ label: 'Câu hỏi' }),
      a: fields.text({ label: 'Trả lời', multiline: true }),
    }),
    { label, itemLabel: (p) => p.fields.q.value || 'Câu hỏi mới' }
  );

const seoDescription = fields.text({
  label: 'Mô tả SEO',
  description: 'Hiện dưới tiêu đề trên Google. Nên dài 120–160 ký tự, có từ khóa chính.',
  multiline: true,
});

const blogImage = { directory: 'public/images/blog', publicPath: '/images/blog/' };

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Quản trị website' },
    navigation: {
      'Nội dung': ['blog', 'services', 'cartridges', 'areas'],
      'Cấu hình trang': ['home', 'pricing', 'settings'],
    },
  },

  singletons: {
    settings: singleton({
      label: 'Thông tin & cài đặt chung',
      path: 'src/data/settings',
      format: { data: 'json' },
      schema: {
        brand: fields.text({ label: 'Tên thương hiệu' }),
        tagline: fields.text({ label: 'Khẩu hiệu ngắn' }),
        phone: fields.text({ label: 'Số điện thoại (viết liền, VD 0912345678)' }),
        phoneText: fields.text({ label: 'Số điện thoại hiển thị (VD 0912 345 678)' }),
        zalo: fields.text({ label: 'Số Zalo' }),
        email: fields.text({ label: 'Email' }),
        address: fields.text({ label: 'Địa chỉ cửa hàng' }),
        city: fields.text({ label: 'Thành phố', description: 'Dùng trong tiêu đề SEO, VD: Hà Nội' }),
        hours: fields.text({ label: 'Giờ làm việc' }),
        opens: fields.text({ label: 'Giờ mở cửa (HH:MM, cho Google)', defaultValue: '07:30' }),
        closes: fields.text({ label: 'Giờ đóng cửa (HH:MM, cho Google)', defaultValue: '21:00' }),
        lat: fields.text({ label: 'Vĩ độ (latitude)', description: 'Lấy trên Google Maps: chuột phải vào vị trí cửa hàng → bấm vào dòng số đầu tiên' }),
        lng: fields.text({ label: 'Kinh độ (longitude)' }),
        mapUrl: fields.text({ label: 'Link Google Maps (hồ sơ Google Business)', description: 'VD: https://maps.app.goo.gl/...' }),
        mapEmbed: fields.text({ label: 'Link nhúng bản đồ', description: 'Google Maps → Chia sẻ → Nhúng bản đồ → copy phần src="..." ' }),
        facebook: fields.text({ label: 'Link Fanpage Facebook' }),
        priceFrom: fields.text({ label: 'Giá thấp nhất hiển thị (VD 80.000đ)' }),
        ogImage: fields.image({
          label: 'Ảnh chia sẻ mặc định (1200×630)',
          description: 'Ảnh hiện khi chia sẻ link lên Facebook/Zalo',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        formEndpoint: fields.text({
          label: 'URL nhận form (Google Apps Script)',
          description: 'Để trống thì form sẽ mở Zalo sau khi gửi',
        }),
        gscVerification: fields.text({
          label: 'Mã xác minh Google Search Console',
          description: 'Search Console → Thẻ HTML → chỉ copy phần content="..." (không cần nếu xác minh qua DNS)',
        }),
        ga4Id: fields.text({ label: 'Google Analytics 4 ID (G-XXXX)' }),
        googleAdsId: fields.text({ label: 'Google Ads ID (AW-XXXX)' }),
        adsLabelCall: fields.text({ label: 'Nhãn chuyển đổi Google Ads – Gọi điện/Zalo' }),
        adsLabelLead: fields.text({ label: 'Nhãn chuyển đổi Google Ads – Gửi form' }),
        fbPixelId: fields.text({ label: 'Facebook Pixel ID' }),
      },
    }),

    home: singleton({
      label: 'Trang chủ',
      path: 'src/data/home',
      format: { data: 'json' },
      schema: {
        seoTitle: fields.text({ label: 'Tiêu đề SEO' }),
        seoDescription,
        heroBadge: fields.text({ label: 'Dòng nhãn trên tiêu đề' }),
        heroTitle: fields.text({ label: 'Tiêu đề lớn' }),
        heroHighlight: fields.text({ label: 'Cụm từ tô màu trong tiêu đề', description: 'Phải nằm trong tiêu đề lớn' }),
        heroLead: fields.text({ label: 'Đoạn mô tả', multiline: true }),
        checks: fields.array(fields.text({ label: 'Cam kết' }), {
          label: 'Các cam kết (dấu tích)',
          itemLabel: (p) => p.value,
        }),
        stats: fields.array(
          fields.object({ value: fields.text({ label: 'Số' }), label: fields.text({ label: 'Mô tả' }) }),
          { label: 'Dải số liệu', itemLabel: (p) => `${p.fields.value.value} – ${p.fields.label.value}` }
        ),
        steps: fields.array(
          fields.object({ title: fields.text({ label: 'Tên bước' }), text: fields.text({ label: 'Mô tả' }) }),
          { label: 'Quy trình', itemLabel: (p) => p.fields.title.value }
        ),
        reasons: fields.array(
          fields.object({ title: fields.text({ label: 'Tiêu đề' }), text: fields.text({ label: 'Mô tả', multiline: true }) }),
          { label: 'Vì sao chọn chúng tôi', itemLabel: (p) => p.fields.title.value }
        ),
        brands: fields.array(fields.text({ label: 'Hãng' }), { label: 'Các hãng máy in', itemLabel: (p) => p.value }),
        reviews: fields.array(
          fields.object({
            text: fields.text({ label: 'Nội dung đánh giá', multiline: true }),
            name: fields.text({ label: 'Tên khách hàng' }),
            place: fields.text({ label: 'Khu vực / công ty' }),
          }),
          {
            label: 'Đánh giá khách hàng',
            description: 'Chỉ nhập đánh giá THẬT. Để trống thì mục này tự ẩn.',
            itemLabel: (p) => p.fields.name.value || 'Đánh giá',
          }
        ),
        faq: faqItems(),
        finalTitle: fields.text({ label: 'Tiêu đề kêu gọi cuối trang' }),
        finalText: fields.text({ label: 'Mô tả kêu gọi cuối trang' }),
      },
    }),

    pricing: singleton({
      label: 'Bảng giá',
      path: 'src/data/pricing',
      format: { data: 'json' },
      schema: {
        seoTitle: fields.text({ label: 'Tiêu đề SEO' }),
        seoDescription,
        items: fields.array(
          fields.object({
            name: fields.text({ label: 'Tên dịch vụ' }),
            note: fields.text({ label: 'Ghi chú (model máy…)' }),
            price: fields.text({ label: 'Giá (VD 80.000đ)' }),
          }),
          { label: 'Các dòng giá', itemLabel: (p) => `${p.fields.name.value} – ${p.fields.price.value}` }
        ),
        note: fields.text({ label: 'Ghi chú dưới bảng giá', multiline: true }),
      },
    }),
  },

  collections: {
    blog: collection({
      label: 'Bài viết blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'publishDate'],
      schema: {
        title: fields.slug({
          name: { label: 'Tiêu đề bài viết' },
          slug: { label: 'Đường dẫn (URL)', description: 'Không dấu, nối bằng gạch ngang' },
        }),
        description: seoDescription,
        publishDate: fields.date({ label: 'Ngày đăng', defaultValue: { kind: 'today' }, validation: { isRequired: true } }),
        cover: fields.image({ label: 'Ảnh đại diện', ...blogImage }),
        tags: fields.array(fields.text({ label: 'Thẻ' }), { label: 'Thẻ', itemLabel: (p) => p.value }),
        updatedDate: fields.date({ label: 'Ngày cập nhật', description: 'Điền khi sửa lớn nội dung bài – Google ưu tiên bài mới cập nhật' }),
        draft: fields.checkbox({ label: 'Bản nháp (chưa hiển thị lên web)', defaultValue: false }),
        content: fields.markdoc({ label: 'Nội dung', options: { image: blogImage } }),
      },
    }),

    services: collection({
      label: 'Dịch vụ',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'order'],
      schema: {
        title: fields.slug({ name: { label: 'Tên dịch vụ' }, slug: { label: 'Đường dẫn (URL)' } }),
        seoTitle: fields.text({ label: 'Tiêu đề SEO', description: 'Để trống sẽ dùng tên dịch vụ' }),
        description: seoDescription,
        shortDesc: fields.text({ label: 'Mô tả ngắn (hiện trên thẻ dịch vụ)', multiline: true }),
        icon: fields.select({
          label: 'Biểu tượng',
          options: [
            { label: 'Giọt mực', value: 'drop' },
            { label: 'Mực màu', value: 'color' },
            { label: 'Dụng cụ sửa', value: 'tool' },
            { label: 'Linh kiện', value: 'box' },
            { label: 'Wi-Fi / mạng', value: 'wifi' },
            { label: 'Máy in', value: 'printer' },
          ],
          defaultValue: 'printer',
        }),
        priceFrom: fields.text({ label: 'Giá từ (VD 80.000đ)' }),
        order: fields.integer({ label: 'Thứ tự hiển thị', defaultValue: 10 }),
        faq: faqItems(),
        content: fields.markdoc({ label: 'Nội dung chi tiết', options: { image: blogImage } }),
      },
    }),

    cartridges: collection({
      label: 'Hộp mực (trang nạp mực theo mã)',
      slugField: 'name',
      path: 'src/content/cartridges/*',
      format: { contentField: 'content' },
      columns: ['name', 'code'],
      schema: {
        name: fields.slug({ name: { label: 'Tên hộp mực (VD: HP 12A)' }, slug: { label: 'Đường dẫn (URL)' } }),
        code: fields.text({ label: 'Mã gốc (VD: Q2612A)' }),
        brand: fields.select({
          label: 'Hãng',
          options: ['HP', 'Canon', 'Brother', 'Samsung', 'Xerox', 'Ricoh', 'Kyocera', 'Pantum', 'Khác'].map((b) => ({ label: b, value: b })),
          defaultValue: 'HP',
        }),
        printers: fields.array(fields.text({ label: 'Model máy in' }), {
          label: 'Máy in dùng hộp mực này',
          itemLabel: (p) => p.value,
        }),
        yield: fields.text({ label: 'Số trang in mỗi lần nạp (VD: ~2.000 trang)' }),
        price: fields.text({ label: 'Giá nạp mực (VD: 80.000đ)' }),
        description: seoDescription,
        faq: faqItems(),
        content: fields.markdoc({ label: 'Nội dung thêm (không bắt buộc)', options: { image: blogImage } }),
      },
    }),

    areas: collection({
      label: 'Khu vực phục vụ',
      slugField: 'name',
      path: 'src/content/areas/*',
      format: { contentField: 'content' },
      columns: ['name'],
      schema: {
        name: fields.slug({ name: { label: 'Tên khu vực (VD: Cầu Giấy)' }, slug: { label: 'Đường dẫn (URL)' } }),
        description: seoDescription,
        intro: fields.text({
          label: 'Đoạn giới thiệu',
          description: 'Viết riêng cho từng quận (không copy giữa các quận) để Google đánh giá cao',
          multiline: true,
        }),
        travelTime: fields.text({ label: 'Thời gian có mặt (VD: 20–30 phút)' }),
        wards: fields.array(fields.text({ label: 'Phường' }), { label: 'Các phường phục vụ', itemLabel: (p) => p.value }),
        landmarks: fields.text({ label: 'Các tuyến phố, tòa nhà, khu văn phòng thường phục vụ', multiline: true }),
        content: fields.markdoc({ label: 'Nội dung thêm (không bắt buộc)', options: { image: blogImage } }),
      },
    }),
  },
});
