import React, { Component, useState } from "react";
import { motion, Scroll } from "framer-motion";
// import "../styles/header.scss";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
//VARIANTS

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

  //Variants for the NavBar

  const containerVariants = {
    open: {
      opacity: 1,
      width: "80%",
      backgroundColor: "#212121",
      borderRadius: "10px",
    },
    collapsed: {
      opacity: 1,
      width: "80%",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
      transition: { delay: 0.1, duration: 0.5 },
    },
  };
  // Nav Elements outside name
  const addOn = (
    <motion.div className="addOnMenu">
      <MenuItem
        name="PROJECTS"
        link="/projects"
        backgroundSelectColor="#e0e0e0"
      />

      <MenuItem name="ABOUT" link="/about" backgroundSelectColor="#e0e0e0" />
      <MenuItem
        name="TEST"
        link="test"
        backgroundSelectColor="#e0e0e0"
      ></MenuItem>
    </motion.div>
  );
  return (
    //Header is just for positioning the upper part
    <motion.div
      initial={{ y: "-10%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.75, duration: 1, delayChildrenChildren: 5 }}
      className="header"
    >
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <motion.p variants={textVariants} className="desktop">
                AYMERIC<span className="small"> FOYER</span>
              </motion.p>
            </Link>
          </motion.div>
          {addOn}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
