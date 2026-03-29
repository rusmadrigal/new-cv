"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Play, Video } from "lucide-react";
import { useState } from "react";
import { getTranslations, type Locale } from "@/lib/translations";

const VIDEO_IDS: Record<Locale, string> = {
  en: "-r2ysag8wcc",
  es: "9oVTtElceLQ",
};

const EMBED_PARAMS = "autoplay=1&rel=0&modestbranding=1";

function getThumbnailUrl(
  videoId: string,
  quality: "maxresdefault" | "hqdefault",
) {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

function getEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?${EMBED_PARAMS}`;
}

interface VideoSectionProps {
  locale?: Locale;
}

export function VideoSection({ locale = "en" }: VideoSectionProps) {
  const t = getTranslations(locale);
  const videoId = VIDEO_IDS[locale];
  const thumbnailUrl = getThumbnailUrl(videoId, "maxresdefault");
  const thumbnailFallback = getThumbnailUrl(videoId, "hqdefault");
  const embedUrl = getEmbedUrl(videoId);

  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(thumbnailUrl);

  return (
    <section
      id="video"
      className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-4 sm:mb-5">
            <Video className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">{t.video.badge}</span>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t.video.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.video.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative bg-black">
                {!isPlaying ? (
                  <>
                    {/* Thumbnail real de YouTube */}
                    <div className="absolute inset-0">
                      <Image
                        src={thumbSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1152px"
                        fetchPriority="low"
                        onError={() => setThumbSrc(thumbnailFallback)}
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 z-10 flex items-center justify-center w-full h-full group/btn"
                      aria-label={t.video.videoA11y}
                    >
                      <span className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-2xl shadow-blue-500/50 group-hover/btn:shadow-blue-500/70 transition-shadow">
                        <Play
                          className="w-10 h-10 text-white ml-1"
                          fill="white"
                        />
                        <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
                      </span>
                    </motion.button>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl text-white mb-2">
                        {t.video.videoTitle}
                      </h3>
                      <p className="text-gray-300">{t.video.videoSubtitle}</p>
                    </div>
                  </>
                ) : (
                  /* Recorte CSS: iframe más alto y centrado para ocultar barra del título y recomendados (YouTube no permite desactivarlos por URL) */
                  <div className="absolute inset-0 overflow-hidden rounded-b-2xl">
                    <iframe
                      src={embedUrl}
                      title={t.video.videoA11y}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute left-0 top-1/2 w-full h-[130%] -translate-y-1/2"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <p className="text-3xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                10+
              </p>
              <p className="text-gray-400 text-sm">{t.video.yearsExperience}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <p className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                2
              </p>
              <p className="text-gray-400 text-sm">{t.video.languages}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <p className="text-3xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                15+
              </p>
              <p className="text-gray-400 text-sm">{t.video.toolsPlatforms}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
