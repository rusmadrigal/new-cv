"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X, Loader2, Mail } from "lucide-react";
import type { Locale } from "@/lib/sanity";
import { SEO_CONTACT_FORM } from "@/lib/seo-contact-copy";
import { person } from "@/lib/site";

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export function SeoContactModal({
  open,
  onOpenChange,
  locale,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale: Locale;
}) {
  const t = SEO_CONTACT_FORM[locale];
  const titleId = useId();
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const canSubmit =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    isValidEmail(email.trim());

  const reset = useCallback(() => {
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setHoneypot("");
    setError(null);
    setSuccess(false);
    setSubmitting(false);
  }, []);

  useEffect(() => {
    if (!open) {
      reset();
      return;
    }
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => firstInputRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(id);
    };
  }, [open, reset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!success || !open) return;
    const id = window.setTimeout(() => {
      onOpenChange(false);
      reset();
    }, 2600);
    return () => window.clearTimeout(id);
  }, [success, open, onOpenChange, reset]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: message.trim(),
          _hp: honeypot,
        }),
      });
      const data = (await res.json()) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setError(t.error);
        return;
      }
      setSuccess(true);
    } catch {
      setError(t.error);
    } finally {
      setSubmitting(false);
    }
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  /** Dark fields: avoids WebKit/Safari white autofill + harsh contrast */
  const fieldClass =
    "w-full appearance-none rounded-xl border border-zinc-700/90 bg-zinc-900 px-4 py-3.5 text-[15px] leading-snug text-zinc-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.35)] outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-500/70 focus:bg-zinc-900 focus:ring-2 focus:ring-blue-500/25 [&:-webkit-autofill]:[-webkit-text-fill-color:rgb(244_244_245)] [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_rgb(24_24_27)]";

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="seo-contact-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-hidden
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 w-full max-w-[420px] [color-scheme:dark] rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_-20px_rgba(0,0,0,0.85)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2
                  id={titleId}
                  className="text-xl font-bold tracking-tight text-white"
                >
                  {t.modalTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {t.modalSubtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="shrink-0 rounded-lg p-2 text-gray-500 transition hover:bg-white/10 hover:text-white"
                aria-label={t.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {success ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-6 text-center">
                <p className="text-sm font-medium text-emerald-200">
                  {t.success}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative space-y-6"
                noValidate
              >
                <div
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden
                >
                  <label htmlFor="seo-hp">Company website</label>
                  <input
                    id="seo-hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="seo-name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    {t.labelName}{" "}
                    <span className="text-red-400" aria-hidden>
                      *
                    </span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="seo-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="seo-email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    {t.labelEmail}{" "}
                    <span className="text-red-400" aria-hidden>
                      *
                    </span>
                  </label>
                  <input
                    id="seo-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="seo-company"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    {t.labelCompany}
                  </label>
                  <input
                    id="seo-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="seo-message"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    {t.labelMessage}
                  </label>
                  <textarea
                    id="seo-message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${fieldClass} min-h-[128px] resize-y leading-relaxed`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="flex w-full min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_8px_32px_-8px_rgba(37,99,235,0.45)] transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_0_0_1px_rgba(59,130,246,0.55),0_12px_40px_-8px_rgba(37,99,235,0.5)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )}
                  {t.submit}
                </button>

                <p className="text-center text-xs text-gray-500">{t.trust}</p>

                <p className="text-center text-xs text-gray-500">
                  {t.emailFallbackPrefix}{" "}
                  <a
                    href={`mailto:${person.email}`}
                    className="font-medium text-blue-400 underline underline-offset-4 transition hover:text-blue-300"
                  >
                    {t.emailFallback}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
