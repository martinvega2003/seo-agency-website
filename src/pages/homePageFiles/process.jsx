import React, { useState } from "react";
import "../../pages-style/process.css";
// import servicesData from "../../data/services";
import steps from "../../data/steps.js";
import img from "../../images/hero-img.jpg";

const Process = () => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const handleClick = (index) => {
    setServiceIndex(index);
    document.querySelectorAll(".s-btn").forEach((btn, i) => {
      if (index === i) {
        if (!btn.classList.contains("active")) {
          btn.classList.add("active");
        }
      } else {
        btn.classList.remove("active");
      }
    });
  };

  return (
    <section className="section-white s-two" id="process">
      <div className="s-container">
        <div className="img-container">
          <img src={img} />
        </div>
        <h2 className="heading">our process</h2>
        <div className="btn-container">
          {steps.map((step, i) => {
            if (i === 0) {
              return (
                <button className="s-btn active" onClick={() => handleClick(i)}>
                  {step.name}
                </button>
              );
            } else if (i === 1 || i === 2) {
              return (
                <button className="s-btn" onClick={() => handleClick(i)}>
                  {step.name}
                </button>
              );
            }
          })}
        </div>
        <div className="s-info-container">
          {steps.map((step, i) => {
            if (serviceIndex === i) {
              return (
                <>
                  <img src={step.img} />
                  <div className="text-container">
                    <h2 className="heading">{step.name}</h2>
                    <p className="text">{step.desc}</p>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
