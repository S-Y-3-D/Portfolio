import React from 'react'
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { switchColor } from '../features/dark/darkSlice'
import { Link } from 'react-router-dom';
export default function Navbar() {

  const dark = useSelector((state) => state.switch.value)
  const dispatch = useDispatch()

  return (
    <div  className='navbar flex items-center justify-between'>
        <h3 className={`font-outfitB text-3xl cursor-pointer ${dark && "text-white"}`}><Link to="/">Syed.</Link></h3>
        <div className={`flex gap-10 font-satoshiMd ${dark && "text-white"}`}>
        <h4 className='cursor-pointer'>About</h4>
        <h4 className='cursor-pointer'><Link to="/education">Education</Link></h4>
        <h4 className='cursor-pointer'><Link to="/experience">Experience</Link></h4>
        </div>
        <div className='flex flex-row items-center gap-6'>
        {dark ? <BsFillSunFill onClick={() => dispatch(switchColor())} color='#FFFFE3'  className='cursor-pointer'  size={24}/> : <BsFillMoonFill onClick={() => dispatch(switchColor())} className='cursor-pointer'  size={24}/> }
        </div>
        
    </div>
  )
}
