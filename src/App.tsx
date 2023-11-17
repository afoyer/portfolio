import React, { useEffect } from "react";

import "./styles/app.scss";
import Nav from "./components/header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";

import Footer from "./components/Footer";
import { CacheProvider } from "./context";
import PdfPage from "./pages/pdf-page";

function App() {
  const location = useLocation();
  //When route changes scroll page back to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    console.log(
      `Don't worry. There's no tracking on this site (that I know of...) so here's a yummy, ad-free cookie 🍪`
    );
    console.log("Made by Aymeric Foyer. 2023. \n https://aymericfoyer.com");
  }, []);
  return (
    <>
      <Nav />
      <main>
        <CacheProvider>
          <Routes location={location} key={location.key}>
            <Route key="home" path="/" element={<Home key={"home"} />} />
            <Route
              key="photos"
              path="/photos"
              element={<Photos key={"photos"} />}
            />
            <Route key="resume" path="/resume" element={<PdfPage />} />

            <Route key="404" path="/" />
          </Routes>

          <Footer />
        </CacheProvider>
      </main>
    </>
  );
}

export default App;
