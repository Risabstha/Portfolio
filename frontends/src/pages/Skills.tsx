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
      className="  font-['Fira_Code',monospace]  
                md:flex md:justify-center 
                md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem] xl:ml-[2rem] 2xl:ml-[3rem] "
    >
      <section
        className="relative 
                    2xl:w-[75vw] xl:w-[80vw] lg:w-[85vw] mdlg:w-[88vw] md:w-[90vw]  
                    md:gap-[2rem] lg:gap-[4rem]  xl:gap-[6rem] 
                    xl:px-4 lg:px-3 md:px-1"
      >
        {/* skills section Heading */}
        <div
          className="flex justify-center  
                        md:justify-start py-1 cursor-pointer
                        pb-6  md:pb-8 lg:pb-10"
        >
          <span
            className={`text-2xl md:border-b-0 border-b-2 
                        md:text-3xl lg:text-4xl py-1.5  ${
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
        <div className="md:flex md:justify-between">
          <div className="hidden md:block relative w-[30vw] ">
            <DotGrid
              length={25}
              className="grid grid-cols-5 gap-1 absolute 
              3xl:top-[4vh] 3xl:left-[0.2vw] 3xl:ml-8 3xl:w-18 3xl:h-18
              2xl:top-[6vh] 2xl:left-[0.2vw] 2xl:ml-8 2xl:w-18 2xl:h-18 
              xl:top-[12vh] xl:left-[0.2vw] xl:ml-8 xl:w-18 xl:h-18 
              lg:top-[11vh] lg:left-[0.2vw] lg:ml-6 lg:w-16 lg:h-16 
              mdlg:top-[11vh] mdlg:left-[0.2vw] mdlg:ml-4 mdlg:w-14 mdlg:h-14
              md:top-[12vh] md:left-[0.1vw] md:ml-3.5 md:w-11 md:h-11 opacity-70"
            />
            <SquareBox
              className="hidden md:block absolute 
              3xl:top-[2vh] 3xl:left-[13vw] 3xl:w-25 3xl:h-25 
              2xl:top-[3vh] 2xl:left-[16vw] 2xl:w-25 2xl:h-25 
              xl:top-[8vh] xl:left-[18vw] xl:w-25 xl:h-25 
              lg:top-[7vh] lg:left-[18vw]  lg:w-20 lg:h-20 
              mdlg:top-[7vh] mdlg:left-[18vw]  mdlg:w-15 mdlg:h-15
              md:top-[8vh] md:left-[16vw]  md:w-[3.38rem] md:h-[3.38rem]"
              viewBox="0 0 91 91"
            />
            <Symbol
              className="absolute 
              3xl:top-[15vh] 3xl:left-[2.5vw] 3xl:w-28 3xl:h-28
              2xl:top-[20vh] 2xl:left-[3vw] 2xl:w-28 2xl:h-28
              xl:top-[36vh] xl:left-[4vw] xl:w-28 xl:h-28 
              lg:top-[34vh] lg:left-[4vw] lg:w-24 lg:h-24 
              mdlg:top-[30vh] mdlg:left-[4vw] mdlg:w-19 mdlg:h-19
              md:top-[26vh] md:left-[3vw] md:w-17 md:h-17 "
            />
            <DotGrid
              length={25}
              className="grid grid-cols-5 gap-1 absolute 
              3xl:top-[12.2vh] 3xl:left-[9vw] 3xl:w-18 3xl:h-18 
              2xl:top-[17vh] 2xl:left-[12vw] 2xl:w-18 2xl:h-18 
              xl:top-[32vh] xl:left-[15vw] xl:w-18 xl:h-18 
               lg:top-[30vh] lg:left-[16vw] lg:w-16 lg:h-16
               mdlg:top-[26vh] mdlg:left-[14.5vw] mdlg:w-[3.38rem] mdlg:h-[3.38rem] 
               md:top-[23vh] md:left-[13.5vw] md:w-11 md:h-11 opacity-70"
            />
            <SquareBox
              className=" absolute 
              3xl:top-[14vh] 3xl:left-[15vw] 3xl:w-18 3xl:h-18  
              2xl:top-[21vh] 2xl:left-[19vw] 2xl:w-18 2xl:h-18   
              xl:top-[39vh] xl:left-[22.5vw] xl:w-18 xl:h-18 
                lg:top-[37vh] lg:left-[23.5vw] lg:w-16 lg:h-16 
                mdlg:top-[31.5vh] mdlg:left-[22.5vw] mdlg:w-13 mdlg:h-13 
                md:top-[27.5vh] md:left-[21.5vw] md:w-11 md:h-11"
              viewBox="0 0 91 91"
            />
          </div>

          {/* skills Boxes Design*/}
          <div className="md:w-[60rem] 3xl:w-[80rem]  2xl:flex 2xl:justify-center ">
            <div
              className="flex flex-col gap-y-3
                        md:justify-end md:gap-y-4  
                        2xl:text-[1.4rem] 2xl:gap-y-8
                        xl:text-[1.2rem] xl:gap-y-6
                        lg:text-[1rem]
                        md:text-[0.875rem]
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
                  }  w-[15rem] md:w-[9rem] lg:w-[9.2rem] xl:w-[11rem] 2xl:w-[15rem]`}
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
                  className={`border-2 border-gray-400 w-[15rem] md:w-[7rem] lg:w-[7.5rem] xl:w-[9rem] 2xl:w-[11rem] ${
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
                  className={`border-2 border-gray-400 w-[15rem] md:w-[12.5rem] lg:w-[14rem] xl:w-[16rem] 2xl:w-[18rem] ${
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
                    <span className="flex gap-x-15 lg:gap-x-14 md:gap-x-12.5 xl:gap-x-15.5 2xl:gap-x-17">
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
                  className={`border-2 border-gray-400 w-[15rem] md:w-[7rem] lg:w-[7.5rem] xl:w-[9rem] 2xl:w-[11rem] ${
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
                  className={`border-2 border-gray-400 w-[15rem] md:w-[12.5rem] lg:w-[14rem] xl:w-[16rem] 2xl:w-[18rem] ${
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
        </div>
      </section>
    </div>
  );
};

export default Skills;
