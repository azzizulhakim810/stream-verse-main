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
      type: Object,
      trim: true,
      required: true,
    },
    userImg: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
