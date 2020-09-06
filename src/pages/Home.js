import React, { useState } from "react";
import Banner from "../components/banner";
import ItemList from "./../components/ItemList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Home() {
  const [color, setColor] = useState("#fffff");
  function toggleColor(color) {
    setColor(color);
  }
  const [ref, inView] = useInView({ threshold: 0.7, triggerOnce: true });
  return (
    <motion.div
      className="home"
      initial={false}
      animate={{
        background: color,
        transition: { type: "tween", duration: 0.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <Banner />
      <motion.div
        ref={ref}
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="aboutMe"
      >
        <motion.h1
          initial={false}
          animate={
            inView
              ? {
                  color: "#212121",
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                }
              : { opacity: 0, x: -100, transition: { duration: 1 } }
          }
        ></motion.h1>
        <motion.h2
          initial={false}
          animate={
            inView
              ? {
                  color: "#212121",
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }
              : { opacity: 0, y: 100, transition: { duration: 1 } }
          }
        >
          I'm a recent graduate from Colorado College with a Computer Science
          Major who is passionate about UI/UX design. <br/> I also love photography.
        </motion.h2>
        <motion.p
          initial={false}
          animate={
            inView
              ? {
                  color: "#212121",
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }
              : { opacity: 0, y: 100, transition: { duration: 1 } }
          }
        ></motion.p>
      </motion.div>
      <ItemList setColor={toggleColor} />
    </motion.div>
  );
}
export default Home;
