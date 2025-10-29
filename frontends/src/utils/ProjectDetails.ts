import meeting from '../assets/project_pics/MeetingMMT.jpeg';
import ping from '../assets/project_pics/Ping.png';
import movies from '../assets/project_pics/movieshub.png'
import sms from '../assets/project_pics/SMS.jpeg'
interface project {
  id: number;
  url: string;    // image url
  title: string;
  description: string;
  tags: string[];
  altText ?: string;
  github ?: string;
  smallproject ?: boolean;
}

// image ratio is 16 : 9
export const ProjectDetails: project[] = [
  {
    id: 1,
    url: meeting,   // imported image url
    title: "Meeting Management System",
    description:
      "Meeting Management System is a full-stack webapp for NEA with role-based access (Admin, GM, PA, MD). Built with React and Node.js, it enables users to manage meetings, view customized dashboards, and send SMS notifications. Features include JWT authentication, upcomming meeting marking,etc.",
    tags: ["JS", "CSS", "Tailwind CSS", "React", "Node", "Express"],
    github: "https://github.com/Risabstha/NEA",
    smallproject : false
  },
  {
    id: 2,
    url: ping,
    title: "Server Monitoring System",
    description:
      "Server Monitoring System is a full-stack webapp for managing, monitoring, and visualizing the status of networked devices (by IP) across multiple provinces. It provides a modern web dashboard for administrators to manage IP addresses, monitor network status, and visualize connectivity via heatmaps.",
    tags: ["JS", "CSS", "Tailwind CSS", "React", "Node", "Express"],
    github: "https://github.com/Risabstha/neaPing",
    smallproject : false
  },
  {
    id: 3,
    url: movies,
    title: "Movies Hub",
    description:
      "MovieHub is a JavaScript-based web application for discovering, searching, and saving information about movies. It provides an easy-to-use UI to browse popular titles, view details, and maintain favorites or watchlists.",
    tags: ["JS", "CSS", "Tailwind CSS", "React"],
    github: "https://github.com/Risabstha/MovieHub",
    smallproject : true
  },
  {
    id: 4,
    url: sms,
    title: "SMS system UI",
    description:
      "SMS_System is a web-based application designed to manage and report SMS notifications, likely for a utility or service company that needs to track and communicate with customers across multiple branches. The system is primarily built with React (frontend) and focuses on administrative and user dashboards for managing users, previewing data, and viewing SMS reports.",
    tags: ["JS", "CSS", "Tailwind CSS", "React"],
    github: "https://github.com/Risabstha/SMS_System",
    smallproject : true
  },
];
