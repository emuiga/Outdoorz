import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Event Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "trail", title: "Trail / Location", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "activityType",
      title: "Activity Type",
      type: "string",
      options: { list: ["Hiking", "Cycling", "Bird Walk", "Camping"] },
    }),
    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: { list: ["Easy", "Moderate", "Challenging"] },
    }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "time", title: "Meeting Time", type: "string", description: "e.g. 6:00 AM" }),
    defineField({ name: "spotsTotal", title: "Total Spots", type: "number" }),
    defineField({ name: "spotsRemaining", title: "Spots Remaining", type: "number" }),
    defineField({ name: "priceKsh", title: "Price (KSh)", type: "number", validation: (r) => r.required().min(0) }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Event Image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "title", subtitle: "date", media: "image" },
  },
  orderings: [{ title: "Date (Upcoming)", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
});
