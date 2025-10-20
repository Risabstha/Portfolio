import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../stores/ThemeProvider";
import '../styles/Pulse.css';

interface ChertNodesCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  altText?: string;
}

const ProjectCard: React.FC<ChertNodesCardProps> = ({
  title,
  description,
  tags,
  liveUrl,
  altText,
}) => {

  const {theme} = useTheme();

  return (
    <div
      className={`border-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"}   shadow-lg
                font-['Fira_Code',monospace]
                 group grid grid-rows-[auto_auto_1fr] 
                 xl:w-[25vw] lg:w-[26.8vw] md:w-[40vw] w-[94vw]
                 max-h-[580px]
                 overflow-hidden hover:shadow-[#ff7f50]/20 transition-shadow duration-300`}
    >
      {/* Top Logo Section */}
      <div
        className={`relative border-b-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"} flex flex-col gap-2 w-full 
                        max-w-[400px] max-h-[225px]`}
      >
        <img src={liveUrl} alt={altText} />
        {/** pluse-ring is a css class from styles pulse.css */}
          <div className="pulse-ring absolute w-[35px] h-[35px] top-4 right-5 z-0"></div> 
          <Link
          className="absolute top-4 right-5 "
          to="https://github.com/Risabstha?tab=repositories"
          target="_blank"
        >
          <FaGithub
            className={`text-black hover:text-gray-700  
                cursor-pointer`}
            size={35}
          />
        </Link>
        
      </div>

      {/* Tags */}
      <div
        className= {`border-b-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"} flex flex-wrap gap-3 py-1 px-4.5`}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 border-1  ${theme === "dark" ? "border-[#C778DD] text-gray-400" : "border-[#a840c5] text-gray-700" }
                       xl:text-[16px] lg:text-[15px] md:text-[14px] tracking-wide`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 py-3 flex flex-col gap-y-2 pb-2">
        <h3 className={`font-semibold xl:text-[24px] lg:text-[23px] md:text-[21px]`}>{title}</h3>
        <p className={`text-sm mb-1 xl:text-[16px] lg:text-[15px] md:text-[14px] ${theme === "dark" ? "text-gray-400" : "text-gray-700" }`}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
