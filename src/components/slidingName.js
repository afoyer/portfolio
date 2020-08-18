import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//props are a list of different names
/**
 *
 * @param {*} props.duration sets duration for each transition.
 * @param {*} props.list list of names and colors to transition into.
 */
function SlidingName(props) {
  const variants = {
    hidden: {
      y: 10,
      opacity: 0,
      transition: { delay: 0.5, duration: props.duration },
    },
    show: {
      y: 0,
      opacity: 1,

      transition: { delay: 0.1, duration: props.duration },
    },
    exit: {
      y: -10,
      opacity: 0,
      transition: { delay: 1, duration: props.duration },
    },
  };

  const [number, setNumber] = useState(0);
  const names = props.list.map((item, index) => {
    return (
      number === index && (
        <motion.span
          key={index}
          onAnimationComplete={cycleNext}
          variants={variants}
          initial="hidden"
          animate="show"
          exit="exit"
          style={{ color: item.color }}
        >
          {item.name}
        </motion.span>
      )
    );
  });
  /**
   * Goes to next item until list is over.
   */
  function cycleNext() {
    if (number !== names.length - 1) {
      setNumber(number + 1);
    }
  }
  return (
    //works for any number of items
    <AnimatePresence exitBeforeEnter>{names}</AnimatePresence>
  );
}
export default SlidingName;
