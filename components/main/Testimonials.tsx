"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Slider } from "../slider";
import { useSlideControls } from "../useSlideControls";
import Image from "next/image";

const testimonialsItems = [
  {
    name: "Jane Doe",
    role: "CEO",
    company: "XYZ Corp",
    text: "Aptitude transformed our LinkedIn presence and significantly boosted our engagement.",
  },
  {
    name: "John Smith",
    role: "Marketing Director",
    company: "ABC Inc.",
    text: "Their email campaigns are highly effective. We've seen a 40% increase in open rates.",
  },
  {
    name: "Emily Brown",
    role: "Sales Manager",
    company: "DEF Ltd.",
    text: "The sales and outreach service has been a game-changer for us.",
  },
  {
    name: "Michael Lee",
    role: "Founder",
    company: "GHI Co.",
    text: "Aptitude’s social media strategy took our brand to the next level.",
  },
  {
    name: "Sarah Wilson",
    role: "COO",
    company: "JKL Enterprise",
    text: "Professional and results-driven. Highly recommend Aptitude.",
  },
];

const slideCount = {
  smCount: 1,
  mdCount: 2,
  lgCount: 3,
};

const Testimonials = () => {
  const { currentIndex, setCurrentIndex } = useSlideControls(slideCount);
  return (
    <section id="testimonials" className="my-20">
      <h1 className="text-[#91c933] text-2xl md:text-4xl lg:text-5xl xl:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 py-5 md:py-20">
        Testimonials
      </h1>
      <Slider
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        slideCount={testimonialsItems?.length}
      >
        <Slider.Content>
          <div className="relative mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-4">
            {testimonialsItems
              ?.slice(currentIndex.start, currentIndex.end)
              ?.map((testimonial, index) => {
                return (
                  <div
                    key={index}
                    className={`shadow-lg shadow-[#2f5f23]/50 hover:scale-110 transform transition-all duration-1000 ease-in-out bg-gray-100/20 backdrop-blur-sm text-black p-8 rounded-lg shadow-lg text-center`}
                  >
                    <div className="flex absolute mt-0 top-[-15px] left-0 w-full justify-center">
                      <Image
                        src="/assets/images/testimonial1.jpeg"
                        alt="logo"
                        width={180}
                        height={10}
                        className="cursor-pointer w-[70px] h-[70px] hover:animate-slowspin mt-[-15px] rounded-full"
                      />
                    </div>
                    <div className="mt-7 text-center">
                      <p className="text-lg font-medium text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-white">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <p className="mt-4 text-base text-white">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>

          </div>
        </Slider.Content>
      </Slider>
    </section>
  );
};

export default Testimonials;
