"use client";

import { useInViewAnimation } from "@/app/hooks/use-in-view.client";
import { StepAccentLine } from "./step-accent-line.client";
import { StepContent } from "./step-content.client";
import { StepActions } from "./step-actions.client";
import { StepNumber } from "./step-number.client";
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
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
  rotateIn: {
    hidden: { opacity: 0, rotateX: 30, y: 50 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  },
} as const;

const StepCard = ({
  step,
  index,
  onInterestClick,
  onInView,
}: StepCardProps) => {
  const { ref, isInView } = useInViewAnimation(0.25);
  const variant = animationVariants[step.animationVariant];

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
      style={{ perspective: 1200 }}
    >
      <motion.div
        whileHover={{
          borderColor: step.accentColor,
          boxShadow: `0 0 30px ${step.accentColor}15`,
          transition: { duration: 0.25 },
        }}
        className="relative flex flex-col px-6 lg:px-10 pb-8"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <StepAccentLine accentColor={step.accentColor} isInView={isInView} />

        <div className="pt-6">
          <StepNumber
            step={step.step}
            accentColor={step.accentColor}
            isInView={isInView}
          />
        </div>

        <StepContent
          title={step.title}
          description={step.description}
          detail={step.detail}
          accentColor={step.accentColor}
          isInView={isInView}
          watermarkNumber={step.step}
        />

        <StepActions
          step={step}
          isInView={isInView}
          onInterestClick={onInterestClick}
        />
      </motion.div>
    </motion.div>
  );
};

export { StepCard };
