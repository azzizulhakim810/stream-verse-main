import { useAuth } from "@clerk/clerk-react";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { TbBrandBlogger, TbPhotoVideo } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Typography from "../../../utilities/Typography/Typography";

const Sidebar = () => {
  const { sessionId } = useAuth();

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
            Dashboard
          </ListItem>
        </NavLink>

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
              My Videos
            </ListItem>
          </NavLink>
        )}
        {sessionId && (
          <NavLink
            to="/dashboard/uploadNew"
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
                <FaCloudUploadAlt />
              </ListItemPrefix>
              Upload
            </ListItem>
          </NavLink>
        )}

        {/*  {sessionId && (
          <NavLink
            to="/dashboard/update"
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
                <MdOutlineVideoSettings />
              </ListItemPrefix>
              Update
            </ListItem>
          </NavLink>
        )} */}

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
            Favourite
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
            Blogs
          </ListItem>
        </NavLink>

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

  return (
    <Card className="md:ps-[20%] ps-6 md:px-20 px-6 py-5 h-[100vh] w-full overflow-hidden rounded-md bg-gray-900">
      {/* Sidebar Menu  */}
      <List className="my-2 p-0 ">
        <Typography
          variant="T_Bold_H4"
          className="text-light border-b-2 pb-2 ps-2 mb-4 border-light/20"
        >
          Quick Start
        </Typography>

        <Typography variant="T_Medium_H6_Sidebar">{menuItem}</Typography>
      </List>
    </Card>
  );
};

export default Sidebar;
