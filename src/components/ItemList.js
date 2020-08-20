import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

function ItemList() {
  const [expandedDay, setCollapsedDay] = useState();
  const data = [
    {
      title: "Radiosity-Based Renderer",
      content: ["• Java-based cornell-box"],
      imgsource:
        "https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/render.PNG",
    },
    {
      title: "test2",
      content: [
        "this is the content that may or may not be modified .... AGAIN.",
      ],
    },
  ];
  return (
    <div className="project-container">
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
    </div>
  );
}
export default ItemList;
