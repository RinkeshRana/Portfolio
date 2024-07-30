import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const [loading, setLoading] = React.useState(true);
  const [projects, setProjects] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const fetchProjects = async () => {
    const res = await fetch("/api/fetchProjects");
    const data = await res.json();
    setProjects(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, projects.length - 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-left md:flex-row max-w-full justify-center items-center overflow-hidden z-0 min-h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        ref={containerRef}
        className="relative w-full flex overflow-x-auto snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {loading ? (
          <div className="flex justify-center items-center w-full py-16">
            <svg
              className="animate-spin h-10 w-10 text-gray-500"
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
            <p className="text-gray-500 ml-4 text-lg">Loading...</p>
          </div>
        ) : (
          <div className="flex space-x-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-8 md:p-16"
              >
                <motion.img
                  initial={{ y: -50, opacity: 0 }}
                  transition={{ duration: 1.0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  src={project["photoUrl"]}
                  alt={project["name"]}
                  className="w-80 md:w-96 rounded-md shadow-lg"
                />
                <div className="space-y-6 px-4 md:px-8 max-w-2xl">
                  <h4 className="text-xl md:text-2xl font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Case Study {index + 1} of {projects.length} :&nbsp;
                    </span>
                    {project["name"]}
                  </h4>
                  <p className="text-center md:text-left text-sm md:text-base">
                    {project["description"]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Horizontal scroll indicators */}
      <div className="absolute bottom-14 transform -translate-y-1/2 flex space-x-4 z-50">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F7AB0A] text-white"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F7AB0A] text-white"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
