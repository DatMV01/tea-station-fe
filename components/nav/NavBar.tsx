import React from "react";
import navbarLinks from "./navbarLinks";

const NavBar = () => {
 
  return (
    <nav className="items-center justify-end hidden w-full gap-4 lg:flex lg:gap-8">
      {navbarLinks.map((navLink) => (
        <a key={navLink.id} href={navLink.href} className="navLink">
          {navLink.label}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
