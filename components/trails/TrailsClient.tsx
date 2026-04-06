"use client";

import { useState } from "react";
import TrailCard from "./TrailCard";

type Difficulty = "All" | "Easy" | "Moderate" | "Challenging";
type ActivityType = "All" | "Hiking" | "Walk" | "Camping";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TrailsClient({ trails }: { trails: any[] }) {
  const [difficulty, setDifficulty] = useState<Difficulty>("All");
  const [activity, setActivity] = useState<ActivityType>("All");

  const filtered = trails.filter((t) => {
    const diffMatch = difficulty === "All" || t.difficulty === difficulty;
    const actMatch = activity === "All" || t.activityType === activity;
    return diffMatch && actMatch;
  });

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-[72px] z-20 bg-cream/95 border-b border-mist py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
          {/* Difficulty */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="eyebrow mr-1 hidden sm:block">Difficulty</span>
            {(["All", "Easy", "Moderate", "Challenging"] as Difficulty[]).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-500 transition-colors ${
                  difficulty === d
                    ? "bg-forest text-mist"
                    : "bg-mist/60 text-dark/70 hover:bg-mist"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="h-5 w-px bg-mist self-center hidden sm:block" />

          {/* Activity type */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="eyebrow mr-1 hidden sm:block">Type</span>
            {(["All", "Hiking", "Walk", "Camping"] as ActivityType[]).map((a) => (
              <button
                key={a}
                onClick={() => setActivity(a)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-500 transition-colors ${
                  activity === a
                    ? "bg-forest text-mist"
                    : "bg-mist/60 text-dark/70 hover:bg-mist"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <p className="text-center py-20 font-sans text-dark/40">
            No trails match your filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((trail) => (
              <TrailCard key={trail._id} trail={trail} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
