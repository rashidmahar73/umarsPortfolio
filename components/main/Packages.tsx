"use client";
import React from "react";
import { motion } from "framer-motion";
// Example array of objects
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
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-80 flex flex-col justify-between"
      style={{
        background: "linear-gradient(135deg, #FFFFFF, #A2DE3F, #FFFFFF)",
      }}
    >
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          {pkg?.serviceName}
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {pkg?.features.map((feature: any, index: number) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            className={`text-sm font-semibold ${
              pkg?.freeTrials ? "text-green-500" : "text-red-500 line-through"
            }`}
          >
            {pkg?.freeTrials ? "Free Trial" : "No Free Trial"}
          </div>
          <div className="text-xl font-bold text-green-500">{pkg?.price}</div>
        </div>
        <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};
