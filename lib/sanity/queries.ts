import { sanityClient } from "./client";

// ─── Trails ────────────────────────────────────────────────────────
export async function getTrails() {
  return sanityClient.fetch(
    `*[_type == "trail"] | order(_createdAt asc) {
      _id,
      name,
      slug,
      difficulty,
      activityType,
      distanceKm,
      durationHours,
      elevationM,
      description,
      featured,
      "image": image.asset->url
    }`
  );
}

export async function getTrailBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "trail" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      difficulty,
      activityType,
      distanceKm,
      durationHours,
      elevationM,
      description,
      featured,
      "image": image.asset->url,
      body
    }`,
    { slug }
  );
}

// ─── Events ────────────────────────────────────────────────────────
export async function getEvents(limit?: number) {
  const limitClause = limit ? `[0...${limit}]` : "";
  return sanityClient.fetch(
    `*[_type == "event" && date >= now()] | order(date asc) ${limitClause} {
      _id,
      title,
      trail,
      activityType,
      difficulty,
      date,
      time,
      spotsTotal,
      spotsRemaining,
      priceKsh,
      description,
      "image": image.asset->url
    }`
  );
}

// ─── Cycling routes ────────────────────────────────────────────────
export async function getCyclingRoutes() {
  return sanityClient.fetch(
    `*[_type == "cyclingRoute"] | order(_createdAt asc) {
      _id,
      name,
      slug,
      distanceKm,
      terrain,
      difficulty,
      description,
      groupRideSchedule,
      bikeRentalAvailable,
      "image": image.asset->url
    }`
  );
}

// ─── Products ─────────────────────────────────────────────────────
export async function getProducts() {
  return sanityClient.fetch(
    `*[_type == "product"] | order(_createdAt asc) {
      _id,
      name,
      slug,
      category,
      price,
      originalPrice,
      description,
      sizes,
      inStock,
      featured,
      "image": image.asset->url
    }`
  );
}

export async function getProductBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      category,
      price,
      originalPrice,
      description,
      sizes,
      inStock,
      featured,
      "image": image.asset->url
    }`,
    { slug }
  );
}

// ─── Gallery ───────────────────────────────────────────────────────
export async function getGalleryImages() {
  return sanityClient.fetch(
    `*[_type == "gallery"] | order(_createdAt desc) {
      _id,
      caption,
      "url": image.asset->url,
      "metadata": image.asset->metadata
    }`
  );
}

// ─── Testimonials ──────────────────────────────────────────────────
export async function getTestimonials() {
  return sanityClient.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) [0...6] {
      _id,
      name,
      role,
      quote,
      "avatar": avatar.asset->url
    }`
  );
}
