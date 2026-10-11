import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG, CITIES, generateWhatsAppUrl } from '@/lib/site-data';
import WhatsAppQuoteForm from '@/components/WhatsAppQuoteForm';

export const metadata: Metadata = {
  title: 'تواصل معنا | دهانات وديكورات في مكة وجدة والطائف',
  description: 'تواصل مباشرة لطلب معاينة ميدانية وعرض سعر لخدمات الدهانات الداخلية والخارجية وديكورات الجدران في مكة المكرمة وجدة والطائف. اتصال أو واتساب على 0567407414.',
  openGraph: {
    title: 'تواصل معنا | دهانات وديكورات في مكة وجدة والطائف',
    description: 'تواصل مباشرة لطلب معاينة ميدانية وعرض سعر لخدمات الدهانات والديكورات.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'تواصل معنا' }]} />

      <section className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-right space-y-4 mb-12 max-w-3xl">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              تواصل مباشر وسريع
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
              تواصل معنا لطلب المعاينة وعرض السعر
            </h1>
            <p className="text-sm sm:text-base text-[#596565] leading-relaxed">
              يسعدنا استقبال استفساراتكم وتنسيق مواعيد المعاينة الميدانية في مكة المكرمة أو جدة أو الطائف لتحديد متطلبات الدهان ومساحة الجدران والخامات المطلوبة بدقة.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Col: Contact Information */}
            <div className="lg:col-span-5 space-y-6 text-right">
              {/* Card 1: Direct Contact */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#e5dfd4] shadow-xs space-y-5">
                <h2 className="text-lg font-bold text-[#192020] pb-3 border-b border-[#f2ece2]">
                  بيانات التواصل الرسمية
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#fdf5e7] text-[#b87600] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs text-gray-500 font-medium">الاتصال الهاتفي المباشر:</span>
                      <a
                        href={SITE_CONFIG.phoneTel}
                        className="block text-base font-extrabold text-[#192020] hover:text-[#b87600]"
                        dir="ltr"
                      >
                        0567407414
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f4ed] text-[#1b6848] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs text-gray-500 font-medium">مراسلة الواتساب الفورية:</span>
                      <a
                        href={SITE_CONFIG.whatsappBase}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-base font-bold text-[#1b6848] hover:underline"
                        dir="ltr"
                      >
                        +966 56 740 7414
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#faf2e6] text-[#b87600] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs text-gray-500 font-medium">نطاق التغطية الميدانية:</span>
                      <p className="text-sm font-bold text-[#192020]">
                        مكة المكرمة • محافظة جدة • مدينة الطائف
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Field Inspection note */}
              <div className="bg-[#f5ede2] p-6 rounded-2xl border border-[#e2dad0] space-y-3">
                <h3 className="text-base font-bold text-[#192020] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#b87600]" />
                  <span>طريقة طلب وتنسيق المعاينة</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#546262] leading-relaxed">
                  تتم المعاينة الميدانية من خلال الاتفاق المسبق على الموعد المناسب، حيث يقوم الفني بتفقد الأسطح، قياس الأمتار، فحص وجود رطوبة أو شروخ، وعرض كتالوجات الألوان وعينات بديل الخشب والرخام للاختيار المباشر.
                </p>
              </div>

              {/* Card 3: Cities Links */}
              <div className="bg-white p-6 rounded-2xl border border-[#e5dfd4] shadow-xs space-y-3">
                <h3 className="text-base font-bold text-[#192020]">صفحات المدن المخدومة</h3>
                <div className="space-y-2">
                  {CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/areas/${c.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-[#faf8f4] border border-[#eee6db] hover:border-[#b87600] transition-colors text-xs font-bold text-[#2d3737]"
                    >
                      <span>دهانات وديكورات في {c.name}</span>
                      <span className="text-[#b87600]">&larr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Quote form */}
            <div className="lg:col-span-7">
              <WhatsAppQuoteForm
                title="نموذج تجهيز طلب المعاينة والتسعير"
                subtitle="حدد التفاصيل أدناه ليتم تحويلها إلى رسالة واتساب منسقة ومباشرة للتواصل معنا فورًا."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
