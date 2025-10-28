import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../stores/ThemeProvider";
import { Link } from "react-router-dom";

export default function SideNav() {
  const { theme } = useTheme();
  return (
    <div className=" md:h-full md:w-[2.5rem] lg:w-[3rem] xl:w-[4rem] 2xl:w-[6rem] md:items-center md:justify-end md:pb-6 md:fixed md:top-0">   {/** fixed SideNav */}
      <div className="flex flex-col items-center space-y-2 relative">
        {/* Vertical line */}
        <div className= {`h-50 w-[1px] bg-gray-500 ${
                    theme === "dark" ? "border-gray-400" : "border-gray-600"
                  }`} />

        {/* Icons */}
        <div className="flex flex-col items-center space-y-4">
          <Link
            to="https://github.com/Risabstha?tab=repositories"
            target="_blank"
          >
            <FaGithub
              className={`${
                theme === "dark"
                   ? `text-gray-400 hover:text-white`
                            : `text-gray-800 hover:text-black`
              } cursor-pointer`}
              size={25}
            />
          </Link>

          <Link to="https://www.linkedin.com/in/risab-shrestha-47994b201/" target="_blank">
            <FaLinkedin
              className={`${
                theme === "dark"
                  ? `text-gray-400 hover:text-white`
                            : `text-gray-800 hover:text-black`
              } cursor-pointer`}
              size={25}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
