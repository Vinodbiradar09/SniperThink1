"use client";

import { FormStatus } from "@/app/types";
import { motion } from "framer-motion";

interface StatusMessageProps {
  status: FormStatus;
  message: string;
}

const StatusMessage = ({ status, message }: StatusMessageProps) => {
  const isSuccess = status === "success";
  const isError = status === "error";

  if (!isSuccess && !isError) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 px-4 py-3"
      style={{
        backgroundColor: isSuccess
          ? "rgba(0, 212, 170, 0.06)"
          : "rgba(255, 60, 60, 0.06)",
        border: `1px solid ${isSuccess ? "rgba(0,212,170,0.3)" : "rgba(255,60,60,0.3)"}`,
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          flexShrink: 0,
          backgroundColor: isSuccess ? "#00d4aa" : "#ff3c3c",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.05em",
          color: isSuccess ? "#00d4aa" : "#ff3c3c",
        }}
      >
        {message}
      </span>
    </motion.div>
  );
};

export { StatusMessage };
