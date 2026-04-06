import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";
import DifficultyBadge from "@/components/ui/DifficultyBadge";

export interface EventItem {
  _id: string;
  slug: string;
  title: string;
  trail: string;
  activityType: string;
  difficulty: string;
  date: string;
  time: string;
  meetingPoint?: string;
  priceKsh: number;
  description?: string;
  image?: string;
  highlights?: string[];
  whatToBring?: string[];
  includedInPrice?: string[];
  notIncluded?: string[];
  guide?: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-KE", {
    weekday: "long", day: "numeric", month: "long",
  });
}

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group bg-cream rounded-2xl overflow-hidden border border-mist hover:border-fern hover:shadow-md transition-all flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-moss">
        {event.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${event.image}?w=700&q=80`}
            alt={event.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest to-moss" />
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <DifficultyBadge difficulty={event.difficulty} />
          <span className="text-[11px] font-sans font-600 px-2.5 py-1 rounded-full bg-dark/50 text-mist/90">
            {event.activityType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-700 text-dark text-xl leading-snug group-hover:text-moss transition-colors">
          {event.title}
        </h3>

        <div className="space-y-1.5 text-xs font-sans text-dark/55">
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-sage flex-shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-sage flex-shrink-0" />
            <span>Meet at {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-sage flex-shrink-0" />
            <span>{event.trail}</span>
          </div>
        </div>

        {event.description && (
          <p className="body-light text-sm text-dark/60 leading-relaxed line-clamp-2 flex-1">
            {event.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-mist mt-auto">
          <span className="font-sans font-700 text-dark text-base">
            KSh {event.priceKsh.toLocaleString()}
          </span>
          <span className="text-xs font-sans font-500 text-sage group-hover:text-moss transition-colors">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}
