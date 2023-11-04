import {
    Navigate,
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
            element: <Navigate to="/home" replace />
        },
        {
            path: "/home",
            element: <Home></Home>
        }
        
      ]
    },
    {
        path: "/dashboard",
        element: <Dashboard ></Dashboard>
    }
  ]);


export default router;