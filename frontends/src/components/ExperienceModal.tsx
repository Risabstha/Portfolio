import { useTheme } from "../stores/ThemeProvider";

interface experience {
  logo: string;
  isExperience : boolean;
  isEducation : boolean;
  threexlwidth ?: string;
  twoxlwidth ?:string;
  xlwidth ?:string;
  lgwidth ?: string;
  mdwidth : string;
  width:string;
  title: string;
  company: string;
  grade?: string;
  duration: string;
  description?: string;
  skills?: string[];
}

const ExperienceModal = ({
  logo,
  isExperience,
  isEducation,
  threexlwidth,
  twoxlwidth,
  xlwidth,
  lgwidth,
  mdwidth,
  width,
  title,
  company,
  grade,
  duration,
  description,
  skills,
}: experience) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${threexlwidth} ${twoxlwidth} ${xlwidth} ${lgwidth} ${mdwidth} ${width} 
                  ${isExperience ? (theme === "dark" ? "shadow-md md:border-2 border-l-2 border-y border-y-gray-700  md:border-gray-400 border-l-gray-400 " : "shadow-md border-l-2 md:border-2 border-l-gray-600 md:border-gray-600 border-y border-y-gray-300 ") : ""}
                  ${isEducation ? (theme === "dark" ? "shadow-md border-l-2 border-l-gray-400 border-y border-y-gray-700" : "shadow-md border-l-2 border-l-gray-600 border-y border-y-gray-300") : ""}`}
    >
      <div

      // max-w-2xl xl:max-w-3xl 2xl:max-w-[60rem] 3xl:max-w-[80rem] 
        className={`
                     mx-auto   shadow-lg ${isExperience ? "px-6 py-6" : "px-4 py-4"}`}
      >
        {/* Header Section */}
        <div className={`flex items-center gap-4   ${ isExperience && 'mb-4'}`}>
          <img
            src={logo}
            alt="NEA Logo"
            fetchPriority="high"
            className="xl:w-16 lg:w-14 md:w-13 w-15
            xl:h-16 lg-h-14 md:h-13 h-15
            rounded-full bg-[#F3F3F3] p-1"
          />
          <div>
            <h2 className="xl:text-[1.3rem] lg:text-[1.24rem] md:text-[1.18rem] text-[1.1rem] font-semibold">
              {title}
            </h2>
            <p
              className={`xl:text-[1.1rem] lg:text-[1.05rem] md:text-[1rem] text-[0.97rem] ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {company}
            </p>

            <p
              className={`xl:text-[0.95rem] lg:text-[0.91rem] md:text-[0.87rem] text-[0.85rem] ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {duration}
            </p>
            {isEducation && (
              <p
                className={`xl:text-[0.95rem] lg:text-[0.91rem] md:text-[0.87rem] text-[0.85rem]
                              ${
                                theme === "dark"
                                  ? "text-gray-100"
                                  : "text-gray-900"
                              }`}
              >
                Grade: {grade} {/* grade is optional */}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className={`xl:text-[1rem] lg:text-[0.94rem] md:text-[0.88rem] text-[0.86rem] 
                     ${
                       theme === "dark" ? "text-gray-300" : "text-gray-800"
                     } leading-relaxed ${ isExperience && 'mb-4'}`}
        >
          {description}
        </p>

        {/* Skills Section */}
        {/* skills truthy value huda matrai skills display hunxa */}
        <div>
          {isExperience && (
            <h3
              className={`xl:text-[1rem] lg:text-[0.94rem] md:text-[0.88rem] text-[0.86rem]  ${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              } mb-2 font-medium`}
            >
              Skills:
            </h3>
          )}
          <div className="flex flex-wrap gap-2">
            {skills?.map(
              (
                skill,
                i // skills is optional property
              ) => (
                <span
                  key={i}
                  className={`xl:text-[0.9rem] lg:text-[0.85rem] md:text-[0.80rem] text-[0.80rem]  border  ${
                    theme === "dark"
                      ? "border-[#C778DD] text-gray-200"
                      : "border-[#a840c5] text-gray-900"
                  }  px-3 py-1  transition-colors`}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
