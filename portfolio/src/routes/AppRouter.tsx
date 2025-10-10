
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Nav from '../layout/Nav'
import InputField from "../components/InputField";
import SideNav from "../layout/SideNav";

const AppRouter = () => {

    const router = createBrowserRouter(
       [ {
            path : "/",
            element : <Nav/>,
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
        }
    ]
    )

  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
