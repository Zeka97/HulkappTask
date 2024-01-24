import React from "react";
import Button from "../Button/Button";

const ContactSection = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center mx-64 bg-biomWipe2 bg-[#F2F2F2] pl-100 h-[300px] rounded-14 bg-right bg-no-repeat font-montserrat z-90">
        <div className="w-[510px] flex flex-col gap-20">
          <h3 className="text-[30px] font-bold font-dmserif">
            Get the latest news <br /> deliveret to your inbox
          </h3>
          <span className="text-[16px] leading-[26px] tracking-normal">
            Get access to the exciting stuff - exclusive new deals, product
            launches and more. Plus, get a 10% discount on your next order.
          </span>
          <div className="flex w-full bg-white pr-6 py-6 rounded-8">
            <input
              className="grow pl-16 border-none focused:border-none active:border-none outline-none"
              placeholder="Enter your email address"
            />
            <Button type="green" className="!px-0">
              <img
                src="/Iconionic-ios-arrow-round-forward.png"
                className="transform transition duration-300 ease-in-out group-hover:translate-x-[3px]"
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute h-1/2 bottom-0 opacity-75 bg-[#004A4C] w-full -z-10"></div>
    </div>
  );
};

export default ContactSection;
