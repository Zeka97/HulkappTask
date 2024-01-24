import React from "react";

const UserComment = ({ title, author, children }) => {
  return (
    <div className="flex flex-col items-center gap-24 py-90">
      <span className="text-[14px] tracking-2 text-dark-green">{title}</span>
      <h3 className="w-fit text-[25px] text-dark-green font-bold font-dmserif text-center">
        {children}
      </h3>
      <span className="text-[13px] font-semibold tracking-widest text-dark-green">
        - {author}
      </span>
    </div>
  );
};

export default UserComment;
