import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSelector, useDispatch } from 'react-redux'
import Scene from '../components/Spline/Scene'
import DarkScene from '../components/Spline/DarkScene';

export default function Home() {
  
  const dark = useSelector((state) => state.switch.value)
  return (
    <div className={`border h-screen ${dark ? "border-black" : "border-white"} `}>
    {dark ? <DarkScene /> :<Scene/>}
    <div className={`text-center mx-auto my-52 w-3/4 ${dark && "text-primary-800"}`}>
        <h2 className='font-chillaxMd text-5xl'>
        I’m <strong className='text-primary-500'>Syed</strong>. I will create your dream web and mobile application.
        </h2>
        <h3 className='font-generalSansRg text-lg w-4/5 mx-auto mt-5'>
        Elevate Your Business with Expertly Designed Web and Mobile Applications that Drive Results and Captivate Your Audience.
        </h3>
        <div>
        </div>
      <div className="flex items-center justify-center">
      <div className='rounded-full p-1 bg-[#3F32CA] border'>
      <input className='p-3 rounded-full'  placeholder='Type your email here' type='text'/>
      <button className='bg-[#3F32CA] text-white rounded-full p-3'>Get a quote</button>
      </div>

      </div>
    </div>
    </div>

  )
}
