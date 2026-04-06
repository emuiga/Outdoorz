"use client";

// Placeholder Unsplash images — replace with Sanity gallery once populated
const images = [
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=75", alt: "Rift Valley panorama" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=75", alt: "Mountain summit trail" },
  { src: "https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=900&q=75", alt: "Group hike at sunrise" },
  { src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=900&q=75", alt: "Lake Nakuru flamingos" },
  { src: "https://images.unsplash.com/photo-1516208813382-0b4e60c3c36f?w=900&q=75", alt: "Night sky over the crater" },
];

export default function GalleryStrip() {
  return (
    <section className="py-0 overflow-hidden bg-dark">
      <div
        className="flex gap-3 px-3 py-3"
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative flex-none rounded-xl overflow-hidden bg-moss"
            style={{ width: "clamp(240px, 35vw, 480px)", height: "clamp(160px, 22vw, 320px)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
