"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { getTranslations, type Locale } from "@/lib/translations";

const HERO_IMAGE = "/rusben.jpg";
const RESUME_PDF = "/resume.pdf";

interface HeroSectionProps {
  locale?: Locale;
}

export function HeroSection({ locale = "en" }: HeroSectionProps) {
  const t = getTranslations(locale);
  const [badgeHover, setBadgeHover] = useState(false);
  const [badgeTap, setBadgeTap] = useState(false);
  const [shimmerKey, setShimmerKey] = useState(0);

  const badgeScale = badgeTap ? 1.02 : badgeHover ? 1.06 : 1;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black pt-20 pb-[env(safe-area-inset-bottom,0)] px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="hero-orb-blue absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-blue-400/50 rounded-full blur-[100px]" />
      <div className="hero-orb-purple absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-400/50 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
              <ImageWithFallback
                src={HERO_IMAGE}
                alt="Rusben Madrigal"
                width={160}
                height={160}
                priority
                className="w-full h-full rounded-full object-cover border-2 border-white/20 shadow-xl"
              />
              {/* Open to Work badge – centrado; vuelve al mismo lugar al quitar el puntero */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[10%] w-[92%] flex justify-center items-center"
                aria-hidden
              >
                <motion.div
                  className={`open-to-work-badge flex items-center justify-center rounded-full py-1 px-1.5 w-full max-w-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white border border-white/20 cursor-default ${badgeHover ? "run-shimmer" : ""}`}
                  style={{ transformOrigin: "center center" }}
                  animate={{ scale: badgeScale }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onPointerEnter={() => setBadgeHover(true)}
                  onPointerLeave={() => {
                    setBadgeHover(false);
                    setBadgeTap(false);
                    setShimmerKey((k) => k + 1);
                  }}
                  onPointerDown={() => setBadgeTap(true)}
                  onPointerUp={() => setBadgeTap(false)}
                  onPointerCancel={() => setBadgeTap(false)}
                >
                  <span className="relative inline-block text-[9px] md:text-[10px] font-bold tracking-tight uppercase">
                    <span>#OPENTOWORK</span>
                    <span
                      key={shimmerKey}
                      className="open-to-work-shimmer-text select-none text-[9px] md:text-[10px] font-bold tracking-tight uppercase"
                      aria-hidden
                    >
                      #OPENTOWORK
                    </span>
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-3 sm:mb-5 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Rusben Madrigal
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-5">
            {t.hero.subtitle}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            {t.hero.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <button
              onClick={() => scrollToAbout()}
              className="min-h-[48px] px-6 sm:px-8 py-3.5 bg-white text-black rounded-lg hover:bg-gray-100 transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-white/20 text-base font-medium"
            >
              {t.hero.viewExperience}
            </button>
            <a
              href={RESUME_PDF}
              download="Rusben-Madrigal-CV.pdf"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 sm:px-8 py-3.5 border border-gray-700 text-white rounded-lg hover:border-gray-500 transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-blue-500/20 group text-base font-medium"
            >
              <Download className="w-4 h-4 shrink-0 transition-transform group-hover:translate-y-0.5" />
              {t.hero.downloadResume}
            </a>
            <button
              onClick={() => scrollToContact()}
              className="min-h-[48px] px-6 sm:px-8 py-3.5 border border-gray-700 text-white rounded-lg hover:border-gray-500 transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-purple-500/20 text-base font-medium"
            >
              {t.hero.contactMe}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
