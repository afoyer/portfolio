import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * MenuItem is just an Anchor animated tag. Can set href and name using props.
 * @param {*} props
 * backgroundSelectColor: sets background of item when hovered.
 * link: sets href to desired link.
 * isAnchor: true means that the item is not a route and thus must be handled as a regular anchor.
 */

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
      {!props.isAnchor && (
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
      )}
      {/* Since the menu item can be both a link to a file or a route I had to make sure it could be both without overlapping. */}
      {props.isAnchor && (
        <a
          href={process.env.PUBLIC_URL + props.link}
          style={{ textDecoration: "none" }}
        >
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
        </a>
      )}
    </motion.div>
  );
}
export default MenuItem;
