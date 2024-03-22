// components/CarouselProductos.tsx
import React from "react";
import Slider from "react-slick";

const CarouselProductos: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="px-2">
        <img 
          src="https://www.masterware.com.ec/images/logo_1.png"
          width={200}
          height={200}
          alt="Sinergy"
        />
      </div>
      <div className="px-2">
        <img 
          src="https://www.masterware.com.ec/images/logo_4.png"
          width={200}
          height={200}
          alt="Blueonder"
        />
      </div>
      <div className="px-2">
        <img 
          src="https://www.masterware.com.ec/images/logo_3.png"
          width={200}
          height={200}
          alt="Axper"
        />
      </div>
    </Slider>
  );
};

export default CarouselProductos;
