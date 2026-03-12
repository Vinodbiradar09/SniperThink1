"use client";

import { motion } from "framer-motion";

interface StepContentProps {
  title: string;
  description: string;
  detail: string;
  accentColor: string;
  isInView: boolean;
  watermarkNumber: string;
}

const StepContent = ({
  title,
  description,
  detail,
  isInView,
  watermarkNumber,
}: StepContentProps) => {
  return (
    <div className="relative flex flex-col gap-4 py-6">
      <span
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(5rem, 12vw, 9rem)",
          fontWeight: 700,
          color: "var(--text-dim)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
          opacity: 0.4,
        }}
      >
        {watermarkNumber}
      </span>

      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          position: "relative",
          zIndex: 1,
        }}
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1.0625rem",
          color: "var(--text-primary)",
          lineHeight: 1.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        {description}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          position: "relative",
          zIndex: 1,
        }}
      >
        {detail}
      </motion.p>
    </div>
  );
};

export { StepContent };
