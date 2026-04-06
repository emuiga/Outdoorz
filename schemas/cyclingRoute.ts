import { defineField, defineType } from "sanity";

export const cyclingRoute = defineType({
  name: "cyclingRoute",
  title: "Cycling Route",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Route Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "distanceKm", title: "Distance (km)", type: "number" }),
    defineField({
      name: "terrain",
      title: "Terrain Type",
      type: "string",
      options: { list: ["Road", "Gravel", "MTB", "Mixed"] },
    }),
    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: { list: ["Easy", "Moderate", "Challenging"] },
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "groupRideSchedule", title: "Group Ride Schedule", type: "string", description: "e.g. Every Sunday 6:30 AM" }),
    defineField({ name: "bikeRentalAvailable", title: "Bike Rental Available", type: "boolean", initialValue: false }),
    defineField({ name: "image", title: "Route Image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "name", subtitle: "terrain", media: "image" },
  },
});
