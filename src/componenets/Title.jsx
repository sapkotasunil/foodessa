import React from "react";

const Title = ({ title1, title2, titleStyles, title1Styles, parsaStyles }) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h2 className={`${title1Styles} h2`}>
        {title1} <span className="text-secondary !font-light">{title2}</span>
      </h2>
      <p className={`${parsaStyles} hidden `}>
        Our food products are crafted with the deliver exceptional taste and
        quality.
      </p>
    </div>
  );
};

export default Title;
