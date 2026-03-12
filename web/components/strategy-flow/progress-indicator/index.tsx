import { MobileProgress } from "./mobile-progress.client";
import { ProgressTrack } from "./progress-track.client";
import type { MotionValue } from "framer-motion";
import { StepLabel } from "./step-label.client";
import { Dot } from "./dot.client";
import { Step } from "@/app/types";

interface ProgressIndicatorProps {
  steps: Step[];
  activeStep: number;
  progressHeight: MotionValue<string>;
  progressOpacity: MotionValue<number>;
}

const ProgressIndicator = ({
  steps,
  activeStep,
  progressHeight,
  progressOpacity,
}: ProgressIndicatorProps) => {
  return (
    <>
      <div className="sticky top-1/4 hidden lg:flex flex-col gap-2">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "1rem",
            display: "block",
          }}
        >
          Progress
        </span>

        <div className="flex gap-5" style={{ minHeight: "240px" }}>
          <ProgressTrack
            progressHeight={progressHeight}
            progressOpacity={progressOpacity}
          />
          <div className="flex flex-col justify-between py-1">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center gap-3">
                <Dot
                  isActive={activeStep === index}
                  isCompleted={activeStep > index}
                  accentColor={step.accentColor}
                />
                <StepLabel
                  step={step}
                  isActive={activeStep === index}
                  isCompleted={activeStep > index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <MobileProgress steps={steps} activeStep={activeStep} />
    </>
  );
};

export { ProgressIndicator };
