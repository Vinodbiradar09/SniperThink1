"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollProgressResult {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
  progressHeight: MotionValue<string>;
}

const useScrollProgress = (): ScrollProgressResult => {
  const containerRef = useRef<HTMLDivElement>(null!);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return {
    containerRef,
    scrollYProgress,
    progressHeight,
  };
};

export { useScrollProgress };
