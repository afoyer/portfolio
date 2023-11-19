import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import ItemList from "../components/ItemList";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "framer-motion";
/**
 * HomePage.
 */
function Home() {
  //Background color modifier. Currently used by project cards through callbacks.
  const [color, setColor] = useState("#fffff");
  function toggleColor(color: React.SetStateAction<string>) {
    setColor(color);
  }

  return (
    <motion.div
      className="home"
      key={"home"}
      initial={false}
      animate={{
        background: color,
        transition: { type: "tween", duration: 0.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <Banner />
      <motion.div
        // ref={ref}
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="aboutMe"
      >
        <InfoBlurb>
          <motion.h2>
            I'm a French/American front-end engineer with interests in design,
            user experiences, graphics, and photography.
          </motion.h2>
        </InfoBlurb>
        <br />
        <InfoBlurb>
          <h2>
            I am currently a Front End Engineer II at{" "}
            <motion.a
              href="https://aws.amazon.com/"
              target="_blank"
              className="linkhover amazon"
            >
              Amazon Web Services
            </motion.a>{" "}
            where I work on improving monitoring of data centers across the
            globe .
          </h2>
        </InfoBlurb>
        <br />
        <InfoBlurb>
          <h2>
            This webpage was built from scratch using{" "}
            <a
              className="linkhover"
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>
            ,{" "}
            <a
              className="linkhover"
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Framer Motion
            </a>
            , and the{" "}
            <a
              className="linkhover"
              href="https://www.flickr.com/services/api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flickr API
            </a>
            . I tend to work on this website from time to time to fix and
            improve things as I learn them from work.
          </h2>
        </InfoBlurb>
      </motion.div>
      <ItemList setColor={toggleColor} />
    </motion.div>
  );
}

function InfoBlurb({ children }: { children: React.ReactNode }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          type: "tween",
        },
      });
    } else {
      animation.start({ x: "-10rem", opacity: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <motion.div ref={ref} animate={animation}>
      {children}
    </motion.div>
  );
}

export default Home;
