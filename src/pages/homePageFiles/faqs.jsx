import React, { useState } from "react";
import "../../pages-style/faqs.css";
import faqs from "../../data/faqs";
import { motion } from "framer-motion";

const Faqs = () => {
  const answerContainers = document.querySelectorAll(".s-drop-down-container");

  const [questionShowIndex, setQuestionShowIndex] = useState(0);

  const handleHover = (index) => {
    setQuestionShowIndex(index);
    answerContainers.forEach((answer, i) => {
      if (i === index) {
        answer.classList.add("show");
      }
    });

  };

  const handleHoverEnd = (index) => {
    answerContainers.forEach((answer, i) => {
      if (i === index) {
        answer.classList.remove("show");
      }
    });

  };

  return (
    <section className="section-white s-three" id="faqs">
      <div className="s-container">

        <h2 className="heading">frequently asked questions</h2>
        <h4 className="subheading">
          Get your questions about local SEO answered see all the common doubts
          people have about this service
        </h4>
        <div className="s-blocks-container">
          {faqs.map((faq, i) => {
            return (
              <motion.div
                key={i}
                className="s-block"
                whileHover={() => handleHover(i)}
                onHoverEnd={() => handleHoverEnd(i)}
                // onClick={() => handleHover(i)}
              >

                {faqs.map((faq, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        questionShowIndex === index
                          ? "s-drop-down-container active"
                          : "s-drop-down-container"
                      }
                    >
                      <p className="text">{faq.answer}</p>
                    </div>
                  );

                })}

                {faq.question}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
