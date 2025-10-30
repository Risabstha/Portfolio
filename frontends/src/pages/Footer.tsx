import { Link } from "react-router-dom";
import { useTheme } from "../stores/ThemeProvider"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const {theme} = useTheme();

  const year = new Date().getFullYear();

  return (
    <div className={` border-t-2 ${
            theme === "dark" ? "border-t-gray-400" : "border-t-gray-600"
          }`}>

          <div className="flex  justify-center space-x-4 mt-8 ">
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
        <div className="text-center  mt-4">© {year} Risab Shrestha. All rights reserved.</div>
    </div>
  )
}

export default Footer
