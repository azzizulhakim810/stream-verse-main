import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import VideoJS from "../../components/VideoJS/VideoJS";
import Typography from "../../utilities/Typography/Typography";

const ViewVideoDetails = () => {
  // const { id } = useParams();
  const { myVideos } = useLoaderData();
  // console.log(id, myVideos.videoUrl?.videoUrl);

  const { title, description, videoUrl } = myVideos || {};

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
        src: videoUrl?.videoUrl || "",
        type: "video/mp4",
      },
    ],
    controlBar: {
      children: [
        "playToggle",
        "volumePanel",
        "progressControl",
        "currentTimeDisplay",
        "timeDivider",
        "durationDisplay",
        "pictureInPictureToggle",
        "qualitySelector",
        "fullscreenToggle",
      ],
      durationDisplay: {
        timeToShow: ["duration"],
        countDown: false,
      },
    },
  };

  return (
    <div className="md:w-10/12 w-11/12 mx-auto" ref={videoConRef}>
      <VideoJS options={videoOptions} onReady={handlePlayerReady} />
      <div className="md:m-4 m-2 bg-primary p-6 rounded-lg">
        <Typography variant="T_Bold_H4" className="text-light leading-tight">
          <p>{title}</p>
        </Typography>

        <Typography variant="T_Regular_H6" className="text-white leading-tight">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ViewVideoDetails;
