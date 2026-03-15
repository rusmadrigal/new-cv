"use client";

import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Video", href: "#video" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Tools", href: "#tools" },
  { name: "Expertise", href: "#expertise" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const SECTION_IDS = navItems.map((item) => item.href.replace("#", ""));

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

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
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(59,130,246,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity tracking-tight"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              RM
            </motion.a>

            {/* Desktop: links + CTA */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
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

              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="ml-3 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Talk
              </motion.a>
            </div>

            {/* Mobile: hamburger */}
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

      {/* Mobile drawer */}
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
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Navegación
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-4 px-3">
                <div className="space-y-0.5">
                  {navItems.map((item, index) => {
                    const id = item.href.replace("#", "");
                    const isActive = activeSection === id;
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-colors ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="font-medium text-[15px]">
                          {item.name}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? "text-blue-400" : "text-gray-500"
                          }`}
                        />
                      </motion.a>
                    );
                  })}
                </div>

                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.03 }}
                  className="flex mt-6 mx-2 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow"
                >
                  Let&apos;s Talk
                </motion.a>
              </nav>

              {/* Footer */}
              <div className="p-5 border-t border-white/10 bg-black/30">
                <p className="text-sm font-medium text-gray-300 text-center">
                  Rusben Madrigal
                </p>
                <p className="text-xs text-gray-500 text-center mt-0.5">
                  Senior Technical SEO
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
