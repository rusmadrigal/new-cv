import type { Locale } from "@/lib/sanity";

/** Copy for /servicios and /es/servicios index pages. */
export const serviciosIndexCopy: Record<
  Locale,
  {
    heroKicker: string;
    heroTitle: string;
    heroLead: string;
    heroContext: string;
    trust: readonly string[];
    howTitle: string;
    howSteps: readonly { title: string; desc: string }[];
    upcomingLabel: string;
    upcomingHint: string;
    emptyTitle: string;
    emptyCta: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  }
> = {
  es: {
    heroKicker: "Servicios",
    heroTitle: "SEO estratégico y local por país",
    heroLead:
      "Consultoría técnica, auditorías y crecimiento orgánico para equipos que operan a escala.",
    heroContext:
      "Mercados LATAM · Enfoque técnico · Sitios y equipos a gran escala",
    trust: [
      "10+ años",
      "SEO técnico",
      "Proyectos a gran escala",
      "IA + automatización",
    ],
    howTitle: "Cómo trabajo",
    howSteps: [
      {
        title: "Diagnóstico",
        desc: "Auditoría técnica, datos y priorización.",
      },
      {
        title: "Estrategia",
        desc: "Roadmap alineado a negocio y recursos.",
      },
      {
        title: "Ejecución",
        desc: "Implementación, contenido y medición.",
      },
      {
        title: "Seguimiento",
        desc: "Iteración y reporting claro.",
      },
    ],
    upcomingLabel: "Próximamente",
    upcomingHint: "Activá otro mercado pronto.",
    emptyTitle:
      "Próximamente más mercados. Escribime y definimos el alcance.",
    emptyCta: "Agendar consulta",
    ctaTitle: "¿No estás seguro qué necesitas?",
    ctaSubtitle: "Te ayudo a definir la mejor estrategia para tu contexto.",
    ctaButton: "Agendar consulta",
  },
  en: {
    heroKicker: "Services",
    heroTitle: "Strategic & local SEO by market",
    heroLead:
      "Technical SEO consulting, audits, and organic growth for teams operating at scale.",
    heroContext:
      "LATAM markets · Technical-first · Large sites & complex stacks",
    trust: [
      "10+ years",
      "Technical SEO",
      "Large-scale projects",
      "AI + automation",
    ],
    howTitle: "How I work",
    howSteps: [
      { title: "Diagnosis", desc: "Technical audit, data, prioritization." },
      { title: "Strategy", desc: "Roadmap aligned to business and resources." },
      { title: "Execution", desc: "Implementation, content, measurement." },
      { title: "Follow-up", desc: "Iteration and clear reporting." },
    ],
    upcomingLabel: "Coming soon",
    upcomingHint: "More markets on the roadmap.",
    emptyTitle:
      "More markets coming soon. Reach out and we’ll scope what fits.",
    emptyCta: "Book a consultation",
    ctaTitle: "Not sure what you need?",
    ctaSubtitle:
      "I’ll help you define the right strategy for your context and market.",
    ctaButton: "Book a consultation",
  },
};

/** Future markets (Sanity `country` keys). Shown as disabled until a landing exists. */
export const UPCOMING_MARKET_COUNTRIES: readonly {
  country: string;
}[] = [
  { country: "mexico" },
  { country: "colombia" },
  { country: "argentina" },
  { country: "chile" },
];
