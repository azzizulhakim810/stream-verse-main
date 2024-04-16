const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@atlascluster.sztfigr.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const videoCollection = client.db("streamDB").collection("allVideos");

    // Load all videos
    app.get("/allVideos", async (req, res) => {
      const result = await videoCollection.find().toArray();
      res.send(result);
    });

    // Load My Videos
    app.get("/allVideos/myVideos", async (req, res) => {
      // console.log(req.query.email);

      let query = {};
      if (req.query?.email) {
        query = { userEmail: req.query.email };
      }

      const result = await videoCollection.find(query).toArray();
      res.send(result);
    });

    // Load to update
    app.get("/allVideos/update/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      const query = { _id: new ObjectId(id) };
      const result = await videoCollection.findOne(query);
      res.send(result);
    });

    // Load to viewDetails
    app.get("/allVideos/details/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await videoCollection.findOne(query);
      res.send(result);
    });

    // Upload a video
    app.post("/newVideo", async (req, res) => {
      const newVideo = req.body;
      console.log(newVideo);
      const result = await videoCollection.insertOne(newVideo);
      res.send(result);
    });

    // Update a video
    app.put("/updateVideo/:id", async (req, res) => {
      const id = req.params.id;
      const updatedVideo = req.body;
      // console.log(updatedVideo);
      const options = { upsert: true };
      const filter = { _id: new ObjectId(id) };

      const video = {
        $set: {
          title: updatedVideo.title,
          description: updatedVideo.description,
          url: updatedVideo.url,
          video: updatedVideo.video,
          userEmail: updatedVideo.userEmail,
        },
      };

      const result = await videoCollection.updateOne(filter, video, options);
      res.send(result);
    });

    // Delete a video
    app.delete("/allvideos/delete/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);

      const query = { _id: new ObjectId(id) };
      const result = await videoCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    /* console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    ); */
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Streaming");
});

app.listen(port, () => {
  console.log(`Stream Verse is running on port ${port}`);
});
