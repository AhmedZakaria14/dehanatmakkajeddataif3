import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, ArrowLeft, MessageCircle, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLOG_POSTS, generateWhatsAppUrl } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'المدونة ودليل الدهانات والديكور | مقالات إرشادية للمنازل والفلل',
  description: 'دليل مقالات عملي يساعدك في اختيار درجات اللمعة، وتجهيز الجدران، واختيار دهانات الواجهات المناسبة لمناخ مكة وجدة والطائف، وبدائل الخشب والرخام.',
  openGraph: {
    title: 'المدونة ودليل الدهانات والديكور | مقالات إرشادية للمنازل والفلل',
    description: 'دليل مقالات عملي في الدهانات والديكورات العصرية في مكة وجدة والطائف.',
  },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'المدونة' }]} />

      <section className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-right space-y-4 mb-12 max-w-3xl">
            <span className="inline-block text-xs font-bold text-[#b87600] bg-[#f8edd9] px-3 py-1 rounded-full">
              المقالات والدلائل الإرشادية
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#192020] leading-tight">
              مدونة الدهانات والديكورات
            </h1>
            <p className="text-sm sm:text-base text-[#566262] leading-relaxed">
              مقالات تثقيفية معمقة تشرح الفروق بين أنواع الدهانات، وطرق التعامل مع الجدران واللياسة، وكيفية التغلب على الرطوبة والحرارة، وتنسيق الديكورات الجدارية العصرية.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-[#e5dfd4] overflow-hidden shadow-sm flex flex-col text-right hover:border-[#f6af24] transition-all hover:shadow-md group"
              >
                <div className="relative aspect-[16/10] bg-[#eae5dc] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-[#161c1ce6] text-white text-[11px] px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#f6af24]" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h2 className="text-lg font-bold text-[#192020] group-hover:text-[#b87600] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#576464] leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-[#f0ece4] flex items-center justify-between text-xs">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-[#b87600] font-bold hover:underline"
                    >
                      <span>قراءة المقال كاملاً</span>
                      <ArrowLeft className="w-3 h-3" />
                    </Link>
                    <a
                      href={generateWhatsAppUrl(`السلام عليكم، قرأت مقال «${post.title}» ولدي استفسار بشأنه.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1b6848] font-bold hover:underline"
                    >
                      استفسار واتساب
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Educational Newsletter CTA / Consult Box */}
          <div className="bg-[#f3ede3] rounded-2xl border border-[#e0d7c9] p-8 text-right flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-xl font-bold text-[#192020]">هل تحتاج استشارة لونية أو فنية لجدرانك؟</h2>
              <p className="text-xs sm:text-sm text-[#5a6767] leading-relaxed">
                إذا كنت في مرحلة اللياسة أو ترغب في تجديد دهان شقتك أو فيلتك في مكة أو جدة أو الطائف، يسعدنا الإجابة عن كافة تساؤلاتك وتنسيق المعاينة الميدانية.
              </p>
            </div>
            <a
              href={generateWhatsAppUrl('السلام عليكم، أحتاج استشارة فنية لاختيار دهانات منزلي.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shrink-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#4ade80]" />
              <span>استشارة مجانية عبر واتساب</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
