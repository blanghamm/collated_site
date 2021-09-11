const express = require("express");
const outputModel = require("../models/outputModel");
const app = express();

app.get("/api/outputs", async (req, res) => {
  const output = await outputModel.find({});
  try {
    res.send(output);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/outputs", async (req, res) => {
  const output = await outputModel(req.body);
  try {
    await output.save();
    res.send(output);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/api/outputs:id", async (req, res) => {
  const output = await outputModel.findByIdAndDelete(req.params.id);
  try {
    if (!output) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
