import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth,
  useClerk,
} from "@clerk/clerk-react";
// import axios from "axios";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Typography from "../../../utilities/Typography/Typography";

import { useSearch } from "../../../context/SearchContext";
import Navbar from "./Navbar";
import logo from "/logoLight.png";

const MainNavbar = () => {
  // Get the user
  const { user } = useClerk();
  const { sessionId } = useAuth();

  // Adding Scrolling Effect to the header
  window.addEventListener("scroll", () => {
    if (window?.scrollY > 80) {
      document.getElementById("navbar").style.transition = "ease-in-out";
      document.getElementById("navbar").style.transitionDuration = ".4s";
      document.getElementById("navbar").style.backgroundColor = "#000";
    } else {
      /* document.getElementById("navbar").style.backgroundColor = "transparent"; */
      document.getElementById("navbar").style.backgroundColor = "#000";
    }
  });

  const { searchText, setSearchText } = useSearch();

  // Handle Search
  const handleSearch = (e) => {
    setSearchText(e.target.value);

    /*  axios
      .get(`http://localhost:8000/api/videos?name=${searchText}`)
      .then((res) => {
        console.log(res.data);
      }); */
  };

  // console.log(searchText);

  return (
    <div id="navbar" className="w-full relative z-50 bg-dark">
      <div className="navbar shadow-primary text-dark w-11/12 mx-auto py-6">
        <div className="navbar-start ">
          <Navbar />
          <Link className="md:w-52 w-32 -mt-2 -ml-4">
            <img className="w-full " src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex"></div>

        {/* Search Field & Login Elements for desktop only  */}
        <div className="navbar-end hidden md:flex space-x-4 ">
          <div className="flex gap-2">
            {/* Adding Search Field  */}
            <div className="relative flex w-full gap-0 justify-start items-center">
              <input
                type="search"
                placeholder="Search"
                onChange={handleSearch}
                className="bg-transparent shadow-inner shadow-primary/30 px-2 py-[7px] rounded-lg pl-10 text-light placeholder:text-light focus:outline-2 focus:ouline-primary "
              />
              <div className="!absolute left-3">
                <Typography variant="T_Medium_H5">
                  <RiSearchLine className="text-light" />
                </Typography>
              </div>
            </div>

            {/* Login/Register Button  */}

            {/* <Login />
            <Register /> */}
            {user ? (
              <SignOutButton
                signOutOptions={{ sessionId }}
                mode="modal"
                redirectUrl="/"
              >
                <button className="hover:scale-105 transition-all duration-300 ease-in-out bg-primary hover:bg-light  text-light hover:text-primary rounded-lg border-none px-6 py-[8px]">
                  <Typography variant="T_Medium_H6">SignOut</Typography>
                </button>
              </SignOutButton>
            ) : (
              <SignInButton mode="modal" redirectUrl="/">
                <button className="relative hover:scale-105 transition-all duration-300 ease-in-out bg-primary hover:bg-light  text-light hover:text-primary rounded-lg border-none px-6 py-[5px]">
                  <Typography variant="T_Medium_H6">SignIn/Register</Typography>
                </button>
              </SignInButton>
            )}
          </div>

          {/* Profile Image  */}
          <div className=" rounded-full border-2 border-primary">
            <UserButton className="md:w-10 w-8 rounded-full " />
          </div>
        </div>

        {/* Search Field & Login Elements for mobile only  */}
        <div className="navbar-end md:hidden flex space-x-3 w-full">
          <div className=" flex items-center">
            {/* Adding Search Field  */}
            <div className="relative flex w-full me-5 justify-start items-center">
              <input
                type="search"
                placeholder="Search"
                className="w-40 bg-transparent shadow-inner shadow-primary/30 px-2 py-[7px] rounded-lg pl-10 text-light placeholder:text-light  border-0 focus:outline-0 "
              />
              <div className="!absolute left-3">
                <Typography variant="T_Medium_H5">
                  <RiSearchLine className="text-light" />
                </Typography>
              </div>
            </div>

            {/* Profile Image  */}
            <div className=" rounded-full border-2 border-primary">
              <UserButton className="md:w-10 w-8 rounded-full " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
