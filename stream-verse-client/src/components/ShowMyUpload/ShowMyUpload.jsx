import { BiEdit } from "react-icons/bi";
import { FaGooglePlay } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Typography from "../../utilities/Typography/Typography";

const ShowMyUpload = ({ EachVideo, handleDelete }) => {
  // const [allVideos, setAllVideos] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/allVideos")
  //     .then((res) => res.json())
  //     .then((data) => setAllVideos(data));
  // }, []);

  // console.log(allVideos);
  const { _id, title, description, url, userPhoto } = EachVideo || {};
  // console.log(EachVideo);

  return (
    <div className="relative flex flex-col text-gray-700 shadow-lg rounded-sm border-b-[1px] rounded-b-lg pb-8">
      {/* Edit & Delete Button  */}
      <div className="absolute z-10 top-0 right-0 flex flex-col items-end gap-2">
        <Link to={`/dashboard/updateVideo/${_id}`}>
          <button className=" flex justify-center gap-1 items-center bg-primary rounded-tr-lg rounded-bl-lg px-4 py-[5px] text-md font-semibold  text-light ">
            <BiEdit /> Edit
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className=" flex justify-center gap-1 items-center bg-primary px-4 py-[5px] rounded-l-lg text-md font-semibold  text-light "
        >
          <MdOutlineDeleteOutline /> Delete
        </button>
      </div>

      <Link to={`/dashboard/viewDetails/${_id}`} className="relative">
        <Typography variant="T_Medium_H3">
          <FaGooglePlay className="absolute z-10 bg-dark rounded p-3 top-[40%] left-[45%] text-light opacity-100 hover:opacity-100" />
        </Typography>
        <div className="relative  w-full h-[200px] opacity-50 hover:opacity-80">
          <img src={url} className="rounded-xl w-full h-full object-cover" />
        </div>
      </Link>

      <div className=" relative px-2 flex flex-col justify-between">
        <div>
          <Typography variant="T_Bold_H5">
            <div className="flex justify-between px-3">
              <div className="avatar -mt-3 mb-3">
                <div className=" md:w-14 w-8 rounded-full">
                  <img src={userPhoto} alt="" />
                </div>
              </div>
            </div>
            <p className="leading-tight text-primary pb-2">{title}</p>
          </Typography>
          <Typography variant="T_Medium_H6">
            <p className=" text-light ">{description?.slice(0, 100)}...</p>
          </Typography>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowMyUpload;
