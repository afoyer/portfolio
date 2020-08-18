import React, { useState } from "react";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
function Content({ data, disabled }) {
  return (
    <motion.div className="title-bg">
      <motion.h1
        className="title"
        layoutId="title"
        style={{ opacity: disabled ? 0.2 : 1 }}
      >
        {data.title}
      </motion.h1>
      <motion.img src={data.imgsource} />
    </motion.div>
  );
}
function CompactProjectCard({ children, data, onExpand, disabled }) {
  return (
    <motion.div
      className="card compact"
      layoutId="expandable-card"
      // initial={{ scale: 1 }}
      // animate={{ scale: 1 }}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      onClick={disabled ? undefined : onExpand}
    >
      {children}
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
      {children}
      {data.content.map((content) => {
        return (
          <motion.p
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
function ProjectItem({ data, onCollapse, onExpand, disabled }) {
  const [isOpen, setOpen] = useState(false);
  const collapseDate = () => {
    setOpen(false);
    onCollapse();
  };

  const expandDate = () => {
    setOpen(true);
    onExpand();
  };
  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div className="card-container">
        <AnimatePresence>
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
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  );
}
export default ProjectItem;
