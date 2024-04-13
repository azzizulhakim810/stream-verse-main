import { Link, NavLink } from "react-router-dom";
// import logo from "../../../public/logo.png";
// import { useContext } from "react";

import logo from "/logoDark.png";
// import { AuthContext } from "../../providers/AuthProvider";
// import { TooltipDefault } from "../../Tooltip/TooltipDefault";

const Navbar = () => {
  // const { user, logout } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();

  window.addEventListener("scroll", () => {
    if (window?.scrollY > 80) {
      document.getElementById("navbar").style.transition = "ease-in-out";
      document.getElementById("navbar").style.transitionDuration = ".4s";
      document.getElementById("navbar").style.backgroundColor = "#000";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  });

  /*   const handleLogOut = () => {
    logout().then().catch();
    navigate(location?.state ? location.state : "/login");
  }; */

  // Menu Item Creation
  const menuItem = (
    <div className="text-[15px] font-medium lg:flex grid grid-cols-1">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-purple-400 capitalize py-1 px-2 mx-2 "
            : " lg:text-white py-1 px-2 mx-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allAssignments"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-purple-400 capitalize py-1 px-2 mx-2 "
            : " lg:text-white py-1 px-2 mx-2"
        }
      >
        All Assignments
      </NavLink>
      {/*  {user && (
        <NavLink
          to="/createAssignment"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-purple-400 capitalize py-1 px-2 mx-2 "
              : " lg:text-white  py-1 px-2 mx-2"
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
              ? "text-purple-400 capitalize py-1 px-2 mx-2 "
              : " lg:text-white  py-1 px-2 mx-2"
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
              ? "text-purple-400 capitalize py-1 px-2 mx-2 "
              : " lg:text-white  py-1 px-2 mx-2"
          }
        >
          Submitted Assignment
        </NavLink>
      )} */}
    </div>
  );
  // console.log(user);
  return (
    <div id="navbar" className="w-full relative z-50">
      <div className="navbar shadow-purple-500 text-black w-11/12 mx-auto py-6">
        <div className="navbar-start ">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent p-0  me-4 border-none text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-8 z-[1] px-3 py-4 shadow bg-white rounded-none w-[200px]"
            >
              {menuItem}
            </ul>
          </div>
          <Link className=" normal-case text-2xl font-bold flex align-middle justify-between items-center">
            <img className="w-40 -ml-3" src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>

        {/* For tab & desktop  */}
        <div className="navbar-end hidden md:flex space-x-4 ">
          {/* Profile Picture */}
          {/* {user ? (
            <div className="avatar">
              <div className="md:w-10 w-8 rounded-full ring ring-primary relative">
                <TooltipDefault></TooltipDefault>
              </div>
            </div>
          ) : (
            ""
          )} */}
          <div className="avatar">
            <div className="md:w-10 w-8 rounded-full ring ring-primary relative">
              {/* <TooltipDefault></TooltipDefault> */}
            </div>
          </div>

          <div className="">
            {/* login & logout button  */}
            {/* {user ? (
              <button
                onClick={handleLogOut}
                className="btn flex bg-purple-600 hover:bg-white uppercase  text-white hover:text-purple-600 rounded-3xl border-none text-xs px-6 font-bold"
              >
                <span> Logout</span>
              </button>
            ) : (
              <div className="flex gap-2">
                <Link to="/login">
                  <button className="btn bg-purple-600 hover:bg-white  text-white hover:text-purple-600 rounded-3xl border-none md:text-sm text-xs px-6 font-bold">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn bg-purple-600 hover:bg-white  text-white hover:text-purple-600 rounded-3xl border-none md:text-sm text-xs px-6 font-bold">
                    Register
                  </button>
                </Link>
              </div>
            )} */}
            <div className="flex gap-2">
              <Link to="/login">
                <button className="btn bg-purple-600 hover:bg-white  text-white hover:text-purple-600 rounded-3xl border-none md:text-sm text-xs px-6 font-bold">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn bg-purple-600 hover:bg-white  text-white hover:text-purple-600 rounded-3xl border-none md:text-sm text-xs px-6 font-bold">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* For mobile only  */}
        <div className="navbar-end md:hidden flex space-x-3 w-full">
          {/* Profile Picture */}
          <div>
            {/*  {user ? (
              <div className="avatar">
                <div className="md:w-10 w-8 rounded-full ring ring-primary ">
                  <TooltipDefault></TooltipDefault>
                </div>
              </div>
            ) : (
              ""
            )} */}
          </div>

          <div className="flex items-center">
            {/* login & logout button  */}
            <div>
              {/* {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn bg-purple-600 hover:bg-white uppercase text-white hover:text-purple-600  rounded-3xl border-none  px-2 "
                >
                  <BiLogOutCircle className="text-2xl hidden"></BiLogOutCircle>
                  <p>Logout</p>
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn bg-purple-600 hover:bg-white  text-white hover:text-purple-600  rounded-3xl border-none   md:text-base text-xs px-2">
                    <BiLogInCircle className="text-2xl hidden"></BiLogInCircle>
                    <p>Login</p>
                  </button>
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
