import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import DashBoardItems from "./DashBoardItems/DashBoardItems";
import { Toaster } from "react-hot-toast";
import "../../components/Navbar/NavItems.css"
const Dashboard = () => {
  return (
    <>
    
    <div className="w-11/12 mx-auto">
      <Navbar>
        <div>
        <div className="flex-grow flex gap-20 justify-center">
        <div className="flex gap-5 mr-3 items-center">
                <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "custom" : ""
  } to="/dashboard/AddJob">Add Job</NavLink>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "custom" : ""
  } to="/dashboard/myJobs">My Jobs</NavLink>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "custom" : ""
  } to="/dashboard/AppliedJobs">Applied Jobs</NavLink>

                </div>
        <Toaster />
        </div>
        <div>
        <Outlet></Outlet>
        </div>
        </div>
      </Navbar>
    </div>
    </>
  );
};

export default Dashboard;