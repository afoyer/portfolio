import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//MenuItem is just an Anchor animated tag. Can set href and name using props

function MenuItem(props) {
  //Framer Motion Variants. May remove if I want to make it a prop
  const itemVariants = {
    open: {
      x: 0,
      y: 0,
      opacity: 1,
      borderRadius: "6px",
      color: "#FFFFFF",
      transition: {
        duration: 0.5,
      },
    },
    collapsed: {
      opacity: 1,

      color: "#212121",
      transition: { duration: 0.2 },
    },
  };
  return (
    //This div is just so I can scale on hover...

    <motion.div whileHover={{ scale: 1.05 }}>
      <Link to={props.link} style={{ textDecoration: "none" }}>
        <motion.h3
          whileHover={{
            color: "#212121",
            backgroundColor: props.backgroundSelectColor,

            boxShadow: "0px 5px 15px 0px #fffff",
          }}
          whileTap={{
            color: "#424242",
            backgroundColor: "#ffffff",
            transition: {
              duration: 0.2,
            },
          }}
          variants={itemVariants}
          className="menuItem"
        >
          {props.name}
        </motion.h3>
      </Link>
    </motion.div>
  );
}
export default MenuItem;
