const {
  addVideo,
  getAllVideos,
  getMyVideos,
  deleteVideo,
} = require("../controllers/videoController");
const { videoUpload } = require("../middlewares/videoUploadMiddleware");
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("Hello World");
});

/* router.post("/upload", videoUpload.single("video"), (req, res) => {
  res.send({ message: "Video Uploaded" });
}); */

router
  .post("/upload", videoUpload.single("video"), addVideo)
  .get("/videos", getAllVideos)
  .get("/myVideos", getMyVideos)
  .delete("/delete/:id", deleteVideo);

module.exports = router;
