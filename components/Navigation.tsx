"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, ChevronDown, Languages } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { getTranslations, type Locale } from "@/lib/translations";

function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith("/es") ? "es" : "en";
}

interface NavigationProps {
  /** When false, Case Studies link and section are hidden (home + nav). Default true. */
  hasCaseStudies?: boolean;
}

export function Navigation({ hasCaseStudies = true }: NavigationProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);
  const basePath = locale === "es" ? "/es" : "";
  const isHome = pathname === "/" || pathname === "/es";

  const navItems = useMemo(() => {
    const tr = getTranslations(locale);
    const items = [
      { name: tr.nav.home, href: "#hero" },
      { name: tr.nav.about, href: "#about" },
      { name: tr.nav.video, href: "#video" },
      { name: tr.nav.skills, href: "#skills" },
      { name: tr.nav.experience, href: "#experience" },
      { name: tr.nav.caseStudies, href: "#case-studies" },
      { name: tr.nav.tools, href: "#tools" },
      { name: tr.nav.expertise, href: "#expertise" },
      { name: tr.nav.education, href: "#education" },
      { name: tr.nav.recommendations, href: "#recommendations" },
      { name: tr.nav.contact, href: "#contact" },
    ];
    return hasCaseStudies ? items : items.filter((item) => item.href !== "#case-studies");
  }, [locale, hasCaseStudies]);

  /** Desktop: main bar = Home, About, Experience, Case Studies */
  const primaryIds = useMemo(() => ["hero", "about", "experience", "case-studies"], []);
  const primaryItems = useMemo(
    () => navItems.filter((item) => primaryIds.includes(item.href.replace("#", ""))),
    [navItems, primaryIds]
  );
  /** Desktop: "More" dropdown = Video, Skills, Tools, Expertise, Education, Recommendations */
  const secondaryItems = useMemo(
    () => navItems.filter((item) => !primaryIds.includes(item.href.replace("#", "")) && item.href !== "#contact"),
    [navItems, primaryIds]
  );

  const SECTION_IDS = useMemo(() => navItems.map((item) => item.href.replace("#", "")), [navItems]);

  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollY = window.scrollY + 120;
      let current = "hero";
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollY) {
          current = SECTION_IDS[i];
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [SECTION_IDS]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setMoreOpen(false);

    if (!isHome && href.startsWith("#")) {
      window.location.href = `${basePath || "/"}${href}`;
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const homeHref = basePath || "/";
  const langSwitcherLabel = locale === "en" ? t.nav.spanish : t.nav.english;
  const langSwitcherHref = locale === "en" ? "/es" : "/";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0)] ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(59,130,246,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {isHome ? (
              <motion.a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="group/logo relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="logo-rays absolute inset-0 opacity-0 transition-[opacity_300ms,transform_600ms] group-hover/logo:opacity-100 group-hover/logo:rotate-180" />
                <span className="relative z-10 text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                  RM
                </span>
              </motion.a>
            ) : (
              <Link href={homeHref} className="group/logo block">
                <motion.span
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)] transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="logo-rays absolute inset-0 opacity-0 transition-[opacity_300ms,transform_600ms] group-hover/logo:opacity-100 group-hover/logo:rotate-180" />
                  <span className="relative z-10 text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                    RM
                  </span>
                </motion.span>
              </Link>
            )}

            <div className="hidden lg:flex items-center gap-0.5">
              {primaryItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    )}
                  </motion.a>
                );
              })}

              <div className="relative" ref={moreRef}>
                <motion.button
                  type="button"
                  onClick={() => setMoreOpen((o) => !o)}
                  className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    secondaryItems.some((item) => item.href.replace("#", "") === activeSection)
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                  aria-label={t.nav.more}
                >
                  {secondaryItems.some((item) => item.href.replace("#", "") === activeSection) && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10" />
                  )}
                  <span className="relative">{t.nav.more}</span>
                  <ChevronDown
                    className={`relative w-4 h-4 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                  />
                </motion.button>

                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 py-1.5 min-w-[200px] rounded-xl bg-gray-900/95 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 z-50"
                    >
                      {secondaryItems.map((item) => {
                        const id = item.href.replace("#", "");
                        const isActive = activeSection === id;
                        return (
                          <a
                            key={id}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span>{item.name}</span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                            )}
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href={langSwitcherHref}
                className="ml-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
                title={locale === "en" ? "Versión en español" : "English version"}
              >
                <Languages className="w-4 h-4" />
                {langSwitcherLabel}
              </Link>

              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="ml-3 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t.nav.letsTalk}
              </motion.a>
            </div>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 w-[min(320px,88vw)] z-50 lg:hidden flex flex-col bg-gray-950/95 backdrop-blur-xl border-l border-white/10 shadow-2xl shadow-black/50"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t.nav.navigation}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={t.nav.closeMenu}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4 px-3">
                <div className="space-y-0.5">
                  {navItems.map((item, index) => {
                    const id = item.href.replace("#", "");
                    const isActive = activeSection === id;
                    return (
                      <motion.a
                        key={id}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-colors ${
                          isActive ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="font-medium text-[15px]">{item.name}</span>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "text-blue-400" : "text-gray-500"}`}
                        />
                      </motion.a>
                    );
                  })}
                </div>

                <Link
                  href={langSwitcherHref}
                  className="flex mt-4 mx-2 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors items-center justify-center gap-2"
                >
                  <Languages className="w-4 h-4" />
                  {langSwitcherLabel}
                </Link>

                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.03 }}
                  className="flex mt-6 mx-2 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow"
                >
                  {t.nav.letsTalk}
                </motion.a>
              </nav>

              <div className="p-5 border-t border-white/10 bg-black/30">
                <p className="text-sm font-medium text-gray-300 text-center">Rusben Madrigal</p>
                <p className="text-xs text-gray-500 text-center mt-0.5">Senior Technical SEO</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
