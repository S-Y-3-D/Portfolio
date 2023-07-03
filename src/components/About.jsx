import React, { useState, useRef } from "react";
import headshot from "../assets/images/headshot.jpg";
import headshotWhite from "../assets/images/headshot-white.jpg";
import faisal from "../assets/images/faisal-mosque.png";
import { useSelector } from "react-redux";
import signature from "../assets/images/signature.png";
import briefcase from "../assets/3D/Briefcase.png";
import certificate from "../assets/3D/Certificate.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Counter from "./Counter";
import guitar from "../assets/3D/Ukulele.png";
import music from "../assets/3D/music.png";
import coffee from "../assets/3D/coffee.png";
import { spring, useVariants } from "./config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const dark = useSelector((state) => state.switch.value);
  const [showSkills, setShowSkills] = useState(false);
  const [cursorImage, setCursorImage] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = useRef(null);
  const hoverOnImage = cursorImage === 2 ? briefcase :  certificate

  const variants = useVariants(ref);

  const pageTransition = {
    hidden:{opacity:0},
    animate:{opacity:1},
    exit:{opacity:0}
}

  function EducationEnter() {
    setCursorImage(1);
    setCursorVariant("education");
  }

  function Leave() {
    setCursorVariant("default");
  }

  function ExperienceEnter() {
    setCursorImage(2);
    setCursorVariant("experience");
  }

  function CircleLink() {
    return (
      <div className="w-14 h-14 border border-black flex flex-row items-center justify-center rounded-full bg-[#FFC633]">
        <AiOutlineArrowRight className="w-8 h-8 -rotate-45" />
      </div>
    );
  }

  function Headings({ name, isShowLink, reverse }) {
    const text_color = dark ?  "text-primary-head-black" : "text-primary-head-white"
    const direction = reverse ? "flex-row" : "flex-row";
    return (
      <div className={`flex ${direction} items-center justify-between mx-2`}>
        <h2 className={`font-satoshiMd ${text_color} text-3xl`}>{name}</h2>
        {isShowLink && <CircleLink />}
      </div>
    );
  }

  function ExperienceBrief({ position, company, date }) {
    return (
      <>
        <p
          className={`mt-2 ${
            dark ? "text-primary-para-black" : "text-primary-para-white"
          } font-satoshiB text-lg mx-2`}
        >
          {position}
        </p>
        <p
          className={`${
            dark ? "text-primary-para-black" : "text-primary-para-white"
          } font-satoshiRg text-lg mx-2`}
        >
          {company}
        </p>
        <p
          className={`${
            dark ? "text-primary-para-black" : "text-primary-para-white"
          } font-satoshiMd text-xs mx-2`}
        >
          {date}
        </p>
      </>
    );
  }

  return (
    <motion.div className="App" variants={pageTransition} initial="hidden" animate="animate" exit="exit">
      <div>
        <div className="container" ref={ref}>
          <motion.div
            variants={variants}
            className="circle"
            initial="hidden"
            animate={cursorVariant}
            exit="hidden"
            transition={spring}
          >
            <div className="hover-main w-32 h-32">
                <img src={hoverOnImage} width="50" height="50" />
                <svg id="rotatingText" width="120" height="120">
                  <defs>
                    <path
                      id="hover-circle"
                      d="M 60, 60
                 m -45, 0
                 a 45, 45 0 1, 0 90, 0
                 a 45,45 0 1, 0 -90, 0
                 "
                    ></path>
                  </defs>
                  <text width="400">
                    <textPath
                      alignmentBaseline="top"
                      xlinkHref="#hover-circle"
                      className=" font-satoshiRg hover-text fill-white"
                    >
                      · See more · See more · See more 
                    </textPath>
                  </text>
                </svg>
              </div>
          </motion.div>

          <div className="h-screen grid grid-rows-4 grid-cols-3">
            <div className="">
              <Headings name="Biography" />
              <p
                className={`mt-2 ${
                  dark ?  "text-primary-para-black" : "text-primary-para-white" 
                } font-satoshiRg mx-2 text-lg `}
              >
                I'm Syed, a passionate and ambitious individual based in
                Pakistan. My deep-rooted passion for AI drives me to excel in
                creating innovative solutions.
              </p>
            </div>
            <div className=" row-span-4  place-self-center relative">
              <div className="card-group">
                <div className="little-card card">
                  <img src={guitar} className="rounded-full" />
                </div>
                <div className="little-card card">
                  <img src={music} className="rounded-full" />
                </div>
                <div className="little-card card">
                  <img src={coffee} className="rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={dark ? headshotWhite : headshot}
                    className="w-4/5 rounded-full"
                  />
                  <img
                    src={signature}
                    className="w-3/4 absolute bottom-[10%]"
                  />
                  <div className="absolute w-4/5 h-full rounded-full picture-outline"></div>
                </div>
              </div>
            </div>
            <div className="">
              <Headings name="Soft Skills" reverse={true} />
              <p
                className={`mt-2 ${
                  dark ? "text-primary-para-black" : "text-primary-para-white" 
                } font-satoshiB text-right text-3xl mx-2`}
              >
                Team Player · Autodidactic · Adaptable · Creative
              </p>
            </div>

            <div className="">
              <Headings name="Services" />
              <p
                className={`mt-2 ${
                  dark ? "text-primary-para-black" : "text-primary-para-white" 
                } font-satoshiRg text-lg mx-2`}
              >
                We excel in <strong>Web</strong>, <strong>AI</strong> and{" "}
                <strong>App</strong> development, delivering captivating
                solutions with innovative tech, seamless integration, and
                stunning designs that leave a lasting impression.
              </p>
            </div>
            <div className="">
              <Headings name="Projects Done" reverse={true} />
              <div
                className={`mt-2 ${
                  dark ? "text-primary-para-black" : "text-primary-para-white" 
                } font-satoshiB text-right text-3xl mx-2`}
              >
                <Counter value={25} />+ projects
              </div>
            </div>
            <div className="">
              <div
                className={`flex flex-row items-center justify-between mx-2`}
              >
                <h2
                  className={`font-satoshiMd ${
                    dark ? "text-primary-head-black" : "text-primary-head-white"
                  }  text-3xl`}
                >
                  Education
                </h2>
                <Link to="/education">
                <div
                  onMouseEnter={EducationEnter}
                  onMouseLeave={Leave}
                  className="w-16 h-16 flex flex-row items-center justify-center rounded-full bg-[#FFC633]"
                >
                  <AiOutlineArrowRight className="w-8 h-8 -rotate-45" />
                </div>
                </Link>
                
              </div>
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p
                    className={`mt-2 ${
                      dark ? "text-primary-para-black" : "text-primary-para-white" 
                    } font-satoshiRg text-lg mx-2`}
                  >
                    Bachelor of Science, CS
                  </p>
                  <p className={`text-primary-500 font-satoshiMd text-lg mx-2`}>
                    FAST NUCES
                  </p>
                  <p
                    className={`${
                      dark ? "text-primary-para-black" : "text-primary-para-white" 
                    } font-satoshiMd text-xs mx-2`}
                  >
                    09/2018 - 01/2023
                  </p>
                </div>
                <div className="text-center border-l">
                  <p
                    className={`${
                      dark ? "text-primary-head-black" : "text-primary-head-white"
                    } font-satoshiRg text-lg mx-2`}
                  >
                    GPA
                  </p>
                  <p
                    className={`${
                      dark ? "text-primary-head-black" : "text-primary-head-white"
                    } font-satoshiRg text-lg mx-2`}
                  >
                    <strong className="text-primary-500">3.05 </strong>/ 4.0
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <Headings name="Years of experience" reverse={true} />
              <div
                className={`mt-2 ${
                  dark ? "text-primary-para-black" : "text-primary-para-white" 
                } font-satoshiB text-right text-3xl mx-2`}
              >
                <Counter value={1} />+ years
              </div>
            </div>
            <div className="">
              <div
                className={`flex flex-row items-center justify-between mx-2`}
              >
                <h2
                  className={`font-satoshiMd ${
                    dark ? "text-primary-head-black" : "text-primary-head-white"
                  }  text-3xl`}
                >
                  Experiences
                </h2>
                <Link to="/experience">
                <div
                  onMouseEnter={ExperienceEnter}
                  onMouseLeave={Leave}
                  className="w-16 h-16 flex flex-row items-center justify-center rounded-full bg-[#FFC633]"
                >
                  <AiOutlineArrowRight className="w-8 h-8 -rotate-45" />
                </div>
                </Link>
              </div>
              <ExperienceBrief
                position={"Data Scientist"}
                company={"Funavry Technologies · Full-time"}
                date={"06/2023 - Current"}
              />
              <ExperienceBrief
                position={"Data Scientist"}
                company={"Musketeers Tech · Internship"}
                date={"Sep 2022 - Nov 2022 · 3 mos"}
              />
              <ExperienceBrief
                position={"Machine Learning Engineer"}
                company={"AIM Lab · Internship"}
                date={"Jul 2021 - Aug 2021 · 2 mos"}
              />
            </div>
            <div className={""}>
              <Headings name="Location" reverse={true} />
              <p
                className={`mt-2 ${
                  dark ? "text-primary-para-black" : "text-primary-para-white" 
                } font-satoshiRg text-lg mx-2`}
              >
                Born and raised in Pakistan.
              </p>
              <div className="main w-40 h-40 float-right">
                <img src={faisal} width="65" height="65" />
                <svg id="rotatingText" width="150" height="150">
                  <defs>
                    <path
                      id="circle"
                      d="M 75, 75
                 m -56.25, 0
                 a 56.25, 56.25 0 1, 0 112.5, 0
                 a 56.25, 56.25 0 1, 0 -112.5, 0
                 "
                    ></path>
                  </defs>
                  <text width="400">
                    <textPath
                      alignmentBaseline="top"
                      xlinkHref="#circle"
                      className="text font-satoshiRg"
                    >
                      · Based in Pakistan · Based in Pakistan
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
