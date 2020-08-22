import React, { useState } from "react";
import Banner from "../components/banner";
import ItemList from "./../components/ItemList";
import { motion } from "framer-motion";
function Home() {
  const [color, setColor] = useState("#ffffff");
  function toggleColor(color) {
    setColor(color);
  }
  return (
    <motion.div
      className="home"
      initial={false}
      animate={{ background: color, transition: { type: "tween" } }}
    >
      <Banner />
      <ItemList setColor={toggleColor} />
    </motion.div>
  );
}
export default Home;
