const ObjectId = require('mongoose').Types.ObjectId; 
const Metric = require('../models/metricModel');

exports.getMetrics = (req, res, next) => {
    Metric.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => next(err));
}