import Link from "next/link";
import { Mountain, Clock, Ruler, ExternalLink } from "lucide-react";
import DifficultyBadge from "@/components/ui/DifficultyBadge";

interface Trail {
  _id: string;
  slug: string;
  name: string;
  difficulty: string;
  activityType: string;
  distanceKm: number | string;
  durationHours: string;
  elevationM: string;
  description: string;
  image: string;
  region?: string;
  externalUrl?: string;
}

export default function TrailCard({ trail }: { trail: Trail }) {
  return (
    <Link
      href={`/trails/${trail.slug}`}
      className="group bg-cream rounded-2xl overflow-hidden border border-mist hover:border-fern hover:shadow-md transition-all flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${trail.image}?w=700&q=80`}
          alt={trail.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <DifficultyBadge difficulty={trail.difficulty} />
          <span className="text-[11px] font-sans font-600 px-2.5 py-1 rounded-full bg-dark/50 text-mist/90">
            {trail.activityType}
          </span>
        </div>
        {trail.region && (
          <span className="absolute bottom-3 right-3 text-[10px] font-sans font-500 px-2 py-1 rounded-full bg-dark/60 text-mist/80">
            {trail.region}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-700 text-dark text-xl leading-snug group-hover:text-moss transition-colors">
            {trail.name}
          </h3>
          {trail.externalUrl && (
            <ExternalLink size={14} className="text-fern flex-shrink-0 mt-1" />
          )}
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-sans text-forest/60">
          {trail.distanceKm && (
            <span className="flex items-center gap-1">
              <Ruler size={12} />
              {typeof trail.distanceKm === "number" ? `${trail.distanceKm}km` : trail.distanceKm}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Clock size={12} /> {trail.durationHours}
          </span>
          <span className="flex items-center gap-1">
            <Mountain size={12} /> {trail.elevationM}
          </span>
        </div>

        <p className="body-light text-sm text-dark/65 leading-relaxed flex-1 line-clamp-3">
          {trail.description}
        </p>

        <span className="text-xs font-sans font-500 text-sage group-hover:text-moss transition-colors mt-1">
          View trail details →
        </span>
      </div>
    </Link>
  );
}
