import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { AiOutlineUnlock } from "react-icons/ai";
import { FaCloudUploadAlt, FaStar, FaThumbsUp } from "react-icons/fa";
import { MdFavorite, MdOutlineWbSunny } from "react-icons/md";
import Typography from "../../../utilities/Typography/Typography";

const Sidebar = () => {
  return (
    <Card className="md:ps-[20%] ps-6 md:px-20 px-6 py-5 h-[100vh] w-full overflow-hidden rounded-md">
      <List className="my-2 p-0 ">
        <Typography
          variant="T_Bold_H4"
          className="text-light border-b-2 pb-2 ps-2 mb-4 border-light/20"
        >
          Quick Start
        </Typography>

        <Typography variant="T_Medium_H6_Navbar">
          <ListItem className="group rounded-none my-2 py-[5px] px-3 text-light hover:bg-primary/20 hover:text-white focus:bg-primary focus:text-white">
            <ListItemPrefix className="pe-3 ">
              <FaThumbsUp />
            </ListItemPrefix>
            Best
          </ListItem>
        </Typography>

        <Typography variant="T_Medium_H6_Navbar">
          <ListItem className="group rounded-none my-2 py-[5px] px-3 text-light hover:bg-primary/20 hover:text-white focus:bg-primary focus:text-white">
            <ListItemPrefix className="pe-3">
              <MdFavorite />
            </ListItemPrefix>
            Favourite
          </ListItem>
        </Typography>

        <Typography variant="T_Medium_H6_Navbar">
          <ListItem className="group rounded-none my-2 py-[5px] px-3 text-light hover:bg-primary/20 hover:text-white focus:bg-primary focus:text-white">
            <ListItemPrefix className="pe-3">
              <FaStar />
            </ListItemPrefix>
            Featured
          </ListItem>
        </Typography>

        <Typography variant="T_Medium_H6_Navbar">
          <ListItem className="group rounded-none my-2 py-[5px] px-3 text-light hover:bg-primary/20 hover:text-white focus:bg-primary focus:text-white">
            <ListItemPrefix className="pe-3">
              <FaCloudUploadAlt />
            </ListItemPrefix>
            Upload
          </ListItem>
        </Typography>

        <Typography variant="T_Medium_H6_Navbar">
          <ListItem className="group rounded-none my-2 py-[5px] px-3 text-light hover:bg-primary/20 hover:text-white focus:bg-primary focus:text-white">
            <ListItemPrefix className="pe-3">
              <MdOutlineWbSunny />
            </ListItemPrefix>
            Light Mode
          </ListItem>
        </Typography>

        <Typography variant="T_Medium_H6_Navbar">
          <ListItem className="group rounded-none my-2 py-[5px] px-3 text-light hover:bg-primary/20 hover:text-white focus:bg-primary focus:text-white">
            <ListItemPrefix className="pe-3">
              <AiOutlineUnlock />
            </ListItemPrefix>
            Logout
          </ListItem>
        </Typography>
      </List>
    </Card>
  );
};

export default Sidebar;
