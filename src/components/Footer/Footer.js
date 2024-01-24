import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#004A4C] opacity-75">
      <div className="flex justify-between items-center mx-64 pt-50 pb-50 text-white">
        <span>
          © 2021 biom. All rights reserved • Privacy Policy • Terms of Service
        </span>
        <div className="flex gap-16">
          <div className="bg-white px-8 py-8 rounded-[50%] cursor-pointer">
            <img src="/Icon-awesome-instagram.png" />
          </div>
          <div className="bg-white px-12 py-8 rounded-[50%] cursor-pointer">
            <img src="/Icon-awesome-facebook-f.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
