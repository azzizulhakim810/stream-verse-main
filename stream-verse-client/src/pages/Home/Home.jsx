import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import ShowAllVideoCards from "../../components/ShowAllVideoCards/ShowAllVideoCards";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { useGlobalContext } from "../../context/global";
import Typography from "../../utilities/Typography/Typography";

const Home = () => {
  const { user } = useClerk();
  // console.log(user.imageUrl);
  const email = user?.primaryEmailAddress?.emailAddress;

  const navigate = useNavigate();

  const [label, setLabel] = useState("");

  const { videos } = useGlobalContext();

  const [allVideos, setAllVideos] = useState(videos);
  // console.log(videos);
  const [modal, setModal] = useState(false);

  const handleVideo = (e) => {
    setLabel(e.target?.files[0]?.name);
    // document.getElementById("uploadBtn").style.disabled = false;
  };

  const handleAddNewVideo = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const video = event.target?.video?.files[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", video);
    formData.append("email", email);

    // console.log("new", formData);

    axios.post("http://localhost:8000/api/upload", formData).then((res) => {
      console.log(res.data.video._id);
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
        navigate("/");
      }
    });
  };

  return (
    <div className="grid grid-cols-12 gap-0 ">
      <div className="md:col-span-3 col-span-5 bg-gray-900  ">
        <Sidebar modal={modal} setModal={setModal} />
      </div>
      <div className="md:col-span-9 col-span-7   bg-dark">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5  w-11/12  mx-auto">
          {allVideos?.map((video) => (
            <ShowAllVideoCards
              key={video._id}
              video={video}
            ></ShowAllVideoCards>
          ))}
        </div>
        <ToastContainer />
      </div>

      <div className=" w-full absolute bg-black/80 text-center ">
        {modal ? (
          <div className="w-6/12 m-auto h-[100vh] bg-dark p-20 relative">
            <button
              onClick={() => setModal(false)}
              className="text-3xl text-light absolute right-10"
            >
              <RxCross2 />
            </button>

            <Typography variant="T_Bold_H3">
              <h1
                className="
         text-center pb-10 tracking-widest text-light"
              >
                Upload A New Video
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
                      className="input input-bordered w-full  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
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
                      className="input input-bordered text-pretty  py-6 pb-20 w-full  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Upload row */}
              <div className=" mb-8">
                <div className="form-control w-full">
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
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Home;
