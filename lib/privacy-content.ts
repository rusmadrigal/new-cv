import type { Locale } from "@/lib/translations";

export type PrivacySection = { title: string; body: string };

const privacyContent: Record<
  Locale,
  { title: string; lastUpdated: string; sections: PrivacySection[] }
> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 2025",
    sections: [
      {
        title: "Who we are",
        body: "This website (www.rusmadrigal.com) is the personal portfolio and CV of Rusben Madrigal. It is a static site that presents professional information and does not sell products or services.",
      },
      {
        title: "What data we collect",
        body: "We may collect minimal data necessary for the site to function: (1) Cookies and similar technologies — for example to remember your cookie consent and language preferences. (2) Usage data — if we use analytics (e.g. server logs or a privacy-friendly analytics tool), we may collect anonymized information such as pages visited and referrer. (3) Contact — if you get in touch via email or a form, we process the data you provide only to respond.",
      },
      {
        title: "How we use it",
        body: "We use the data only to operate the site, improve the experience, and respond to inquiries. We do not sell or rent your data to third parties.",
      },
      {
        title: "Retention and your rights",
        body: "We keep data only as long as needed for the purposes above. You can request access, correction, or deletion of your data by contacting us. If you are in the EEA/UK, you have additional rights under applicable data protection laws.",
      },
      {
        title: "Contact",
        body: "For any privacy-related questions or requests, contact Rusben Madrigal at hello@rusmadrigal.com.",
      },
    ],
  },
  es: {
    title: "Política de privacidad",
    lastUpdated: "Última actualización: marzo 2025",
    sections: [
      {
        title: "Quién somos",
        body: "Este sitio web (www.rusmadrigal.com) es el portfolio y CV personal de Rusben Madrigal. Es un sitio estático que presenta información profesional y no vende productos ni servicios.",
      },
      {
        title: "Qué datos recogemos",
        body: "Podemos recoger datos mínimos necesarios para el funcionamiento del sitio: (1) Cookies y tecnologías similares — por ejemplo para recordar tu consentimiento de cookies y preferencias de idioma. (2) Datos de uso — si utilizamos analíticas (p. ej. logs de servidor o una herramienta respetuosa con la privacidad), podemos recoger información anonimizada como páginas visitadas y referrer. (3) Contacto — si te pones en contacto por email o formulario, tratamos los datos que nos facilites solo para responder.",
      },
      {
        title: "Cómo los usamos",
        body: "Usamos los datos solo para operar el sitio, mejorar la experiencia y responder a consultas. No vendemos ni alquilamos tus datos a terceros.",
      },
      {
        title: "Conservación y tus derechos",
        body: "Conservamos los datos solo el tiempo necesario para los fines anteriores. Puedes solicitar acceso, rectificación o supresión de tus datos contactándonos. Si estás en el EEE/Reino Unido, tienes derechos adicionales según la normativa aplicable de protección de datos.",
      },
      {
        title: "Contacto",
        body: "Para cualquier pregunta o solicitud relacionada con la privacidad, contacta a Rusben Madrigal en hello@rusmadrigal.com.",
      },
    ],
  },
};

export function getPrivacyContent(locale: Locale) {
  return privacyContent[locale] ?? privacyContent.en;
}
