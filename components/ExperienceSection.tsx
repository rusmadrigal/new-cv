"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/translations";

interface ExperienceSectionProps {
  locale?: Locale;
}

export function ExperienceSection({ locale = "en" }: ExperienceSectionProps) {
  const t = getTranslations(locale);
  const experiences = t.experience.items;
  return (
    <section
      id="experience"
      className="py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-20"
              >
                <div className="hidden md:block absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50" />

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl text-white mb-2">{exp.role}</h3>
                      <p className="text-lg text-blue-400">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-2 md:mt-0">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start"
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-0 md:pl-20 mt-12"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <p className="text-gray-300 mb-4">
                {t.experience.wantFull}
              </p>
              <a
                href="/resume.pdf"
                download="Rusben-Madrigal-CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/40 transition-all"
              >
                <Download className="w-4 h-4" />
                {t.experience.downloadCv}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
