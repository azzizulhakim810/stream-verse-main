import { Link } from "react-router-dom";
import Typography from "../../utilities/Typography/Typography";

const Favourite = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="text-center text-light mt-[15%]">
        <Typography variant="T_Bold_H3">Favourite is cooking</Typography>
        <br />
        <Typography variant="T_Medium_H6">Please Come Back Later</Typography>
        <br />
        <Link to="/">
          <button className="py-3 mt-5 bg-primary rounded-lg text-white px-10 hover:bg-primary">
            HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Favourite;
