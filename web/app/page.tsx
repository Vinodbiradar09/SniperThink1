import { StrategyFlow } from "../components/strategy-flow/index";
import { Hero } from "../components/hero/index";

const FooterDivider = () => {
  return (
    <div
      style={{
        height: "1px",
        background:
          "linear-gradient(90deg, transparent, #00d4aa, #0099ff, transparent)",
        opacity: 0.25,
      }}
    />
  );
};

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap" as const,
            gap: "1rem",
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
                background: "linear-gradient(135deg, #00d4aa, #0099ff)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
              }}
            >
              SniperThink
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            Clarity before it is too late.
          </span>
        </div>
      </div>
    </footer>
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
      <Hero />
      <FooterDivider />
      <StrategyFlow />
      <Footer />
    </main>
  );
}
