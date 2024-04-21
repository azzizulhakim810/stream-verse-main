const videoSchema = require("../models/videoModel");
const { ObjectId } = require("mongodb");

exports.addVideo = async (req, res) => {
  const { title, description, email } = req.body;
  const videoPath = req.file.path;

  console.log(req.file);

  const video = new videoSchema({
    title,
    description,
    email,
    filename: req.file.filename,
    videoUrl: videoPath,
  });

  try {
    await video.save();
    res.status(200).json({
      message: "Video Uploaded Sucessfully",
      video,
    });
  } catch (error) {
    res.status(400).json({
      message: "Video Upload Failed",
      error,
    });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await videoSchema.find({});
    res.status(200).json({
      videos,
    });
  } catch (error) {
    res.status(400).json({
      message: "Videos fetch Failed",
      error,
    });
  }
};

exports.getMyVideos = async (req, res) => {
  try {
    let query = {};
    if (req.query?.email) {
      query = { email: req.query.email };
      // console.log(query);
    }

    const myVideos = await videoSchema.find(query);
    res.status(200).json({
      myVideos,
    });
  } catch (error) {
    res.status(400).json({
      message: "Videos fetch Failed",
      error,
    });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };

    const deleteVideo = await videoSchema.deleteOne(query);
    res.status(200).json({
      deleteVideo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Videos fetch Failed",
      error,
    });
  }
};
