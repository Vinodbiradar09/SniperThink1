"use client";

import { motion } from "framer-motion";

interface ModalOverlayProps {
  onClose: () => void;
}

const ModalOverlay = ({ onClose }: ModalOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 40,
        backgroundColor: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(4px)",
      }}
    />
  );
};

export { ModalOverlay };
