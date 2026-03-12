import { HeroEyebrow, HeroHeadline, HeroSubheadline } from "./hero-headline";
import { HeroCta } from "./hero-cta.client";
import { HeroStats } from "./hero-stats";
import { Suspense } from "react";

const HeroCtaFallback = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div className="shimmer" style={{ width: "160px", height: "48px" }} />
      <div className="shimmer" style={{ width: "140px", height: "48px" }} />
    </div>
  );
};

const Hero = () => {
  return (
    <section
      style={{
        borderBottom: "1px solid var(--border)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            maxWidth: "820px",
          }}
        >
          <HeroEyebrow />
          <HeroHeadline>
            Stop Reacting.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00d4aa 0%, #0099ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Start Leading.
            </span>
          </HeroHeadline>
          <HeroSubheadline />
          <Suspense fallback={<HeroCtaFallback />}>
            <HeroCta />
          </Suspense>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: "4rem",
            paddingTop: "2.5rem",
          }}
        >
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

export { Hero };
