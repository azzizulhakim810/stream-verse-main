import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { FaGooglePlay } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Typography from "../../utilities/Typography/Typography";

const ViewVideoDetails = () => {
  const selectedOne = useLoaderData();

  const { title, description, url } = selectedOne || {};

  return (
    <div className="w-10/12 mx-auto py-5">
      <Card className="w-full flex-row text-light shadow-xl shadow-white/40">
        <CardHeader
          shadow={false}
          floated={false}
          className=" w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={url}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-8">
          <Typography variant="T_Bold_H4" className=" leading-tight ">
            {title}
          </Typography>
          <br />
          <h1 className="my-4 text-lg">{description}</h1>
          <br />
          <a href="#" className="inline-block">
            <Button
              variant="text"
              className="flex items-center gap-2 bg-primary text-light"
            >
              <FaGooglePlay />
              Play
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewVideoDetails;
