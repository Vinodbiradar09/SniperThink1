"use client";

import { Step, InterestFormData, FormStatus } from "@/app/types";
import { StatusMessage } from "./status-message.client";
import { AnimatePresence, motion } from "framer-motion";
import { ModalOverlay } from "./modal-overlay.client";
import { ModalFooter } from "./modal-footer.client";
import { ModalHeader } from "./modal-header.client";
import { FormInput } from "./form-input.client";
import { useState, useCallback } from "react";
import { postInterest } from "@/app/lib/api";

interface InterestModalProps {
  step: Step | null;
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
};

const InterestModal = ({ step, isOpen, onClose }: InterestModalProps) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const isLoading = status === "loading";

  const handleFieldChange = useCallback(
    (field: keyof FormState) => (value: string) => {
      setFormState((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleClose = useCallback(() => {
    if (isLoading) return;
    setFormState(initialFormState);
    setStatus("idle");
    setMessage("");
    onClose();
  }, [isLoading, onClose]);

  const handleSubmit = useCallback(async () => {
    if (!step) return;
    const { name, email } = formState;

    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setMessage("all fields are required");
      return;
    }

    const payload: InterestFormData = {
      name: name.trim(),
      email: email.trim(),
      selectedStep: step.title,
    };

    setStatus("loading");
    setMessage("");

    try {
      const response = await postInterest(payload);
      setStatus("success");
      setMessage(response.message);
      setFormState(initialFormState);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "something went wrong");
    }
  }, [formState, step]);

  return (
    <AnimatePresence>
      {isOpen && step && (
        <>
          <ModalOverlay onClose={handleClose} />
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "34rem",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border-bright)",
                pointerEvents: "auto",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: `linear-gradient(90deg, ${step.accentColor}, #0099ff)`,
                }}
              />

              <ModalHeader
                step={step}
                isLoading={isLoading}
                onClose={handleClose}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "1.5rem",
                  padding: "2rem 2.5rem",
                }}
              >
                <StatusMessage status={status} message={message} />

                <FormInput
                  label="Name"
                  type="text"
                  value={formState.name}
                  placeholder="your name"
                  isDisabled={isLoading}
                  onChange={handleFieldChange("name")}
                />

                <FormInput
                  label="Email"
                  type="email"
                  value={formState.email}
                  placeholder="your@email.com"
                  isDisabled={isLoading}
                  onChange={handleFieldChange("email")}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: "var(--text-muted)",
                    }}
                  >
                    Selected Step
                  </label>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.9375rem",
                      backgroundColor: "var(--bg)",
                      border: "1px solid var(--border)",
                      color: step.accentColor,
                      padding: "0.875rem 1rem",
                    }}
                  >
                    {step.step} — {step.title}
                  </div>
                </div>
              </div>

              <ModalFooter
                status={status}
                isLoading={isLoading}
                onSubmit={handleSubmit}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export { InterestModal };
