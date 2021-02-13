import React, { useState } from "react";
import Banner from "../components/banner";
import ItemList from "./../components/ItemList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
/**
 * HomePage.
 */
function Home() {
  //Background color modifier. Currently used by project cards through callbacks.
  const [color, setColor] = useState("#fffff");
  function toggleColor(color) {
    setColor(color);
  }
  //intersection observer to make divs "appear" when in view.
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
          I'm a French/American front-end developer with interests in design, user experiences, and photography <br/>
          <Link to="/photos" className="linkhover">
            Check my photos out.
          </Link>
          
          <br />
          I am constantly trying new things, taking more pictures, and asking people to react to what I make. I care a lot about what people think.
          <br />
          This webpage was made using <a className="linkhover" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            ReactJS
          </a>, <a className="linkhover" href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">
           Framer Motion
          </a>
          , and the <a className="linkhover" href="https://www.flickr.com/services/api/" target="_blank" rel="noopener noreferrer">
            Flickr API
          </a> to fetch my pictures.
          <br />
          <br />
          Anyways, this was my first major project after graduating and it was extremely fun to make. I hope you enjoy it too!
        </motion.h2>
        <motion.h2
        className="mail"
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
        >Contact me through socials or through {" "}
        <a className="linkhover" href="mailto:aymeric.foyer@gmail.com">
           email
        </a>.</motion.h2>
      </motion.div>
      <ItemList setColor={toggleColor} />
    </motion.div>
  );
}
export default Home;
