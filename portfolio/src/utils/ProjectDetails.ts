import meeting from '../assets/MeetingMMT.png';
import ping from '../assets/Ping.png';

interface project {
  id: number;
  url: string;
  title: string;
  description: string;
  tags: string[];
  altText ?: string;
}

// image ratio is 16 : 9
export const ProjectDetails: project[] = [
  {
    id: 1,
    url: meeting,   // imported image url
    title: "Meeting Management System",
    description:
      "A MERN stack web application that allows users to find and book movies. Features include JWT authentication,2FA for security, and potentially recommendation algorithms for movie suggestions.",
    tags: ["JS", "CSS", "Tailwind CSS", "React", "Node", "Express"],
  },{
    id: 5,
    url: meeting,   // imported image url
    title: "Meeting Management System",
    description:
      "A MERN stack web application that allows users to find and book movies. Features include JWT authentication,2FA for security, and potentially recommendation algorithms for movie suggestions.",
    tags: ["JS", "CSS", "Tailwind CSS", "React", "Node", "Express"],
  },
  {
    id: 2,
    url: ping,
    title: "Meeting Management System",
    description:
      "A MERN stack web application that allows users to find and book movies. Features include JWT authentication,2FA for security, and potentially recommendation algorithms for movie suggestions.",
    tags: ["JS", "CSS", "Tailwind CSS", "React", "Node", "Express"],
  },
  {
    id: 3,
    url: ping,
    title: "Meeting Management System",
    description:
      "A MERN stack web application that allows users to find and book movies. Features include JWT authentication,2FA for security, and potentially recommendation algorithms for movie suggestions.",
    tags: ["JS", "CSS", "Tailwind CSS", "React", "Node", "Express"],
  },
];
