
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputField from "../components/InputField";
import MainHome from "../pages/MainHome";


const AppRouter = () => {

    const router = createBrowserRouter(
       [ {
            path : "/",
            element : <MainHome/>,
            errorElement : <p>Error</p>

        },
        {
            path : "/input",
            element : <InputField/>,
            errorElement : <p>Error</p>
        }
    ]
    )

  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
