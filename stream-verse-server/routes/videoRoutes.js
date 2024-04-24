const {
  addVideo,
  getAllVideos,
  getMyVideos,
  deleteVideo,
  updateVideo,
  getToUpdate,
  getToViewDetails,
  searchVideo,
  uploadVideo,
} = require("../controllers/videoController");

const router = require("express").Router();

router
  .post("/uploadVideo", uploadVideo)
  .get("/videos", getAllVideos)
  .get("/myVideos", getMyVideos)
  .get("/updateOne/:id", getToUpdate)
  .get("/viewDetails/:id", getToUpdate)
  .patch("/update/:id", updateVideo)
  .delete("/delete/:id", deleteVideo);

module.exports = router;
