export type Difficulty = "Easy" | "Moderate" | "Challenging";
export type ActivityType = "Hiking" | "Cycling" | "Walk" | "Camping";

export interface TrailEvent {
  id: string;
  title: string;
  trail: string;
  activityType: ActivityType;
  difficulty: Difficulty;
  date: string;
  time: string;
  spotsTotal: number;
  spotsRemaining: number;
  priceKsh: number;
  image: string;
  description?: string;
}

export interface Trail {
  id: string;
  slug: string;
  name: string;
  difficulty: Difficulty;
  activityType: ActivityType;
  distanceKm: number;
  durationHours: string;
  elevationM: string;
  image: string;
  description: string;
  featured?: boolean;
}
