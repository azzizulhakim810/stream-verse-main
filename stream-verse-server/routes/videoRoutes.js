const {
  addVideo,
  getAllVideos,
  getMyVideos,
  deleteVideo,
  updateVideo,
  getToUpdate,
} = require("../controllers/videoController");
const { videoUpload } = require("../middlewares/videoUploadMiddleware");
const router = require("express").Router();

router
  .post("/upload", videoUpload.single("video"), addVideo)
  .get("/videos", getAllVideos)
  .get("/myVideos", getMyVideos)
  .get("/updateOne/:id", getToUpdate)
  .patch("/update/:id", updateVideo)
  .delete("/delete/:id", deleteVideo);

module.exports = router;
