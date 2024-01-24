import React from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import AboutProductTag from "../AboutProductTag/AboutProductTag";
import Button from "../Button/Button";

const BiomDispenserSection = () => {
  return (
    <div className="flex justify-end bg-dispenser">
      <div className="flex flex-col w-1/2 pt-[102px] pb-[84px]">
        <ProductDescription
          productName="THE BIOM DISPENSER"
          title="Redefine your experience of clean."
          description="A quality engineered wipes dispenser that looks beautiful in your home, making\n better habits for your home and planet always within reach."
          className="text-dark-green"
        >
          <div className="flex pt-42 flex-col gap-36">
            <AboutProductTag icon="/beautifuldesignicon.png">
              Beautiful design, fit for your home
            </AboutProductTag>
            <AboutProductTag icon="/durablestainlessicon.png">
              Durable stainless steel exterior
            </AboutProductTag>
            <AboutProductTag icon="/nontoxicicon.png">
              Non-toxic, BPA free
            </AboutProductTag>
            <Button type="green">SHOP NOW</Button>
          </div>
        </ProductDescription>
      </div>
    </div>
  );
};

export default BiomDispenserSection;
