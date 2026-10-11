import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  MapPin,
  ArrowLeft,
  ChevronLeft,
  Layers,
  Sparkles,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  SERVICES,
  CITIES,
  SITE_CONFIG,
  getServiceBySlug,
  generateWhatsAppUrl,
} from '@/lib/site-data';
import WhatsAppQuoteForm from '@/components/WhatsAppQuoteForm';
import { ServiceJsonLd, FAQPageJsonLd } from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServicesList = service.relatedServices
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter(Boolean);

  const whatsappMessage = `السلام عليكم، أحتاج عرض سعر ومعاينة لخدمة: ${service.title}`;

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.metaDescription}
        url={`${SITE_CONFIG.siteUrl}/services/${service.slug}`}
        image={`${SITE_CONFIG.siteUrl}${service.image}`}
      />
      <FAQPageJsonLd faqs={service.faqs} />

      <Breadcrumbs
        items={[
          { label: 'الخدمات', href: '/services' },
          { label: service.title },
        ]}
      />

      <article className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7 space-y-4 text-right">
              <div className="inline-flex items-center gap-2 bg-[#f9eedc] text-[#b87600] px-3 py-1 rounded-full text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#f6af24]" />
                <span>خدمة متخصصة • مكة • جدة • الطائف</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
                {service.title}
              </h1>

              {/* Introduction */}
              <p className="text-base text-[#525e5e] leading-relaxed">
                {service.intro}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={generateWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-5 py-3 rounded-lg text-sm transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                  <span>طلب عرض سعر عبر الواتساب</span>
                </a>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#192020] font-bold px-5 py-3 rounded-lg text-sm transition-all shadow-xs active:scale-95"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4" />
                  <span>0567407414</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#e0d9cb] bg-[#eae5dc]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12 text-right">
              {/* Target Audience */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs">
                <h2 className="text-xl font-bold text-[#192020] mb-3">لمن تناسب هذه الخدمة؟</h2>
                <p className="text-sm text-[#556262] leading-relaxed">
                  {service.targetAudience}
                </p>
              </section>

              {/* Scope & Limitations */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#192020] mb-4">الأعمال التي تشملها الخدمة</h2>
                  <ul className="space-y-2.5">
                    {service.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#384242]">
                        <CheckCircle2 className="w-4 h-4 text-[#1b6848] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#f0ebe1]">
                  <h3 className="text-base font-bold text-[#192020] mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#d97706] shrink-0" />
                    <span>حدود الخدمة وتنبيهات مهمة</span>
                  </h3>
                  <ul className="space-y-2">
                    {service.limitations.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#616e6e]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Execution Steps */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs">
                <h2 className="text-xl font-bold text-[#192020] mb-6">خطوات التنفيذ والتجهيز</h2>
                <div className="space-y-4">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-[#faf8f4] border border-[#eee6da]">
                      <div className="w-8 h-8 rounded-full bg-[#f6af24] text-[#192020] font-extrabold flex items-center justify-center text-sm shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-bold text-[#192020]">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-[#5a6666] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Finishes or Options if available */}
              {service.finishes && service.finishes.length > 0 && (
                <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs">
                  <h2 className="text-xl font-bold text-[#192020] mb-4">خيارات التشطيب والأنواع المتاحة</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.finishes.map((finish, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-[#faf8f4] border border-[#ebe2d5] space-y-1">
                        <h3 className="text-sm font-bold text-[#b87600]">{finish.name}</h3>
                        <p className="text-xs text-[#5d6868] leading-relaxed">{finish.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Material and Pricing Factors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Material factors */}
                <section className="bg-white p-6 rounded-xl border border-[#e3dcd1] shadow-xs space-y-3">
                  <h2 className="text-base font-bold text-[#192020]">عوامل اختيار المواد والخامات</h2>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#576464]">
                    {service.materialFactors.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b87600] shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Price factors */}
                <section className="bg-white p-6 rounded-xl border border-[#e3dcd1] shadow-xs space-y-3">
                  <h2 className="text-base font-bold text-[#192020]">العوامل المؤثرة في السعر</h2>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#576464]">
                    {service.priceFactors.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1b6848] shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{fact}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[#7d8a8a] pt-1">
                    * يتم تقديم عرض السعر النهائي بدقة بعد المعاينة الميدانية لموقع العمل وفحص المسطحات.
                  </p>
                </section>
              </div>

              {/* Client Prep Checklist */}
              <section className="bg-[#f5eee3] p-6 sm:p-7 rounded-xl border border-[#e2d8ca] space-y-3">
                <h2 className="text-lg font-bold text-[#192020]">ما الذي يجهزه العميل قبل طلب عرض السعر؟</h2>
                <ul className="space-y-2">
                  {service.clientPrep.map((prep, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#445050]">
                      <CheckCircle2 className="w-4 h-4 text-[#b87600] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{prep}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Service FAQs */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-[#192020] mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#f6af24]" />
                  <span>أسئلة شائعة حول {service.title}</span>
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-[#faf8f4] border border-[#ece4d8] space-y-1.5">
                      <h3 className="text-sm font-bold text-[#192020]">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-[#5a6767] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cities coverage for this service */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs space-y-3">
                <h2 className="text-lg font-bold text-[#192020] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#b87600]" />
                  <span>تغطية خدمة {service.title} في المدن</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#5d6868] leading-relaxed">
                  ننفذ خدمة {service.title} في كافة أحياء المدن المخدومة مع مراعاة الظروف البيئية الخاصة بكل مدينة:
                </p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/areas/${c.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold bg-[#faf7f2] border border-[#dfd7ca] hover:border-[#b87600] hover:text-[#b87600] px-3.5 py-2 rounded-lg transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#f6af24]" />
                      <span>{service.title} في {c.name}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* WhatsApp Quote Builder Widget */}
              <WhatsAppQuoteForm
                defaultService={service.title}
                title={`طلب معاينة ${service.title}`}
                subtitle="حدد مدينتك والتفاصيل وسنقوم بفتح رسالة واتساب جاهزة مباشرة لتأكيد الموعد."
              />

              {/* Direct Call Box */}
              <div className="bg-[#161c1c] text-white p-6 rounded-xl text-center space-y-3 shadow-md">
                <Phone className="w-8 h-8 text-[#f6af24] mx-auto" />
                <h3 className="text-base font-bold">هل تفضل التحدث هاتفيًا مباشرة؟</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  اتصل بنا للاستفسار السريع وترتيب موعد المعاينة في مكة أو جدة أو الطائف.
                </p>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#f6af24] hover:bg-[#d88d12] text-[#192020] font-extrabold py-2.5 rounded-lg text-sm shadow transition-colors"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4" />
                  <span>0567407414</span>
                </a>
              </div>

              {/* Related Services */}
              {relatedServicesList.length > 0 && (
                <div className="bg-white p-6 rounded-xl border border-[#e3dcd1] shadow-xs text-right space-y-3">
                  <h3 className="text-base font-bold text-[#192020] pb-2 border-b border-[#f0ece4]">
                    خدمات ذات صلة
                  </h3>
                  <div className="space-y-2">
                    {relatedServicesList.map((rel) => (
                      rel && (
                        <Link
                          key={rel.slug}
                          href={`/services/${rel.slug}`}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#faf7f2] border border-transparent hover:border-[#dfd8cc] transition-colors text-xs font-semibold text-[#303b3b]"
                        >
                          <span>{rel.title}</span>
                          <ChevronLeft className="w-4 h-4 text-gray-400" />
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
