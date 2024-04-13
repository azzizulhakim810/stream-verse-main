import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Typography from "../../../utilities/Typography/Typography";
import logo from "/logoLight.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full bg-dark">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className=" flex w-full flex-col gap-4 items-center justify-center py-4 md:flex-row md:justify-between">
          <Link className="flex align-middle justify-between items-center">
            <img className="w-52 " src={logo} alt="" />
          </Link>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              variant="T_Medium_H4"
              className="hover:scale-x-110 transition-colors cursor-pointer text-light hover:text-secondary duration-800"
            >
              <FaLinkedin />
            </Typography>
            <Typography
              variant="T_Medium_H4"
              className="hover:scale-x-110 transition-colors cursor-pointer text-light hover:text-secondary duration-800"
            >
              <FaInstagram />
            </Typography>
            <Typography
              variant="T_Medium_H4"
              className="hover:scale-x-110 transition-colors cursor-pointer text-light hover:text-secondary duration-800"
            >
              <FaFacebook />
            </Typography>
            <Typography
              variant="T_Medium_H4"
              className="hover:scale-x-110 transition-colors cursor-pointer text-light hover:text-secondary duration-800"
            >
              <FaGithub />
            </Typography>
            <Typography
              variant="T_Medium_H4"
              className="hover:scale-x-110 transition-colors cursor-pointer text-light hover:text-secondary duration-800"
            >
              <FaTwitter />
            </Typography>
          </div>
        </div>
        <div className="text-center py-5 border-t-[1px] border-light/20 text-light">
          <Typography
            variant="T_Medium_H7"
            className="mb-4 text-center md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://azzizul-hakim.netlify.app">
              Designed By <span className="text-primary">AH JIM</span>
            </a>
            . All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
