import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PrivateHikesClient from "@/components/private-hikes/PrivateHikesClient";

export const metadata: Metadata = {
  title: "Private Hikes | Nakuru Nature Trails & Summits",
  description:
    "Organise a private hike for your group. We handle the planning, guiding and logistics — you just show up and hike.",
};

export default function PrivateHikesPage() {
  return (
    <div className="bg-sand min-h-screen">
      <PageHeader
        eyebrow="Just for your crew"
        title="Private"
        titleAccent="hikes"
        description="Got a group that wants to hit the trails on your own terms? We handle the planning, the guide, and the logistics. You just show up."
      />
      <PrivateHikesClient />
    </div>
  );
}
