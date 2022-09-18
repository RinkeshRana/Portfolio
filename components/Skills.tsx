import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
  const [loading, setLoading] = React.useState(true);
  const [skills, setSkills] = React.useState([]);

  const fetchSkills = async () => {
    const res = await fetch("/api/fetchSkills");
    const data = await res.json();
    setSkills(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
          Skills
        </h3>

        {loading ? (
          <div className="flex justify-center items-center">
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
          <div className="grid grid-cols-3 md:grid-cols-4">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                name={skill["name"]}
                image={skill["photoUrl"]}
                directionLeft={index % 2 === 0 ? true : false}
              />
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}
