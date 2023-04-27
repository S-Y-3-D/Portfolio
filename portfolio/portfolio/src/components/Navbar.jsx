import React from 'react'


export default function Navbar() {

  return (
    <div className='flex items-center justify-between'>
        <h3 className='font-chillaxSemi text-3xl cursor-pointer'>Syed.</h3>
        <div className='flex space-x-5 font-chillaxMd'>
        <h4 className='cursor-pointer'>About</h4>
        <h4 className='cursor-pointer'>Projects</h4>
        <h4 className='cursor-pointer'>Experience</h4>
        </div>
        <button className='font-chillaxMd text-white bg-primary-500 p-3 rounded-lg'>Let's Talk</button>
    </div>
  )
}
