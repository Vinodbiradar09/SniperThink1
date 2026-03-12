"use client";

import { FormStatus } from "@/app/types";
import { motion } from "framer-motion";

interface ModalFooterProps {
  status: FormStatus;
  isLoading: boolean;
  onSubmit: () => void;
}

const ModalFooter = ({ status, isLoading, onSubmit }: ModalFooterProps) => {
  const isSuccess = status === "success";
  const isDisabled = isLoading || isSuccess;

  return (
    <div
      className="flex items-center justify-between px-8 py-5"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
        }}
      >
        {isLoading ? "— sending..." : "— sniperthink.com"}
      </span>

      <motion.button
        onClick={onSubmit}
        disabled={isDisabled}
        whileHover={
          !isDisabled
            ? {
                background: "linear-gradient(135deg, #00d4aa 0%, #0099ff 100%)",
                color: "#000000",
                borderColor: "transparent",
                transition: { duration: 0.2 },
              }
            : {}
        }
        whileTap={!isDisabled ? { scale: 0.97 } : {}}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "0.75rem 1.75rem",
          border: "1px solid var(--border-bright)",
          backgroundColor: isSuccess
            ? "linear-gradient(135deg, #00d4aa 0%, #0099ff 100%)"
            : "transparent",
          color: isSuccess ? "#000000" : "var(--text-primary)",
          cursor: isDisabled ? "not-allowed" : "pointer",
          opacity: isLoading ? 0.6 : 1,
        }}
      >
        {isLoading ? "Sending..." : isSuccess ? "Submitted" : "Submit"}
      </motion.button>
    </div>
  );
};

export { ModalFooter };
