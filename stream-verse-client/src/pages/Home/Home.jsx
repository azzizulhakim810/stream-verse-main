import { useEffect, useState } from "react";
import ShowAllVideoCards from "../../components/ShowAllVideoCards/ShowAllVideoCards";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
const Home = () => {
  // const allVideos = useLoaderData();
  // console.log(allVideos);

  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetch("https://stream-verse-server.vercel.app/allVideos")
      .then((res) => res.json())
      .then((data) => setAllVideos(data));
  }, []);
  // console.log(allVideos);

  return (
    <div className="grid grid-cols-12 gap-0 ">
      <div className="md:col-span-3 col-span-5 bg-gray-900  ">
        <Sidebar />
      </div>
      <div className="md:col-span-9 col-span-7 bg-dark">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 w-11/12 mx-auto">
          {allVideos?.map((singleVideo) => (
            <ShowAllVideoCards
              key={singleVideo._id}
              singleVideo={singleVideo}
            ></ShowAllVideoCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
