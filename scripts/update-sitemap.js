const fs = require('fs');
const path = require('path');

const mainPages = [
  { url: 'https://www.dehanatmakkah.com/', lastmod: '2026-09-23', priority: '1.0' },
  { url: 'https://www.dehanatmakkah.com/about', lastmod: '2026-09-23', priority: '0.9' },
  { url: 'https://www.dehanatmakkah.com/services', lastmod: '2026-09-23', priority: '0.9' },
  { url: 'https://www.dehanatmakkah.com/services/interior-painting', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/services/exterior-painting', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/services/villas-apartments-painting', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/services/wall-preparation', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/services/decorative-painting', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/services/wallpaper', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/services/wood-alternative', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/services/marble-alternative', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/areas', lastmod: '2026-09-23', priority: '0.9' },
  { url: 'https://www.dehanatmakkah.com/areas/makkah', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/areas/jeddah', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/areas/taif', lastmod: '2026-09-23', priority: '0.8' },
  { url: 'https://www.dehanatmakkah.com/inspiration', lastmod: '2026-09-23', priority: '0.9' },
  { url: 'https://www.dehanatmakkah.com/blog', lastmod: '2026-10-11', priority: '0.9' },
  { url: 'https://www.dehanatmakkah.com/faq', lastmod: '2026-09-23', priority: '0.9' },
  { url: 'https://www.dehanatmakkah.com/contact', lastmod: '2026-09-23', priority: '0.9' },
  { url: 'https://www.dehanatmakkah.com/privacy', lastmod: '2026-09-23', priority: '0.9' },
];

const slugs = [
  'best-painting-company-jeddah',
  'villas-apartments-decor-makkah',
  'paint-master-makkah-home-renovation',
  'wooden-door-painting-master',
  'taif-painting-decor-master',
  'makkah-painting-decor-master',
  'jeddah-decor-master',
  'matte-vs-gloss-paint',
  'wall-prep-before-painting',
  'exterior-paint-weather-guide',
  'wood-and-marble-alternatives-guide',
  'living-room-paint-colors',
  'painting-cost-factors',
  'wood-alternative-master-jeddah',
  'marble-alternative-master-jeddah',
  'gypsum-board-jeddah-harazat',
  'gypsum-board-jeddah-hamdaniyah',
  'gypsum-board-jeddah-khumrah',
  'gypsum-board-south-jeddah',
  'gypsum-board-ceilings-partitions-master',
  'gypsum-board-makkah-sharaya',
  'foam-decor-master-jeddah',
  'mirror-decor-master-jeddah',
  'wallpaper-master-taif',
  'wallpaper-master-jeddah'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

mainPages.forEach(p => {
  xml += `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>\n`;
});

slugs.forEach(slug => {
  xml += `  <url>\n    <loc>https://www.dehanatmakkah.com/blog/${slug}</loc>\n    <lastmod>2026-10-11</lastmod>\n    <priority>0.8</priority>\n  </url>\n`;
});

xml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml, 'utf8');
console.log('Successfully updated public/sitemap.xml!');
