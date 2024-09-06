"use client";

import { CollapseIcon } from "@/app/icons";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="w-full lg:h-[65px] fixed top-0 shadow-lg shadow-[#130f40]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="flex items-center justify-between h-[100px] lg:hidden">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/assets/images/1.png"
            alt="logo"
            width={180}
            height={10}
            className="cursor-pointer hover:animate-slowspin h-full"
          />
        </a>
        <button
          className="relative inline-flex lg:hidden items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none h-[28px] w-[28px] "
          onClick={handleNavbar}
        >
          <CollapseIcon />
        </button>
      </div>
      <div className="w-full h-full lg:flex sm:flex-row xs:flex-row md:flex-row lg:flex-row items-center justify-between">
        <a
          href="#home"
          className="h-auto w-auto xs:hidden sm:hidden md:hidden lg:flex flex-row items-center"
        >
          <Image
            src="/assets/images/1.png"
            alt="logo"
            width={180}
            height={10}
            className="cursor-pointer hover:animate-slowspin h-full"
          />
        </a>
        <div
          className={`${isOpen
              ? "xs:flex xs:flex-col sm:flex sm:flex-col md:flex md:flex-col"
              : "hidden"
            } lg:flex xl:flex xxl:flex`}
        >
          <div className="w-full md:w-[600px] h-full flex flex-row items-center justify-between">
            <div
              className={`${isOpen ? "flex-col" : "flex-row"
                } flex xs:items-start sm:items-start md:items-start lg:items-center justify-between w-full h-auto xs:border-[0px] xs:rounded-sm sm:rounded-sm md:rounded-sm lg:rounded-full sm:border-[0px] md:border-[0px] lg:border-[1px] border-[#A2DE3F] bg-[#0300145e]  mr-2 md:mr-[15] ml-2 md:ml-[20px] px-2 md:px-[20px] py-1 md:py-[10px] text-sm md:text-base text-gray-200`}
            >
              <a
                href="#home"
                className="cursor-pointer my-2 sm:my-2 md:my-2 lg:my-0"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="cursor-pointer my-2 sm:my-2 md:my-2 lg:my-0"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#experience"
                className="cursor-pointer my-2 sm:my-2 md:my-2 lg:my-0"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a>
              <a
                href="#services"
                className="cursor-pointer my-2 sm:my-2 md:my-2 lg:my-0"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="cursor-pointer my-2 sm:my-2 md:my-2 lg:my-0"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#packages"
                className="cursor-pointer my-2 sm:my-2 md:my-2 lg:my-0"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-row gap-1 md:gap-3">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={20} // Decreased size of social media icons for smaller screens
              height={20} // Decreased size of social media icons for smaller screens
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
