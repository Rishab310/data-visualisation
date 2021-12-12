const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dimensionSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
const metricSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  measure: {
    type: String,
    required: true,
  },
  dimensions: [dimensionSchema],
});

module.exports = mongoose.model("Metric", metricSchema);
