"use client";
import React from "react";

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

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center mx-10 my-20"
    >
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 py-5 md:py-20">
        Testimonials
      </h1>
      <div className="w-full overflow-x-auto">
        <div className=" flex gap-4">
          {testimonialsItems.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={`w-[300px] bg-gradient-to-r from-orange-500 to-red-500 text-black p-8 rounded-lg shadow-lg text-center`}
                style={{
                 
                  background: "linear-gradient(to bottom, #A2DE3F, #FFFFFF)", // Light green to white gradient
                  borderRadius: "10px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderImage: "linear-gradient(to right, #ffffff, #A2DE3F) 1",
                }}
              >
                <div className="mt-6 text-center">
                  <p className="text-lg font-medium text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-black">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  <p className="mt-4 text-base text-black">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
