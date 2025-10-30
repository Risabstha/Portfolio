import { HiHashtag } from "react-icons/hi";
import { useTheme } from "../stores/ThemeProvider";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SquareBox from "../components/SquareBox";
import DotGrid from "../components/DotGrid";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

interface Mail {
  username: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { theme } = useTheme();

  const [dotLength, setDotLength] = useState(15); // default
  const [mailSucess, setmailSuccess] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");   
  const [isSubmitting, setIsSubmitting] = useState(false);    // to prevent multiple email send clicks

  const [mail, setMail] = useState<Mail>({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
   
    const { name, value } = e.target;   // destructuring

    e.preventDefault();
    setMail((prev) => ({ ...prev, [name]: value }));
  };


  const [errors, setErrors] = useState<Mail>({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  // ✅ Validation logic
  const validateMail = (data: Mail) => {
    const newErrors: Mail = {
      username: "",
      email: "",
      subject: "",
      message: "",
    };

    // username: not empty, at least 2 chars, only letters and spaces
    if (!data.username.trim()) {
      newErrors.username = "Name cannot be empty.";
    } else if (data.username.trim().length < 2) {
      newErrors.username = "Name must be at least 2 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(data.username)) {
      newErrors.username = "Name must not contain numbers or symbols.";
    }

    // email: valid format
    if (!data.email.trim()) {
      newErrors.email = "Email cannot be empty.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email address.";
    }

    // subject: at least 2 characters
    if (!data.subject.trim()) {
      newErrors.subject = "Subject cannot be empty.";
    } else if (data.subject.trim().length < 2) {
      newErrors.subject = "Subject must be at least 2 characters.";
    }

    // message: not empty
    if (!data.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    return newErrors;
  };

  //   const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validationErrors = validateMail(mail);
  //   setErrors(validationErrors);    // validationErros le error obj contain garxa

  //   //    validationErros aka newErrors ko property ko values empty xa vanne check garxa (true/false)
  //   const noErrors = Object.values(validationErrors).every((err) => err === "");

  //   if (noErrors) {
  //     setSubmitStatus("Mail sent successfully!");
  //     setdb(mail); // ✅ simulate saving to database
  //     setMail({ username: "", email: "", subject: "", message: "" }); //  clear field
  //   } else {
  //     setSubmitStatus(""); // reset message if invalid
  //   }
  // };

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



  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isSubmitting) return;

  const validationErrors = validateMail(mail);
  setErrors(validationErrors);

  const noErrors = Object.values(validationErrors).every((err) => err === "");
  if (!noErrors) {
    setSubmitStatus("");
    return;
  }

  setIsSubmitting(true);

  try {
    // Send email using EmailJS
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   // from EmailJS dashboard
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // from EmailJS dashboard
      // "template_868ob0s",
      {
        from_name: mail.username,
        from_email: mail.email,
        subject: mail.subject,
        message: mail.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // your EmailJS public key
    );

    if (result.status === 200) {
      setSubmitStatus("Mail sent successfully!");
      setmailSuccess(true);
      setMail({ username: "", email: "", subject: "", message: "" });
    } else {
      setSubmitStatus("Failed to send mail.");
      setmailSuccess(false);
    }
  } catch (error) {
    console.error(error);
    setSubmitStatus("Error sending email. Try again later.");
    setmailSuccess(false);
  } finally {
    setTimeout(() => setIsSubmitting(false), 10000);
  }
};


  // Auto-clear message after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
      return () => clearTimeout(timer); // Cleanup
    }
    setmailSuccess(false);
  }, [submitStatus]);

return (
    <div
      className="relative  font-['Fira_Code',monospace]    
          md:flex md:justify-center 
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
          <p className="md:text-lg lg:text-xl text-center">
            Feel free to reach out.
          </p>
        </div>

        {submitStatus && (
          <p
            className={`text-center mb-4 ${
              mailSucess ? "text-green-500" : "text-red-500"
            }  animate-bounce`}
          >
            {submitStatus}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 border-3 w-[94%] md:w-[33rem] m-auto p-6 ${
            theme === "dark" ? "border-gray-400" : "border-gray-600"
          }`}
        >
          <div>
            <InputField
              type="text"
              name="username"
              id="username"
              placeholders="Name *"
              value={mail.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-sm p-0 m-0 text-center">
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <InputField
              type="email"
              name="email"
              id="email"
              placeholders="Email *"
              value={mail.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm p-0 m-0 text-center">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <InputField
              type="subject"
              name="subject"
              id="subject"
              placeholders="Subject *"
              value={mail.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm p-0 m-0 text-center">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <InputField
              name="message"
              id="message"
              placeholders="Message *"
              value={mail.message}
              onChange={handleChange}
              textarea={true}
            />
            {errors.message && (
              <p className="text-red-500 text-sm p-0 m-0 text-center">
                {errors.message}
              </p>
            )}
          </div>

          <Button types="submit" value="Send" disabled={isSubmitting} />
        </form>
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
