import DotGrid from "../components/DotGrid";
import SquareBox from "../components/SquareBox";
import Symbol from "../components/Symbol";
import { useTheme } from "../stores/ThemeProvider";
import { HiHashtag } from "react-icons/hi";
import {
  SiCanva,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostman,
  // SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BiLogoNetlify } from "react-icons/bi";
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
  const { theme } = useTheme();
  return (
    <div className="  font-['Fira_Code',monospace]   border-1
      md:flex md:justify-center 
      xl:pb-[10rem] lg:pb-[9rem] md:pb-[8rem] pb-[7rem]">
      <section
        className="relative
        xl:w-[80vw] lg:w-[85vw] md:w-[88vw]  
        md:gap-[2rem] lg:gap-[4rem]  xl:gap-[6rem] 
        xl:px-4 lg:px-3 md:px-1"
      >
        {/* skills section Heading */}
        <div className="flex justify-center  md:justify-start px-2 py-1 cursor-pointer pb-6 md:pb-8 lg:pb-10">
          <span
            className={`text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl py-1.5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          >
            <HiHashtag />
          </span>
          <span className="text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl pt-0.5">skills</span>
          <span
            className={`hidden md:block lg:w-[16rem] md:w-[14rem] xl:w-[20rem] border-t-2 mt-6 ml-5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          ></span>
        </div>

        {/* Skills section content */}
        <div className="md:flex md:justify-between    ">
          <div className="hidden md:block relative w-[30vw]">
            <DotGrid
              length={25}
              className={`grid grid-cols-5 gap-1 absolute 
                xl:top-10 xl:left-0 xl:ml-8 xl:w-18 xl:h-18
                lg:top-9 lg:left-0 lg:ml-6 lg:w-16 lg:h-16
                md:top-13 md:left-0 md:ml-4 md:w-10 md:h-10
                opacity-70`}
            />

            <SquareBox
              className="hidden md:block absolute 
                xl:top-[0rem] xl:left-65 xl:w-25 xl:h-25
                lg:top-[0rem] lg:left-55 lg:w-20 lg:h-20      
                md:top-[2rem] md:left-30 md:w-14 md:-14 "  
              viewBox="0 0 91 91"
            />

            <Symbol
              className="absolute 
              xl:top-50 xl:left-16 xl:w-28 xl:h-28
              lg:top-48 lg:left-9 lg:w-24 lg:h-24
              md:top-40 md:left-4 md:w-18  md:h-18 "
            />

            <DotGrid
              length={25}
              className={`grid grid-cols-5 gap-1 absolute 
                xl:top-42 xl:left-56 xl:w-18 xl:h-18
                lg:top-44 lg:left-44 lg:w-16 lg:h-16
                md:top-36 md:left-27 md:w-10 md:h-10
                opacity-70`}
            />

            <SquareBox
              className=" absolute 
            xl:top-[13.5rem] xl:left-85 xl:w-[4.5rem] xl:h-[4.5rem]
            lg:top-[12rem] lg:left-70 lg:w-[3.5rem] lg:h-[3.5rem]
            md:top-[11rem] md:left-42 md:w-[2.5rem] md:h-[2.5rem]"
              viewBox="0 0 91 91"
            />
          </div>

          {/* Grid Boxes Design*/}
          <div
            className="md:flex flex flex-col gap-y-3
                        md:justify-end md:gap-y-4 xl:gap-y-6 md:max-w-[100rem]
                        xl:text-xl
                        lg:text-[16px]
                        md:text-sm
                        text-lg 
                        items-center md:items-end"
          >
            <div
              className="flex md:flex-row 
            flex-col md:flex md:gap-x-4 xl:gap-x-6 gap-y-4"
            >
              <div className={`border-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"}  w-[15rem] md:w-[9rem] lg:w-[9.2rem] xl:w-[11rem]`}>
                <div className={`font-semibold border-b-2 p-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"} mb-2`}>
                  languages
                </div>
                <div className="px-3 py-2">
                  <span className="flex gap-x-3">
                    <SiJavascript className="text-yellow-500 my-1" />
                    <span>JavaScript</span>
                  </span>
                  <span className="flex gap-x-3">
                    <SiTypescript className="text-blue-500 my-1" />
                    <span>TypeScript</span>
                  </span>
                  {/* <span className="flex gap-x-3">
                  <SiPython className="text-blue-500 my-1" />
                  <span>Python</span>
                </span> */}
                </div>
              </div>

              <div className={`border-2 border-gray-400 w-[15rem] md:w-[7rem] lg:w-[7.5rem] xl:w-[9rem] ${theme === 'dark' ? "border-gray-400" : "border-gray-600"}`}>
                <div className={`font-semibold border-b-2 p-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"} mb-2`}>
                  databases
                </div>
                <div className="px-3 py-2">
                  <span className="flex gap-x-3">
                    <GrMysql className="text-blue-500 my-1" />
                    <span>MySql</span>
                  </span>
                  <span className="flex gap-x-3">
                    <SiMongodb className="text-green-700 my-1" />
                    <span>MongoDB</span>
                  </span>
                </div>
              </div>

              <div className={`border-2 border-gray-400 w-[15rem] md:w-[12.5rem] lg:w-[14rem] xl:w-[16rem] ${theme === 'dark' ? "border-gray-400" : "border-gray-600"}`}>
                <div className={`font-semibold border-b-2 p-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"} mb-2`}>
                  tools
                </div>
                <div className="px-3 py-2">
                  <span className="flex gap-x-15 lg:gap-x-14 md:gap-x-12.5 xl:gap-x-15.5">
                    <span className="flex gap-x-3">
                      <FaGitAlt className="text-orange-500 my-1" />
                      <span>Git</span>
                    </span>
                    <span className="flex gap-x-3">
                      <FaGithub
                        className={` my-1 ${
                          theme === "dark" ? "text-gray-400" : " text-black"
                        }`}
                      />
                      <span>Github</span>
                    </span>
                  </span>
                  <span className="flex gap-x-5">
                    <span className="flex gap-x-3">
                      <VscVscode className="text-blue-500 my-1" />
                      <span>VS Code</span>
                    </span>
                    <span className="flex gap-x-3">
                      <SiVercel
                        className={` my-1 ${
                          theme === "dark" ? "text-white" : " text-black"
                        }`}
                      />
                      <span>Vercel</span>
                    </span>
                  </span>
                  <span className="flex gap-x-5">
                    <span className="flex gap-x-3">
                      <BiLogoNetlify className="text-blue-300 my-1" />
                      <span>Netlify</span>
                    </span>
                    <span className="flex gap-x-3">
                      <svg className="w-5 h-5 mt-1">
                        <defs>
                          <linearGradient
                            id="grad1"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#ff9900" />{" "}
                            {/* blue-500 */}
                            <stop offset="50%" stopColor="#c750ff" />{" "}
                            {/* cyan-400 */}
                            <stop offset="100%" stopColor="#43ee78" />{" "}
                            {/* purple-500 */}
                          </linearGradient>
                        </defs>
                        <IoLogoFigma className="my-1" fill="url(#grad1)" />
                      </svg>
                      {/* <IoLogoFigma className={` my-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent`} /> */}
                      <span>Figma</span>
                    </span>
                  </span>
                  <span className="flex gap-x-5">
                    <span className="flex gap-x-3">
                      <SiPostman className="text-orange-400 my-1" />
                      <span>Postman</span>
                    </span>
                    <span className="flex gap-x-3">
                      <SiCanva className="text-blue-400 my-1" />
                      <span>Canva</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col
            md:flex md:flex-row md: justify-end md:gap-x-4 xl:gap-x-6 gap-y-4"
            >
              <div className={`border-2 border-gray-400 w-[15rem] md:w-[7rem] lg:w-[7.5rem] xl:w-[9rem] ${theme === 'dark' ? "border-gray-400" : "border-gray-600"}`}>
                <div className={`font-semibold border-b-2 p-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"} mb-2`}>
                  others
                </div>
                <div className="px-3 py-2">
                  <span className="flex gap-x-3">
                    <FaHtml5 className="text-orange-500 my-1" />
                    <span>HTML</span>
                  </span>
                  <span className="flex gap-x-3">
                    <FaCss3Alt className="text-blue-400 my-1" />
                    <span>CSS</span>
                  </span>
                </div>
              </div>

              <div className={`border-2 border-gray-400 w-[15rem] md:w-[12.5rem] lg:w-[14rem] xl:w-[16rem]  ${theme === 'dark' ? "border-gray-400" : "border-gray-600"}`}>
                <div className={`font-semibold border-b-2 p-2 ${theme === 'dark' ? "border-gray-400" : "border-gray-600"} mb-2`}>
                  frameworks
                </div>
                <div className="px-3 py-2">
                  <span className="flex gap-x-3">
                    <FaReact className="text-blue-400 my-1" />
                    <span>React</span>
                  </span>
                  <span className="flex gap-x-3">
                    <SiTailwindcss className="text-blue-400 my-1" />
                    <span>Tailwind CSS</span>
                  </span>
                  <span className="flex gap-x-3">
                    <SiExpress
                      className={` my-1 ${
                        theme === "dark" ? "text-white" : " text-black"
                      }`}
                    />
                    <span>Express</span>
                  </span>
                  <span className="flex gap-x-3">
                    <FaReact className="text-blue-400 my-1" />
                    <span>React Native</span>
                  </span>
                  <span className="flex gap-x-3">
                    <IoLogoFirebase className="text-yellow-500 my-1" />
                    <span>Firebase</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
