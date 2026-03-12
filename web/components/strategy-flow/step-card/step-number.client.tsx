"use client";

import { motion } from "framer-motion";

interface StepNumberProps {
  step: string;
  accentColor: string;
  isInView: boolean;
}

const StepNumber = ({ step, accentColor, isInView }: StepNumberProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: accentColor,
        }}
      >
        {step}
      </motion.span>

      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "3rem" } : { width: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        style={{
          height: "1px",
          background: `linear-gradient(90deg, ${accentColor}, transparent)`,
        }}
      />
    </div>
  );
};

export { StepNumber };
