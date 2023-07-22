import React,{useCallback, useEffect, useRef, useState} from 'react'
import { useSpring, animated as a, interpolate } from 'react-spring'
import {FiExternalLink} from 'react-icons/fi'
import {FaGlasses} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import useWindowScroll from '@react-hook/window-scroll'
import useScrollWidth from './useScrollWidth'
import { useSelector} from 'react-redux'
import mailsort from '../../assets/images/mailsort.png'
import soundpai from '../../assets/images/soundpai.png'
import meetease from '../../assets/images/meetease.png'
import quiz from '../../assets/images/quiz.mp4'
import grace from '../../assets/images/grace.mp4'
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function ScrollCarousel({ children,clicked }) {
  
  const dark = useSelector((state) => state.switch.value)
  const refHeight = useRef(null)
  const refTransform = useRef(null)

  const { scrollWidth } = useScrollWidth(refTransform)

  // the argument is the fps that the hook uses,
  // since react spring interpolates values we can safely reduce this below 60
  const scrollY = useWindowScroll(45)
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))

  useEffect(() => {
    set({ st: scrollY })
  }, [scrollY, set])

  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])

  const top = refHeight.current ? refHeight.current.offsetTop : 0
  const width = refHeight.current ? refHeight.current.offsetWidth : 0

  // we want to set the scrolling element *height* to the value of the *width* of the horizontal content
  // plus some other calculations to convert it from a width to a height value
  const elHeight = scrollWidth - (window.innerWidth - window.innerHeight) + width * 0.5 // scroll away when final viewport width is 0.5 done

  const interpTransform = interpolate([st, xy], (o, xy) => {
    const mouseMoveDepth = 40 // not necessary, but nice to have
    const x = width - (top - o) - width

    // (width * 0.5) so that it starts moving just slightly before it comes into view
    if (x < -window.innerHeight - width * 0.5) {
      // element is not yet in view, we're currently above it. so don't animate the translate value
      return `translate3d(${window.innerHeight}px, 0, 0)`
    }

    if (Math.abs(x) > elHeight) {
      // element is not in view, currently below it.
      return `translate3d(${elHeight}px, 0, 0)`
    }

    // else animate as usual
    return `translate3d(${-x + -xy[0] / mouseMoveDepth}px, ${-xy[1] / mouseMoveDepth}px, 0)`
  })
  return (
    <>
    
    <div onMouseMove={onMouseMove} className="scroll-carousel" ref={refHeight} style={{backgroundColor:dark? "#1E1E20" : "white", height: elHeight }}>
    
      <div className="sticky-box">
      <h1 className={`font-outfitMd absolute ${dark ? "text-primary-head-black" : "text-primary-head-white"} project-heading`}>Projects</h1>
        <a.div style={{ transform: interpTransform }} className="transform-box" ref={refTransform}>
          {children}
        </a.div>
</div>
    </div></>
  )
}

export default function Web() {
  

  const dark = useSelector((state) => state.switch.value)
  const [hoverArray, setHoverArray] = useState([false,false,false,false,false])

    return (
      <div className="mt-36 container-web">
        <ScrollCarousel >
          <div onMouseOver={(prev) => setHoverArray( prev => (prev.map((val,index) => (index == 0 ? true : false)))) } onMouseLeave={()=>setHoverArray([false,false,false,false,false])} className={`relative box bg-white ${!dark  ? "border rounded-2xl border-b-gray-300" : "border rounded-2xl border-b-black"}`}>
          <AnimatePresence>
          {hoverArray[0] && 
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            className="absolute z-10 bottom-0 w-full h-1/6 projects-grid"> 
            <motion.div
             transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-black" : "bg-black border-primary-head-white"} hover:bg-primary-500 flex flex-col rounded-l-2xl items-center justify-center`}> 
              <FiExternalLink  size={40} color= {`${dark ? "black" : "white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Check out</p>
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.001}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500  border-l-2  flex flex-col  items-center justify-center`}>
              <FaGlasses  size={40} color={`${dark ? "black":"white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 ${dark ? "text-black" : "text-white"}`}>Nerd view</p>
              
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500   border-l-2 flex flex-col rounded-r-2xl items-center justify-center`}>
            <BsGithub size={40}  color= {`${dark ? "black" : "white" }`}/>
            <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Go to repo</p>
            
            </motion.div>
          </motion.div>
          }
          </AnimatePresence>
            <video autoPlay loop muted className='rounded-2xl'>
            <source src={grace} type="video/mp4"/>
            </video>
          </div>
          <div onMouseOver={(prev) => setHoverArray( prev => (prev.map((val,index) => (index == 1 ? true : false)))) } onMouseLeave={()=>setHoverArray([false,false,false,false,false])} className={`relative box bg-white ${!dark  ? "border rounded-2xl border-b-gray-300" : "border rounded-2xl border-b-black"}`}>
          <AnimatePresence>
          {hoverArray[1] && 
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            className="absolute z-10 bottom-0 w-full h-1/6 projects-grid"> 
            <motion.div
             transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-black" : "bg-black border-primary-head-white"} hover:bg-primary-500 flex flex-col rounded-l-2xl items-center justify-center`}> 
              <FiExternalLink  size={40} color= {`${dark ? "black" : "white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Check out</p>
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.001}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500  border-l-2  flex flex-col  items-center justify-center`}>
              <FaGlasses  size={40} color={`${dark ? "black":"white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 ${dark ? "text-black" : "text-white"}`}>Nerd view</p>
              
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500   border-l-2 flex flex-col rounded-r-2xl items-center justify-center`}>
            <BsGithub size={40}  color= {`${dark ? "black" : "white" }`}/>
            <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Go to repo</p>
            
            </motion.div>
          </motion.div>
          }
          </AnimatePresence>
            <img src={meetease} alt="Meetease" className="img" />
          </div>
          <div onMouseOver={(prev) => setHoverArray( prev => (prev.map((val,index) => (index == 2 ? true : false)))) } onMouseLeave={()=>setHoverArray([false,false,false,false,false])} className={`relative box bg-white ${!dark  ? "border rounded-2xl border-b-gray-300" : "border rounded-2xl border-b-black"}`}>
          <AnimatePresence>
          {hoverArray[2] && 
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            className="absolute z-10 bottom-0 w-full h-1/6 projects-grid"> 
            <motion.div
             transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-black" : "bg-black border-primary-head-white"} hover:bg-primary-500 flex flex-col rounded-l-2xl items-center justify-center`}> 
              <FiExternalLink  size={40} color= {`${dark ? "black" : "white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Check out</p>
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.001}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500  border-l-2  flex flex-col  items-center justify-center`}>
              <FaGlasses  size={40} color={`${dark ? "black":"white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 ${dark ? "text-black" : "text-white"}`}>Nerd view</p>
              
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500   border-l-2 flex flex-col rounded-r-2xl items-center justify-center`}>
            <BsGithub size={40}  color= {`${dark ? "black" : "white" }`}/>
            <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Go to repo</p>
            
            </motion.div>
          </motion.div>
          }
          </AnimatePresence>
          <video autoPlay loop muted className='rounded-2xl'>
            <source src={quiz} type="video/mp4"/>
            </video>
          </div>
          <div onMouseOver={(prev) => setHoverArray( prev => (prev.map((val,index) => (index == 3 ? true : false)))) } onMouseLeave={()=>setHoverArray([false,false,false,false,false])} className={`relative box bg-white ${!dark  ? "border rounded-2xl border-b-gray-300" : "border rounded-2xl border-b-black"}`}>
          <AnimatePresence>
          {hoverArray[3] && 
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            className="absolute z-10 bottom-0 w-full h-1/6 projects-grid"> 
            <motion.div
             transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-black" : "bg-black border-primary-head-white"} hover:bg-primary-500 flex flex-col rounded-l-2xl items-center justify-center`}> 
              <FiExternalLink  size={40} color= {`${dark ? "black" : "white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Check out</p>
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.001}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500  border-l-2  flex flex-col  items-center justify-center`}>
              <FaGlasses  size={40} color={`${dark ? "black":"white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 ${dark ? "text-black" : "text-white"}`}>Nerd view</p>
              
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500   border-l-2 flex flex-col rounded-r-2xl items-center justify-center`}>
            <BsGithub size={40}  color= {`${dark ? "black" : "white" }`}/>
            <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Go to repo</p>
            
            </motion.div>
          </motion.div>
          }
          </AnimatePresence>
            <img src={mailsort} alt="Mailsort" className="img" />
          </div>
          <div onMouseOver={(prev) => setHoverArray( prev => (prev.map((val,index) => (index == 4 ? true : false)))) } onMouseLeave={()=>setHoverArray([false,false,false,false,false])} className={`relative box bg-white ${!dark  ? "border rounded-2xl border-b-gray-300" : "border rounded-2xl border-b-black"}`}>
          <AnimatePresence>
          {hoverArray[4] && 
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            className="absolute z-10 bottom-0 w-full h-1/6 projects-grid"> 
            <motion.div
             transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-black" : "bg-black border-primary-head-white"} hover:bg-primary-500 flex flex-col rounded-l-2xl items-center justify-center`}> 
              <FiExternalLink  size={40} color= {`${dark ? "black" : "white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Check out</p>
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              
              whileHover={{scale:1.001}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500  border-l-2  flex flex-col  items-center justify-center`}>
              <FaGlasses  size={40} color={`${dark ? "black":"white"}`}/>
              <p className={`font-satoshiMd text-xl mt-2 ${dark ? "text-black" : "text-white"}`}>Nerd view</p>
              
            </motion.div>
            <motion.div
            transition={
              {type: "spring",
              damping: 10,
              stiffness: 500}}
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 10 }}
              whileHover={{scale:1.05}}
            className={`cursor-pointer ${dark ? "bg-white border-primary-head-white" : "bg-black border-primary-head-black"} hover:bg-primary-500   border-l-2 flex flex-col rounded-r-2xl items-center justify-center`}>
            <BsGithub size={40}  color= {`${dark ? "black" : "white" }`}/>
            <p className={`font-satoshiMd text-xl mt-2 text-center ${dark ? "text-black" : "text-white"}`}>Go to repo</p>
            
            </motion.div>
          </motion.div>
          }
          </AnimatePresence>
            <img src={soundpai} alt="SoundPai" className="img" />
          </div>
          
        </ScrollCarousel>
        
      </div>
    )
  }

