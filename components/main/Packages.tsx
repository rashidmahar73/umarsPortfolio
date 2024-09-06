"use client";
import React from "react";
import { motion } from "framer-motion";

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
];

function Packages() {
  return (
    <section
      id="packages"
      className="flex flex-col items-center justify-center py-5 md:py-10 lg:py-20"
    >
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 py-5 md:py-10">
        Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {packages.map((pkg, index) => (
          <Card key={`pkg.serviceNo-${index}`} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
export { Packages };

const Card = ({ pkg }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#131316] backdrop-blur-sm p-6 rounded-lg shadow-inner shadow-[inset 0 10px 20px rgba(255,255,255,0.5)] transition-shadow duration-300  flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-bold mb-10 text-white">
          {pkg?.serviceName}
        </h3>
        <div className="text-[30px] font-bold text-white mb-5">{pkg?.price}</div>
        <div className="flex items-center w-full h-[40px]">
          <div className="flex-grow h-px bg-white"></div>
          <span className="px-4 text-white">Features</span>
          <div className="flex-grow h-px bg-white"></div>
        </div>{" "}
        <div className="my-5">

        {pkg?.features.map((feature: any, index: number) => (
          <div className="flex items-center my-10">
            <div className="border-[1px] rounded-full w-[25px] h-[25px] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                />
            </svg>
                </div>
            <span className="ml-3 text-white">{feature}</span>
          </div>
        ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between my-10">
          <div
            className={`text-sm font-semibold ${
              pkg?.freeTrials ? "text-white" : "text-red-500 line-through"
            }`}
          >
            {pkg?.freeTrials ? "Free Trial" : "No Free Trial"}
          </div>
        </div>
        <button className="w-full bg-gray-300/30 backdrop-blur-sm text-white font-bold py-2 rounded-lg hover:bg-gray-200/30 transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};
