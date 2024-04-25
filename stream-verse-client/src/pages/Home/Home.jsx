import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import app from "../../Firebase/firebase.config";
import ShowAllVideoCards from "../../components/ShowAllVideoCards/ShowAllVideoCards";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useSearch } from "../../context/SearchContext";
import Typography from "../../utilities/Typography/Typography";

const Home = () => {
  const { user } = useClerk();
  const userImg = user?.imageUrl;
  const email = user?.primaryEmailAddress?.emailAddress;

  const navigate = useNavigate();

  const [label, setLabel] = useState("");

  const [allVideos, setAllVideos] = useState([]);

  const { searchText } = useSearch();
  // console.log(searchText);

  useEffect(() => {
    axios
      .get(
        `https://stream-verse-server-alpha.vercel.app/api/videos?title=${searchText}`
      )
      .then((res) => {
        setAllVideos(res.data?.videos);
        // console.log(res.data);
      });
  }, [searchText]);

  // console.log(allVideos);

  const [modal, setModal] = useState(false);

  // New start
  const [video, setVideo] = useState(undefined);
  const [videoPercentage, setVideoPercentage] = useState(0);
  const [inputVideo, setInputVideo] = useState({});

  const handleVideo = (e) => {
    setLabel(e.target?.files[0]?.name);
    setVideo((prev) => e.target?.files[0]);
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  const uploadFile = (file, fileType) => {
    const storage = getStorage(app);
    const folder = fileType === "videoUrl" && "videos/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "videoUrl" && setVideoPercentage(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadURL - ", downloadURL);
          setInputVideo((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL,
            };
          });
        });
      }
    );
  };

  // New close

  const handleAddNewVideo = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const thumbUrl = form.thumbUrl?.value;
    const videoUrl = inputVideo;

    const formData = {
      title,
      description,
      videoUrl,
      thumbUrl,
      userImg,
      email,
    };

    // console.log("new", formData);

    try {
      axios
        .post(
          "https://stream-verse-server-alpha.vercel.app/api/uploadVideo",
          formData
        )
        .then((res) => {
          // console.log(res.data.video._id);
          // console.log(res.data);
          if (res.data.video._id) {
            toast.success("Video has uploaded", {
              position: "bottom-left",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });

            setAllVideos([...allVideos, res.data.video]);
            form.reset();
            setModal(false);
            navigate("/dashboard/myVideos");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-0 ">
      <div className="md:col-span-3 col-span-0 hidden md:flex bg-gray-900  ">
        <Sidebar modal={modal} setModal={setModal} />
      </div>
      <div className="md:col-span-9 col-span-12   bg-dark relative">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5  w-11/12  mx-auto">
          <button
            onClick={() => setModal(!modal)}
            className="text-light bg-primary py-2 rounded-lg mx-1 justify-center items-center gap-2 text-lg hover:bg-white hover:text-primary transition-all ease-in-out duration-500 font-semibold md:hidden flex"
          >
            <FaCloudUploadAlt /> Upload
          </button>
          {allVideos?.map((video) => (
            <ShowAllVideoCards
              key={video._id}
              video={video}
            ></ShowAllVideoCards>
          ))}
        </div>
        <ToastContainer />
      </div>

      {/* Upload Form  */}
      {modal && (
        <div className="md:fixed fixed md:top-0 top-6 left-0 md:h-screen h-[100vh]  w-screen flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="md:w-6/12 w-full bg-dark p-20 relative">
            <button
              onClick={() => setModal(false)}
              className="text-3xl text-light absolute md:top-[10%] top-[12%] right-5"
            >
              <RxCross2 />
            </button>

            <Typography variant="T_Bold_H4">
              <h1
                className="
         text-center pb-5 tracking-widest text-light"
              >
                Upload A Video
              </h1>
            </Typography>

            <form
              action="api/upload"
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleAddNewVideo}
            >
              {/* Title & Description row */}

              <div className="">
                <div className="form-control w-full mb-3">
                  <label className="label">
                    <span className="label-text text-light">Title</span>
                  </label>

                  <label className="input-group">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      // value={title}
                      placeholder="Title"
                      className="input input-bordered w-full md:h-full h-10 py-3 bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                      required
                    />
                  </label>
                </div>

                <div className="form-control w-full  mb-3">
                  <label className="label">
                    <span className="label-text text-light">Description</span>
                  </label>

                  <label className="input-group">
                    <input
                      type="textbox"
                      name="description"
                      placeholder="Write about the video"
                      // value={description}
                      className="input input-bordered text-pretty w-full md:h-full h-10 md:py-6 py-0 md:pb-12 pb-0  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                      required
                    />
                  </label>
                </div>
              </div>

              {/*  Thumbnail Image row & Upload row */}
              <div>
                <div className="form-control w-full mb-3">
                  <label className="label">
                    <span className="label-text text-light">
                      Thumbnail Image
                    </span>
                  </label>

                  <label className="input-group">
                    <input
                      type="url"
                      name="thumbUrl"
                      id="thumbnailIMg"
                      // value={title}
                      placeholder="Drop the url"
                      className="input input-bordered w-full md:h-full h-10 py-3  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                      required
                    />
                  </label>
                </div>

                <div className="form-control w-full  mb-8">
                  <label className="label">
                    <span className="label-text text-light">Video</span>
                  </label>
                  <label
                    className="inner-label border-dashed border-[1px] border-primary text-light/60 p-5 cursor-pointer"
                    htmlFor="video"
                  >
                    {label ? (
                      <div className="text-light">{label}</div>
                    ) : (
                      "Upload your video"
                    )}

                    <span className="text-primary">
                      {videoPercentage > 0 &&
                        "Uploading: " + videoPercentage + "%"}
                    </span>
                    <input
                      type="file"
                      name="video"
                      accept="video/*"
                      id="video"
                      placeholder="upload your video"
                      className="input w-full  text-light"
                      hidden
                      onChange={handleVideo}
                    />
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Upload"
                id="uploadBtn"
                // disabled
                className="btn btn-block uppercase bg-primary border-none hover:text-primary hover:bg-light text-white "
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
