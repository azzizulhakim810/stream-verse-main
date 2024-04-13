import { Link, NavLink } from "react-router-dom";
// import logo from "../../../public/logo.png";
// import { useContext } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import Typography from "../../../utilities/Typography/Typography";
import logo from "/logoLight.png";

// import { TooltipDefault } from "../../Tooltip/TooltipDefault";

const MainNavbar = () => {
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

  // Menu Item Creation
  const menuItem = (
    <Typography variant="T_Medium_H6">
      <div className=" lg:flex grid grid-cols-1 gap-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary capitalize py-1 px-2  hover:scale-105 transition-all duration-200 hover:tracking-widest ease-in-out"
              : " lg:text-light py-1 px-2  hover:scale-105 transition-all duration-200 hover:tracking-widest ease-in-out"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary capitalize py-1 px-2  hover:scale-105 transition-all duration-200 hover:tracking-widest ease-in-out"
              : " lg:text-light py-1 px-2  hover:scale-105 transition-all duration-200 hover:tracking-widest ease-in-out"
          }
        >
          Dashboard
        </NavLink>
        {/*  {user && (
      <NavLink
        to="/createAssignment"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary capitalize py-1 px-2 mx-2 "
            : " lg:text-light  py-1 px-2 mx-2"
        }
      >
        Create Assignment
      </NavLink>
    )} */}
        {/*  {user && (
      <NavLink
        to="/myAssignment"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary capitalize py-1 px-2 mx-2 "
            : " lg:text-light  py-1 px-2 mx-2"
        }
      >
        My Assignment
      </NavLink>
    )} */}
        {/* {user && (
      <NavLink
        to="/submittedAssignment"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary capitalize py-1 px-2 mx-2 "
            : " lg:text-light  py-1 px-2 mx-2"
        }
      >
        Submitted Assignment
      </NavLink>
    )} */}
      </div>
    </Typography>
  );
  // console.log(user);
  return (
    <div id="navbar" className="w-full relative z-50 bg-dark">
      <div className="navbar shadow-primary text-dark w-11/12 mx-auto py-6">
        <div className="navbar-start ">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent p-0 me-4 border-none text-light lg:hidden"
            >
              <Typography variant="T_Medium_H2">
                <HiOutlineMenuAlt2 />
              </Typography>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-8 z-[1] px-3 py-4 shadow bg-light rounded-none w-[200px]"
            >
              {menuItem}
            </ul>
          </div>
          <Link className="md:w-52 w-32 -mt-2 -ml-4">
            <img className="w-full " src={logo} alt="" />
          </Link>

          <ul className="  hidden md:flex menu menu-horizontal ">{menuItem}</ul>
        </div>

        <div className="navbar-center hidden lg:flex"></div>

        {/* For tab & desktop  */}
        <div className="navbar-end hidden md:flex space-x-4 ">
          <div className="">
            <div className="flex gap-2">
              <div className="relative flex w-full gap-0 justify-start items-center">
                <input
                  type="search"
                  placeholder="Search"
                  className="bg-transparent shadow-inner shadow-primary/30 px-2 py-[7px] rounded-lg pl-10 text-light placeholder:text-light focus:outline-2 focus:ouline-primary "
                />
                <div className="!absolute left-3">
                  <Typography variant="T_Medium_H5">
                    <RiSearchLine className="text-light" />
                  </Typography>
                </div>
              </div>
              <div></div>
              <div>
                <button className="hover:scale-105 transition-all duration-300 ease-in-out bg-primary hover:bg-light  text-light hover:text-primary rounded-lg border-none px-6 py-[8px]">
                  <Typography variant="T_Medium_H6">Login/Register </Typography>
                </button>
              </div>
            </div>
          </div>

          <div className="avatar">
            <div className="md:w-10 w-8 rounded-full ring ring-primary relative">
              <img src="https://i.ibb.co/5n85Ssw/Formal-Passport.jpg" alt="" />
              {/* <TooltipDefault></TooltipDefault> */}
            </div>
          </div>
        </div>

        {/* For mobile only  */}

        {/* ///////////////////////////////// */}
        <div className="navbar-end md:hidden flex space-x-3 w-full">
          <div></div>

          <div>
            {/* login & logout button  */}
            <div className=" flex items-center">
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
              {/* Profile Photo  */}
              <div className="avatar">
                <div className="md:w-10 w-8 rounded-full ring ring-primary relative">
                  <img
                    src="https://i.ibb.co/5n85Ssw/Formal-Passport.jpg"
                    alt=""
                  />
                  {/* <TooltipDefault></TooltipDefault> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
