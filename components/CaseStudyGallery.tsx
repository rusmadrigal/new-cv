"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import type { Locale } from "@/lib/translations";

export type CaseStudyGalleryImage = {
  url: string;
  alt?: string | null;
  caption?: string | null;
};

interface CaseStudyGalleryProps {
  images: CaseStudyGalleryImage[];
  defaultAlt: string;
  locale?: Locale;
}

export function CaseStudyGallery({
  images,
  defaultAlt,
  locale = "en",
}: CaseStudyGalleryProps) {
  const t =
    locale === "es"
      ? {
          enlarge: "Ampliar imagen",
          close: "Cerrar",
          closeBackdrop: "Cerrar imagen ampliada",
        }
      : {
          enlarge: "Enlarge image",
          close: "Close",
          closeBackdrop: "Close enlarged image",
        };
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const dialogTitleId = useId();

  const items = images.filter((img) => img.url);

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close]);

  if (items.length === 0) return null;

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((img, i) => (
          <figure key={`${img.url}-${i}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800 border border-gray-700/80 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label={`${t.enlarge}${img.caption ? `: ${img.caption}` : ""}`}
            >
              <Image
                src={img.url}
                alt={img.alt ?? defaultAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="h-4 w-4" aria-hidden />
              </span>
            </button>
            {img.caption ? (
              <figcaption className="text-sm text-gray-500 mt-2">
                {img.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {active ? (
              <motion.div
                key={openIndex}
                role="dialog"
                aria-modal="true"
                aria-labelledby={dialogTitleId}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                  onClick={close}
                  aria-label={t.closeBackdrop}
                />

                <motion.div
                  className="relative z-10 flex w-full max-w-6xl max-h-[min(90vh,900px)] flex-col items-center pointer-events-none"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <p id={dialogTitleId} className="sr-only">
                    {active.alt ?? defaultAlt}
                  </p>

                  <button
                    type="button"
                    onClick={close}
                    className="pointer-events-auto absolute -top-2 right-0 sm:-right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/90 border border-gray-600 text-white hover:bg-gray-700 transition-colors"
                    aria-label={t.close}
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div
                    className="pointer-events-auto relative w-full h-[min(70vh,800px)] rounded-xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={active.url}
                      alt={active.alt ?? defaultAlt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>

                  {active.caption ? (
                    <p className="pointer-events-auto mt-4 text-center text-sm text-gray-300 max-w-2xl">
                      {active.caption}
                    </p>
                  ) : null}
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
