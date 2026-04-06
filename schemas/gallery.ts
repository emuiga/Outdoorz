import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
  ],
  preview: {
    select: { title: "caption", media: "image" },
    prepare({ title, media }) {
      return { title: title ?? "Untitled photo", media };
    },
  },
});
