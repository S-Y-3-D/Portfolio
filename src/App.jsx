import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useSelector} from 'react-redux'
import Web from './components/Projects/Web';
import TechScene from './components/Spline/TechScene';
import React, { useEffect } from 'react';
import About from './components/About';

function App() {

  const dark = useSelector((state) => state.switch.value)

  useEffect(() => {
    const onPageLoad = () => {
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  document.body.style.backgroundColor = dark ? "black" : "white"
  return (
    <>
    <div className='content'>

    <Navbar/>
    <Home/>
    <About/>
    </div>
    </>
    // <>
    // <div className={`${dark && "bg-black"} -z-20 h-full`}>
    //  <div className='content'>
    //  <Navbar/>
    //  <Home/>
    //  {/* <About/>
    //   <Web/> */}
      
    //  </div>
    //  {/* <TechScene/> */}
    // </div>
    // </>
    )
}

export default App
