import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#1B3D2A",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nakuru Nature Trails & Summits",
    template: "%s | NNTS",
  },
  description:
    "Kenya's premier hiking community based in Nakuru. Group hikes, cycling, camping and bird walks in the Great Rift Valley. Join us — no experience needed.",
  keywords: [
    "hiking Kenya",
    "Nakuru hikes",
    "Rift Valley trails",
    "group hiking Kenya",
    "Mt Longonot hike",
    "Menengai Crater hike",
    "outdoor adventures Kenya",
    "cycling Nakuru",
    "camping Kenya",
    "NNTS",
  ],
  authors: [{ name: "Nakuru Nature Trails & Summits", url: siteUrl }],
  creator: "NNTS",
  publisher: "Nakuru Nature Trails & Summits",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nakuru Nature Trails & Summits",
    description:
      "Meet new friends, explore breathtaking trails, create unforgettable memories in Kenya's Great Rift Valley.",
    url: siteUrl,
    siteName: "NNTS",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nakuru Nature Trails & Summits — Kenya hiking community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakuru Nature Trails & Summits",
    description:
      "Kenya's premier hiking community. Group hikes, cycling and adventures in the Great Rift Valley.",
    images: ["/opengraph-image"],
    creator: "@NNTS_Kenya",
    site: "@NNTS_Kenya",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // google: "your-google-site-verification-token",
  },
  category: "sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-dark font-sans">
        {children}
      </body>
    </html>
  );
}
