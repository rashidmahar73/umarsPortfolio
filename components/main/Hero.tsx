import React from "react";
import HeroContent from "../sub/HeroContent";
import '../../app/globals.css'

const Hero = () => {
  return (
<div className="relative flex flex-col h-screen justify-center items-center text-center" id="home">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-450px] left-1/2 transform -translate-x-1/2 h-full w-auto z-10 object-cover video-sphere"
      >
        <source src="/sphere.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>


  );
};

export default Hero;
