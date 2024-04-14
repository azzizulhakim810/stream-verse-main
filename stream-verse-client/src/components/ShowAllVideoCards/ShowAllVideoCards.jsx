import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typography from "../../utilities/Typography/Typography";
const ShowAllVideoCards = ({ category }) => {
  // console.log(category);
  const { id, name, img, color } = category || {};
  return (
    <Link to="/">
      <div className="relative flex flex-col text-gray-700 shadow-lg rounded-sm">
        <div className="relative  w-full h-[300px] hover:opacity-35">
          <img src={img} className="rounded-xl w-full h-full object-cover" />
          <Typography variant="T_Medium_H1">
            <FaGooglePlay className="absolute z-10 bg-primary/80 rounded p-3 top-[45%] left-[45%] text-light opacity-0 hover:opacity-100" />
          </Typography>
        </div>

        <div className="px-2">
          <div className="avatar">
            <div className="md:w-14 w-8 ml-3 -mt-5 rounded-full">
              <img src="https://i.ibb.co/5n85Ssw/Formal-Passport.jpg" alt="" />
            </div>
          </div>
          <Typography variant="T_Bold_H5">
            <p className="leading-relaxed text-light ">
              Their mainly two of uninitiated company
            </p>
          </Typography>
          <Typography variant="T_Medium_H6">
            <p className="leading-relaxed text-primary ">Candence Clay</p>
          </Typography>

          <div className="flex items-center justify-between ">
            <Typography variant="T_Regular_H6">
              <p className="leading-relaxed text-light ">{color}</p>
            </Typography>
            <Typography variant="T_Regular_H6">
              <p className="leading-relaxed text-light ">{id} months ago</p>
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShowAllVideoCards;
