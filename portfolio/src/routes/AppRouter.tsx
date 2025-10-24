import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "../pages/MainHome";
import ProjectCard from "../components/ProjectCard"
import meeting from '../assets/MeetingMMT.png';import Button from "../components/Button";
;

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      errorElement: <p>Error</p>,
    },
    {
      path: "/button",
      element: <Button/>,
      errorElement: <p>Error</p>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
