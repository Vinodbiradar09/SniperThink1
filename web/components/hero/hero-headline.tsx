import type { ReactNode } from "react";

interface HeroHeadlineProps {
  children: ReactNode;
}

const HeroEyebrow = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          flexShrink: 0,
          background: "linear-gradient(135deg, #00d4aa, #0099ff)",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "var(--text-secondary)",
        }}
      >
        Growth Operating System
      </span>
    </div>
  );
};

const HeroHeadline = ({ children }: HeroHeadlineProps) => {
  return (
    <h1
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "clamp(3rem, 8vw, 6rem)",
        fontWeight: 700,
        color: "var(--text-primary)",
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        margin: 0,
      }}
    >
      {children}
    </h1>
  );
};

const HeroSubheadline = () => {
  return (
    <p
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "1.125rem",
        color: "var(--text-secondary)",
        lineHeight: 1.7,
        maxWidth: "440px",
        margin: 0,
      }}
    >
      SniperThink brings intelligence, automation and direction so you can focus
      on growth, not guesswork.
    </p>
  );
};

export { HeroEyebrow, HeroHeadline, HeroSubheadline };
