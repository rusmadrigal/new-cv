import { getTranslations, type Locale } from "@/lib/translations";

interface FooterProps {
  locale?: Locale;
}

export function Footer({ locale = "en" }: FooterProps) {
  const t = getTranslations(locale);
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} Rusben Madrigal. {t.footer.rights}
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-500 hover:text-white transition-colors">
              {t.footer.about}
            </a>
            <a href="#experience" className="text-gray-500 hover:text-white transition-colors">
              {t.footer.experience}
            </a>
            <a href="#contact" className="text-gray-500 hover:text-white transition-colors">
              {t.footer.contact}
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs">{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
