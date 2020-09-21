import React, { useEffect } from "react";

import "./styles/app.scss";
import Nav from "./components/header";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";

import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  //When route changes scroll page back to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    console.log("Made by Aymeric Foyer. 2020. \n https://aymericfoyer.com");
  }, []);
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route key="photos" path="/photos">
            <Photos />
          </Route>
          <Route key="home" path="/" exact>
            <Home />
          </Route>
          <Route key="404" path="/"></Route>
        </Switch>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
