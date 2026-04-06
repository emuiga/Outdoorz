const styles: Record<string, string> = {
  Easy:        "bg-malachite/15 text-malachite",
  Moderate:    "bg-gold/15 text-gold",
  Challenging: "bg-ember/15 text-ember",
};

export default function DifficultyBadge({ difficulty }: { difficulty: string }) {
  return (
    <span className={`text-[11px] font-sans font-600 px-2.5 py-1 rounded-full ${styles[difficulty] ?? "bg-mist/20 text-dark"}`}>
      {difficulty}
    </span>
  );
}
