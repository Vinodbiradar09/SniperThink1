"use client";

import { motion } from "framer-motion";
import { Step } from "@/app/types";

interface ModalHeaderProps {
  step: Step;
  isLoading: boolean;
  onClose: () => void;
}

const ModalHeader = ({ step, isLoading, onClose }: ModalHeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "2rem 2.5rem 1.5rem 2.5rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column" as const,
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              flexShrink: 0,
              backgroundColor: step.accentColor,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: step.accentColor,
            }}
          >
            {step.step} — {step.title}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.375rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          I&apos;m Interested
        </h3>
      </div>

      <motion.button
        onClick={onClose}
        disabled={isLoading}
        whileHover={{
          borderColor: "var(--accent-1)",
          color: "var(--accent-1)",
        }}
        transition={{ duration: 0.15 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
          padding: "0.5rem 0.875rem",
          border: "1px solid var(--border-bright)",
          backgroundColor: "transparent",
          color: "var(--text-muted)",
          cursor: isLoading ? "not-allowed" : "pointer",
          flexShrink: 0,
          marginLeft: "1rem",
        }}
      >
        ESC
      </motion.button>
    </div>
  );
};

export { ModalHeader };
