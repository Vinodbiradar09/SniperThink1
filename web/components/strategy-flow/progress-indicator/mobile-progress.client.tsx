"use client";

import { motion } from "framer-motion";
import { Step } from "@/app/types";

interface MobileProgressProps {
  steps: Step[];
  activeStep: number;
}

const MobileProgress = ({ steps, activeStep }: MobileProgressProps) => {
  return (
    <div className="flex lg:hidden items-center gap-2 mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-2 flex-1">
          <motion.div
            animate={{
              background:
                activeStep >= index
                  ? "linear-gradient(135deg, #00d4aa, #0099ff)"
                  : "var(--border-bright)",
            }}
            transition={{ duration: 0.4 }}
            style={{
              height: "2px",
              flex: 1,
            }}
          />
          <motion.span
            animate={{
              color:
                activeStep === index ? step.accentColor : "var(--text-muted)",
              scale: activeStep === index ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              flexShrink: 0,
            }}
          >
            {step.step}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export { MobileProgress };
