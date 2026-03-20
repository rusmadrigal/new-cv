import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getCaseStudies } from "@/lib/sanity";
import { getTranslations } from "@/lib/translations";
import { siteUrl, siteName, person } from "@/lib/site";
import { Zap, Search, TrendingUp, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  search: Search,
  trendingUp: TrendingUp,
};

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Case Studies",
  description:
    "Technical SEO case studies and projects by Rusben Madrigal. Measurable organic growth, Core Web Vitals, and large-scale website optimization.",
  alternates: {
    canonical: `${siteUrl}/case-studies`,
    languages: {
      en: `${siteUrl}/case-studies`,
      es: `${siteUrl}/es/case-studies`,
    },
  },
  openGraph: {
    url: `${siteUrl}/case-studies`,
    title: `Case Studies | ${siteName}`,
    description:
      "Technical SEO case studies and projects by Rusben Madrigal. Measurable organic growth and large-scale optimization.",
    siteName,
    images: [
      {
        url: `${siteUrl}${person.image}`,
        width: 1200,
        height: 630,
        alt: `${person.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `Case Studies | ${siteName}`,
    description: "Technical SEO case studies by Rusben Madrigal.",
  },
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies("en");
  const hasCaseStudies = caseStudies.length > 0;
  const t = getTranslations("en");

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation hasCaseStudies={hasCaseStudies} />
      <main id="main-content" className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t.caseStudies.listTitle}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.caseStudies.listSubtitle}
            </p>
          </div>

          {caseStudies.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">{t.caseStudies.noCaseStudies}</p>
              <p className="text-sm mt-2">{t.caseStudies.addInSanity}</p>
            </div>
          ) : (
            <div className="space-y-8">
              {caseStudies.map((study) => {
                const Icon = iconMap[study.icon] ?? Zap;
                return (
                  <Link
                    key={study._id}
                    href={`/case-studies/${study.slug}`}
                    className="block group"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                      <div className="p-8 md:p-10">
                        <div className="flex items-start gap-6 mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                              {study.title}
                            </h2>
                            <p className="text-blue-400 text-sm md:text-base">
                              {study.client}
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                        <p className="text-gray-400 line-clamp-2">
                          {study.challenge}
                        </p>
                        {study.tags && study.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {study.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-400 text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer locale="en" />
    </div>
  );
}
