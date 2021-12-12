const ObjectId = require("mongoose").Types.ObjectId;
const DataItem = require("../models/dataModel");

exports.getDataItem = (req, res, next) => {
  DataItem.findOne({"metricId": req.body.metricId})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};
