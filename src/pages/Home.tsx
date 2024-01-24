import React from "react";
import Banner from "../components/banner";
import { motion } from "framer-motion";

/**
 * HomePage.
 */
function Home() {
  return (
    <motion.div
      className="home"
      key={"home"}
      initial={false}
      animate={{
        background: "#00000",
        transition: { type: "tween", duration: 0.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <Banner />
    </motion.div>
  );
}

export default Home;
