import { StrategyFlowClient } from "./strategy-flow.client";
import { steps } from "@/app/data/steps";
import { Suspense } from "react";

const StrategyFlowFallback = () => {
  return (
    <div style={{ padding: "4rem 0" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "1.25rem",
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="shimmer"
              style={{
                width: "100%",
                height: "280px",
                border: "1px solid var(--border)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StrategyFlowHeader = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "1.25rem",
            }}
          >
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
                How It Works
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "600px",
              }}
            >
              The SniperThink
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #00d4aa 0%, #0099ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Strategy Flow
              </span>
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "420px",
              margin: 0,
            }}
          >
            Four precision steps that turn scattered data and missed leads into
            a clear, automated growth system.
          </p>
        </div>
      </div>
    </div>
  );
};

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
      <StrategyFlowHeader />
      <Suspense fallback={<StrategyFlowFallback />}>
        <StrategyFlowClient steps={steps} />
      </Suspense>
    </section>
  );
};

export { StrategyFlow };
