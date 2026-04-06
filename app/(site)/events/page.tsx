import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import EventsClient from "@/components/events/EventsClient";
import { allEvents } from "@/lib/events-data";

export const metadata: Metadata = {
  title: "Events | Nakuru Nature Trails & Summits",
  description: "Upcoming group hikes, nature walks and camping trips. Book your spot.",
};

const hikingEvents = allEvents.filter((e) => e.activityType !== "Cycling");

export default function EventsPage() {
  return (
    <div className="bg-sand min-h-screen">
      <PageHeader
        eyebrow="On the calendar"
        title="Upcoming"
        titleAccent="adventures"
        description="All group outings — hikes, walks and camping trips. Click any event for full details, then book your spot."
      />
      <EventsClient
        events={hikingEvents}
        activityTypes={["All", "Hiking", "Walk", "Camping"]}
        showActivityFilter
        showDifficultyFilter
      />
    </div>
  );
}
