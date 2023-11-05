import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import DashBoardItems from "./DashBoardItems/DashBoardItems";

const Dashboard = () => {
  return (
    <>
    
    <div className="w-11/12 mx-auto">
      <Navbar>
        <div>
        <div className="flex-grow flex gap-20 justify-center">
        <DashBoardItems></DashBoardItems>
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