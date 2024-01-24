import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import UserComment from "../UserComment/UserComment";

const ExperienceCommentsSection = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper bg-[#F2F2F2]"
      style={{
        "--swiper-pagination-color": "#002D33",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      <SwiperSlide>
        <UserComment title="WHAT PEOPLE ARE SAYING" author="RACHEL H.">
          "Cleaning and sanitizing are now more imporatnt than ever and <br />
          these wipes make it so easy. They're great because they don't dry{" "}
          <br />
          my skin out and I love knowing that buying their products are <br />{" "}
          better for the environment"
        </UserComment>
      </SwiperSlide>
      <SwiperSlide>
        <UserComment title="WHAT PEOPLE ARE SAYING" author="RACHEL H.">
          "Cleaning and sanitizing are now more imporatnt than ever and <br />
          these wipes make it so easy. They're great because they don't dry{" "}
          <br />
          my skin out and I love knowing that buying their products are <br />{" "}
          better for the environment"
        </UserComment>
      </SwiperSlide>
      <SwiperSlide>
        <UserComment title="WHAT PEOPLE ARE SAYING" author="RACHEL H.">
          "Cleaning and sanitizing are now more imporatnt than ever and <br />
          these wipes make it so easy. They're great because they don't dry{" "}
          <br />
          my skin out and I love knowing that buying their products are <br />{" "}
          better for the environment"
        </UserComment>
      </SwiperSlide>
      <SwiperSlide>
        <UserComment title="WHAT PEOPLE ARE SAYING" author="RACHEL H.">
          "Cleaning and sanitizing are now more imporatnt than ever and <br />
          these wipes make it so easy. They're great because they don't dry{" "}
          <br />
          my skin out and I love knowing that buying their products are <br />{" "}
          better for the environment"
        </UserComment>
      </SwiperSlide>
    </Swiper>
  );
};

export default ExperienceCommentsSection;
