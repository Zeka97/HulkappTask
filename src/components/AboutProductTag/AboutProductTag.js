import React from "react";

const AboutProductTag = ({ icon, children }) => {
  return (
    <div className="flex gap-24 items-center">
      <img src={icon} alt="icon" />
      <span className="text-dark-green text-[18px] font-normal leading-[26px]">
        {children}
      </span>
    </div>
  );
};

export default AboutProductTag;
