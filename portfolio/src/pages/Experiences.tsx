import ExperienceModal from "../components/ExperienceModal";
import { useTheme } from "../stores/ThemeProvider";
import { HiHashtag } from "react-icons/hi";
import nealogo from "../assets/NEA.png";
import DotGrid from "../components/DotGrid";
import SquareBox from "../components/SquareBox";

const Experiences = () => {
  const { theme } = useTheme();

  return (
    <div
      className="relative  font-['Fira_Code',monospace]   border-1
      md:flex md:justify-center 
      xl:pb-[10rem] lg:pb-[9rem] mdlg:pb-[8rem] md:pb-[7.5rem] pb-[7rem]
      md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem]"
    >
      <section
        className="relative
        xl:w-[80vw] lg:w-[85vw] mdlg:w-[88vw] md:w-[90vw]  border-1
        md:gap-[2rem] lg:gap-[4rem]  xl:gap-[6rem] 
        xl:px-4 lg:px-3 md:px-1"
      >
        {/* skills section Heading */}
        <div
          className="flex justify-center  md:justify-start
                        py-1 cursor-pointer pb-6 md:pb-8 lg:pb-10"
        >
          <span
            className={`text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl py-1.5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          >
            <HiHashtag />
          </span>
          <span className="text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl pt-0.5">
            experience
          </span>
          <span
            className={`hidden md:block lg:w-[20rem] md:w-[18rem] xl:w-[24rem] border-t-2 mt-6 ml-5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          ></span>
        </div>

        <div className="flex md:justify-start justify-center md:items-center ">
          {/* Top Row */}
          <div className="flex gap-6 mb-0">
            <ExperienceModal
              logo={nealogo}
              xlwidth={"xl:w-[35vw]"}
              lgwidth={"lg:w-[36.6vw]"}
              mdwidth={"md:w-[36.3vw]"}
              width={"w-[94]"} //  width's are vw 
              title="Software Developement Intern"
              company="Nepal Electricity Authority (NEA)"
              duration="Feb 2025 - May 2025"
              description="Gained hands-on experience in developing and deploying
                            web-based systems, including an MD-Schedule management
                            system and a Ping Monitoring dashboard. Worked with the MERN
                            stack to build secure, user-friendly platforms that improved
                            scheduling efficiency and real-time network monitoring
                            across multiple branches. Strengthened skills in full-stack
                            development, database management, and system optimization
                            for operational needs."
              skills={[
                "Leadership",
                "Communication",
                "Web Design",
                "Project Management",
                "Pitch and Presentation",
                "Teamwork",
              ]}
            />
          </div>

          {/* borders- lines */}
          <div className="hidden md:block border-b-2  lg:w-[6rem] md:w-[3rem]"></div>

          {/* <div  className="flex gap-6 mb-0">
               <ExperienceModal
                title="Software Developer Intern"
                company="Nepal Electricity Authority (NEA)"
                duration="Feb 2025 - May 2025"
                description="Gained hands-on experience in developing and deploying
                            web-based systems, including an MD-Schedule management
                            system and a Ping Monitoring dashboard. Worked with the MERN
                            stack to build secure, user-friendly platforms that improved
                            scheduling efficiency and real-time network monitoring
                            across multiple branches. Strengthened skills in full-stack
                            development, database management, and system optimization
                            for operational needs."
                skills={[
                  "Leadership",
                  "Web Design",
                  "Communication",
                  "Project Management",
                  "Pitch and Presentation",
                  "Teamwork",
                ]}
              /> 
           </div> */}

          {/* Bottom Row */}
          <div className="flex gap-6">
            {/* <ExperienceModal
                title="Software Developer Intern"
                company="Nepal Electricity Authority (NEA)"
                duration="Feb 2025 - May 2025"
                description="Gained hands-on experience in developing and deploying
                            web-based systems, including an MD-Schedule management
                            system and a Ping Monitoring dashboard. Worked with the MERN
                            stack to build secure, user-friendly platforms that improved
                            scheduling efficiency and real-time network monitoring
                            across multiple branches. Strengthened skills in full-stack
                            development, database management, and system optimization
                            for operational needs."
                skills={[
                  "Leadership",
                  "Web Design",
                  "Communication",
                  "Project Management",
                  "Pitch and Presentation",
                  "Teamwork",
                ]}
              /> */}
          </div>
        </div>
      </section>

      <SquareBox
        className={`hidden md:block absolute 
      md:top-[12rem] md:-left-8
      xl:w-[4rem] xl-h-[4rem]
      lg:w-[3.2rem] lg-h-[3rem]
      md:w-[2rem] md-h-[2rem] rotate-[-180deg]`}
        viewBox="0 0 39 91 "
      />
      <DotGrid
        length={20}
        className={`hidden md:grid grid-cols-4 gap-1 absolute
                  xl:w-22 lg:w-15 md:w-9
                  xl:h-25  lg:h-23 md:h-20
                  xl:top-100 xl:right-0
                  lg:top-100 lg:right-0
                  md:top-100 md:right-0
                  opacity-70`}
      />
    </div>
  );
};

export default Experiences;
