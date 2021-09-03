//Imports
const express = require("express");
const app = express();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cookieParse = require("cookie-parser");
const crypto = require("crypto");
const path = require("path");
require("dotenv").config();
const PORT = 4000;
const randomId = () => crypto.randomBytes(8).toString("hex");
const mongoURI = process.env.NODE_ENV_MONGODB;

console.log(mongoURI);

const routesGen = new Array(20).fill().map(() => {
  return { path: crypto.randomBytes(8).toString("hex") };
});

console.log(routesGen);

//Mongodb connect
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
  console.log(`Socket ${session.id} connected`);
  session.connections++;
  session.save();
  socket.emit("session", session.id);
  socket.on("disconnect", () => {
    console.log(`Socket ${session.id} disconnected`);
  });
});

app.use(express.static(path.join(__dirname, "..", "client/dist/")));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../client/dist/") });
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
