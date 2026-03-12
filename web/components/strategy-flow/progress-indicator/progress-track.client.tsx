"use client";

import { motion, type MotionValue } from "framer-motion";

interface ProgressTrackProps {
  progressHeight: MotionValue<string>;
  progressOpacity: MotionValue<number>;
}

const ProgressTrack = ({
  progressHeight,
  progressOpacity,
}: ProgressTrackProps) => {
  return (
    <motion.div
      style={{
        opacity: progressOpacity,
        position: "relative",
        width: "1px",
      }}
    >
      <div
        style={{
          width: "1px",
          height: "100%",
          backgroundColor: "var(--border-bright)",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <motion.div
        style={{
          height: progressHeight,
          width: "1px",
          background: "linear-gradient(180deg, #00d4aa 0%, #0099ff 100%)",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </motion.div>
  );
};

export { ProgressTrack };
