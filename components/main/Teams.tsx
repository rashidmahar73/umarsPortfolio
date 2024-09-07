"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Teams() {
  const teamsItems = [{}, {}, {}, {}];
  return (
    <section id="teams">
      <h1 className="text-[#91c933] text-2xl md:text-4xl lg:text-5xl xl:text-5xl text-center font-semibold bg-clip-text bg-gradient-to-r from-green-400 to-green-600 py-5 md:py-20">
        Teams
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-y-4 mx-20 mb-20">
        {teamsItems?.map((elem, index) => (
          <div className="border-[1px] border-white rounded-md bg-[#131316] backdrop-blur-sm w-[90%]" key={`teams-${index}`}>
            <div className="flex justify-center my-2">
              <Image
                src="/assets/images/testimonial1.jpeg"
                alt="logo"
                width={180}
                height={10}
                className="cursor-pointer hover:animate-slowspin rounded-md"
              />
            </div>
            <div className="flex justify-between px-3">
              <h1 className="text-[15px] text-white font-bold"> Umar </h1>
              <div>
                <svg
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  width="20px"
                  height="20px"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8.75 11C8.75 10.5858 8.41421 10.25 8 10.25C7.58579 10.25 7.25 10.5858 7.25 11H8.75ZM7.25 17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17H7.25ZM17.25 17C17.25 17.4142 17.5858 17.75 18 17.75C18.4142 17.75 18.75 17.4142 18.75 17H17.25ZM12 14H11.25H12ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8H8.75ZM7.25 9C7.25 9.41421 7.58579 9.75 8 9.75C8.41421 9.75 8.75 9.41421 8.75 9H7.25ZM7.25 11V17H8.75V11H7.25ZM18.75 17V14H17.25V17H18.75ZM18.75 14C18.75 11.9289 17.0711 10.25 15 10.25V11.75C16.2426 11.75 17.25 12.7574 17.25 14H18.75ZM15 10.25C12.9289 10.25 11.25 11.9289 11.25 14H12.75C12.75 12.7574 13.7574 11.75 15 11.75V10.25ZM11.25 14V17H12.75V14H11.25ZM7.25 8V9H8.75V8H7.25Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <h2 className="text-[12px] text-white px-3 pb-2">Copywriter</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams;
