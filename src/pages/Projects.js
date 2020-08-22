import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Flickr from "../components/flickr";
import { useInView } from "react-intersection-observer";

function Projects() {
  const [photos, storePhotos] = useState();
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  useEffect(() => {
    Flickr(ref, inView).then((array) => {
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
            animate={{ opacity: 1 }}
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
