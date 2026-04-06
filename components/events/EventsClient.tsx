"use client";

import { useState } from "react";
import EventCard from "./EventCard";

type ActivityFilter = "All" | "Hiking" | "Walk" | "Camping" | "Cycling";
type DifficultyFilter = "All" | "Easy" | "Moderate" | "Challenging";

interface EventsClientProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events: any[];
  activityTypes?: ActivityFilter[];
  showActivityFilter?: boolean;
  showDifficultyFilter?: boolean;
  emptyMessage?: string;
}

export default function EventsClient({
  events,
  activityTypes = ["All", "Hiking", "Walk", "Camping"],
  showActivityFilter = true,
  showDifficultyFilter = true,
  emptyMessage = "No upcoming events right now. Check back soon.",
}: EventsClientProps) {
  const [activity, setActivity] = useState<ActivityFilter>("All");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("All");

  const filtered = events.filter((e) => {
    const actMatch = activity === "All" || e.activityType === activity;
    const diffMatch = difficulty === "All" || e.difficulty === difficulty;
    return actMatch && diffMatch;
  });

  const hasFilters = showActivityFilter || showDifficultyFilter;

  return (
    <div>
      {/* Filter bar */}
      {hasFilters && (
        <div className="sticky top-[72px] z-20 bg-sand/95 border-b border-mist py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
            {showActivityFilter && activityTypes.length > 1 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="eyebrow mr-1 hidden sm:block">Type</span>
                {activityTypes.map((a) => (
                  <button
                    key={a}
                    onClick={() => setActivity(a)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-500 transition-colors ${
                      activity === a
                        ? "bg-forest text-mist"
                        : "bg-mist text-dark/70 hover:bg-fern/30"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            )}

            {showActivityFilter && showDifficultyFilter && activityTypes.length > 1 && (
              <div className="h-5 w-px bg-fern/30 self-center hidden sm:block" />
            )}

            {showDifficultyFilter && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="eyebrow mr-1 hidden sm:block">Difficulty</span>
                {(["All", "Easy", "Moderate", "Challenging"] as DifficultyFilter[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-500 transition-colors ${
                      difficulty === d
                        ? "bg-forest text-mist"
                        : "bg-mist text-dark/70 hover:bg-fern/30"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-sans text-dark/40 text-sm">{emptyMessage}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
