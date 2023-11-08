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
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: "alljobs",
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
            path: "add job",
            element: <AddProduct></AddProduct>
          },
          {
            path: "test",
            element: <h2>Test</h2>
          },
          {
            path: "applied Jobs",
            element: <ProtectedRoutes><AppliedJobs /></ProtectedRoutes>,
          },
          {
            path: "my Jobs",
            element: <ProtectedRoutes><MyJobs></MyJobs></ProtectedRoutes>,
            loader: () =>  fetch("http://localhost:5000/jobs?loggedInUserName=John%20Doe")
          },
          
        ]
    },
    
  ]);


export default router;