import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { DiVim } from "react-icons/di";
type Props = {};

function WorkExperience({}: Props) {
  const experiences: any[] = [];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden  flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiences
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.length === 0 ? (
          <div className="text-center w-full uppercase tracking-widest text-gray-400 animate-pulse">
            Currently, Zero Experience
          </div>
        ) : (
          experiences.map((experience, index) => <ExperienceCard key={index} />)
        )}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
