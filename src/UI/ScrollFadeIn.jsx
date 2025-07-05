import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollFadeIn = ({
  children,
  duration = 0.5,
  delay = 0,
  yOffset = 0,
  scaleFrom = 0.9,
  blurFrom = 4,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: yOffset,
        scale: scaleFrom,
        filter: `blur(${blurFrom}px)`,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
