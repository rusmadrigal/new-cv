"use client";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="hero-orb-blue absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-blue-400/50 rounded-full blur-[100px]" />
      <div className="hero-orb-purple absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-400/50 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
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
              {/* Open to Work badge – LinkedIn style, site neon gradient */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[10%] w-[92%] flex items-center justify-center rounded-full py-1 px-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.6),0_0_40px_rgba(147,51,234,0.3)] border border-white/20"
                aria-hidden
              >
                <span className="text-[9px] md:text-[10px] font-bold tracking-tight uppercase">
                  #OPENTOWORK
                </span>
              </div>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Rusben Madrigal
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.hero.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToAbout()}
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              {t.hero.viewExperience}
            </button>
            <a
              href={RESUME_PDF}
              download="Rusben-Madrigal-CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-700 text-white rounded-lg hover:border-gray-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <Download className="w-4 h-4 shrink-0 transition-transform group-hover:translate-y-0.5" />
              {t.hero.downloadResume}
            </a>
            <button
              onClick={() => scrollToContact()}
              className="px-8 py-3 border border-gray-700 text-white rounded-lg hover:border-gray-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {t.hero.contactMe}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
