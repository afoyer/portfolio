import React, { useState, useEffect } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
/**
 * Content at this point only holds the title of the project. it used to hold all content until I changed it to be more modular
 * @param {*} param0
 */
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
/**
 * Compact Card, Holds image and content but never displays content. Used for smooth transition between Compact and Expanded cards.
 * @param {*} param0
 */
function CompactProjectCard({
  children,
  data,
  onExpand,
  disabled,
  startColor,
  endColor,
  index,
}) {
  const setColor = () => {
    startColor(data.backgroundHover);
  };
  return (
    <motion.div
      className="card compact"
      layoutId={`expandable-card${index}`}
      onClick={disabled ? undefined : onExpand}
      onMouseEnter={setColor}
      onMouseLeave={endColor}
    >
      <motion.div
        className="title-bg"
        layoutId="title-bg"
        style={{
          backgroundColor: data.background,
        }}
      >
        <picture>
          <source srcSet={data.imgsource + ".webp"} type="image/webp" />
          <source srcSet={data.imgsource + ".jpg"} type="image/jpeg" />
          <motion.img layoutId="image" src={data.imgsource} alt={data.title} />
        </picture>
        {children}
      </motion.div>
    </motion.div>
  );
}
/**
 * Expanded Card, Holds image and content mostly but will take onCollapse for AnimateSharedLayout purposes.
 * @param {*} param0
 */
function ExpandedProjectCard({ children, data, onCollapse, index }) {
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
        id="expanded"
        // animate={{ scale: 1 }}
        className="card expanded"
        layoutId={`expandable-card${index}`}
      >
        <motion.div
          className="title-bg"
          layoutId="title-bg"
          onClick={onCollapse}
          style={{
            background: data.background,
          }}
        >
          <picture>
            <source srcSet={data.imgsource + ".webp"} type="image/webp" />
            <source srcSet={data.imgsource + ".jpg"} type="image/jpeg" />
            <motion.img
              className="expanded-image"
              layoutId="image"
              src={data.imgsource}
              alt={data.title}
              initial={{ x: 20, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 },
              }}
            />
          </picture>
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
/**
 * ProjectItem is both the compact and expanded card. can set the background color on hover and click.
 * @param {*} data - holds data of content (JSX style)
 */
function ProjectItem({
  number,
  data,
  onCollapse,
  onExpand,
  disabled,
  setColor,
}) {
  const [isOpen, setOpen] = useState(false);
  const collapseDate = () => {
    setOpen(false);
    onCollapse();
    enableBodyScroll("#expanded");
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
    disableBodyScroll("#expanded");
    onExpand();
    // setColor();

    setColor(data.background);
  };
  return (
    <AnimateSharedLayout>
      <motion.div className="card-container">
        {isOpen ? (
          <ExpandedProjectCard
            onCollapse={collapseDate}
            data={data}
            index={number}
          >
            <Content data={data} disabled={disabled} />
          </ExpandedProjectCard>
        ) : (
          <CompactProjectCard
            index={number}
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
