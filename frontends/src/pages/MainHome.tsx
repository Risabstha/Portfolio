import Home from "./Home";
import SideNav from "../layout/SideNav";
import Nav from "../layout/Nav";
import Skills from "./Skills";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import { Element } from "react-scroll";

const MainHome = () => {
  return (
    <div>
      <div className="hidden md:block">
        {" "}
        {/** making sideNav hidden for mobile view */}
        <SideNav />
      </div>
      <Nav />
      <div className="flex flex-col xl:gap-y-[10rem] lg:gap-y-[9rem] mdlg:gap-y-[8rem] md:gap-y-[7.5rem] gap-y-[7rem]">
        <Element name="home">
          <Home />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="project">
          <Projects />
        </Element>
        <Element name="experience">
          <Experiences />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </div>
  );
};

export default MainHome;
