import ExperienceModal from "../components/ExperienceModal";
import { useTheme } from "../stores/ThemeProvider";
import { HiHashtag } from "react-icons/hi";
import nealogo from "../assets/NEA.png";
import DotGrid from "../components/DotGrid";
import SquareBox from "../components/SquareBox";
import { useEffect, useRef, useState } from "react";
import { experiences } from "../utils/ExperienceDetails";

const Experiences = () => {
  const { theme } = useTheme();

  // vertical line dynamically match the height of the experience box by referencing its actual rendered height
  const boxRefWhole = useRef<HTMLDivElement>(null);
  const boxRefExperienceModal = useRef<HTMLDivElement>(null);

  const [lineHeightWhole, setlineHeightWhole] = useState<number>(0);
  const [lineHeightExperienceModal, setLineHeightExperienceModal] =
    useState<number>(0);

  useEffect(() => {
    const updateHeights = () => {
      if (boxRefWhole.current) {
        const heightWhole = boxRefWhole.current.getBoundingClientRect().height;
        setlineHeightWhole(heightWhole);
      }

      if (boxRefExperienceModal.current) {
        const heightExp = boxRefExperienceModal.current.offsetHeight / 2;
        setLineHeightExperienceModal(heightExp);
      }
    };

    // Call once at mount
    updateHeights();

    // Call on window resize
    window.addEventListener("resize", updateHeights);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div
      className="relative  font-['Fira_Code',monospace]   border
      md:flex md:justify-center 
      xl:pb-[10rem] lg:pb-[9rem] mdlg:pb-[8rem] md:pb-[7.5rem] pb-[7rem]
      md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem] xl:ml-[2rem] 2xl:ml-[3rem]"
    >
      <section
        className="relative
        2xl:w-[75vw] xl:w-[80vw] lg:w-[85vw] mdlg:w-[88vw] md:w-[90vw]  border
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

        <div className="flex md:justify-start justify-center">
          {/* Top Row */}
          <div
            ref={boxRefWhole}
            className="flex flex-col md:w-full relative gap-6 mb-0 "
          >
            {/* exp : experience, i : index */}
            {experiences.map((exp, i) => (
              <div
                key={i}
                ref={i === 0 ? boxRefExperienceModal : null} // attach ref to first one only
                className={`flex ${
                  i % 2 === 0 ? "justify-end" : "justify-start"
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
                  style={{ marginTop: `${lineHeightExperienceModal}px` }}
                />
                <ExperienceModal
                  logo={nealogo}
                  threexlwidth="3xl:w-[30vw]"
                  xlwidth="xl:w-[33vw]"
                  lgwidth="lg:w-[33.5vw]"
                  mdwidth="md:w-[36.58vw]"
                  width="w-[94]"
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
                  style={{ marginTop: `${lineHeightExperienceModal}px` }}
                />
              </div>
            ))}

            {/* Vertical Line (Dynamic Height) */}
            <div
              className={`hidden md:block absolute left-1/2 -translate-x-1/2 xl:border-r-6 lg:border-r-5 md:border-r-4  rounded-4xl 
                ${theme === "dark" ? "border-gray-400" : "border-gray-600"}`}
              style={{ height: `${lineHeightWhole}px` }}
            />
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
        length={window.innerWidth > 1024 ? 15 : 10}
        className={`hidden md:grid lg:grid-cols-3  md:grid-cols-2 gap-1 absolute
                  xl:w-22 lg:w-15 mdlg:w-9 md:w-4 md:justify-items-end
                  xl:h-25  lg:h-23 md:h-22
                  xl:top-100 xl:right-0
                  lg:top-100 lg:right-0
                  md:top-100 md:right-0
                  opacity-70`}
      />
    </div>
  );
};

export default Experiences;
