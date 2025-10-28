import { HiHashtag } from "react-icons/hi";
import logo from "../assets/portfolio_logo/image.png";
import logo1 from "../assets/portfolio_logo/image2.png";
import ThemeToggle from "../components/ThemeToggle";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../stores/ThemeProvider";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import * as Scroll from "react-scroll";
import "../styles/ActiveNav.css";

const Nav = () => {
  const [threedot, setThreedot] = useState<boolean>(false);

  const ThreedotOpen = () => {
    threedot ? setThreedot(false) : setThreedot(true);
  };
  const isMobileNavSelected = () => {
    setThreedot(false);
  };

  const { theme } = useTheme();

  return (
    <div
      className="md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem]  
    xl:ml-[2rem] 2xl:ml-[3rem] md:flex md:justify-center font-['Fira_Code',monospace]"
    >
      {/* // sticky works only with its closest ancestor */}
      <nav
        className={`md:fixed md:top-0 md:z-40 
          2xl:w-[80vw] xl:w-[85vw] lg:w-[90vw] mdlg:w-[93vw] md:w-[95vw] ${
            theme === "dark" ? "bg-[#0F0F0F]" : "bg-[#F3F3F3]"
          }`}
      >
        {/* Desktop NavBar */}
        <div
          className=" hidden 
        md:flex md:justify-between 
        md:px-2 xl:px-4  
        md:py-6 md:text-[0.9rem] mdlg:text-[1.07rem] lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          <div className="flex  md:gap-x-1 lg:gap-x-2 xl:gap-2.5 cursor-pointer">
            {theme === "dark" ? (
              <img
                className="xl:w-[22px] lg:w-[20px] mdlg:w-[18px] md:w-[16px] 
                              xl:h-[22px] lg:h-[20px] mdlg:h-[18px] md:h-[16px] 
                            mt-1 "
                src={logo}
                alt="logo"
              />
            ) : (
              <img
                className="xl:w-[22px] lg:w-[20px] mdlg:w-[18px] md:w-[16px] 
                              xl:h-[22px] lg:h-[20px] mdlg:h-[18px] md:h-[16px] 
                              mt-1 "
                src={logo1}
                alt="logo"
              />
            )}
            <span className="pt-0.5">Risab Shrestha</span>
          </div>

          <ul className="flex md:gap-x-0 lg:gap-x-[0.70vw] xl:gap-x-[1.3vw]">
            <li className="relative">
              <Scroll.Link
                to="home"
                smooth={true}
                activeClass={
                  theme === "dark" ? "active-nav-dark " : "active-nav-light"
                }
                spy={true}
                duration={500}
                // offset={-150}
                className={`flex px-2 py-1 cursor-pointer ${
                  theme === "dark"
                    ? "hover:text-[#C778DD]"
                    : "hover:text-[#a840c5]"
                } `}
              >
                <span
                  className={` md:text-sm mdlg:text-[1.07rem] lg:text-lg xl:text-xl 
                              xl:py-[0.30rem] lg:py-[0.28rem] m mdlg:py-[0.22rem] md:py-[0.15rem] 
                              ${
                                theme === "dark"
                                  ? "text-[#C778DD]"
                                  : "text-[#a840c5]"
                              }`}
                >
                  <HiHashtag />
                </span>
                <span>home</span>
              </Scroll.Link>
            </li>
            <li className="relative">
              <Scroll.Link
                to="skills"
                smooth={true}
                activeClass={
                  theme === "dark" ? "active-nav-dark " : "active-nav-light"
                }
                spy={true}
                duration={500}
                offset={-86}
                className={`flex px-2 py-1 cursor-pointer ${
                  theme === "dark"
                    ? "hover:text-[#C778DD]"
                    : "hover:text-[#a840c5]"
                } `}
              >
                <span
                  className={` md:text-sm mdlg:text-[1.07rem] lg:text-lg xl:text-xl 
                                xl:py-[0.30rem] lg:py-[0.28rem] mdlg:py-[0.22rem] md:py-[0.18rem]  
                                ${
                                  theme === "dark"
                                    ? "text-[#C778DD]"
                                    : "text-[#a840c5]"
                                }`}
                >
                  <HiHashtag />
                </span>
                <span>skills</span>
              </Scroll.Link>
            </li>
            <li className="relative">
              <Scroll.Link
                to="project"
                smooth={true}
                // auto mark hunxa jab tyo section ma pugxa
                //  spy lekhnu parxa active class work garna
                activeClass={
                  theme === "dark" ? "active-nav-dark " : "active-nav-light"
                }
                spy={true}
                duration={500}
                offset={-86}
                className={`flex px-2 py-1 cursor-pointer ${
                  theme === "dark"
                    ? "hover:text-[#C778DD]"
                    : "hover:text-[#a840c5]"
                } `}
              >
                <span
                  className={` md:text-sm mdlg:text-[1.07rem] lg:text-lg xl:text-xl 
                                xl:py-[0.30rem] lg:py-[0.28rem] mdlg:py-[0.22rem] md:py-[0.18rem]  
                                ${
                                  theme === "dark"
                                    ? "text-[#C778DD]"
                                    : "text-[#a840c5]"
                                }`}
                >
                  <HiHashtag />
                </span>
                <span>projects</span>
              </Scroll.Link>
            </li>
            <li className="relative">
              <Scroll.Link
                to="experience"
                smooth={true}
                activeClass={
                  theme === "dark" ? "active-nav-dark " : "active-nav-light"
                }
                spy={true}
                duration={500}
                offset={-86} //nav ko height ko ali mathi samma scroll hunxa
                className={`flex px-2 py-1 cursor-pointer ${
                  theme === "dark"
                    ? "hover:text-[#C778DD]"
                    : "hover:text-[#a840c5]"
                } `}
              >
                <span
                  className={` md:text-sm mdlg:text-[1.07rem] lg:text-lg xl:text-xl 
                                xl:py-[0.30rem] lg:py-[0.28rem] mdlg:py-[0.22rem] md:py-[0.18rem]  
                                ${
                                  theme === "dark"
                                    ? "text-[#C778DD]"
                                    : "text-[#a840c5]"
                                }`}
                >
                  <HiHashtag />
                </span>
                <span>experience</span>
              </Scroll.Link>
            </li>
            <li className="relative">
              <Scroll.Link
                to="education"
                smooth={true}
                activeClass={
                  theme === "dark" ? "active-nav-dark " : "active-nav-light"
                }
                spy={true}
                duration={500}
                offset={-86}
                className={`flex px-2 py-1 cursor-pointer ${
                  theme === "dark"
                    ? "hover:text-[#C778DD]"
                    : "hover:text-[#a840c5]"
                } `}
              >
                <span
                  className={` md:text-sm mdlg:text-[1.07rem] lg:text-lg xl:text-xl 
                                xl:py-[0.30rem] lg:py-[0.28rem] mdlg:py-[0.22rem] md:py-[0.18rem]  
                                ${
                                  theme === "dark"
                                    ? "text-[#C778DD]"
                                    : "text-[#a840c5]"
                                }`}
                >
                  <HiHashtag />
                </span>
                <span>education</span>
              </Scroll.Link>
            </li>
            <li className="relative">
              <Scroll.Link
                to="contact"
                smooth={true}
                activeClass={
                  theme === "dark" ? "active-nav-dark " : "active-nav-light"
                }
                spy={true}
                duration={500}
                offset={-86}
                className={`flex px-2 py-1 cursor-pointer ${
                  theme === "dark"
                    ? "hover:text-[#C778DD]"
                    : "hover:text-[#a840c5]"
                } `}
              >
                <span
                  className={` md:text-sm mdlg:text-[1.07rem] lg:text-lg xl:text-xl 
                                xl:py-[0.30rem] lg:py-[0.28rem] mdlg:py-[0.22rem] md:py-[0.18rem]  
                                ${
                                  theme === "dark"
                                    ? "text-[#C778DD]"
                                    : "text-[#a840c5]"
                                }`}
                >
                  <HiHashtag />
                </span>
                <span>contact</span>
              </Scroll.Link>
            </li>
            <li className="cursor-pointer">
              <ThemeToggle />
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        {/* parent div lai fixed garera  z index diyesi ul(menu) layout issue fix vayo*/}
        <div
          className={`md:hidden fixed w-[100vw] z-[999] top-0 left-0  ${
            theme === "dark" ? "bg-[#0F0F0F]" : "bg-[#F3F3F3]"
          }`}
        >
          <div className="flex justify-between gap-x-3 text-[1.2rem]  pb-4 px-4 py-3 ">
            <div className="flex  gap-x-3 cursor-pointer">
              {theme === "dark" ? (
                <img
                  className="w-[20px] h-[20px] mt-1 "
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
                className="text-[1.8rem] cursor-pointer"
                onClick={() => ThreedotOpen()}
              >
                {threedot ? <IoClose /> : <BsThreeDots />}
              </span>
            </div>
          </div>
          {threedot && (
            <div className="">
              <ul
                className={`gap-x-5  w-screen text-xl ${
                  theme === "dark" ? "bg-[#121212]" : "bg-[#e8e7e7]"
                }`}
              >
                <li className="relative">
                  <Scroll.Link
                    onClick={isMobileNavSelected}
                    to="home"
                    smooth={true}
                    activeClass={
                      theme === "dark" ? "active-nav-dark-mobile " : "active-nav-light-mobile"
                    }
                    spy={true}
                    duration={500}
                    offset={-60}
                    className="flex px-8  pt-3 pb-1.5 cursor-pointer  "
                  >
                    <span
                      className={` text-[1.1rem] py-1.5  ${
                        theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                      }`}
                    >
                      <HiHashtag />
                    </span>

                    <span>home</span>
                  </Scroll.Link>
                </li>
                <li className="relative">
                  <Scroll.Link
                    onClick={isMobileNavSelected}
                    to="skills"
                    smooth={true}
                    activeClass={
                      theme === "dark" ? "active-nav-dark-mobile " : "active-nav-light-mobile"
                    }
                    spy={true}
                    duration={500}
                    offset={-60}
                    className="flex px-8  pt-3 pb-1.5 cursor-pointer  "
                  >
                    <span
                      className={` text-[1.1rem] py-1.5  ${
                        theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                      }`}
                    >
                      <HiHashtag />
                    </span>
                    <span>skills</span>
                  </Scroll.Link>
                </li>
                <li className="relative">
                  <Scroll.Link
                    onClick={isMobileNavSelected}
                    to="project"
                    smooth={true}
                    activeClass={
                      theme === "dark" ? "active-nav-dark-mobile " : "active-nav-light-mobile"
                    }
                    spy={true}
                    duration={500}
                    offset={-60}
                    className="flex px-8  pt-3 pb-1.5 cursor-pointer  "
                  >
                    <span
                      className={` text-[1.1rem] py-1.5  ${
                        theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                      }`}
                    >
                      <HiHashtag />
                    </span>
                    <span>projects</span>
                  </Scroll.Link>
                </li>
                <li className="relative">
                  <Scroll.Link
                    onClick={isMobileNavSelected}
                    to="experience"
                    smooth={true}
                    activeClass={
                      theme === "dark" ? "active-nav-dark-mobile " : "active-nav-light-mobile"
                    }
                    spy={true}
                    duration={500}
                    offset={-60}
                    className="flex px-8  pt-3 pb-1.5 cursor-pointer  "
                  >
                    <span
                      className={` text-[1.1rem] py-1.5  ${
                        theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                      }`}
                    >
                      <HiHashtag />
                    </span>
                    <span>experience</span>
                  </Scroll.Link>
                </li>
                <li className="relative">
                  <Scroll.Link
                    onClick={isMobileNavSelected}
                    to="education"
                    smooth={true}
                    activeClass={
                      theme === "dark" ? "active-nav-dark-mobile " : "active-nav-light-mobile"
                    }
                    spy={true}
                    duration={500}
                    offset={-60}
                    className="flex px-8  pt-3 pb-1.5 cursor-pointer  "
                  >
                    <span
                      className={` text-[1.1rem] py-1.5  ${
                        theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                      }`}
                    >
                      <HiHashtag />
                    </span>
                    <span>education</span>
                  </Scroll.Link>
                </li>
                <li className="relative">
                  <Scroll.Link
                    onClick={isMobileNavSelected}
                    to="contact"
                    smooth={true}
                    activeClass={
                      theme === "dark" ? "active-nav-dark-mobile " : "active-nav-light-mobile"
                    }
                    spy={true}
                    duration={500}
                    offset={-60}
                    className="flex px-8  pt-3 pb-1.5 cursor-pointer  "
                  >
                    <span
                      className={` text-[1.1rem] py-1.5  ${
                        theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                      }`}
                    >
                      <HiHashtag />
                    </span>
                    <span>contact</span>
                  </Scroll.Link>
                </li>

                <li >
                  <div className="flex justify-end space-x-6 px-8 pb-4">
                    <Link
                      to="https://github.com/Risabstha?tab=repositories"
                      target="_blank"
                    >
                      <FaGithub
                        className={`${
                          theme === "dark"
                            ? `text-gray-300 hover:text-white`
                            : `text-gray-800 hover:text-black`
                        } cursor-pointer `}
                        size={25}
                      />
                    </Link>

                    <Link
                      to="https://www.linkedin.com/in/risab-shrestha-47994b201/"
                      target="_blank"
                    >
                      <FaLinkedin
                        className={`${
                          theme === "dark"
                            ? `text-gray-300 hover:text-white`
                            : `text-gray-800 hover:text-black`
                        } cursor-pointer`}
                        size={25} // size of icon
                      />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
