import React, { useState } from "react";
import { motion } from "framer-motion";
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
  //function that calls back prop to set background color.
  const setColor = () => {
    startColor(data.backgroundHover);
  };
  const resetColor = () => {
    if (disabled === false) {
      endColor();
    }
  };
  return (
    <motion.div
      className="card compact"
      onClick={disabled ? undefined : onExpand}
      onMouseEnter={setColor}
      onMouseLeave={resetColor}
    >
      <motion.div
        className="title-bg"
        style={{
          backgroundColor: data.background,
        }}
      >
        <picture>
          <source srcSet={data.imgsource + ".webp"} type="image/webp" />
          <source srcSet={data.imgsource + ".jpg"} type="image/jpeg" />
          <motion.img src={data.imgsource} alt={data.title} />
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
      <motion.div
        id="expanded"
        // animate={{ scale: 1 }}
        className="card expanded"
      >
        <motion.div
          className="title-bg"
          onClick={onCollapse}
          style={{
            background: data.background,
          }}
        >
          <div>
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
          </div>
          <picture>
            <source srcSet={data.imgsource + ".webp"} type="image/webp" />
            <source srcSet={data.imgsource + ".jpg"} type="image/jpeg" />
            <motion.img
              className="expanded-image"
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
 * Switches from compact card to expanded when clicked and opposite. Transitions smoothly thanks to animatesharedpresence.
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

  //Color callbacks for background changes
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
  //Switches for cards to transition between each other.
  const collapseDate = () => {
    setOpen(false);
    onCollapse();
    enableBodyScroll("#expanded");
    setColor("#ffffff");
  };
  const expandDate = () => {
    setOpen(true);
    disableBodyScroll("#expanded");
    onExpand();
    setColor(data.background);
  };
  return (
    <>
      <motion.div className="card-container">
        {isOpen && (
          <ExpandedProjectCard
            onCollapse={collapseDate}
            data={data}
            index={number}
          >
            <Content data={data} disabled={disabled} />
          </ExpandedProjectCard>
        )}
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
      </motion.div>
    </>
  );
}
export default ProjectItem;
