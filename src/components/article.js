import React from "react";
import "../App.css";
// import "../styles/article.css";
import { motion, useAnimationControls } from "framer-motion";

const Article = ({ image, name, shortDesc, desc }) => {
  const animationControls = useAnimationControls();

  const handleHover = () => {
    animationControls.start("hover");
  };

  const handleUnhover = () => {
    animationControls.start("unhover");
  };

  return (
    <div className="p-4">
      <article className="bg-white shadow rounded overflow-hidden flex flex-col">
        <div className="h-52">
          <img
            src={image}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="space-y-3 p-5 flex-1">
          <h3 className="service-name text-left text-sm font-semibold text-sky-500">
            {name}
          </h3>
          <h2 className="short-desc text-xl text-left font-semibold leading-tight text-slate-800">
            {shortDesc}
          </h2>
          <p className="text-slate-500 text-left hidden md:block">{desc}</p>
        </div>
        <motion.div
          className="flex justify-center space-x-2 p-5 bg-sky-500 cursor-pointer hover:bg-sky-600"
          whileHover={handleHover}
          onHoverEnd={handleUnhover}
        >
          <motion.a
            variants={{
              hover: { color: "white" },
              unhover: { color: "rgb(71, 85, 105)" },
            }}
            animate={animationControls}
            className="text-lg text-center font-bold leading-4 text-slate-600"
          >
            get a discount offer
          </motion.a>
        </motion.div>
      </article>
    </div>
  );
};

export default Article;
