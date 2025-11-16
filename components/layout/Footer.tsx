import { Container } from "@/components";

const Footer = () => {
  return (
    <Container as="footer" id="footer">
      <div className="flex h-15 bg-primary-900 text-white flex-col items-center justify-center border w-full">
        <p>© Tea Station&apos;s Copyright 2025</p>
      </div>
    </Container>
  );
};

export default Footer;
