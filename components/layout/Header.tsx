import { Container, ThemeSwitch } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/constants";

const LeftHeader = () => {
  return (
    <Link href="#home" className="relative">
      <Image
        alt="User avatar"
        src={assets.icons.logo}
        className="w-12 h-12 rounded-full object-cover object-[50%_20%]"
      />
    </Link>
  );
};

const Header = () => {
  return (
    <Container
      as="header"
      id="header"
      className="sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="flex h-16 items-center justify-between">
        <LeftHeader />

        <ThemeSwitch />
      </div>
    </Container>
  );
};

export default Header;
