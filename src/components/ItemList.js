import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

function ItemList() {
  const [expandedDay, setCollapsedDay] = useState();
  const data = [
    {
      title: "Radiosity-Based Renderer",
      content: ["• Java-based cornell-box"],

      titlecolor: "#ffffff",
      imgsource:
        "https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/render.PNG",

      background: "#53090E",
    },
    {
      title: "Events Application",
      titlecolor: "#ffffff",
      content: [
        "this is the content that may or may not be modified .... AGAIN.",
      ],
      imgsource:
        "https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/events.png",

      background: "rgba(82,95,157,1)",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="projects"
      className="project-container"
    >
      <div className="dates">
        {data.map((item, index) => (
          <ProjectItem
            key={index}
            data={item}
            disabled={expandedDay !== index && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(index)}
            onCollapse={() => setCollapsedDay()}
          />
        ))}
      </div>
    </motion.div>
  );
}
export default ItemList;
