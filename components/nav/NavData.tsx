import { NavItem } from "@/types";
import { FaRegUserCircle } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { LuContact } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";

const NavData: NavItem[] = [
  { id: "home", link: "#home", title: "Home", icon: <FiHome /> },
  { id: "about", link: "#about", title: "About", icon: <FaRegUserCircle /> },
  {
    id: "projects",
    link: "#projects",
    title: "Projects",
    icon: <MdWorkOutline />,
  },
  { id: "contact", link: "#contact", title: "Contact", icon: <LuContact /> },
];

export default NavData;
