import React from "react";
import Banner from "../components/banner";
import ItemList from "./../components/ItemList";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div className="home">
      <Banner />
      <ItemList />
    </motion.div>
  );
}
export default Home;
