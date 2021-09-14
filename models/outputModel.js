const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const outputSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  date: { type: Date, default: Date.now },
  value1: Number,
  value2: Number,
  value3: Number,
  value4: Boolean,
});

outputSchema.plugin(uniqueValidator);

const Outputs = mongoose.model("Outputs", outputSchema);

module.exports = Outputs;
