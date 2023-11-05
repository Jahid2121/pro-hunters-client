import NavItems from "./NavItems";
import search from "../../assets/Icons/Frame 37.svg"
import Footer from "../Footer/Footer";
import UseAuth from "../../hooks/UseAuth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../config/firebase.cofig";




const Navbar = ({children}) => {
  const {user,logOut} = UseAuth()

  const handleLogOut = () => {
    logOut(auth)
    .then(() => {})
    .catch(error => {
      console.error(error);
    })
  }

  return (
   <>
    <div className="drawer min-h-screen font-poppins">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-orange-50">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 pl-14 px-2 text-xl font-bold text-customOrange mx-2">Pr <span><img src={search} alt="" /></span> Hunters</div>
          <div className="flex-none  hidden lg:block">
            <ul className="menu  menu-horizontal">
              {/* Navbar menu content here */}
              <NavItems />
              {
                user ? <button onClick={handleLogOut} className="items-center flex ">LogOut</button> : <Link to="/login" className="items-center flex ">Login</Link>
              }
            </ul>
          </div>
        </div>


        {/* Page content here */}
        {children}


      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <NavItems />
        </ul>
      </div>
    </div>
    
    {/* footer section */}
    <Footer />
    </>
  );
};

export default Navbar;
