"use client";

import { motion } from "framer-motion";
import { Step } from "@/app/types";

interface StepActionsProps {
  step: Step;
  isInView: boolean;
  onInterestClick: (step: Step) => void;
}

const StepActions = ({ step, isInView, onInterestClick }: StepActionsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: 0.55 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <motion.button
        onClick={() => onInterestClick(step)}
        whileHover={{
          background: "linear-gradient(135deg, #00d4aa 0%, #0099ff 100%)",
          color: "#000000",
          borderColor: "transparent",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
          padding: "0.75rem 1.5rem",
          border: "1px solid var(--border-bright)",
          backgroundColor: "transparent",
          color: "var(--text-primary)",
          cursor: "pointer",
        }}
      >
        Im Interested
      </motion.button>

      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
          color: "var(--text-muted)",
          border: "1px solid var(--border)",
          padding: "0.4rem 0.875rem",
        }}
      >
        {step.title}
      </span>
    </motion.div>
  );
};

export { StepActions };
