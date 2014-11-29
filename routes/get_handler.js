'use strict';

var mmm = require('../lib/mean_median_mode');

var getHandler = function(req, res) {
  var numbers = req.body && req.body.numbers ||
    req.query && req.query.numbers || req.params && req.params.numbers;

  if (!numbers) { return res.status(500).json({}); }

  res.json({
    mean: mmm.mean(numbers),
    median: mmm.median(numbers),
    mode: mmm.mode(numbers)
  });
};

module.exports = getHandler;
