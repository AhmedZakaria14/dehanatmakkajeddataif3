import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { SITE_CONFIG } from '@/lib/site-data';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-tajawal',
});

export const viewport: Viewport = {
  themeColor: '#161c1c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.name} | مكة المكرمة - جدة - الطائف`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    type: 'website',
    locale: 'ar_SA',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/assets/favicon.svg',
    shortcut: '/assets/favicon.svg',
    apple: '/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar-SA" dir="rtl" className={tajawal.variable}>
      <body className="font-sans antialiased bg-[#faf7f2] text-[#1f2727] selection:bg-[#f6af24] selection:text-[#192020] min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:bg-[#192020] focus:text-[#f6af24] focus:px-4 focus:py-2 focus:rounded shadow-lg"
        >
          الانتقال إلى المحتوى الرئيسي
        </a>
        <Header />
        <main id="main-content" className="flex-grow pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
