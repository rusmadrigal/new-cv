import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "rusben-cv-sanity",
  title: "Rusben CV – Sanity",
  projectId: "2za5lqrr",
  dataset: "production",
  basePath: "/sanity",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
