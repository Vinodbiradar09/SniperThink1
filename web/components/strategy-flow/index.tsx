import { StrategyFlowClient } from "./strategy-flow.client";
import { steps } from "@/app/data/steps";

const StrategyFlow = () => {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="px-6 lg:px-16 py-16 lg:py-20"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent)",
                }}
              >
                — How It Works
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                The SniperThink
                <br />
                <span style={{ color: "var(--accent)" }}>Strategy Flow</span>
              </h2>
            </div>

            <p
              className="max-w-sm"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--text-muted)",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
              }}
            >
              Four precision steps that turn scattered data and missed leads
              into a clear, automated growth system.
            </p>
          </div>
        </div>
      </div>

      <StrategyFlowClient steps={steps} />
    </section>
  );
};

export { StrategyFlow };
