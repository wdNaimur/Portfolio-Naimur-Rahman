import React from "react";
import { Link } from "react-scroll";

const NaimurLogo = () => {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      className="text-4xl font-bold text-primary font-poppins flex items-center gap-2 select-none cursor-pointer"
    >
      <img className="h-12 sm:block hidden" src="/naimur-logo.png" alt="Logo" />
      <span className="">Naimur</span>
    </Link>
  );
};

export default NaimurLogo;
