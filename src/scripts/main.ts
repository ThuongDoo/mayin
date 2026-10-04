type SiteCfg = {
  formEndpoint: string;
  zaloHref: string;
  phoneText: string;
  adsId: string;
  adsLabelCall: string;
  adsLabelLead: string;
};

const cfg: SiteCfg = (window as any).__SITE;
const w = window as any;

// Gửi sự kiện tới GA4, chuyển đổi Google Ads và Facebook Pixel (nếu đã cấu hình trong CMS)
function track(kind: 'call' | 'zalo' | 'lead', data: Record<string, string> = {}) {
  try {
    if (w.gtag) {
      w.gtag('event', kind === 'lead' ? 'generate_lead' : `${kind}_click`, data);
      const label = kind === 'lead' ? cfg.adsLabelLead : cfg.adsLabelCall;
      if (cfg.adsId && label) w.gtag('event', 'conversion', { send_to: `${cfg.adsId}/${label}` });
    }
    if (w.fbq) w.fbq('track', kind === 'lead' ? 'Lead' : 'Contact');
  } catch {}
}

document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest('a');
  if (!a) return;
  if (a.href.startsWith('tel:')) track('call');
  else if (a.href.includes('zalo.me')) track('zalo');
});

document.querySelectorAll<HTMLFormElement>('.js-lead-form').forEach((form) => {
  const msg = form.querySelector<HTMLElement>('.form-msg')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const phone = (data.phone || '').replace(/[\s.\-]/g, '');
    if (!/^(0|\+84)\d{9,10}$/.test(phone)) {
      msg.className = 'form-msg err';
      msg.textContent = 'Vui lòng nhập số điện thoại hợp lệ.';
      (form.elements.namedItem('phone') as HTMLInputElement).focus();
      return;
    }
    Object.assign(data, { phone, time: new Date().toLocaleString('vi-VN'), page: location.href });
    btn.disabled = true;
    try {
      if (cfg.formEndpoint) {
        await fetch(cfg.formEndpoint, { method: 'POST', mode: 'no-cors', body: JSON.stringify(data) });
      }
      track('lead', { service: data.service || '' });
      msg.className = 'form-msg ok';
      msg.textContent = 'Đã nhận yêu cầu! Chúng tôi sẽ gọi lại cho bạn trong ít phút.';
      form.reset();
      if (!cfg.formEndpoint) window.open(cfg.zaloHref, '_blank');
    } catch {
      msg.className = 'form-msg err';
      msg.textContent = `Gửi chưa được, vui lòng gọi trực tiếp ${cfg.phoneText}`;
    } finally {
      btn.disabled = false;
    }
  });
});
