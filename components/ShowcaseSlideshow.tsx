'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  MessageCircle,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  Paintbrush,
  SunMedium,
  CheckCircle2
} from 'lucide-react';
import { SITE_CONFIG, generateWhatsAppUrl } from '@/lib/site-data';

export interface SlideshowItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  city: string;
  district: string;
  executionTime: string;
  paintType: string;
  colorCode: string;
  lighting: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const SLIDESHOW_CATEGORIES = [
  { slug: 'all', name: 'جميع النماذج' },
  { slug: 'interior', name: 'دهانات داخلية' },
  { slug: 'exterior', name: 'واجهات وبروفايل' },
  { slug: 'decor', name: 'بديل خشب ورخام' },
  { slug: 'stucco', name: 'استوكو وديكوري' },
];

export const SLIDESHOW_ITEMS: SlideshowItem[] = [
  {
    id: '1',
    title: 'تشطيب مجلس رجال عصري بألوان الجريج المطفي',
    category: 'دهانات داخلية',
    categorySlug: 'interior',
    city: 'مكة المكرمة',
    district: 'حي العوالي',
    executionTime: '4 أيام عمل',
    paintType: 'جوتن فينوماستيك بيور مطفي ناعم',
    colorCode: 'درجة لايمستون 1032 / سوفت سكين',
    lighting: 'إضاءة دافئة 3000K مدمجة مع سبوت لايت',
    description: 'تنفيذ أعمال المعجون والتأسيس على 3 طبقات وصنفرة آلية بدون غبار، ثم طلاء وجهين متجانسين بلون جريج هادئ يمنح المجلس فخامة وراحة بصرية متكاملة.',
    image: '/images/slideshow/slide-01-majlis-greige.webp',
    imageAlt: 'تنفيذ دهان مجلس رجال بألوان الجريج في مكة المكرمة',
  },
  {
    id: '2',
    title: 'واجهة فيلا حديثة بتشطيب البروفايل ومقاومة المناخ',
    category: 'واجهات وبروفايل',
    categorySlug: 'exterior',
    city: 'جدة',
    district: 'حي أبحر الشمالية',
    executionTime: '9 أيام عمل',
    paintType: 'دهان بروفايل خارجي عالي المرونة ومقاوم للرطوبة',
    colorCode: 'بيج رملي دافئ متناسق مع كتل الواجهة',
    lighting: 'كشافات إضاءة جدارية للأعلى (Up-lighting)',
    description: 'تجهيز الواجهة بمعجون خارجي مضاد للأملاح والرطوبة البحرية في جدة، مع تطبيق ملمس البروفايل المحبب المقاوم لعوامل الطقس وشمس الصيف الحارة.',
    image: '/images/slideshow/slide-02-villa-facade.webp',
    imageAlt: 'تشطيب واجهة فيلا بدهان بروفايل خارجي في جدة',
  },
  {
    id: '3',
    title: 'ديكور جدار تلفزيون مدمج ببديل الخشب وبديل الرخام',
    category: 'بديل خشب ورخام',
    categorySlug: 'decor',
    city: 'الطائف',
    district: 'حي الهدى',
    executionTime: 'يومين عمل',
    paintType: 'ألواح PVC بديل خشب مقوى وبديل رخام كلكتا',
    colorCode: 'خشب جوزي غامق مع عروق رمادية وذهبية',
    lighting: 'شريط LED مخفي 3000K بدرجة دفء متناسقة',
    description: 'تركيب دقيق لمحاذاة الشرائح مع قص ليزري لأماكن الأسلاك والشاشة، محاط بإطار من بديل الرخام الفاخر لإبراز الصالة المركزية.',
    image: '/images/slideshow/slide-03-wood-marble-tv.webp',
    imageAlt: 'تركيب بديل خشب وبديل رخام خلفية شاشة في الطائف',
  },
  {
    id: '4',
    title: 'جدار ديكوري استوكو بملمس رخامي متموج',
    category: 'استوكو وديكوري',
    categorySlug: 'stucco',
    city: 'مكة المكرمة',
    district: 'حي الشوقية',
    executionTime: '3 أيام عمل',
    paintType: 'معجون استوكو إيطالي ملمع يدويًا',
    colorCode: 'رمادي لؤلؤي مع عروق حجرية خفيفة',
    lighting: 'سبوت لايت موجه بزاوية إضاءة مركزة',
    description: 'تطبيق طبقات الاستوكو بالمالج اليدوي بحركات متداخلة مع الصقل النهائي ليعطي مظهر الرخام الطبيعي بنعومة فائقة ولمعان حريري.',
    image: '/images/slideshow/slide-04-stucco-wall.webp',
    imageAlt: 'دهان جدار استوكو رخامي بمكة المكرمة',
  },
  {
    id: '5',
    title: 'غرفة نوم رئيسية بدهان حريري وتنسيق جداري',
    category: 'دهانات داخلية',
    categorySlug: 'interior',
    city: 'جدة',
    district: 'حي الشاطئ',
    executionTime: '3 أيام عمل',
    paintType: 'دهان نصف لمعة سهل التنظيف ومقاوم للبقع',
    colorCode: 'أوف وايت كريمي دافئ مريح للأعين',
    lighting: 'إنارة مدمجة مخفية مع أبجورات جانبية',
    description: 'دهان متقن للأسقف والجدران مع حماية كاملة لأرضيات الباركيه والأثاث، وتطبيق دهان مقاوم للبقع سهل المسح والغسيل.',
    image: '/images/slideshow/slide-05-luxury-bedroom.webp',
    imageAlt: 'تشطيب دهانات غرفة نوم مودرن في جدة',
  },
  {
    id: '6',
    title: 'صالة طعام مفتوحة بتناغم لوني مع الإضاءة',
    category: 'دهانات داخلية',
    categorySlug: 'interior',
    city: 'الطائف',
    district: 'حي شهار',
    executionTime: '4 أيام عمل',
    paintType: 'فينوماستيك مطفي ممتاز من جوتن',
    colorCode: 'درجة كشمير دافئ متناغم مع طاولة السفرة',
    lighting: 'ثريا مودرن مع إنارة محايدة 4000K',
    description: 'تجهيز الزوايا والتقاء السقف بالجدار باستخدام فواصل وشريط زوايا معدني، لإعطاء خطوط حادة ومستقيمة بنقاء تام.',
    image: '/images/slideshow/slide-06-dining-salon.webp',
    imageAlt: 'تشطيب دهان صالة طعام راقية في الطائف',
  },
  {
    id: '7',
    title: 'تجديد دهان دور كامل لفيلا سكنية بتشطيب فندقي',
    category: 'دهانات داخلية',
    categorySlug: 'interior',
    city: 'مكة المكرمة',
    district: 'حي بطحاء قريش',
    executionTime: '7 أيام عمل',
    paintType: 'نظام دهانات الجزيرة جرين معجون + وجهين دهان',
    colorCode: 'ألوان متدرجة للأروقة والصالات',
    lighting: 'إضاءات سقفية متباينة',
    description: 'معالجة الشروخ الشعرية القديمة بشبك فايبر جلاس ومعجون مرن، تلاها طلاء وجهين كاملين مع تلميع الأبواب والنعلات.',
    image: '/images/slideshow/slide-07-villa-interior.webp',
    imageAlt: 'تجديد دهان فيلا سكنية في مكة المكرمة',
  },
  {
    id: '8',
    title: 'واجهة عمارة معمارية حديثة بمزيج البروفايل والدهان الناعم',
    category: 'واجهات وبروفايل',
    categorySlug: 'exterior',
    city: 'جدة',
    district: 'حي الزهراء',
    executionTime: '12 يوم عمل',
    paintType: 'دهان جوتن جوتاشيلد إكستريم المقاوم للحرارة',
    colorCode: 'أبيض قطبي مع رمادي غامق للأعمدة',
    lighting: 'إنارة خارجية معمارية',
    description: 'استخدام رافعات وسقالات مطابقة لمعايير السلامة، مع حماية واجهات النوافذ الزجاجية وتشطيب عالي الصمود لأشعة الشمس المباشرة.',
    image: '/images/slideshow/slide-08-modern-architecture.webp',
    imageAlt: 'تشطيب واجهة عمارة خارجية بجدة',
  },
  {
    id: '9',
    title: 'مدخل فاخر ببديل الرخام وإضاءات خطية متصلة',
    category: 'بديل خشب ورخام',
    categorySlug: 'decor',
    city: 'مكة المكرمة',
    district: 'حي الرصيفة',
    executionTime: 'يومين عمل',
    paintType: 'ألواح بديل الرخام بمقاسات كبيرة مع فواصل ذهبية',
    colorCode: 'رخام بورتورو أسود بعروق ذهبية فخمة',
    lighting: 'مسارات ليد بروفايل مغناطيسي (Magnetic Track)',
    description: 'تركيب دقيق للفواصل بدون أي نتوءات ظاهرة مع لصق بمواد ألمانية عالية الالتصاق تضمن الثبات لعشرات السنين.',
    image: '/images/slideshow/slide-09-marble-accent.webp',
    imageAlt: 'تركيب بديل الرخام مع إنارة خطية في مكة',
  },
  {
    id: '10',
    title: 'معالجة جدران وصنفرة وتأسيس لمعان حريري دقيق',
    category: 'استوكو وديكوري',
    categorySlug: 'stucco',
    city: 'الطائف',
    district: 'حي الفيصلية',
    executionTime: '3 أيام عمل',
    paintType: 'معجون أساس تأسيسي + صنفرة إلكترونية بإضاءة كاشفة',
    colorCode: 'درجة سيمفوني ناعمة محايدة',
    lighting: 'إضاءة كاشفة فاحصة لتسوية السطح بنسبة 100%',
    description: 'مرحلة الصنفرة والتنعيم قبل الطلاء النهائي تكشف أدق التموجات ليظهر الجدار أملس كالحرير تحت أي زاوية إضاءة نهارية أو ليلية.',
    image: '/images/slideshow/slide-10-wall-craftsmanship.webp',
    imageAlt: 'مرحلة تأسيس وصنفرة الجدران بإتقان في الطائف',
  }
];

interface ShowcaseSlideshowProps {
  className?: string;
}

export default function ShowcaseSlideshow({ className = '' }: ShowcaseSlideshowProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Filter slides
  const filteredSlides = selectedCategory === 'all'
    ? SLIDESHOW_ITEMS
    : SLIDESHOW_ITEMS.filter(item => item.categorySlug === selectedCategory);

  const activeSlide = filteredSlides[currentIndex] || filteredSlides[0];

  // Navigation handlers
  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % filteredSlides.length);
  }, [filteredSlides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + filteredSlides.length) % filteredSlides.length);
  }, [filteredSlides.length]);

  // Autoplay interval
  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, lightboxOpen, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handlePrev(); // RTL: Right is prev
      } else if (e.key === 'ArrowLeft') {
        handleNext(); // RTL: Left is next
      } else if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, handleNext, handlePrev]);

  // Handle category change
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentIndex(0);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    // Swipe left (next in RTL) or swipe right
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  if (!activeSlide) return null;

  const whatsappMessage = `السلام عليكم، أعجبني نموذج التشطيب: (${activeSlide.title}) في (${activeSlide.city} - ${activeSlide.district}). أرجو تزويدي بتفاصيل التكلفة وتحديد موعد معاينة.`;

  return (
    <section
      id="showcase-slideshow-section"
      className={`relative bg-[#121616] text-white py-10 sm:py-16 border-y border-[#273232] overflow-hidden ${className}`}
      aria-label="معرض الأعمال والنماذج التنفيذية"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#202929] border border-[#374545] px-3.5 py-1.5 rounded-full text-xs text-[#f6af24] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#f6af24]" />
            <span>معرض الأعمال المصورة والتشطيبات الحية</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            نماذج تنفيذية في <span className="text-[#f6af24]">مكة المكرمة وجدة والطائف</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            استعرض تشكيلة واقعية من أعمال الدهانات الداخلية، الواجهات والبروفايل، ديكورات بديل الخشب وبديل الرخام، والاستوكو المنفذة بأعلى معايير الإتقان والتنسيق اللوني.
          </p>
        </div>

        {/* Filter Tabs with mobile scroll */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-3 no-scrollbar scroll-smooth px-1">
            {SLIDESHOW_CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  type="button"
                  key={cat.slug}
                  id={`filter-tab-${cat.slug}`}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer min-h-[38px] ${
                    isActive
                      ? 'bg-[#f6af24] text-[#121616] shadow-md scale-105 font-bold'
                      : 'bg-[#1e2626] text-gray-300 hover:text-white hover:bg-[#283434] border border-[#2d3a3a]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Slideshow Stage */}
        <div
          className="relative bg-[#192121] rounded-2xl border border-[#303d3d] overflow-hidden shadow-2xl select-none"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-4 z-20 flex items-center justify-between pointer-events-none">
            {/* City & Category Badge */}
            <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
              <span className="inline-flex items-center gap-1.5 bg-[#121616]/85 backdrop-blur-md border border-[#3a4848] text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#f6af24]" />
                <span>{activeSlide.city} - {activeSlide.district}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#f6af24] text-[#121616] text-[11px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-sm">
                {activeSlide.category}
              </span>
            </div>

            {/* Slideshow action controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
              {/* Play / Pause */}
              <button
                type="button"
                id="btn-slideshow-toggle-autoplay"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#121616]/85 hover:bg-[#1f2828] text-gray-200 hover:text-white border border-[#3a4848] flex items-center justify-center transition-all cursor-pointer"
                title={isPlaying ? 'إيقاف التشغيل التلقائي' : 'تشغيل العرض التلقائي'}
                aria-label={isPlaying ? 'إيقاف التشغيل التلقائي' : 'تشغيل العرض التلقائي'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#f6af24]" />}
              </button>

              {/* Fullscreen Lightbox Button */}
              <button
                type="button"
                id="btn-slideshow-open-lightbox"
                onClick={() => setLightboxOpen(true)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#121616]/85 hover:bg-[#1f2828] text-gray-200 hover:text-white border border-[#3a4848] flex items-center justify-center transition-all cursor-pointer"
                title="عرض الصورة بالحجم الكامل"
                aria-label="عرض الصورة بالحجم الكامل"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Image Stage (7 cols) */}
            <div className="relative lg:col-span-7 bg-[#0e1212] overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[380px] lg:min-h-[520px]">
              <Image
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Mobile swipe hint pill */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none lg:hidden">
                <span className="bg-black/60 backdrop-blur-md text-gray-200 text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 shadow-sm">
                  <span>اسحب يمينًا ويسارًا للتبديل</span>
                </span>
              </div>

              {/* Nav Arrow Prev / Next Buttons */}
              <button
                type="button"
                id="btn-slideshow-prev-arrow"
                onClick={handlePrev}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#121616]/80 hover:bg-[#f6af24] text-white hover:text-[#121616] border border-[#354343] flex items-center justify-center transition-all shadow-lg active:scale-90 cursor-pointer"
                aria-label="النموذج السابق"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                type="button"
                id="btn-slideshow-next-arrow"
                onClick={handleNext}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#121616]/80 hover:bg-[#f6af24] text-white hover:text-[#121616] border border-[#354343] flex items-center justify-center transition-all shadow-lg active:scale-90 cursor-pointer"
                aria-label="النموذج التالي"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Slide Metadata & Action Card (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-5 bg-[#182020] text-right">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs text-gray-400 border-b border-[#293636] pb-2.5">
                  <span className="text-[#f6af24] font-bold">
                    نموذج رقم {currentIndex + 1} من {filteredSlides.length}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>مدة الإنجاز: {activeSlide.executionTime}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                  {activeSlide.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {activeSlide.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#141a1a] border border-[#283535] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#d4af37] font-bold">
                      <Paintbrush className="w-3.5 h-3.5" />
                      <span>نوع الدهان / الخامة:</span>
                    </div>
                    <div className="text-gray-200 font-medium text-xs">
                      {activeSlide.paintType}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#141a1a] border border-[#283535] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#d4af37] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>كود وتنسيق اللون:</span>
                    </div>
                    <div className="text-gray-200 font-medium text-xs">
                      {activeSlide.colorCode}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#141a1a] border border-[#283535] space-y-1 sm:col-span-2">
                    <div className="flex items-center gap-1.5 text-[#d4af37] font-bold">
                      <SunMedium className="w-3.5 h-3.5" />
                      <span>الإضاءة الموصى بها:</span>
                    </div>
                    <div className="text-gray-200 font-medium text-xs">
                      {activeSlide.lighting}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4ade80] shrink-0" />
                  <span>معاينة ميدانية وتحديد متطلبات السطح والتأسيس مجانًا.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#293636] flex flex-col sm:flex-row gap-2">
                <a
                  id={`btn-whatsapp-quote-slide-${activeSlide.id}`}
                  href={generateWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#155339] active:bg-[#0f3d2a] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 text-center min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#4ade80] fill-current" />
                  <span>طلب معاينة لتنفيذ هذا النموذج</span>
                </a>

                <a
                  id="btn-call-slide"
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#f6af24] hover:bg-[#d88d12] active:bg-[#c9830c] text-[#121616] font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all active:scale-95 min-h-[44px]"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>0567407414</span>
                </a>
              </div>
            </div>
          </div>

          {/* Autoplay Progress Bar */}
          {isPlaying && (
            <div className="h-1 bg-[#1e2626] w-full overflow-hidden">
              <div
                key={activeSlide.id}
                className="h-full bg-gradient-to-r from-[#d4af37] to-[#f6af24] animate-[progress_6s_linear]"
                style={{
                  animationDuration: '6s',
                }}
              />
            </div>
          )}
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scroll-smooth no-scrollbar">
          {filteredSlides.map((slide, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                type="button"
                key={slide.id}
                id={`thumb-slide-${slide.id}`}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-16 sm:w-24 h-12 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#f6af24] ring-2 ring-[#f6af24]/50 scale-105 shadow-lg'
                    : 'border-[#2d3a3a] opacity-60 hover:opacity-100 hover:border-gray-500'
                }`}
                title={slide.title}
                aria-label={slide.title}
              >
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  sizes="100px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal with Safe Area Padding */}
      {lightboxOpen && (
        <div
          id="slideshow-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 pb-safe pt-safe"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Lightbox Top Bar */}
          <div
            className="flex items-center justify-between text-white pb-3 border-b border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <div>
              <h4 className="text-sm sm:text-lg font-bold">{activeSlide.title}</h4>
              <p className="text-[11px] sm:text-xs text-gray-400">
                {activeSlide.city} - {activeSlide.district} | {activeSlide.category}
              </p>
            </div>

            <button
              type="button"
              id="btn-close-lightbox"
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="إغلاق العرض المكبر"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Image Center */}
          <div
            className="relative flex-1 my-3 flex items-center justify-center max-w-6xl mx-auto w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[72vh]">
              <Image
                src={activeSlide.image}
                alt={activeSlide.imageAlt}
                fill
                sizes="100vw"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Navigation Buttons */}
            <button
              type="button"
              id="btn-lightbox-prev"
              onClick={handlePrev}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#f6af24] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all shadow-xl cursor-pointer"
              aria-label="السابق"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              type="button"
              id="btn-lightbox-next"
              onClick={handleNext}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#f6af24] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all shadow-xl cursor-pointer"
              aria-label="التالي"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs text-gray-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span><strong>نوع الدهان:</strong> {activeSlide.paintType}</span>
              <span className="hidden sm:inline"><strong>كود اللون:</strong> {activeSlide.colorCode}</span>
            </div>

            <a
              href={generateWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1b6848] hover:bg-[#155339] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#4ade80]" />
              <span>استفسر عن تنفيذ هذا النموذج عبر الواتساب</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
