import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import DashBoardItems from "./DashBoardItems/DashBoardItems";

const Dashboard = () => {
  return (
    <>
    
    <div className="w-11/12 mx-auto">
      <Navbar>
        <DashBoardItems></DashBoardItems>
        <Outlet></Outlet>
      </Navbar>
    </div>
    </>
  );
};

export default Dashboard;