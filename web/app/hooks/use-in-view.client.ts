"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface InViewResult {
  ref: React.RefObject<HTMLDivElement>;
  isInView: boolean;
}

const useInViewAnimation = (amount: number = 0.3): InViewResult => {
  const ref = useRef<HTMLDivElement>(null!);

  const isInView = useInView(ref, {
    once: true,
    amount,
  });

  return {
    ref,
    isInView,
  };
};

export { useInViewAnimation };
