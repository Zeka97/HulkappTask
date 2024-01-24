import classNames from "classnames";
import React from "react";

const ProductDescription = ({
  productName,
  title,
  description,
  children,
  className,
}) => {
  return (
    <div className={classNames("flex flex-col", className)}>
      <span className="text-[14px] tracking-2">{productName}</span>
      <span className="text-[36px] leading-[62px] tracking-0 font-bold font-dmserif">
        {title}
      </span>
      <span className="text-[16px] leading-[28px] tracking-0 font-normal">
        {description.split("\\n").map((str) => (
          <span>
            {str}
            <br />
          </span>
        ))}
      </span>
      {children}
    </div>
  );
};

export default ProductDescription;
