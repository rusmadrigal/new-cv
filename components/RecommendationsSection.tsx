"use client";

import { motion } from "motion/react";
import { Quote, Linkedin, ArrowUpRight } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/translations";
import {
  getRecommendations,
  LINKEDIN_RECOMMENDATIONS_URL,
} from "@/lib/recommendations";

interface RecommendationsSectionProps {
  locale?: Locale;
}

export function RecommendationsSection({
  locale = "en",
}: RecommendationsSectionProps) {
  const t = getTranslations(locale);
  const items = getRecommendations(locale);

  if (items.length === 0) return null;

  return (
    <section
      id="recommendations"
      className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-4 sm:mb-5">
            <Linkedin className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">LinkedIn</span>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t.recommendations.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.recommendations.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((rec, index) => (
            <motion.article
              key={`${rec.authorName}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-purple-500/20" />
              <blockquote className="text-gray-300 leading-relaxed mb-6 pr-8">
                &ldquo;{rec.quote}&rdquo;
              </blockquote>
              <footer className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="font-semibold text-white">
                  {rec.authorName}
                </span>
                <span className="text-gray-500 text-sm">
                  {rec.authorRole}
                  {rec.authorCompany ? ` · ${rec.authorCompany}` : ""}
                </span>
              </footer>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 text-center"
        >
          <a
            href={LINKEDIN_RECOMMENDATIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#0A66C2] hover:bg-[#0A66C2]/30 hover:border-[#0A66C2]/60 transition-all font-medium"
          >
            <Linkedin className="w-5 h-5 shrink-0" />
            {t.recommendations.readOnLinkedIn}
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
