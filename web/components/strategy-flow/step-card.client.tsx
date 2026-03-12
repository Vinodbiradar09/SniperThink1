"use client";

import { useInViewAnimation } from "@/app/hooks/use-in-view.client";
import { motion } from "framer-motion";
import { Step } from "@/app/types";
import { useEffect } from "react";

interface StepCardProps {
  step: Step;
  index: number;
  onInterestClick: (step: Step) => void;
  onInView: (index: number) => void;
}

const animationVariants = {
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  rotateIn: {
    hidden: { opacity: 0, rotateX: 45, y: 60 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  },
} as const;

const StepNumber = ({ step }: { step: string }) => {
  return (
    <span
      className="text-xs tracking-widest"
      style={{
        fontFamily: "var(--font-mono)",
        color: "var(--accent)",
      }}
    >
      {step}
    </span>
  );
};

const StepCard = ({
  step,
  index,
  onInterestClick,
  onInView,
}: StepCardProps) => {
  const { ref, isInView } = useInViewAnimation(0.3);
  const variant = animationVariants[step.animationVariant];
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: 1000 }}
    >
      <motion.div
        whileHover={{
          backgroundColor: "var(--surface-hover)",
          borderColor: "var(--accent)",
          transition: { duration: 0.2 },
        }}
        className="relative p-8 lg:p-10"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          cursor: "default",
        }}
      >
        <div
          className="flex items-start justify-between mb-6"
          style={{
            borderBottom: "1px solid var(--border)",
            paddingBottom: "1.5rem",
          }}
        >
          <StepNumber step={step.step} />

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{
              height: "1px",
              backgroundColor: "var(--accent)",
              alignSelf: "center",
              marginLeft: isEven ? "auto" : "0",
              marginRight: isEven ? "0" : "auto",
            }}
          />
        </div>

        <motion.h3
          className="mb-3"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {step.title}
        </motion.h3>

        <p
          className="mb-4"
          style={{
            color: "var(--text-dim)",
            fontSize: "1rem",
            fontFamily: "var(--font-sans)",
            lineHeight: 1.6,
          }}
        >
          {step.description}
        </p>

        <p
          className="mb-8"
          style={{
            color: "var(--text-muted)",
            fontSize: "0.875rem",
            fontFamily: "var(--font-sans)",
            lineHeight: 1.7,
          }}
        >
          {step.detail}
        </p>

        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => onInterestClick(step)}
            whileHover={{
              backgroundColor: "var(--accent)",
              color: "#000000",
              transition: { duration: 0.15 },
            }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              border: "1px solid var(--border-bright)",
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              cursor: "pointer",
            }}
          >
            Im Interested
          </motion.button>

          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              padding: "0.25rem 0.75rem",
            }}
          >
            {step.title}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export { StepCard };
