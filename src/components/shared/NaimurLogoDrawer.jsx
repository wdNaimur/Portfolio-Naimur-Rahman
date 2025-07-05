import React from "react";
import { Link } from "react-scroll";

const NaimurLogoDrawer = ({ onClickItem }) => {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      offset={0}
      onClick={() => {
        if (onClickItem) onClickItem();
        const drawer = document.getElementById("mobile-nav-drawer");
        if (drawer) drawer.checked = false;
      }}
      className="text-4xl font-bold text-primary font-poppins flex items-center gap-2 select-none cursor-pointer"
    >
      <img className="h-12" src="/naimur-logo.png" alt="Logo" />
      <span>Naimur</span>
    </Link>
  );
};

export default NaimurLogoDrawer;
