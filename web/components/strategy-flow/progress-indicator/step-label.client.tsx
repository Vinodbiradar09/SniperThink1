"use client";

import { motion } from "framer-motion";
import { Step } from "@/app/types";

interface StepLabelProps {
  step: Step;
  isActive: boolean;
  isCompleted: boolean;
}

const StepLabel = ({ step, isActive, isCompleted }: StepLabelProps) => {
  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : isCompleted ? 0.6 : 0.3,
      }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-0.5"
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: isActive ? step.accentColor : "var(--text-secondary)",
        }}
      >
        {step.step}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: isActive ? "var(--text-primary)" : "var(--text-muted)",
        }}
      >
        {step.title}
      </span>
    </motion.div>
  );
};

export { StepLabel };
