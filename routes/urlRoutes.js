const express = require("express");
const routeModel = require("../models/routesModel.js");
const app = express();

async function executeRoutes() {
  const routeOutline = await routeModel.find({});
  routeOutline.forEach((name) => {
    app.get("/" + name.path, (req, res) => {
      res.sendFile(path.join(__dirname, "client/dist/"));
    });
  });
}

executeRoutes();

module.exports = app;
