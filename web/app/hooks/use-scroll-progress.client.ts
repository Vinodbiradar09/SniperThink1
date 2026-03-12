"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollProgressResult {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
  progressHeight: MotionValue<string>;
  progressOpacity: MotionValue<number>;
}

const useScrollProgress = (): ScrollProgressResult => {
  const containerRef = useRef<HTMLDivElement>(null!);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const progressOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0],
  );

  return {
    containerRef,
    scrollYProgress,
    progressHeight,
    progressOpacity,
  };
};

export { useScrollProgress };
