import React from "react";
import "../components-style/serviceText.css";

const ServiceText = ({
  image,
  title,
  subhl,
  desc,
  meaning,
  benefitOne,
  benefitTwo,
  benefitThree,
  benefitFour,
  benefitFive,
}) => {
  return (
    <div className="s-text-container">
      <h2 className="heading">{title}</h2>
      <h4>{subhl}</h4>
      <div className="img-container">
        <img src={image} />
      </div>
      <h4 className="text">{desc}</h4>
      <h2>{meaning}</h2>
      <ul>
        <li>{benefitOne}</li>
        <li>{benefitTwo}</li>
        <li>{benefitThree}</li>
        <li>{benefitFour}</li>
        <li>{benefitFive}</li>
      </ul>
    </div>
  );
};

export default ServiceText;
