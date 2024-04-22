import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useGlobalContext } from "../../context/global";
import Typography from "../../utilities/Typography/Typography";
const UpdateVideos = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { myVideos } = useLoaderData();
  console.log(myVideos);
  const { title, description, thumbUrl, filename } = myVideos || {};

  const handleUpdatevideo = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const thumbUrl = form.thumbUrl?.value;

    const updateInfo = {
      title,
      description,
      thumbUrl,
    };

    // console.log(updateInfo);

    axios
      .patch(`http://localhost:8000/api/update/${id}`, updateInfo)
      .then((res) => {
        console.log(res.data?.updateVideo);
        if (res.data?.updateVideo?.modifiedCount > 0) {
          toast.success("Video has updated", {
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
          form.reset();
          navigate("/dashboard/myVideos");
        }
      });
  };
  return (
    <div className="h-auto w-full ">
      <ToastContainer />
      <div className="w-8/12 mx-auto bg-dark  relative">
        <Typography variant="T_Bold_H3">
          <h1
            className="
   text-center pb-5 tracking-widest text-light"
          >
            Update the video
          </h1>
        </Typography>

        <form
          action="api/update/:id"
          method="PATCH"
          encType="multipart/form-data"
          onSubmit={handleUpdatevideo}
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
                  defaultValue={title}
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
                  defaultValue={description}
                  placeholder="Write about the video"
                  // value={description}
                  className="input input-bordered text-pretty  py-6 pb-20 w-full  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                  required
                />
              </label>
            </div>
          </div>

          {/*  Thumbnail Image row & Upload row */}
          <div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text text-light">Thumbnail Image</span>
              </label>

              <label className="input-group">
                <input
                  type="url"
                  name="thumbUrl"
                  id="thumbnailIMg"
                  defaultValue={thumbUrl}
                  placeholder="Drop the url"
                  className="input input-bordered w-full  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                  required
                />
              </label>
            </div>

            <div className="form-control w-full  mb-8">
              <label className="label">
                <span className="label-text text-light">Video</span>
              </label>
              <label
                className="inner-label border-dashed border-[1px] border-primary text-light/60 p-5 cursor-not-allowed"
                htmlFor="video"
              >
                {filename ? (
                  <div className="text-light">{filename}</div>
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
                  disabled
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
  );
};

export default UpdateVideos;
