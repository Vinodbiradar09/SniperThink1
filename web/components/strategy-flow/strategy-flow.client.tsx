"use client";

import { useScrollProgress } from "@/app/hooks/use-scroll-progress.client";
import { ProgressIndicator } from "./progress-indicator.client";
import { InterestModal } from "./interest-modal.client";
import { useState, useCallback } from "react";
import { StepCard } from "./step-card.client";
import { motion } from "framer-motion";
import { Step } from "@/app/types";

interface StrategyFlowClientProps {
  steps: Step[];
}

const StrategyFlowClient = ({ steps }: StrategyFlowClientProps) => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  const { containerRef, progressHeight } = useScrollProgress();

  const handleInterestClick = useCallback((step: Step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedStep(null);
  }, []);

  const handleStepInView = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  return (
    <>
      <div ref={containerRef} className="px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-16 lg:gap-24">
            <div className="w-48 shrink-0">
              <ProgressIndicator
                steps={steps}
                activeStep={activeStep}
                progressHeight={progressHeight}
              />
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <div
                className="flex lg:hidden items-center gap-3 mb-4"
                style={{
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "1rem",
                }}
              >
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    animate={{
                      backgroundColor:
                        activeStep >= index ? "var(--accent)" : "var(--border)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      height: "2px",
                      flex: 1,
                    }}
                  />
                ))}
              </div>

              {steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  onInterestClick={handleInterestClick}
                  onInView={handleStepInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <InterestModal
        step={selectedStep}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export { StrategyFlowClient };
