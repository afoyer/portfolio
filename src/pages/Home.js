import React from "react";
import Banner from "../components/banner";
import ItemList from "./../components/ItemList";
function Home(props) {
  return (
    <div className="home">
      <Banner />
      <ItemList />
    </div>
  );
}
export default Home;
