import React, { useState } from "react";
import { motion } from "framer-motion";
// import "../styles/header.scss";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
//VARIANTS

//Logo Variants
const textVariants = {
  open: {
    fill: "#FFFFFF",

    color: ["#C70039", "#01579B", "#FFFFFF"],
    transition: {
      flip: 0,
      ease: "linear",
      duration: 1,
    },
  },
  collapsed: {
    fill: "#212121",
    color: "#212121",
    transition: { duration: 0.5 },
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
      backgroundColor: "rgba(33, 33, 33, 0.5)",

      boxShadow: "0px 5px 15px -5px #212121",
    },
    collapsed: {
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 0.5)",

      backdropFilter: "blur(6px)",
      boxShadow: "0px 0px 0px -5px rgba(0, 0, 0, 0)",
      transition: { delay: 0.1, duration: 0.3 },
    },
  };
  // Nav Elements outside name
  const addOn = (
    <motion.div
      className="addOnMenu"
      exit={{ transition: { staggerChildren: 0.1 } }}
    >
      <MenuItem name="PHOTO📸" link="/photos" backgroundSelectColor="#ffffff" />
      <MenuItem
        name="RESUME📄"
        link="/resume"
        backgroundSelectColor="#ffffff"
      ></MenuItem>
    </motion.div>
  );
  return (
    //Header is just for positioning the upper part
    <motion.div
      initial={{ y: "-10%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1, delayChildrenChildren: 5 }}
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
              <motion.svg
                whileHover={{
                  fill: ["#FFFFFF", "#C70039", "#01579B", "#FFFFFF"],
                  transition: {
                    loop: Infinity,
                    flip: 0,
                    ease: "linear",
                    duration: 3,
                  },
                }}
                variants={textVariants}
                className="svg"
                id="fcf5b712-7bd0-4bf9-9e66-ba09277fc08c"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 259.57 158.05"
                preserveAspectRatio="xMidYMid meet"
              >
                <polyline points="104.42 1.11 259.57 0 225.92 29.63 136.84 29.63 136.84 69.13 179.84 69.13 157.06 98.77 137.1 98.77 137.1 157.19 104.42 157.19" />
                <path
                  d="M35.55,238.22H62.12l12.09-14.68L140,200.42V81.28Zm93.08-59.11c-6.59,2.35-36.51,14.37-44.34,17-1.21.42-1.18-.47-.73-1.15l45.91-71.81c-.15.21.51.46.44,1v53.13A1.92,1.92,0,0,1,128.63,179.11Z"
                  transform="translate(-35.55 -80.17)"
                />
                <polygon points="187.61 69.13 164.82 98.77 194.34 98.77 216.6 69.13 187.61 69.13" />
              </motion.svg>
              <motion.p variants={textVariants} className="desktop">
                {/* AYMERIC<span className="small"> FOYER</span> */}
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
