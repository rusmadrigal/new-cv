"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { getTranslations, type Locale } from "@/lib/translations";

const STORAGE_KEY = "rusmadrigal-cookie-consent";

function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith("/es") ? "es" : "en";
}

export function CookieConsent() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname ?? "");
  const t = getTranslations(locale);
  const privacyHref = locale === "es" ? "/es/privacy" : "/privacy";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-5 md:px-6"
        >
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/50 p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-white text-sm md:text-base">
                {t.cookie.headline}
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-0.5">
                {t.cookie.message}{" "}
                <Link
                  href={privacyHref}
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                >
                  {t.cookie.privacyLink}
                </Link>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={accept}
              className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
            >
              {t.cookie.accept}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
