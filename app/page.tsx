import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  Paintbrush,
  Layers,
  Sparkles,
  MapPin,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Palette,
  Clock,
  ShieldAlert,
  Star,
} from 'lucide-react';
import {
  SITE_CONFIG,
  SERVICES,
  CITIES,
  BLOG_POSTS,
  GENERAL_FAQS,
  INSPIRATION_ITEMS,
  generateWhatsAppUrl,
} from '@/lib/site-data';
import WhatsAppQuoteForm from '@/components/WhatsAppQuoteForm';
import { HousePainterJsonLd, FAQPageJsonLd } from '@/components/JsonLd';
import FadeInSection from '@/components/FadeInSection';
import ShowcaseSlideshow from '@/components/ShowcaseSlideshow';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const homeFaqs = GENERAL_FAQS.slice(0, 5);

  return (
    <>
      <HousePainterJsonLd />
      <FAQPageJsonLd faqs={homeFaqs} />

      {/* Hero Section */}
      <FadeInSection isImmediate className="relative bg-[#161c1c] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-[#2b3535]">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/assets/92a3d239e9-background-01-copyright.jpg"
            alt="خلفية ديكورية هادئة"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 space-y-6 text-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#222b2b] border border-[#354343] px-3.5 py-1.5 rounded-full text-xs sm:text-sm text-[#f6af24]">
                <MapPin className="w-4 h-4 text-[#f6af24]" />
                <span>مكة المكرمة • جدة • الطائف</span>
              </div>

              {/* H1 Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.25]">
                دهانات وديكورات في{' '}
                <span className="text-[#f6af24] block sm:inline">مكة وجدة والطائف</span>
              </h1>

              {/* Subheading / Description */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                تنفيذ أعمال الدهانات الداخلية والخارجية والواجهات، وتجهيز الأسطح ومعالجة الشروخ، وتركيب ورق الجدران وبديل الخشب والرخام بجودة تشطيب عالية وتنسيق ألوان عصري يلائم مساحتك.
              </p>

              {/* Core CTA Buttons */}
              <div className="pt-2 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-4">
                <a
                  id="hero-cta-whatsapp"
                  href={generateWhatsAppUrl('السلام عليكم، أحتاج استفسارًا وعرض سعر لخدمات الدهانات والديكور.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1b6848] hover:bg-[#155339] active:bg-[#0f3e2a] text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-xl transition-all active:scale-98 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 text-[#4ade80] fill-current" />
                  <span>طلب عرض سعر عبر الواتساب</span>
                </a>

                <a
                  id="hero-cta-call"
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] active:bg-[#c47f0c] text-[#161c1c] font-extrabold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-md transition-all active:scale-98 min-h-[48px]"
                  dir="ltr"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>0567407414</span>
                </a>
              </div>

              {/* Direct feature highlights / Trust ribbon on mobile */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 border-t border-[#263333] text-xs text-gray-300">
                <div className="flex items-center gap-2 bg-[#1b2222] sm:bg-transparent p-2 sm:p-0 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#f6af24] shrink-0" />
                  <span className="font-medium">تأسيس ومعجون دقيق</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1b2222] sm:bg-transparent p-2 sm:p-0 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#f6af24] shrink-0" />
                  <span className="font-medium">حماية الأثاث والأرضيات</span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-[#1b2222] sm:bg-transparent p-2 sm:p-0 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#f6af24] shrink-0" />
                  <span className="font-medium">معاينة وتحديد أمتار مجانًا</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Card Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#303c3c] bg-[#1a2222]">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <Image
                    src="/assets/9cd7db19ae-custom-img-65-copyright.webp"
                    alt="أعمال تنفيذ الدهانات والديكورات وتشطيب الجدران"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161c1c] via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-5 text-right space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#d8af47]">
                    <span className="font-bold">خدمات متكاملة</span>
                    <span>مكة • جدة • الطائف</span>
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    حلول الدهانات والديكور للمنازل والفلل والمشاريع
                  </h2>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    من تجهيز اللياسة ومعالجة الشروخ إلى الطبقات النهائية الفاخرة وأحدث الإضافات الجدارية العصرية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Services Grid Section */}
      <FadeInSection className="py-16 bg-[#faf7f2] border-b border-[#e8e2d8]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              خدماتنا التخصصية
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192020]">
              خدمات الدهانات والديكورات المتاحة
            </h2>
            <p className="text-sm sm:text-base text-[#596464] leading-relaxed">
              اختر الخدمة المناسبة لمشروعك للاطلاع على خطوات العمل والخامات وخيارات التشطيب وطريقة طلب المعاينة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="bg-white rounded-xl border border-[#e5dfd5] overflow-hidden flex flex-col hover:border-[#d4af37] transition-all hover:shadow-md group"
              >
                <div className="relative aspect-[16/10] bg-[#eae5dc] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-2 right-2 bg-[#161c1ce6] text-[#f6af24] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                    {service.navTitle}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow text-right space-y-3">
                  <h3 className="text-lg font-bold text-[#192020] group-hover:text-[#b87600] transition-colors">
                    <Link href={`/services/${service.slug}`} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#5d6969] leading-relaxed flex-grow">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-[#f0ece4] flex items-center justify-between text-xs">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-[#b87600] font-bold hover:text-[#915c00] transition-colors"
                    >
                      <span>تفاصيل الخدمة</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={generateWhatsAppUrl(`السلام عليكم، أحتاج عرض سعر لخدمة: ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#1b6848] hover:text-[#134e35] font-semibold"
                      title="طلب مباشر عبر واتساب"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#192020] hover:bg-[#253030] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow"
            >
              <span>استعراض دليل الخدمات الشامل</span>
              <ArrowLeft className="w-4 h-4 text-[#f6af24]" />
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* Featured Showcase Slideshow Section */}
      <FadeInSection className="py-16 bg-[#161c1c] text-white border-b border-[#2b3535]" id="showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#f6af24] bg-[#222b2b] border border-[#354343] px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>معرض الأعمال وسلايد شو التشطيبات الحية</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              معرض الأعمال المنفذة ومشاريع التشطيب
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              استعرض نماذج حية لأعمال الدهانات الداخلية والخارجية، وتشطيبات الفلل، وتركيب بديل الخشب والرخام، مع إمكانية التكبير والتنقل التفاعلي وطلب نفس التصميم مباشرة.
            </p>
          </div>

          <ShowcaseSlideshow />
        </div>
      </FadeInSection>

      {/* Execution Stages Section */}
      <FadeInSection className="py-16 bg-[#f3ece2] border-b border-[#e5ded2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#faedd6] px-3 py-1 rounded-full">
              خطوات واضحة ومنظمة
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192020]">
              مراحل تنفيذ العمل من البداية وحتى التسليم
            </h2>
            <p className="text-sm sm:text-base text-[#596464] leading-relaxed">
              نتبع آلية عمل واضحة تضمن دقة المواعيد واختيار الخامات المناسبة وحماية موقع العمل.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#e1dacd] shadow-sm relative">
              <div className="w-10 h-10 rounded-lg bg-[#f6af24] text-[#161c1c] font-extrabold flex items-center justify-center text-lg mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-[#192020] mb-2">مشاركة التفاصيل</h3>
              <p className="text-xs text-[#5d6868] leading-relaxed">
                تواصل معنا بموقع العقار (مكة، جدة، أو الطائف) وتفاصيل العمل المبدئية ونوع الغرف أو الواجهات المراد تشطيبها.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e1dacd] shadow-sm relative">
              <div className="w-10 h-10 rounded-lg bg-[#f6af24] text-[#161c1c] font-extrabold flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-[#192020] mb-2">تحديد نطاق العمل والمعاينة</h3>
              <p className="text-xs text-[#5d6868] leading-relaxed">
                معاينة ميدانية لفحص الجدران، قياس المسطحات، الكشف عن الشروخ أو الرطوبة، وتقدير متطلبات التأسيس والمعجون.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e1dacd] shadow-sm relative">
              <div className="w-10 h-10 rounded-lg bg-[#f6af24] text-[#161c1c] font-extrabold flex items-center justify-center text-lg mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-[#192020] mb-2">اختيار الخامات والألوان</h3>
              <p className="text-xs text-[#5d6868] leading-relaxed">
                مطابقة درجات الألوان مع العميل من الكتالوجات المعتمدة، وتحديد نوع اللمعة (مطفي، ربع لمعة) والديكورات المرافقة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e1dacd] shadow-sm relative">
              <div className="w-10 h-10 rounded-lg bg-[#f6af24] text-[#161c1c] font-extrabold flex items-center justify-center text-lg mb-4">
                4
              </div>
              <h3 className="text-base font-bold text-[#192020] mb-2">التنفيذ والتسليم</h3>
              <p className="text-xs text-[#5d6868] leading-relaxed">
                تغطية الأرضيات والأثاث بالكامل، والتأسيس والصنفرة، ثم طلاء الأوجه المتتالية وتسليم الموقع نظيفًا ومرتبًا.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Coverage Areas Section */}
      <FadeInSection className="py-16 bg-[#faf7f2] border-b border-[#e8e2d8]" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              نطاق التغطية الجغرافية
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192020]">
              مناطق الخدمة في المنطقة الغربية
            </h2>
            <p className="text-sm sm:text-base text-[#596464] leading-relaxed">
              نوفر خدمات الدهانات والديكورات لكافة أحياء المدن الثلاث، مع مراعاة متطلبات المناخ المحلي في كل مدينة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CITIES.map((city) => (
              <div
                key={city.slug}
                className="bg-white rounded-xl border border-[#e5dfd5] overflow-hidden shadow-sm flex flex-col text-right hover:border-[#f6af24] transition-all group"
              >
                {city.image && (
                  <div className="relative aspect-[16/9] bg-[#eae5dc] overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.imageAlt || city.name}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-2 right-2 bg-[#161c1ce6] text-[#f6af24] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                      {city.name}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-[#1b6848] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
                      معاينة متوفرة
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#fbf3e4] text-[#b87600] flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#1b6848] bg-[#eaf4ed] px-2.5 py-1 rounded-full">
                      متاح للمعاينة
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#192020] mb-2 group-hover:text-[#b87600] transition-colors">
                    <Link href={`/areas/${city.slug}`}>
                      دهانات وديكورات في {city.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#596565] leading-relaxed mb-4 flex-grow">
                    {city.intro.slice(0, 140)}...
                  </p>

                  <div className="pt-4 border-t border-[#f0ece4] flex items-center justify-between">
                    <Link
                      href={`/areas/${city.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#b87600] hover:text-[#8f5d00]"
                    >
                      <span>صفحة {city.shortName} والتفاصيل</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={generateWhatsAppUrl(`السلام عليكم، أحتاج استفسارًا عن خدمات الدهان في ${city.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#1b6848] hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Inspiration Section */}
      <FadeInSection className="py-16 bg-[#f7f2ea] border-b border-[#e8e2d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div className="text-right space-y-2 max-w-2xl">
              <span className="inline-block text-xs font-bold text-[#b87600] bg-[#fbf0dc] px-3 py-1 rounded-full">
                إلهام وتنسيق
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192020]">
                أفكار الدهانات وتنسيق الديكورات
              </h2>
              <p className="text-xs sm:text-sm text-[#5d6868] leading-relaxed">
                نماذج استرشادية لتناغم ألوان الجدران والإضاءة وبديل الخشب والرخام لمساعدتك في تخيل فراغك السكني.
              </p>
            </div>
            <Link
              href="/inspiration"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#b87600] hover:text-[#8a5900] bg-white border border-[#e3dcce] px-4 py-2 rounded-lg shadow-sm shrink-0"
            >
              <span>عرض جميع الأفكار</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSPIRATION_ITEMS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#e5ded2] overflow-hidden shadow-sm flex flex-col text-right group"
              >
                <div className="relative aspect-[16/11] bg-[#eae5dc] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 right-2 bg-[#161c1ce6] text-[#f6af24] text-[11px] font-bold px-2 py-0.5 rounded">
                    {item.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-2">
                  <h3 className="text-base font-bold text-[#192020]">{item.title}</h3>
                  <p className="text-xs text-[#5d6868] leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-[11px] text-gray-500">لوحة الألوان:</span>
                    <div className="flex items-center gap-1">
                      {item.colorPalette.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-gray-300 inline-block shadow-xs"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Interactive WhatsApp Quote Builder Section */}
      <FadeInSection className="py-16 bg-[#faf7f2] border-b border-[#e8e2d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 text-right">
              <span className="inline-block text-xs font-bold text-[#1b6848] bg-[#e6f4ea] px-3 py-1 rounded-full">
                تواصل مباشر
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192020] leading-tight">
                هل تحتاج تسعيرًا أو تحديد موعد للمعاينة؟
              </h2>
              <p className="text-sm text-[#566262] leading-relaxed">
                حدد مدينتك والخدمة والتفاصيل وسنقوم بتجهيز رسالة واتساب جاهزة مباشرة لتسهيل الرد والتنسيق الميداني معك في مكة المكرمة أو جدة أو الطائف.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#e8e2d6]">
                  <div className="w-8 h-8 rounded-full bg-[#f8edd9] text-[#b87600] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#192020]">لا أسعار عشوائية أو غير دقيقة</h4>
                    <p className="text-xs text-[#5d6868]">
                      نحرص على معرفة حالة الجدران والمسطحات الفعلية لتقديم تسعير عادل ومناسب.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#e8e2d6]">
                  <div className="w-8 h-8 rounded-full bg-[#e7f4ec] text-[#1b6848] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#192020]">رد وتنسيق سريع عبر الواتساب</h4>
                    <p className="text-xs text-[#5d6868]">
                      يمكنك إرسال صور أو فيديو قصير للجدران للتقدير المبدئي وحجز أقرب موعد معاينة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4 text-sm font-bold">
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center gap-2 text-[#192020] hover:text-[#b87600]"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-[#f6af24]" />
                  <span>0567407414</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <WhatsAppQuoteForm />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* FAQ Section */}
      <FadeInSection className="py-16 bg-[#f5ede2] border-b border-[#e5ded2]" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#fbedd5] px-3 py-1 rounded-full">
              أسئلة وإجابات
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192020]">
              أسئلة مهمة قبل التعاقد والبدء
            </h2>
            <p className="text-sm text-[#5d6969]">
              إجابات واضحة ومباشرة عن الاستفسارات الأكثر شيوعًا حول المعاينة والمواد وطريقة العمل.
            </p>
          </div>

          {/* Interactive Mobile-Friendly FAQ Accordion */}
          <FaqAccordion faqs={homeFaqs} />

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#b87600] hover:underline"
            >
              <span>عرض كافة الأسئلة الشائعة &larr;</span>
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* Latest Blog Posts Section */}
      <FadeInSection className="py-16 bg-[#faf7f2] border-b border-[#e8e2d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div className="text-right space-y-2 max-w-2xl">
              <span className="inline-block text-xs font-bold text-[#b87600] bg-[#faebd2] px-3 py-1 rounded-full">
                دليل ومقالات
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192020]">
                أحدث المقالات لاختيار الدهانات والديكورات
              </h2>
              <p className="text-xs sm:text-sm text-[#5d6868] leading-relaxed">
                مقالات عملية شاملة تساعدك في اختيار اللمعة المناسبة وتنسيق الألوان ومعرفة خطوات تجهيز الجدران.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#b87600] hover:text-[#8a5900] bg-white border border-[#e3dcce] px-4 py-2 rounded-lg shadow-sm shrink-0"
            >
              <span>جميع المقالات الستة</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-[#e5dfd5] overflow-hidden flex flex-col text-right hover:border-[#f6af24] transition-all hover:shadow-md group"
              >
                <div className="relative aspect-[16/10] bg-[#eae5dc] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#161c1ce6] text-white text-[11px] px-2 py-0.5 rounded">
                    وقت القراءة: {post.readingTime}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow space-y-2.5">
                  <h3 className="text-base font-bold text-[#192020] group-hover:text-[#b87600] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#5d6868] leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-2 border-t border-[#f0ece4]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#b87600] hover:underline"
                    >
                      <span>قراءة المقال كاملاً</span>
                      <ArrowLeft className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Bottom CTA Banner */}
      <FadeInSection className="py-14 bg-[#161c1c] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            جاهز لبدء تشطيب أو تجديد دهانات منزلك؟
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا الآن عبر الاتصال الهاتفي أو الواتساب لحجز موعد للمعاينة الميدانية في مكة المكرمة أو جدة أو الطائف ومناقشة تفاصيل مشروعك.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <a
              href={generateWhatsAppUrl('السلام عليكم، أحتاج استفسارًا وعرض سعر لأعمال الدهانات والديكور.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-6 py-3.5 rounded-lg text-sm sm:text-base transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-[#4ade80]" />
              <span>مراسلة واتساب فورية</span>
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#121616] font-extrabold px-6 py-3.5 rounded-lg text-sm sm:text-base transition-colors shadow-md"
              dir="ltr"
            >
              <Phone className="w-5 h-5" />
              <span>0567407414</span>
            </a>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
