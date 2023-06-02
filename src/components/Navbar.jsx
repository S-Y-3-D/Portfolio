import React from 'react'
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { switchColor } from '../features/dark/darkSlice'

export default function Navbar() {

  const dark = useSelector((state) => state.switch.value)
  const dispatch = useDispatch()

  return (
    <div  className='navbar flex items-center justify-between'>
        <h3 className={`font-chillaxSemi text-3xl cursor-pointer ${dark && "text-primary-800"}`}>Syed.</h3>
        <div className={`flex gap-10 font-chillaxMd ${dark && "text-primary-800"}`}>
        <h4 className='cursor-pointer'>About</h4>
        <h4 className='cursor-pointer'>Projects</h4>
        <h4 className='cursor-pointer'>Experience</h4>
        </div>
        <div className='flex flex-row items-center gap-6'>
        {dark ? <BsFillSunFill onClick={() => dispatch(switchColor())} color='#FFFFE3'  className='cursor-pointer'  size={24}/> : <BsFillMoonFill onClick={() => dispatch(switchColor())} className='cursor-pointer'  size={24}/> }
        <button className='font-chillaxMd text-white bg-primary-500 p-3 rounded-full'>Let's Talk</button>
        </div>
        
    </div>
  )
}
