import ExperienceModal from "../components/ExperienceModal";
import { useTheme } from "../stores/ThemeProvider";
import { HiHashtag } from "react-icons/hi";
import DotGrid from "../components/DotGrid";
import SquareBox from "../components/SquareBox";
import { useEffect, useRef, useState } from "react";
import { experiences } from "../utils/ExperienceDetails";

const Experiences = () => {
  const { theme } = useTheme();

  // vertical line dynamically match the height of the experience box by referencing its actual rendered height
  const boxRefWhole = useRef<HTMLDivElement>(null);

  // for horizontal line
  const boxRefExperienceModal = useRef<HTMLDivElement[]>([]);

  const [lineHeightWhole, setlineHeightWhole] = useState<number>(0);
  const [lineHeightExperienceModal, setLineHeightExperienceModal] = useState<
    number[]
  >([]);

  useEffect(() => {
    const updateHeights = () => {
      // measure the whole container
      if (boxRefWhole.current) {
        const heightWhole = boxRefWhole.current.getBoundingClientRect().height;
        setlineHeightWhole(heightWhole);
      }

      // measure each modal height
      const heights = boxRefExperienceModal.current
        .filter((val): val is HTMLDivElement => val !== null) // safety net : your ref callback might not have assigned all the elements yet — some positions in the array can be undefined
        .map((val: HTMLDivElement) => val.offsetHeight / 2);

      setLineHeightExperienceModal(heights);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);



  const [dotLength, setDotLength] = useState(15); // default

  useEffect(() => {
    const updateLength = () => {
      if (window.innerWidth < 1024) {
        setDotLength(10);
      } else {
        setDotLength(15);
      }
    };

    updateLength(); // run once on mount
    window.addEventListener("resize", updateLength);
    return () => window.removeEventListener("resize", updateLength);
  }, []);

  return (
    <div
      className="relative  font-['Fira_Code',monospace]   
      md:flex md:justify-center 
      md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem] xl:ml-[2rem] 2xl:ml-[3rem]"
    >
      <section
        className="relative
        2xl:w-[75vw] xl:w-[80vw] lg:w-[85vw] mdlg:w-[88vw] md:w-[90vw]  
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
            className={`hidden md:block lg:w-[14rem] md:w-[10rem] xl:w-[18rem] border-t-2 mt-6 ml-5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          ></span>
        </div>

        {/* Top Row */}
        <div
          ref={boxRefWhole}
          className=" md:w-full relative mb-0 flex flex-col gap-y-5 "
        >
          {/* exp : experience, i : index */}
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(val) => {
                boxRefExperienceModal.current[i] = val!;
              }} //storing height of each modal
              // val! ==> telling ts,  val is not null or undefined
              className={`flex ${
                i % 2 === 0
                  ? "md:justify-end justify-center"
                  : "md:justify-start justify-center"
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
                              ${i % 2 === 0 ? "justify-start" : "md:hidden"}`}
                style={{ marginTop: `${lineHeightExperienceModal[i]}px` }}
              />
              <ExperienceModal
                isExperience={true}
                isEducation={false}
                threexlwidth="3xl:w-[30vw]"
                xlwidth="xl:w-[33vw]"
                lgwidth="lg:w-[33.5vw]"
                mdwidth="md:w-[36.58vw]"
                width="w-[94vw]"
                {...exp}
              />
              {/* horizontal- lines */}
              <div
                className={`hidden md:block border-t-4 3xl:w-[8.8%] 2xl:w-[4.7%] xl:w-[6.8%] lg:w-[8.5%] md:w-[7%] 
                              xl:border-t-6 lg:border-t-5 md:border-t-4
                              ${
                                theme === "dark"
                                  ? "border-gray-400"
                                  : "border-gray-600"
                              }
                              ${i % 2 === 0 ? "md:hidden" : "justify-start"}`}
                style={{ marginTop: `${lineHeightExperienceModal[i]}px` }}
              />
            </div>
          ))}

          {/* Vertical Line (Dynamic Height) */}
          <div
            className={`hidden md:block absolute top-0 left-1/2 -translate-x-1/2 xl:border-r-6 lg:border-r-5 md:border-r-4  rounded-4xl 
                ${theme === "dark" ? "border-gray-400" : "border-gray-600"}`}
            style={{ height: `${lineHeightWhole}px` }}
          />
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
        length={dotLength}
        className={`hidden md:grid lg:grid-cols-3  md:grid-cols-2 gap-1 absolute
                  xl:w-22 lg:w-15 mdlg:w-9 md:w-4 md:justify-items-end
                  xl:h-25  lg:h-23 md:h-22
                  xl:top-100 xl:right-0
                  lg:top-100 lg:right-0
                  md:top-100 md:right-0
                  opacity-70`}
      />

      {/* experience increase */}
      {/* <SquareBox
        className={`hidden md:block absolute 
      md:top-210 md:right-0
      xl:w-[3.2rem] xl-h-[3.2rem]
      lg:w-[2.6rem] lg-h-[2.6m]
      md:w-[1.8rem] md-h-[1.8rem]`}
        viewBox="0 0 39 91 "
      /> */}

      {/* <DotGrid
        length={dotLength}
        className={`hidden md:grid lg:grid-cols-3 md:grid-cols-2 gap-1 absolute
                  xl:w-22 lg:w-15 mdlg:w-9 md:w-4 md:justify-items-start
                  xl:h-25  lg:h-23 md:h-22
                  md:top-[60rem] md:-left-6
                  opacity-70`}
      /> */}
    </div>
  );
};

export default Experiences;
