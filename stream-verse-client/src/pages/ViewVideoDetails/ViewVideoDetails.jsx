import { useRef } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import videojs from "video.js";
import VideoJS from "../../components/VideoJS/VideoJS";
import { useGlobalContext } from "../../context/global";

const ViewVideoDetails = () => {
  const selectedOne = useLoaderData();

  const { videos } = useGlobalContext();
  const { id } = useParams();
  // console.log(id, videos);

  // const filteredOne = videos?.find((video) => video._id === id);
  // console.log(filteredOne?.videoUrl);

  const video = videos.find((vId) => {
    return vId._id === id;
  });

  console.log(video?.videoUrl);

  // const { title, description, url } = selectedOne || {};

  const videoConRef = useRef(null);
  const playerRef = useRef(null);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  // video options
  const videoOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    alwaysShowControls: true,
    sources: [
      {
        src: video?.videoUrl || "",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="w-10/12 mx-auto py-5" ref={videoConRef}>
      {/* <Card className="w-full md:flex-row flex-col text-light shadow-xl shadow-white/40">
        <CardHeader
          shadow={false}
          floated={false}
          className=" md:w-2/5 md:shrink-0 w-full md:rounded-r-none rounded-b-none"
        >
          <img
            src={url}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="md:p-8 p-4">
          <Typography variant="T_Bold_H4" className=" leading-tight ">
            {title}
          </Typography>
          <br />
          <h1 className="my-4 md:text-lg text-md">{description}</h1>
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
      </Card> */}
      <VideoJS options={videoOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default ViewVideoDetails;
