import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../components/Navbar/NavItems.css"
import { FaHome } from "react-icons/fa";
import CustomNavLink from "../../components/CustomNavLink/CustomNavLink";


const Dashboard = () => {
  let isAdmin = true;
  return (
    <>
    
    <div className="w-11/12 mx-auto">
      <Navbar>
        <div>
        {/* <div className="flex-grow flex gap-20 justify-center">
        <div className="flex gap-5 mr-3 items-center">
                <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "" : ""
  } to="/dashboard/AddJob">Add Job</NavLink>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "" : ""
  } to="/dashboard/myJobs">My Jobs</NavLink>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "" : ""
  } to="/dashboard/AppliedJobs">Applied Jobs</NavLink>

                </div>
        <Toaster />
        </div> */}
         <div className="mt-20 text-black">
          <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3 flex flex-col gap-5 items-center pt-12 bg-Green">
              {isAdmin ? 
                <>
                  {/* admin */}
                  <CustomNavLink className="flex items-center gap-3" to="/dashboard">
                      <FaHome />
                    Admin Profile
                  </CustomNavLink>
                  <CustomNavLink
                    to={"/dashboard/addJob"}
                    >{"Add Job"}</CustomNavLink>
                  <CustomNavLink
                    to={"/dashboard/myJobs"}>{"My Jobs"}</CustomNavLink>
                  
                  
                </>
               : 
                <>
                  <NavLink className="flex items-center gap-3" to="/dashboard">User Profile</NavLink>

                  <div className="divider"></div>
                  <NavLink className="flex items-center gap-3" to="/dashboard/requestedMeals">
                    Requested Meals
                  </NavLink>
                  <NavLink className="flex items-center gap-3" to="/dashboard/reviews">My Reviews</NavLink>
                </>
              }
            </div>
            <div className="col-span-9 text-center  ">
              <Outlet />
            </div>
          </div>
        </div>
        <div>
        </div>
        </div>
      </Navbar>
    </div>
    </>
  );
};

export default Dashboard;