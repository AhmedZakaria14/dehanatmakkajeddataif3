import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  ArrowLeft,
  ChevronLeft,
  MessageCircle,
  Phone,
  BookOpen,
  MapPin,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  BLOG_POSTS,
  SITE_CONFIG,
  getBlogPostBySlug,
  getServiceBySlug,
  getCityBySlug,
  generateWhatsAppUrl,
} from '@/lib/site-data';
import { BlogPostingJsonLd, FAQPageJsonLd } from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

function renderContentText(text: string) {
  // Parses basic markdown links [text](url) and bullet lists
  const paragraphs = text.split('\n\n');
  return paragraphs.map((paragraph, pIdx) => {
    // Check if paragraph is bullet points
    if (paragraph.includes('\n• ') || paragraph.startsWith('• ') || paragraph.includes('\n1. ') || paragraph.startsWith('1. ')) {
      const items = paragraph.split('\n').filter((line) => line.trim().length > 0);
      return (
        <ul key={pIdx} className="space-y-2 my-3 list-none pr-1">
          {items.map((item, iIdx) => {
            const cleanItem = item.replace(/^[•\d+\.]\s*/, '');
            return (
              <li key={iIdx} className="flex items-start gap-2 text-[#465353] text-sm sm:text-base">
                <span className="text-[#b87600] font-bold mt-1">•</span>
                <span>{renderInlineLinks(cleanItem)}</span>
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <p key={pIdx} className="text-sm sm:text-base text-[#465353] leading-relaxed">
        {renderInlineLinks(paragraph)}
      </p>
    );
  });
}

function renderInlineLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    parts.push(
      <Link
        key={match.index}
        href={url}
        className="text-[#b87600] font-bold hover:underline underline-offset-4"
      >
        {label}
      </Link>
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedServices = post.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  const relatedCities = post.relatedCitySlugs
    .map((c) => getCityBySlug(c))
    .filter(Boolean);

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const whatsappMessage = `السلام عليكم، قرأت مقالكم «${post.title}» وأريد استفسارًا عن أعمال الدهان والديكور لدي.`;

  return (
    <>
      <BlogPostingJsonLd
        title={post.title}
        description={post.metaDescription}
        url={`${SITE_CONFIG.siteUrl}/blog/${post.slug}`}
        image={`${SITE_CONFIG.siteUrl}${post.image}`}
        datePublished={post.datePublished}
      />

      {post.faqs && post.faqs.length > 0 && (
        <FAQPageJsonLd faqs={post.faqs} />
      )}

      <Breadcrumbs
        items={[
          { label: 'المدونة', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="py-12 sm:py-16 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Article Header */}
          <header className="space-y-4 mb-10 text-right">
            <div className="flex items-center gap-3 text-xs text-[#b87600] font-bold">
              <span className="bg-[#f8edd9] px-3 py-1 rounded-full">دليل إرشادي شامل</span>
              <span className="flex items-center gap-1 text-gray-500 font-normal">
                <Clock className="w-3.5 h-3.5 text-[#f6af24]" />
                <span>وقت القراءة: {post.readingTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#192020] leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#556161] leading-relaxed border-r-2 border-[#f6af24] pr-4 bg-[#f4eee4] py-3 rounded-l-lg">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-[#e0d9cd] bg-[#eae5dc] mb-10">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>

          {/* Table of Contents / Index */}
          {post.sections && post.sections.length > 0 && (
            <div className="mb-10 bg-[#f5ede2] border border-[#e2dacd] p-6 rounded-2xl text-right">
              <div className="flex items-center gap-2 text-[#192020] font-bold text-lg mb-3 pb-2 border-b border-[#e5dcce]">
                <BookOpen className="w-5 h-5 text-[#b87600]" />
                <h2>فهرس المحتويات (Table of Contents)</h2>
              </div>
              <ul className="space-y-2 text-sm text-[#465353] pr-2">
                {post.sections.map((section, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="text-[#b87600] font-bold">•</span>
                    <a
                      href={`#section-${sIdx}`}
                      className="hover:text-[#b87600] hover:underline transition-colors font-medium"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
                {post.faqs && post.faqs.length > 0 && (
                  <li className="flex items-start gap-2">
                    <span className="text-[#b87600] font-bold">•</span>
                    <a
                      href="#faq-section"
                      className="hover:text-[#b87600] hover:underline transition-colors font-medium"
                    >
                      الأسئلة الشائعة
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Article Sections */}
          <div className="space-y-12 text-right bg-white p-6 sm:p-10 rounded-2xl border border-[#e5dfd4] shadow-xs">
            {post.sections.map((section, idx) => (
              <section key={idx} id={`section-${idx}`} className="space-y-4 scroll-mt-20">
                <h2 className="text-xl sm:text-2xl font-bold text-[#192020] pb-2 border-b border-[#f2ece2]">
                  {section.heading}
                </h2>

                <div className="space-y-3">
                  {renderContentText(section.content)}
                </div>

                {/* Subsections if any */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-4 pt-2">
                    {section.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-[#faf8f4] p-4 sm:p-5 rounded-xl border border-[#ede5d8] space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#b87600]">{sub.title}</h3>
                        <div className="text-xs sm:text-sm text-[#546262] leading-relaxed">
                          {renderInlineLinks(sub.desc)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Comparison Table if present */}
                {section.table && (
                  <div className="pt-4 overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm text-right border-collapse border border-[#e2dacd] rounded-lg overflow-hidden">
                      <thead className="bg-[#f5ede2] text-[#192020] font-bold">
                        <tr>
                          {section.table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="p-3 border border-[#e2dacd]">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e2dacd]">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#faf8f5]'}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 border border-[#e2dacd] text-[#3e4a4a]">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faq-section" className="pt-8 border-t-2 border-[#f2ece2] space-y-6 scroll-mt-20">
                <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#192020]">
                  <CheckCircle2 className="w-6 h-6 text-[#b87600]" />
                  <h2>الأسئلة الشائعة</h2>
                </div>

                <div className="space-y-4">
                  {post.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-[#faf8f4] p-5 rounded-xl border border-[#ede5d8] space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#192020] flex items-center gap-2">
                        <span className="text-[#b87600]">س:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-sm sm:text-base text-[#546262] leading-relaxed pr-5">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Internal Links: Related Services & Cities */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            {/* Related Services */}
            <div className="bg-white p-6 rounded-xl border border-[#e5dfd4] shadow-xs space-y-3">
              <h3 className="text-base font-bold text-[#192020] pb-2 border-b border-[#f0ece4]">
                خدمات مرتبطة بموضوع المقال
              </h3>
              <div className="space-y-2">
                {relatedServices.map((rel) => (
                  rel && (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#faf7f2] border border-[#eee6da] transition-colors text-xs font-bold text-[#2d3737]"
                    >
                      <span>{rel.title}</span>
                      <ArrowLeft className="w-3.5 h-3.5 text-[#b87600]" />
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Related Cities */}
            <div className="bg-white p-6 rounded-xl border border-[#e5dfd4] shadow-xs space-y-3">
              <h3 className="text-base font-bold text-[#192020] pb-2 border-b border-[#f0ece4]">
                تطبيق هذه المعايير في مدينتك
              </h3>
              <div className="space-y-2">
                {relatedCities.map((city) => (
                  city && (
                    <Link
                      key={city.slug}
                      href={`/areas/${city.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#faf7f2] border border-[#eee6da] transition-colors text-xs font-bold text-[#2d3737]"
                    >
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#f6af24]" />
                        <span>دهانات في {city.name}</span>
                      </span>
                      <ArrowLeft className="w-3.5 h-3.5 text-[#b87600]" />
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Post Action Bar / Consultation CTA */}
          <div className="mt-10 bg-[#161c1c] text-white p-8 rounded-2xl text-center space-y-4 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold">هل لديك استفسار محدد أو ترغب في معاينة؟</h3>
            <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              تواصل معنا مباشرة عبر الواتساب أو الاتصال الهاتفي وسيسعدنا الإجابة عن أي تساؤل وتحديد موعد لمعاينة جدرانك في مكة أو جدة أو الطائف.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={generateWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1b6848] hover:bg-[#145339] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                <span>مراسلة استفسار عبر الواتساب</span>
              </a>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-[#f6af24] hover:bg-[#d88d12] text-[#121616] font-extrabold px-6 py-3 rounded-lg text-sm transition-colors shadow"
                dir="ltr"
              >
                <Phone className="w-4 h-4" />
                <span>0567407414</span>
              </a>
            </div>
          </div>

          {/* Read Next Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-14 space-y-4 text-right">
              <h3 className="text-xl font-bold text-[#192020]">مقالات أخرى قد تهمك في المدونة</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherPosts.map((op) => (
                  <Link
                    key={op.slug}
                    href={`/blog/${op.slug}`}
                    className="bg-white p-5 rounded-xl border border-[#e5dfd4] hover:border-[#b87600] transition-colors shadow-xs flex flex-col justify-between space-y-2"
                  >
                    <h4 className="text-sm font-bold text-[#192020] line-clamp-2 leading-snug">{op.title}</h4>
                    <p className="text-xs text-[#637070] line-clamp-2 leading-relaxed">{op.excerpt}</p>
                    <span className="text-xs font-bold text-[#b87600] inline-flex items-center gap-1 pt-1">
                      <span>متابعة القراءة</span>
                      <ArrowLeft className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

