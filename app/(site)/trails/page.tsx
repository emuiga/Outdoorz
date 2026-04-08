import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import TrailsClient from "@/components/trails/TrailsClient";
import { allTrails } from "@/lib/trails-data";

export const metadata: Metadata = {
  title: "Trails | Roam Adventures",
  description: "Explore hiking trails, nature walks and camping spots across Kenya — from the Rift Valley to Mt. Kenya.",
};

export default function TrailsPage() {
  return (
    <div className="bg-sand min-h-screen">
      <PageHeader
        eyebrow="All routes"
        title="Trails across"
        titleAccent="Kenya"
        description="From the crater rim of Menengai to the rainforests of Kakamega — 28 trails covering the length and breadth of Kenya, including the hidden gems."
      />
      <TrailsClient trails={allTrails} />
    </div>
  );
}
