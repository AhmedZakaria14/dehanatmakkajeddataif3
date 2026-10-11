'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  defaultOpenIndex?: number;
  className?: string;
}

export default function FaqAccordion({
  faqs,
  defaultOpenIndex = 0,
  className = '',
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([defaultOpenIndex]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={`space-y-3 text-right ${className}`} role="region" aria-label="الأسئلة الشائعة">
      {faqs.map((faq, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#f6af24] shadow-sm ring-1 ring-[#f6af24]/30'
                : 'bg-white/80 hover:bg-white border-[#e3dcd0] hover:border-[#d0c5b4]'
            }`}
          >
            <button
              type="button"
              id={`faq-toggle-${idx}`}
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-right font-bold text-sm sm:text-base text-[#192020] min-h-[52px] cursor-pointer gap-3 select-none"
              aria-expanded={isOpen}
              aria-controls={`faq-content-${idx}`}
            >
              <div className="flex items-start gap-2.5 sm:gap-3 flex-1">
                <span className="w-6 h-6 rounded-full bg-[#fbf3e4] text-[#b87600] flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                  {idx + 1}
                </span>
                <span className="leading-snug text-[#192020] hover:text-[#b87600] transition-colors">
                  {faq.question}
                </span>
              </div>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-[#fbf3e4] text-[#b87600]' : 'bg-[#f4efe8] text-gray-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-content-${idx}`}
                className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#4d5a5a] leading-relaxed border-t border-[#f2ede4] bg-[#fdfcf9]"
              >
                <div className="pr-8 sm:pr-9 space-y-2">
                  <p>{faq.answer}</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#1b6848] font-semibold pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>متاح مناقشة كافة التفاصيل الميدانية أثناء المعاينة.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
