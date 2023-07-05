import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import Web from "./components/Projects/Web";
import React, { useEffect } from "react";
import About from "./components/About";
import { Routes, Route, useLocation} from "react-router-dom";
import Education from "./components/Routes/Education";
import { AnimatePresence } from "framer-motion";
import Experience from './components/Routes/Experience';
import Footer from './components/Footer';
function App() {
  const dark = useSelector((state) => state.switch.value);
  const location = useLocation()

  useEffect(() => {
    const onPageLoad = () => {};

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  document.body.style.backgroundColor = dark ? "#1E1E20" : "white";

  function Main() {
    return (
    <><div className="content">
      <Home />
      <About />
      {/* <Web /> */}
    </div>
</>
  )
  }
  return (
    <>
      <div className="content">
          <Navbar />
        </div>
      <AnimatePresence mode="wait">
        <Routes  location={location} key={location.pathname}>
          <Route path="/" element={<Main/>}>
            
          </Route>
          <Route path="/education" element={<Education/>}>
          </Route>
          <Route path="/experience" element={<Experience/>}>
          </Route>
        </Routes>
      
      </AnimatePresence>
      <Footer/>
    </>
  );
}

export default App;
