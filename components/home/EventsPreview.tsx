import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import DifficultyBadge from "@/components/ui/DifficultyBadge";

const placeholderEvents = [
  {
    id: "1",
    title: "Menengai Crater Summit",
    trail: "Menengai Crater",
    difficulty: "Moderate",
    date: "2026-04-19",
    time: "6:00 AM",
    priceKsh: 1500,
  },
  {
    id: "2",
    title: "Mt. Longonot Rim Challenge",
    trail: "Mt. Longonot",
    difficulty: "Challenging",
    date: "2026-04-26",
    time: "5:30 AM",
    priceKsh: 2000,
  },
  {
    id: "3",
    title: "Hell's Gate MTB Ride",
    trail: "Hell's Gate",
    difficulty: "Moderate",
    date: "2026-05-03",
    time: "7:00 AM",
    priceKsh: 1800,
  },
  {
    id: "4",
    title: "Lake Elementaita Bird Walk",
    trail: "Lake Elementaita",
    difficulty: "Easy",
    date: "2026-05-10",
    time: "6:30 AM",
    priceKsh: 1200,
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-KE", {
    weekday: "short", day: "numeric", month: "short",
  });
}

export default function EventsPreview() {
  return (
    <section className="py-20 bg-sand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">On the calendar</p>
            <h2 className="font-display font-700 text-dark text-4xl lg:text-5xl">
              Upcoming <em className="italic text-sage">adventures</em>
            </h2>
          </div>
          <Link
            href="/events"
            className="hidden sm:flex items-center gap-1.5 text-sm font-sans font-500 text-sage hover:text-moss transition-colors"
          >
            View all <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {placeholderEvents.map((event) => (
            <div key={event.id} className="bg-cream rounded-2xl p-5 flex flex-col gap-4 border border-mist hover:border-fern transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-sans text-forest/60">
                  <Calendar size={12} />
                  <span>{formatDate(event.date)} · {event.time}</span>
                </div>
                <DifficultyBadge difficulty={event.difficulty} />
              </div>

              <div className="flex-1">
                <h3 className="font-display font-700 text-dark text-lg leading-snug mb-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-1 text-xs font-sans text-forest/50">
                  <MapPin size={11} />
                  <span>{event.trail}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-mist">
                <span className="font-sans font-600 text-sm text-dark">
                  KSh {event.priceKsh.toLocaleString()}
                </span>
                <Link
                  href="/events"
                  className="px-4 py-1.5 rounded-full bg-forest hover:bg-moss text-mist text-xs font-sans font-500 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/events" className="inline-flex items-center gap-1.5 text-sm font-sans font-500 text-sage">
            View all events <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
