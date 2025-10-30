// import { CgArrowLongRightE } from "react-icons/cg";
import { useTheme } from "../stores/ThemeProvider";
import { HiHashtag } from "react-icons/hi";
import ProjectCard from "../components/ProjectCard";
import { ProjectDetails } from "../utils/ProjectDetails.ts";
import DotGrid from "../components/DotGrid.tsx";
import SquareBox from "../components/SquareBox.tsx";
import { CgArrowLongRightE } from "react-icons/cg";
import { Link } from "react-router-dom";

const Projects = () => {
  const { theme } = useTheme();
  return (
    <div
      className="relative font-['Fira_Code',monospace] 
                   md:flex md:justify-center 
                   md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem]  xl:ml-[2rem] 2xl:ml-[3rem] "
    >
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
        </div>

        {/* rendering projects */}
        {/* justify-items-center le grid ko each cell lai center gardinxa , justify-center le purai grid lai center garxa */}

        <div className="relative flex flex-col gap-y-5 md:gap-y-5  ">
          {ProjectDetails.map((data) => (
                // The   nth-child(n+4):hidden    , 3 wota project display , >3 chai hidden hunxa
             !data.smallproject && (<div key={data.id} className=" nth-[n+4]:hidden">
              <ProjectCard
                
                title={data.title}
                mdwidth="w-[94%]" // for banner style
                width="w-[94%]" // for banner style
                description={data.description}
                tags={data.tags}
                liveUrl={data.url}
                github={data.github}
                isBannerStyle = {true}
              />
            </div>)
          ))}
        </div>
        {/* if no of project is more than 3 */}
        <Link to="/projects"
        onClick={() => {
    window.scrollTo(0, 0); // force scroll to top
  }}>
          <button
            type="button"
            className={`flex text-md  m-auto
                            md:text-md lg:text-lg 
                            md:gap-x-1 lg:gap-x-2
                            mt-5
                            border-2  px-4 py-1.5 cursor-pointer ${
                              theme === "dark"
                                ? "border-[#C778DD] hover:text-[#C778DD]"
                                : "border-[#a840c5] hover:text-[#a840c5]"
                            }`}
          >
            View all
            <span className="pt-[3px]">
              <CgArrowLongRightE />
            </span>
          </button>
        </Link>
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
                md:top-[30rem] md:right-0
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
