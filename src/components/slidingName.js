import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//props are a list of different names
function SlidingName(props) {
  const variants = {
    hidden: {
      y: 10,
      opacity: 0,
      transition: { delay: 0.5, duration: 0.5 },
    },
    show: {
      y: 0,
      opacity: 1,

      transition: { delay: 0.1, duration: 0.5 },
    },
    exit: {
      y: -10,
      opacity: 0,
      transition: { delay: 1, duration: 0.5 },
    },
  };

  const names = props.list.map((item, index) => {
    return (
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
    );
  });
  const [number, setNumber] = useState(0);
  //   const [current, setCurrent] = useState(names[0]);

  function cycleNext() {
    if (number !== names.length - 1) {
      setNumber(number + 1);
    } else {
      //   names[number] = (
      //     <motion.span
      //       key={number}
      //       onAnimationComplete={cycleNext}
      //       variants={variants}
      //       onHoverStart={expand}
      //       initial="hidden"
      //       animate="show"
      //       exit="exit"
      //       style={{ color: names[number].color }}
      //     >
      //       {names[number].name}
      //     </motion.span>
      //setNumber(number + 1);
      //   );
    }
  }
  const [isExpanded, expand] = useState(false);
  return (
    //I really wish I could make this generic
    <AnimatePresence exitBeforeEnter>
      {number === 0 && names[0]}
      {number === 1 && names[1]}
      {number === 2 && names[2]}
      {number === 3 && names[3]}
    </AnimatePresence>
  );
}
export default SlidingName;
