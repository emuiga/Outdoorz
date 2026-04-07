import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nakuru Nature Trails & Summits",
    short_name: "NNTS",
    description:
      "Kenya's premier hiking community. Group hikes, cycling and outdoor adventures in the Great Rift Valley.",
    start_url: "/",
    display: "standalone",
    background_color: "#1B3D2A",
    theme_color: "#1B3D2A",
    orientation: "portrait",
    categories: ["sports", "travel", "lifestyle"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
