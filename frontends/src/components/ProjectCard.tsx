import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../stores/ThemeProvider";
import "../styles/Pulse.css";

interface ChertNodesCardProps {
  title: string;
  description: string;
  mdwidth: string;
  width: string;
  tags: string[];
  liveUrl: string;
  altText?: string;
  github?: string;
  isBannerStyle: boolean;
}

const ProjectCard: React.FC<ChertNodesCardProps> = ({
  title,
  description,
  mdwidth,
  width,
  tags,
  liveUrl,
  altText,
  github,
  isBannerStyle,
}) => {
  const { theme } = useTheme();

  return (
    <div>
      {isBannerStyle ? (
        // banner style
        <div
          className={`${mdwidth} ${width} mx-auto px-4 py-4
                ${
                  theme === "dark"
                    ? "shadow-lg border-l-2 border-y border-l-gray-400 border-y-gray-700"
                    : "shadow-lg border-l-2 border-y border-l-gray-600 border-y-gray-300"
                }`}
        >
          {/* Header Section */}
          <div
            className={`flex relative flex-col md:flex-row md:items-center md:gap-3 gap-1`}
          >
            <img
              src={liveUrl}
              alt={altText ?? title}
              fetchPriority="high"
              className="md:w-[30%] md:max-w-[20rem]  z-[0] object-cover"
            />

            {github && (
              <div>
                {/* // pluse-ring is a css class from styles pulse.css */}
                <div className={`${theme === 'dark' ? "pulse-ring-dark" : "pulse-ring-light"} absolute w-[1.2rem] h-[1.2rem] md:top-[0.9rem] top-[1rem] md:left-[0.9rem] left-[1.05rem] z-0`}></div>
                {/* // Use a normal anchor for external link so it opens in a new */}
                <Link
                  className="absolute md:top-3 top-[0.85rem] left-[0.9rem] md:left-3 md:text-2xl text-2xl"
                  to={github}
                  target="_blank"
                >
                  <FaGithub
                    className={`text-black hover:text-gray-700 cursor-pointer`}
                    // size={35}
                  />
                </Link>
              </div>
            )}

            <div >
              <div>
                <h2 className="xl:text-[1.3rem] lg:text-[1.24rem] md:text-[1.18rem] text-[1.1rem] font-semibold">
                  {title}
                </h2>
              </div>
              {/* Description */}
              <p
                className={`xl:text-[1rem] lg:text-[0.94rem] md:text-[0.88rem] text-[0.86rem] 
                     ${
                       theme === "dark" ? "text-gray-300" : "text-gray-800"
                     } leading-relaxed mb-4`}
              >
                {description}
              </p>

              {/* Skills Section */}
              {/* skills truthy value huda matrai skills display hunxa */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag, i) => (
                    <span
                      key={i}
                      className={`xl:text-[0.95rem] lg:text-[0.83rem] md:text-[0.79rem] text-[0.79rem] border  ${
                        theme === "dark"
                          ? "border-[#C778DD] text-gray-200"
                          : "border-[#a840c5] text-gray-900"
                      }  px-3 py-1  transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // grid card style
        <div
          //  sabai image ko ratio same xa , width given xa, auto h , max-height of container given xa
          className={`border-2 ${
            theme === "dark" ? "border-gray-400" : "border-gray-600"
          }   shadow-lg
                font-['Fira_Code',monospace]
                 group grid grid-rows-[auto_auto_1fr]
                 2xl:w-[17.5vw] xl:w-[25vw] lg:w-[26.8vw] mdlg:w-[28vw] md:w-[43vw] w-[94vw]
                 max-h-[50rem] h-full 2xl:max-h-[60rem]
                 overflow-hidden hover:shadow-[#ff7f50]/20 transition-shadow duration-300`}
        >
          {/* Top Logo Section */}

          <div
            className={`relative border-b-2 ${
              theme === "dark" ? "border-gray-400" : "border-gray-600"
            }  w-full `}
          >
            <img src={liveUrl} alt={altText} fetchPriority="high" />
            {github && (
              <div>
                {/* // pluse-ring is a css class from styles pulse.css */}
                <div className={`${theme === 'dark' ? "pulse-ring-dark" : "pulse-ring-light"} absolute w-[1.2rem] h-[1.2rem] md:top-[0.9rem] top-[1rem] md:left-[0.9rem] left-[1.05rem] z-0`}></div>
                {/* // Use a normal anchor for external link so it opens in a new */}
                <Link
                  className="absolute md:top-3 top-[0.85rem] left-[0.9rem] md:left-3 md:text-2xl text-2xl"
                  to={github}
                  target="_blank"
                >
                  <FaGithub
                    className={`text-black hover:text-gray-700 cursor-pointer`}
                    // size={35}
                  />
                </Link>
              </div>
            )}
          </div>

          {/* Tags */}
          <div
            className={`border-b-2 py-2 ${
              theme === "dark" ? "border-gray-400" : "border-gray-600"
            } flex flex-wrap gap-3 py-1 px-4.5`}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 border-1  ${
                  theme === "dark"
                    ? "border-[#C778DD] text-gray-400"
                    : "border-[#a840c5] text-gray-700"
                }
                       xl:text-[1rem] lg:text-[0.9375rem] md:text-[0.875rem] tracking-wide`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="px-4 py-3 flex flex-col gap-y-2 pb-2">
            <h3
              className={`font-semibold xl:text-[1.5rem] lg:text-[1.4375rem] md:text-[1.3125rem]`}
            >
              {title}
            </h3>
            <p
              className={`text-sm mb-1 xl:text-[1.1rem] lg:text-[0.94rem] md:text-[0.89rem] ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
