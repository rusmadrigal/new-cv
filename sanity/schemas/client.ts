import { defineField, defineType } from "sanity";

export const client = defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      description: "Used for login to the reports dashboard. Must be unique.",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "password",
      type: "string",
      title: "Contraseña",
      description: "Contraseña para entrar al dashboard de reportes (la que el cliente usará en el login).",
    }),
  ],
  preview: {
    select: { name: "name", email: "email" },
    prepare({ name, email }) {
      return { title: name ?? "Client", subtitle: email };
    },
  },
});
