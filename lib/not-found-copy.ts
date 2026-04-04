import type { Locale } from "@/lib/sanity";

export const notFoundCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    backHome: string;
    contact: string;
    privacy: string;
  }
> = {
  en: {
    eyebrow: "Error 404",
    title: "Page not found",
    description:
      "The page you’re looking for doesn’t exist, was moved, or the link is incorrect.",
    backHome: "Back to home",
    contact: "Contact",
    privacy: "Privacy",
  },
  es: {
    eyebrow: "Error 404",
    title: "Página no encontrada",
    description:
      "La página que buscas no existe, se movió o el enlace no es correcto.",
    backHome: "Volver al inicio",
    contact: "Contacto",
    privacy: "Privacidad",
  },
};
