import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
    <Navbar>
        <Outlet />
    </Navbar>
    </div>
  );
};

export default MainLayout;