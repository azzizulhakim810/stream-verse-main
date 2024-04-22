import { useAuth } from "@clerk/clerk-react";
import {
  Button,
  Card,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import React, { Fragment } from "react";
import { MdFavorite } from "react-icons/md";
import { RiHome6Line, RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbBrandBlogger, TbPhotoVideo } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Typography from "../../../utilities/Typography/Typography";

const Navbar = () => {
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
              ? "text-primary capitalize py-1  hover:tracking-widest"
              : " text-light py-1 px-0 "
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
                ? "text-primary capitalize py-1 hover:tracking-widest"
                : " text-light py-1 px-0 "
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

        <NavLink
          to="/dashboard/favourite"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary capitalize py-1 hover:tracking-widest"
              : " text-light py-1 px-0 "
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
              ? "text-primary capitalize py-1  hover:tracking-widest"
              : " text-light py-1 px-0 "
          }
        >
          <ListItem className="hover:bg-primary/20 hover:text-white">
            <ListItemPrefix className="pe-3">
              <TbBrandBlogger />
            </ListItemPrefix>
            Blogs
          </ListItem>
        </NavLink>
      </div>
    </Typography>
  );

  // const [openRight, setOpenRight] = React.useState(false);

  const [openLeft, setOpenLeft] = React.useState(false);

  // const openDrawerRight = () => setOpenRight(true);
  // const closeDrawerRight = () => setOpenRight(false);

  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
  return (
    <Fragment>
      <div className="flex flex-wrap gap-4 md:hidden">
        {/* <Button onClick={openDrawerRight}>Open Drawer Right</Button> */}
        <Button
          className="px-3 py-3 me-3 bg-primary/75 text-lg"
          onClick={openDrawerLeft}
        >
          <RiMenu2Line />
        </Button>
      </div>

      <Drawer
        placement="left"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="p-4 bg-dark/95 z-50 h-screen"
      >
        <div className="mb-6 flex items-center justify-between relative">
          <Typography className="text-light ms-5" variant="T_Bold_H3">
            Quick Start
          </Typography>
          <button
            className="text-xl p-1 bg-primary text-light rounded-sm"
            onClick={() => closeDrawerLeft()}
          >
            <RxCross2 />
          </button>
        </div>
        <Card className="md:ps-[20%] ps-6 md:px-20 px-6 py- h-[100vh] w-full overflow-hidden rounded-md bg-tranparent">
          <List className="my-2 p-0 ">
            <span className="border-[1px] ps-2 mb-4 border-light/20 "></span>
            <Typography variant="T_Medium_H6_Sidebar">{menuItem}</Typography>
          </List>
        </Card>
      </Drawer>
    </Fragment>
  );
};

export default Navbar;
