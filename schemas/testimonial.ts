import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Member Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role / Description", type: "string", description: "e.g. Summit Hiker, Nakuru" }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "avatar", title: "Avatar Photo", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "avatar" },
  },
});
