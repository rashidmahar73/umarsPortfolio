"use client";

import About from "@/components/main/About";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import { Packages } from "@/components/main/Packages";
import Services from "@/components/main/Services";
import Skills from "@/components/main/Skills";
import Teams from "@/components/main/Teams";
import Testimonials from "@/components/main/Testimonials";
import { WhatsappIcon } from "@/public/assets/images/whatsapp";

export default function Home() {
  function onClickHandler() {
    window.open(
      "https://wa.me/+923347771889?text=" + encodeURIComponent("I would love to explore more."),
      "_blank"
    );
  }
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Services />
        <Testimonials />
        <Packages />
        <Teams />
        <div onClick={onClickHandler} className="w-16 h-16 shadow-lg shadow-[#2f5f23]/50 bg-gray-100/20 backdrop-blur-sm text-white rounded-full fixed bottom-5 right-5 flex items-center justify-center transition-all duration-500 z-50 hover:cursor-pointer">
          <WhatsappIcon />
        </div>
      </div>
    </main>
  );
}
