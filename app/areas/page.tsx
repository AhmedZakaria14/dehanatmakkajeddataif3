import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowLeft, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CITIES, SITE_CONFIG, generateWhatsAppUrl } from '@/lib/site-data';
import WhatsAppQuoteForm from '@/components/WhatsAppQuoteForm';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: 'مناطق خدمة الدهانات والديكورات | مكة المكرمة • جدة • الطائف',
  description: 'نغطي خدمات الدهانات الداخلية والخارجية وديكورات الجدران في مكة المكرمة وجدة والطائف وفق المواصفات الملائمة لبيئة ومناخ كل مدينة.',
  openGraph: {
    title: 'مناطق خدمة الدهانات والديكورات | مكة المكرمة • جدة • الطائف',
    description: 'نغطي خدمات الدهانات الداخلية والخارجية وديكورات الجدران في مكة المكرمة وجدة والطائف.',
  },
};

export default function AreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'مناطق الخدمة' }]} />

      <FadeInSection isImmediate className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-right space-y-4 mb-12 max-w-3xl">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              التغطية الجغرافية
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
              مناطق خدمة الدهانات والديكورات في المنطقة الغربية
            </h1>
            <p className="text-sm sm:text-base text-[#596464] leading-relaxed">
              نقدم خدماتنا في ثلاث مدن رئيسية تختلف كل منها في طبيعتها المناخية والمعمارية: مكة المكرمة بأجوائها الحارة، وجدة برطوبتها العالية ومناخها الساحلي، والطائف ببرودتها وأمطارها. نختار مواد الدهان وأنظمة العزل والتأسيس بما يلائم طبيعة موقعك.
            </p>
          </div>

          {/* Cities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {CITIES.map((city) => (
              <article
                key={city.slug}
                className="bg-white rounded-2xl border border-[#e2d9cd] overflow-hidden shadow-sm flex flex-col text-right hover:border-[#f6af24] transition-all group"
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
                    <div className="absolute top-2 right-2 bg-[#161c1ce6] text-[#f6af24] text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                      {city.name}
                    </div>
                  </div>
                )}
                <div className="p-6 pb-4 border-b border-[#f2ece2]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-xl bg-[#faf3e7] text-[#b87600] flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-bold text-[#1b6848] bg-[#eaf4ed] px-3 py-1 rounded-full">
                      تغطية شاملة
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#192020] group-hover:text-[#b87600] transition-colors">
                    <Link href={`/areas/${city.slug}`}>
                      دهانات وديكورات في {city.name}
                    </Link>
                  </h2>
                  <p className="text-xs text-[#5d6868] mt-1.5 leading-relaxed">
                    {city.climateFocus}
                  </p>
                </div>

                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-[#354141] mb-2">أمثلة على الأحياء المخدومة:</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {city.districts.map((d, i) => (
                        <span key={i} className="text-[11px] bg-[#f5ede2] text-[#424e4e] px-2.5 py-1 rounded">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#354141] mb-2">الخدمات الأكثر طلبًا:</h3>
                    <ul className="space-y-1.5 text-xs text-[#586464]">
                      {city.topServices.map((ts, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f6af24] shrink-0 mt-0.5" />
                          <span>{ts}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-auto border-t border-[#f0ece4] flex items-center justify-between">
                    <Link
                      href={`/areas/${city.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#b87600] hover:underline"
                    >
                      <span>صفحة {city.name} كاملة</span>
                      <ArrowLeft className="w-3 h-3" />
                    </Link>

                    <a
                      href={generateWhatsAppUrl(`السلام عليكم، أحتاج استفسارًا ومعاينة لخدمات الدهانات في ${city.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1b6848] hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quote Form Section */}
          <div className="max-w-3xl mx-auto">
            <WhatsAppQuoteForm
              title="طلب معاينة في مكة أو جدة أو الطائف"
              subtitle="أخبرنا بالمدينة والخدمة وسنفتح معك محادثة واتساب فورية لترتيب المعاينة الميدانية."
            />
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
