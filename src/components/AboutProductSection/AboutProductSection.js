import React from "react";
import Button from "../Button/Button";

const AboutProduct = () => {
  return (
    <div className="pl-85 flex flex-col gap-16 text-white justify-center mx-24 bg-kitchen bg-no-repeat bg-cover bg-center h-[675px] rounded-14">
      <h3 className="font-medium font-dmserif text-[56px] leading-[62px]">
        So fresh.
        <br /> So green.
      </h3>
      <div className="w-[530px] text-[20px] font-light leading-[28px] font-montserrat">
        We believe that a more eco-friendly everyday makes a happier you and me.
        We’re on a mission to put sustainability in reach with
        better-for-the-planet wipes that are easy, effective, and plastic-free.
      </div>
      <Button type="white">GET STARTED</Button>
    </div>
  );
};

export default AboutProduct;
