import { useAuth } from "@clerk/clerk-react";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

import { FaCloudUploadAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { TbBrandBlogger, TbPhotoVideo } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import Typography from "../../../utilities/Typography/Typography";

const Sidebar = ({ modal, setModal }) => {
  // const Sidebar = () => {
  const { sessionId } = useAuth();

  const { pathname } = useLocation();
  // console.log(pathname);

  // Menu Item Creation
  const menuItem = (
    <Typography variant="T_Medium_H6_Sidebar">
      <div className="flex flex-col">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary capitalize py-1 px-2  hover:tracking-widest"
              : " lg:text-light py-1 px-0 "
          }
        >
          <ListItem className="hover:bg-primary/20 hover:text-white ">
            <ListItemPrefix className="pe-3">
              <RiHome6Line />
            </ListItemPrefix>
            <span className="hidden md:flex">Dashboard</span>
          </ListItem>
        </NavLink>

        {sessionId && pathname === "/" && (
          <NavLink
            onClick={() => setModal(!modal)}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-light bg-primary rounded-lg capitalize  mx-2  hover:tracking-widest"
                : " lg:text-light py-1 px-0 "
            }
          >
            <ListItem className="hover:bg-primary/20 hover:text-white">
              <ListItemPrefix className="pe-3">
                <FaCloudUploadAlt />
              </ListItemPrefix>
              <span className="hidden md:flex">Upload</span>
            </ListItem>
          </NavLink>
        )}

        {sessionId && (
          <NavLink
            to="/dashboard/myVideos"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-primary capitalize py-1 px-2  hover:tracking-widest"
                : " lg:text-light py-1 px-0 "
            }
          >
            <ListItem className="hover:bg-primary/20 hover:text-white">
              <ListItemPrefix className="pe-3">
                <TbPhotoVideo />
              </ListItemPrefix>
              <span className="hidden md:flex">My Videos</span>
            </ListItem>
          </NavLink>
        )}

        <NavLink
          to="/dashboard/favourite"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary capitalize py-1 px-2  hover:tracking-widest"
              : " lg:text-light py-1 px-0 "
          }
        >
          <ListItem className="hover:bg-primary/20 hover:text-white">
            <ListItemPrefix className="pe-3">
              <MdFavorite />
            </ListItemPrefix>
            <span className="hidden md:flex"> Favourite</span>
          </ListItem>
        </NavLink>

        <NavLink
          to="/dashboard/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary capitalize py-1 px-2  hover:tracking-widest"
              : " lg:text-light py-1 px-0 "
          }
        >
          <ListItem className="hover:bg-primary/20 hover:text-white">
            <ListItemPrefix className="pe-3">
              <TbBrandBlogger />
            </ListItemPrefix>
            <span className="hidden md:flex">Blogs</span>
          </ListItem>
        </NavLink>
      </div>
    </Typography>
  );

  return (
    <>
      <Card className="md:ps-[20%] ps-6 md:px-20 px-6 py-5 h-[100vh] w-full overflow-hidden rounded-md bg-gray-900 hidden md:flex">
        <List className="my-2 p-0 ">
          <Typography
            variant="T_Bold_H4"
            className="text-light border-b-2 pb-2 ps-2 mb-4 border-light/20 "
          >
            <span className="text-lg ">Quick Start</span>
          </Typography>

          <Typography variant="T_Medium_H6_Sidebar">{menuItem}</Typography>
        </List>
      </Card>
    </>
  );
};

export default Sidebar;
