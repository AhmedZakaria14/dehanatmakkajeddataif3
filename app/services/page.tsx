import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Phone, CheckCircle2, MapPin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SERVICES, CITIES, SITE_CONFIG, generateWhatsAppUrl } from '@/lib/site-data';
import WhatsAppQuoteForm from '@/components/WhatsAppQuoteForm';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: 'خدمات الدهانات والديكورات في مكة وجدة والطائف | الدليل الشامل',
  description: 'دليل كامل لخدمات الدهانات الداخلية والخارجية والواجهات، دهانات الفلل والشقق، تجهيز الجدران والمعجون، ورق الجدران، وبديل الخشب والرخام في مكة وجدة والطائف.',
  openGraph: {
    title: 'خدمات الدهانات والديكورات في مكة وجدة والطائف | الدليل الشامل',
    description: 'دليل كامل لخدمات الدهانات الداخلية والخارجية والواجهات وتجهيز الجدران وبديل الخشب والرخام.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'الخدمات' }]} />

      <FadeInSection isImmediate className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-right space-y-4 mb-12 max-w-3xl">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              دليل الخدمات المتكامل
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
              خدمات الدهانات والديكورات في مكة وجدة والطائف
            </h1>
            <p className="text-sm sm:text-base text-[#596464] leading-relaxed">
              نوفر تشكيلة متكاملة من خدمات الدهانات الإنشائية والديكورات العصرية للفلل والشقق والعمائر السكنية والمباني التجارية، مع عناية فائقة بمراحل التأسيس والصنفرة واختيار الخامات المعتمدة.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="bg-white rounded-xl border border-[#e5ded3] overflow-hidden flex flex-col hover:border-[#f6af24] transition-all hover:shadow-md group text-right"
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
                  <div className="absolute top-2 right-2 bg-[#161c1ce6] text-[#f6af24] text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                    {service.navTitle}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <h2 className="text-lg font-bold text-[#192020] group-hover:text-[#b87600] transition-colors leading-snug">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-[#5c6868] leading-relaxed flex-grow">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-[#f0ece4] flex items-center justify-between text-xs">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-[#b87600] font-bold hover:underline"
                    >
                      <span>تفاصيل الخدمة والخطوات</span>
                      <ArrowLeft className="w-3 h-3" />
                    </Link>
                    <a
                      href={generateWhatsAppUrl(`السلام عليكم، أحتاج عرض سعر لخدمة: ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#1b6848] font-semibold hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Cities Coverage notice */}
          <div className="bg-[#f4eee4] rounded-xl border border-[#e2dad0] p-6 sm:p-8 mb-16 text-right">
            <div className="max-w-3xl">
              <h2 className="text-xl font-bold text-[#192020] mb-2">
                تغطية متكاملة في مكة المكرمة وجدة والطائف
              </h2>
              <p className="text-xs sm:text-sm text-[#5d6868] leading-relaxed mb-4">
                تتوفر جميع الخدمات السابقة في المدن الثلاث وفق أعلى معايير الجودة ومراعاة طبيعة العوامل الجوية في كل مدينة:
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-bold">
                {CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/areas/${c.slug}`}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#dacfc1] px-4 py-2 rounded-lg text-[#192020] hover:text-[#b87600] hover:border-[#b87600] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#f6af24]" />
                    <span>دهانات في {c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="max-w-3xl mx-auto">
            <WhatsAppQuoteForm
              title="طلب عرض سعر لمعاينة أي من الخدمات"
              subtitle="اختر الخدمة والمدينة وسنقوم بالتواصل معك لتحديد موعد المعاينة الميدانية."
            />
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
