import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  const openMail = () => {
    window.location.href = "mailto:rinkeshr007@gmail.com";
  };

  return (
    <header className="sticky p-5 top-0 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/rinkesh7984"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/rinkeshrana"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row cursor-pointer text-gray-300 items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="Gray"
          bgColor="transparent"
        />
        <p
          className="uppercase hidden md:inline-flex text-sm text-gray-400"
          onClick={openMail}
        >
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
