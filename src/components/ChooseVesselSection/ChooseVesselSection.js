import Button from "../Button/Button";
import React from "react";

const VesselItem = ({ src, title, description }) => (
  <div className="flex justify-around w-[300px] items-center group">
    <div className="h-full gap-8 pb-50 grow flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-[20px] font-bold">{title}</span>
      <span className="tracking-widest font-normal">{description}</span>
    </div>
    <img
      src={src}
      className="absolute transform transition duration-300 ease-in-out group-hover:translate-x-100 w-fit"
    />
  </div>
);

const ChooseVesselSection = () => {
  return (
    <div className="flex w-full mt-120 h-[380px]">
      <div className="flex flex-col pl-[70px] h-full gap-36">
        <h3 className="text-[36px] leading-[44px] font-bold font-dmserif pt-60">
          Ready to start
          <br /> wiping out waste?
        </h3>
        <Button icon="/arrow-round-forward.png">
          CHOOSE YOUR VESSEL COLOR
        </Button>
      </div>

      <div className="flex justify-around grow">
        <VesselItem
          title="Biom Dispenser"
          description="OCEAN TEAL"
          src="/Green_1.png"
        />
        <VesselItem
          title="Biom Dispenser"
          description="WHITE"
          src="/Biomfn.20.png"
        />
        <VesselItem
          title="Biom Dispenser"
          description="INK BLACK"
          src="/Black_2.png"
        />
      </div>
    </div>
  );
};

export default ChooseVesselSection;
