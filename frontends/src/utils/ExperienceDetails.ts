import nealogo from "../assets/companies_logos/NEA.png";

interface experiencedetail {
  title: string;
  logo : string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

// defining type of array object
export const experiences: experiencedetail[] = [
  {
    title: "Software Development Intern",
    logo : nealogo,
    company: "Nepal Electricity Authority (NEA)",
    duration: "Feb 2025 - May 2025",
    description:
      "Gained hands-on experience in developing and deploying web-based systems, including an MD-Schedule management system and a Ping Monitoring dashboard. Worked with the MERN stack to build secure, user-friendly platforms that improved scheduling efficiency and real-time network monitoring across multiple branches. Strengthened skills in full-stack development, database management, and system optimization for operational needs.",
    skills: [
      "Leadership",
      "Communication",
      "Web Design",
      "Project Management",
      "Pitch and Presentation",
      "Teamwork",
    ],
  },
  
];
