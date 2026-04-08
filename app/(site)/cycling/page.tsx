import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import EventsClient from "@/components/events/EventsClient";
import { allEvents } from "@/lib/events-data";

export const metadata: Metadata = {
  title: "Cycling | Roam Adventures",
  description: "Group cycling events around Nakuru and the Great Rift Valley. Road, gravel and MTB rides for all levels.",
};

const cyclingEvents = allEvents.filter((e) => e.activityType === "Cycling");

export default function CyclingPage() {
  return (
    <div className="bg-sand min-h-screen">
      <PageHeader
        eyebrow="Two wheels"
        title="Cycling"
        titleAccent="rides"
        description="Group rides through the Rift Valley — MTB, road and gravel. Click any ride for the full breakdown."
      />
      <EventsClient
        events={cyclingEvents}
        activityTypes={["All"]}
        showActivityFilter={false}
        showDifficultyFilter
        emptyMessage="No upcoming cycling events. Check back soon."
      />
    </div>
  );
}
