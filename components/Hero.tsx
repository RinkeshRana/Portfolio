import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Rinkesh.", "a Fullstack Developer.", "an Open Source Enthusiast."],
    loop: 0,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center  text-center overflow-hidden">
      <BackgroundCircles />
      {/* <Image
        src={"/author-image.jpeg"}
        alt="Picture of the author"
        width={200}
        height={200}
        className="rounded-full h-32 w-32 mx-auto relative object-cover"
      /> */}
      <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          Hey! I&apos;m <span>{text}</span>
          <Cursor cursorColor="yellow" />
        </h1>
        <div className="pt-5 space-x-2 space-y-2">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>

          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
