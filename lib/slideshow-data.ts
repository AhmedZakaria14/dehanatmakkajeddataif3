export interface SlideItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  categorySlug: 'all' | 'interior' | 'exterior' | 'wood-marble' | 'decorative' | 'wallpaper';
  city: string;
  district: string;
  image: string;
  imageAlt: string;
  paintType: string;
  colorCode: string;
  lighting: string;
  executionTime: string;
  description: string;
}

export const SLIDESHOW_CATEGORIES = [
  { slug: 'all', name: 'كافة الأعمال والمشاريع' },
  { slug: 'interior', name: 'الدهانات الداخلية والمجالس' },
  { slug: 'exterior', name: 'الواجهات والبروفايل' },
  { slug: 'wood-marble', name: 'بديل الخشب والرخام' },
  { slug: 'decorative', name: 'الدهانات الديكورية والاستوكو' },
  { slug: 'wallpaper', name: 'ورق الجدران' },
] as const;

export const SHOWCASE_SLIDES: SlideItem[] = [
  {
    id: 'slide-01',
    title: 'مجلس وصالون استقبال عصري بألوان الجريج المطفي',
    shortTitle: 'مجلس عصري بألوان الجريج',
    category: 'الدهانات الداخلية',
    categorySlug: 'interior',
    city: 'مكة المكرمة',
    district: 'حي العوالي',
    image: '/images/slideshow/slide-01-majlis-greige.webp',
    imageAlt: 'تنفيذ دهان مجلس عصري بدرجات الجريج والأوف وايت في مكة المكرمة',
    paintType: 'جوتن فينوماستيك مطفي غني',
    colorCode: 'Fenomastic Pure Rich Matt - Greige Harmony',
    lighting: 'إضاءة دافئة 3000K غير مباشرة',
    executionTime: '4 أيام عمل',
    description: 'تنفيذ متقن لدهانات الجدران بألوان الجريج الهادئة مع تشطيب مطفي فائق النعومة، يخفي تموجات اللياسة ويمنح المجلس وسعاً ودفئاً يتماشى مع الأثاث المودرن.'
  },
  {
    id: 'slide-02',
    title: 'واجهة فيلا حديثة ببروفايل خارجي مقاوم للعوامل الجوية',
    shortTitle: 'واجهة فيلا ببروفايل حديث',
    category: 'الواجهات والبروفايل',
    categorySlug: 'exterior',
    city: 'جدة',
    district: 'أبحر الشمالية',
    image: '/images/slideshow/slide-02-villa-facade.webp',
    imageAlt: 'واجهة فيلا سكنية بتشطيب بروفايل خارجي مقاوم للشمس والرطوبة في جدة',
    paintType: 'بروفايل أكريليكي مطاطي عازل',
    colorCode: 'Warm Desert Grey & Off-White',
    lighting: 'كشافات Up-lighting رأسية للأعمدة',
    executionTime: '8 أيام عمل',
    description: 'تشطيب واجهات فيلا متكامل بطبقة بروفايل حبيبي عالي المرونة، مصمم خصيصاً لمقاومة رطوبة البحر وملوحة الهواء وعكس أشعة الشمس الحارقة.'
  },
  {
    id: 'slide-03',
    title: 'خلفية شاشة تلفزيون تدمج بديل الخشب مع بديل الرخام الكلكتا',
    shortTitle: 'خلفية تلفزيون خشب ورخام',
    category: 'بديل الخشب والرخام',
    categorySlug: 'wood-marble',
    city: 'الطائف',
    district: 'حي شهار',
    image: '/images/slideshow/slide-03-wood-marble-tv.webp',
    imageAlt: 'ديكور جدار خلفية شاشة تلفزيون بديل خشب وبديل رخام كلكتا مع إضاءة مخفية في الطائف',
    paintType: 'ألواح PVC كلكتا + شرائح خشب WPC',
    colorCode: 'Calacatta Gold + Walnut Fluted Slat',
    lighting: 'شريط LED مخفي 2700K دافئ',
    executionTime: 'يوم واحد',
    description: 'توليفة راقية تجمع شرائح بديل الخشب المفرغة مع لوح بديل الرخام الأبيض ذي العروق الذهبية، مع إخفاء كامل لكافة تمديدات وأسلاك التلفزيون والأفياش.'
  },
  {
    id: 'slide-04',
    title: 'جدار ديكوري استوكو إيطالي بتموجات رخامية هادئة',
    shortTitle: 'جدار استوكو رخامي فخم',
    category: 'الدهانات الديكورية',
    categorySlug: 'decorative',
    city: 'مكة المكرمة',
    district: 'حي الشوقية',
    image: '/images/slideshow/slide-04-stucco-wall.webp',
    imageAlt: 'جدار ديكوري استوكو إيطالي ملمع بملمس رخامي في مكة المكرمة',
    paintType: 'استوكو أنتيكو إيطالي مع شمع واقٍ',
    colorCode: 'Soft Travertine Stucco Finish',
    lighting: 'سبوت لايت موجه بزاوية 45°',
    executionTime: 'يومان عمل',
    description: 'تطبيق يدوي لفنيين محترفين بتقنية الصقل المتدرج لطبقات الاستوكو الرخامية، يمنح الجدار بريقاً مخملياً فاخراً ومقاوماً للغبار وقابل للمسح الخفيف.'
  },
  {
    id: 'slide-05',
    title: 'غرفة نوم ماستر بورق جدران كلاسيكي وبانوهات فوم هندسية',
    shortTitle: 'ورق جدران وبانوهات ماستر',
    category: 'ورق الجدران',
    categorySlug: 'wallpaper',
    city: 'جدة',
    district: 'حي الروضة',
    image: '/images/slideshow/slide-05-luxury-bedroom.webp',
    imageAlt: 'ورق حائط ناعم مع إطارات وبانوهات فوم لغرفة نوم رئيسية في جدة',
    paintType: 'ورق جدران فينيل كوري + فوم بولي يوريثان',
    colorCode: 'Champagne Geometric + Satin White',
    lighting: 'أبليكات جدارية جانبية خافتة',
    executionTime: 'يوم واحد',
    description: 'محاذاة هندسية دقيقة لنقوش ورق الجدران ثلاثي الأبعاد خلف السرير، مدعومة بإطارات بانوهات فوم خفيفة وطلاء ربع لمعة فائق النقاء.'
  },
  {
    id: 'slide-06',
    title: 'صالون وسفرة عائلية بتشطيب دهان ربع لمعة متناسق',
    shortTitle: 'صالون وسفرة ربع لمعة',
    category: 'الدهانات الداخلية',
    categorySlug: 'interior',
    city: 'الطائف',
    district: 'حي الحوية',
    image: '/images/slideshow/slide-06-dining-salon.webp',
    imageAlt: 'دهان صالون وسفرة عائلية بدهان ربع لمعة قابل للتنظيف في الطائف',
    paintType: 'دهان ربع لمعة حريري عالي المقاومة',
    colorCode: 'Pure Silk Cotton 1001',
    lighting: 'ثريا مدمجة مع سبوت لايت محايد 4000K',
    executionTime: '3 أيام عمل',
    description: 'دهانات داخلية فائقة المقاومة للبقع والخدوش، تتيح تنظيفاً دورياً سهلاً مع مظهر حريري أنيق يناسب غرف الطعام وصوالين الضيافة العائلية.'
  },
  {
    id: 'slide-07',
    title: 'تشطيب كامل لصالة وممرات فيلا سكنية بأسلوب نيوكلاسيك',
    shortTitle: 'تشطيب صالة فيلا نيوكلاسيك',
    category: 'الدهانات الداخلية',
    categorySlug: 'interior',
    city: 'مكة المكرمة',
    district: 'بطحاء قريش',
    image: '/images/slideshow/slide-07-villa-interior.webp',
    imageAlt: 'تشطيب صالة فيلا سكنية متكاملة بالدهانات الحديثة والجبس في مكة المكرمة',
    paintType: 'تأسيس 3 أوجه معجون + دهان جوتن ربع لمعة',
    colorCode: 'Warm Ivory & Soft Cream',
    lighting: 'إضاءة ليد مخفية بالجبس بورد',
    executionTime: '6 أيام عمل',
    description: 'إعادة تأسيس وصنفرة دقيقة بالليزر لكافة جدران وأسقف الفيلا، تلاها دهان طبقات متناسقة بكرانيش وبانوهات جدارية راقية دون أي تموجات.'
  },
  {
    id: 'slide-08',
    title: 'تشطيب وتجديد واجهة عمارة سكنية ومداخل فاخرة',
    shortTitle: 'تجديد واجهة عمارة سكنية',
    category: 'الواجهات والبروفايل',
    categorySlug: 'exterior',
    city: 'جدة',
    district: 'حي الصفا',
    image: '/images/slideshow/slide-08-modern-architecture.webp',
    imageAlt: 'تجديد دهان واجهة عمارة سكنية بمواد أكريليكية مقاومة للشمس في جدة',
    paintType: 'دهان خارجي أكريليكي عاكس للأشعة UV',
    colorCode: 'Urban Stone & Beige Profile',
    lighting: 'إنارة ليلية معمارية مدمجة',
    executionTime: '10 أيام عمل',
    description: 'معالجة شروخ اللياسة الخارجية بغراء فايبر مطاطي، ثم تطبيق أساس زيتي ودهان واجهات متطور يحافظ على زهوة ونقاء ألوان المبنى طوال العام.'
  },
  {
    id: 'slide-09',
    title: 'تكسية جدار مدخل رئيسي بألواح بديل الرخام الكلكتا وشرائط ذهبية',
    shortTitle: 'مدخل فيلا بديل رخام ذهبي',
    category: 'بديل الخشب والرخام',
    categorySlug: 'wood-marble',
    city: 'جدة',
    district: 'حي المرجان',
    image: '/images/slideshow/slide-09-marble-accent.webp',
    imageAlt: 'لوح بديل رخام أبيض كلكتا مع أحزمة وشرائط ذهبية في مدخل فيلا بجدة',
    paintType: 'ألواح PVC Marble UV Coated 3mm',
    colorCode: 'Statuario White Marble with Gold Trim',
    lighting: 'سبوت لايت مركز وإنارة مخفية',
    executionTime: 'يوم واحد',
    description: 'تركيب متناسق لعروق بديل الرخام بنظام البوكماتش (Bookmatch)، مع شرائط حزام ذهبية تيتانيوم مقاومة للخدش تمنح المدخل فخامة القصور.'
  },
  {
    id: 'slide-10',
    title: 'تأسيس اللياسة ومعالجة الشروخ وسحب المعجون تحت الكشاف',
    shortTitle: 'تأسيس احترافي ومعالجة شروخ',
    category: 'الدهانات الداخلية',
    categorySlug: 'interior',
    city: 'مكة المكرمة',
    district: 'حي العزيزية',
    image: '/images/slideshow/slide-10-wall-craftsmanship.webp',
    imageAlt: 'مرحلة سحب المعجون والصنفرة الدقيقة لفحص استواء الجدران بمكة المكرمة',
    paintType: 'برايمر مائي + معجون فايبر + صنفرة ضوئية',
    colorCode: 'Under-coat Surface Foundation',
    lighting: 'كشافات فحص أفقية لمراقبة الاستواء',
    executionTime: 'تأسيس متكامل قبل الطلاء',
    description: 'مرحلة التجهيز الاحترافية التي تميز أعمالنا؛ فحص استواء السطح بالأشعة وصنفرة دقيقة تضمن عدم ظهور أي تموجات أو تشققات بعد الدهان النهائي.'
  }
];
