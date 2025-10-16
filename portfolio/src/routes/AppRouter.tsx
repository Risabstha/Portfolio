
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Nav from '../layout/Nav'
import InputField from "../components/InputField";
import SideNav from "../layout/SideNav";
import Home from "../pages/Home";
import MainHome from "../pages/MainHome";
import NavLayout from "../layout/NavLayout";

const AppRouter = () => {

    const router = createBrowserRouter(
       [ {
            path : "/",
            element : <NavLayout/>,
            errorElement : <p>Error</p>

        },
        {
            path : "/input",
            element : <InputField/>,
            errorElement : <p>Error</p>
        },
        {
          path : "/side",
          element :  <SideNav/>,
          errorElement : <p>Error</p>
        },
        {
          path : "/home",
          element :  <MainHome/>,
          errorElement : <p>Error</p>
        }
    ]
    )

  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
