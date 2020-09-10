/**
 * Flickr fetches pictures from *my* profile and creates an <img> array
 * with links to images to display (currently 15 per page) with clickable links
 */
function Flikr(pagenumber, imagecount) {
  // :)
  const api_key = process.env.REACT_APP_API_KEY;
  const user_id = process.env.REACT_APP_USER_ID;

  return fetch(
    `https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${api_key}&user_id=${user_id}&format=json&nojsoncallback=?&per_page=${imagecount}&page=${pagenumber}`
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      //Turn json into objects with link and id for anchor
      return jsonResponse.photos.photo.map((pic) => {
        var srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        return { path: srcPath, id: pic.id };
      });
    });
}
export default Flikr;
