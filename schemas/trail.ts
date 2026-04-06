import { defineField, defineType } from "sanity";

export const trail = defineType({
  name: "trail",
  title: "Trail",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Trail Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: { list: ["Easy", "Moderate", "Challenging"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "activityType",
      title: "Activity Type",
      type: "string",
      options: { list: ["Hiking", "Cycling", "Bird Walk", "Night Hike"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "distanceKm", title: "Distance (km)", type: "number" }),
    defineField({ name: "durationHours", title: "Duration", type: "string", description: "e.g. 4–5 hrs" }),
    defineField({ name: "elevationM", title: "Elevation / Gain", type: "string", description: "e.g. 2,278m" }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", title: "Featured on Homepage", type: "boolean", initialValue: false }),
    defineField({ name: "body", title: "Full Description", type: "array", of: [{ type: "block" }] }),
  ],
  preview: {
    select: { title: "name", subtitle: "difficulty", media: "image" },
  },
});
