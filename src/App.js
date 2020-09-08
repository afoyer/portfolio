import React from "react";

import "./styles/app.scss";
import Nav from "./components/header";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route key="photos" path="/photos">
            <Projects />
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
