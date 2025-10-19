import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "../pages/MainHome";
import ProjectCard from "../components/ProjectCard"
import meeting from '../assets/MeetingMMT.png';;

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      errorElement: <p>Error</p>,
    },
    {
      path: "/projectcard",
      element: <ProjectCard title="Meeting MMT" description="A MERN stack web application that allows users to find and book movies.
       Features include JWT authentication,
       2FA for security, and potentially recommendation 
       algorithms for movie suggestions." tags={['JS','CSS','React','MongoDB']} liveUrl = {meeting} altText="mmt"/>,
      errorElement: <p>Error</p>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
