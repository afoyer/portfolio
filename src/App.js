import React, { useState } from "react";

import "./styles/app.scss";
import Nav from "./components/header";
import { Route, Switch, useLocation } from "react-router-dom";
import Banner from "./components/banner";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence initial={{ transition: { delayChildren: 1.5 } }}>
        <Switch location={location} key={location.key}>
          <Route key="home" path="/" exact>
            <Banner />
          </Route>
          <Route key="projects" path="/projects"></Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
