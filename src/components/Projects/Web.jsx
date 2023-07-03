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
    
    <div onMouseMove={onMouseMove} className="scroll-carousel" ref={refHeight} style={{backgroundColor:dark?"black":"white", height: elHeight }}>
    
      <div className="sticky-box">
      <h1 className={`font-chillaxSemi absolute ${dark && "text-primary-800"} project-heading`}>Projects</h1>
        <a.div style={{ transform: interpTransform }} className="transform-box" ref={refTransform}>
          {children}
        </a.div>
        <div className={`${clicked ? "block":"hidden"} animated animatedFadeInUp fadeInUp `} >
        <div className={`w-2/6 flex flex-row items-center py-2 justify-around rounded-xl toolbar shadow-lg ${dark ? "bg-primary-800 shadow-black/50 " : "bg-black shadow-gray-300"} `}>
            <div className='flex flex-col items-center'>
              <FiExternalLink className='cursor-pointer' size={18} color= {`${dark ?"black":"white"}`}/>
              <p className={`font-chillaxRg text-xs mt-1 ${!dark && "text-white"}`}>Check out</p>
             
            </div>
            <div className='flex flex-col items-center'>
              <FaGlasses className='cursor-pointer' size={18} color= {`${dark ?"black":"white"}`}/>
              <p className={`font-chillaxRg text-xs mt-1 ${!dark && "text-white"}`}>Nerd view</p>
              
            </div>
            <div className='flex flex-col items-center'>
            <BsGithub className='cursor-pointer' size={18}  color= {`${dark ?"black":"white"}`}/>
            <p className={`font-chillaxRg text-xs mt-1 ${!dark && "text-white"}`}>Go to repository</p>
            
            </div>
          </div>
        </div>
        <div className='invisible'>
          shadow
        </div>

</div>
    </div></>
  )
}

export default function Web() {
  

  const dark = useSelector((state) => state.switch.value)
  const [clicked, setClicked] = useState(false)

    return (
      <div className="container-web h-screen">
        <ScrollCarousel clicked={clicked}>
          <div onClick={()=>setClicked(prev => !prev)} className={`box bg-white ${!dark  ? "border rounded-2xl border-b-gray-300" : "border rounded-2xl border-b-black"}`}>
            <video autoPlay loop muted className='rounded-2xl'>
            <source src={grace} type="video/mp4"/>
            </video>
          </div>
          <div onClick={()=>setClicked(prev => !prev)} className={`box ${!dark && "border rounded-2xl border-gray-300"}`}>
            <img src={meetease} alt="Meetease" className="img" />
          </div>
          <div onClick={()=>setClicked(prev => !prev)} className={`box bg-white ${!dark  ? "border rounded-2xl border-b-gray-300" : "border rounded-2xl border-b-black"}`}>
          <video autoPlay loop muted className='rounded-2xl'>
            <source src={quiz} type="video/mp4"/>
            </video>
          </div>
          <div onClick={()=>setClicked(prev => !prev)} className={`box ${!dark && "border rounded-2xl border-gray-300"}`}>
            <img src={mailsort} alt="Mailsort" className="img" />
          </div>
          <div onClick={()=>setClicked(prev => !prev)} className={`box ${!dark && "border rounded-2xl border-gray-300"}`}>
            <img src={soundpai} alt="SoundPai" className="img" />
          </div>
          
        </ScrollCarousel>
        
      </div>
    )
  }

