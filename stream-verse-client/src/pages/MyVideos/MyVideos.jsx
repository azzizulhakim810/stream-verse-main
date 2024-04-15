import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import ShowMyUpload from "../../components/ShowMyUpload/ShowMyUpload";

const MyVideos = () => {
  const [myVideos, setMyVideos] = useState([]);

  const { user } = useClerk();
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  const url = `http://localhost:5000/allVideos/myVideos?email=${userEmail}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyVideos(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  // console.log(myVideos);

  const handleDelete = (id) => {
    // console.log(id);
    /*   const selectVideo = allVideos?.map((single) =>
      single?.find((filtered) => filtered._id == id)
    ); */

    axios.delete(`http://localhost:5000/allVideos/delete/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        const remaining = myVideos.filter((singleOne) => singleOne._id !== id);
        setMyVideos(remaining);
        console.log(remaining);
      }
    });

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
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-2 w-11/12 mx-auto">
      {myVideos?.map((EachVideo) => (
        <ShowMyUpload
          key={EachVideo._id}
          EachVideo={EachVideo}
          handleDelete={handleDelete}
        ></ShowMyUpload>
      ))}
    </div>
  );
};

export default MyVideos;
