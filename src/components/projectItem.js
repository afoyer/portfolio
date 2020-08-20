import React, { useState } from "react";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
function Content({ data, disabled }) {
  return (
    <motion.div className="title-div">
      <motion.h1
        className="title"
        // layoutId="title"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3 },
        }}
        style={{
          opacity: disabled ? 0.2 : 1,
          color: data.titlecolor,
        }}
      >
        {data.title}
      </motion.h1>
    </motion.div>
  );
}
function CompactProjectCard({ children, data, onExpand, disabled }) {
  return (
    <motion.div
      className="card compact"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      <motion.div
        className="title-bg"
        layoutId="title-bg"
        style={{
          backgroundColor: data.background,
        }}
      >
        <motion.img layoutId="image" src={data.imgsource} />
        {children}
      </motion.div>
    </motion.div>
  );
}

function ExpandedProjectCard({ children, data, onCollapse }) {
  return (
    <motion.div
      // animate={{ scale: 1 }}
      className="card expanded"
      layoutId="expandable-card"
      onClick={onCollapse}
    >
      <motion.div
        className="title-bg"
        layoutId="title-bg"
        style={{
          background: data.background,
        }}
      >
        <motion.img
          layoutId="image"
          onClick={(e) => {
            console.log("clicked");
          }}
          src={data.imgsource}
          initial={{ x: 20, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 },
          }}
        />
        {children}
      </motion.div>
      {data.content.map((content, index) => {
        return (
          <motion.p
            key={index}
            className="content"
            onClick={onCollapse}
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {content}
          </motion.p>
        );
      })}
    </motion.div>
  );
}
function ProjectItem({ key, data, onCollapse, onExpand, disabled, setColor }) {
  const [isOpen, setOpen] = useState(false);
  const collapseDate = () => {
    setOpen(false);
    onCollapse();
    setColor();
  };

  const expandDate = () => {
    setOpen(true);
    onExpand();
    setColor();
  };
  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div className="card-container">
        {isOpen ? (
          <ExpandedProjectCard onCollapse={collapseDate} data={data}>
            <Content data={data} disabled={disabled} />
          </ExpandedProjectCard>
        ) : (
          <CompactProjectCard
            onExpand={expandDate}
            disabled={disabled}
            data={data}
          >
            <Content data={data} disabled={disabled} />
          </CompactProjectCard>
        )}
      </motion.div>
    </AnimateSharedLayout>
  );
}
export default ProjectItem;
