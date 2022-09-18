import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  name?: string;
  image?: string;
};

function Skill({ directionLeft, name, image }: Props) {
  console.log(name);

  return (
    <div className="group relative flex cursor-pointer m-1">
      <div>
        <motion.img
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
          src={image}
          className="animate-float rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-200 ease-in-out"
        />
        <motion.div
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: directionLeft ? -50 : 100, opacity: 0 }}
          className="text-center uppercase tracking-wide text-xs md:text-sm mt-2 text-gray-300 animate-pulse animate-floating"
        >
          {name}
        </motion.div>
      </div>
    </div>
  );
}

export default Skill;
