import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { items } from "../data/projectData";

function ItemList(props) {
  const [expandedDay, setCollapsedDay] = useState();

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          inView
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        exit={{
          opacity: 0,
        }}
        id="projects"
        className="project-container"
      >
        <motion.div
          className="project-title-div"
          initial={false}
          animate={
            inView
              ? {
                  color: "#212121",
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                }
              : {
                  opacity: 0,
                  y: 50,
                  transition: {
                    duration: 1,
                  },
                }
          }
          exit={{
            opacity: 0,
          }}
          whileHover={{
            color: ["#7953d2", "#1565c0"],
            transition: {
              yoyo: Infinity,
              ease: "easeInOut",
              duration: 0.7,
            },
          }}
        >
          <h1> My Projects. </h1>
        </motion.div>
        <div className="dates v-center h-center">
          {" "}
          {items.map((item, index) => (
            <ProjectItem
              key={index}
              number={index}
              data={item}
              setColor={props.setColor}
              disabled={expandedDay !== index && expandedDay !== undefined}
              onExpand={() => setCollapsedDay(index)}
              onCollapse={() => setCollapsedDay()}
            />
          ))}{" "}
        </div>{" "}
      </motion.div>
    </div>
  );
}
export default ItemList;
