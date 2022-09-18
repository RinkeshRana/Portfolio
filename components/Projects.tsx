import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const [loading, setLoading] = React.useState(true);
  const [projects, setProjects] = React.useState([]);

  const fetchProjects = async () => {
    const res = await fetch("/api/fetchProjects");
    const data = await res.json();
    setProjects(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchProjects();
  }, []);

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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex  overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {loading ? (
          <div className="flex justify-center items-center w-full">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <p className="text-gray-500">Loading...</p>
          </div>
        ) : (
          projects.map((project, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:44 h-screen"
            >
              <motion.img
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                src={project["photoUrl"]}
                alt="SKILL"
                className="w-96 rounded-sm "
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-base md:text-3xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index + 1} of {projects.length} :&nbsp;
                  </span>
                  {project["name"]}
                </h4>
                <p className="md:text-lg text-center md:text-left text-sm">
                  {project["description"]}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
