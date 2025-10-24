import { HiHashtag } from "react-icons/hi";
import { useTheme } from "../stores/ThemeProvider";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SquareBox from "../components/SquareBox";
import DotGrid from "../components/DotGrid";
import { useEffect, useState } from "react";

interface mail {
    username: string;
    email : string;
    subject : string;
    message : string;
}

const Contact = () => { 
  const { theme } = useTheme();

  const [dotLength, setDotLength] = useState(15); // default
  const [mail, setMail] = useState<mail>( {username : "", email : "", subject : "", message : ""} );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
       const {name, value} = e.target;
       e.preventDefault()
      setMail(prev => ({ ...prev, [name]: value }));
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
      e.preventDefault();


  }
  
    useEffect(() => {
      const updateLength = () => {
        if (window.innerWidth < 1024) {
          setDotLength(10);
        } else {
          setDotLength(15);
        }
      };
  
      updateLength(); // run once on mount
      window.addEventListener("resize", updateLength);
      return () => window.removeEventListener("resize", updateLength);
    }, []);


  return (
    <div
      className="relative  font-['Fira_Code',monospace]    
          md:flex md:justify-center 
          xl:pb-[10rem] lg:pb-[9rem] mdlg:pb-[8rem] md:pb-[7.5rem] pb-[7rem]
          md:ml-[1.5rem] mdlg:ml-[1.65rem] lg:ml-[1.8rem] xl:ml-[2rem] 2xl:ml-[3rem]"
    >
      <section
        className="relative
            2xl:w-[75vw] xl:w-[80vw] lg:w-[85vw] mdlg:w-[88vw] md:w-[90vw]  
            md:gap-[2rem] lg:gap-[4rem]  xl:gap-[6rem] 
            xl:px-4 lg:px-3 md:px-1"
      >
        {/* skills section Heading */}
        <div
          className="flex justify-center  md:justify-start
                            py-1 cursor-pointer pb-6 md:pb-8 lg:pb-10"
        >
          <span
            className={`text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl py-1.5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          >
            <HiHashtag />
          </span>
          <span className="text-2xl md:border-b-0 border-b-2 md:text-3xl lg:text-4xl pt-0.5">
            contact
          </span>
          <span
            className={`hidden md:block lg:w-[12rem] md:w-[8rem] xl:w-[14em] border-t-2 mt-6 ml-5  ${
              theme === "dark" ? "text-[#C778DD]" : "text-[#a840c5]"
            }`}
          ></span>
        </div>

        <div className="flex flex-col md:w-full w-[94%] gap-2.5 mb-10">
          <p className=" md:text-lg lg:text-xl text-center">
            I’m always open to discussing new opportunities or collaborations.
          </p>
          <p className="md:text-lg lg:text-xl text-center">Feel free to reach out.</p>
        </div>

        <div
          className={`flex flex-col gap-4 border-3 w-[94%] md:w-[33rem] m-auto p-6 ${
            theme === "dark" ? "border-gray-400" : "border-gray-600"
          }`}
        >
          <InputField
            type="text"
            name="username"
            id="username"
            placeholders="Name"
            value = {mail.username}
            onChange={ handleChange}
          />
          <InputField
            type="email"
            name="email"
            id="email"
            placeholders="Email"
            value= {mail.email}
            onChange={handleChange}

          />
          <InputField
            type="subject"
            name="subject"
            id="subject"
            placeholders="Subject"
            value = {mail.subject}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="message"
            id="message"
            placeholders="Message"
            value = {mail.message}
            onChange={handleChange}
          />
          <Button types="submit" value="Send" onSubmit={handleSubmit} />
        </div>
      </section>

      {/* experience increase */}
      <SquareBox
        className={`hidden md:block absolute 
      md:top-[32rem] md:right-0
      xl:w-[3.2rem] xl-h-[3.2rem]
      lg:w-[2.6rem] lg-h-[2.6m]
      md:w-[1.8rem] md-h-[1.8rem]`}
        viewBox="0 0 39 91 "
      /> 

       <DotGrid
        length={dotLength}
        className={`hidden md:grid lg:grid-cols-3 md:grid-cols-2 gap-1 absolute
                  xl:w-22 lg:w-15 md:w-9 md:justify-items-start
                  xl:h-25  lg:h-23 md:h-22
                  md:top-[15rem] md:-left-6
                  opacity-70`}
      />
    </div>
  );
};

export default Contact;
