// import { CgArrowLongRightE } from "react-icons/cg";
import { useTheme } from "../stores/ThemeProvider";
import { HiHashtag } from "react-icons/hi";
import ProjectCard from "../components/ProjectCard";
import { ProjectDetails } from "../utils/ProjectDetails.ts";
import DotGrid from "../components/DotGrid.tsx";
import SquareBox from "../components/SquareBox.tsx";

const Projects = () => {
  const { theme } = useTheme();
  return (
    <div
      className="relative font-['Fira_Code',monospace] border 
                   md:flex md:justify-center 
                   xl:pb-[10rem] lg:pb-[9rem] mdlg:pb-[8rem] md:pb-[7.5rem] pb-[7rem]
                   md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem]  xl:ml-[2rem] 2xl:ml-[3rem] "
    >
      <section
        className="relative border
              2xl:w-[75vw] xl:w-[80vw]  lg:w-[85vw] mdlg:w-[88vw] md:w-[90vw] 
            md:gap-[2rem] lg:gap-[4rem]  xl:gap-[6rem] 
            xl:px-4 lg:px-3 md:px-1"
      >
        {/* skills section Heading */}
        <div
          className="flex justify-center  
                     md:justify-between 
                     py-1 cursor-pointer 
                     pb-6 md:pb-8 lg:pb-10 "
        >
          <div className="flex">
            <span
              className={`text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl py-1.5  ${
                theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
              }`}
            >
              <HiHashtag />
            </span>
            <span className="text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl pt-0.5">
              projects
            </span>
            <span
              className={`hidden md:block lg:w-[16rem] md:w-[14rem] xl:w-[35rem] border-t-2 mt-6 ml-5  ${
                theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
              }`}
            ></span>
          </div>

          {/* if no of project is more than 3 */}
          {/* <button className="flex text-md  
                            md:text-md lg:text-lg 
                            md:gap-x-1 lg:gap-x-2
                            mt-2.5 ">
            View all
            <span className="pt-[3px]">
              <CgArrowLongRightE />
            </span>
          </button> */}
        </div>

        {/* rendering projects */}
        {/* justify-items-center le grid ko each cell lai center gardinxa , justify-center le purai grid lai center garxa */}
        <div
          className=" w-full grid 
          2xl:grid-cols-4 2xl:gap-4
        xl:grid-cols-3 xl:gap-4
        lg:grid-cols-3 lg:gap-3 lg:mx-2 
        md:grid-cols-2 md:gap-x-0 md:mx-3 md:justify-items-center md:gap-y-[3.5vw]
        grid-col-1 gap-y-8 justify-center"
        >
          {ProjectDetails.map((data) => (
            <ProjectCard
              key={data.id}
              title={data.title}
              description={data.description}
              tags={data.tags}
              liveUrl={data.url}
            />
          ))}
        </div>
      </section>

      <DotGrid
        length={10}
        className={`hidden md:grid grid-cols-2 gap-1 absolute
                  xl:w-12 lg:w-10 md:w-8
                  xl:h-25  lg:h-23 md:h-20
                  xl:top-45 xl:-left-5 
                  lg:top-45 lg:-left-4
                  md:top-45 md:-left-3 
                  opacity-70`}
      />
      <SquareBox
        className={`hidden md:block absolute 
                md:top-[20rem] md:right-0
                xl:w-[4rem] 
                lg:w-[3.1rem] 
                mdlg:w-[1.9rem]
                md:w-[1.5rem] `}
        viewBox="0 0 39 91"
      />
    </div>
  );
};

export default Projects;
