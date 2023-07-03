import { motion, AnimatePresence } from "framer-motion";
import certificate from "../../assets/3D/certificate.png";
import { useSelector } from "react-redux";
import React from "react";

export default function Experience() {
  const Points = ({ desc, points, start, end, current }) => (
    <section>
      <p
        className={`font-satoshiRg text-base ${
          dark ? "text-primary-head-black" : "text-primary-head-white"
        }`}
      >
        {desc}
      </p>
      <div className="mt-4 flex flex-row">
        <section className="flex justify-between w-2/12">
          <div className="flex flex-col justify-between">
            
            <p
              className={`text-right font-satoshiRg text-sm ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }`}
            >
              {end}
            </p>
            <p
              className={`text-right font-satoshiRg text-sm ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }`}
            >
              {start}
            </p>
          </div>
        </section>
        <div
          className={`duration border-l relative ${
            dark ? "border-primary-head-white" : "border-primary-head-black"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full relative circle-1 ${
             current ?  "bg-green-400 " : dark ? "bg-primary-head-white" : "bg-primary-head-black"
        }`}
          >
            {current && <div className="w-2 h-2 rounded-full absolute active-circle "></div>}
          </div>
          
          <div
            className={`w-2 h-2 rounded-full absolute circle-2 ${
              dark ? "bg-primary-head-white" : "bg-primary-head-black"
            }`}
          ></div>
          <ul
            className={`indent-4 ml-5 text-justify space-y-1 mt-2 font-satoshiRg text-base ${
              dark ? "text-primary-para-black" : "text-primary-para-white"
            }`}
          >
            {points.map((point) => (
              <li>+ {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

  const dark = useSelector((state) => state.switch.value);
  const pageTransition = {
    hidden: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <div className="experience-content">
        <div className=" experience-header">
          <div className="mt-16">
            <h1
              className={`text-2xl font-satoshiB ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              }`}
            >
              Experience
            </h1>
            <p
              className={`mt-2 text-base font-satoshiRg text-justify ${
                dark ? "text-primary-para-black" : "text-primary-para-white"
              }`}
            >
              I provide a distinct viewpoint to resolving complicated issues as
              a fervent AI enthusiast with a wide skill set in design, frontend
              programming, and mobile app development. I have experience
              developing for Android, iOS, and MERN & FARM stacks, and I'm
              committed to making compelling user experiences and expanding the
              realm of what's possible.
            </p>
          </div>
        </div>
        <div className="mx-5">
          <div className="mt-16">
            <h1 className="font-satoshiMd text-primary-500 text-3xl">
              AI Engineer
            </h1>
            <h1
              className={`font-satoshiMd ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              } text-lg`}
            >
              Funavry · currently working
            </h1>
            <div className="mt-5">
              <Points
                desc={
                  "I have shouldered various responsibilities, including data collection, model parallelism, and training and fine-tuning complex models, among others, throughout my journey. Some of the highlights include:"
                }
                points={[
                  "Data collection and data cleaning of blockchain articles exceeding over 100,000+ for chainGPT. Over the collected data, queried GPT 3.5 for questions and their answers. The pair of questions and answers exceeded over 400,000 Q/A that were trained on GPT-2 and then later fine-tuned with extra data for better results.",
                  "Worked on extracting patterns like double top, double bottom, head and shoulder and much more of stock and digital coin prices using computer vision and classic Artificial intelligence algorithms.",
                ]}
                start="Jun 2023"
                end="Current"
                current={true}
              />
            </div>
          </div>
          <div className="mt-16">
            <h1 className="font-satoshiMd text-primary-500 text-3xl">
              Data Scientist
            </h1>
            <h1
              className={`font-satoshiMd ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              } text-lg`}
            >
              Musketeers Tech · 3mos
            </h1>
            <div className="mt-5">
              <Points
                desc={
                  "Created and fine-tuned Machine Learning Models including learning and using state of the art models according to the requirements of the clients. Some of the main highlight includes"
                }
                points={[
                  "Data collection and data cleaning of multiple books and fine tuning of model on collected data to generate summaries of books.",
                  "Optimized the BERT model through fine-tuning with 10,000+ training examples resulting in a 10% improvement in accuracy in generating multiple-choice questions.",
                  "Utilized Python and deep learning techniques to develop an AI video creation script, resulting in a 60% reduction in video creation time for clients.",
                ]}
                start="Sep 2022"
                end="Dec 2022"
              />
            </div>
          </div>
          <div className="mt-16">
            <h1 className="font-satoshiMd text-primary-500 text-3xl">
              Machine Learning Engineer
            </h1>
            <h1
              className={`font-satoshiMd ${
                dark ? "text-primary-head-black" : "text-primary-head-white"
              } text-lg`}
            >
              AIM Lab · 2mos
            </h1>
            <div className="mt-5">
              <Points
                desc={
                  "Developing Machine Learning Pipelines for Text, Images, Time Series, and Tabular Data. deployment and training of an Urdu to Sindhi Neural Translation Model."
                }
                points={[
                  "Prepared dataset for Urdu to Sindhi translation model. Performed data cleaning and preprocessing on a dataset of over 100,000 sentences.",
                ]}
                start="Jul 2021"
                end="Aug 2021"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
