
import nepalaya from "../assets/academics_logos/nepalaya.png";
import KCCS from "../assets/academics_logos/KCCS.png";
import Himshikhar from "../assets/academics_logos/Himshikhar.png";

interface education {
  logo : string;
  title : string;
  company : string;
  duration : string;
  grade : string;
}

export const educationDetails : education[] = [
  {
    logo: nepalaya,
    title: "Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)",
    company: "Nepalaya College",
    duration: "Graduated (2021 - 2025)",
    grade: "78 %",
  },
  {
    logo: KCCS,
    title: "High School (Science stream)",
    company: "Kathmandu College of Central State ",
    duration: "Graduated (2019 - 2020)",
    grade: "3.24 GPA",
  },
  {
    logo: Himshikhar,
    title: "Secondary Education Examination (SEE)",
    company: "Himshikhar Boarding School",
    duration: "Graduated (2018 AD)",
    grade: "3.65 GPA",
  },
];