import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Phone, MessageCircle, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { GENERAL_FAQS, SITE_CONFIG, generateWhatsAppUrl } from '@/lib/site-data';
import WhatsAppQuoteForm from '@/components/WhatsAppQuoteForm';
import { FAQPageJsonLd } from '@/components/JsonLd';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة حول خدمات الدهانات والديكورات | مكة وجدة والطائف',
  description: 'إجابات شاملة وصريحة عن أكثر الأسئلة شيوعًا حول المعاينة الميدانية، تسعير الدهانات، أنواع الخامات، التعامل مع الجدران والرطوبة، ومواعيد التسليم.',
  openGraph: {
    title: 'الأسئلة الشائعة حول خدمات الدهانات والديكورات | مكة وجدة والطائف',
    description: 'إجابات شاملة وصريحة عن أسئلة تسعير ومعاينة وتنفيذ الدهانات في مكة وجدة والطائف.',
  },
};

export default function FaqPage() {
  return (
    <>
      <FAQPageJsonLd faqs={GENERAL_FAQS} />

      <Breadcrumbs items={[{ label: 'الأسئلة الشائعة' }]} />

      <section className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-right space-y-4 mb-12 max-w-3xl">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              إجابات واضحة ومباشرة
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
              الأسئلة الشائعة قبل التعاقد والبدء
            </h1>
            <p className="text-sm sm:text-base text-[#596565] leading-relaxed">
              جمعنا هنا أهم التساؤلات التي يطرحها عملاؤنا في مكة المكرمة وجدة والطائف بشأن كيفية تسعير الأعمال، وخطوات المعاينة، وأنواع المواد، وطريقة حماية الأثاث، والتعامل مع عيوب الجدران.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main FAQs Column */}
            <div className="lg:col-span-8 space-y-4 text-right">
              <FaqAccordion faqs={GENERAL_FAQS} />

              {/* Still have questions? */}
              <div className="bg-[#f3ece2] rounded-xl border border-[#e0d7c9] p-6 text-right space-y-3 mt-8">
                <h3 className="text-base font-bold text-[#192020]">هل لديك سؤال آخر لم تجد إجابته هنا؟</h3>
                <p className="text-xs sm:text-sm text-[#5a6767] leading-relaxed">
                  تواصل معنا مباشرة عبر الواتساب وسيسعدنا الرد على كافة استفساراتك حول منزلك أو موقعك.
                </p>
                <div className="pt-1">
                  <a
                    href={generateWhatsAppUrl('السلام عليكم، لدي سؤال خاص حول خدمات الدهانات والديكور.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                    <span>طرح استفسارك عبر الواتساب</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              <WhatsAppQuoteForm
                title="طلب تسعير ومعاينة"
                subtitle="حدد نوع الخدمة ومدينتك وسنقوم بتجهيز رسالة واتساب جاهزة مباشرة لتأكيد موعد المعاينة."
              />

              <div className="bg-[#161c1c] text-white p-6 rounded-xl text-center space-y-3 shadow-md">
                <Phone className="w-8 h-8 text-[#f6af24] mx-auto" />
                <h3 className="text-base font-bold">اتصال هاتفي مباشر</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  نسعد باتصالك المباشر في أي وقت للاستفسار السريع أو حجز المعاينة.
                </p>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#f6af24] hover:bg-[#d88d12] text-[#121616] font-extrabold py-2.5 rounded-lg text-sm shadow transition-colors"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4" />
                  <span>0567407414</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
