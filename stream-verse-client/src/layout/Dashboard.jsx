import { useClerk } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar/Sidebar";
const Dashboard = () => {
  const { user } = useClerk();
  // console.log(user.fullName);
  return (
    <div className="grid grid-cols-12 gap-0 ">
      <div className="md:col-span-3 col-span-5 bg-gray-900  ">
        <Sidebar />
      </div>
      <div className="md:col-span-9 col-span-7 bg-dark">
        {/* <AllVideoCardsContainer /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
