import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#1B3D2A",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        position: "relative",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          right: -80,
          top: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(200, 168, 75, 0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 40,
          top: 40,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(200, 168, 75, 0.06)",
        }}
      />

      {/* Top — logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            background: "#C8A84B",
            width: 52,
            height: 52,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#1B3D2A", fontSize: 28, fontWeight: 800, fontFamily: "Georgia, serif" }}>
            N
          </span>
        </div>
        <span
          style={{
            color: "#EEE8D2",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.05em",
            opacity: 0.9,
          }}
        >
          Nakuru Nature Trails & Summits
        </span>
      </div>

      {/* Middle — headline */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p
          style={{
            color: "#C8A84B",
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Kenya&apos;s Premier Hiking Community
        </p>
        <h1
          style={{
            color: "#EEE8D2",
            fontSize: 68,
            fontWeight: 800,
            fontFamily: "Georgia, serif",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Trails. Summits.
          <br />
          Community.
        </h1>
      </div>

      {/* Bottom — tagline */}
      <p
        style={{
          color: "rgba(238, 232, 210, 0.55)",
          fontSize: 22,
          fontFamily: "system-ui, sans-serif",
          fontWeight: 400,
          margin: 0,
        }}
      >
        Group hikes · Cycling · Camping · Great Rift Valley, Kenya
      </p>
    </div>,
    { ...size }
  );
}
