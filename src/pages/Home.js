import React from "react";
import Banner from "../components/banner";
import ItemList from "./../components/ItemList";
import { motion, useCycle } from "framer-motion";
function Home() {
  const [color, setColor] = useCycle("rgba(21,21,21,0)", "rgba(21,21,21,0.3)");
  function toggleColor() {
    setColor();
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
