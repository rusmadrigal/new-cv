"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/translations";

interface ContactSectionProps {
  locale?: Locale;
}

export function ContactSection({ locale = "en" }: ContactSectionProps) {
  const t = getTranslations(locale);
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-10">
            <motion.a
              href="mailto:rusbenmadrigal@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 min-h-[48px] px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all active:scale-[0.98] w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 shrink-0" />
              <span className="text-sm sm:text-base break-all">rusbenmadrigal@gmail.com</span>
            </motion.a>
          </div>

          <div className="flex gap-5 sm:gap-6 justify-center">
            <motion.a
              href="https://www.linkedin.com/in/rusmadrigal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.linkedInAria}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] min-h-[48px] bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
            </motion.a>

            <motion.a
              href="https://github.com/rusmadrigal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.githubAria}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] min-h-[48px] bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-full flex items-center justify-center hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all active:scale-95"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
            </motion.a>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            className="mt-10 sm:mt-12 min-h-[48px] px-6 sm:px-8 py-3.5 bg-white text-black rounded-lg hover:bg-gray-100 transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-white/20 inline-flex items-center justify-center gap-2"
          >
            {t.contact.backToTop}
            <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
