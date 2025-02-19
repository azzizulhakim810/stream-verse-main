const express = require("express");
const app = express();
const cors = require("cors");
const { dbConnection } = require("./db/dbConnect");
const { readdirSync } = require("fs");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Read all the routes synchronously
/* readdirSync("./routes").map((route) =>
  app.use("/api", require("./routes/" + route))
); */

// Read all the routes synchronously
const routeFiles = readdirSync("./routes");
routeFiles.map((routeFile) => {
  if (routeFile.endsWith(".js")) {
    const routePath = path.join(__dirname, "routes", routeFile);
    const route = require(routePath);
    app.use("/api", route);
  }
});

// store the static files
app.use("/public", express.static(path.join(__dirname, "public")));

const server = () => {
  dbConnection();

  app.listen(PORT, () => {
    // console.log(`Server is listening to ${PORT}`);
  });
};

server();
