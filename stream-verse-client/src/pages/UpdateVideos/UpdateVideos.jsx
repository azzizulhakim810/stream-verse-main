import { useClerk } from "@clerk/clerk-react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typography from "../../utilities/Typography/Typography";

const UpdateVideos = () => {
  const { user } = useClerk();
  // console.log(user.emailAddresses?.[0].emailAddress);
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const handleUpdatevideo = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const video = form.video.value;
    const url = form.url.value;

    const newVideo = {
      title,
      url,
      video,
      description,
      userEmail,
    };

    form.reset();

    toast.success("Video has uploaded", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    console.log(newVideo);

    /*  axios.put(`https://elearn-platform-server.vercel.app/assignment/updateOne/${_id}`, updateAssignment, {withCredentials: true})
    .then(res => {
      console.log(res.data);
      if(res.data.modifiedCount > 0) {
        Swal.fire(
          'Great!',
          "Assignment Update Successfull",
          'success'
        );
         navigate('/allAssignments');
      }
    }
      
      ) */
  };
  return (
    <div className="text-center flex justify-center item-center">
      <div className="w-8/12 mx-auto py-5 pb-24">
        <Typography variant="T_Bold_H3">
          <h1
            className="
         text-center pb-10 tracking-widest text-light"
          >
            Update the video
          </h1>
        </Typography>

        <form onSubmit={handleUpdatevideo}>
          {/* Title & Description row */}

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-light">Title</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered w-full  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-light">Description</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                  required
                />
              </label>
            </div>
          </div>

          {/* Upload & Thumbnail Image row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label ">
                <span className="label-text text-light">Video</span>
              </label>

              <label className="input-group ">
                <input
                  type="file"
                  name="video"
                  placeholder="upload your video"
                  className="input input-bordered w-full py-2  border-b-2 border-primary text-light focus:border-b-2 focus:border-light bg-primary"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-light">Thumbnail Image</span>
              </label>

              <label className="input-group">
                <input
                  type="url"
                  name="url"
                  placeholder="Thumbnail Image URL"
                  className="input input-bordered w-full  bg-transparent border-b-2 border-primary text-light focus:border-b-2 focus:border-light "
                  required
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Upload"
            className="btn btn-block uppercase bg-primary border-none hover:text-primary hover:bg-light text-white"
          />
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateVideos;
