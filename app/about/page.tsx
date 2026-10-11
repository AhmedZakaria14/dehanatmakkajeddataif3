import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG, CITIES, generateWhatsAppUrl } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'من نحن | دهانات وديكورات في مكة وجدة والطائف',
  description: 'تعرف على خدماتنا المتخصصة في تنفيذ الدهانات الداخلية والخارجية وديكورات الجدران في مكة وجدة والطائف، وأسلوب عملنا القائم على دقة التأسيس والتشطيب.',
  openGraph: {
    title: 'من نحن | دهانات وديكورات في مكة وجدة والطائف',
    description: 'تعرف على خدماتنا المتخصصة في تنفيذ الدهانات الداخلية والخارجية وديكورات الجدران في مكة وجدة والطائف.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'من نحن' }]} />

      <section className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-right space-y-4 mb-12">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              نبذة عن النشاط
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
              دهانات وديكورات في مكة المكرمة وجدة والطائف
            </h1>
            <p className="text-base text-[#566262] leading-relaxed max-w-3xl">
              نعمل في مجال تنفيذ وتشطيب الدهانات الإنشائية والديكورية للمباني السكنية والتجارية، مقدمين حلولاً احترافية تركز على جودة المعجون والتأسيس المتين قبل تطبيق الدهان النهائي.
            </p>
          </div>

          {/* Core Story & Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
            <div className="lg:col-span-7 space-y-4 text-right">
              <h2 className="text-2xl font-bold text-[#192020]">رؤيتنا في تنفيذ أعمال الدهان</h2>
              <p className="text-sm text-[#556161] leading-relaxed">
                نؤمن بأن جودة الدهان الحقيقية لا تقاس فقط بلون الوجه الأخير، بل بحجم العناية والاحترافية التي تحظى بها الجدران في مراحل التأسيس الأولى. فاللياسة تحتاج إلى كشط دقيق، والشقوق تستلزم معجون فايبر مقوى، والأسطح تتطلب طبقات برايمر ومعجون متعامدة وصنفرة مستوية تمامًا.
              </p>
              <p className="text-sm text-[#556161] leading-relaxed">
                سواء كان المشروع شقة جديدة تحتاج إلى تأسيس شامل، أو فيلا يرغب صاحبها في تجديد ألوانها ودمج بديل الخشب والرخام مع الإضاءة، أو واجهة خارجية تتطلب حماية من رطوبة جدة أو شمس مكة أو تقلبات طقس الطائف، فإننا نلتزم بأعلى معايير التنفيذ الحرفي.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-start gap-2 text-sm text-[#242e2e]">
                  <CheckCircle2 className="w-4 h-4 text-[#f6af24] shrink-0 mt-0.5" />
                  <span>استخدام خامات دهانات معتمدة من كبرى الشركات في المملكة مثل جوتن ودهانات الجزيرة.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#242e2e]">
                  <CheckCircle2 className="w-4 h-4 text-[#f6af24] shrink-0 mt-0.5" />
                  <span>تغطية متكاملة للأرضيات والأثاث بالنايلون والأشرطة الواقية أثناء سير العمل.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#242e2e]">
                  <CheckCircle2 className="w-4 h-4 text-[#f6af24] shrink-0 mt-0.5" />
                  <span>معاينة ميدانية وفحص لحالة السطح قبل تقديم التسعير لضمان الشفافية.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#e0d9cd] shadow-md relative aspect-[4/3]">
                <Image
                  src="/assets/2c889b5a2b-custom-img-67-copyright-924x744.jpg"
                  alt="تنفيذ أعمال الدهانات الداخلية وتشطيب الجدران"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Cities Coverage info */}
          <div className="bg-white rounded-xl border border-[#e2dacf] p-6 sm:p-8 mb-14 text-right">
            <h2 className="text-xl font-bold text-[#192020] mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#b87600]" />
              <span>المدن التي نخدمها</span>
            </h2>
            <p className="text-sm text-[#5d6868] leading-relaxed mb-6">
              يغطي نشاطنا ثلاث مدن رئيسية في المنطقة الغربية، مع تلبية متطلبات كل بيئة:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CITIES.map((city) => (
                <div key={city.slug} className="bg-[#faf8f4] p-4 rounded-lg border border-[#ece4d8]">
                  <h3 className="text-base font-bold text-[#192020] mb-1">
                    <Link href={`/areas/${city.slug}`} className="hover:text-[#b87600] transition-colors">
                      دهانات وديكورات في {city.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#596464] leading-relaxed mb-3">
                    خدمات للفلل والعمائر والشقق وتجهيز الأسطح وفق طبيعة المناخ المحلي.
                  </p>
                  <Link
                    href={`/areas/${city.slug}`}
                    className="text-xs font-bold text-[#b87600] hover:underline"
                  >
                    تفاصيل التغطية في {city.shortName} &larr;
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Principles Section */}
          <div className="mb-14 text-right space-y-6">
            <h2 className="text-2xl font-bold text-[#192020]">أسس وقيم العمل لدينا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#e2dad0] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#fbf0dc] text-[#b87600] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#192020] mb-2">الصدق والوضوح الفني</h3>
                <p className="text-xs text-[#5d6969] leading-relaxed">
                  إذا كانت جدرانك تعاني من رطوبة إنشائية نوضح لك ضرورة إصلاح السباكة والعزل أولاً، ولا نعدك بدهان يحل مشكلة تسريب مائي لأن ذلك مخالف للأصول المهنية.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#e2dad0] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#e8f4ed] text-[#1b6848] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#192020] mb-2">النظافة وحماية الموقع</h3>
                <p className="text-xs text-[#5d6969] leading-relaxed">
                  نحترم خصوصية منزلك وممتلكاتك؛ نقوم بتغطية وتغليف كافة المفروشات والأرضيات والنوافذ، ونسلم الموقع نظيفًا بعد الانتهاء التام من الدهان.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#e2dad0] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#fbf0dc] text-[#b87600] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#192020] mb-2">الالتزام بالمواعيد</h3>
                <p className="text-xs text-[#5d6969] leading-relaxed">
                  نحدد جدولاً زمنيًا واضحًا لمراحل المعجون والجفاف وطلاء الأوجه النهائية ونلتزم بتسليم العمل في الوقت المتفق عليه دون تأخير.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#161c1c] text-white p-8 rounded-2xl text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">هل ترغب في مناقشة تفاصيل دهانات منزلك؟</h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              تواصل معنا مباشرة لتحديد موعد للمعاينة الميدانية في مكة المكرمة أو جدة أو الطائف.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={generateWhatsAppUrl('السلام عليكم، أود التنسيق للمعاينة ومناقشة أعمال الدهانات.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-5 py-3 rounded-lg text-sm shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                <span>مراسلة واتساب</span>
              </a>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#161c1c] font-bold px-5 py-3 rounded-lg text-sm shadow transition-colors"
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
