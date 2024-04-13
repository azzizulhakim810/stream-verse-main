import AllVideoCards from "../../components/AllVideoCards/AllVideoCards";
import Sidebar from "../../components/shared/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-0 ">
      <div className="md:col-span-3 col-span-5 bg-gray-900  ">
        <Sidebar />
      </div>
      <div className="md:col-span-9 col-span-7 bg-dark">
        <AllVideoCards />
      </div>
    </div>
  );
};

export default Home;
