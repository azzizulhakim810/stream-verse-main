import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar/Sidebar";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-0 ">
      <div className="md:col-span-3 col-span-0 bg-gray-900  hidden md:flex">
        <Sidebar />
      </div>
      <div className="md:col-span-9 col-span-12 bg-dark">
        {/* <AllVideoCardsContainer /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
