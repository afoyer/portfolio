import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Flickr from "../components/flickr";
import { useInView } from "react-intersection-observer";

function Projects() {
  const [photos, storePhotos] = useState();
  const [loading, setLoading] = useState(false);
  // const [background, placeBackground] = useState();

  // const setBackground = (image)=>{

  // }
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  useEffect(() => {
    Flickr(ref, inView).then((array) => {
      storePhotos(array);
      setLoading(true);
    });
  }, []);
  return (
    <>
      <div className="loader">
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
      </div>
      <motion.div className="imageContainer">{loading && photos}</motion.div>
    </>
  );
}
export default Projects;
