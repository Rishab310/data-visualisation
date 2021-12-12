const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
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
const dataItemSchema = new Schema({
  metricId: {
    type: String,
    required: true,
  },
  metricData: [dataSchema],
});

module.exports = mongoose.model("DataItem", dataItemSchema);
