"use client";

import { useScrollProgress } from "@/app/hooks/use-scroll-progress.client";
import { ProgressIndicator } from "./progress-indicator/index";
import { InterestModal } from "./interest-modal/index";
import { useState, useCallback } from "react";
import { StepCard } from "./step-card/index";
import { Step } from "@/app/types";

interface StrategyFlowClientProps {
  steps: Step[];
}

const StrategyFlowClient = ({ steps }: StrategyFlowClientProps) => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  const { containerRef, progressHeight, progressOpacity } = useScrollProgress();

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
      <div
        ref={containerRef}
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container">
          <ProgressIndicator
            steps={steps}
            activeStep={activeStep}
            progressHeight={progressHeight}
            progressOpacity={progressOpacity}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "1.25rem",
              marginTop: "2rem",
            }}
          >
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

      <InterestModal
        step={selectedStep}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export { StrategyFlowClient };
