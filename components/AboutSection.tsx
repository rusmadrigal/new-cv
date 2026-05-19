"use client";

import { motion } from "motion/react";
import { getTranslations, type Locale } from "@/lib/translations";
import { ImageWithFallback } from "./ImageWithFallback";

interface AboutSectionProps {
  locale?: Locale;
}

function AboutPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      viewport={{ once: true }}
      className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none lg:mx-0 group"
    >
      <motion.div
        aria-hidden
        className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-blue-500/35 via-purple-500/25 to-blue-600/30 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
      />
      <motion.div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/80 to-black shadow-2xl shadow-blue-950/40 ring-1 ring-white/5">
        <motion.div className="relative aspect-[682/1024]">
          <ImageWithFallback
            src={src}
            alt={alt}
            width={682}
            height={1024}
            sizes="(max-width: 1024px) 85vw, 360px"
            className="h-full w-full object-cover object-[center_12%]"
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function AboutSection({ locale = "en" }: AboutSectionProps) {
  const t = getTranslations(locale);
  const hasPortrait = Boolean(t.about.portraitSrc?.trim());

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-black relative px-4 sm:px-6"
    >
      <motion.div
        aria-hidden
        className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div aria-hidden className="absolute inset-0 bg-grid-pattern opacity-10" />

      <motion.div
        className={`relative z-10 mx-auto ${hasPortrait ? "max-w-6xl" : "max-w-4xl"}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {hasPortrait ? (
            <motion.div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] lg:gap-12 xl:gap-16 lg:items-center">
              <motion.div className="min-w-0">
                <h2 className="text-4xl md:text-5xl mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {t.about.title}
                </h2>

                <motion.div className="mb-8 lg:hidden">
                  <AboutPortrait
                    src={t.about.portraitSrc}
                    alt={t.about.portraitAlt}
                  />
                </motion.div>

                <motion.div className="space-y-5 sm:space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                  <p>{t.about.p3}</p>
                </motion.div>
              </motion.div>

              <motion.div className="hidden lg:flex lg:justify-end lg:items-center">
                <AboutPortrait
                  src={t.about.portraitSrc}
                  alt={t.about.portraitAlt}
                />
              </motion.div>
            </motion.div>
          ) : (
            <>
              <h2 className="text-4xl md:text-5xl mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t.about.title}
              </h2>

              <motion.div className="space-y-5 sm:space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
