import React, { Component, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Banner(props) {
  const container = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.5, staggerChildren: 1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="banner"
    >
      <motion.h1 variants={item}>
        Hey. I am a <motion.span> test</motion.span>
      </motion.h1>
    </motion.div>
  );
}
export default Banner;
