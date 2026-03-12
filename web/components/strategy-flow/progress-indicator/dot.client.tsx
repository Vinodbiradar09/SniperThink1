"use client";

import { motion } from "framer-motion";

interface DotProps {
  isActive: boolean;
  isCompleted: boolean;
  accentColor: string;
}

const Dot = ({ isActive, isCompleted, accentColor }: DotProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: isCompleted || isActive ? accentColor : "transparent",
        borderColor: isCompleted || isActive ? accentColor : "#262626",
        scale: isActive ? 1.3 : 1,
        boxShadow: isActive ? `0 0 8px ${accentColor}60` : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        width: "8px",
        height: "8px",
        border: "1px solid",
        flexShrink: 0,
      }}
    />
  );
};

export { Dot };
