"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center mt-[200px] lg:mt-[0px] justify-center py-5 md:py-10 lg:py-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#91c933] bg-clip-text bg-gradient-to-r from-green-400 to-green-600 py-5 md:py-10"
      >
        About Us
      </motion.h1>
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 px-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <h2 className="text-white border border-[#A2DE3F] bg-gray-100/20 backdrop-blur-sm rounded-md p-5">
            At Aptitude, we understand the pivotal role a strong online presence
            plays in today’s competitive business landscape. With years of
            expertise in LinkedIn and social media marketing, we have empowered
            numerous clients to elevate their brand visibility and engagement.
            Our mission is to deliver personalized, strategic digital marketing
            solutions that drive measurable results. Whether it’s through
            precision-crafted LinkedIn posts, persuasive copywriting, or
            comprehensive social media strategies, we are dedicated to helping
            your business reach new heights. Our team of passionate
            professionals works closely with you to ensure that your brand
            stands out and connects meaningfully with your target audience.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center items-center"
        >
          <Image
            src="/assets/images/3.png"
            alt="logo"
            width={280}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
