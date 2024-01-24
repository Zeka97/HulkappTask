import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import ImageHoverText from "./components/ImageHoverText";
const SwiperSection = ({ children }) => {
  return (
    <div className="pt-50 relative font-montserrat">
      <Swiper
        freeMode={true}
        slidesPerView={2.75}
        spaceBetween={18}
        modules={[FreeMode]}
        className="absolute z-50"
      >
        <SwiperSlide className="overflow-hidden rounded-[16px]">
          <ImageHoverText className="bg-livingroom">Living room</ImageHoverText>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-[16px]">
          <ImageHoverText className="bg-office">Office</ImageHoverText>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-[16px]">
          <ImageHoverText className="bg-kitchenShot">Kitchen</ImageHoverText>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-[16px]">
          <ImageHoverText className="bg-bathroomWhiteCounter">
            Bathroom
          </ImageHoverText>
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-[40%] top-[40%]  z-[50] font-dmserif pointer-events-none">
        <div className="text-[16px] leading-[23px] tracking-[2.4px] font-normal font-montserrat text-white text-center">
          WHERE YOU NEED IT,
        </div>
        <h3 className="font-normal text-white text-[78px] leading-[82px] text-center">
          when you
          <br /> need it.
        </h3>
      </div>
    </div>
  );
};

export default SwiperSection;
