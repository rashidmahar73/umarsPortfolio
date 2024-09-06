import About from "@/components/main/About";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import { Packages } from "@/components/main/Packages";
import Services from "@/components/main/Services";
import Skills from "@/components/main/Skills";
import Teams from "@/components/main/Teams";
import Testimonials from "@/components/main/Testimonials";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About/>
        <Skills />
        <Encryption />
        <Services/>
        <Testimonials/>
        <Packages/>
        <Teams/>
      </div>
    </main>
  );
}