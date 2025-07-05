import React from "react";
import { motion } from "framer-motion";

const pulseVariant = {
  animate: {
    scale: [1.2, 1.3, 1.2],
    rotate: [0, -1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const orbitImages = [
  {
    src: "/icons/React.png",
    alt: "React",
    style: {
      top: "-50%",
      left: "50%",
      transform: "translateX(-50%) translateY(50%)",
    },
    bg: "bg-base-200/80 backdrop-blur-sm",
  },

  {
    src: "/icons/JavaScript.png",
    alt: "JavaScript",
    style: {
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
    bg: "bg-[#ffde03] backdrop-blur-sm",
  },
  {
    src: "/icons/Tailwind.png",
    alt: "Tailwind",

    style: {
      right: "18%",
      top: "-23%",
      transform: "translateY(-50%)",
    },
    bg: "bg-base-200/80 backdrop-blur-sm",
  },
  {
    src: "/icons/Express.png",
    alt: "express.js",
    style: {
      top: 0,
      right: "-3%",
      transform: "translateX(-50%) translateY(0%)",
    },
    bg: "bg-base-300/80 backdrop-blur-sm",
  },
];

const BannerImage = () => {
  return (
    <div className="relative flex justify-center items-center h-xl w-xl">
      {/* Pulsing Circle */}
      <motion.div
        variants={pulseVariant}
        animate="animate"
        className="relative mask mask-squircle  z-10"
      >
        <img
          src="/background.png"
          alt="Main Background"
          className="w-full h-full object-cover mask mask-squircle"
        />
      </motion.div>

      {/* Foreground Image */}
      <div className="absolute mask mask-squircle overflow-hidden pointer-events-none">
        <img
          src="/wd.naimur.png"
          alt="Main Foreground"
          className="w-full h-full z-50 bg-primary/10"
        />
      </div>

      {/* Orbiting Images */}
      <motion.div
        className="absolute rounded-full flex justify-center items-center w-xl h-[20rem]"
        style={{
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={pulseVariant}
        animate="animate"
      >
        {orbitImages.map(({ src, alt, style, bg }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            style={style}
            className={`absolute w-16 h-16 mask mask-squircle object-cover shadow-2xl shadow-primary ${bg}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BannerImage;
