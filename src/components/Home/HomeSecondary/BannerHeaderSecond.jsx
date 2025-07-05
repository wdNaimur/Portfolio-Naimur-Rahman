import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const BannerHeaderSecond = () => {
  return (
    <header className="w-full mx-auto select-none font-poppins tracking-tighter text-center 2xl:text-left 2xl:ps-10">
      {/* Greeting */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-secondary/70 mb-2 2xl:-ms-1.5 font-poppins">
        Hi, I'm
      </h1>

      {/* Name */}
      <motion.h1
        className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-poppins font-black mb-2 tracking-tight 2xl:-ms-1.5 2xl:-mx-6 sm:max-w-full max-w-11/12 mx-auto"
        style={{
          background:
            "linear-gradient(120deg, #0097b2  20%, #c6eef2 50%, #0097b2 60%)",
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
        }}
        animate={{
          backgroundPositionX: ["200%", "0%"],
        }}
        transition={{
          duration: 6,
          ease: "easeIn",
          times: [0, 0.5],
          repeat: Infinity,
          repeatDelay: 5,
          repeatType: "loop",
          delay: 2,
        }}
      >
        Md. Naimur Rahman
      </motion.h1>

      {/* Tagline */}
      <p className="text-xl sm:text-2xl lg:text-3xl text-secondary/70 mb-2 2xl:-ms-1.5 font-poppins w-full 2xl:mx-0 2xl:px-0 lg:max-w-lg 2xl:max-w-2xl mx-auto max-w-11/">
        React-focused Frontend Developer.
      </p>
      <div className="flex gap-2 2xl:justify-start justify-center items-center mt-4 font-poppins">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-65}
          duration={400}
          className="btn btn-primary rounded-full  shadow-none active:scale-90 transition-all duration-150 select-none ease-in-out tracking-wide font-poppins -ms-1 font-medium text-base-300 border-2 border-primary"
        >
          Let’s Connect
        </Link>
        <a
          href="https://github.com/wdNaimur"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline btn btn-primary btn-circle hover:text-base-200 shadow-none active:scale-90 transition-all duration-300 select-none ease-in-out hover:bg-primary text-2xl border-2 border-primary"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/naimur-web"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline btn btn-primary btn-circle hover:text-base-200 shadow-none active:scale-90 transition-all duration-300 select-none ease-in-out hover:bg-primary text-2xl border-2 border-primary"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default BannerHeaderSecond;
