"use client";

import { Container, TabsSlide } from "@/components";
import { assets } from "@/constants";
import Image from "next/image";

const MatchaContent = () => (
  <div className="flex" id="matcha">
    <div className="tabContainer">
      <Image src={assets.images.product1} alt="matcha" className="productImg" />

      <div>
        <h3>Matcha Magic</h3>

        <h4>
          Khám phá những lợi ích tiềm năng của &quot;vàng xanh&quot; từ Nhật Bản
        </h4>

        <p>
          Sẵn sàng nâng cao sức khỏe của bạn? Hãy làm quen với matcha, loại bột
          màu xanh lá cây rực rỡ đang làm khuynh đảo thế giới chăm sóc sức khỏe.
          Chứa đầy chất chống oxy hóa và chất dinh dưỡng, matcha cung cấp nguồn
          năng lượng mạnh mẽ mà không gây bồn chồn, nhờ sự kết hợp độc đáo giữa
          caffeine và L-theanine.
          <br />
          Loại trà này không chỉ tăng cường sự tập trung và trao đổi chất mà còn
          thêm hương vị thơm ngon cho sinh tố, đồ nướng và cà phê latte. Hãy đắm
          mình vào thế giới matcha và trải nghiệm cách siêu thực phẩm cổ xưa này
          có thể tiếp thêm sinh lực cho cơ thể và trí óc của bạn!
        </p>

        <button>
          <a href="/products.html?filter-category=matcha" className="btn">
            Xem Sản Phẩm Matcha
            <Image
              unoptimized
              src={assets.icons.rightArrow}
              alt="right-arrow"
            />
          </a>
        </button>
      </div>
    </div>
  </div>
);

const WhiteTeaContent = () => (
  <div className="flex" id="whiteTea">
    <div className="tabContainer">
      <Image src={assets.images.product2} alt="matcha" className="productImg" />

      <div>
        <h3>Tinh chất tinh tế từ trà trắng</h3>
        <h4>Hành trình khám phá hương vị tinh khiết nhất từ thiên nhiên</h4>
        <p>
          Trà trắng, được tôn sùng vì sự nhẹ nhàng và tinh tế của nó, được chế
          biến từ lá non và nụ của cây Camellia sinensis. Với hương hoa nhẹ
          nhàng và vị ngọt tự nhiên, loại trà này mang đến trải nghiệm nhẹ nhàng
          nhưng sảng khoái. Giàu chất chống oxy hóa và ít caffeine, trà trắng
          không chỉ làm hài lòng khẩu vị mà còn hỗ trợ sức khỏe, khiến nó trở
          thành lựa chọn hoàn hảo cho những khoảnh khắc thư giãn hoặc trẻ hóa.
          Khám phá vẻ đẹp thanh bình của trà trắng và nâng tầm nghi thức uống
          trà của bạn lên một tầm cao mới.
        </p>
        <button>
          <a href="/products.html?filter-category=whitetea" className="btn">
            Xem Sản Phẩm Trà Trắng
            <Image
              unoptimized
              src={assets.icons.rightArrow}
              alt="right-arrow"
            />
          </a>
        </button>
      </div>
    </div>
  </div>
);

const OlongContent = () => (
  <div id="oolongTea" className="flex ">
    <div className="tabContainer">
      <Image src={assets.images.product3} alt="matcha" className="productImg" />

      <div>
        <h3>Cuộc cách mạng trà ô long</h3>
        <h4>Mở khóa bí mật của loại trà lành mạnh nhất từ ​​thiên nhiên</h4>
        <p>
          Bạn có tò mò về bí quyết trường thọ và sống lâu không? Không cần tìm
          đâu xa, hãy tìm đến trà xanh! Thức uống cổ xưa này, được tôn sùng
          trong nhiều nền văn hóa trên thế giới, chứa đầy chất chống oxy hóa
          mạnh mẽ có thể thúc đẩy quá trình trao đổi chất, tăng cường chức năng
          não và thúc đẩy sức khỏe tim mạch. <br />
          Với hương vị tinh tế và vô số lợi ích cho sức khỏe, trà xanh không chỉ
          là một thức uống mà còn là một lựa chọn về lối sống. Hãy tham gia cuộc
          cách mạng trà xanh và khám phá cách thức pha chế đơn giản này có thể
          biến đổi sức khỏe của bạn từng ngụm một!
        </p>
        <button>
          <a href="/products.html?filter-category=oolong" className="btn">
            Xem Sản Phẩm Trà Ô Long
            <Image
              unoptimized
              src={assets.icons.rightArrow}
              alt="right-arrow"
            />
          </a>
        </button>
      </div>
    </div>
  </div>
);

const BlackTeaContent = () => (
  <div id="oolongTea" className="flex ">
    <div className="tabContainer">
      <Image src={assets.images.product4} alt="matcha" className="productImg" />

      <div>
        <h3>Đánh thức các giác quan của bạn cùng trà đen</h3>
        <h4>Hương vị đậm đà truyền thống vượt thời gian</h4>
        <p>
          Hãy thưởng thức hương vị đậm đà, mạnh mẽ của trà đen, được chế tác
          hoàn hảo cho khẩu vị sành điệu. Mỗi ngụm trà mang đến sự pha trộn hài
          hòa giữa hương vị sâu lắng và hương thơm sảng khoái, khiến đây trở
          thành lựa chọn lý tưởng cho cả nghi lễ buổi sáng và giờ nghỉ trưa.
          Trải nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng đã
          khiến trà đen trở thành thức uống cổ điển được yêu thích trong nhiều
          thế kỷ.
        </p>
        <button>
          <a href="/products.html?filter-category=blacktea" className="btn">
            Xem Sản Phẩm Trà Đen
            <Image
              unoptimized
              src={assets.icons.rightArrow}
              alt="right-arrow"
            />
          </a>
        </button>
      </div>
    </div>
  </div>
);

const tabs = [
  { label: "Matcha", content: <MatchaContent /> },
  { label: "Trắng", content: <WhiteTeaContent /> },
  { label: "Ô Long", content: <OlongContent /> },
  { label: "Đen", content: <BlackTeaContent /> },
];

const ProductsSection = () => {
  return (
    <Container as="section" className="flex flex-col" id="products">
      <div data-aos="fade-right" >
        <h2 className="sub_heading">Tìm hiểu</h2>
        <h1 className="main_heading">
          sản phẩm <span className="text-gradient">trà ngon</span>
        </h1>
      </div>

      <TabsSlide tabs={tabs} defaultIndex={0} />
    </Container>
  );
};

export default ProductsSection;
