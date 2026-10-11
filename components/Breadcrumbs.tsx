import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Home } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaBreadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'الرئيسية',
      item: SITE_CONFIG.siteUrl,
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: `${SITE_CONFIG.siteUrl}${item.href}` } : {}),
    })),
  ];

  return (
    <nav
      aria-label="مسار التصفح"
      className="py-3 px-4 bg-[#f2ede4] border-b border-[#e5dfd5] text-xs sm:text-sm text-[#525e5e]"
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 sm:gap-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-[#222a2a] hover:text-[#d88d12] transition-colors font-medium"
        >
          <Home className="w-3.5 h-3.5 text-[#f6af24]" />
          <span>الرئيسية</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronLeft className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-[#222a2a] hover:text-[#d88d12] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#192020] font-bold truncate max-w-[240px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* JSON-LD Schema for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: schemaBreadcrumbs,
          }),
        }}
      />
    </nav>
  );
}
