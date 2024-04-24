import { Link } from "react-router-dom";
import Typography from "../../utilities/Typography/Typography";
const ShowAllVideoCards = ({ video }) => {
  // console.log(video.videoUrl.videoUrl);
  const { _id, title, description, videoUrl, thumbUrl, userImg } = video || {};
  return (
    <div className="relative flex flex-col gap-10 text-gray-700 shadow-lg rounded-sm border-b-[1px] rounded-b-lg pb-8 md:mb-0 mb-4">
      <Link to={`/dashboard/viewDetails/${_id}`}>
        <video
          className="w-full h-[400px] object-cover border-[1px]   border-light/40 rounded-lg"
          poster={thumbUrl}
        >
          <source src={videoUrl?.videoUrl} type="video/mp4" />
        </video>
      </Link>

      <div className="px-2 -mt-[60px]">
        <div className="avatar  ">
          <div className="md:w-14 w-10 ml-3 rounded-full">
            <img src={userImg} alt="User Image" />
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
