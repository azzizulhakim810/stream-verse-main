const { addVideo, getAllVideos } = require("../controllers/videoController");
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
  .get("/videos", getAllVideos);

module.exports = router;
