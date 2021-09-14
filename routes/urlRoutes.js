const express = require("express");
const routeModel = require("../models/routesModel.js");
const app = express();

app.get("/api/routes", async (req, res) => {
  const route = await routeModel.find({});
  try {
    res.send(route);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
