"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 px-5 md:px-20 mt-10 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#A2DE3F] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#A2DE3F] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Creative Content Creator</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 md:gap-6 mt-2 md:mt-6 text-2xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            The
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700"> */}
            <span className="bg-clip-text text-[#A2DE3F]">
              {" "}
              Attention your{" "}
            </span>{" "}
            Business needs
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-white my-2 md:my-5 max-w-[600px]"
        >
          Elevate Your Brand with Expert LinkedIn and Social Media Strategies
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-1 md:py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={400} // Decreased image height for smaller screens
          width={400} // Decreased image width for smaller screens
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
