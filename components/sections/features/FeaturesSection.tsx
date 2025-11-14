import { Container, FeatureCard } from "@/components";
import clsx from "clsx";

const FeaturesSection = () => {
  return (
    <Container as="section" id="features">
      <div
        className={clsx(
          "grid grid-cols-1 gap-10",
          "md:grid-cols-2 lg:grid-cols-3"
        )}
      >
        <FeatureCard bgUrl="/assets/benefit_1.jpg">
          <h3>Nguồn cung cao cấp</h3>
          <p className=" w-full   flex items-center justify-center">
            Chúng tôi tự hào sản xuất trà ngay tại Hoa Kỳ, <br />
            sử dụng nguyên liệu chất lượng cao <br /> từ các trang trại địa
            phương.
          </p>
        </FeatureCard>

        <FeatureCard className="[&>div]:bg-primary-50">
          <h2 className=" text-black font-lobster">Why Us?</h2>
          <h1 className="leading-loose text-center font-lobster text-black">
            Sự <span className="text-gradient">độc đáo </span>từ
            <br />
            Tea Station
          </h1>
        </FeatureCard>

        <FeatureCard bgUrl="/assets/pic1.jpg">
          <h3 className="text-center">
            Hương vị <br /> và pha chế độc đáo
          </h3>
          <p>
            Sản phẩm độc quyền của chúng tôi gồm các loại trà được với hương vị
            độc đáo, được chế tác để làm hài lòng mọi khẩu vị.
          </p>
        </FeatureCard>

        <FeatureCard
          bgUrl="/assets/benefit_3.jpg"
          className="lg:col-start-2 transform lg:-translate-x-[calc(50%+var(--spacing)*5)] lg:-translate-y-1/5"
        >
          <h3>Tập trung vào sức khỏe</h3>
          <p>
            Hãy thưởng thức các loại trà tốt cho sức khỏe của chúng tôi, được
            pha chế cẩn thận để hỗ trợ trí óc, cơ thể và tâm hồn của bạn.
          </p>
        </FeatureCard>

        <FeatureCard
          bgUrl="/assets/benefit_4.jpg"
          className="md:col-start-2 transform md:-translate-x-[calc(50%+var(--spacing)*5)] lg:col-start-3 md:-translate-y-1/5"
        >
          <h3>Trải Nghiệm Cá Nhân Hoá</h3>
          <p>
            Trải nghiệm dịch vụ được cá nhân hóa với mọi đơn hàng, phù hợp với
            sở thích và nhu cầu trà riêng của bạn.
          </p>
        </FeatureCard>
      </div>
    </Container>
  );
};

export default FeaturesSection;
