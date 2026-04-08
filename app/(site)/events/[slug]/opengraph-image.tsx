import { ImageResponse } from "next/og";
import { allEvents } from "@/lib/events-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-KE", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function EventOGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = allEvents.find((e) => e.slug === slug);

  const title = event?.title ?? "Upcoming Event";
  const dateLabel = event?.date ? formatDate(event.date) : "";
  const price = event?.priceKsh ? `KSh ${event.priceKsh.toLocaleString()}` : "";
  const activityType = event?.activityType ?? "";
  const imageUrl = event?.image ? `${event.image.split("?")[0]}?w=1200&q=80` : null;

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
            opacity: 0.3,
          }}
        />
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(27,61,42,0.97) 0%, rgba(27,61,42,0.65) 55%, rgba(27,61,42,0.4) 100%)",
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
            Roam · Events
          </span>
        </div>

        {/* Middle — event title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {activityType && (
            <span
              style={{
                color: "#C8A84B",
                fontSize: 16,
                fontWeight: 700,
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {activityType} Event
            </span>
          )}
          <h1
            style={{
              color: "#EEE8D2",
              fontSize: title.length > 28 ? 52 : 64,
              fontWeight: 800,
              fontFamily: "Georgia, serif",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Bottom — date + price + CTA */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 14 }}>
            {dateLabel && (
              <div style={{ background: "rgba(238,232,210,0.12)", borderRadius: 100, padding: "10px 22px" }}>
                <span style={{ color: "#EEE8D2", fontSize: 15, fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
                  📅 {dateLabel}
                </span>
              </div>
            )}
            {price && (
              <div style={{ background: "#C8A84B", borderRadius: 100, padding: "10px 22px" }}>
                <span style={{ color: "#1B3D2A", fontSize: 15, fontFamily: "system-ui, sans-serif", fontWeight: 700 }}>
                  {price} / person
                </span>
              </div>
            )}
          </div>
          <span style={{ color: "rgba(238,232,210,0.4)", fontSize: 15, fontFamily: "system-ui, sans-serif" }}>
            roamadventures.co.ke
          </span>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
