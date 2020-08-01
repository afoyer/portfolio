import React, { Component, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "../styles/header.scss";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
//VARIANTS

//Variants for the NavBar
const containerVariants = {
  open: {
    opacity: 1,
    width: "75%",
    backgroundColor: "#212121",
    "border-radius": "10px",
  },
  collapsed: {
    opacity: 1,
    width: "75%",
    "margin-left": "10%",
    backgroundColor: "#ffffff",
    "border-radius": "5px",
    transition: { delay: 0.1, duration: 0.5 },
  },
};
//Logo Variants
const textVariants = {
  open: {
    color: ["#C70039", "#01579B", "#FFFFFF"],
    transition: {
      flip: 0,
      ease: "linear",
      duration: 1,
    },
  },
  collapsed: {
    color: "#212121",
    transition: { delay: 0.1, duration: 0.5 },
  },
};

function Nav(props) {
  //State handler for hovering effect on NavBar
  const [open, setOpen] = useState(false);
  function flip() {
    setOpen(!open);
  }
  // Nav Elements outside name
  const addOn = (
    <motion.div
      transition={{
        staggerChildren: 0.5,
      }}
      className="addOnMenu"
    >
      <MenuItem name="PROJECTS" link="/projects" />

      <MenuItem name="ABOUT" link="/about" />
    </motion.div>
  );
  return (
    //Header is just for positioning the upper part
    <motion.div className="header">
      {/* Centers Navigation Bar and Sets up expanding animation */}
      <motion.div
        variants={containerVariants}
        initial={false}
        animate={open ? "open" : "collapsed"}
        transition={{ duration: 0.3 }}
        className="container"
        onHoverStart={() => {
          setOpen(true);
        }}
        onHoverEnd={() => {
          flip();
        }}
      >
        <div className="row v-center">
          {/* INFOCONTACT STUFF */}
          <motion.div className="logo">
            {/* MY NAME */}
            <Link to="/">
              <motion.a variants={textVariants} className="desktop">
                AYMERIC<span className="small"> FOYER</span>
              </motion.a>
            </Link>
          </motion.div>
          {addOn}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
