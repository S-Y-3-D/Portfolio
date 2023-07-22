import React,{useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";


export default function Card({ name, description, time, grade }) {


    const dark = useSelector((state) => state.switch.value);
    function RelevantCourse({ name, description, time, grade }) {
        return (
          <div
            className={`${
              dark ? "bg-[#252529]" : "bg-[#F6F6F7]"
            } mt-4 rounded-2xl p-5 w-full h-full`}
          >
            <div className="flex flex-row items-center justify-between">
              <div className="w-3/4 flex flex-col justify-between space-y-1">
                <div>
                  <h2
                    className={`${
                      dark ? "text-primary-head-black" : "text-primary-head-white"
                    } font-satoshiB text-2xl`}
                  >
                    {name}
                  </h2>
                  <h2
                    className={`${
                      dark ? "text-primary-para-black" : "text-primary-para-white"
                    } font-satoshiRg text-base`}
                  >
                    {time}
                  </h2>
                  <h2
                    className={`${
                      dark ? "text-primary-para-black" : "text-primary-para-white"
                    } font-satoshiRg text-sm text-justify`}
                  >
                    <strong className="underline">description</strong>
                    <br />
                    {description}
                  </h2>
                </div>
              </div>
              <div
                className={`border-l ${
                  dark
                    ? "border-l-primary-head-white"
                    : "border-l-primary-head-black"
                }  p-4`}
              >
                <p>
                  <strong className="text-5xl font-outfitB text-primary-500">
                    {grade}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        );
      }

    const [styles, setStyles] = useState({prespective:"1000px",width:"100%",maxWidth:"100%",transition:"transform 0.1s linear",transform:"none"});
    const [highlightStyles, setHighlightStyles] = useState({left:"-20%",top:"-13%",transistion:"transform 0.3s ease-in-out"});

    function handleMouseMove(e){
    const cardWrapper = document.querySelector(".cardWrapper");
    // const card = document.querySelector(".education-card-move");
    // const highlight = document.querySelector(".highlight");
    
    // highest values for angle
    const mostX = 10; // 10 or -10
    const mostY = 10; // 10 or -10
    // wrapperStyles.transition = "transform 0.1s ease-in-out";
    // highlight.style.transition = "transform 0.5s ease-in-out";
  
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const { width, height } = cardWrapper.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const rotationY = ((x - halfWidth) / halfWidth) * mostX*2;
    const rotationX = ((y - halfHeight) / halfHeight) * mostY*2;

    setStyles((prev) => ({...prev,transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`}))
    setHighlightStyles((prev) => ({...prev,left :`${(rotationY / mostX) * 30 * -1}%`,top : `${(rotationX / mostY) * 30 * -1}%`}))

    }

    function handleMouseLeave(e){
    const cardWrapper = document.querySelector(".cardWrapper");
    
    // highest values for angle
    const mostX = 10; // 10 or -10
    const mostY = 10; // 10 or -10
    setStyles((prev) => ({...prev,transform: `rotateY(0) rotateX(0)`,transition :"transform 0.3s linear"}))
    setHighlightStyles((prev) => ({...prev,transition :"left 0.3s linear, top 0.3s linear",top : `-13%`,left:"-20%"}))
    }

    
  return (
    <div style={styles} className="cardWrapper" onMouseMove = {(e) => handleMouseMove(e)}  onMouseLeave = {(e) => handleMouseLeave(e)}>
      <div className="education-card-move">
          <RelevantCourse
          name={name}
          description={description}          
          time={time}
          grade={grade}
          />
        <div className="highlight" style={highlightStyles}></div>
      </div>
    </div>
  )
}
