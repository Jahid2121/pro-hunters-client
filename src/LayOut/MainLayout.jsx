import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
    <Navbar>
      <Toaster />
        <Outlet />
    </Navbar>
    </div>
  );
};

export default MainLayout;