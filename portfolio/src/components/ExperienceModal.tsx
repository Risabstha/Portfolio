import { useTheme } from "../stores/ThemeProvider";

interface experience {
  logo: string;
  isExperience : boolean;
  isEducation : boolean;
  threexlwidth : string;
  xlwidth :string;
  lgwidth : string;
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
      className={`${threexlwidth} ${xlwidth} ${lgwidth} ${mdwidth} ${width} 
            border-2 shadow-md ${
              theme === "dark" ? "border-gray-400" : "border-gray-600"
            }`}
    >
      <div
        className={`max-w-2xl 2xl:max-w-4xl 3xl:max-w-[75rem] border
                     mx-auto   shadow-lg ${isExperience ? "px-6 py-6" : "px-2 py-2"}`}
      >
        {/* Header Section */}
        <div className={`flex items-center gap-4  border ${ isExperience && 'mb-4'}`}>
          <img
            src={logo}
            alt="NEA Logo"
            className="xl:w-16 lg:w-14 md:w-13 w-15
            xl:h-16 lg-h-14 md:h-13 h-15
            rounded-full bg-white p-1"
          />
          <div>
            <h2 className="xl:text-[1.24rem] lg:text-[1.1875rem] md:text-[1.125rem] text-[1.125rem] font-semibold">
              {title}
            </h2>
            <p
              className={`xl:text-[1.125rem] lg:text-[1rem] md:text-[0.9063rem] text-[0.9063rem] ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {company}
            </p>

            <p
              className={`xl:text-[0.8755rem] lg:text-[0.8125rem] md:text-[0.7813rem] text-[0.7813rem] ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {duration}
            </p>
            {isEducation && (
              <p
                className={`xl:text-[0.8755rem] lg:text-[0.8125rem] md:text-[0.7813rem] text-[0.7813rem] 
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
          className={`xl:text-[1rem] lg:text-[0.8755rem] md:text-[0.8438rem] text-[0.8438rem]
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
              className={`xl:text-[1rem] lg:text-[0.8755rem] md:text-[0.8438rem] text-[0.8438rem] ${
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
                  className={`xl:text-[0.8755rem] lg:text-[0.8125rem] md:text-[0.7813rem] text-[0.7813rem] border-1  ${
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
