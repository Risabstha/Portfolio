import ExperienceModal from "../components/ExperienceModal";
import { useTheme } from "../stores/ThemeProvider";
import { HiHashtag } from "react-icons/hi";
import DotGrid from "../components/DotGrid";
import Symbol from "../components/Symbol";
import { educationDetails } from "../utils/EducationDetails";
import { useEffect, useRef, useState } from "react";

const Education = () => {
  const { theme } = useTheme();

  // vertical line dynamically match the height of the experience box by referencing its actual rendered height
  const boxRefWhole = useRef<HTMLDivElement>(null);

  // for horizontal line 
  const boxRefExperienceModal = useRef<HTMLDivElement[]>([]);

  const [lineHeightWhole, setlineHeightWhole] = useState<number>(0);
  const [lineHeightExperienceModal, setLineHeightExperienceModal] = useState<number[]>([]);

  useEffect(() => {
    const updateHeights = () => {
      // measure the whole container
      if (boxRefWhole.current) {
        const heightWhole = boxRefWhole.current.getBoundingClientRect().height;
        setlineHeightWhole(heightWhole);
      }

      // measure each modal height
      const heights = boxRefExperienceModal.current
        .filter((val): val is HTMLDivElement => val !== null)     // safety net : your ref callback might not have assigned all the elements yet — some positions in the array can be undefined
        .map((val:HTMLDivElement) => val.offsetHeight / 2);

      setLineHeightExperienceModal(heights);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div
      className="  font-['Fira_Code',monospace]   border
      md:flex md:justify-center 
      xl:pb-[10rem] lg:pb-[9rem] mdlg:pb-[8rem] md:pb-[7.5rem] pb-[7rem]
      md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem] xl:ml-[2rem] 2xl:ml-[3rem]"
    >
      <section
        className="relative border
        2xl:w-[75vw]
         xl:w-[80vw] lg:w-[85vw] mdlg:w-[88vw] md:w-[90vw]   border-
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
            education
          </span>
          <span
            className={`hidden md:block lg:w-[18rem] md:w-[16rem] xl:w-[22rem] border-t-2 mt-6 ml-5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          ></span>
        </div>

        {/* academic details */}
        <div
          ref={boxRefWhole}
          className="flex border flex-col relative items-center xl:gap-y-6 lg:gap-y-5 md:gap-y-4 gap-y-4"
        >
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              ref={(val) => {
                boxRefExperienceModal.current[index] = val!;
              }}   //storing height of each modal
                      // val! ==> telling ts,  val is not null or undefined
              className={`flex ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              } `}
            >
              {/* horizontal- lines */}
              <div
                className={`hidden md:block border-t-4 3xl:w-[8.8%] 2xl:w-[4.7%] xl:w-[6.8%] lg:w-[8.5%] md:w-[7%] 
                              xl:border-t-6 lg:border-t-5 md:border-t-4
                              ${
                                theme === "dark"
                                  ? "border-gray-400"
                                  : "border-gray-600"
                              }
                              justify-start`}
                style={{ marginTop: `${lineHeightExperienceModal[index]}px` }}
              />
              <ExperienceModal
                logo={edu.logo}
                isExperience={false}
                isEducation={true}
                threexlwidth="3xl:w-[30vw]"
                xlwidth="xl:w-[32vw]"
                lgwidth="lg:w-[36vw]"
                mdwidth="md:w-[40vw]"
                width="w-[94vw]"
                title={edu.title}
                company={edu.company}
                duration={edu.duration}
                grade={edu.grade}
              />
            </div>
          ))}

          {/* Vertical Line (Dynamic Height) */}
          <div
            className={`hidden md:block absolute left-[10%] -translate-x-1/2 xl:border-r-6 lg:border-r-5 md:border-r-4  rounded-4xl 
                ${theme === "dark" ? "border-gray-400" : "border-gray-600"} `}
            style={{ height: `${lineHeightWhole}px` }}
          />
        </div>

        <Symbol
          className="absolute 
              xl:top-48 xl:right-40 xl:w-28 xl:h-28
              lg:top-59 lg:right-36 lg:w-24 lg:h-24
              md:top-50 md:right-32 md:w-20  md:h-20 "
        />

        <DotGrid
          length={25}
          className={`hidden md:grid grid-cols-5 gap-1 absolute
                  xl:w-22 lg:w-20 md:w-18
                  xl:h-22  lg:h-20 md:h-18
                  xl:top-30 xl:right-70
                  lg:top-32 lg:right-64
                  md:top-34 md:right-58
                  opacity-70`}
        />
        <DotGrid
          length={16}
          className={`hidden md:grid grid-cols-4 gap-1 absolute
                  xl:w-16 lg:w-14 md:w-12
                  xl:h-16  lg:h-14 md:h-12
                  xl:top-83 xl:right-25
                  lg:top-80 lg:right-22
                  md:top-77 md:right-19
                  opacity-70`}
        />
      </section>
    </div>
  );
};

export default Education;
