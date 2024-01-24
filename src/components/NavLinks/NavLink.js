import React from "react";

const NavLink = ({ children }) => {
  return (
    <span className="font-montserrat font-bold text-lg tracking-widest cursor-pointer hover:border-b-[1px]">
      {children}
    </span>
  );
};

export default NavLink;
