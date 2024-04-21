import { Link } from "react-router-dom";
import Typography from "../../utilities/Typography/Typography";
const ShowAllVideoCards = ({ video }) => {
  const { _id, title, description, videoUrl } = video || {};
  return (
    <div className="relative flex flex-col text-gray-700 shadow-lg rounded-sm border-b-[1px] rounded-b-lg pb-8">
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
    </div>
  );
};

export default ShowAllVideoCards;
