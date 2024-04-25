import React, { useContext } from "react";
import "../../pages-style/finalCTA.css";
//import { Context } from "../HomePage";
// import MenuDesplegable from "../../components/menuDesplegable";

const FinalCTA = () => {
  // const [ctaOpen, setCtaOpen] = useContext(Context);

  return (
    <>
      {/* <MenuDesplegable ctaOpen={ctaOpen} setCtaOpen={setCtaOpen} /> */}
      <section className="section-gold final-cta">
        <h2 className="heading">book a call in order to...</h2>
        <h4 className="subheading">
          learn how we can do all this for the next month, 100% free until you
          get what we promise you.
        </h4>
        <button className="final-cta-btn">
          book a free call now
        </button>
      </section>
    </>
  );
};

export default FinalCTA;
