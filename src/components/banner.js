import React from "react";
import { motion } from "framer-motion";
import SlidingName from "./slidingName";
import { slidedatamain, slidedatasub } from "./../data/slidedata";

function Banner() {
  //Might move this separatly later. Variants.
  const container = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        staggerChildren: slidedatamain.length * 0.65,
      },
    },

    exit: { opacity: 0 },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { when: "beforeChildren" },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, when: "beforeChildren" },
    },
    exit: {
      y: -10,
      opacity: 0,
    },
  };
  return (
    <motion.div className="banner-container">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="banner"
        exit="exit"
      >
        <motion.h1 variants={item} exit="exit">
          Hey. <br className="mobile-break" />{" "}
          <SlidingName list={slidedatamain} duration={0.5} />
        </motion.h1>
        <motion.h2 variants={item}>
          I <br className="mobile-break" />{" "}
          <SlidingName list={slidedatasub} duration={3} infinite />
        </motion.h2>
      </motion.div>

      {/* You might be wondering. Why not use ImageContainer? Because ImageContainer renders non-motion img. */}
      <motion.picture
        initial={{ opacity: 0, y: 80 }}
        animate={{
          y: 0,
          opacity: 0.5,
          transition: { delay: 2.5, duration: 2 },
        }}
        exit={{ opacity: 0 }}
      >
        <source
          className="background-pic"
          srcSet={process.env.PUBLIC_URL + "/images/background.webp"}
          type="image/webp"
        />
        <source
          srcSet={process.env.PUBLIC_URL + "/images/background.png"}
          type="image/png"
          className="background-pic"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/background.png"}
          alt="test"
          className="background-pic"
        />
      </motion.picture>
    </motion.div>
  );
}
export default Banner;
