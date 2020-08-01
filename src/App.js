import React, { useState } from "react";
import logo from "./logo.svg";
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

      <Switch location={location} key={location.key}>
        <AnimatePresence>
          <Route path="/" exact>
            <Banner />
          </Route>
          <Route path="/projects"></Route>
        </AnimatePresence>
      </Switch>
    </>
  );
}

export default App;
