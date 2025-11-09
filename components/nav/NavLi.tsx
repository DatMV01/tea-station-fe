"use client";

import { NavItem } from "@/types";
import clsx from "clsx";
 
interface Props {
  className?: string;
  item: NavItem;
  onClick?: (id: NavItem["id"]) => void;
  showIcon?: boolean;
  active?: boolean;
}

const NavLi = ({
  className,
  item,
  onClick,
  showIcon = false,
  active = false,
}: Props) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (onClick) {
      e.preventDefault();
      onClick(item.id);
    }
  };

  return (
    <li
      className={clsx(
        "cursor-pointer",
        "rounded-full",
        "hover:scale-110",
        active
          ? "bg-secondary text-foreground hover:bg-secondary font-bold"
          : "hover:bg-muted",
        className
      )}
    >
      <a
        onClick={handleClick}
        href={`#${item.id}`}
        className="block h-full w-full p-2 text-center"
      >
        {showIcon ? item.icon  : item.title}
      </a>
    </li>
  );
};

export default NavLi;
