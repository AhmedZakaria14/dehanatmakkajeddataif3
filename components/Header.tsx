'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  MapPin,
  Paintbrush,
  Sparkles,
  BookOpen,
  HelpCircle,
  Info,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { SITE_CONFIG, SERVICES, CITIES, generateWhatsAppUrl } from '@/lib/site-data';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  // Mobile accordion states inside drawer
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileAreasExpanded, setMobileAreasExpanded] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Reset mobile menu when route changes using standard React recommended render adjustment
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#161c1c] text-white border-b border-[#2a3434] shadow-md">
      {/* Top micro bar with contact and coverage info */}
      <div className="bg-[#101414] text-[#a6b2b2] text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-[#202727]">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Coverage Cities indicator */}
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#f6af24] inline-block animate-pulse shrink-0"></span>
            <span className="truncate">
              معاينة وتنفيذ في: <strong className="text-white font-medium">مكة • جدة • الطائف</strong>
            </span>
          </div>

          {/* Quick Contact Micro Links */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              id="topbar-tel-link"
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-1 text-white hover:text-[#f6af24] transition-colors py-0.5"
              dir="ltr"
              title="اتصال هاتفي"
            >
              <Phone className="w-3.5 h-3.5 text-[#f6af24]" />
              <span className="font-semibold tracking-wider">0567407414</span>
            </a>
            <span className="text-[#323d3d] hidden xs:inline">|</span>
            <a
              id="topbar-whatsapp-link"
              href={generateWhatsAppUrl('السلام عليكم، أحتاج استفسارًا عن خدمات الدهانات.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:inline-flex items-center gap-1 text-[#4ade80] hover:text-[#86efac] transition-colors"
              title="مراسلة واتساب"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>واتساب فوري</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#f6af24] rounded-lg p-1 -m-1"
          title={SITE_CONFIG.name}
        >
          {/* Brand Logo Image */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-0.5 bg-gradient-to-br from-[#f6af24] via-[#d4af37] to-[#121616] shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/logo-icon.svg"
              alt={`شعار ${SITE_CONFIG.name}`}
              width={44}
              height={44}
              priority
              className="w-full h-full rounded-[10px] bg-[#121717] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col text-right">
            <span className="text-base sm:text-xl font-extrabold tracking-tight text-white group-hover:text-[#f6af24] transition-colors leading-tight">
              دهانات وديكورات
            </span>
            <span className="text-[11px] sm:text-xs text-[#d4af37] font-medium leading-none mt-0.5">
              مكة المكرمة • جدة • الطائف
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium" aria-label="القائمة الرئيسية">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/') && pathname === '/'
                ? 'bg-[#222a2a] text-[#f6af24] font-bold'
                : 'text-gray-200 hover:text-white hover:bg-[#1f2727]'
            }`}
          >
            الرئيسية
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/about')
                ? 'bg-[#222a2a] text-[#f6af24] font-bold'
                : 'text-gray-200 hover:text-white hover:bg-[#1f2727]'
            }`}
          >
            من نحن
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/services')
                  ? 'bg-[#222a2a] text-[#f6af24] font-bold'
                  : 'text-gray-200 hover:text-white hover:bg-[#1f2727]'
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>الخدمات</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            <div
              className={`absolute top-full right-0 w-64 bg-[#1a2121] border border-[#2b3535] rounded-lg shadow-xl py-2 transition-all duration-150 z-50 ${
                servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="px-3 py-1.5 text-xs text-[#a0adad] border-b border-[#2b3535] font-semibold">
                جميع خدمات الدهان والديكور
              </div>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block px-3 py-2 text-sm text-gray-200 hover:text-[#f6af24] hover:bg-[#222b2b] transition-colors"
                >
                  {s.navTitle}
                </Link>
              ))}
              <div className="pt-1 mt-1 border-t border-[#2b3535]">
                <Link
                  href="/services"
                  className="block px-3 py-1.5 text-xs text-[#f6af24] hover:underline font-bold"
                >
                  عرض دليل الخدمات كاملاً &larr;
                </Link>
              </div>
            </div>
          </div>

          {/* Cities Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAreasDropdownOpen(true)}
            onMouseLeave={() => setAreasDropdownOpen(false)}
          >
            <Link
              href="/areas"
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/areas')
                  ? 'bg-[#222a2a] text-[#f6af24] font-bold'
                  : 'text-gray-200 hover:text-white hover:bg-[#1f2727]'
              }`}
              aria-expanded={areasDropdownOpen}
            >
              <span>مناطق الخدمة</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            <div
              className={`absolute top-full right-0 w-56 bg-[#1a2121] border border-[#2b3535] rounded-lg shadow-xl py-2 transition-all duration-150 z-50 ${
                areasDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="px-3 py-1.5 text-xs text-[#a0adad] border-b border-[#2b3535] font-semibold">
                المدن المخدومة
              </div>
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="block px-3 py-2 text-sm text-gray-200 hover:text-[#f6af24] hover:bg-[#222b2b] transition-colors"
                >
                  دهانات وديكورات في {c.name}
                </Link>
              ))}
              <div className="pt-1 mt-1 border-t border-[#2b3535]">
                <Link
                  href="/areas"
                  className="block px-3 py-1.5 text-xs text-[#f6af24] hover:underline font-bold"
                >
                  نظرة عامة على تغطية المدن &larr;
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/inspiration"
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/inspiration')
                ? 'bg-[#222a2a] text-[#f6af24] font-bold'
                : 'text-gray-200 hover:text-white hover:bg-[#1f2727]'
            }`}
          >
            أفكار وديكور
          </Link>

          <Link
            href="/blog"
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/blog')
                ? 'bg-[#222a2a] text-[#f6af24] font-bold'
                : 'text-gray-200 hover:text-white hover:bg-[#1f2727]'
            }`}
          >
            المدونة
          </Link>

          <Link
            href="/faq"
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/faq')
                ? 'bg-[#222a2a] text-[#f6af24] font-bold'
                : 'text-gray-200 hover:text-white hover:bg-[#1f2727]'
            }`}
          >
            الأسئلة الشائعة
          </Link>

          <Link
            href="/contact"
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/contact')
                ? 'bg-[#222a2a] text-[#f6af24] font-bold'
                : 'text-gray-200 hover:text-white hover:bg-[#1f2727]'
            }`}
          >
            تواصل معنا
          </Link>
        </nav>

        {/* CTA Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            id="desktop-header-call-btn"
            href={SITE_CONFIG.phoneTel}
            className="inline-flex items-center justify-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#161c1c] font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-sm active:scale-95 min-h-[40px]"
            dir="ltr"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>0567407414</span>
          </a>
          <a
            id="desktop-header-whatsapp-btn"
            href={generateWhatsAppUrl('السلام عليكم، أحتاج استفسارًا وعرض سعر لخدمات الدهانات والديكور.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#1f2727] hover:bg-[#283232] text-white border border-[#354242] font-semibold px-3.5 py-2 rounded-lg text-sm transition-all min-h-[40px]"
          >
            <MessageCircle className="w-4 h-4 text-[#4ade80]" />
            <span>واتساب</span>
          </a>
        </div>

        {/* Mobile menu hamburger toggle button (min 44px touch target) */}
        <button
          type="button"
          id="btn-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-gray-200 hover:text-white hover:bg-[#222a2a] focus:outline-none focus:ring-2 focus:ring-[#f6af24] border border-[#2b3636] transition-colors cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label="فتح القائمة الرئيسية"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Modern Mobile Navigation Drawer with Backdrop */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm lg:hidden flex justify-end transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="w-[85%] max-w-sm h-full bg-[#141a1a] border-r border-[#2d3a3a] text-white flex flex-col shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top Header */}
            <div className="p-4 border-b border-[#242f2f] flex items-center justify-between bg-[#101414] sticky top-0 z-10">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-lg p-0.5 bg-gradient-to-br from-[#f6af24] to-[#121616] flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-icon.svg"
                    alt={`شعار ${SITE_CONFIG.name}`}
                    width={32}
                    height={32}
                    className="w-full h-full rounded-[6px] bg-[#121717] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-sm font-bold text-white leading-tight">دهانات وديكورات</span>
                  <span className="text-[10px] text-[#f6af24]">مكة • جدة • الطائف</span>
                </div>
              </div>

              {/* Close Drawer Button */}
              <button
                type="button"
                id="btn-close-mobile-drawer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-[#1c2424] hover:bg-[#253030] text-gray-300 hover:text-white flex items-center justify-center border border-[#303d3d] transition-colors cursor-pointer"
                aria-label="إغلاق القائمة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick City Navigation Badges */}
            <div className="p-3.5 bg-[#192222] border-b border-[#242f2f]">
              <div className="text-[11px] text-[#9ba8a8] font-semibold mb-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#f6af24]" />
                <span>اختر مدينتك للمعاينة المباشرة:</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/areas/${c.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center py-2 px-1 bg-[#141a1a] hover:bg-[#f6af24] hover:text-[#121616] text-xs font-bold rounded-lg border border-[#2a3636] transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links Body */}
            <nav className="p-4 space-y-1.5 flex-1 text-sm font-medium" aria-label="قائمة الهاتف">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors min-h-[44px] ${
                  isActive('/') && pathname === '/'
                    ? 'bg-[#222c2c] text-[#f6af24] font-bold border border-[#354545]'
                    : 'text-gray-200 hover:bg-[#1e2626] hover:text-white'
                }`}
              >
                <span>الرئيسية</span>
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </Link>

              {/* Collapsible Services Section */}
              <div className="border border-[#263333] rounded-xl overflow-hidden bg-[#182020]">
                <button
                  type="button"
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="w-full flex items-center justify-between px-3 py-3 text-right text-gray-200 hover:text-[#f6af24] transition-colors min-h-[44px]"
                  aria-expanded={mobileServicesExpanded}
                >
                  <div className="flex items-center gap-2">
                    <Paintbrush className="w-4 h-4 text-[#f6af24]" />
                    <span className="font-bold">خدمات الدهان والديكور</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileServicesExpanded ? 'rotate-180 text-[#f6af24]' : ''
                    }`}
                  />
                </button>

                {mobileServicesExpanded && (
                  <div className="bg-[#121717] px-2 py-2 space-y-1 border-t border-[#243030]">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-gray-300 hover:text-[#f6af24] hover:bg-[#1b2323] rounded-lg transition-colors"
                      >
                        • {s.navTitle}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#f6af24] font-bold hover:underline"
                    >
                      استعراض دليل الخدمات كاملاً &larr;
                    </Link>
                  </div>
                )}
              </div>

              {/* Collapsible Coverage Areas Section */}
              <div className="border border-[#263333] rounded-xl overflow-hidden bg-[#182020]">
                <button
                  type="button"
                  onClick={() => setMobileAreasExpanded(!mobileAreasExpanded)}
                  className="w-full flex items-center justify-between px-3 py-3 text-right text-gray-200 hover:text-[#f6af24] transition-colors min-h-[44px]"
                  aria-expanded={mobileAreasExpanded}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#f6af24]" />
                    <span className="font-bold">مناطق التغطية والأحياء</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileAreasExpanded ? 'rotate-180 text-[#f6af24]' : ''
                    }`}
                  />
                </button>

                {mobileAreasExpanded && (
                  <div className="bg-[#121717] px-2 py-2 space-y-1 border-t border-[#243030]">
                    {CITIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/areas/${c.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-gray-300 hover:text-[#f6af24] hover:bg-[#1b2323] rounded-lg transition-colors"
                      >
                        • دهانات وديكورات في {c.name}
                      </Link>
                    ))}
                    <Link
                      href="/areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#f6af24] font-bold hover:underline"
                    >
                      تفاصيل التغطية لجميع المدن &larr;
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/inspiration"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors min-h-[44px] ${
                  isActive('/inspiration')
                    ? 'bg-[#222c2c] text-[#f6af24] font-bold border border-[#354545]'
                    : 'text-gray-200 hover:bg-[#1e2626] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>أفكار وتنسيق الديكور</span>
                </div>
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors min-h-[44px] ${
                  isActive('/blog')
                    ? 'bg-[#222c2c] text-[#f6af24] font-bold border border-[#354545]'
                    : 'text-gray-200 hover:bg-[#1e2626] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span>المدونة والمقالات</span>
                </div>
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </Link>

              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors min-h-[44px] ${
                  isActive('/faq')
                    ? 'bg-[#222c2c] text-[#f6af24] font-bold border border-[#354545]'
                    : 'text-gray-200 hover:bg-[#1e2626] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                  <span>الأسئلة الشائعة</span>
                </div>
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors min-h-[44px] ${
                  isActive('/about')
                    ? 'bg-[#222c2c] text-[#f6af24] font-bold border border-[#354545]'
                    : 'text-gray-200 hover:bg-[#1e2626] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-gray-400" />
                  <span>من نحن وخبراتنا</span>
                </div>
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors min-h-[44px] ${
                  isActive('/contact')
                    ? 'bg-[#222c2c] text-[#f6af24] font-bold border border-[#354545]'
                    : 'text-gray-200 hover:bg-[#1e2626] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#f6af24]" />
                  <span>صفحة التواصل والمعاينة</span>
                </div>
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </Link>
            </nav>

            {/* Pinned Bottom Drawer Actions */}
            <div className="p-4 border-t border-[#242f2f] bg-[#0e1212] space-y-2 sticky bottom-0 z-10 pb-safe">
              <a
                id="drawer-tel-btn"
                href={SITE_CONFIG.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-[#f6af24] hover:bg-[#e09815] text-[#121616] font-extrabold py-3 px-4 rounded-xl text-sm text-center shadow-md active:scale-95 transition-transform min-h-[48px]"
                dir="ltr"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>اتصال مباشر: 0567407414</span>
              </a>

              <a
                id="drawer-whatsapp-btn"
                href={generateWhatsAppUrl('السلام عليكم، أحتاج استفسارًا وعرض سعر لخدمات الدهانات والديكور.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#155339] text-white font-bold py-3 px-4 rounded-xl text-sm text-center shadow-md active:scale-95 transition-transform min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80] fill-current" />
                <span>مراسلة واتساب فورية</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
