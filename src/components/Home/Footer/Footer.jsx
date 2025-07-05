import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import NavLinks from "../../shared/NavLinks";
import NaimurLogoDrawer from "../../shared/NaimurLogoDrawer";

const Footer = () => {
  const links = <NavLinks />;

  return (
    <footer className="relative footer footer-center footer-horizontal text-secondary bg-base-100 pt-10 -space-y-4 overflow-hidden">
      {/* Green radial glow background */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-primary opacity-20 blur-3xl rounded-full pointer-events-none z-0"></div>

      {/* Company Info */}
      <aside className="z-10">
        <Link to="home" className="flex items-center justify-center gap-2 mb-1">
          <NaimurLogoDrawer />
        </Link>
        <p className="opacity-70 px-4 text-center">
          Passionate frontend-focused React developer crafting clean,
          user-centric web experiences
        </p>
      </aside>

      {/* Navigation Links */}
      <nav className="list-none flex flex-wrap px-2 justify-center items-center select-none">
        {links}
      </nav>

      {/* Social Icons */}

      <nav className="z-10">
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/wdNaimur"
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/naimur-web"
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:wd.naimur@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </nav>

      {/* Footer Bottom Text */}
      <p className="border-b-primary/80 border-b-6 pb-2 w-full py-1 px-4">
        <span className="opacity-60 text-sm">
          © {new Date().getFullYear()} Naimur Rahman — Portfolio Designed &
          Developed by Me
        </span>
      </p>
    </footer>
  );
};

export default Footer;
