import React, { useContext } from "react";
import "../components-style/menuDesplegable.css";
import { motion, useAnimationControls } from "framer-motion";
import { Context } from "../pages/HomePage";

const MenuDesplegable = () => {
  const AnimationControls = useAnimationControls();

  const btnHover = () => {
    AnimationControls.start("hover");
  };

  const btnHoverEnd = () => {
    AnimationControls.start("unhover");
  };

  const [ctaOpen, setCtaOpen] = useContext(Context);

  const bookCall = () => {
    document.querySelector(".booked-msg").classList.add("show");
    setCtaOpen(false);
  };

  return (
    <>
      <div className={ctaOpen ? "cta-menu open" : "cta-menu"}>
        <button className="close-btn" onClick={() => setCtaOpen(false)}>
          X
        </button>
        <h2 className="heading">
          get a free call and learn how local SEO can improve your business
          status
        </h2>
        <h4 className="subheading">
          and learn how you can delegate these tasks to an agency that will work
          with your business for 6 months and only get paid according to the
          improvements we produce
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
              onClick={() => bookCall()}
              whileHover={btnHover}
              onHoverEnd={btnHoverEnd}
            >
              <motion.div
                variants={{
                  hover: { bottom: -2, right: -2 },
                  unhover: { bottom: -10, right: -10 },
                }}
                animate={AnimationControls}
                transition={{ duration: 0.1 }}
                className="btn-outline"
              ></motion.div>
              book a call
            </motion.button>
            <motion.button
              className="cta-btn"
              onClick={() => bookCall()}
              whileHover={btnHover}
              onHoverEnd={btnHoverEnd}
            >
              <motion.div
                variants={{
                  hover: { bottom: -2, right: -2 },
                  unhover: { bottom: -10, right: -10 },
                }}
                animate={AnimationControls}
                transition={{ duration: 0.1 }}
                className="btn-outline"
              ></motion.div>
              More info
            </motion.button>
          </div>
        </form>
      </div>

      {/* BOOKED CALL MESSAGE DIV */}

      <div className="booked-msg">
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
      </div>
    </>
  );
};

export default MenuDesplegable;
