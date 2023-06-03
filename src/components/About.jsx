import React,{useState} from 'react'
import headshot from '../assets/images/headshot.jpg'
import headshotWhite from '../assets/images/headshot-white.jpg'
import faisal from '../assets/images/faisal-mosque.png'
import { useSelector } from 'react-redux';
import codesticker from '../assets/images/code.jpg';
import guitar from '../assets/images/guitar.png';
import game from '../assets/images/game.gif';
import brain from '../assets/images/brain.webp';
import skills from '../assets/images/skills.webp';
import eye from '../assets/images/education.gif';
import signature from '../assets/images/signature.png';
import spotify from '../assets/images/spotify.png';
import heart from '../assets/images/heart.gif'
import {motion} from 'framer-motion';
 

export default function About() {

  
  const dark = useSelector((state) => state.switch.value)
  const [showSkills, setShowSkills] = useState(false)
 
  return (
    <div className={`relative border  h-screen ${dark ? "border-black" : "border-white"} `}>
      <div className='absolute -top-20 m-0'>
<h1 className={`font-chillaxSemi ${dark ? "border-black" : "border-white"}  ${dark && "text-primary-800"}  project-heading`}>Quick Tour</h1>
</div>
<div className='flex items-center justify-center mt-16'>

<div className="parent gap-4 w-11/12 ">
      
<div className="div1 z-10 flex flex-col items-center justify-center relative place-self-center">
  {/* <img src={eye} className='w-36 rounded-full'/> */}
  <div>
  <img src={dark ? headshotWhite: headshot} className='rounded-full'/>
  <img src={signature} className='w-full absolute bottom-[20%]'/>
  </div>
  
</div>
<div className="div2 z-10 place-self-center">

<motion.div
      className="rounded-3xl p-3 w-full h-full flex flex-col items-center justify-center info-bg"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <p  className="text-3xl p-1 mt-1 font-generalSansMd text-white text-center">Specialized in AI, web & mobile application development</p>
  <div className='flex flex-row'>
  <motion.div  className='cursor-default rounded-full text-center bg-black text-white bottom-0 left-16 px-4 py-1 m-2'>
    <p className='font-generalSansMd  text-sm'>Web Developer</p>
    <p className='text-xs font-generalSansRg text-gray-300'>6 months</p>
  </motion.div>
    <motion.div className='cursor-default  rounded-full text-center bg-white bottom-0 left-16 px-4 py-1 m-2'>
    <p className='font-generalSansMd text-sm'>AI Engineer</p>
    <p className='text-xs font-generalSansRg  text-gray-600'>1+ years</p>
  </motion.div>
  </div>
  <p className='font-generalSansMd text-white text-sm mt-2'>See more</p>

  </motion.div>

  
</div>
<div className="div3 z-10 place-self-center">
<div>
    <div className='main'>
    <img src={faisal} width="65" height="65"/>
    <svg id="rotatingText"  width="150" height="150">
      <defs>
        <path id="circle" d="M 75, 75
                m -56.25, 0
                a 56.25, 56.25 0 1, 0 112.5, 0
                a 56.25, 56.25 0 1, 0 -112.5, 0
                ">
        </path>
      </defs>
      <text width="400">
        <textPath alignmentBaseline="top" xlinkHref="#circle" className="text font-generalSansRg">
        · Lives in Pakistan · Lives in Pakistan   
        </textPath>
      </text>
    </svg> 
    </div>
  </div>
</div>
<div className="div4 z-10 place-self-center">
<motion.div
      className="rounded-3xl p-3 w-full h-full text-center flex items-center justify-center text-white bg-educate text-3xl font-generalSansMd"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }} 
  >
    <div>
    <p className='p-1 mt-1'>Bachelor's in Computer Science</p>
    <motion.div className=' flex items-center justify-center '>
    <motion.div  className='cursor-default rounded-full text-center bg-black text-white py-1 px-4  m-2'>
    <p className='font-generalSansMd  text-sm'>FAST NUCES</p>
    <p className='text-xs font-generalSansRg text-gray-300'>Islamabad</p>
  </motion.div>
    <div className='cursor-default rounded-full text-center bg-white p-3 m-2'>
    <div className='flex items-center'><p className='text-black font-generalSansMd  text-sm'>GPA <span className='text-gray-300'><strong className='text-primary-500 '>  3.05 </strong> / 4</span></p></div>
    </div>
    
  </motion.div>
    <p className='text-sm mt-2'>See more</p>
    </div> 

  </motion.div> 
</div>
<div className='div5 z-10 w-full h-full place-self-center'>
<motion.div onMouseOver={() => setShowSkills(true)} onMouseLeave={() => setShowSkills(false)} className={`bg-skills p-2 h-full   rounded-full flex flex-col items-center justify-evenly text-center text-xl font-generalSansMd text-white`} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <div className={`${showSkills ? "hidden":"block"} shadow-sm p-2 m-1 bg-white rounded-2xl text-[#FFC145] cursor-default`}>
        Soft Skills
      </div>
      <div className={`${showSkills ? "block":"hidden"} shadow-sm p-2 m-1 bg-white rounded-2xl text-[#FFC145]  space-y-1 cursor-default`}>
      <p>Team player</p>
      <p>Autodidactic</p>
      <p>Adaptable</p>
      <p>Creative</p>
      </div>
    </motion.div>
</div>
<div className="div6 z-10 place-self-start gap-2">
<div className={`rounded-full flex flex-col items-center p-5 mx-5 justify-center  bg-like text-white`}>
    <img src={heart} className='w-9'/>
    <p className='educate-heading text-xl font-generalSansMd'>Things I like to do</p>
  </div>
</div>
<div className="div7 z-10 gap-2 place-self-start">
  <div className='subdiv1'>
  <img src={codesticker} className='w-20 rounded-full'/>
  </div>
  <div className='subdiv2'>
  <motion.div whileHover={{scale:1.05}} className='rounded-full w-20 h-20 bg-[#454545]'><img src={guitar} className='w-20 rounded-full'/></motion.div>
  
  </div>
  <div className='subdiv3'>
  <div className='rounded-full bg-[#0B2521] w-20 h-20 flex flex-row items-center justify-center'>
    <img src={spotify} className='w-12 rounded-full'/></div>
   </div>
   <div className='subdiv4 place-self-center'>
   <motion.div whileHover={{scale:1.05}} className=''><img src={game} className='rounded-full'/></motion.div>
  </div>
  <div className='subdiv5 place-self-center'>
  <img src={brain} className=' rounded-full '/> 
    </div>
  </div>
  </div>
    </div>
    </div>
  )
}