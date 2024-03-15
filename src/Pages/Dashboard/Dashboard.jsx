import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import "../../components/Navbar/NavItems.css"
const Dashboard = () => {
  let isAdmin = true
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
                  <NavLink className="flex items-center gap-3" to="/dashboard">
                      {/* <FaHome /> */}
                    Admin Profile
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/users"
                  > 
                  {/* <FaUsers /> */}
                    Manage User
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/addMeal"
                  >
                    {/* <FaUtensilSpoon /> */}
                    Add Meal
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allMeals"
                  >
                    {/* <FaUtensils /> */}
                    All Meals
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allReviews"
                  >
                    All Reviews
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allReqMeals"
                  >
                    Serve Meal
                  </NavLink>
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
            <div className="col-span-9 text-center pt-20 bg-Salmon">
              <Outlet />
            </div>
          </div>
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