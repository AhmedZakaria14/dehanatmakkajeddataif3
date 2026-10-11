'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle, MapPin, Building, Paintbrush, Sparkles } from 'lucide-react';
import { SITE_CONFIG, SERVICES, CITIES } from '@/lib/site-data';

interface WhatsAppQuoteFormProps {
  defaultCity?: string;
  defaultService?: string;
  title?: string;
  subtitle?: string;
}

const PROPERTY_TYPES = [
  'شقة سكنية كاملة',
  'فيلا سكنية',
  'واجهة عمارة أو سور',
  'مجلس / غرفة واحدة',
  'مكتب أو مساحة تجارية',
];

const PRESET_ROOMS = [
  'غرفة أو صالون واحد',
  'شقة 3 غرف',
  'شقة 4 إلى 5 غرف',
  'دور كامل أو روف',
  'فيلا كاملة',
];

export default function WhatsAppQuoteForm({
  defaultCity = '',
  defaultService = '',
  title = 'طلب معاينة وتسعير فوري',
  subtitle = 'حدد تفاصيل طلبك بنقرة واحدة لتجهيز رسالة واتساب مباشرة وإرسالها للتنسيق الميداني فورًا.',
}: WhatsAppQuoteFormProps) {
  const [city, setCity] = useState(defaultCity || 'مكة المكرمة');
  const [service, setService] = useState(defaultService || SERVICES[0].title);
  const [propertyType, setPropertyType] = useState('شقة سكنية كاملة');
  const [sizeScale, setSizeScale] = useState('شقة 4 إلى 5 غرف');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `السلام عليكم ورحمة الله وبركاته،\nأحتاج عرض سعر ومعاينة لخدمة: *${service}*\n`;
    text += `📍 *المدينة:* ${city}\n`;
    text += `🏠 *نوع العقار:* ${propertyType}\n`;
    text += `📐 *حجم المساحة التقريبي:* ${sizeScale}\n`;
    if (details.trim()) {
      text += `📝 *ملاحظات إضافية:* ${details.trim()}\n`;
    }
    text += `\nأرجو إفادتي بالموعد المتاح للمعاينة والتسعير. شكرًا لكم.`;

    const encoded = encodeURIComponent(text);
    const url = `${SITE_CONFIG.whatsappBase}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="whatsapp-quote-section"
      className="bg-white border border-[#e2dcd2] rounded-2xl p-4 sm:p-7 shadow-sm transition-all text-right"
    >
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b87600] bg-[#fbf3e4] px-3 py-1 rounded-full mb-2">
          <MessageCircle className="w-3.5 h-3.5 text-[#1b6848]" />
          <span>تجهيز رسالة واتساب مباشرة</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#192020] mb-1.5">{title}</h3>
        <p className="text-xs sm:text-sm text-[#5a6666] leading-relaxed">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* City Selection Chips */}
        <div>
          <label className="block text-xs font-bold text-[#273232] mb-1.5">
            المدينة المستهدفة <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {CITIES.map((c) => {
              const isSelected = city === c.name;
              return (
                <button
                  type="button"
                  key={c.slug}
                  onClick={() => setCity(c.name)}
                  className={`flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold border transition-all min-h-[44px] cursor-pointer ${
                    isSelected
                      ? 'bg-[#161c1c] text-[#f6af24] border-[#161c1c] shadow-sm'
                      : 'bg-[#faf8f5] text-[#334040] border-[#d8d2c6] hover:bg-white hover:border-[#b87600]'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#f6af24]' : 'text-gray-400'}`} />
                  <span>{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Selection Dropdown & Quick Badges */}
        <div>
          <label className="block text-xs font-bold text-[#273232] mb-1.5">
            الخدمة المطلوبة <span className="text-red-500">*</span>
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-[#faf8f5] border border-[#d6cfc2] rounded-xl px-3.5 py-3 text-sm text-[#192020] focus:outline-none focus:ring-2 focus:ring-[#f6af24] focus:bg-white transition-all font-medium"
            required
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Grid / Chips */}
        <div>
          <label className="block text-xs font-bold text-[#273232] mb-1.5">
            نوع العقار
          </label>
          <div className="flex flex-wrap gap-1.5">
            {PROPERTY_TYPES.map((pt) => {
              const isSelected = propertyType === pt;
              return (
                <button
                  type="button"
                  key={pt}
                  onClick={() => setPropertyType(pt)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer min-h-[36px] ${
                    isSelected
                      ? 'bg-[#b87600] text-white border-[#b87600] shadow-xs'
                      : 'bg-[#faf8f5] text-[#4d5959] border-[#ded7ca] hover:bg-white'
                  }`}
                >
                  {pt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Approximate Size / Room Count */}
        <div>
          <label className="block text-xs font-bold text-[#273232] mb-1.5">
            حجم المساحة التقريبي
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {PRESET_ROOMS.map((room) => {
              const isSelected = sizeScale === room;
              return (
                <button
                  type="button"
                  key={room}
                  onClick={() => setSizeScale(room)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer min-h-[36px] ${
                    isSelected
                      ? 'bg-[#1b6848] text-white border-[#1b6848] font-bold shadow-xs'
                      : 'bg-[#faf8f5] text-[#4d5959] border-[#ded7ca] hover:bg-white'
                  }`}
                >
                  {room}
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-xs font-bold text-[#273232] mb-1.5">
            ملاحظات إضافية مختصرة (اختياري)
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={2}
            placeholder="مثال: جدران قديمة بحاجة لمعجون وصنفرة، أو تركيب جدار شاشة بديل خشب..."
            className="w-full bg-[#faf8f5] border border-[#d6cfc2] rounded-xl p-3 text-xs sm:text-sm text-[#192020] placeholder:text-[#9ba4a4] focus:outline-none focus:ring-2 focus:ring-[#f6af24] focus:bg-white transition-all resize-none"
          ></textarea>
        </div>

        {/* WhatsApp Preview Pill */}
        <div className="bg-[#f2f8f4] border border-[#cbe6d4] p-3 rounded-xl text-right">
          <div className="text-[11px] font-bold text-[#1b6848] flex items-center gap-1 mb-1">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>معاينة نص الرسالة قبل الإرسال:</span>
          </div>
          <p className="text-[11px] text-[#2c4e3e] leading-relaxed line-clamp-2">
            طلب معاينة لخدمة {service} في {city} ({propertyType} - {sizeScale})
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            id="whatsapp-form-submit-btn"
            className="w-full flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#145339] active:bg-[#0f3e2a] text-white font-bold py-3.5 px-6 rounded-xl text-sm sm:text-base transition-all shadow-md active:scale-98 min-h-[48px] cursor-pointer"
          >
            <Send className="w-4 h-4 rotate-180 text-[#4ade80]" />
            <span>إرسال الطلب والتواصل عبر واتساب فورًا</span>
          </button>
          <p className="text-center text-[11px] text-[#6b7777] mt-2 flex items-center justify-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-[#1b6848] shrink-0" />
            <span>يفتح تطبيق واتساب لديك مباشرة دون حفظ أرقام أو تسجيل حساب</span>
          </p>
        </div>
      </form>
    </div>
  );
}
