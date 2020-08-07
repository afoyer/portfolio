import React from "react";
import { motion } from "framer-motion";
import SlidingName from "./slidingName";
function Banner(props) {
  const list = [
    { name: "a developper", color: "red" },
    { name: "a photographer", color: "blue" },
    { name: "a designer", color: "#607d8b" },
    { name: "Aymeric.", color: "black" },
  ];

  const container = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, delayChildren: 0.5, staggerChildren: 6.5 },
    },

    exit: { opacity: 0 },
  };
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: {
      y: -10,
      opacity: 0,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="banner"
      exit="exit"
    >
      <motion.h1 variants={item} exit="exit">
        Hey. I am <br class="mobile-break" /> <SlidingName list={list} />
      </motion.h1>
      <motion.h2 variants={item}>And welcome to my website.</motion.h2>
    </motion.div>
  );
}
export default Banner;
