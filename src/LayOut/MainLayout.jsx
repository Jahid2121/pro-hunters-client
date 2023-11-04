import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
    <Navbar>
        <Outlet />
    </Navbar>
    </div>
  );
};

export default MainLayout;