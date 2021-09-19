const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const outputSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    date: { type: Date, default: Date.now },
    value1: Number,
    value2: Number,
    value3: Number,
    value4: Number,
    value5: Number,
    color: String,
  },
  { retainKeyOrder: true }
);

outputSchema.plugin(uniqueValidator);

const Outputs = mongoose.model("Outputs", outputSchema);

module.exports = Outputs;
