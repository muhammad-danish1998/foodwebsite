import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { setCatValue } from "../redux/store/actions/menuAction";

export default function HeaderTextSlider({ catArray, res }) {
  const dispatch = useDispatch();
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperresturant bg-gray-200 hidden lg:block  text-center    "
      >
        {res
          ? catArray?.map((arr) => (
              <SwiperSlide className="p-3 text-sm lg:text-lg  text-gray-700 cursor-pointer">
                <button onClick={() => dispatch(setCatValue(arr.id))}>
                  {arr.title}
                </button>
              </SwiperSlide>
            ))
          : catArray?.map((arr) => (
              <SwiperSlide className="p-4 text-sm lg:text-md  text-gray-700 cursor-pointer  ">
                <Link to={arr.title} spy={true} smooth={true}>
                  {arr.title}
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>

      {/* ----------- text slider for mobile ---------------------  */}

      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperresturant bg-gray-200 lg:hidden  text-center  "
      >
        {res
          ? catArray?.map((arr) => (
              <SwiperSlide className="p-3 lg:text-lg text-lg lg:font-semibold text-gray-700 cursor-pointer">
                <button onClick={() => dispatch(setCatValue(arr.id))}>
                  {arr.title}
                </button>
              </SwiperSlide>
            ))
          : catArray?.map((arr) => (
              <SwiperSlide className="p-2 text-sm   text-gray-700 cursor-pointer">
                <Link to={arr.title} spy={true} smooth={true}>
                  {arr.title}
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>



      
    </>
  );
}
