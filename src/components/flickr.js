import React from "react";

function Flikr() {
  const api_key = "512229ca9997758450725cfd4095cf76";
  const user_id = "189755012@N03";
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
