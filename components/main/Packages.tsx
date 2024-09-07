"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardSlider } from "../cardEffect";
import { Slider } from "../slider";
import { useSlideControls } from "../useSlideControls";

const packages = [
  {
    serviceNo: "01",
    serviceName: "Graphic Design",
    features: [
      "Logo + Branding kit",
      "Carousels LinkedIn posts",
      "LinkedIn infographics posts",
    ],
    freeTrials: false,
    price: "$499/month",
  },
  {
    serviceNo: "02",
    serviceName: "LinkedIn Ghostwriting",
    features: [
      "Daily LinkedIn engagement",
      "Profile Revamp",
      "Post Calendar for 30 days",
    ],
    freeTrials: false,
    price: "$799/month",
  },
  {
    serviceNo: "03",
    serviceName: "Sales Outreach + Pro Marketing",
    features: [
      "Targeted Sales Outreach",
      "LinkedIn ghostwriting features",
      "Copywriting + Business Marketing",
    ],
    freeTrials: true,
    price: "$1199/month",
  },
  {
    serviceNo: "03",
    serviceName: "Sales Outreach + Pro Marketing",
    features: [
      "Targeted Sales Outreach",
      "LinkedIn ghostwriting features",
      "Copywriting + Business Marketing",
    ],
    freeTrials: true,
    price: "$1199/month",
  },
  {
    serviceNo: "03",
    serviceName: "Sales Outreach + Pro Marketing",
    features: [
      "Targeted Sales Outreach",
      "LinkedIn ghostwriting features",
      "Copywriting + Business Marketing",
    ],
    freeTrials: true,
    price: "$1199/month",
  },
];

function Packages() {
  const [cards, setCards] = useState(packages);
  const [transitioning, setTransitioning] = useState(false);

  function leftMargin(index: any) {
    if (index === 1) {
      return "lg:left-[30px] md:left-[30px] z-[1000] bg-[#000000] sm:blur-3xl xs:blur-3xl md:blur-none lg:blur-none";
    }
    if (index === 2) {
      return "lg:left-[260px] sm:left-[80px] md:left-[160px] xs:left-[20px] z-[2000] h-full";
    }
    if (index === 3) {
      return "lg:right-[30px] md:right-[30px] sm:right-[0px] sm:blur-3xl xs:blur-3xl z-[1000] bg-[#000000] md:blur-none lg:blur-none";
    }
    if (index === 4) {
      return "right-0 bg-[#131316] blur-3xl h-[35dvh] top-20 overflow-hidden";
    }
    if (index === 0) {
      return "h-[35dvh] top-20 overflow-hidden bg-[#131316] blur-3xl";
    }
  }

  function contentOpacity(index: any) {
    if (index === 2) {
      return "opacity-100 ";
    }
    return "opacity-40";
  }

  const slideCount = {
    smCount: 1,
    mdCount: 2,
    lgCount: 3,
  };

  return (
    <section
      id="packages"
      className="flex flex-col items-center justify-center py-5 md:py-10 lg:py-20"
    >
      <h1 className="text-[#91c933] text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold bg-clip-text bg-gradient-to-r from-green-400 to-green-600 py-5 md:py-10">
        Packages
      </h1>
      <CardSlider cards={cards} setCards={setCards} setTransitioning={setTransitioning}>
        <CardSlider.Content>
          <div className="flex lg:w-[833px] md:w-[633px] sm:w-[445px] xs:w-[342px] h-[80dvh] mx-auto overflow-hidden relative">
            {cards?.map((pkg, index) => (
              <Card
                key={`pkg.serviceN-${index}`}
                pkg={pkg}
                className={`transition-opacity duration-500 ${
                  index === 2
                    ? " opacity-100 backdrop-blur-sm bg-[#131316]  shadow-lg shadow-[#2f5f23]/50 hover:scale-110 transform transition-all duration-1000 ease-in-out"
                    : ""
                } ${leftMargin(index)}`}
                contentClass={contentOpacity(index)}
                styling={{}}
              />
            ))}
          </div>
        </CardSlider.Content>
      </CardSlider>
    </section>
  );
}
export { Packages };

const Card = ({ pkg, className, contentClass, styling }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`absolute  w-[300px] p-6 ${className} rounded-lg`}
      style={styling}
    >
      <div>
        <h3 className={`text-md font-bold mb-10 text-white ${contentClass}`}>
          {pkg?.serviceName}
        </h3>
        <div className={`text-[30px] font-bold text-white mb-5 ${contentClass}`}>
          {pkg?.price}
        </div>
        <div className="flex items-center w-full h-[40px]">
          <div className={`${contentClass} flex-grow h-px bg-white`}></div>
          <span className={`px-4 text-white ${contentClass}`}>Features</span>
          <div className="flex-grow h-px bg-white"></div>
        </div>{" "}
        <div className="my-5">
          {pkg?.features.map((feature: any, index: number) => (
            <div className="flex items-center my-10" key={`features-${index}`}>
              <div className={`${contentClass} border-[1px] rounded-full w-[25px] h-[25px] flex items-center justify-center`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className={`${contentClass} w-5 h-5`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className={`ml-3 text-white ${contentClass}`}>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between my-10">
          <div
            className={`text-sm font-semibold ${contentClass} ${
              pkg?.freeTrials ? "text-white" : "text-red-500 line-through"
            }`}
          >
            {pkg?.freeTrials ? "Free Trial" : "No Free Trial"}
          </div>
        </div>
        <button className={`${contentClass} w-full bg-gray-300/30 backdrop-blur-sm text-white font-bold py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300`}>
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};