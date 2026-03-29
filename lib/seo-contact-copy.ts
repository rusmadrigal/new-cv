import type { Locale } from "@/lib/sanity";

export const SEO_CONTACT_FORM: Record<
  Locale,
  {
    modalTitle: string;
    modalSubtitle: string;
    labelName: string;
    labelEmail: string;
    labelCompany: string;
    labelMessage: string;
    submit: string;
    trust: string;
    emailFallback: string;
    emailFallbackPrefix: string;
    success: string;
    close: string;
    error: string;
  }
> = {
  es: {
    modalTitle: "Agendar consulta SEO",
    modalSubtitle:
      "Cuéntame sobre tu proyecto y te respondo en menos de 24h",
    labelName: "Nombre",
    labelEmail: "Email",
    labelCompany: "Sitio web / Empresa",
    labelMessage: "Mensaje",
    submit: "Enviar solicitud",
    trust: "Respuesta en menos de 24h · Sin compromiso",
    emailFallbackPrefix: "¿Prefieres email directo?",
    emailFallback: "hello@rusmadrigal.com",
    success: "Mensaje enviado. Te responderé pronto.",
    close: "Cerrar",
    error: "No se pudo enviar. Inténtalo de nuevo o usa el email.",
  },
  en: {
    modalTitle: "Book an SEO consultation",
    modalSubtitle:
      "Tell me about your project — I’ll reply within 24 hours",
    labelName: "Name",
    labelEmail: "Email",
    labelCompany: "Website / Company",
    labelMessage: "Message",
    submit: "Send request",
    trust: "Reply within 24h · No obligation",
    emailFallbackPrefix: "Prefer email?",
    emailFallback: "hello@rusmadrigal.com",
    success: "Message sent. I’ll be in touch soon.",
    close: "Close",
    error: "Couldn’t send. Try again or email us directly.",
  },
};
