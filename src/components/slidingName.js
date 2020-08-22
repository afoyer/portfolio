import React, { useState } from "react";
import { motion } from "framer-motion";

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
    final: {
      y: 0,
      opacity: 1,

      transition: {
        delay: 0.5,
        duration: props.duration + 0.5,
        ease: "easeOut",
      },
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
          key={`${item.name}slide`}
          onAnimationComplete={cycleNext}
          variants={variants}
          initial="hidden"
          //have special animation for last element
          animate={index + 1 !== props.list.length ? "show" : "final"}
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
    <>{names}</>
  );
}
export default SlidingName;
