import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Palette, Lightbulb, ShieldAlert, ArrowLeft, MessageCircle, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { INSPIRATION_ITEMS, SERVICES, SITE_CONFIG, generateWhatsAppUrl } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'أفكار الدهانات وتنسيق الديكورات | نماذج ملهمة للمجالس والغرف والواجهات',
  description: 'دليل استرشادي لتنسيق ألوان الدهانات الداخلية والخارجية ودمج بديل الخشب والرخام وورق الجدران مع الإضاءة لمنازل وفلل مكة وجدة والطائف.',
  openGraph: {
    title: 'أفكار الدهانات وتنسيق الديكورات | نماذج استرشادية لتنسيق الألوان',
    description: 'أفكار ملهمة لتنسيق ألوان الدهانات والديكورات العصرية وبديل الخشب والرخام.',
  },
};

export default function InspirationPage() {
  const categories = [
    'ألوان المجالس وغرف المعيشة',
    'ألوان غرف النوم والهدوء',
    'واجهات وبروفايل خارجي',
    'دمج بديل الخشب والرخام',
    'ورق الجدران واللمسات الديكورية',
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: 'أفكار الدهانات وتنسيق الديكور' }]} />

      <section className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-right space-y-4 mb-10 max-w-3xl">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              دليل إلهامي وتنسيق بصري
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
              أفكار الدهانات وتنسيق الديكورات العصرية
            </h1>
            <p className="text-sm sm:text-base text-[#556262] leading-relaxed">
              نماذج استرشادية تجمع بين الألوان المحايدة والدافئة وتداخلات بديل الخشب والرخام وورق الجدران لمساعدتك في اتخاذ القرار واختيار النمط المناسب لكل غرفة في منزلك.
            </p>
          </div>

          {/* Transparent Disclaimer Notice as required */}
          <div className="mb-12 bg-[#fffbf2] border-2 border-[#e9d9b6] rounded-2xl p-6 text-right shadow-xs">
            <div className="flex items-start gap-3.5">
              <ShieldAlert className="w-6 h-6 text-[#b87600] shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <h2 className="text-base font-bold text-[#192020]">
                  تنبيه توضيحي للمستفيدين
                </h2>
                <p className="text-xs sm:text-sm text-[#5d6868] leading-relaxed">
                  الصور والنماذج المعروضة في هذه الصفحة هي <strong>أمثلة استرشادية وأفكار إلهامية</strong> لتوضيح تنسيق درجات الألوان وتفاعل الإضاءة مع الديكور، وليست معرضًا لمشروعات أو أعمال منسوبة سابقًا للنشاط. يتم الاتفاق الميداني على درجات الألوان الحقيقية واختيار كتالوجات جوتن والجزيرة وعينات بديل الخشب والرخام يدويًا أثناء المعاينة.
                </p>
              </div>
            </div>
          </div>

          {/* Inspiration Grid */}
          <div className="space-y-16">
            {INSPIRATION_ITEMS.map((item, index) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-[#e5dfd4] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-right"
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 relative aspect-[16/11] bg-[#eae5dc] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 right-3 bg-[#161c1ce6] text-[#f6af24] text-xs font-bold px-3 py-1 rounded shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-6 p-6 sm:p-8 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#b87600]">{item.category}</span>
                    <h2 className="text-2xl font-bold text-[#192020]">{item.title}</h2>
                  </div>

                  <p className="text-sm text-[#576464] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#f0ebe2]">
                    <div className="flex items-start gap-2 text-xs text-[#434f4f]">
                      <span className="font-bold text-[#192020] shrink-0">أفضل استخدام:</span>
                      <span className="leading-relaxed">{item.bestFor}</span>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-[#434f4f]">
                      <span className="font-bold text-[#192020] shrink-0">الإضاءة المقترحة:</span>
                      <span className="leading-relaxed">{item.lightingTip}</span>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <span className="text-xs font-bold text-[#192020]">لوحة الألوان الدليلية:</span>
                      <div className="flex items-center gap-1.5">
                        {item.colorPalette.map((color, cIdx) => (
                          <span
                            key={cIdx}
                            className="w-5 h-5 rounded-full border border-gray-300 inline-block shadow-xs"
                            style={{ backgroundColor: color }}
                            title={`درجة لون ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/services/${item.serviceSlug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#b87600] hover:underline"
                    >
                      <span>الخدمة المرتبطة: {item.serviceName}</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={generateWhatsAppUrl(`السلام عليكم، أعجبتني فكرة «${item.title}» وأريد استفسارًا عن تطبيقها عندي.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-3.5 py-2 rounded-lg text-xs transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>استفسار حول هذه الفكرة</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-16 bg-[#161c1c] text-white rounded-2xl p-8 sm:p-10 text-center space-y-4">
            <Sparkles className="w-8 h-8 text-[#f6af24] mx-auto" />
            <h2 className="text-2xl font-bold">هل لديك فكرة أو صورة خاصة ترغب في تطبيقها؟</h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              أرسل لنا الصورة أو فكرة الديكور عبر الواتساب وسنقوم بدراسة متطلبات الجدار والخامات المناسبة لها وتنسيق موعد للمعاينة.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={generateWhatsAppUrl('السلام عليكم، لدي صورة ديكور جداري وأريد معرفة إمكانية وتكلفة تنفيذها.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                <span>إرسال الصورة عبر الواتساب</span>
              </a>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#121616] font-extrabold px-6 py-3 rounded-lg text-sm transition-colors shadow-md"
                dir="ltr"
              >
                <Phone className="w-4 h-4" />
                <span>0567407414</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
