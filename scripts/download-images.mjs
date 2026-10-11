import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_TO_DOWNLOAD = [
  // Services
  {
    category: 'services',
    name: 'interior-painting.webp',
    photoId: '1618221195710-dd6b41faaea6',
    alt: 'دهانات داخلية عصرية بدرجات الأوف وايت والجريج'
  },
  {
    category: 'services',
    name: 'exterior-painting.webp',
    photoId: '1600585154526-990dced4db0d',
    alt: 'دهانات واجهات خارجية وبروفايل مقاوم للعوامل الجوية'
  },
  {
    category: 'services',
    name: 'decorative-painting.webp',
    photoId: '1615873968403-89e068629265',
    alt: 'دهانات ديكورية واستوكو بتشطيب رخامي ومخملي'
  },
  {
    category: 'services',
    name: 'wood-alternative.webp',
    photoId: '1616486338812-3dadae4b4ace',
    alt: 'ديكورات بديل الخشب وتكسيات الجدران المودرن'
  },
  {
    category: 'services',
    name: 'marble-alternative.webp',
    photoId: '1600607687939-ce8a6c25118c',
    alt: 'ألواح بديل الرخام للمجالس والمداخل مع إضاءة مخفية'
  },
  {
    category: 'services',
    name: 'wallpaper.webp',
    photoId: '1534349762230-e0cadf78f5da',
    alt: 'تركيب ورق جدران ثلاثي الأبعاد وكلاسيكي فاخر'
  },
  {
    category: 'services',
    name: 'wall-preparation.webp',
    photoId: '1589939705384-5185137a7f0f',
    alt: 'تجهيز الجدران ومعالجة الشروخ وسحب المعجون والصنفرة'
  },
  {
    category: 'services',
    name: 'villas-apartments-painting.webp',
    photoId: '1600565193348-f74bd3c7ccdf',
    alt: 'تشطيب ودهان الفلل والشقق السكنية بالكامل'
  },

  // Blog Posts
  {
    category: 'blog',
    name: 'matte-vs-gloss-paint.webp',
    photoId: '1586023492125-27b2c045efd7',
    alt: 'مقارنة بين درجات لمعان الدهان المطفي والحريري وربع اللمعة'
  },
  {
    category: 'blog',
    name: 'wall-prep-before-painting.webp',
    photoId: '1589939705384-5185137a7f0f',
    alt: 'أهمية تجهيز الجدران والمعجون والصنفرة قبل الدهان'
  },
  {
    category: 'blog',
    name: 'exterior-paint-weather-guide.webp',
    photoId: '1600596542815-ffad4c1539a9',
    alt: 'دليل اختيار دهانات الواجهات المقاومة لحرارة مكة ورطوبة جدة'
  },
  {
    category: 'blog',
    name: 'wood-and-marble-alternatives-guide.webp',
    photoId: '1595428774223-ef52624120d2',
    alt: 'دليل تنسيق بديل الخشب مع بديل الرخام لخلفيات الشاشات'
  },
  {
    category: 'blog',
    name: 'living-room-paint-colors.webp',
    photoId: '1507089947368-19c1da9775ae',
    alt: 'أحدث ألوان دهانات الصالات والمجالس وتنسيقها مع الإضاءة'
  },
  {
    category: 'blog',
    name: 'painting-cost-factors.webp',
    photoId: '1600573472591-ee6b68d14c68',
    alt: 'كيف تحسب تكلفة دهان الشقة أو الفيلا بالمتر المربع'
  },

  // Cities
  {
    category: 'cities',
    name: 'makkah.webp',
    photoId: '1600585154340-be6161a56a0c',
    alt: 'أعمال دهانات وديكورات مكة المكرمة'
  },
  {
    category: 'cities',
    name: 'jeddah.webp',
    photoId: '1600585152220-90363fe7e115',
    alt: 'أعمال دهانات وديكورات جدة'
  },
  {
    category: 'cities',
    name: 'taif.webp',
    photoId: '1618219908412-a29a1bb7b86e',
    alt: 'أعمال دهانات وديكورات الطائف'
  },

  // Slideshow items
  {
    category: 'slideshow',
    name: 'slide-01-majlis-greige.webp',
    photoId: '1618221195710-dd6b41faaea6',
    alt: 'مجلس استقبال عصري بدهان فينوماستيك مطفي'
  },
  {
    category: 'slideshow',
    name: 'slide-02-villa-facade.webp',
    photoId: '1600585154526-990dced4db0d',
    alt: 'واجهة فيلا حديثة ببروفايل خارجي عازل للحرارة'
  },
  {
    category: 'slideshow',
    name: 'slide-03-wood-marble-tv.webp',
    photoId: '1616486338812-3dadae4b4ace',
    alt: 'خلفية تلفزيون بديل خشب وبديل رخام كلكتا'
  },
  {
    category: 'slideshow',
    name: 'slide-04-stucco-wall.webp',
    photoId: '1615873968403-89e068629265',
    alt: 'جدار ديكوري استوكو إيطالي بملمس رخامي'
  },
  {
    category: 'slideshow',
    name: 'slide-05-luxury-bedroom.webp',
    photoId: '1600566753376-12c8ab7fb75b',
    alt: 'غرفة نوم رئيسية بورق جدران ونعلات فوم'
  },
  {
    category: 'slideshow',
    name: 'slide-06-dining-salon.webp',
    photoId: '1600607687920-4e2a09cf159d',
    alt: 'صالون وسفرة بتشطيب دهان ربع لمعة متناسق'
  },
  {
    category: 'slideshow',
    name: 'slide-07-villa-interior.webp',
    photoId: '1600565193348-f74bd3c7ccdf',
    alt: 'تشطيب صالة فيلا فاخرة بمكة المكرمة'
  },
  {
    category: 'slideshow',
    name: 'slide-08-modern-architecture.webp',
    photoId: '1600596542815-ffad4c1539a9',
    alt: 'تصميم وتشطيب خارجي لفيلا مودرن في جدة'
  },
  {
    category: 'slideshow',
    name: 'slide-09-marble-accent.webp',
    photoId: '1600607687939-ce8a6c25118c',
    alt: 'تكسية جدار بديل رخام أبيض كلكتا مع سبوت لايت'
  },
  {
    category: 'slideshow',
    name: 'slide-10-wall-craftsmanship.webp',
    photoId: '1589939705384-5185137a7f0f',
    alt: 'إتقان مراحل الصنفرة والتجهيز قبل الدهان'
  }
];

async function downloadAndProcess() {
  for (const item of IMAGES_TO_DOWNLOAD) {
    const dir = path.join(process.cwd(), 'public', 'images', item.category);
    fs.mkdirSync(dir, { recursive: true });

    const destPath = path.join(dir, item.name);
    if (fs.existsSync(destPath)) {
      console.log(`Already exists: ${item.category}/${item.name}`);
      continue;
    }

    const url = `https://images.unsplash.com/photo-${item.photoId}?auto=format&fit=crop&w=1400&q=85`;
    console.log(`Downloading ${item.category}/${item.name} ...`);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Failed to fetch ${url}: ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());

      // Resize and convert to WebP with sharp
      await sharp(buffer)
        .resize(1200, 800, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(destPath);

      console.log(`Saved & optimized: ${destPath}`);
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err.message);
    }
  }
}

downloadAndProcess().then(() => {
  console.log('All images downloaded and optimized successfully!');
});
