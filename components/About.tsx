import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="/slash.png"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="-mb-20 animate-floating md:md-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[200px] "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold tracking-wide ">
          Here is{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
          <p className="text-xs md:text-base text-center mt-4 md:tracking-wide uppercase">
            I have completed 10th with 57%, diploma in computer engineering with
            8.50 CGPA and now i am studying in BTech at SCET which i don&apos;t
            want to. I like to learn new things and i am a self taught
            developer. I have learned react, nextjs, tailwindcss, javascript,
            html, css, nodejs, expressjs, mongodb, firebase, git and github, and
            all that other exciting stuffs.
          </p>
        </h4>
      </div>
    </motion.div>
  );
}

export default About;
