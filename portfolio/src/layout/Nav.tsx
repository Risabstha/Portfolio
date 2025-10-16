import { HiHashtag } from "react-icons/hi";
import logo from "../assets/image.png";
import logo1 from "../assets/image2.png";
import ThemeToggle from "../components/ThemeToggle";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../stores/ThemeProvider";


const Nav = () => {
  const [threedot, setThreedot] = useState<boolean>(false);

  const ThreedotOpen = () => {
    threedot ? setThreedot(false) : setThreedot(true);
  };

  const { theme } = useTheme();

  return (
    // sticky works only with its closest ancestor
      <nav className={`sticky top-0 md:z-40 z-50 md:ml-[6rem] md:mr-[3rem]  ${theme === 'dark' ? "bg-[#2d2c2c]" : "bg-[#f2f2f2]"}`}>
        {/* Desktop NavBar */}
        <div className=" hidden md:flex md:justify-between md:px-4 md:py-6 md:text-xl">
          <div className="flex  gap-x-3 cursor-pointer">
            {theme === "dark" ? (
              <img className="w-[22px] h-[22px] mt-1 " src={logo} alt="logo" />
            ) : (
              <img className="w-[22px] h-[22px] mt-1 " src={logo1} alt="logo" />
            )}
            <span>Risab Shrestha</span>
          </div>

          <ul className="flex gap-x-5 ">
            <li className="flex  px-2 py-1 cursor-pointer">
              <span className=" text-lg py-1.5 text-[#C778DD]">
                <HiHashtag />
              </span>
              <span>home</span>
            </li>
            <li className="flex  px-2 py-1 cursor-pointer">
              <span className=" text-lg py-1.5 text-[#C778DD]">
                <HiHashtag />
              </span>
              <span>project</span>
            </li>
            <li className="flex  px-2 py-1 cursor-pointer">
              <span className=" text-lg py-1.5 text-[#C778DD]">
                <HiHashtag />
              </span>
              <span>about</span>
            </li>
            <li className="flex  px-2 py-1 cursor-pointer">
              <span className=" text-lg py-1.5 text-[#C778DD]">
                <HiHashtag />
              </span>
              <span>contact</span>
            </li>
            <li className="flex  px-2 py-1 cursor-pointer">
              <ThemeToggle />
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div>
          <div className=" md:hidden  px-4 py-3 ">
            <div className="flex justify-between gap-x-3 text-md  pb-4">
              <div className="flex  gap-x-3 cursor-pointer">
                {theme === "dark" ? (
                  <img
                    className="w-[22px] h-[22px] mt-1 "
                    src={logo}
                    alt="logo"
                  />
                ) : (
                  <img
                    className="w-[22px] h-[22px] mt-1 "
                    src={logo1}
                    alt="logo"
                  />
                )}
                <span>Risab Shrestha</span>
              </div>
              <div className="flex  gap-x-5">
                <div className="flex  px-2 py-1 cursor-pointer">
                  <ThemeToggle />
                </div>
                <span
                  className="text-2xl cursor-pointer"
                  onClick={() => ThreedotOpen()}
                >
                  {threedot ? <IoClose /> : <BsThreeDots />}
                </span>
              </div>
            </div>
            {threedot && (
              <ul className="gap-x-5 text-xl">
                <li className="flex  px-2 py-1 cursor-pointer ">
                  <span className=" text-xl py-1.5 text-[#C778DD]">
                    <HiHashtag />
                  </span>

                  <span>home</span>
                </li>
                <li className="flex  px-2 py-1 cursor-pointer">
                  <span className=" text-lg py-1.5 text-[#C778DD]">
                    <HiHashtag />
                  </span>
                  <span>project</span>
                </li>
                <li className="flex  px-2 py-1 cursor-pointer">
                  <span className=" text-xl py-1.5 text-[#C778DD]">
                    <HiHashtag />
                  </span>
                  <span>about</span>
                </li>
                <li className="flex  px-2 py-1 cursor-pointer">
                  <span className=" text-xl py-1.5 text-[#C778DD]">
                    <HiHashtag />
                  </span>
                  <span>contact</span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>

  );
};

export default Nav;
