/**
 * Flickr fetches pictures from *my* profile and creates an <img> array
 * with links to images to display (currently 15 per page) with clickable links
 */
function Flikr(pagenumber: number, imagecount: number) {
  // :)
  const api_key = process.env.REACT_APP_FLICKR_KEY;
  const user_id = process.env.REACT_APP_USER_ID;

  //Fetch profile's public phot from flickr
  return (
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${api_key}&user_id=${user_id}&extras=tags&format=json&nojsoncallback=?&per_page=${imagecount}&page=${pagenumber}`
    )
      //turn into json
      .then((response) => {
        return response.json();
      })
      .then(({ photos }) => {
        //Turn json into objects with link and id for anchor link
        return {
          total: photos.total,
          photos: photos.photo.map((pic: any) => {
            var srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
            return { srcPath, id: pic.id, title: pic.title };
          }),
        };
      })
  );
}
export default Flikr;
