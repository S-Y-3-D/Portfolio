import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spline from '@splinetool/react-spline';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <>
    <Navbar/>
    <Scene/>
    <Home/>
    </>
    )
}

export default App
