import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {Link} from 'react-scroll'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function HeaderTextSlider({catArray}) {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperresturant bg-gray-200 hidden lg:block  text-center   "
      >
        {/* <SwiperSlide className="p-3     lg:text-lg text-sm lg:font-semibold text-gray-700 cursor-pointer">
          ALL
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
          Pizza
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
          Indian
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
          Schnitzel
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
          Burger
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg  lg:font-semibold text-gray-700 cursor-pointer">
          Curry
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg  lg:font-semibold text-gray-700 cursor-pointer">
        Beef Burger
        </SwiperSlide> */}

    {
          catArray?.map((arr) => (
            <SwiperSlide className="p-3 text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
               <Link to={arr.title} spy={true} smooth={true}>{arr.title}</Link>  
            </SwiperSlide>
          ))
       }  
    
      </Swiper>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperresturant bg-gray-200 lg:hidden  text-center "
      >
        <SwiperSlide className="p-3     lg:text-lg text-sm lg:font-semibold text-gray-700 cursor-pointer">
          ALL
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
          Pizza
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
          Indian
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
          Schnitzel
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg lg:font-semibold text-gray-700 cursor-pointer">
          Burger
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg  lg:font-semibold text-gray-700 cursor-pointer">
          Curry
        </SwiperSlide>
        <SwiperSlide className="p-3   text-sm lg:text-lg  lg:font-semibold text-gray-700 cursor-pointer">
        Beef Burger
        </SwiperSlide>
      
    
      </Swiper> */}
    </>
  );
}





