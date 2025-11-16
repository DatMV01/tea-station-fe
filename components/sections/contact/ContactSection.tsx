import { Container } from "@/components";

const ContactSection = () => {
  return (
    <Container as="section" id="contact">
      <div className="flex flex-col w-full gap-4 lg:flex-row">
        <div className="flex h-[515px] flex-col items-center justify-center flex-1 w-full px-10 py-20 border border-dotted border-p-600 gap-9">
          <div data-aos="fade-down">
            <h2 className="sub_heading">Có câu hỏi?</h2>
            <h1 className="main_heading">Liên hệ tea station tại</h1>
          </div>

          <div className="contact-info">
            <div>
              <img
                src="./assets/building.svg"
                alt="building"
                className="size-4"
              />
              <h1>Địa Chỉ</h1>
            </div>

            <p>
              123 Phan Đình Phùng, Phường 1, Quận Tân Bình, Thành phố Hồ Chí
              Minh, VN
            </p>
          </div>

          <div className="contact-info">
            <div>
              <img src="./assets/mail.svg" alt="building" className="size-4" />
              <h1>Email</h1>
            </div>

            <p>test.service@example.com</p>
          </div>
        </div>

        <div className="relative text-center flex flex-col items-center w-full flex-1 h-[515px] px-10 py-20 gap-9 border border-p-600 overflow-clip">
          <div data-aos="fade-down">
            <h2 className="sub_heading">Cập nhập bản tin</h2>
            <h1 className="main_heading">Đăng ký theo dõi</h1>
          </div>

          <p>Đăng ký nhận bản tin của chúng tôi và cập nhật thông tin.</p>

          <div className="relative w-[250px] md:w-[350px]">
            <input
              type="email"
              placeholder="Nhập địa chỉ email của bạn"
              className="w-full px-12 py-3 border border-p-600"
            />
            <img
              src="./assets/mail2.svg"
              alt="mail icon"
              className="absolute -translate-y-1/2 top-1/2 left-4"
            />
          </div>

          <button className="flex-none border-primary-600 w-[250px] md:w-[350px]">
            <div className="capitalize btn bg-primary-600 hover:bg-primary-700">
              <span className="w-full text-center">Đồng Ý Theo Dõi</span>
            </div>
          </button>

          <img
            src="./assets/contact.png"
            alt="decor"
            className="absolute -bottom-20 -right-20 w-[400px] opacity-15 -z-10"
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
