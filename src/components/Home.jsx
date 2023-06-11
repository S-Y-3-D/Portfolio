import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSelector, useDispatch } from 'react-redux'
import Scene from '../components/Spline/Scene'
import DarkScene from '../components/Spline/DarkScene';

export default function Home() {
  
  const dark = useSelector((state) => state.switch.value)
  return (
    <div className={`bg-transparent h-screen`}>
    <div className={`text-center  flex flex-col h-full items-center justify-center ${dark && "text-white"}`}> 
      {dark ? <DarkScene /> :<Scene/>}
        <h2 className='font-outfitMd text-7xl'>
        I’m <strong className='text-primary-500'>Syed</strong>. I will create your dream web and mobile application.
        </h2>
        <div className='flex flex-row items-center justify-center mt-10'>
        <h2 className={`${dark ? "text-gray-300" : "text-gray-500" }  font-satoshiRg text-2xl `}>Embrace your upcoming project with&#160;</h2>
        <div className='active font-outfitMd'>
          <ul>
            <li> Reliability</li>
            <li> Usability</li>
            <li> Quality</li>
          </ul>
        </div>
        <div></div>
        </div>
        <div className={`flex gap-3 items-center justify-center w-[40%]   mt-10`}>
         <button className=' font-satoshiMd text-white text-xl background-connect w-1/2 rounded-lg p-3'>Let's Connect
         </button>
         <button className={`font-satoshiMd text-xl  bg-gray-100 text-black w-1/2 rounded-lg  p-3`}>Know More </button>
        </div>
        <h2 className={`${dark ? "text-gray-300" : "text-gray-500" } mt-5  font-satoshiRg text-lg `}>Connect to discuss the next big project</h2>
        <div>
        </div>
      {/* <div className="flex items-center justify-center">
      <div className='rounded-full p-1 bg-[#3F32CA] border'>
      <input className='p-3 rounded-full'  placeholder='Type your email here' type='text'/>
      <button className='bg-[#3F32CA] text-white rounded-full p-3'>Get a quote</button>
      </div>

      </div> */}
    </div>
    </div>

  )
}
