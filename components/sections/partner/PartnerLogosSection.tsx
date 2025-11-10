import { Container } from "@/components";
import { assets } from "@/constants";
import clsx from "clsx";

const PartnerLogosSection = () => {
  return (
    <Container as="section" className="flex flex-col" id="partner-logos">
      <div data-aos="fade-right" className="mt-10">
        <h2 className="text-xs font-medium uppercase font-inter text-primary-900">
          Có mặt tại
        </h2>
        <h1 className="mt-2 text-2xl tracking-wide capitalize lg:text-3xl font-lobster">
          Những Nhà Phân Phối
          <span className=" bg-clip-text text-transparent bg-linear-to-l from-primary-500 to-primary-900 before:content-['_'] ">
            Uy Tín
          </span>
        </h1>
      </div>

      <div className={clsx("flex gap-4 mt-9 md:mt-16", "animate-moveLeft")}>
        {assets.partnerLogos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} className="h-10" />
        ))}
      </div>
    </Container>
  );
};

export default PartnerLogosSection;
