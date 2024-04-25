const mongoose = require("mongoose");

exports.dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB is connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
