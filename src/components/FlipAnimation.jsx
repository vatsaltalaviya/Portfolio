import React from "react";
import { motion } from "framer-motion";

const FlipAnimation = ({ children}) => {
  return (
    <motion.p
      initial="initial"
      whileHover="hovered"
      download
      className="whitespace-nowrap text-center relative block overflow-hidden uppercase"
     
    >
      <motion.span
      className="inline-block"
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.span>

      <motion.span
        className="absolute inset-0 inline-block"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.span>
    </motion.p>
  );
};

export default FlipAnimation;
