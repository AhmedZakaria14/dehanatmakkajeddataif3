import React from 'react';
import { SITE_CONFIG } from '@/lib/site-data';

export function HousePainterJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HousePainter',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    telephone: '+966567407414',
    url: SITE_CONFIG.siteUrl,
    areaServed: [
      {
        '@type': 'City',
        name: 'مكة المكرمة',
      },
      {
        '@type': 'City',
        name: 'جدة',
      },
      {
        '@type': 'City',
        name: 'الطائف',
      },
    ],
    image: `${SITE_CONFIG.siteUrl}/assets/9cd7db19ae-custom-img-65-copyright.webp`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966567407414',
      contactType: 'customer service',
      availableLanguage: ['Arabic'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'HousePainter',
      name: SITE_CONFIG.name,
      telephone: '+966567407414',
      url: SITE_CONFIG.siteUrl,
    },
    areaServed: [
      { '@type': 'City', name: 'مكة المكرمة' },
      { '@type': 'City', name: 'جدة' },
      { '@type': 'City', name: 'الطائف' },
    ],
    url,
    ...(image ? { image } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    image,
    inLanguage: 'ar-SA',
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
    },
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    ...(datePublished ? { datePublished } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
