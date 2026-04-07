import { ImageResponse } from "next/og";
import { allProducts } from "@/lib/products-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProductOGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);

  const name = product?.name ?? "NNTS Merch";
  const category = product?.category ?? "Shop";
  const price = product?.price ? `KSh ${product.price.toLocaleString()}` : "";
  const originalPrice = product?.originalPrice
    ? `KSh ${product.originalPrice.toLocaleString()}`
    : null;
  const sizes = product?.sizes ?? [];
  const imageUrl = product?.image ? `${product.image.split("?")[0]}?w=600&q=80` : null;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#1B3D2A",
      }}
    >
      {/* Left panel — product info */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 60px 60px 72px",
        }}
      >
        {/* Brand */}
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
            <span style={{ color: "#1B3D2A", fontSize: 24, fontWeight: 800, fontFamily: "Georgia, serif" }}>N</span>
          </div>
          <span style={{ color: "rgba(238,232,210,0.7)", fontSize: 16, fontFamily: "system-ui, sans-serif", fontWeight: 600, letterSpacing: "0.05em" }}>
            NNTS Store
          </span>
        </div>

        {/* Product info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              color: "#C8A84B",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {category}
          </span>
          <h1
            style={{
              color: "#EEE8D2",
              fontSize: name.length > 22 ? 46 : 56,
              fontWeight: 800,
              fontFamily: "Georgia, serif",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {name}
          </h1>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ color: "#EEE8D2", fontSize: 36, fontWeight: 700, fontFamily: "system-ui, sans-serif" }}>
              {price}
            </span>
            {originalPrice && (
              <span style={{ color: "rgba(238,232,210,0.35)", fontSize: 22, fontFamily: "system-ui, sans-serif", textDecoration: "line-through" }}>
                {originalPrice}
              </span>
            )}
          </div>

          {/* Sizes */}
          {sizes.length > 0 && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {sizes.map((s) => (
                <span
                  key={s}
                  style={{
                    border: "1.5px solid rgba(238,232,210,0.25)",
                    borderRadius: 6,
                    padding: "5px 12px",
                    color: "rgba(238,232,210,0.65)",
                    fontSize: 14,
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              background: "#C8A84B",
              borderRadius: 100,
              padding: "12px 28px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#1B3D2A", fontSize: 15, fontWeight: 700, fontFamily: "system-ui, sans-serif" }}>
              Order via WhatsApp
            </span>
          </div>
          <span style={{ color: "rgba(238,232,210,0.35)", fontSize: 14, fontFamily: "system-ui, sans-serif" }}>
            nnts.co.ke/shop
          </span>
        </div>
      </div>

      {/* Right panel — product image */}
      <div
        style={{
          width: 420,
          position: "relative",
          overflow: "hidden",
          background: "#EEE8D2",
        }}
      >
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "#2D5E3E" }} />
        )}
        {/* Gradient fade on left edge */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #1B3D2A 0%, transparent 30%)",
          }}
        />
      </div>
    </div>,
    { ...size }
  );
}
