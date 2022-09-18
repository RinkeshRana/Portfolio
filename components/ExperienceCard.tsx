import React from "react";
import { motion } from "framer-motion";
import { DiJavascript } from "react-icons/di";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]  md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10 cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-200 outline-hidden">
      <motion.img
        src="/company-logo.png"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job Title</h4>
        <p className="font-bold text-2xl mt-1">COMPANY</p>
        <div className="flex space-x-2 my-2">
          <DiJavascript color="white" />
          <DiJavascript color="white" />
          <DiJavascript color="white" />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... -Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-4 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
