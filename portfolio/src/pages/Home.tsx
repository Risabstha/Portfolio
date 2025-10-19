import { useEffect, useReducer } from "react";
import profile from "../assets/gojo.png";
import { useTheme } from "../stores/ThemeProvider";
import "../styles/Home.css";
import "animate.css";
import DownloadButton from "../components/DownloadButton";
import Symbol from "../components/Symbol";
import DotGrid from "../components/DotGrid";
import SquareBox from "../components/SquareBox";

// type type = "Full Stack Developer" | "Web Developer";
const texts = ["FullStack Developer", "Web Developer"];

const initialState: State = {
  index: 0,
  displayed: texts[0],
  phase: "pause",
};

interface State {
  index: number;
  displayed: string;
  phase: string;
}

type Action =
  | { type: "REMOVE_FRONT" }
  | { type: "START_TYPING" }
  | { type: "TYPE_NEXT" }
  | { type: "NEXT_WORD" }
  | { type: "START_REMOVING" };

// Reducer handles state transitions
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "REMOVE_FRONT": {
      return { ...state, displayed: state.displayed.slice(1) }; // texk to first character lai remove garxa
    }
    case "START_TYPING": {
      return { ...state, phase: "typing" };
    }
    case "TYPE_NEXT": {
      const currentText = texts[state.index];
      return {
        ...state,
        displayed: currentText.slice(0, state.displayed.length + 1),
      }; // text ko character type garxa/ add garxa
    }
    case "NEXT_WORD": {
      const nextIndex = (state.index + 1) % texts.length; // index change garne
      return { index: nextIndex, displayed: "", phase: "typing" }; //These three values  define the entire new state.We don't need any of the old state values (...state)
    }
    case "START_REMOVING": {
      return { ...state, phase: "removing" };
    }
    default:
      return state;
  }
}

const Home = () => {
  const { theme } = useTheme();

  const [state, dispatch] = useReducer(reducer, initialState);
  // const texts = ["Full Stack Developer", "Web Developer"];
  // const [index, setIndex] = useState(0);
  // const [displayed, setDisplayed] = useState(texts[0]);
  // const [phase, setPhase] = useState("pause"); // "removing" | "typing" | "pause"

  // useEffect(() => {
  //   const current = texts[index];

  //   if (phase === "pause") {
  //     // initial pause before starting removing
  //     const timeout = setTimeout(() => setPhase("removing"), 2500); // 2.5s pause
  //     return () => clearTimeout(timeout);
  //   }

  //   if (phase === "removing") {
  //     if (displayed.length > 1) {
  //       const timeout = setTimeout(() => {
  //         setDisplayed(displayed.slice(1)); // remove from front, 0 index lai remove garxa ( 1 index dekhi last index samma lai display ma halxa)
  //       }, 100);
  //       return () => clearTimeout(timeout);
  //     } else {
  //       const timeout = setTimeout(() => {
  //         setPhase("typing");
  //         setIndex((prev) => (prev + 1) % texts.length); // here, texts.length is 2 and we are using mod(%)
  //       }, 500); // sabai text remove vaisake pachi 0.5 sec ma new text write garxa

  //       return () => clearTimeout(timeout);
  //     }
  //   }

  //   if (phase === "typing") {
  //     if (displayed.length < current.length) {
  //       // jaba displayed = Full Stack Develope , hunxa
  //       const timeout = setTimeout(() => {
  //         setDisplayed(current.slice(0, displayed.length + 1)); // yaha, displayed = Full Stack Developer, hunxa
  //       }, 150); // 150ms ma remove hunxa text
  //       return () => clearTimeout(timeout);
  //     } else {
  //       const timeout = setTimeout(() => {
  //         setPhase("removing");
  //       }, 2500); // full text write vaye pachi, 2.5 sec pachi text remove suru hunxa
  //       return () => clearTimeout(timeout);
  //     }
  //   }
  // }, [displayed, phase, index]);
  useEffect(() => {
    const currentText = texts[state.index];

    if (state.phase === "pause") {
      const timeout = setTimeout(() => {
        dispatch({ type: "START_REMOVING" });
      }, 2500);
      return () => clearTimeout(timeout);
    }

    if (state.phase === "removing") {
      if (state.displayed.length > 1) {
        const timeout = setTimeout(() => {
          dispatch({ type: "REMOVE_FRONT" });
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          dispatch({ type: "NEXT_WORD" });
        }, 500);
        return () => clearTimeout(timeout);
      }
    }

    if (state.phase === "typing") {
      if (state.displayed.length < currentText.length) {
        const timeout = setTimeout(() => {
          dispatch({ type: "TYPE_NEXT" });
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          dispatch({ type: "START_REMOVING" });
        }, 2500);
        return () => clearTimeout(timeout);
      }
    }
  }, [state.displayed, state.phase, state.index]);

  return (
    <div className="  font-['Fira_Code',monospace] 
    xl:pb-[10rem] lg:pb-[9rem] md:pb-[8rem] pb-[7rem] border-1 ">
      {/* Desktop view */}
      <div className="hidden md:flex md:justify-center 
      md:ml-[1.5rem] 
      lg:ml-[1.5rem] 
      xl:ml-[2rem]">
        <div className="flex  
        xl:w-[80vw] lg:w-[85vw] md:w-[88vw]  
        md:gap-[2rem]  lg:gap-[4rem]   xl:gap-[6rem]  
        pt-[10rem] px-4 ">
          <div className="w-[60vw] pt-0   space-y-4">
            <div className="space-x-4">
              <p
                className={`md:text-[30px] 
                  lg:text-[40px] 
                  xl:text-[45px] 
                  font-semibold`}
              >
                Hi, I am 
              </p>
              <p 
               className={`md:text-[30px] 
                  lg:text-[40px] 
                  xl:text-[45px] 
                  font-semibold`}
              >
                Risab Shrestha.
              </p>
            </div>

            <p className="md:text-[22px] 
            lg:text-3xl 
            xl:text-[32px] 
            font-semibold ">
              I am a{" "}
              <span
                className={` pr-1  ${
                  theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                }`}
              >
                {state.displayed}
                <span className="animate-blink font-extralight">|</span>
              </span>
            </p>

            <p className="md:text-md 
            lg:text-lg 
            xl:text-xl  
            font-medium">
              Hi! I am a web app developer passionate about building
              cross-platform apps with React. I focus on creating smooth,
              user-friendly experiences for web application. I also work with
              the MERN stack to build full solutions when needed. I love solving
              real-world problems and exploring new tech along the way.
            </p>

            <div className=" py-3  w-[10rem] 
            animate__animated animate__slideInRight transition-all duration-600 ease-in-out">
              <DownloadButton />
            </div>
          </div>

          <div className="w-[40vw] flex justify-center  ">
            <div className="relative 
            xl:w-[20rem] 
            lg:w-[18rem] 
            md:w-[16rem] ">

              <Symbol
                width={120}
                height={120}
                className= "absolute xl:top-12 xl:left-0 lg:top-10 lg:left-0 md:top-8 md:left-0"
                
              />

              <div>
                {/* image lai relative banaune rw bottom ma place garne , ani image le svg rw dot lai cover garnxa */}
                <img
                  className="relative 
                  xl:pt-3 
                  lg:pt-8 
                  md:pt-10 
                  w-[23rem] "
                  src={profile}
                  alt="profile"
                />
              </div>

              {/* yeslai img mathi rakhyo vane yeslai img le xopxa */}
              <DotGrid
                length={25}
                className="grid grid-cols-5 gap-1 
                  w-22 h-22 absolute 
                  xl:top-58 xl:right-2 
                  lg:top-58 lg:right-2 
                  md:top-52 md:right-2 
                  opacity-70"
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden flex justify-center pb-10">
        <div className=" w-[100vw] pt-[5rem] px-4 ">
          {/* <div className="flex justify-center  z-0"> */}
          <div className="relative z-[0]  m-auto w-[15rem] flex justify-center ">
            <Symbol
              width={60}
              height={60}
              className={"absolute top-7 left-2"}
            />

            <div>
              {/* image lai relative banaune rw bottom ma place garne , ani image le svg rw dot lai cover garnxa */}
              <img
                className="relative z-[0] w-[12rem] "
                src={profile}
                alt="profile image"
              />
            </div>

            {/* yeslai img mathi rakhyo vane yeslai img le xopxa */}
            <DotGrid
              length={16}
              className="grid grid-cols-4 gap-1 
                w-13 h-13 
                absolute top-30  right-8 z-[0] opacity-60"
            />
          </div>
          {/* </div> */}

          <div className="flex flex-col items-center pt-3">
            <p className={`text-[30px]  font-semibold`}>Hi, I am</p>
            <p className={`text-[30px] font-semibold `}>Risab Shrestha</p>

            <p className="text-[20px]  font-semibold ">
              I am a{" "}
              <span
                className={` pr-1  ${
                  theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
                }`}
              >
                {state.displayed}
                <span className="animate-blink font-extralight"> | </span>
              </span>
            </p>

            <p className="text-md text-center font-medium pt-4 w-[94vw] ">
              Hi! I am a web app developer passionate about building
              cross-platform apps with React. I focus on creating smooth,
              user-friendly experiences for web application. I also work with
              the MERN stack to build full solutions when needed. I love solving
              real-world problems and exploring new tech along the way.
            </p>
            <div className=" py-3 mt-2 w-[10rem] 
            animate__animated animate__slideInRight transition-all duration-600 ease-in-out">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>

      {/* square svg */}
      <SquareBox className={`hidden md:block absolute 
      md:top-[40rem] md:right-0
      xl:w-[4rem] xl-h-[4rem]
      lg:w-[3.2rem] lg-h-[3rem]
      md:w-[2rem] md-h-[2rem]`}
       viewBox="0 0 59 91"/>
      
    </div>
  );
};

export default Home;
