import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Flickr from "../components/flickr";

function Projects() {
  const [photos, storePhotos] = useState();
  const [loading, setLoading] = useState(false);

  //Fetch images to display, unset loading state
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
      exit={{ opacity: 0 }}
      className="photos"
    >
      {/* LOADING STATE */}
      {!loading && (
        <motion.div className="loader">
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
        </motion.div>
      )}
      {/* IMAGES */}
      {loading && (
        <motion.div className="photoBanner">
          <motion.h1>
            A small collection of my photos. <br /> Follow me on{" "}
            {/* Link to Flickr Account */}
            <span>
              <motion.a
                className="flickr-anchor"
                initial={false}
                animate={{
                  background:
                    "linear-gradient(98deg, rgba(82,160,218,1) 0%, rgba(82,160,218,1) 50%, rgba(82,160,218,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                href="https://www.flickr.com/photos/aymericf/"
                rel="noreferrer noopener"
                target="_blank"
                whileHover={{
                  background: [
                    "linear-gradient(98deg, rgba(252,176,69,1) 0%, rgba(131,58,180,1) 50%, rgba(253,29,29,1) 100%)",
                    "linear-gradient(98deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",

                    "linear-gradient(98deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 50%, rgba(131,58,180,1) 100%)",

                    "linear-gradient(98deg, rgba(252,176,69,1) 0%, rgba(131,58,180,1) 50%, rgba(253,29,29,1) 100%)",
                  ],
                  transition: { loop: Infinity, duration: 2, type: "spring" },
                }}
              >
                Flickr
              </motion.a>
            </span>{" "}
            or{" "}
            <span>
              <motion.a
                className="flickr-anchor"
                initial={false}
                animate={{
                  background:
                    "linear-gradient(98deg, rgba(82,160,218,1) 0%, rgba(82,160,218,1) 50%, rgba(82,160,218,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                href="https://www.instagram.com/aymericjlf/"
                rel="noreferrer noopener"
                target="_blank"
                whileHover={{
                  background: [
                    "linear-gradient(98deg, rgba(252,176,69,1) 0%, rgba(131,58,180,1) 50%, rgba(253,29,29,1) 100%)",
                    "linear-gradient(98deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",

                    "linear-gradient(98deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 50%, rgba(131,58,180,1) 100%)",

                    "linear-gradient(98deg, rgba(252,176,69,1) 0%, rgba(131,58,180,1) 50%, rgba(253,29,29,1) 100%)",
                  ],
                  transition: { loop: Infinity, duration: 2, type: "spring" },
                }}
              >
                Instagram
              </motion.a>
            </span>
            .
          </motion.h1>
        </motion.div>
      )}
      <motion.div className="imageContainer">{loading && photos}</motion.div>
    </motion.div>
  );
}
export default Projects;
