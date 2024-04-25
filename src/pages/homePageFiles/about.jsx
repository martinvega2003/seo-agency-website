import React from "react";
import "../../pages-style/about.css";
import { motion, useAnimationControls } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import fieldsData from "../../data/fields";
import servicesData from "../../data/services";

const About = () => {
  const AnimationControls = useAnimationControls();

  const swipeLeft = () => {
    AnimationControls.start("swipeLeft");
  };

  const swipeRight = () => {
    AnimationControls.start("swipeRight");
  };

  return (
    <section className="section-black about" id="about">
      <div className="about-container">
        <div className="first-block">
          <div className="about-left">
            <h2 className="heading">about us</h2>
            <p className="text">
              Vegma is an agency that is looking to help home services business
              grown their businesses with local SEO.
              <br />
              <br /> We want you to face no risk of losing money so we offer a
              100% performance-based deal called pay per rank.
              <br />
              <br /> You will be charged monthly for 6 months, but the money
              will never reach our accounts. Only after 6 months, if we deliver
              on our primises, the payment will be free.
              <br />
              <br /> If we fail, all the moeny will be given back to you. <br />
              <br /> But we also know that these free-work offers have hidden
              costs. So, working with us, you will have no need to worry about
              losing time, gaining more stress or losing reputation. We also
              focus on giving you the least hidden costs and offer the most of
              the benefits.
              <br />
              <br /> and you only pay if we deliver...
            </p>
          </div>

          <div className="about-right">
            <button className="arrow-btn" onClick={swipeLeft}>
              <SlArrowLeft />
            </button>
            <div className="swiper-container">
              <motion.div
                className="swiper"
                initial={{ left: 0 }}
                variants={{
                  swipeRight: { left: "calc(left - 20px)" },
                  swipeLeft: { right: "calc(right - 20px)" },
                }}
                animate={AnimationControls}
              >
                {servicesData.map((s) => {
                  return <div className="box" />;
                })}
              </motion.div>
            </div>
            <button className="arrow-btn" onClick={swipeRight}>
              <SlArrowRight />
            </button>
          </div>
        </div>

        <div className="second-block">
          <h2 className="heading">our fields of expertise</h2>
          <div className="fields-container">
            {fieldsData.map((field, i) => {
              return (
                <div className="field-box" key={i}>
                  <h2>{field.field}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
