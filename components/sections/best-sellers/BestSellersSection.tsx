import { Container, ProgressBar } from "@/components";
import Carousel from "../carousel/Carousel";

const Slide01 = () => {
  return (
    <div className="flex flex-col    gap-4 max-w-4xl mx-auto best-product-info">
      <h3>Peppermint Velvet</h3>
      <div>
        Mỗi ngụm mang đến sự pha trộn hài hòa giữa hương vị đậm đà và hương thơm
        sảng khoái, khiến đây trở thành lựa chọn lý tưởng cho cả nghi lễ buổi
        sáng và giờ nghỉ giải lao buổi chiều. Trải nghiệm sự ấm áp dễ chịu và
        những phẩm chất tràn đầy năng lượng đã khiến trà đen trở thành thức uống
        cổ điển được yêu thích trong nhiều thế kỷ.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Tăng cường năng lượng và tập trung
          </h4>
          <ProgressBar percentage={88} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Giàu chất chống oxy hoá
          </h4>
          <ProgressBar percentage={95} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Tăng cường trao đổi chất
          </h4>
          <ProgressBar percentage={89} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Thúc đẩy sự bình tĩnh và thư giãn
          </h4>
          <ProgressBar percentage={85} duration={1000} once={false} />
        </div>
      </div>

      <img
        className="h-full w-fit mx-auto"
        src="/assets/products/matcha1.jpg"
        alt="best-sellers-product"
      />
    </div>
  );
};

const Slide02 = () => {
  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto best-product-info">
      <h3>Chamomile Bliss</h3>
      <p>
        Mỗi ngụm mang đến sự pha trộn hài hòa giữa hương vị đậm đà và hương thơm
        sảng khoái, khiến đây trở thành lựa chọn lý tưởng cho cả nghi lễ buổi
        sáng và giờ nghỉ giải lao buổi chiều. Trải nghiệm sự ấm áp dễ chịu và
        những phẩm chất tràn đầy năng lượng đã khiến trà đen trở thành thức uống
        cổ điển được yêu thích trong nhiều thế kỷ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Tăng cường năng lượng và tập trung
          </h4>
          <ProgressBar percentage={88} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Giàu chất chống oxy hoá
          </h4>
          <ProgressBar percentage={95} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Tăng cường trao đổi chất
          </h4>
          <ProgressBar percentage={89} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Thúc đẩy sự bình tĩnh và thư giãn
          </h4>
          <ProgressBar percentage={85} duration={1000} once={false} />
        </div>
      </div>

      <img
        className="h-full w-fit mx-auto"
        src="/assets/products/blacktea1.jpg"
        alt="best-sellers-product"
      />
    </div>
  );
};

const Slide03 = () => {
  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto best-product-info">
      <h3>Lemon Ginger Zest</h3>
      <p>
        Mỗi ngụm mang đến sự pha trộn hài hòa giữa hương vị đậm đà và hươngAdd
        commentMore actions thơm sảng khoái, khiến đây trở thành lựa chọn lý
        tưởng cho cả nghi lễ buổi sáng và giờ nghỉ giải lao buổi chiều. Trải
        nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng đã khiến
        trà đen trở thành thức uống cổ điển được yêu thích trong nhiều thế kỷ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Tăng cường năng lượng và tập trung
          </h4>
          <ProgressBar percentage={88} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Giàu chất chống oxy hoá
          </h4>
          <ProgressBar percentage={95} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Tăng cường trao đổi chất
          </h4>
          <ProgressBar percentage={89} duration={1000} once={false} />
        </div>

        <div className="relative">
          <h4 className="absolute text-base bottom-4">
            Thúc đẩy sự bình tĩnh và thư giãn
          </h4>
          <ProgressBar percentage={85} duration={1000} once={false} />
        </div>
      </div>

      <img
        className="h-full w-fit mx-auto"
        src="/assets/products/whitetea1.jpg"
        alt="best-sellers-product"
      />
    </div>
  );
};

const BestSellersSection = () => {
  const slides = [
    {
      id: 1,
      content: <Slide01 />,
    },
    {
      id: 2,
      content: <Slide02 />,
    },
    {
      id: 3,
      content: <Slide03 />,
    },
  ];

  return (
    <Container as="section" id="best-sellers">
      <div className="flex flex-col items-center justify-center gap-4">
        <div data-aos="fade-right">
          <h2 className="sub_heading">Khách hàng yêu thích</h2>
          <h2 className="main_heading">
            Những Sản Phẩm <span className="text-gradient">Bán Chạy Nhất</span>
          </h2>
        </div>

        <p
          data-aos="fade-right"
          data-aos-delay="100"
          className="max-w-lg text-base text-center text-neutral-500"
        >
          Khám phá những sản phẩm bán chạy nhất của chúng tôi, nơi chất lượng
          kết hợp hương vị trong mỗi tách trà. Hãy tham gia cùng hàng ngàn khách
          hàng hài lòng đã biến những hỗn hợp này thành sở thích của họ và nâng
          tầm thời gian uống trà của bạn ngay hôm nay!
        </p>

        <Carousel
          slides={slides}
          interval={3000}
          className="pb-5"
          showArrows={true}
        />
      </div>
    </Container>
  );
};

export default BestSellersSection;
