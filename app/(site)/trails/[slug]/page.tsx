import { notFound } from "next/navigation";
import Link from "next/link";
import { Mountain, Clock, Ruler, ArrowLeft, ExternalLink } from "lucide-react";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import { allTrails } from "@/lib/trails-data";

// When Sanity is populated: replace allTrails with await getTrails()
export async function generateStaticParams() {
  return allTrails.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trail = allTrails.find((t) => t.slug === slug);
  if (!trail) return {};
  return {
    title: `${trail.name} | NNTS Trails`,
    description: trail.description,
  };
}

export default async function TrailDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trail = allTrails.find((t) => t.slug === slug);
  if (!trail) notFound();

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero image */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden bg-moss pt-[72px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${trail.image}?w=1400&q=85`}
          alt={trail.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-dark/30" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <DifficultyBadge difficulty={trail.difficulty} />
              <span className="text-[11px] font-sans font-600 px-2.5 py-1 rounded-full bg-dark/50 text-mist/90">
                {trail.activityType}
              </span>
              <span className="text-[11px] font-sans font-500 px-2.5 py-1 rounded-full bg-dark/40 text-mist/80">
                {trail.region}
              </span>
            </div>
            <h1 className="font-display font-700 text-mist text-4xl sm:text-5xl leading-tight">
              {trail.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back */}
        <Link
          href="/trails"
          className="inline-flex items-center gap-1.5 text-sm font-sans text-sage hover:text-moss transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to all trails
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Ruler, label: "Distance", value: typeof trail.distanceKm === "number" ? `${trail.distanceKm}km` : trail.distanceKm },
                { icon: Clock, label: "Duration", value: trail.durationHours },
                { icon: Mountain, label: "Elevation", value: trail.elevationM },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-sand rounded-xl p-4 text-center">
                  <Icon size={18} className="text-sage mx-auto mb-1.5" />
                  <p className="font-sans font-700 text-dark text-base">{value}</p>
                  <p className="eyebrow mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-display font-700 text-dark text-2xl mb-3">About this trail</h2>
              <p className="body-light text-dark/70 leading-relaxed text-base">{trail.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Book onto an event */}
            <div className="bg-forest rounded-2xl p-6">
              <p className="eyebrow text-malachite/80 mb-2">Ready to hike?</p>
              <h3 className="font-display font-700 text-mist text-xl mb-3">
                Check for upcoming events on this trail
              </h3>
              <Link
                href={`/events?trail=${encodeURIComponent(trail.name)}`}
                className="block text-center py-3 rounded-full bg-gold hover:bg-gold/90 text-dark text-sm font-sans font-600 transition-all hover:-translate-y-px"
              >
                View Events
              </Link>
            </div>

            {/* External links */}
            {trail.externalUrl && (
              <a
                href={trail.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-mist hover:border-fern bg-cream text-sm font-sans font-500 text-dark/70 hover:text-dark transition-colors"
              >
                Official info / KWS page
                <ExternalLink size={14} className="text-sage" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
