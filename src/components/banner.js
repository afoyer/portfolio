import React from "react";
import { motion } from "framer-motion";
import SlidingName from "./slidingName";
import { slidedatamain, slidedatasub } from "./../data/slidedata";

function Banner(props) {
  //Might move this separatly later

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
          I create <br className="mobile-break" />{" "}
          <SlidingName list={slidedatasub} duration={0.5} />
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3 } }}
        exit={{ opacity: 0 }}
        className="arrow-down"
      >
        <motion.a>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-chevron-down"
            animate={{ y: 10 }}
            transition={{ yoyo: Infinity, duration: 1 }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </motion.svg>{" "}
        </motion.a>
      </motion.div>
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
      {/* <motion.img
        initial={{ opacity: 0, y: 80 }}
        animate={{
          y: 0,
          opacity: 0.5,
          transition: { delay: 2.5, duration: 2 },
        }}
        exit={{ opacity: 0 }}
        src="https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/background.webp"
      /> */}
    </motion.div>
  );
}
export default Banner;
