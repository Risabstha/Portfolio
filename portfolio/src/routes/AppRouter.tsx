import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "../pages/MainHome";
import Skills from "../pages/Skills";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      errorElement: <p>Error</p>,
    },
    {
      path: "/skills",
      element: <Skills />,
      errorElement: <p>Error</p>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
