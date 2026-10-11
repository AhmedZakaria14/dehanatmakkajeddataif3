'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calculator, ChevronUp, Sparkles } from 'lucide-react';
import { SITE_CONFIG, generateWhatsAppUrl } from '@/lib/site-data';

export default function FloatingContact() {
  const [scrolled, setScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuote = () => {
    const quoteElement = document.getElementById('whatsapp-quote-section') || document.querySelector('form');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div
      className="fixed bottom-0 inset-x-0 sm:bottom-5 sm:right-5 sm:left-auto z-40 pointer-events-none transition-all duration-300"
      aria-label="شريط التواصل السريع وطلب المعاينة"
    >
      <div className="max-w-md mx-auto sm:max-w-none px-3 sm:px-0 pb-safe sm:pb-0 pointer-events-auto">
        <div className="bg-[#141a1a]/95 backdrop-blur-xl border-t sm:border border-[#2d3a3a] sm:rounded-2xl p-2 sm:p-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.35)] sm:shadow-2xl flex flex-col gap-1.5">
          
          {/* Micro Status Banner */}
          {showNotification && (
            <div className="flex items-center justify-between text-[11px] text-[#b4bebe] px-2 py-0.5 border-b border-[#242f2f]/60 pb-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] inline-block animate-pulse shrink-0"></span>
                <span className="text-gray-200 font-medium">متاح للمعاينة والتسعير اليوم:</span>
                <span className="text-[#f6af24] font-bold">مكة • جدة • الطائف</span>
              </div>
              <button
                type="button"
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-white text-[10px] px-1 py-0.5"
                title="إخفاء التنبيه"
                aria-label="إخفاء التنبيه"
              >
                ✕
              </button>
            </div>
          )}

          {/* Action Buttons Row */}
          <div className="flex items-center gap-2">
            {/* Direct Call Button */}
            <a
              id="mobile-bar-btn-call"
              href={SITE_CONFIG.phoneTel}
              className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#f6af24] hover:bg-[#e09815] active:bg-[#c9830c] text-[#121616] font-extrabold px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-transform active:scale-95 shadow-md min-h-[46px] select-none"
              dir="ltr"
              title="اتصال هاتفي مباشر"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span className="tracking-wide">0567407414</span>
            </a>

            {/* Instant WhatsApp Button */}
            <a
              id="mobile-bar-btn-whatsapp"
              href={generateWhatsAppUrl('السلام عليكم، أحتاج استفسارًا وعرض سعر لخدمات الدهانات والديكور.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#1b6848] hover:bg-[#155339] active:bg-[#0f3d2a] text-white font-bold px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-transform active:scale-95 shadow-md min-h-[46px] select-none"
              title="مراسلة عبر واتساب"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#4ade80] shrink-0" />
              <span>واتساب فوري</span>
            </a>

            {/* Quick Quote / Estimate Button */}
            <button
              type="button"
              id="mobile-bar-btn-quote"
              onClick={scrollToQuote}
              className="hidden xs:inline-flex sm:inline-flex items-center justify-center gap-1.5 bg-[#202929] hover:bg-[#2c3838] active:bg-[#1a2222] text-[#f6af24] border border-[#354343] font-bold px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-transform active:scale-95 shadow-sm min-h-[46px] select-none"
              title="طلب عرض سعر وحساب التكلفة"
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline">احسب التكلفة</span>
              <span className="md:hidden">معاينة</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
