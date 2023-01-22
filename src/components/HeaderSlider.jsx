import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const HeaderSlider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="./images/img1.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./images/img1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/img1.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
