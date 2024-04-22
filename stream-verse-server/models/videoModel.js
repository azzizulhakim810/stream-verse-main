const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    thumbUrl: {
      type: String,
      trim: true,
    },
    videoUrl: {
      type: String,
      trim: true,
      required: true,
    },
    userImg: {
      type: String,
      trim: true,
      required: true,
    },
    filename: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MyVideos", videoSchema);
