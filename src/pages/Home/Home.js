import React from "react";
import AboutProductSection from "../../components/AboutProductSection/AboutProductSection";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import AboutProductTag from "../../components/AboutProductTag/AboutProductTag";
import Button from "../../components/Button/Button";
import BiomDispenserSection from "../../components/BiomDispenserSection/BiomDispenserSection";
import SwiperSection from "../../components/SwiperSection/SwiperSection";
import ChooseVesselSection from "../../components/ChooseVesselSection/ChooseVesselSection";
import ExperienceCommentsSection from "../../components/ExperienceCommentsSection/ExperienceCommentsSection";
import UserComment from "../../components/UserComment/UserComment";
import VideoSection from "../../components/VideoSection/VideoSection";
import SwiperInstagramSection from "../../components/SwiperInstagramSection/SwiperInstagramSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import BiomWipesSection from "../../components/BiomWipesSection/BiomWipesSection";

const Home = () => {
  return (
    <div className="w-full pt-80">
      <AboutProductSection />
      <BiomDispenserSection />
      <SwiperSection />
      <ChooseVesselSection />
      <ExperienceCommentsSection />
      <BiomWipesSection />
      <VideoSection />
      <div className="mt-80 pb-50 flex justify-center text-dark-green text-[36px] font-bold font-montserrat ">
        <span className="font-normal">#</span>cleanwithbiom
      </div>
      <SwiperInstagramSection />
      <ContactSection />
      <div className="bg-[#004A4C] opacity-75">
        <div className="flex justify-center items-center mx-64 border-b-[1px] pt-50 pb-50 gap-64 text-white cursor-pointer">
          <span className="text-bold tracking-widest text-[14px] hover:border-b-[1px]">
            SHOP
          </span>
          <span className="text-bold tracking-widest text-[14px] hover:border-b-[1px]">
            WHY BIOM
          </span>
          <span className="text-bold tracking-widest text-[14px] hover:border-b-[1px]">
            SCENTS
          </span>
          <img
            src="/logo.png"
            alt="BiomLogo"
            className="flex items-center justify-center"
          />
          <span className="text-bold tracking-widest text-[14px] hover:border-b-[1px]">
            FAQS
          </span>
          <span className="text-bold tracking-widest text-[14px] hover:border-b-[1px]">
            ACCOUNT
          </span>
          <span className="text-bold tracking-widest text-[14px] hover:border-b-[1px]">
            HELP
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
