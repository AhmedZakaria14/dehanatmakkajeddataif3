import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-16 px-4 sm:px-6 bg-[#faf7f2] text-right">
      <div className="max-w-xl w-full bg-white border border-[#e3dcd1] rounded-2xl p-8 sm:p-10 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#fdf2e2] text-[#b87600] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[#b87600] uppercase tracking-wider">خطأ 404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#192020]">
            الصفحة المطلوبة غير موجودة
          </h1>
          <p className="text-sm text-[#5a6767] leading-relaxed">
            يبدو أن الرابط الذي حاولت الوصول إليه قد تم تعديله أو لم يعد متاحًا. يمكنك العودة للصفحة الرئيسية أو تصفح خدماتنا في مكة وجدة والطائف.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#161c1c] font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 bg-[#f4eee4] hover:bg-[#eae3d5] text-[#192020] font-bold px-5 py-2.5 rounded-lg text-sm transition-colors border border-[#ded5c7]"
          >
            <span>دليل الخدمات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-[#f0ece4] text-xs text-gray-500 space-y-2">
          <p>لطلب معاينة أو استفسار فوري عبر الهاتف أو الواتساب:</p>
          <div className="flex justify-center items-center gap-4 text-sm font-bold">
            <a href={SITE_CONFIG.phoneTel} className="text-[#192020] hover:text-[#b87600]" dir="ltr">
              0567407414
            </a>
            <span>•</span>
            <a href={SITE_CONFIG.whatsappBase} target="_blank" rel="noopener noreferrer" className="text-[#1b6848] hover:underline">
              واتساب مباشر
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
