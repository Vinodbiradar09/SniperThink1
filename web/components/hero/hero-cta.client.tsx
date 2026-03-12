"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroCta = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap" as const,
      }}
    >
      <motion.div
        whileHover={{ opacity: 0.9 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        <Link
          href="#how-it-works"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "1rem 2rem",
            background: "linear-gradient(135deg, #00d4aa 0%, #0099ff 100%)",
            color: "#000000",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          See How It Works
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ borderColor: "#00d4aa" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        style={{
          border: "1px solid var(--border-bright)",
        }}
      >
        <Link
          href="#how-it-works"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "1rem 2rem",
            backgroundColor: "transparent",
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
        >
          Our Strategy
        </Link>
      </motion.div>
    </motion.div>
  );
};

export { HeroCta };
