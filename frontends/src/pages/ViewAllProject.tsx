// import { CgArrowLongRightE } from "react-icons/cg";
import { useTheme } from "../stores/ThemeProvider";
import ProjectCard from "../components/ProjectCard";
import { ProjectDetails } from "../utils/ProjectDetails.ts";
import DotGrid from "../components/DotGrid.tsx";
import SquareBox from "../components/SquareBox.tsx";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";

const ViewAllProject = () => {
  const { theme } = useTheme();
  return (
    <div
      className="relative font-['Fira_Code',monospace] 
                   md:flex md:justify-center lg:pt-6 md:pt-5 pt-4 
                   xl:pb-[10rem] lg:pb-[9rem] mdlg:pb-[8rem] md:pb-[7.5rem] pb-[7rem]
                    "
    >
      <Link to="/">
        {" "}
        <ImExit
          className={`fixed z-[999] lg:text-3xl md:text-2xl text-xl xl:right-[6%] lg:right-[4.8%] mdlg:right-[3.8%] md:right-[3.2%] right-[3%] top-5 ${
            theme === "dark" ? "hover:text-[#C778DD]" : "hover:text-[#a840c5]"
          }`}
        />
      </Link>

      <section
        className="relative 
              2xl:w-[75vw] xl:w-[80vw]  lg:w-[85vw] mdlg:w-[88vw] md:w-[90vw] 
            md:gap-[2rem] lg:gap-[4rem]  xl:gap-[6rem] 
            xl:px-4 lg:px-3 md:px-1"
      >
        {/* skills section Heading */}
        <div
          className="flex justify-center  
                     md:justify-between 
                     py-1 cursor-pointer 
                     pb-4 md:pb-5 lg:pb-6 "
        >
          <div className="flex">
            <span
              className={`text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl py-1.5 ${
                theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
              }`}
            >
              /
            </span>
            <span className="text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl pt-0.5">
              projects
            </span>
          </div>
        </div>
        <div
          className={`mb-3 ml-[4%] md:mb-6 md:ml-[0.2%] ${
            theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
          }`}
        >
          List of my projects
        </div>
        {/* rendering projects */}
        {/* justify-items-center le grid ko each cell lai center gardinxa , justify-center le purai grid lai center garxa */}
        <div
          className="w-full grid 
    2xl:gap-4 2xl:grid-cols-4 
    xl:gap-4 xl:grid-cols-3
    lg:gap-3 lg:grid-cols-3
    mdlg:gap-3 mdlg:grid-cols-3
    md:gap-[2%] md:grid-cols-2 grid-cols1 md:justify-items-end-start
    gap-y-5 justify-center"
        >
          {ProjectDetails.map(
            (data) =>
              !data.smallproject && (
                <ProjectCard
                  key={data.id}
                  title={data.title}
                  mdwidth="w-[94%]" // for banner style
                  width="w-[94%]" // for banner style
                  description={data.description}
                  tags={data.tags}
                  liveUrl={data.url}
                  github={data.github}
                  isBannerStyle={false}
                />
              )
          )}
        </div>

        <div
          className={` mt-16 mb-3 ml-[4%]   md:mb-6 md:mt-[7rem] ml-[0.2%] ${
            theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
          }`}
        >
          Small projects
        </div>

        <div
          className="w-full grid 
    2xl:gap-4 2xl:grid-cols-4 
    xl:gap-4 xl:grid-cols-3
    lg:gap-3 lg:grid-cols-3
    mdlg:gap-3 mdlg:grid-cols-3
    md:gap-[2%] md:grid-cols-2 grid-cols1 md:justify-items-end-start
    gap-y-5 justify-center"
        >
          {ProjectDetails.map(
            (data) =>
              data.smallproject && (
                <ProjectCard
                  key={data.id}
                  title={data.title}
                  mdwidth="w-[94%]" // for banner style
                  width="w-[94%]" // for banner style
                  description={data.description}
                  tags={data.tags}
                  liveUrl={data.url}
                  github= {data.github}
                  isBannerStyle={false}
                />
              )
          )}
        </div>
      </section>

      <DotGrid
        length={10}
        className={`hidden md:grid grid-cols-2 gap-1 absolute
                  xl:w-12 lg:w-10 md:w-8
                  xl:h-25  lg:h-23 md:h-20
                  xl:top-65 xl:left-0 
                  lg:top-65 lg:left-0
                  md:top-65 md:left-0 
                  opacity-70`}
      />
      <SquareBox
        className={`hidden md:block absolute 
                md:top-[40rem] md:right-0
                xl:w-[4rem] 
                lg:w-[3.1rem] 
                mdlg:w-[1.9rem]
                md:w-[1.5rem] `}
        viewBox="0 0 39 91"
      />

      {/* <DotGrid
        length={15}
        className={`hidden md:grid grid-cols-3 gap-1 absolute
                  xl:w-15 lg:w-13 md:w-10
                  xl:h-25  lg:h-23 md:h-20
                  md:top-[90rem] md:right-0 
                  opacity-70`}
      />
      <SquareBox
        className={`hidden md:block absolute 
                md:top-[69rem] md:left-0
                xl:w-[3.6rem] 
                lg:w-[3.1rem] 
                mdlg:w-[1.9rem]
                md:w-[1.5rem] rotate-180 `}
        viewBox="0 0 39 91"
      /> */}
    </div>
  );
};

export default ViewAllProject;
