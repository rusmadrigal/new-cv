"use client";

import { motion } from "motion/react";
import {
  Code2,
  Zap,
  Gauge,
  FileCode,
  ScrollText,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { getTranslations, type Locale } from "@/lib/translations";

const EXPERTISE_ICONS: LucideIcon[] = [FileCode, Code2, Gauge, ScrollText, Zap, Bot];

interface ExpertiseSectionProps {
  locale?: Locale;
}

export function ExpertiseSection({ locale = "en" }: ExpertiseSectionProps) {
  const t = getTranslations(locale);
  const areas = t.expertise.items.map((item, i) => ({
    ...item,
    icon: EXPERTISE_ICONS[i] ?? FileCode,
  }));
  return (
    <section id="expertise" className="py-12 sm:py-16 md:py-20 bg-black relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t.expertise.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
