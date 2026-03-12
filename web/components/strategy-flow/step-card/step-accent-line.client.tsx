"use client";

import { motion } from "framer-motion";

interface StepAccentLineProps {
  accentColor: string;
  isInView: boolean;
}

const StepAccentLine = ({ accentColor, isInView }: StepAccentLineProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "1px",
        backgroundColor: "var(--border)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background: `linear-gradient(90deg, ${accentColor}, transparent)`,
        }}
      />
    </div>
  );
};

export { StepAccentLine };
