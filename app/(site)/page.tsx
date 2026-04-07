import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ActivitiesGrid from "@/components/home/ActivitiesGrid";
import GalleryStrip from "@/components/home/GalleryStrip";
import EventsPreview from "@/components/home/EventsPreview";
import CommunitySection from "@/components/home/CommunitySection";
import PastHikes from "@/components/home/PastHikes";

export const metadata: Metadata = {
  title: "Nakuru Nature Trails & Summits | Kenya Hiking Community",
  description:
    "Join Kenya's most active hiking community. Guided group hikes, cycling rides, camping and bird walks across the Great Rift Valley — every weekend. All fitness levels welcome.",
  keywords: [
    "hiking Kenya",
    "Nakuru hikes",
    "Rift Valley trails",
    "Kenya outdoor adventures",
    "group hiking",
    "Mt Longonot",
    "Menengai Crater",
    "Hell's Gate cycling",
  ],
  openGraph: {
    title: "Nakuru Nature Trails & Summits | Kenya Hiking Community",
    description:
      "Join Kenya's most active hiking community. Guided group hikes, cycling and adventures across the Great Rift Valley — every weekend.",
    url: siteUrl,
    type: "website",
  },
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ActivitiesGrid />
      <GalleryStrip />
      <EventsPreview />
      <CommunitySection />
      <PastHikes />
    </>
  );
}
