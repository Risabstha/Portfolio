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
    <div
      className="  font-['Fira_Code',monospace]   border-1
      md:flex md:justify-center 
      xl:pb-[10rem] lg:pb-[9rem] md:pb-[8rem] pb-[7rem]
      md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem] "
    >
      <section
        className="relative border-1
        xl:w-[80vw] lg:w-[85vw] md:w-[88vw]  
        md:gap-[2rem] lg:gap-[4rem]  xl:gap-[6rem] 
        xl:px-4 lg:px-3 md:px-1"
      >
        {/* skills section Heading */}
        <div className="flex justify-center  md:justify-start py-1 cursor-pointer pb-6 md:pb-8 lg:pb-10">
          <span
            className={`text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl py-1.5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          >
            <HiHashtag />
          </span>
          <span className="text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl pt-0.5">
            skills
          </span>
          <span
            className={`hidden md:block lg:w-[16rem] md:w-[14rem] xl:w-[20rem] border-t-2 mt-6 ml-5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          ></span>
        </div>

        {/* Skills section content */}
        <div className="md:flex md:justify-between    ">
          <div className="hidden md:block relative w-[30vw]">
            {/* Top-left dots */}
            <DotGrid
              length={25}
              className={`grid grid-cols-5 gap-1 absolute 
                        top-[2vw] left-[0vw] ml-[2vw] w-[5.5vw] h-[5.5vw]
                        opacity-70`}
            />

            {/* Top square */}
            <SquareBox
              className="hidden md:block absolute 
                        top-[0vw] left-[18vw] w-[6.5vw] h-[6.5vw]"
              viewBox="0 0 91 91"
            />

            {/* Center symbol */}
            <Symbol
              className="absolute 
                        top-[12vw] left-[4vw] w-[7.5vw] h-[7.5vw]"
            />

            {/* Mid-right dots */}
            <DotGrid
              length={25}
              className={`grid grid-cols-5 gap-1 absolute 
                        top-[10vw] left-[15vw] w-[4.5vw] h-[4.5vw]
                        opacity-70`}
            />

            {/* Bottom small square */}
            <SquareBox
              className="absolute 
                        top-[15vw] left-[22.5vw] w-[4vw] h-[4vw]"
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
              <div
                className={`border-2 ${
                  theme === "dark" ? "border-gray-400" : "border-gray-600"
                }  w-[15rem] md:w-[9rem] lg:w-[9.2rem] xl:w-[11rem]`}
              >
                <div
                  className={`font-semibold border-b-2 p-2 ${
                    theme === "dark" ? "border-gray-400" : "border-gray-600"
                  } mb-2`}
                >
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

              <div
                className={`border-2 border-gray-400 w-[15rem] md:w-[7rem] lg:w-[7.5rem] xl:w-[9rem] ${
                  theme === "dark" ? "border-gray-400" : "border-gray-600"
                }`}
              >
                <div
                  className={`font-semibold border-b-2 p-2 ${
                    theme === "dark" ? "border-gray-400" : "border-gray-600"
                  } mb-2`}
                >
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

              <div
                className={`border-2 border-gray-400 w-[15rem] md:w-[12.5rem] lg:w-[14rem] xl:w-[16rem] ${
                  theme === "dark" ? "border-gray-400" : "border-gray-600"
                }`}
              >
                <div
                  className={`font-semibold border-b-2 p-2 ${
                    theme === "dark" ? "border-gray-400" : "border-gray-600"
                  } mb-2`}
                >
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
              <div
                className={`border-2 border-gray-400 w-[15rem] md:w-[7rem] lg:w-[7.5rem] xl:w-[9rem] ${
                  theme === "dark" ? "border-gray-400" : "border-gray-600"
                }`}
              >
                <div
                  className={`font-semibold border-b-2 p-2 ${
                    theme === "dark" ? "border-gray-400" : "border-gray-600"
                  } mb-2`}
                >
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

              <div
                className={`border-2 border-gray-400 w-[15rem] md:w-[12.5rem] lg:w-[14rem] xl:w-[16rem]  ${
                  theme === "dark" ? "border-gray-400" : "border-gray-600"
                }`}
              >
                <div
                  className={`font-semibold border-b-2 p-2 ${
                    theme === "dark" ? "border-gray-400" : "border-gray-600"
                  } mb-2`}
                >
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
