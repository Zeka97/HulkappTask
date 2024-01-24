import React from "react";
import NavLink from "../NavLinks/NavLink";

const Header = () => {
  return (
    <div className="sticky top-0 opacity-80 bg-white flex justify-center h-fit py-12 items-center px-60 w-full z-[99]">
      <div className="flex grow gap-40">
        <NavLink>SHOP </NavLink>
        <NavLink>WHY BIOM</NavLink>
        <NavLink>SCENTS</NavLink>
      </div>
      <img
        src="/logo.png"
        alt="BiomLogo"
        className="flex items-center justify-center"
      />
      <div className="flex grow justify-end items-center gap-40">
        <NavLink>SIGN IN</NavLink>
        <NavLink>CART</NavLink>
        <div className="relative py-12 pr-8">
          <img src="./cart.png" alt="cart" />
          <span className="absolute top-0 right-0 text-white bg-yellow-300 rounded-[50%] px-4">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
