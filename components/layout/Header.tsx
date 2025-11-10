import { Container, NavBar, TopSidebar } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/constants";

const LeftHeader = () => {
  return (
    <Link href="/" className="relative flex w-full  items-center">
      <Image
        alt="logo"
        src={assets.icons.logo}
        className="w-16 h-16 rounded-full object-center  "
      />
      <p className="text-lg capitalize font-lobster text-primary-900">
        Tea Station
      </p>
    </Link>
  );
};

const Header = () => {
  return (
    <Container
      as="header"
      id="header"
      className="fixed left-1/2 -translate-x-1/2 top-0 z-50"
    >
      <div className="flex h-20 items-center justify-between">
        <LeftHeader />

        <NavBar />

        <TopSidebar />
      </div>
    </Container>
  );
};

export default Header;
