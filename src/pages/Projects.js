import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Flickr from "../components/flickr";

function Projects() {
  const imageperpage = 15;
  const [photos, storePhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagenumber, setPage] = useState(1);
  const [hasMore, isHasMore] = useState(true);
  const observer = useRef();

  const call = useCallback(
    (node) => {
      if (!loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          increase();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  //Fetch images to display, unset loading state
  useEffect(() => {
    //If all images haven't been loaded yet, go and fetch images
    if (hasMore) {
      setLoading(false);

      Flickr(pagenumber, imageperpage).then((array) => {
        //append new image links to previous ones
        storePhotos((photos) => {
          return [...photos, ...array];
        });
        //Check if this was last set of images
        isHasMore(array.length >= imageperpage);
        setLoading(true);
      });
    }
  }, [pagenumber, hasMore]);
  function increase() {
    setPage((page) => page + 1);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="photos"
    >
      {/* IMAGES */}

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

      <motion.div className="imageContainer">
        {photos.map((photo, index) => {
          if (index + 1 === photos.length) {
            return (
              <a
                ref={call}
                rel="noreferrer noopener"
                key={`imageAnchor${photo.id}`}
                href={`https://www.flickr.com/photos/aymericf/${photo.id}`}
                target="_blank"
              >
                <motion.img
                  key={photo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flickrImage"
                  src={photo.path}
                />
              </a>
            );
          } else {
            return (
              <a
                rel="noreferrer noopener"
                key={`imageAnchor${photo.id}`}
                href={`https://www.flickr.com/photos/aymericf/${photo.id}`}
                target="_blank"
              >
                <motion.img
                  key={photo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flickrImage"
                  src={photo.path}
                />
              </a>
            );
          }
        })}
      </motion.div>
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
    </motion.div>
  );
}
export default Projects;
