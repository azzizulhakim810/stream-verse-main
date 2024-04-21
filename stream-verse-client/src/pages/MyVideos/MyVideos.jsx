import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import ShowMyUpload from "../../components/ShowMyUpload/ShowMyUpload";

const MyVideos = () => {
  const [myVideos, setMyVideos] = useState([]);

  const { user } = useClerk();
  const email = user?.primaryEmailAddress?.emailAddress;

  const url = `http://localhost:8000/api/myVideos?email=${email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyVideos(data?.myVideos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  console.log(myVideos);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`).then((res) => {
      console.log(res.data.deleteVideo.deletedCount);
      if (res.data?.deleteVideo?.deletedCount > 0) {
        const remaining = myVideos?.filter((singleOne) => singleOne._id !== id);
        setMyVideos(remaining);
        console.log(remaining);

        toast.success("Video has updated", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    });
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 w-11/12 mx-auto">
      {myVideos?.map((video) => (
        <ShowMyUpload
          key={video._id}
          video={video}
          handleDelete={handleDelete}
        ></ShowMyUpload>
      ))}
    </div>
  );
};

export default MyVideos;
