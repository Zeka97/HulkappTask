import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import classNames from "classnames";
import Button from "../Button/Button";

const Images = [
  "/AdobeStock_372350085_Preview.png",
  "/Biom_wipe_6.png",
  "/kitchen_counter_low.png",
  "/Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G.png",
  "/Biomfn.23.png",
  "/AdobeStock_334130078_Preview.png",
];

const SwiperInstagramSection = ({ children }) => {
  return (
    <>
      <div className="h-[300px]">
        <Swiper
          freeMode={true}
          slidesPerView={5}
          spaceBetween={5}
          modules={[FreeMode]}
          className="h-full"
        >
          {Images.map((picture, index) => (
            <SwiperSlide>
              <div
                className={classNames("h-full flex", {
                  "items-start": index % 2 === 0,
                  "items-end": index % 2 === 1,
                })}
              >
                <img src={picture} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full justify-center pt-40 pb-80">
        <Button icon="/Icon-awesome-instagram.png">
          FOLLOW US ON INSTAGRAM
        </Button>
      </div>
    </>
  );
};

export default SwiperInstagramSection;
