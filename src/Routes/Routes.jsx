import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout ></MainLayout>,
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
        element: <Dashboard ></Dashboard>,
        children: [
            {
                path: "/dashboard/Dasha",
                element: <div>Pasha</div>
            }
        ]
    },
    
  ]);


export default router;