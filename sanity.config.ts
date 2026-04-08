import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "nnts",
  title: "Roam — Content Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Roam Content")
          .items([
            S.listItem().title("Trails").schemaType("trail").child(S.documentTypeList("trail")),
            S.listItem().title("Events").schemaType("event").child(S.documentTypeList("event")),
            S.listItem().title("Cycling Routes").schemaType("cyclingRoute").child(S.documentTypeList("cyclingRoute")),
            S.listItem().title("Merch / Products").schemaType("product").child(S.documentTypeList("product")),
            S.listItem().title("Gallery").schemaType("gallery").child(S.documentTypeList("gallery")),
            S.listItem().title("Testimonials").schemaType("testimonial").child(S.documentTypeList("testimonial")),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
});
