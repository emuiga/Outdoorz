"use client";

import type React from "react";

// Placeholder Unsplash images — replace with Sanity gallery once populated
const images = [
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=75", alt: "Rift Valley panorama" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=75", alt: "Mountain summit trail" },
  { src: "https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=900&q=75", alt: "Group hike at sunrise" },
  { src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=900&q=75", alt: "Lake Nakuru flamingos" },
  { src: "https://images.unsplash.com/photo-1516208813382-0b4e60c3c36f?w=900&q=75", alt: "Night sky over the crater" },
];

// Film sprocket strip — repeating rectangular holes centered vertically
const sprocketStyle: React.CSSProperties = {
  height: 32,
  flexShrink: 0,
  backgroundColor: "#090909",
  backgroundImage: `repeating-linear-gradient(
    to right,
    transparent 0px,
    transparent 11px,
    rgba(238, 232, 210, 0.88) 11px,
    rgba(238, 232, 210, 0.88) 27px,
    transparent 27px,
    transparent 40px
  )`,
  backgroundSize: "40px 20px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "8px center",
};

export default function GalleryStrip() {
  return (
    <section style={{ backgroundColor: "#090909", overflow: "hidden" }}>
      <div style={{ overflowX: "auto", scrollbarWidth: "none" } as React.CSSProperties}>
        {/* Film strip — column layout so sprockets + photos scroll as one unit */}
        <div style={{ display: "flex", flexDirection: "column", minWidth: "max-content" }}>

          {/* Top sprocket strip */}
          <div style={{ ...sprocketStyle, width: "100%" }} />

          {/* Photos row */}
          <div
            style={{
              display: "flex",
              gap: 3,
              padding: "5px 4px",
              backgroundColor: "#090909",
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: "clamp(230px, 34vw, 460px)",
                  height: "clamp(155px, 21vw, 310px)",
                  overflow: "hidden",
                  backgroundColor: "#111",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.93) contrast(1.06) saturate(0.88)",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                />
              </div>
            ))}
          </div>

          {/* Bottom sprocket strip */}
          <div style={{ ...sprocketStyle, width: "100%" }} />

        </div>
      </div>
    </section>
  );
}
