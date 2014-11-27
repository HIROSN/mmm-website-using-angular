'use strict';

var mmm = require('../lib/mean_median_mode');

var postHandler = function(req, res) {
  if (!req.body || !req.body.numbers) { return res.status(500).json({}); }
  var numbers = req.body.numbers;
  if (!Array.isArray(numbers)) { return res.status(400).json({}); }

  res.json({
    mean: mmm.mean(numbers),
    median: mmm.median(numbers),
    mode: mmm.mode(numbers)
  });
};

module.exports = postHandler;
