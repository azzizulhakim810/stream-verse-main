const videoModel = require("../models/videoModel");
const Video = require("../models/videoModel");
const videoSchema = require("../models/videoModel");
const { ObjectId } = require("mongodb");

// Upload video
exports.uploadVideo = async (req, res) => {
  const { title, description, email, thumbUrl, videoUrl, userImg } = req.body;

  console.log(req.body);
  if (!videoUrl) {
    res.status(400);
    throw new Error("Upload the video carefully");
  }

  try {
    const video = await videoModel.create({
      title,
      description,
      email,
      thumbUrl,
      videoUrl,
      userImg,
    });

    res.status(200).json({
      message: "Video Uploaded Sucessfully",
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
    throw error;
  }
};
// Add new video
/* exports.addVideo = async (req, res) => {
  const { title, description, email, thumbUrl, userImg } = req.body;
  const videoPath = req.file.path;

  // console.log(req.file);

  const video = new videoSchema({
    title,
    description,
    email,
    thumbUrl,
    userImg,
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
}; */

// Get all the videos the website has with search functionality
/* exports.getAllVideos = async (req, res) => {
  try {
    const searchText = req.query?.name;
    // console.log(searchText);

    // const query = { $regex: searchText, $options: "i" };

    const query = { title: { $regex: searchText, $options: "i" } };

    const videos = await videoSchema.find(query);
    // const videos = await videoSchema.find();
    res.status(200).json({
      videos,
    });
  } catch (error) {
    res.status(400).json({
      message: "Videos fetch Failed",
      error,
    });
  }
}; */

exports.getAllVideos = async (req, res) => {
  try {
    // const videos = await videoSchema.find(query);
    const videos = await Video.find();
    res.status(200).json({
      videos,
    });
  } catch (error) {
    res.status(500).json({
      message: "Videos fetch Failed",
      error,
    });
  }
};

// Get to load the specific one to update
exports.getToUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };

    const myVideos = await videoSchema.findOne(query);
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
// Get to load the specific one to update
exports.getToViewDetails = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    // const query = { _id: new ObjectId(id) };

    // const viewDetails = await videoSchema.findOne(query);
    res.status(200).json({
      viewDetails,
    });
  } catch (error) {
    res.status(400).json({
      message: "Videos fetch Failed",
      error,
    });
  }
};

// Get all my videos filteration
exports.getMyVideos = async (req, res) => {
  try {
    let query = {};
    if (req.query?.email) {
      query = { email: req.query.email };
      console.log(query);
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

// impletement search functionality
/* exports.searchVideo = async (req, res) => {
  try {
    const searchText = req.query?.name;
    console.log(req.body, searchText);

    const query = { $regex: searchText, $options: "i" };

    const searchedVideo = await videoSchema.find(query);
    res.status(200).json({
      searchedVideo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Videos fetch Failed",
      error,
    });
  }
}; */

// Delete the video
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

exports.updateVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const updateInfo = req.body;
    // console.log(id, updateInfo);
    const options = { upsert: false };
    const filter = { _id: new ObjectId(id) };
    // console.log(filter, id, updateInfo);

    const video = {
      $set: {
        title: updateInfo.title,
        description: updateInfo.description,
        thumbUrl: updateInfo.thumbUrl,
      },
    };
    const updateVideo = await videoSchema.updateOne(filter, video, options);
    res.status(200).json({
      updateVideo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Videos fetch Failed",
      error,
    });
  }
};
