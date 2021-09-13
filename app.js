//Imports
const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);
const MongoClient = require("mongodb").MongoClient;
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cookieParse = require("cookie-parser");
const crypto = require("crypto");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const randomId = () => crypto.randomBytes(8).toString("hex");
const mongoURI = process.env.NODE_ENV_MONGODB;
const outputRoute = require("./routes/outputRoutes");

app.use(cors(), express.json());

let db, collection;

mongoose.connect(mongoURI);

//Mongodb connect store
const store = new MongoDBStore({
  uri: mongoURI,
  collection: "collated_testing",
});

store.on("error", (error) => {
  console.log(error);
});

const sessionMiddleware = session({
  store: store,
  secret: "testing stuff",
  cookie: { secure: false },
  saveUninitialized: true,
  resave: false,
  genid: () => {
    return randomId();
  },
});

app.use(sessionMiddleware, cookieParse("testing stuff"));

io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res || {}, next);
});

io.on("connection", async (socket) => {
  const session = socket.request.session;
  console.log(`Socket ${socket.id} connected`);
  session.connections++;
  session.save();
  socket.emit("socket", socket.id);
  socket.emit("session", session.id);
  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});

// Production
app.use(express.static(path.join(__dirname, "client/dist/")));

//For solid application, serving each route.

async function executeRoutes() {
  const routeOutline = await collection.find({}).toArray();
  routeOutline.forEach((name) => {
    app.get("/" + name.path, (req, res) => {
      res.sendFile(path.join(__dirname, "client/dist/"));
    });
  });
}

async function saveUsersOutput(values) {
  db.collection("userOutput").insertOne({ testItem: "somestuff" });
}

//For api setup

app.get("/api/routes", async (req, res) => {
  await collection
    .find({}, { projection: { _id: 0 } })
    .toArray((err, result) => {
      if (err) {
        res.status(500).send(e);
      }
      res.send(result);
    });
});

app.use("/", outputRoute);

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
  MongoClient.connect(mongoURI, (err, client) => {
    if (err) {
      throw err;
    }
    db = client.db("testing");
    collection = db.collection("routes");
    executeRoutes();
    saveUsersOutput();
  });
});
