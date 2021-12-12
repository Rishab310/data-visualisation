const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dimensionSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
            required: true
      }
    }
  );
const metricSchema = new Schema({
        measure: {
            type: String,
            required: true
        },
        dimensions: [dimensionSchema]
    }
)

module.exports = mongoose.model('Metric', metricSchema);