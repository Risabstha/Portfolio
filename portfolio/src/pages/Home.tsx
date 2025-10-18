import { useEffect, useReducer } from "react";
import profile from "../assets/gojo.png";
import { useTheme } from "../stores/ThemeProvider";
import "../styles/Home.css";
import DownloadButton from "../components/DownloadButton";

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
    <div>
      {/* Desktop view */}
      <div className="hidden md:flex md:justify-center md:ml-[1.5rem] lg:ml-[1.5rem] xl:ml-[2rem]">
        <div className="flex  xl:w-[80vw] lg:w-[85vw] md:w-[88vw]  md:gap-[2rem] lg:gap-[4rem]  xl:gap-[6rem] pt-[12rem] px-4 ">
          <div className="w-[60vw] pt-8   space-y-4">
            <div className="space-x-4">
              <p
                className={`md:text-[30px] lg:text-[40px] xl:text-[45px] font-semibold`}
              >
                Hi, I am Risab Shrestha.
              </p>
            </div>

            <p className="md:text-xl lg:text-2xl xl:text-3xl font-semibold ">
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

            <p className="md:text-md lg:text-lg xl:text-xl  font-medium">
              Hi! I am a web app developer passionate about building
              cross-platform apps with React. I focus on creating smooth,
              user-friendly experiences for web application. I also work with
              the MERN stack to build full solutions when needed. I love solving
              real-world problems and exploring new tech along the way.
            </p>

            <div className=" py-3 ">
              <DownloadButton />
            </div>
          </div>

          <div className="w-[40vw] flex justify-center ">
            <div className="relative xl:w-[20rem] lg:w-[18rem] md:w-[16rem] ">
              <svg
                className="absolute xl:top-12 xl:left-0 lg:top-10 lg:left-0 md:top-8 md:left-0"
                width="120"
                height="120"
                viewBox="-1 -1 158 158"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_64_1298" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z"
                  />
                </mask>
                <path
                  d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z"
                  fill="#C778DD"
                  mask="url(#path-1-inside-1_64_1298)"
                />
                <mask
                  id="path-3-outside-2_64_1298"
                  maskUnits="userSpaceOnUse"
                  x="76.5"
                  y="0"
                  width="80"
                  height="119"
                  fill="black"
                >
                  <rect fill="white" x="76.5" width="80" height="119" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z"
                  />
                </mask>
                <path
                  d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z"
                  fill="#C778DD"
                  mask="url(#path-3-outside-2_64_1298)"
                />
              </svg>

              <div>
                {/* image lai relative banaune rw bottom ma place garne , ani image le svg rw dot lai cover garnxa */}
                <img
                  className="relative xl:pt-3 lg:pt-8 md:pt-10 w-[23rem] "
                  src={profile}
                  alt="profile"
                />
              </div>

              {/* yeslai img mathi rakhyo vane yeslai img le xopxa */}
              <div
                className={`grid grid-cols-5 gap-1 w-22 h-22 absolute xl:top-58 xl:right-2 lg:top-58 lg:right-2 md:top-52 md:right-2 md:opacity-60`}
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1  rounded-full  ${
                      theme === "dark" ? "bg-[#f2f2f2]" : "bg-[#2d2c2c]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden flex justify-center">
        <div className=" w-[100vw] pt-[5rem] px-4 ">
          {/* <div className="flex justify-center  z-0"> */}
          <div className="relative z-[0]  m-auto w-[15rem] flex justify-center ">
            <svg
              className="absolute top-7 left-2 "
              width="60"
              height="60"
              viewBox="-1 -1 158 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_64_1298" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z"
                />
              </mask>
              <path
                d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z"
                fill="#C778DD"
                mask="url(#path-1-inside-1_64_1298)"
              />
              <mask
                id="path-3-outside-2_64_1298"
                maskUnits="userSpaceOnUse"
                x="76.5"
                y="0"
                width="80"
                height="119"
                fill="black"
              >
                <rect fill="white" x="76.5" width="80" height="119" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z"
                />
              </mask>
              <path
                d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z"
                fill="#C778DD"
                mask="url(#path-3-outside-2_64_1298)"
              />
            </svg>

            <div>
              {/* image lai relative banaune rw bottom ma place garne , ani image le svg rw dot lai cover garnxa */}
              <img
                className="relative z-[0] w-[12rem] "
                src={profile}
                alt="profile image"
              />
            </div>

            {/* yeslai img mathi rakhyo vane yeslai img le xopxa */}
            <div
              className={`grid grid-cols-4 gap-1 w-13 h-13 absolute top-30 opacity-60 right-5 z-[0]`}
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-1  rounded-full  ${
                    theme === "dark" ? "bg-[#f2f2f2]" : "bg-[#2d2c2c]"
                  }`}
                ></div>
              ))}
            </div>
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
            <div className=" py-3 ">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>

    {/* square svg */}
      <svg
        className="hidden md:block absolute xl:top-[43rem] xl:right-0 md:top-[45rem] md:right-0 "
        width="82"
        height="91"
        viewBox="0 0 82 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="90" height="90" stroke="#ABB2BF" />
      </svg>
    </div>
  );
};

export default Home;
