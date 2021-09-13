const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  path: String,
});

const Routes = mongoose.model("Routes", routeSchema);

module.exports = Routes;
