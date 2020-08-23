import React from "react";
import { motion } from "framer-motion";

function Flikr() {
  const api_key = process.env.REACT_APP_API_KEY;
  const user_id = process.env.REACT_APP_USER_ID;

  // const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  return fetch(
    `https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${api_key}&user_id=${user_id}&format=json&nojsoncallback=?&extras=url,l`
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      // console.log(jsonResponse);
      return jsonResponse.photos.photo.map((pic) => {
        var srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        return (
          <a
            rel="noreferrer noopener"
            key={`imageAnchor${pic.id}`}
            href={`https://www.flickr.com/photos/aymericf/${pic.id}`}
            target="_blank"
          >
            <motion.img
              key={pic.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flickrImage"
              src={srcPath}
            />
          </a>
        );
      });
    });
}
export default Flikr;
