import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ItemList(props) {
  const [expandedDay, setCollapsedDay] = useState();
  const data = [
    {
      title: "Radiosity-Based Renderer",
      content: ["• Java-based cornell-box"],

      titlecolor: "#ffffff",
      imgsource:
        "https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/render.PNG",

      background: "#53090E",
      backgroundHover: "#f05545",
    },
    {
      title: "Events Application",
      titlecolor: "#ffffff",
      content: [
        "tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing",
      ],
      imgsource:
        "https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/events.png",

      background: "#525F9D",
      backgroundHover: "#525F9D",
    },
  ];
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.6,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <motion.div
        className="project-title-div"
        initial={false}
        animate={
          inView
            ? {
                color: "#212121",
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              }
            : { opacity: 0, x: -100, transition: { duration: 1 } }
        }
        exit={{ opacity: 0 }}
        whileHover={{
          color: ["#7953d2", "#1565c0"],
          transition: { yoyo: Infinity, ease: "easeInOut", duration: 0.7 },
        }}
      >
        <h1>My Projects.</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        id="projects"
        className="project-container"
      >
        <div className="dates">
          {data.map((item, index) => (
            <ProjectItem
              key={index}
              data={item}
              setColor={props.setColor}
              disabled={expandedDay !== index && expandedDay !== undefined}
              onExpand={() => setCollapsedDay(index)}
              onCollapse={() => setCollapsedDay()}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
export default ItemList;
