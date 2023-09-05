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
  console.log(`Don't worry. There's no tracking on this site (that I know of...) so here's a yummy, ad-free cookie 🍪`)
  console.log("Made by Aymeric Foyer. 2023. \n https://aymericfoyer.com");
  }, []);
  return (
    <>
      <Nav />
      <main>
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
      </main>
    </>
  );
}

export default App;
