"use client";

import { motion } from "motion/react";
import { getTranslations, type Locale } from "@/lib/translations";

interface SkillsSectionProps {
  locale?: Locale;
}

export function SkillsSection({ locale = "en" }: SkillsSectionProps) {
  const t = getTranslations(locale);
  const skills = t.skills.list;
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-full text-gray-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
