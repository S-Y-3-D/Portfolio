import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiSparkles } from "react-icons/hi";
import tensorflow from "../../assets/icons/TensorFlow.jpg";
import react from "../../assets/icons/react.png";
import azure from "../../assets/icons/azure.png";
import deep from "../../assets/icons/deep.png";
import git from "../../assets/icons/git.jpg";
import sql from "../../assets/icons/postgreSQL.png";
import pytorch from "../../assets/icons/pytorch.png";
import three from "../../assets/icons/three.png";
import { useLocation } from "react-router-dom";

export default function Education() {
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const pageTransition = {
    hidden: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  function RelevantCourse({ name, description, time, grade, index }) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
        className={`${
          dark ? "bg-[#252529]" : "bg-[#F6F6F7]"
        } mt-4 rounded-2xl p-5`}
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
      </motion.div>
    );
  }

  function OnlineCourse({ name, source, skills, image, index }) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
        className={`${
          dark ? "bg-[#252529]" : "bg-[#F6F6F7]"
        } mt-4 rounded-2xl flex flex-row items-center justify-between p-5`}
      >
        <div className="info space-y-1">
          <h1
            className={`${
              dark ? "text-primary-head-black" : "text-primary-head-white"
            }  text-2xl font-satoshiB`}
          >
            {name}
          </h1>
          <h1
            className={`${
              dark ? "text-primary-para-black" : "text-primary-para-white"
            } font-satoshiRg text-xs`}
          >
            Learned from {source}
          </h1>
          <h1
            className={`font-satoshiRg ${
              dark ? "text-primary-para-black" : "text-primary-para-white"
            } text-base flex flex-row`}
          >
            <HiSparkles size={24} /> {skills}
          </h1>
        </div>
        {/* <div classname="mr-3">
            <img className="w-16 rounded-full" src={image}/>
        </div> */}
      </motion.div>
    );
  }

  function FutureCourse({ name, source, reason, image }) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
        className={`${
          dark ? "bg-[#252529]" : "bg-[#F6F6F7]"
        } mt-4 rounded-2xl flex flex-col p-5`}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="">
            <h1
              className={`${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }  text-2xl font-satoshiB`}
            >
              {name}
            </h1>
            <h1
              className={`${
                dark ? "text-primary-para-black" : "text-primary-para-white"
              } font-satoshiRg text-xs`}
            >
              Offered by {source}
            </h1>
          </div>
          <div classname="mr-3 w-20 ">
            <img className="object-contain w-20 rounded-full" src={image} />
          </div>
        </div>

        <h2
          className={`${
            dark ? "text-primary-para-black" : "text-primary-para-white"
          } font-satoshiRg text-sm text-justify`}
        >
          <strong className="underline">Reason</strong>
          <br />
          {reason}
        </h2>
        {/* <div classname="mr-3">
            <img className="w-16 rounded-full" src={image}/>
        </div> */}
      </motion.div>
    );
  }
  const dark = useSelector((state) => state.switch.value);
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <div className="education-content">
        <div className=" education-header grid grid-rows-1 grid-cols-2 gap-5 ">
          <div className="mt-16 place-self-start">
            <h1
              className={`text-2xl font-satoshiB ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }`}
            >
              Education
            </h1>
            <p
              className={`mt-2 text-base font-satoshiRg text-justify ${
                dark ? "text-primary-para-black" : "text-primary-para-white"
              }`}
            >
              I have achieved a comprehensive computer science degree from FAST
              University (Foundation for Advancement of Science and Technology),
              marking the culmination of my academic journey. Throughout my
              rigorous coursework, I embraced a challenging curriculum that
              instilled a robust understanding of fundamental computer science
              principles and honed my practical skills to meet industry
              standards.
            </p>
            <h1
              className={`mt-16 text-2xl font-satoshiB ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }`}
            >
              Relevant Coursework
            </h1>
            <p
              className={`mt-2 text-base font-satoshiRg text-justify ${
                dark ? "text-primary-para-black" : "text-primary-para-white"
              }`}
            >
              My studies have encompassed a wide range of subjects, including
              programming, algorithms, data structures, software engineering,
              artificial intelligence, computer networks, and database
              management. Through these courses, I have gained a deep
              understanding of the fundamental concepts and techniques that
              drive the field of computer science.Through my studies, I have
              covered programming, algorithms, data structures, software
              engineering, artificial intelligence, computer networks, and
              database management. These courses have provided me with a strong
              foundation in computer science, encompassing fundamental concepts
              and techniques.
            </p>
          </div>
          <div className="h-[650px] education-card-group place-self-center">
            <div
              className="university-images"
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
            >
              <div class="small-card education-card"></div>
              <div class="small-card education-card"></div>
              <div class="small-card education-card"></div>
              <div class="small-card education-card"></div>
            </div>
            <div>
              <AnimatePresence>
                {" "}
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`alt ${
                      dark
                        ? "text-primary-para-black"
                        : "text-primary-para-white"
                    } mt-4 font-satoshiRg text-sm text-center`}
                  >
                    FAST University and some of my Friends
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div>
          <div className="col-span-2">
            <h1
              className={`text-2xl font-satoshiB ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }`}
            >
              Featured Courses
            </h1>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <RelevantCourse
              name="Object Oriented Programming"
              description="In Object-Oriented Programming (OOP), learned to model real-world concepts using objects, classes, and inheritance. Key principles include encapsulation, abstraction, polymorphism, and inheritance, enabling modular and extensible description design."
              time="Summer 2019"
              grade="A-"
            />
            <RelevantCourse
              name="Software Design & Analysis"
              description="
              Software design and analysis involves gathering requirements, modeling systems, designing architectures, creating interfaces, and utilizing design patterns to develop efficient and maintainable software solutions."
              time="Fall 2020"
              grade="A"
            />
            <RelevantCourse
              name="Natural language processing"
              description="
              NLP focuses on using computational methods to understand and process human language, including tasks like text classification, sentiment analysis, named entity recognition, machine translation, and language generation."
              time="Fall 2022"
              grade="A-"
            />
            <RelevantCourse
              name="Game Theory"
              description="Game theory studies strategic decision-making in competitive situations, analyzing outcomes in games with multiple players, including actions, strategies, payoffs, cooperation, and optimal decision-making."
              time="Fall 2022"
              grade="A"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="mt-16">
            <h1
              className={`text-2xl font-satoshiB ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }`}
            >
              Online Courses
            </h1>
            <div className=" grid grid-row-3 grid-cols-2 gap-4">
              <OnlineCourse
                name="TensorFlow for Deep Learning"
                source="Udacity"
                skills="TensorFlow · CNNs · RNNs · Time Series"
                image={tensorflow}
                index={0}
              />
              <OnlineCourse
                name="Advanced React"
                source="Scrimba"
                skills="React · Hooks · HOCs  · Redux"
                image={react}
                index={1}
              />
              <OnlineCourse
                name="Deep Learning Specialization"
                source="Coursera"
                skills="Neural Networks · CNNs · Sequence Models"
                image={deep}
                index={3}
              />
              <OnlineCourse
                name="Machine Learning Specialization"
                source="Coursera"
                skills="Classification · Regression · Clusttering · Recommender Systems"
                image={deep}
                index={4}
              />
              <OnlineCourse
                name="Fundamentals of AI Azure"
                source="Microsoft"
                skills="Cloud Services · Azure · Azure ML Lab"
                image={azure}
                index={2}
              />
              <OnlineCourse
                name="Version control with Git"
                source="Udacity"
                skills="Push · Merge · Resolve conflicts "
                image={git}
                index={5}
              />
            </div>
          </div>
          <div className="mt-16">
            <h1
              className={`text-2xl font-satoshiB ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }`}
            >
              Future Courses: Learning Wishlist
            </h1>
            <div className=" grid grid-row-3 grid-cols-2 gap-4">
              <FutureCourse
                name="PostgresSQL"
                source="postgresqltutorial"
                reason="The reason to learn PostgreSQL for its wide adoption and popularity across organizations. It offers advanced features like complex queries, indexing, and JSON handling. Benefit from a supportive community, extensive documentation, and seamless integration with technologies like Apache Spark, Apache Kafka, and Elasticsearch."
                // image={sql}
              />
              <FutureCourse
                name="Three.js for Web"
                source="three.js-library by bruno simon"
                reason="Driven by a deep fascination for captivating websites featuring immersive 3D experiences, I have embarked on a journey to acquire expertise in spline integration for seamless site implementation. However, recognizing the inherent limitations in interaction capabilities, I have resolved that Three.js stands as the optimal choice. With great anticipation, I eagerly await the opportunity to delve into the mastery of Three.js in the year 2023."
                // image={three}
              />
              <div className="col-span-2">
                <FutureCourse
                  className="col-span-2"
                  name="Pytorch"
                  source="tlearnpytorch.io"
                  reason="I am deeply motivated to acquire proficiency in PyTorch due to its myriad features and advantages. The dynamic computational graph, which enables flexibility and simplified debugging, is particularly appealing. The Pythonic ecosystem of PyTorch allows for an intuitive and concise coding experience, aligning with best practices in the field. Moreover, the seamless integration with Python libraries empowers me to leverage a wide range of tools for data manipulation, visualization, and other essential tasks. Another compelling aspect of PyTorch is its research-friendly nature, making it a preferred choice for many researchers and practitioners."
                  // image={pytorch}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
