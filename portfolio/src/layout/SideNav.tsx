import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../stores/ThemeProvider";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { theme } = useTheme();
  return (
    <div className="h-full w-12 flex flex-col items-center justify-end pb-6">
      <div className="flex flex-col items-center space-y-2 relative">
        {/* Vertical line */}
        <div className=" h-50 w-[1px] bg-gray-500 " />

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
                  : `text-gray-500 hover:text-gray-400`
              } cursor-pointer`}
              size={20}
            />
          </Link>

          <Link to="https://www.linkedin.com/in/risab-shrestha-47994b201/" target="_blank">
            <FaLinkedin
              className={`${
                theme === "dark"
                  ? `text-gray-400 hover:text-white`
                  : `text-gray-500 hover:text-gray-400`
              } cursor-pointer`}
              size={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
