import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Typography from "../../utilities/Typography/Typography";

const ShowMyUpload = ({ video, handleDelete }) => {
  const { _id, title, description, videoUrl } = video || {};

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

      <Link to={`/dashboard/viewDetails/${_id}`}>
        <video
          className="w-full h-auto object-cover border-[1px]  border-light/40 rounded-lg"
          src={videoUrl}
        ></video>
      </Link>

      <div className="px-2">
        <div className="avatar">
          <div className="md:w-14 w-8 ml-3 -mt-5 rounded-full">
            <img src="/logoDark.png" alt="" />
          </div>
        </div>
        <Typography variant="T_Bold_H5">
          <p className="leading-tight text-primary pb-2">{title}</p>
        </Typography>
        <Typography variant="T_Medium_H6">
          <p className=" text-light ">{description?.slice(0, 200)}...</p>
        </Typography>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowMyUpload;
