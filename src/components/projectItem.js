import React, { useState } from "react";

import { motion, AnimateSharedLayout } from "framer-motion";
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
function CompactProjectCard({
  children,
  data,
  onExpand,
  disabled,
  startColor,
  endColor,
}) {
  const setColor = () => {
    startColor(data.backgroundHover);
  };
  return (
    <motion.div
      className="card compact"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
      onHoverStart={setColor}
      onHoverEnd={endColor}
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
    <>
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5 },
        }}
        onClick={onCollapse}
        className="close-button"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
      </motion.svg>
      <motion.div
        // animate={{ scale: 1 }}
        className="card expanded"
        layoutId="expandable-card"
      >
        <motion.div
          className="title-bg"
          layoutId="title-bg"
          onClick={onCollapse}
          style={{
            background: data.background,
          }}
        >
          <motion.img
            layoutId="image"
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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          className="expanded-content"
        >
          {data.content}
        </motion.div>
      </motion.div>
    </>
  );
}
function ProjectItem({ data, onCollapse, onExpand, disabled, setColor }) {
  const [isOpen, setOpen] = useState(false);
  const collapseDate = () => {
    setOpen(false);
    onCollapse();

    setColor("#ffffff");
  };
  const startColor = (color) => {
    if (!disabled) {
      setColor(color);
    }
  };
  const endColor = () => {
    if (!disabled) {
      setColor("#ffffff");
    }
  };
  const expandDate = () => {
    setOpen(true);
    onExpand();
    // setColor();

    setColor(data.background);
  };
  return (
    <AnimateSharedLayout>
      <motion.div className="card-container">
        {isOpen ? (
          <ExpandedProjectCard onCollapse={collapseDate} data={data}>
            <Content data={data} disabled={disabled} />
          </ExpandedProjectCard>
        ) : (
          <CompactProjectCard
            onExpand={expandDate}
            disabled={disabled}
            startColor={startColor}
            endColor={endColor}
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
