import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteJsonLdGraph } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PortableText } from "@/components/PortableText";
import { VideoEmbed } from "@/components/VideoEmbed";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
  type CaseStudyPage,
} from "@/lib/sanity";
import { siteUrl } from "@/lib/site";
import { getTranslations } from "@/lib/translations";
import { Zap, Search, TrendingUp, ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  search: Search,
  trendingUp: TrendingUp,
};

function buildMeta(
  study: CaseStudyPage,
  slug: string,
  caseStudyMeta: string,
): Metadata {
  const title = study.seoTitle ?? study.title;
  const description =
    study.seoDescription ??
    `${study.title} – ${study.client}. ${caseStudyMeta}`;
  const desc = description.slice(0, 155);
  const canonical = `${siteUrl}/case-studies/${slug}`;
  const ogImage =
    study.ogImage ?? study.gallery?.[0]?.url ?? `${siteUrl}/rusben.jpg`;

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description: desc,
      images: [{ url: ogImage, width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
  };
}

function ArticleJsonLd({
  study,
  slug,
  caseStudyMeta,
}: {
  study: CaseStudyPage;
  slug: string;
  caseStudyMeta: string;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description:
      study.seoDescription ??
      `${study.title} – ${study.client}. ${caseStudyMeta}`,
    author: {
      "@type": "Person",
      name: "Rusben Madrigal",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Rusben Madrigal",
      logo: { "@type": "ImageObject", url: `${siteUrl}/rusben.jpg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/case-studies/${slug}`,
    },
    datePublished: undefined as string | undefined,
    dateModified: undefined as string | undefined,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs("en");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug, "en");
  if (!study) return {};
  return buildMeta(study, slug, getTranslations("en").caseStudyMeta);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug, "en");
  const t = getTranslations("en");

  if (!study) notFound();

  const Icon = iconMap[study.icon] ?? Zap;

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteJsonLdGraph />
      <ArticleJsonLd
        study={study}
        slug={slug}
        caseStudyMeta={t.caseStudyMeta}
      />
      <Navigation hasCaseStudies />
      <main id="main-content" className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.caseStudies.backToList}
          </Link>

          <article className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-6 mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl text-white mb-2">
                    {study.title}
                  </h1>
                  <p className="text-blue-400 text-lg">{study.client}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                      {t.caseStudies.challenge}
                    </h2>
                    <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
                      <PortableText value={study.challenge} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                      {t.caseStudies.solution}
                    </h2>
                    <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
                      <PortableText value={study.solution} />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                    {t.caseStudies.results}
                  </h2>
                  <div className="space-y-4">
                    {(study.results ?? []).map((result) => (
                      <div
                        key={result.metric}
                        className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-gray-400 text-sm">
                            {result.metric}
                          </p>
                          {result.change && (
                            <span className="text-xs text-gray-500">
                              {result.change}
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-2xl bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                        >
                          {result.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {study.videoUrl && (
                <section className="mb-8">
                  <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                    {t.caseStudies.video}
                  </h2>
                  <VideoEmbed url={study.videoUrl} title={study.title} />
                </section>
              )}

              {study.gallery?.filter((img) => img.url).length ? (
                <section className="mb-8">
                  <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                    {t.caseStudies.gallery}
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {study.gallery
                      .filter((img) => img.url)
                      .map((img, i) => (
                        <figure key={i}>
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800">
                            <Image
                              src={img.url}
                              alt={img.alt ?? study.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, 50vw"
                            />
                          </div>
                          {img.caption && (
                            <figcaption className="text-sm text-gray-500 mt-2">
                              {img.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                  </div>
                </section>
              ) : null}

              {study.body && study.body.length > 0 && (
                <section className="pt-6 border-t border-gray-700">
                  <div className="prose prose-invert max-w-none text-gray-300">
                    <PortableText value={study.body} />
                  </div>
                </section>
              )}

              {study.tags && study.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-700">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer locale="en" />
    </div>
  );
}
