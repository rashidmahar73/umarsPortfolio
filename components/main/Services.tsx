import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Services = () => {
  const servicesItems = [
    {
      title: "LinkedIn Ghostwriting",
      description:
        "Our ghostwriting service ensures your LinkedIn posts are crafted to capture attention and drive engagement, showcasing your expertise.",
      icon: "linkedin",
    },
    {
      title: "Copywriting & Email Writing",
      description:
        "Persuasive copy and targeted email campaigns designed to drive conversions and foster lasting relationships with your audience.",
      icon: "emailWriting",
    },
    {
      title: "Sales & Outreach",
      description:
        "Strategic sales and outreach efforts to generate quality leads and grow your business effectively.",
      icon: "salesOutreach",
    },
    {
      title: "Social Media Marketing",
      description:
        "Comprehensive social media strategies to increase your reach and engagement across various platforms.",
      icon: "sociaMediaMarketing",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Detailed analytics and reporting to measure the success of your campaigns and refine your strategies for optimal results.",
      icon: "analyticsReporting",
    },
    {
      title: "Brand Strategy",
      description:
        "Develop a strong brand identity that resonates with your audience and stands out in a competitive market.",
      icon: "brandStrategy",
    },
  ];
  return (
      <section
        id="services"
        className="flex flex-col items-center justify-center py-5 md:py-10 lg:py-20"
      >
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 py-5 md:py-10">
        Our Services
      </h1>
      <div className="grid lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1  mx-20 gap-20">
        {servicesItems?.map((elem, index) => (
          <ProjectCard
            key={`service-items-${index}`}
            title={elem?.title}
            description={elem?.description}
            icon={elem?.icon}
          />
        ))}
      </div>
      </section>
  );
};

export default Services;
