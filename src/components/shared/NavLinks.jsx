import React, { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", path: "home" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

const NavLinks = () => {
  const [active, setActive] = useState("home");

  return (
    <>
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            spy={true}
            smooth={true}
            offset={-65}
            duration={400}
            onClick={() => {
              const drawer = document.getElementById("mobile-nav-drawer");
              if (drawer) drawer.checked = false;
              setActive(item.path); // manually set on click
            }}
            onSetActive={(id) => setActive(id)} // update on scroll
            className={`cursor-pointer rounded-none mx-4 font-bold transition-all duration-100 py-1
              ${
                active === item.path
                  ? "active opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
