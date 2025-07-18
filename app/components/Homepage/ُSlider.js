"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./StyleSwiper.css";

// import required modules
import { EffectCards, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div className="mb-10 text-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        navigation={true}
        pagination={true}
        modules={[EffectCards, Navigation, Pagination]}
        className="mySwiper mt-10 md:mt-0 w-[200px] h-[320px] md:w-[250px] md:h-[330px]"
      >
        <SwiperSlide>
          <img
            src="/images/Homepage/slide1.svg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/Homepage/slide2.svg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/Homepage/slide3.svg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/Homepage/slide4.svg"
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
