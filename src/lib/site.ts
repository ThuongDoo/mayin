import settingsData from '../data/settings.json';
import homeData from '../data/home.json';
import pricingData from '../data/pricing.json';
import { getCollection } from 'astro:content';

export const settings = settingsData;
export const home = homeData;
export const pricing = pricingData;

export const telHref = `tel:${settings.phone}`;
export const zaloHref = `https://zalo.me/${settings.zalo}`;

export async function getServices() {
  const items = await getCollection('services');
  return items.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}

export async function getAreas() {
  const items = await getCollection('areas');
  return items.sort((a, b) => a.data.name.localeCompare(b.data.name, 'vi'));
}

export async function getCartridges() {
  const items = await getCollection('cartridges');
  return items.sort((a, b) => a.data.brand.localeCompare(b.data.brand) || a.data.name.localeCompare(b.data.name, 'vi', { numeric: true }));
}

export async function getPosts() {
  const items = await getCollection('blog', (p) => !p.data.draft);
  return items.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

/* ---------- Structured data (schema.org) ---------- */

export function localBusinessSchema(site: URL | undefined, areaNames: string[] = []) {
  const base = site?.href.replace(/\/$/, '') ?? '';
  const sameAs = [settings.mapUrl, settings.facebook].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${base}/#business`,
    name: settings.brand,
    description: home.seoDescription,
    url: `${base}/`,
    telephone: settings.phone,
    ...(settings.email ? { email: settings.email } : {}),
    ...(settings.ogImage ? { image: `${base}${settings.ogImage}` } : {}),
    address: { '@type': 'PostalAddress', streetAddress: settings.address, addressLocality: settings.city, addressCountry: 'VN' },
    areaServed: areaNames.length
      ? areaNames.map((n) => ({ '@type': 'AdministrativeArea', name: `${n}, ${settings.city}` }))
      : settings.city,
    priceRange: `Từ ${settings.priceFrom}`,
    ...(settings.opens && settings.closes
      ? {
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: settings.opens,
            closes: settings.closes,
          },
        }
      : {}),
    ...(settings.lat && settings.lng
      ? { geo: { '@type': 'GeoCoordinates', latitude: Number(settings.lat), longitude: Number(settings.lng) } }
      : {}),
    ...(settings.mapUrl ? { hasMap: settings.mapUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

export function breadcrumbSchema(site: URL | undefined, crumbs: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, site).href,
    })),
  };
}
