import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main ></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        
      ]
    },
    {
        path: "/dashboard",
        element: <Dashboard ></Dashboard>
    }
  ]);


export default router;