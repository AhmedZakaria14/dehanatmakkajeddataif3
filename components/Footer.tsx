import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, CheckCircle2, Code2, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, SERVICES, CITIES } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-[#121717] text-white pt-14 pb-24 md:pb-12 border-t border-[#263131]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#232d2d]">
          {/* Col 1: About & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl p-0.5 bg-gradient-to-br from-[#f6af24] via-[#d4af37] to-[#121616] shadow-md flex items-center justify-center shrink-0">
                <Image
                  src="/logo-icon.svg"
                  alt={`شعار ${SITE_CONFIG.name}`}
                  width={48}
                  height={48}
                  className="w-full h-full rounded-[10px] bg-[#121717] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                  دهانات وديكورات
                </span>
                <span className="text-xs sm:text-sm text-[#f6af24] font-medium mt-0.5">
                  في مكة المكرمة وجدة والطائف
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              تنفيذ احترافي لأعمال الدهانات الداخلية والخارجية والواجهات، تجهيز الجدران والمعجون، دهانات الفلل والشقق، تركيب ورق الجدران، وبديل الخشب وبديل الرخام بمستوى تشطيب دقيق ومتقن.
            </p>
            <div className="pt-2 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f6af24] shrink-0" />
                <span>المدن المخدومة: <strong>مكة المكرمة • جدة • الطائف</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f6af24] shrink-0" />
                <span>الاتصال المباشر: <a href={SITE_CONFIG.phoneTel} className="text-white hover:text-[#f6af24] font-bold" dir="ltr">0567407414</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#4ade80] shrink-0" />
                <span>الواتساب: <a href={SITE_CONFIG.whatsappBase} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ade80]">0567407414</a></span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f6af24] rounded-sm inline-block"></span>
              خدمات الدهان والديكور
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-[#f6af24] transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cities & Inspiration */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f6af24] rounded-sm inline-block"></span>
              مناطق التغطية
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/areas/${city.slug}`}
                    className="text-gray-300 hover:text-[#f6af24] transition-colors inline-block"
                  >
                    دهانات وديكورات في {city.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f6af24] rounded-sm inline-block"></span>
              روابط تهمك
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/inspiration" className="text-gray-300 hover:text-[#f6af24] transition-colors">
                  أفكار وتنسيق الألوان والديكور
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#f6af24] transition-colors">
                  المدونة والمقالات التثقيفية
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#f6af24] transition-colors">
                  الأسئلة الشائعة قبل التعاقد
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Contact & Working Process */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f6af24] rounded-sm inline-block"></span>
              طلب عرض سعر ومعاينة
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              يسعدنا استقبال استفسارك وتحديد موعد للمعاينة الميدانية في مكة المكرمة أو جدة أو الطائف لتحديد نطاق العمل والمسطحات والخامات المطلوبة بدقة.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={SITE_CONFIG.whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-4 py-2.5 rounded-md text-sm transition-colors text-center shadow"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                <span>مراسلة واتساب فورية</span>
              </a>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#121717] font-bold px-4 py-2.5 rounded-md text-sm transition-colors text-center shadow"
                dir="ltr"
              >
                <Phone className="w-4 h-4" />
                <span>0567407414</span>
              </a>
            </div>

            <div className="text-xs text-gray-400 pt-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#f6af24] shrink-0" />
              <span>معاينة ميدانية وتحديد المسطحات والخامات بدقة</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#202a2a] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center md:text-right">
            جميع الحقوق محفوظة © {new Date().getFullYear()} — <strong className="text-gray-300">{SITE_CONFIG.name}</strong>
          </div>

          {/* Designed and Developed by NasharHub */}
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="text-gray-400">تم التصميم والبرمجة بواسطة</span>
            <a
              id="footer-credit-nasharhub"
              href="https://nasharhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182121] hover:bg-[#222e2e] border border-[#2d3a3a] hover:border-[#f6af24]/70 text-white hover:text-[#f6af24] font-semibold transition-all duration-200 group shadow-xs active:scale-95"
              title="زيارة موقع NasharHub لتصميم وبرمجة المواقع"
            >
              <Code2 className="w-3.5 h-3.5 text-[#f6af24] group-hover:rotate-12 transition-transform duration-200" />
              <span className="font-bold tracking-wide">NasharHub</span>
              <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#f6af24] opacity-70 group-hover:opacity-100 transition-all" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-3.5 text-xs">
            <Link href="/about" className="hover:text-white transition-colors">من نحن</Link>
            <span className="text-gray-600">•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">تواصل معنا</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
