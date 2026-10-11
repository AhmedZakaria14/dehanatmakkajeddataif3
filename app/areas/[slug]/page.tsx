import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  Sun,
  Droplets,
  CloudRain,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  CITIES,
  SERVICES,
  SITE_CONFIG,
  getCityBySlug,
  getServiceBySlug,
  generateWhatsAppUrl,
} from '@/lib/site-data';
import WhatsAppQuoteForm from '@/components/WhatsAppQuoteForm';
import { FAQPageJsonLd } from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

function renderCityWeatherIcon(slug: string) {
  if (slug === 'makkah') return <Sun className="w-5 h-5 text-[#f6af24]" />;
  if (slug === 'jeddah') return <Droplets className="w-5 h-5 text-[#38bdf8]" />;
  return <CloudRain className="w-5 h-5 text-[#818cf8]" />;
}

export default async function CityDetailPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const whatsappMessage = `السلام عليكم، أحتاج استفسارًا وعرض سعر لخدمات الدهانات والديكور في ${city.name}`;

  const relevantServices = city.relevantServiceSlugs
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter(Boolean);

  return (
    <>
      <FAQPageJsonLd faqs={city.faqs} />

      <Breadcrumbs
        items={[
          { label: 'مناطق الخدمة', href: '/areas' },
          { label: `دهانات في ${city.name}` },
        ]}
      />

      <article className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Hero Header */}
          <div className="bg-white rounded-2xl border border-[#e5dfd4] overflow-hidden shadow-sm mb-12 text-right">
            {city.image && (
              <div className="relative aspect-[21/9] sm:aspect-[24/8] w-full bg-[#161c1c] overflow-hidden">
                <Image
                  src={city.image}
                  alt={city.imageAlt || city.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161c1ce6] via-[#161c1c66] to-transparent"></div>
                <div className="absolute bottom-4 right-6 text-white">
                  <span className="text-xs font-bold text-[#f6af24] bg-[#222b2b] px-3 py-1 rounded-full border border-[#3c4a4a]">
                    نطاق العمل الميداني
                  </span>
                  <p className="text-xl sm:text-2xl font-extrabold mt-1 text-white">
                    {city.name}
                  </p>
                </div>
              </div>
            )}

            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 bg-[#fdf5e7] text-[#b87600] px-3.5 py-1.5 rounded-full text-xs font-bold">
                  <MapPin className="w-4 h-4 text-[#f6af24]" />
                  <span>تغطية معتمدة لكافة أحياء {city.name}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                  {renderCityWeatherIcon(city.slug)}
                  <span>طبيعة المناخ: {city.climateFocus}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] mb-4 leading-tight">
                دهانات وديكورات في {city.name}
              </h1>

              <p className="text-base text-[#566262] leading-relaxed max-w-4xl mb-6">
                {city.intro}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={generateWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-6 py-3 rounded-lg text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                  <span>طلب معاينة في {city.shortName} عبر واتساب</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#192020] font-bold px-5 py-3 rounded-lg text-sm shadow-xs transition-all active:scale-95"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4" />
                  <span>0567407414</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12 text-right">
              {/* Climate and Nature of Request */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-[#192020] flex items-center gap-2">
                  {renderCityWeatherIcon(city.slug)}
                  <span>طبيعة أعمال الدهانات والمناخ في {city.name}</span>
                </h2>
                <p className="text-sm text-[#576464] leading-relaxed">
                  {city.demandNature}
                </p>
              </section>

              {/* Climate-based Paint Advice */}
              <section className="bg-[#f8f3ec] p-6 sm:p-7 rounded-xl border border-[#e4dcce] space-y-4">
                <h2 className="text-xl font-bold text-[#192020] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#b87600]" />
                  <span>نصائح لاختيار الدهانات المناسبة لمناخ {city.name}</span>
                </h2>
                <div className="space-y-3">
                  {city.climateTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#eee6da]">
                      <span className="w-6 h-6 rounded-full bg-[#f6af24] text-[#192020] font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#475454] leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Districts Covered */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#192020] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#b87600]" />
                    <span>أحياء نخدمها في {city.name}</span>
                  </h2>
                  <span className="text-xs text-gray-500">وكافة الأحياء المجاورة</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5a6767] leading-relaxed">
                  نغطي بمشيئة الله مختلف المخططات والأحياء السكنية والعمائر والفلل داخل {city.name}، ومنها:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {city.districts.map((district, idx) => (
                    <span
                      key={idx}
                      className="bg-[#faf7f2] border border-[#e0d8cb] text-[#293333] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium"
                    >
                      حي {district}
                    </span>
                  ))}
                </div>
              </section>

              {/* Top Requested Services */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-[#192020]">
                  الخدمات الأكثر طلبًا في {city.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {city.topServices.map((serviceName, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#faf8f5] border border-[#eee6da]">
                      <CheckCircle2 className="w-4 h-4 text-[#1b6848] shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#2d3737]">{serviceName}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Relevant Services with Cards */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-[#192020]">
                  خدمات دهانات وديكورات مقترحة في {city.shortName}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relevantServices.map((rel) => (
                    rel && (
                      <div
                        key={rel.slug}
                        className="p-4 rounded-xl bg-[#faf8f4] border border-[#eee6db] flex flex-col justify-between space-y-2 hover:border-[#b87600] transition-colors"
                      >
                        <h3 className="text-sm font-bold text-[#192020]">{rel.title}</h3>
                        <p className="text-xs text-[#5f6c6c] leading-relaxed line-clamp-2">{rel.shortDesc}</p>
                        <div className="pt-2 flex items-center justify-between text-xs">
                          <Link
                            href={`/services/${rel.slug}`}
                            className="inline-flex items-center gap-1 text-[#b87600] font-bold hover:underline"
                          >
                            <span>تفاصيل الخدمة</span>
                            <ArrowLeft className="w-3 h-3" />
                          </Link>
                          <a
                            href={generateWhatsAppUrl(`السلام عليكم، أحتاج خدمة ${rel.title} في ${city.name}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1b6848] font-bold hover:underline"
                          >
                            واتساب
                          </a>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </section>

              {/* City Specific FAQs */}
              <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#e3dcd1] shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-[#192020] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#f6af24]" />
                  <span>أسئلة شائعة حول خدمات الدهانات في {city.name}</span>
                </h2>
                <div className="space-y-3">
                  {city.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-[#faf8f4] border border-[#ece4d8] space-y-1.5">
                      <h3 className="text-sm font-bold text-[#192020]">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-[#5a6767] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* WhatsApp Quote Builder prefilled */}
              <WhatsAppQuoteForm
                defaultCity={city.name}
                title={`طلب معاينة في ${city.name}`}
                subtitle={`حدد تفاصيل طلبك في ${city.shortName} وسيتم فتح رسالة واتساب جاهزة مباشرة للتنسيق.`}
              />

              {/* Direct Phone box */}
              <div className="bg-[#161c1c] text-white p-6 rounded-xl text-center space-y-3 shadow-md">
                <Phone className="w-8 h-8 text-[#f6af24] mx-auto" />
                <h3 className="text-base font-bold">اتصال مباشر لمعاينة {city.shortName}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  فريقنا جاهز لتحديد موعد المعاينة وتفقد موقع العمل في أي من أحياء {city.name}.
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

              {/* Other cities */}
              <div className="bg-white p-6 rounded-xl border border-[#e3dcd1] shadow-xs text-right space-y-3">
                <h3 className="text-base font-bold text-[#192020] pb-2 border-b border-[#f0ece4]">
                  مدن أخرى نخدمها
                </h3>
                <div className="space-y-2">
                  {CITIES.filter((c) => c.slug !== city.slug).map((otherCity) => (
                    <Link
                      key={otherCity.slug}
                      href={`/areas/${otherCity.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-[#faf7f2] border border-[#eee7dc] transition-colors text-xs font-bold text-[#303b3b]"
                    >
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#f6af24]" />
                        <span>دهانات في {otherCity.name}</span>
                      </span>
                      <ArrowLeft className="w-3.5 h-3.5 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
