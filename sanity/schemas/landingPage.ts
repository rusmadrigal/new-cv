import { defineField, defineType } from "sanity";

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page (Servicios SEO)",
  type: "document",
  description:
    "Landing pages por país (SEO estratégico y local). URLs: /es/servicios/[slug] (ES) y /servicios/[slug] (EN).",
  groups: [
    { name: "content", title: "Contenido", default: true },
    { name: "seo", title: "SEO" },
    { name: "settings", title: "Configuración" },
  ],
  fields: [
    defineField({
      name: "published",
      type: "boolean",
      title: "Publicado",
      group: "settings",
      description: "Si está desactivado, la página no aparecerá en la lista.",
      initialValue: false,
    }),
    defineField({
      name: "language",
      type: "string",
      title: "Idioma",
      group: "settings",
      options: {
        list: [
          { title: "Español", value: "es" },
          { title: "English", value: "en" },
        ],
        layout: "radio",
      },
      initialValue: "es",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "country",
      type: "string",
      title: "País objetivo",
      group: "content",
      description:
        "País al que va dirigida esta landing (ej: Costa Rica, México, España). Se usa en hero y meta.",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Costa Rica", value: "costa-rica" },
          { title: "México", value: "mexico" },
          { title: "España", value: "espana" },
          { title: "Colombia", value: "colombia" },
          { title: "Argentina", value: "argentina" },
          { title: "Chile", value: "chile" },
          { title: "Panamá", value: "panama" },
          { title: "Otro", value: "otro" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "countryLabel",
      type: "string",
      title: "Etiqueta del país (si Otro)",
      group: "content",
      description:
        "Nombre visible del país cuando eliges 'Otro' (ej: Perú, Guatemala).",
      hidden: ({ parent }) => parent?.country !== "otro",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL Slug",
      group: "content",
      description:
        "Slug único por idioma. ES: /es/servicios/[slug]. EN: /servicios/[slug]. Ej: costa-rica.",
      options: {
        source: "country",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Orden",
      group: "settings",
      description: "Orden en la lista de landing pages (menor = primero).",
    }),

    // Hero
    defineField({
      name: "heroHeadline",
      type: "string",
      title: "Hero – Título principal",
      group: "content",
      description: "Ej: Servicios de SEO en Costa Rica",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubheadline",
      type: "text",
      title: "Hero – Subtítulo",
      group: "content",
      rows: 2,
      description:
        "Texto de apoyo bajo el título. Ej: Estrategia orgánica y visibilidad local para tu negocio.",
    }),
    defineField({
      name: "heroCtaText",
      type: "string",
      title: "Hero – Texto del botón CTA",
      group: "content",
      initialValue: "Consultar",
    }),
    defineField({
      name: "heroCtaHref",
      type: "string",
      title: "Hero – Enlace del CTA",
      group: "content",
      description: "Ej: mailto:hello@rusmadrigal.com o #contacto",
      initialValue: "mailto:hello@rusmadrigal.com",
    }),
    defineField({
      name: "heroTrustLine",
      type: "string",
      title: "Hero – Línea de confianza",
      group: "content",
      description:
        "Opcional. Debajo del CTA (ej: +10 años · Sitios a gran escala · SEO técnico).",
    }),
    defineField({
      name: "heroSecondaryCtaText",
      type: "string",
      title: "Hero – Segundo botón (texto)",
      group: "content",
      description: "Opcional. Ej: Ver servicios, How it works.",
    }),
    defineField({
      name: "heroSecondaryCtaHref",
      type: "string",
      title: "Hero – Segundo botón (enlace)",
      group: "content",
      description: "Ancla (#servicios, #proceso) o URL.",
    }),

    defineField({
      name: "stats",
      type: "array",
      title: "Barra de métricas / confianza",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Valor", validation: (Rule) => Rule.required() },
            { name: "label", type: "string", title: "Etiqueta", validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { value: "value", label: "label" },
            prepare({ value, label }) {
              return { title: `${value} — ${label}` };
            },
          },
        },
      ],
      description: "3–4 bloques (ej: 10+ años, Multilingüe, Enterprise).",
    }),

    defineField({
      name: "introTitle",
      type: "string",
      title: "Intro – Título",
      group: "content",
      description: "Sección de contexto antes de los servicios.",
    }),
    defineField({
      name: "introBody",
      type: "blockContent",
      title: "Intro – Contenido",
      group: "content",
      description: "Texto enriquecido: párrafos, listas, enlaces.",
    }),

    defineField({
      name: "differentiatorTitle",
      type: "string",
      title: "Por qué trabajar conmigo – Título",
      group: "content",
    }),
    defineField({
      name: "differentiatorSubtitle",
      type: "text",
      title: "Por qué trabajar conmigo – Subtítulo",
      group: "content",
      rows: 2,
    }),
    defineField({
      name: "differentiatorItems",
      type: "array",
      title: "Por qué trabajar conmigo – Puntos",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Título", validation: (Rule) => Rule.required() },
            { name: "description", type: "text", title: "Descripción", rows: 3, validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title: title || "Punto" };
            },
          },
        },
      ],
    }),

    // SEO Estratégico
    defineField({
      name: "seoEstrategicoTitle",
      type: "string",
      title: "SEO Estratégico – Título de sección",
      group: "content",
      initialValue: "SEO Estratégico",
    }),
    defineField({
      name: "seoEstrategicoSubtitle",
      type: "text",
      title: "SEO Estratégico – Subtítulo",
      group: "content",
      rows: 2,
    }),
    defineField({
      name: "seoEstrategicoServices",
      type: "array",
      title: "Servicios de SEO Estratégico",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Título",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              type: "text",
              title: "Descripción",
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title: title || "Servicio" };
            },
          },
        },
      ],
      description:
        "Lista de servicios: auditorías, estrategia, contenido, enlaces, etc.",
    }),

    // SEO Local
    defineField({
      name: "seoLocalTitle",
      type: "string",
      title: "SEO Local – Título de sección",
      group: "content",
      initialValue: "SEO Local",
    }),
    defineField({
      name: "seoLocalSubtitle",
      type: "text",
      title: "SEO Local – Subtítulo",
      group: "content",
      rows: 2,
    }),
    defineField({
      name: "seoLocalBullets",
      type: "array",
      title: "SEO Local – Puntos clave",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              type: "string",
              title: "Texto",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { text: "text" },
            prepare({ text }) {
              return {
                title: text
                  ? text.slice(0, 50) + (text.length > 50 ? "…" : "")
                  : "Punto",
              };
            },
          },
        },
      ],
      description:
        "Ej: Optimización de Google Business Profile, citas locales, schema LocalBusiness, reseñas.",
    }),

    defineField({
      name: "processTitle",
      type: "string",
      title: "Proceso – Título",
      group: "content",
      initialValue: "Cómo trabajamos",
    }),
    defineField({
      name: "processSubtitle",
      type: "text",
      title: "Proceso – Subtítulo",
      group: "content",
      rows: 2,
    }),
    defineField({
      name: "processSteps",
      type: "array",
      title: "Proceso – Pasos",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Título del paso", validation: (Rule) => Rule.required() },
            { name: "description", type: "text", title: "Descripción", rows: 3, validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title: title || "Paso" };
            },
          },
        },
      ],
    }),

    defineField({
      name: "faqTitle",
      type: "string",
      title: "FAQ – Título de sección",
      group: "content",
      initialValue: "Preguntas frecuentes",
    }),
    defineField({
      name: "faqs",
      type: "array",
      title: "FAQ – Preguntas y respuestas",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Pregunta", validation: (Rule) => Rule.required() },
            { name: "answer", type: "text", title: "Respuesta", rows: 5, validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { question: "question" },
            prepare({ question }) {
              return {
                title: question
                  ? question.slice(0, 60) + (question.length > 60 ? "…" : "")
                  : "FAQ",
              };
            },
          },
        },
      ],
    }),

    // CTA final
    defineField({
      name: "ctaHeadline",
      type: "string",
      title: "CTA final – Título",
      group: "content",
      initialValue: "¿Listo para mejorar tu visibilidad orgánica?",
    }),
    defineField({
      name: "ctaSubheadline",
      type: "text",
      title: "CTA final – Subtítulo",
      group: "content",
      rows: 2,
    }),
    defineField({
      name: "ctaButtonText",
      type: "string",
      title: "CTA final – Texto del botón",
      group: "content",
      initialValue: "Contactar",
    }),
    defineField({
      name: "ctaButtonHref",
      type: "string",
      title: "CTA final – Enlace",
      group: "content",
      initialValue: "mailto:hello@rusmadrigal.com",
    }),

    // Meta
    defineField({
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
      group: "seo",
      description: "Override para meta title (default: hero headline).",
    }),
    defineField({
      name: "seoDescription",
      type: "text",
      title: "Meta Description",
      group: "seo",
      rows: 2,
      description: "Override para meta description (max ~155 chars).",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      title: "OG Image",
      group: "seo",
      options: { hotspot: true },
      description:
        "Imagen para compartir en redes (default: imagen del sitio).",
    }),
    defineField({
      name: "hreflang",
      type: "string",
      title: "Hreflang (región / idioma)",
      group: "seo",
      description:
        "Código BCP 47 para la etiqueta rel=alternate (minúsculas). Ej: es-cr (Costa Rica), es-mx (México), es-co (Colombia), en (inglés). Si lo dejas vacío, se usa es o en según el idioma del documento.",
      placeholder: "ej. es-cr",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value || !String(value).trim()) return true;
          const v = String(value).trim().toLowerCase();
          // BCP 47 simplificado: lang o lang-region (guiones)
          if (!/^[a-z]{2,3}(-[a-z0-9]+)*$/i.test(v)) {
            return "Formato inválido. Usa minúsculas, ej: es-cr, es-mx, en";
          }
          return true;
        }),
    }),
  ],
  orderings: [
    {
      title: "Orden",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "País",
      name: "countryAsc",
      by: [{ field: "country", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      heroHeadline: "heroHeadline",
      country: "country",
      countryLabel: "countryLabel",
      published: "published",
    },
    prepare({ heroHeadline, country, countryLabel, published }) {
      const label =
        country === "otro" ? countryLabel : (country?.replace("-", " ") ?? "");
      return {
        title: heroHeadline ?? "Landing Page",
        subtitle: `${label} ${published ? "✓" : "(borrador)"}`,
      };
    },
  },
});
