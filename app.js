//Imports
const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cookieParse = require("cookie-parser");
const crypto = require("crypto");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const randomId = () => crypto.randomBytes(30).toString("hex");
const mongoURI = process.env.NODE_ENV_MONGODB;
const outputRoute = require("./routes/outputRoutes");
const urlRoute = require("./routes/urlRoutes");
const urls = require("./urls/urls.json");

//Development
app.use(
  cors({
    origin: ["http://localhost:3000/"],
  }),
  express.json()
);

mongoose.connect(mongoURI);

//Mongodb connect store
const store = new MongoDBStore({
  uri: mongoURI,
  collection: "collated_sessions",
});

store.on("error", (error) => {
  console.log(error);
});

const sessionMiddleware = session({
  store: store,
  secret: "potatowaffles",
  cookie: { secure: false },
  saveUninitialized: true,
  resave: false,
  genid: () => {
    return randomId();
  },
});

app.use(sessionMiddleware, cookieParse("potatowaffles"));

io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res || {}, next);
});

io.on("connection", async (socket) => {
  const session = socket.request.session;
  console.log(`Socket ${session.id} connected`);
  session.connections++;
  session.save();
  socket.emit("socket", session.id);
  socket.on("disconnect", () => {
    console.log(`Socket ${session.id} disconnected`);
  });
});

// Production
app.use(express.static(path.join(__dirname, "client/dist/")));
app.use("/", outputRoute, urlRoute);

urls.forEach((name) => {
  app.get("/" + name.path, (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/"));
  });
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
