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
import AddProduct from "../Pages/Dashboard/components/AddProduct/AddProduct";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Blogs from "../Pages/Blogs/Blogs";
import UseAuth from "../hooks/UseAuth";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
const {userName} = UseAuth;


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout ></MainLayout>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>
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
          path: "/jobDetails/:id",
          element: <ProtectedRoutes><JobDetails></JobDetails></ProtectedRoutes>,
          loader: ({params}) => fetch(`https://pro-hunters-server-six.vercel.app/jobs/${params.id}`)
        },
        {
          path: "allJobs",
          element: <AllJobs></AllJobs>,
        },
        {
          path:"blogs",
          element:<Blogs></Blogs>
        }
        
      ]
    },
    
    {
        path: "/dashboard",
        element: <Dashboard ></Dashboard>,
        children: [
          {
            path: "addJob",
            element: <AddProduct></AddProduct>
          },
          
          {
            path: "appliedJobs",
            element: <ProtectedRoutes><AppliedJobs /></ProtectedRoutes>,
          },
          {
            path: "myJobs",
            element: <ProtectedRoutes><MyJobs></MyJobs></ProtectedRoutes>,
          },
          
        ]
    },
    
  ]);


export default router;