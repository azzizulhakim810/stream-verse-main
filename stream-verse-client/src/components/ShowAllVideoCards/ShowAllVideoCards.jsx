import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typography from "../../utilities/Typography/Typography";
const ShowAllVideoCards = ({ singleVideo }) => {
  // console.log(singleVideo);
  const { _id, title, description, url, userPhoto } = singleVideo || {};
  return (
    <div className="relative flex flex-col text-gray-700 shadow-lg rounded-sm border-b-[1px] rounded-b-lg pb-8">
      <Link to={`/dashboard/viewDetails/${_id}`}>
        <Typography variant="T_Medium_H1">
          <FaGooglePlay className="absolute z-10 bg-dark rounded p-3 top-[25%] left-[42%] text-light opacity-100 hover:opacity-100" />
        </Typography>
        <div className="relative w-full h-[300px] opacity-50 hover:opacity-80">
          <img src={url} className="rounded-xl w-full h-full object-cover" />
        </div>
      </Link>

      <div className="px-2">
        <div className="avatar">
          <div className="md:w-14 w-8 ml-3 -mt-5 rounded-full">
            <img src={userPhoto} alt="" />
          </div>
        </div>
        <Typography variant="T_Bold_H5">
          <p className="leading-tight text-primary pb-2">{title}</p>
        </Typography>
        <Typography variant="T_Medium_H6">
          <p className=" text-light ">{description?.slice(0, 200)}...</p>
        </Typography>

        {/* <div className="flex items-center justify-between ">
          <Typography variant="T_Regular_H6">
            <p className="leading-relaxed text-light ">color</p>
          </Typography>
          <Typography variant="T_Regular_H6">
            <p className="leading-relaxed text-light ">months ago</p>
          </Typography>
        </div> */}
      </div>
    </div>
  );
};

export default ShowAllVideoCards;
