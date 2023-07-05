import React from "react";
import faisal from "../assets/images/faisal-mosque.png";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Footer() {

  const openInNewTab = (link) => {
    window.open(link,'_blank','noopener,noreferer')
  }

  function Connect({social,rotate,size,arrowSize,link}){
    return (<div  onClick={()=>openInNewTab(link)} className="flex cursor-pointer flex-row items-center justify-between w-1/2">
          <p className="font-satoshiMd text-lg text-primary-para-black">
            {social}
          </p>
          <div className={`w-${size} h-${size} flex flex-row items-center justify-center rounded-full bg-[#FFC633]`}>
        <AiOutlineArrowRight size={arrowSize} className={`-rotate-${rotate}`} />
      </div>
      </div>)
  }
  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function(){
      if ( window.scrollY != 0 ) {
          window.scrollBy( 0, scrollStep );
      }
      else clearInterval(scrollInterval); 
   },15);
  }
  function Circle({size,arrowSize}) {
    return (
      <div onClick={()=>scrollToTop(200)} className={`w-${size} h-${size} cursor-pointer flex flex-row items-center justify-center rounded-full bg-[#FFC633]`}>
        <AiOutlineArrowRight size={arrowSize} className={`-rotate-90`} />
      </div>
    );
  }
  const dark = useSelector((state) => state.switch.value);
  return (
    <div className="mt-36">
      <div className="bg-[#000] grid grid-rows-1 grid-cols-5">
      <div className="m-5 bg-primary-500 p-4 rounded-lg">
        <h1 className="text-white text-4xl text-center font-outfitMd">
          Let’s create your dream
        </h1>
      </div>
        <div className="m-5  space-y-2">
          <h1 className={` text-primary-head-black font-satoshiMd text-2xl`}>
            Explore
          </h1>
          <p className="font-satoshiMd w-fit line-lightup text-lg text-primary-para-black">
            About
          </p>
          <p className="font-satoshiMd w-fit line-lightup text-lg text-primary-para-black">
            Experience
          </p>
          <p className="font-satoshiMd w-fit line-lightup text-lg text-primary-para-black">
            Projects
          </p>
          <p className="font-satoshiMd w-fit line-lightup text-lg text-primary-para-black">
            Blogs
          </p>
        </div>
        <div className="m-5  space-y-2">
          <h1 className={` text-primary-head-black font-satoshiMd text-2xl`}>
            Get In touch
          </h1>
          <p className="font-satoshiMd text-lg text-primary-para-black">
            0334 8554058
          </p>
          <p className="font-satoshiMd text-lg text-primary-para-black">
            @syedhamzatahir1001
          </p>
        </div>
        <div className="m-5  space-y-2">
          <h1 className={` text-primary-head-black font-satoshiMd text-2xl`}>
            Connect
          </h1>
          <Connect social={"Linkedln"} rotate={45} size={8} arrowSize={16} link="https://www.linkedin.com/in/syed-hamza17/" />
          <Connect social={"Medium"} rotate={45} size={8} arrowSize={16} link="https://medium.com/@syedhamzatahir1001" />
          <Connect social={"Github"} rotate={45} size={8} arrowSize={16} link="https://github.com/S-Y-3-D" />
        </div>
        <div className="place-self-center">
          <Circle size={32} arrowSize={60}/>
          
        </div>
      </div>
      <div className="bg-[#000]">
        <div className="mx-5 border-gray-700 border-t p-2 grid grid-rows-1 grid-cols-3">
          <div className={`font-outfitB text-2xl text-primary-500`}>Syed.</div>
          <div className="place-self-center">
            <h3 className={`font-notoUrdu text-sm text-white`}>
              {" "}
              · ختم شد ·{" "}
            </h3>
          </div>
          <div className={`font-satoshiRg text-sm text-white place-self-end`}>
            <h1 className="flex justify-center">Crafted with &nbsp;  <span className="text-appear"></span> &nbsp; by Syed</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
}
