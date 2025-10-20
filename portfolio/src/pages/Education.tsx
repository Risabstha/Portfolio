import ExperienceModal from "../components/ExperienceModal";
import { useTheme } from "../stores/ThemeProvider";
import { HiHashtag } from "react-icons/hi";
import nepalaya from "../assets/nepalaya.png";
import KCCS from "../assets/KCCS.png";
import Himshikhar from "../assets/Himshikhar.png";
import SquareBox from "../components/SquareBox";
import DotGrid from "../components/DotGrid";
import Symbol from "../components/Symbol";

const Education = () => {
  const { theme } = useTheme();

  return (
    <div
      className="  font-['Fira_Code',monospace]   border-1
      md:flex md:justify-center 
      xl:pb-[10rem] lg:pb-[9rem] md:pb-[8rem] pb-[7rem]
      md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem]"
    >
      <section
        className="relative
        xl:w-[80vw] lg:w-[85vw] md:w-[88vw]  border-1
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

        <div className="flex flex-col items-center xl:gap-y-12 lg:gap-y-10 md:gap-y-8 gap-y-5">
          {/* overriding  parent’s alignment for each child with self-start, self-center, and self-end. */}
          <div className="flex self-start gap-6 mb-0">
            <ExperienceModal
              logo={nepalaya}
              xlwidth={"xl:w-[32vw]"}
              lgwidth={"lg:w-[36vw]"}
              mdwidth={"md:w-[40vw]"}
              width={"w-[94vw]"} //  width's are vw
              title="Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)"
              company="Nepalaya College"
              duration="Graduated (2021 - 2025)"
              grade="78 %"
            />
          </div>

          <div className="flex self-center gap-6 mb-0">
            <ExperienceModal
              logo={KCCS}
              xlwidth={"xl:w-[32vw]"}
              lgwidth={"lg:w-[36vw]"}
              mdwidth={"md:w-[40vw]"}
              width={"w-[94vw]"} //  width's are vw
              title="High School (Science stream)"
              company="Kathmandu College of Central State"
              duration="Graduated (2019 - 2020)"
              grade="3.24 GPA"
            />
          </div>
          <div className="flex self-end gap-6 mb-0">
            <ExperienceModal
              logo={Himshikhar}
              xlwidth={"xl:w-[32vw]"}
              lgwidth={"lg:w-[36vw]"}
              mdwidth={"md:w-[40vw]"}
              width={"w-[94vw]"} //  width's are vw
              title="Secondary Education Examination (SEE)"
              company="Himshikhar Boarding School"
              duration="Graduated (2018 AD)"
              grade="3.65 GPA"
            />
          </div>
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
