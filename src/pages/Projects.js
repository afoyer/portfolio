import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Flickr from "../components/flickr";

function Projects() {
  const [photos, storePhotos] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Flickr().then((array) => {
      storePhotos(array);
      setLoading(true);
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="photos"
    >
      <motion.div className="loader">
        {!loading && (
          <motion.img
            key="load"
            className="load"
            initial={false}
            animate={{
              rotate: [0, -5, 360],
              transition: {
                ease: "easeInOut",
                type: "spring",
                loop: Infinity,
                duration: 1,
              },
            }}
            exit={{ opacity: 0 }}
            src="https://raw.githubusercontent.com/afoyer/portfolio/master/public/logo512.png"
          />
        )}
      </motion.div>
      <motion.div className="imageContainer">{loading && photos}</motion.div>
    </motion.div>
  );
}
export default Projects;
