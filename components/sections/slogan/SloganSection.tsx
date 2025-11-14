import { Container } from "@/components";

const SloganSection = () => {
  return (
    <Container as="section" id="slogan">
      <div className="relative min-w-full h-[30vh] border max-h-[276px] overflow-hidden flex justify-center items-center">
        <video
          poster="./assets/slogan.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 min-w-full min-h-full -z-10"
        >
          <source src="./assets/slogan.mp4" type="video/mp4" />
        </video>

        <p className="px-4 text-base tracking-wide text-center text-white md:text-2xl text-shadow-[2px_2px_8px_#000000]">
          Chỉ những lá trà ngon nhất mới được đưa vào sản phẩm của chúng tôi,
          <br className="hidden lg:block" />
          đảm bảo mỗi ngụm trà đều mang hương vị tinh khiết và tuyệt hảo.
        </p>
      </div>
    </Container>
  );
};

export default SloganSection;
