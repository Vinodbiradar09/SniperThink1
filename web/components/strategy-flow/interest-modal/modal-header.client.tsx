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
      className="flex items-start justify-between px-8 py-6"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: step.accentColor,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
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
          }}
        >
          Im Interested
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
          textTransform: "uppercase",
          padding: "0.5rem 0.875rem",
          border: "1px solid var(--border-bright)",
          backgroundColor: "transparent",
          color: "var(--text-muted)",
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        ESC
      </motion.button>
    </div>
  );
};

export { ModalHeader };
