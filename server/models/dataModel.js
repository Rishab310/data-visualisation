const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataItemSchema = new Schema({
  original_value : {
    type: Number,
    required: true,
  },
  forecasted_value : {
    type: Number,
    required: true,
  },
  min_band : {
    type: Number,
    required: true,
  },
  max_band: {
    type: Number,
    required: true,
  },
  line_status: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});
const dataSchema = new Schema({
  metricId: {
    type: String,
    required: true,
  },
  metricData: [dataItemSchema],
});

module.exports = mongoose.model("Data", dataSchema);
