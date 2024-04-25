import React, { useState } from "react";
import "../../pages-style/hero.css";
import { motion, useAnimationControls } from "framer-motion";
//import MenuDesplegable from "../../components/menuDesplegable";
// import { Context } from "../HomePage";

const Hero = () => {

  const [ctaOpen, setCtaOpen] = useState(false)
  
  const AnimationControls = useAnimationControls();

  const btnHover = () => {
    AnimationControls.start("hover");
  };

  const btnHoverEnd = () => {
    AnimationControls.start("unhover");
  };

  // const [ctaOpen, setCtaOpen] = useContext(Context);

  // const bookCall = () => {
  //   document.querySelector(".booked-msg").classList.add("show");
  //   setCtaOpen(false);
  // };

  return (
    <header className="header hero" id="home">
      <div className="h-container">
        {/* MENU DESPLEGABLE CON FORMULARIO */}

        {/* <MenuDesplegable ctaOpen={ctaOpen} setCtaOpen={setCtaOpen} /> */}

        <div className={ctaOpen ? "cta-menu open" : "cta-menu"}>
          <button className="close-btn" onClick={() => setCtaOpen(false)}>
            X
          </button>
          <h2 className="heading">
            get a free call and learn how local SEO can improve your business
            status
          </h2>
          <h4 className="subheading">
            and learn how you can delegate these tasks to an agency that will
            work with your business for 6 months and only get paid according to
            the improvements we produce
          </h4>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <span>name</span>
            <input type="text" placeholder="introduce your name" />
            <span>email</span>
            <input type="text" placeholder="introduce your email" />
            <span>number</span>
            <input type="text" placeholder="introduce your number" />
            <div className="btn-container">
              <motion.button
                className="cta-btn"
                //onClick={bookCall}
                whileHover={btnHover}
                onHoverEnd={btnHoverEnd}
              >
                <motion.div
                  variants={{
                    hover: { bottom: -2, right: -2 },
                    unhover: { bottom: -10, right: -10 },
                  }}
                  animate={AnimationControls}
                  //transition={{ duration: 0.1 }}
                  className="btn-outline"
                ></motion.div>
                book a call
              </motion.button>
              <motion.button
                className="cta-btn"
                //onClick={bookCall}
                whileHover={btnHover}
                onHoverEnd={btnHoverEnd}
              >
                <motion.div
                  variants={{
                    hover: { bottom: -2, right: -2 },
                    unhover: { bottom: -10, right: -10 },
                  }}
                  animate={AnimationControls}
                  //transition={{ duration: 0.1 }}
                  className="btn-outline"
                ></motion.div>
                More info
              </motion.button>
            </div>
          </form>
        </div>

        {/* BOOKED MESSAGE DIV */}

        {/* <div className="booked-msg">
          <p>
            You have sucessfully booked a call! <br />
            <span>we will contact you via e-mail</span>
          </p>
          <button
            onClick={() =>
              document.querySelector(".booked-msg").classList.remove("show")
            }
          >
            got it
          </button>
        </div> */}

        {/* HERO CONTENT */}

        <h2 className="heading">
          pay <span>per rank</span> local seo
        </h2>

        <h4 className="subheading">
          get SEO strategy implemented, article writing, and get charged after 6
          months according to the rank your page gets
        </h4>

        <motion.button
          className="cta-btn"
          onClick={() => setCtaOpen(true)}
          whileHover={btnHover}
          onHoverEnd={btnHoverEnd}
        >
          <motion.div
            variants={{
              hover: { bottom: -2, right: -2 },
              unhover: { bottom: -10, right: -10 },
            }}
            animate={AnimationControls}
            //transition={{ duration: 0.1 }}
            className="btn-outline"
          ></motion.div>
          Book a free call
        </motion.button>

        <div className="statistics">
          <div className="statistic">
            <h4>$5.000.000</h4>
            <span>title</span>
          </div>

          <div className="statistic">
            <h4>+50</h4>
            <span>title</span>
          </div>

          <div className="statistic">
            <h4>250%</h4>
            <span>title</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
