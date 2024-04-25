import React, { useState } from "react";
import "../../pages-style/benefits.css";
import benefitsData from "../../data/benefits";
import { motion, useAnimationControls } from "framer-motion";
import ServiceText from "../../components/serviceText";

const Benefits = () => {
  const AnimationControls = useAnimationControls();

  const [benefitIndex, setBenefitIndex] = useState(0);

  const btnHoverBenefit = () => {
    AnimationControls.start("hoverBenefit");
  };

  const btnHoverEndBenefit = () => {
    AnimationControls.start("unhoverBenefit");
  };

  return (
    <section className="section-gold s-one" id="benefits">
      <div className="s-container">
        <div className="s-left">
          <h2 className="heading">about our service</h2>

          <h4 className="subheading">
            See all the services we offer and choose the one that suits your
            needs
          </h4>

          <div className="btns-container">
            {benefitsData.map((benefit, i) => {
              return (
                <motion.button
                  key={i}
                  className={
                    i === benefitIndex ? "service-btn active" : "service-btn"
                  }
                  whileHover={btnHoverBenefit}
                  onHoverEnd={btnHoverEndBenefit}
                  onClick={() => setBenefitIndex(i)}
                >
                  <motion.div
                    className={benefitIndex === i ? "no-show" : ""}
                    variants={{
                      hoverBenefit: { bottom: -3, right: -3 },
                      unhoverBenefit: { bottom: -10, right: -10 },
                      active: { display: "none" },
                      show: { display: "block" },
                    }}
                    animate={AnimationControls}
                    transition={{ duration: 0.1, type: "linear" }}
                  ></motion.div>
                  {benefit.name}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="s-right">
          {benefitsData.map((benefit, i) => {
            if (i === benefitIndex) {
              return (
                <ServiceText
                  key={i}
                  image={benefit.image}
                  title={benefit.title}
                  subhl={benefit.subheadline}
                  desc={benefit.description}
                  meaning={benefit.meaning}
                  benefitOne={benefit.benefitOne}
                  benefitTwo={benefit.benefitTwo}
                  benefitThree={benefit.benefitThree}
                  benefitFour={benefit.benefitFour}
                  benefitFive={benefit.benefitFive}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
