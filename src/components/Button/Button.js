import classNames from "classnames";
import React from "react";

const Button = ({ children, type, icon, className }) => {
  return (
    <button
      className={classNames(
        "flex rounded-6 w-fit text-[13px] leading-[30px] tracking-widest font-black group",
        className,
        {
          "bg-white text-[#004A4C] py-16 px-40 hover:opacity-70":
            type === "white",
          "bg-[#004A4C] text-white py-16 px-40 hover:bg-[#1D494B] hover:opacity-90":
            type === "green",
          "border-dark-green border-[1px] h-[50px] text-dark-green font-bolder":
            icon,
        }
      )}
    >
      <div className="flex h-full items-center px-16">{children}</div>
      {icon && (
        <div className="flex justify-center items-center h-full px-16 border-l-[1px] border-dark-green">
          <img
            src={icon}
            className="transform transition duration-300 ease-in-out group-hover:translate-x-[3px]"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
