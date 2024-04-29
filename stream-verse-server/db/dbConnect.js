const mongoose = require("mongoose");

exports.dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB connected on the following host: ${connection.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};
