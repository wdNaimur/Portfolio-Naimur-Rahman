import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import NaimurLogo from "./NaimurLogo";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import NaimurLogoDrawer from "./NaimurLogoDrawer";
import NavLinks from "./NavLinks";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { BiDownload } from "react-icons/bi";

const Navbar = () => {
  const navLink = <NavLinks />;
  const [theme, setTheme] = useState("dark");

  // ✅ Helper function to apply theme
  const applyTheme = (themeValue) => {
    setTheme(themeValue);
    localStorage.setItem("theme", themeValue);
    document.documentElement.setAttribute("data-theme", themeValue);
  };

  // ✅ Set theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
  }, []);

  // 🔁 Handle theme toggle
  const handleThemeToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    applyTheme(newTheme);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: -100,
          opacity: 0,
          transition: {
            ease: [0.36, 0.66, 0.04, 1],
            duration: 0.5,
            delay: 0.05,
          },
        }}
        transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
        className="fixed top-0 z-50 w-full bg-base-200/80 backdrop-blur-xl shadow-xl shadow-primary/5 font-poppins select-none"
      >
        <div className="navbar p-2 px-4 sm:px-10 lg:w-11/12 w-full mx-auto">
          <div className="navbar-start">
            {/* Drawer for mobile */}
            <div className="drawer z-50 lg:hidden">
              <input
                id="mobile-nav-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex items-center gap-2">
                <label
                  htmlFor="mobile-nav-drawer"
                  className="cursor-pointer p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
                <NaimurLogo />
              </div>

              <div className="drawer-side z-50">
                <label
                  htmlFor="mobile-nav-drawer"
                  className="drawer-overlay backdrop-blur-xl bg-black/30"
                ></label>
                <ul className="p-4 w-64 min-h-full bg-base-100 text-base-content">
                  <div>
                    <div className="scale-75 absolute left-0 top-2">
                      <NaimurLogoDrawer />
                    </div>
                    <label
                      htmlFor="mobile-nav-drawer"
                      className="self-end cursor-pointer text-4xl mb-auto absolute right-0 top-0 p-2 text-secondary/60 hover:text-secondary transition-all duration-300"
                    >
                      <IoIosClose />
                    </label>
                  </div>
                  <div className="space-y-4 mt-14 text-sm">{navLink}</div>
                </ul>
              </div>
            </div>

            {/* Desktop logo */}
            <div className="pl-2 lg:block hidden">
              <NaimurLogo />
            </div>
          </div>

          {/* Desktop nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="px-0 flex items-center text-sm">{navLink}</ul>
          </div>

          {/* Navbar end: Theme toggle and resume button */}
          <div className="navbar-end gap-2">
            {/* Theme toggle switch */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleThemeToggle}
                checked={theme === "dark"}
              />

              {/* Sun icon (light mode) */}
              <MdLightMode className="swap-off text-secondary/50 h-7 w-7" />

              {/* Moon icon (dark mode) */}
              <MdDarkMode className="swap-on text-secondary/50 h-7 w-7" />
            </label>

            {/* Resume download */}
            <a
              href="/Naimur-Resume.pdf"
              download
              className="btn-outline btn btn-primary rounded-full hover:text-base-200 shadow-none active:scale-90 transition-all duration-300 select-none ease-in-out hover:bg-primary border-2 border-primary bg-base-100/40"
            >
              <span className="sm:block hidden">Download</span>
              <span className="text-2xl sm:hidden block">
                <BiDownload />
              </span>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
