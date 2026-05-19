import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Singleton lógico: un documento para el listado /es/servicios.
 * Crear solo un documento de este tipo en el Studio.
 */
export const serviciosEsIndex = defineType({
  name: "serviciosEsIndex",
  title: "Página Servicios (ES) — /es/servicios",
  type: "document",
  description:
    "Contenido del bloque SEO bajo «Cómo trabajo» en la página de servicios en español.",
  fields: [
    defineField({
      name: "seoSectionTitle",
      type: "string",
      title: "Título del bloque SEO",
      description: "Ej: Servicios SEO para empresas en Latinoamérica",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "seoSectionParagraphs",
      type: "array",
      title: "Párrafos",
      description: "Un ítem por párrafo. Orden = orden en la página.",
      of: [
        defineArrayMember({
          type: "text",
          rows: 5,
        }),
      ],
      validation: (Rule) => Rule.max(8),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Servicios (ES) — índice",
        subtitle: "/es/servicios",
      };
    },
  },
});
