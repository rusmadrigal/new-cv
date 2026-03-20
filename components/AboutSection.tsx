"use client";

import { motion } from "motion/react";
import { getTranslations, type Locale } from "@/lib/translations";

interface AboutSectionProps {
  locale?: Locale;
}

export function AboutSection({ locale = "en" }: AboutSectionProps) {
  const t = getTranslations(locale);
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-black relative px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t.about.title}
          </h2>

          <div className="space-y-5 sm:space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
