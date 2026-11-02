import React from "react";
import { motion } from "framer-motion";

const FlipAnimation = ({ children, className = "" }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative inline-block overflow-hidden align-middle leading-tight ${className}`}
    >
      <motion.span
        className="inline-block"
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 inline-block"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default FlipAnimation;
