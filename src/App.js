import React from "react";

import "./styles/app.scss";
import Nav from "./components/header";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route key="home" path="/" exact>
            <Home />
          </Route>
          <Route key="projects" path="/projects"></Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
