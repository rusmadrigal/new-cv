"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  TrendingUp,
  Zap,
  Search,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { CaseStudy } from "@/lib/sanity";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  search: Search,
  trendingUp: TrendingUp,
};

const defaultCaseStudies: CaseStudy[] = [
  {
    _id: "1",
    title: "E-commerce Platform Core Web Vitals Optimization",
    slug: "ecommerce-core-web-vitals",
    client: "Global Fashion Retailer",
    challenge:
      "Large-scale e-commerce site experiencing poor Core Web Vitals scores affecting rankings and user experience across 15+ markets.",
    solution:
      "Implemented comprehensive performance optimization strategy including image lazy loading, critical CSS extraction, and JavaScript bundle optimization for Next.js environment.",
    results: [
      { metric: "LCP Improvement", value: "3.2s → 1.8s", change: "+44%" },
      { metric: "Organic Traffic", value: "+127%", change: "6 months" },
      { metric: "Pages in Top 10", value: "+89%", change: "12 months" },
    ],
    tags: ["Core Web Vitals", "Next.js", "Performance"],
    icon: "zap",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    _id: "2",
    title: "JavaScript SEO Migration for SaaS Platform",
    slug: "javascript-seo-migration",
    client: "B2B SaaS Company",
    challenge:
      "Migration from server-side rendered PHP to React SPA causing indexation and crawlability issues across 50,000+ pages.",
    solution:
      "Led technical SEO strategy for React migration including dynamic rendering implementation, structured data migration, and crawl budget optimization.",
    results: [
      { metric: "Indexed Pages", value: "+156%", change: "3 months" },
      { metric: "Crawl Efficiency", value: "+210%", change: "improved" },
      { metric: "Organic Visibility", value: "+94%", change: "6 months" },
    ],
    tags: ["JavaScript SEO", "React", "Migration"],
    icon: "search",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    _id: "3",
    title: "International SEO Architecture Redesign",
    slug: "international-seo-architecture",
    client: "Travel & Hospitality Brand",
    challenge:
      "Complex multilingual site structure causing duplicate content issues and poor international targeting across 25 countries.",
    solution:
      "Redesigned site architecture with proper hreflang implementation, optimized internal linking structure, and XML sitemap optimization for multilingual content.",
    results: [
      { metric: "International Traffic", value: "+203%", change: "12 months" },
      { metric: "Hreflang Errors", value: "-98%", change: "resolved" },
      { metric: "Market Coverage", value: "25 markets", change: "optimized" },
    ],
    tags: ["International SEO", "Site Architecture", "Hreflang"],
    icon: "trendingUp",
    gradient: "from-orange-500 to-red-500",
  },
];

interface CaseStudiesSectionProps {
  caseStudies?: CaseStudy[] | null;
}

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const studies = caseStudies?.length ? caseStudies : defaultCaseStudies;
  return (
    <section
      id="case-studies"
      className="py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world technical SEO projects delivering measurable organic
            growth and performance improvements
          </p>
        </motion.div>

        <div className="space-y-8">
          {studies.map((study, index) => {
            const Icon = iconMap[study.icon] ?? Zap;
            const results = study.results ?? [];
            const tags = study.tags ?? [];
            return (
              <motion.div
                key={study._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
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
                        <h3 className="text-2xl md:text-3xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-blue-400 text-sm md:text-base">
                          {study.client}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                            Challenge
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                            Solution
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                          Results
                        </h4>
                        <div className="space-y-4">
                          {results.map((result, i) => (
                            <motion.div
                              key={result.metric}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + i * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-lg p-4 hover:border-blue-500/50 transition-all"
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
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-700">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="ml-auto px-4 py-1 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
