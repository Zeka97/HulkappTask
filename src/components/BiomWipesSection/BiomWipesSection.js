import React from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import AboutProductTag from "../AboutProductTag/AboutProductTag";
import Button from "../Button/Button";

const BiomWipesSection = () => {
  return (
    <div className="relative flex w-full flex-row px-64 mt-90">
      <div className="w-1/2 relative">
        <img src="/AdobeStock_377418446_Preview.png" />
        <img
          className="absolute bottom-0 right-0 pr-50 pb-32"
          src="/Refill-Packaging_Mockup_2.png"
        />
      </div>
      <div className="flex flex-col w-1/2  pt-[102px] pb-[84px]">
        <ProductDescription
          productName="BIOM WIPES"
          title="Better for you, and the planet."
          description="The experience of clean should feel amazing. In a time when we’re constantly\n sanitizing, it can be damaging to our hands and skins. We decided to load our\n wipes with Aloe to take care of you, while you take care of your home."
          className="text-dark-green"
        >
          <div className="flex pt-42 flex-col gap-36">
            <AboutProductTag icon="/biodegradable-icon.png">
              100% bidegradable
            </AboutProductTag>
            <AboutProductTag icon="/plastic-free-icon.png">
              Plastic-free
            </AboutProductTag>
            <AboutProductTag icon="/plant-based-icon.png">
              100% plant-based
            </AboutProductTag>
            <Button type="green">SUBSCRIBE NOW</Button>
          </div>
        </ProductDescription>
      </div>
      <div className="absolute bg-[#DAE5E5] top-50 h-[600px] w-2/3 top-0 right-0 mx-64 -z-10 rounded-14"></div>
    </div>
  );
};

export default BiomWipesSection;
