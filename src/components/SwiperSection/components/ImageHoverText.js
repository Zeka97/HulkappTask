import classNames from "classnames";
import React from "react";

const ImageHoverText = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "flex items-end justify-center pb-40 transition-all duration-500 ease-in-out hover:scale-110 h-[415px] group",
        className
      )}
    >
      <span className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-700 text-white text-[22px] font-normal font-dmserif">
        {children}
      </span>
    </div>
  );
};

export default ImageHoverText;
