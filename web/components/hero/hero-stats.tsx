interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "6-Layer", label: "Intelligence System" },
  { value: "24/7", label: "AI Agent Coverage" },
  { value: "Real-Time", label: "Lead Qualification" },
];

const HeroStat = ({ stat }: { stat: Stat }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column" as const,
        gap: "0.375rem",
        padding: "0 2rem",
        borderLeft: "1px solid var(--border)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
        }}
      >
        {stat.value}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.8125rem",
          color: "var(--text-muted)",
        }}
      >
        {stat.label}
      </span>
    </div>
  );
};

const HeroStats = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap" as const,
        gap: "0",
      }}
    >
      {stats.map((stat) => (
        <HeroStat key={stat.label} stat={stat} />
      ))}
    </div>
  );
};

export { HeroStats };
