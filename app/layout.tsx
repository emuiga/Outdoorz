import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Nakuru Nature Trails & Summits",
  description:
    "Kenya's premier outdoor adventure community based in Nakuru. Group hikes, cycling, bird walks and night hikes in the Great Rift Valley.",
  keywords: ["hiking", "Nakuru", "Kenya", "trails", "Rift Valley", "outdoor", "cycling"],
  openGraph: {
    title: "Nakuru Nature Trails & Summits",
    description: "Meet new friends, explore breathtaking trails, create unforgettable memories.",
    siteName: "NNTS",
    locale: "en_KE",
    type: "website",
  },
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
