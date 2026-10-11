import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | دهانات وديكورات في مكة وجدة والطائف',
  description: 'سياسة الخصوصية وسرية البيانات لخدمات دهانات وديكورات في مكة المكرمة وجدة والطائف.',
  openGraph: {
    title: 'سياسة الخصوصية | دهانات وديكورات في مكة وجدة والطائف',
    description: 'سياسة الخصوصية وسرية البيانات لخدمات دهانات وديكورات في مكة المكرمة وجدة والطائف.',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'سياسة الخصوصية' }]} />

      <section className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-right">
          {/* Header */}
          <div className="space-y-4 mb-10">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              الشفافية وسرية البيانات
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
              سياسة الخصوصية
            </h1>
            <p className="text-sm sm:text-base text-[#596565] leading-relaxed">
              نلتزم بحماية خصوصية زوار موقعنا وعملائنا الكرام في مكة المكرمة وجدة والطائف. توضح هذه الوثيقة طبيعة المعلومات التي يتم التعامل معها عند تصفحك للموقع أو تواصلك معنا.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#e5dfd4] shadow-xs space-y-8 text-sm sm:text-base text-[#465353] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#192020] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#f6af24]" />
                <span>1. طبيعة البيانات التي نتلقاها</span>
              </h2>
              <p>
                لا يتطلب تصفح الموقع إنشاء أي حساب أو إدخال بيانات بنكية أو بطاقات دفع. عندما تقرر التواصل معنا عبر الاتصال الهاتفي أو تطبيق الواتساب أو استخدام نموذج تجهيز الرسالة، فإننا نتلقى فقط المعلومات الضرورية لتنسيق المعاينة مثل:
              </p>
              <ul className="list-disc pr-6 space-y-1 text-sm text-[#546262]">
                <li>المدينة والحي التقريبي لتحديد نطاق المعاينة الميدانية.</li>
                <li>نوع العقار (شقة، فيلا، عمارة) ونوع خدمة الدهان أو الديكور المطلوبة.</li>
                <li>رقم هاتفك الذي تتواصل به عبر الواتساب أو المكالمة.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#192020] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#f6af24]" />
                <span>2. كيفية استخدام البيانات</span>
              </h2>
              <p>
                تُستخدم البيانات المستلمة فقط وحصريًا لغرض:
              </p>
              <ul className="list-disc pr-6 space-y-1 text-sm text-[#546262]">
                <li>الرد على استفساراتك الفنية وتقديم عروض الأسعار التقديرية.</li>
                <li>تنسيق الموعد الميداني مع الفني لزيارة موقع العمل وتفقد الجدران والمسطحات.</li>
                <li>متابعة مراحل التنفيذ والتسليم أثناء سريان العمل المتفق عليه.</li>
              </ul>
              <p className="text-xs sm:text-sm text-[#616f6f] pt-1">
                نحن لا نقوم ببيع أو مشاركة أو تأجير أي من بيانات التواصل الخاصة بك لأي أطراف ثالثة أو شركات تسويق خارجية على الإطلاق.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#192020] flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#f6af24]" />
                <span>3. التواصل عبر تطبيقات الطرف الثالث (واتساب)</span>
              </h2>
              <p>
                عند الضغط على أزرار «واتساب»، يتم فتح تطبيق واتساب مباشرة على جهازك، وتخضع المحادثات المشفرة بين الطرفين لسياسات الخصوصية والأمان الخاصة بشركة واتساب (Meta).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#192020] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#f6af24]" />
                <span>4. حقوق العميل والاستفسار</span>
              </h2>
              <p>
                يحق لأي عميل طلب حذف أو تعديل أي من بيانات التواصل المسجلة لدينا في أي وقت بمجرد إرسال رسالة نصية أو طلب ذلك عبر الواتساب.
              </p>
              <div className="pt-2 text-xs sm:text-sm text-[#616e6e]">
                لأي استفسار بخصوص سياسة الخصوصية، يسعدنا تواصلكم المباشر على الرقم:{' '}
                <a href={SITE_CONFIG.phoneTel} className="font-bold text-[#192020] hover:text-[#b87600]" dir="ltr">
                  0567407414
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
