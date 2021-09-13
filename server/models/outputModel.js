const mongoose = require("mongoose");

const outputSchema = new mongoose.Schema({
  userId: String,
  date: { type: Date, default: Date.now },
  value1: Number,
  value2: Number,
  value3: Number,
  value4: Boolean,
});

const Outputs = mongoose.model("Outputs", outputSchema);

module.exports = Outputs;
