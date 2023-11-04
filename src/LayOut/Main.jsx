import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
    <Navbar>
        <Outlet />
    </Navbar>
    </div>
  );
};

export default Main;