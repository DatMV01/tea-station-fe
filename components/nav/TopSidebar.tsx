"use client";

import clsx from "clsx";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import navbarLinks from "./navbarLinks";

type style = "style1" | "style2";

interface Props {
  style?: style;
}

const TopSidebar = ({ style = "style1" }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button className="border-none " onClick={() => setOpen(!open)}>
        <FiMenu size={28} />
      </button>

      <nav
        className={clsx(
          "fixed top-15 right-15 w-50",
          "bg-primary-900 overflow-hidden",
          "transition-all duration-500 ease-in-out",
          style === "style1" &&
            (open ? "h-[118px] opacity-100" : "h-0 opacity-0"),
          style === "style2" && "h-fit",
          style === "style2" &&
            (open
              ? "translate-y-0  opacity-100"
              : "h-0 opacity-0 -translate-y-full")
        )}
      >
        <ul className="flex flex-col items-center justify-center gap-4 p-4">
          {navbarLinks.map((navLink) => (
            <li key={navLink.id}>
              <a
                href={navLink.href}
                className="navLink mobileNavLink text-primary-50 hover:text-primary-200"
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

  
    </div>
  );
};

export default TopSidebar;
