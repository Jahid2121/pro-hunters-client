import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout ></MainLayout>,
      errorElement: <ErrorPage />,
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
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
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