import { Link } from "react-router-dom";
import Typography from "../../utilities/Typography/Typography";

const ErrorPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Typography variant="T_Bold_H2">404! Not Found ☹</Typography>
            <Typography variant="T_Medium_H6">Opps! You have lost</Typography>
            <br />
            <Link to="/">
              <button className="btn mt-5 bg-primary text-white px-10 hover:bg-primary">
                HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
