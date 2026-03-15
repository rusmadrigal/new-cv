import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/sanity";
import { Zap, Search, TrendingUp, ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  search: Search,
  trendingUp: TrendingUp,
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) notFound();

  const Icon = iconMap[study.icon] ?? Zap;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
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
                      Challenge
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                      Solution
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                    Results
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
      <Footer />
    </div>
  );
}
