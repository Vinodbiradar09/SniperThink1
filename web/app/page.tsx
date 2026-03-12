import { StrategyFlow } from "../components/strategy-flow/index";
import { Suspense } from "react";
import Link from "next/link";

const StrategyFlowFallback = () => {
  return (
    <div
      className="w-full py-24 px-6 lg:px-16"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div
          className="h-4 w-32 mb-8"
          style={{ backgroundColor: "var(--surface)" }}
        />
        <div
          className="h-12 w-96"
          style={{ backgroundColor: "var(--surface)" }}
        />
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-full h-64"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <main
      style={{
        backgroundColor: "var(--bg)",
        minHeight: "100vh",
      }}
    >
      <div
        className="px-6 lg:px-16 py-24 lg:py-32"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent)",
            }}
          >
            Growth Operating System
          </span>

          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              maxWidth: "900px",
            }}
          >
            Stop Reacting.
            <br />
            <span style={{ color: "var(--accent)" }}>Start Leading.</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            SniperThink brings intelligence, automation and direction so you can
            focus on growth, not guesswork.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="#how-it-works"
              className="px-8 py-4 text-xs tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                backgroundColor: "var(--accent)",
                color: "#000000",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              See How It Works
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-4 text-xs tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                backgroundColor: "transparent",
                color: "var(--text-primary)",
                border: "1px solid var(--border-bright)",
                textDecoration: "none",
              }}
            >
              Our Strategy
            </Link>
          </div>
        </div>
      </div>

      <Suspense fallback={<StrategyFlowFallback />}>
        <StrategyFlow />
      </Suspense>

      <div
        className="px-6 lg:px-16 py-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
            }}
          >
            SniperThink
          </span>
          <span
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
            }}
          >
            Clarity before it is too late.
          </span>
        </div>
      </div>
    </main>
  );
}
