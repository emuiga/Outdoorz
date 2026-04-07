import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "#1B3D2A",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "36px",
        gap: 4,
      }}
    >
      <span
        style={{
          color: "#C8A84B",
          fontSize: 90,
          fontWeight: 800,
          fontFamily: "Georgia, serif",
          lineHeight: 1,
        }}
      >
        N
      </span>
      <span
        style={{
          color: "#EEE8D2",
          fontSize: 18,
          fontWeight: 600,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "0.15em",
          opacity: 0.75,
        }}
      >
        NNTS
      </span>
    </div>,
    { ...size }
  );
}
