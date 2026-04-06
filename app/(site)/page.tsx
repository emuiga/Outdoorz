import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ActivitiesGrid from "@/components/home/ActivitiesGrid";
import GalleryStrip from "@/components/home/GalleryStrip";
import EventsPreview from "@/components/home/EventsPreview";
import CommunitySection from "@/components/home/CommunitySection";
import PastHikes from "@/components/home/PastHikes";

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
