import { Container } from "@/components";
import Image from "next/image";
import { assets } from "@/constants";

const HeroSection = () => {
  return (
    <Container
      as="section"
      fluid
      className="h-screen   bg-linear-to-t from-primary-100 to-white"
      id="hero"
    >
      <Container className="flex   w-full h-full relative">
        <div className="z-10 flex flex-col items-center justify-center gap-4 md:gap-9 xl:items-start">
          <div>
            <h2
              data-aos="zoom-in"
              className="mb-2 text-xs font-semibold leading-none tracking-wider text-center uppercase font-inter md:text-sm xl:text-start"
            >
              hơn
              <span className="text-xs text-primary-500 md:text-sm  before:content-['_'] after:content-['_']">
                một trăm
              </span>
              hương vị trà
            </h2>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-5xl leading-none tracking-wide text-center capitalize font-lobster text-p-950 md:text-6xl lg:text-7xl"
            >
              Trà Đặc Biệt Chế Tác
            </h1>
          </div>

          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="max-w-xl px-4 text-center text-n-700 md:px-0 xl:text-start"
          >
            Sứ mệnh của chúng tôi là mang đến cho bạn sự yên bình và kết nối
            thông qua các hương vị trà được chọn lọc cẩn thận và được tạo ra để
            nâng cao trải nghiệm hàng ngày và sức khoẻ toàn diện cho bạn.
          </p>

          <button data-aos="zoom-in" className="p-2" data-aos-delay="300">
            <a className="btn" href="#products">
              Tìm Hiểu Sản Phẩm
              <Image src={assets.icons.rightArrow} alt="right arrow" />
            </a>
          </button>
        </div>
        <div
          className="absolute right-0 bottom-0 aspect-video w-full lg:w-1/2  xl:-translate-y-1/2 xl:top-1/2"
          data-aos="fade-left"
        >
          <Image
            src="/assets/hero_img.png"
            alt="hero-img"
            fill
            className="h-full w-full mask-[linear-gradient(to_left,transparent,black_10%)]"
          />
        </div>
      </Container>
    </Container>
  );
};

export default HeroSection;
