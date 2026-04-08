import { ImageResponse } from "next/og";
import { allTrails } from "@/lib/trails-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TrailOGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trail = allTrails.find((t) => t.slug === slug);

  const name = trail?.name ?? "Trail Detail";
  const region = trail?.region ?? "Kenya";
  const difficulty = trail?.difficulty ?? "";
  const distance =
    trail
      ? typeof trail.distanceKm === "number"
        ? `${trail.distanceKm} km`
        : trail.distanceKm
      : "";
  const elevation = trail?.elevationM ?? "";
  const imageUrl = trail?.image ? `${trail.image.split("?")[0]}?w=1200&q=80` : null;

  const difficultyColor =
    difficulty === "Easy" ? "#4CAF50"
    : difficulty === "Moderate" ? "#C8A84B"
    : "#E05C2A";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#1B3D2A",
      }}
    >
      {/* Background image */}
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
        />
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(27,61,42,0.95) 0%, rgba(27,61,42,0.6) 60%, rgba(27,61,42,0.4) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
        }}
      >
        {/* Top — Roam brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              background: "#C8A84B",
              width: 44,
              height: 44,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#1B3D2A", fontSize: 24, fontWeight: 800, fontFamily: "Georgia, serif" }}>R</span>
          </div>
          <span style={{ color: "rgba(238,232,210,0.75)", fontSize: 17, fontFamily: "system-ui, sans-serif", fontWeight: 600, letterSpacing: "0.05em" }}>
            Roam · Trails
          </span>
        </div>

        {/* Middle — trail name */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {difficulty && (
            <span
              style={{
                color: difficultyColor,
                fontSize: 16,
                fontWeight: 700,
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {difficulty} Trail
            </span>
          )}
          <h1
            style={{
              color: "#EEE8D2",
              fontSize: name.length > 20 ? 60 : 72,
              fontWeight: 800,
              fontFamily: "Georgia, serif",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {name}
          </h1>
          <p style={{ color: "rgba(238,232,210,0.65)", fontSize: 22, fontFamily: "system-ui, sans-serif", margin: 0 }}>
            {region}
          </p>
        </div>

        {/* Bottom — stats chips */}
        <div style={{ display: "flex", gap: 16 }}>
          {distance && (
            <div style={{ background: "rgba(238,232,210,0.12)", borderRadius: 100, padding: "10px 20px", display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "#EEE8D2", fontSize: 15, fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
                📍 {distance}
              </span>
            </div>
          )}
          {elevation && (
            <div style={{ background: "rgba(238,232,210,0.12)", borderRadius: 100, padding: "10px 20px", display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "#EEE8D2", fontSize: 15, fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
                ▲ {elevation}
              </span>
            </div>
          )}
          {trail?.durationHours && (
            <div style={{ background: "rgba(238,232,210,0.12)", borderRadius: 100, padding: "10px 20px", display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "#EEE8D2", fontSize: 15, fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
                ⏱ {trail.durationHours}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>,
    { ...size }
  );
}
