import React from "react";

function Flikr() {
  const api_key = process.env.REACT_APP_API_KEY;
  const user_id = process.env.REACT_APP_USER_ID;
  return fetch(
    `https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${api_key}&user_id=${user_id}`
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      return jsonResponse.photos.photo.map((pic) => {
        return `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
      });
    });
}
