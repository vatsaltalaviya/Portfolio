import React from 'react';
import { motion } from 'framer-motion'; // ✅ use 'framer-motion' instead of 'motion/react'

const Transition = (OgComponent) => {
  const WrappedComponent = (props) => {
    return (
      <>
        <OgComponent {...props} />
        
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };

  return WrappedComponent;
};

export default Transition;
