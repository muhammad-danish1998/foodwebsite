import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

const HeaderSectiontwo = () => {
  return (
    <div>
    <div className=" max-w-7xl mx-auto mt-4 mb-4  text-center">
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col items-center justify-center ">
            <img src="./images/Ellipse 20.png" />
            <p className="mt-4 text-orange-600 text-lg font-semibold">Amerikanisch</p>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col items-center justify-center ">
            <img src="./images/Ellipse 20.png" />
            <p className="mt-4 text-orange-600 text-lg font-semibold">Turkisch</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center  ">
            <img src="./images/Ellipse 20.png" />
            <p className="mt-4 text-orange-600 text-lg font-semibold">Griechisch</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center  ">
            <img src="./images/Ellipse 20.png" />
            <p className="mt-4 text-orange-600 text-lg font-semibold">Lebanesisch</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center  ">
            <img src="./images/Ellipse 20.png" />
            <p className="mt-4 text-orange-600 text-lg font-semibold">Indisch</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center  ">
            <img src="./images/Ellipse 20.png" />
            <p className="mt-4 text-orange-600 text-lg font-semibold">Indisch</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center  ">
            <img src="./images/Ellipse 20.png" />
            <p className="mt-4 text-orange-600 text-lg font-semibold">Indisch</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center  ">
            <img src="./images/Ellipse 20.png" />
            <p className="mt-4 text-orange-600 text-lg font-semibold">Indisch</p>
        </SwiperSlide>
        
      
      </Swiper>
    </div>
    </div>
  )
}

export default HeaderSectiontwo