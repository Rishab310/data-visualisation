const express = require('express');
const router = express.Router();

const metricController = require('../controllers/metricController');

router.get('/getMetrics', metricController.getMetrics)

module.exports = router; 