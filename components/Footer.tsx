import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/translations";

interface FooterProps {
  locale?: Locale;
}

export function Footer({ locale = "en" }: FooterProps) {
  const t = getTranslations(locale);
  const privacyHref = locale === "es" ? "/es/privacy" : "/privacy";
  const homeHref = locale === "es" ? "/es" : "/";

  return (
    <footer className="bg-black border-t border-gray-800 py-5 sm:py-6 md:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left" suppressHydrationWarning>
            © {new Date().getFullYear()} Rusben Madrigal. {t.footer.rights}
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
            <Link href={`${homeHref}#about`} className="text-gray-500 hover:text-white transition-colors py-2 min-h-[44px] flex items-center">
              {t.footer.about}
            </Link>
            <Link href={`${homeHref}#experience`} className="text-gray-500 hover:text-white transition-colors py-2 min-h-[44px] flex items-center">
              {t.footer.experience}
            </Link>
            <Link href={`${homeHref}#contact`} className="text-gray-500 hover:text-white transition-colors py-2 min-h-[44px] flex items-center">
              {t.footer.contact}
            </Link>
            <Link
              href={privacyHref}
              className="text-gray-500 hover:text-white transition-colors py-2 min-h-[44px] flex items-center"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 text-center">
          <p className="text-gray-600 text-xs">{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
