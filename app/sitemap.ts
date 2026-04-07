import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { allTrails } from "@/lib/trails-data";
import { allEvents } from "@/lib/events-data";
import { allProducts } from "@/lib/products-data";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/trails", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/events", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/cycling", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/shop", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/private-hikes", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const trails: MetadataRoute.Sitemap = allTrails.map((trail) => ({
    url: `${siteUrl}/trails/${trail.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const events: MetadataRoute.Sitemap = allEvents.map((event) => ({
    url: `${siteUrl}/events/${event.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const products: MetadataRoute.Sitemap = allProducts.map((product) => ({
    url: `${siteUrl}/shop/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...statics, ...trails, ...events, ...products];
}
