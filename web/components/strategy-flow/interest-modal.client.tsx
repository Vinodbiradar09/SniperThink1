"use client";

import { Step, InterestFormData, FormStatus } from "@/app/types";
import { motion, AnimatePresence } from "framer-motion";
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

const ModalOverlay = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-40"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
    />
  );
};

const StatusMessage = ({
  status,
  message,
}: {
  status: FormStatus;
  message: string;
}) => {
  if (status !== "success" && status !== "error") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-4 py-3 text-xs tracking-wide"
      style={{
        fontFamily: "var(--font-mono)",
        backgroundColor:
          status === "success"
            ? "rgba(232, 255, 0, 0.08)"
            : "rgba(255, 60, 60, 0.08)",
        border: `1px solid ${status === "success" ? "var(--accent)" : "#ff3c3c"}`,
        color: status === "success" ? "var(--accent)" : "#ff3c3c",
      }}
    >
      {message}
    </motion.div>
  );
};

const FormInput = ({
  label,
  type,
  value,
  placeholder,
  isDisabled,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  isDisabled: boolean;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-xs tracking-widest uppercase"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 text-sm w-full"
        style={{
          fontFamily: "var(--font-sans)",
          backgroundColor: "var(--bg)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--accent)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "var(--border)";
        }}
      />
    </div>
  );
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
      setMessage("— all fields are required");
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
      setMessage(`— ${response.message}`);
      setFormState(initialFormState);
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? `— ${err.message}` : "— something went wrong",
      );
    }
  }, [formState, step]);

  return (
    <AnimatePresence>
      {isOpen && step && (
        <>
          <ModalOverlay onClose={handleClose} />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="w-full max-w-lg"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border-bright)",
                pointerEvents: "auto",
              }}
            >
              <div
                className="flex items-center justify-between px-8 py-5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent)",
                    }}
                  >
                    {step.step} — {step.title}
                  </span>
                  <span
                    className="text-lg font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Im Interested
                  </span>
                </div>

                <motion.button
                  onClick={handleClose}
                  whileHover={{ color: "var(--accent)" }}
                  disabled={isLoading}
                  className="text-xs tracking-widest uppercase px-3 py-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                    backgroundColor: "transparent",
                    cursor: isLoading ? "not-allowed" : "pointer",
                  }}
                >
                  ESC
                </motion.button>
              </div>

              <div className="px-8 py-6 flex flex-col gap-5">
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

                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    Selected Step
                  </label>
                  <div
                    className="px-4 py-3 text-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      backgroundColor: "var(--bg)",
                      border: "1px solid var(--border)",
                      color: "var(--accent)",
                    }}
                  >
                    {step.step} — {step.title}
                  </div>
                </div>
              </div>

              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                  }}
                >
                  {isLoading ? "— sending..." : "— sniperthink.com"}
                </span>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isLoading || status === "success"}
                  whileHover={
                    !isLoading && status !== "success"
                      ? {
                          backgroundColor: "var(--accent)",
                          color: "#000000",
                          transition: { duration: 0.15 },
                        }
                      : {}
                  }
                  whileTap={!isLoading ? { scale: 0.97 } : {}}
                  className="px-6 py-3 text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-mono)",
                    backgroundColor:
                      status === "success" ? "var(--accent)" : "transparent",
                    color:
                      status === "success" ? "#000000" : "var(--text-primary)",
                    border: "1px solid var(--border-bright)",
                    cursor:
                      isLoading || status === "success"
                        ? "not-allowed"
                        : "pointer",
                    opacity: isLoading ? 0.6 : 1,
                  }}
                >
                  {isLoading
                    ? "Sending..."
                    : status === "success"
                      ? "Submitted ✓"
                      : "Submit"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export { InterestModal };
