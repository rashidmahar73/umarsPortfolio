"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-[#91c933] font-medium mt-[10px] text-center mb-[15px]"
      >
        Making companies i have worked with
      </motion.div>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#A2DE3F] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#A2DE3F] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better Aptitude Digital
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
