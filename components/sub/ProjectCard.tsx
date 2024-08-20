import {
  AnalyticsReporting,
  BrandStrategy,
  EmailMarketing,
  LinkeDinIcon,
  SalesOutreach,
  SocialMediaMarketing,
} from "@/app/icons";
import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  title: string;
  description: string;
}

function RenderIcon(type: string) {
  if (type === "linkedin") {
    return <LinkeDinIcon />;
  } else if (type === "emailWriting") {
    return <EmailMarketing />;
  } else if (type === "salesOutreach") {
    return <SalesOutreach />;
  } else if (type === "sociaMediaMarketing") {
    return <SocialMediaMarketing />;
  } else if (type === "analyticsReporting") {
    return <AnalyticsReporting />;
  } else if (type === "brandStrategy") {
    return <BrandStrategy />;
  }
}

const ProjectCard = ({ title, description, icon }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#A2DE3F]">
      <div className="flex items-center p-5">
        <div className="w-[40px] h-[40px]">{RenderIcon(icon)}</div>
        <h1 className="text-xl md:text-2xl lg:text-xl text-center w-full font-semibold text-white">
          {title}
        </h1>{" "}
      </div>
      <div className="relative p-4 text-xs md:text-sm lg:text-base">
        {" "}
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
