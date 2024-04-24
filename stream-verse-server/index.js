const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./db/dbConnect.js");
const { readdirSync } = require("fs");
const path = require("path");
const videoRoutes = require("./routes/videoRoutes");

const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Default Routes
// app.use("/api/uploadVideo", videoRoutes);
app.use("/api", videoRoutes);

const server = () => {
  dbConnection();

  app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
  });
};

server();
