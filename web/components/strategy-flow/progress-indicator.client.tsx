"use client";

import { motion, type MotionValue } from "framer-motion";
import { Step } from "@/app/types";

interface ProgressIndicatorProps {
  steps: Step[];
  activeStep: number;
  progressHeight: MotionValue<string>;
}

const StepDot = ({
  step,
  isActive,
  isCompleted,
}: {
  step: Step;
  isActive: boolean;
  isCompleted: boolean;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{
            backgroundColor:
              isCompleted || isActive ? "#e8ff00" : "transparent",
            borderColor: isCompleted || isActive ? "#e8ff00" : "#333333",
            scale: isActive ? 1.2 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            width: "10px",
            height: "10px",
            border: "1px solid",
            flexShrink: 0,
          }}
        />
      </div>
      <motion.span
        animate={{
          color: isActive ? "#e8ff00" : isCompleted ? "#f5f5f5" : "#666666",
        }}
        transition={{ duration: 0.3 }}
        className="text-xs tracking-widest uppercase"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {step.step} — {step.title}
      </motion.span>
    </div>
  );
};

const ProgressIndicator = ({
  steps,
  activeStep,
  progressHeight,
}: ProgressIndicatorProps) => {
  return (
    <div className="sticky top-1/4 hidden lg:flex flex-col gap-6">
      <span
        className="text-xs tracking-widest uppercase mb-2"
        style={{
          color: "var(--text-muted)",
          fontFamily: "var(--font-mono)",
        }}
      >
        Progress
      </span>

      <div className="flex gap-4">
        <div
          className="relative flex flex-col"
          style={{
            width: "1px",
            backgroundColor: "var(--border)",
          }}
        >
          <motion.div
            style={{
              height: progressHeight,
              width: "1px",
              backgroundColor: "var(--accent)",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <StepDot
              key={step.id}
              step={step}
              isActive={activeStep === index}
              isCompleted={activeStep > index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProgressIndicator };
