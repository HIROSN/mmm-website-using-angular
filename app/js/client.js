'use strict';

require('angular');
require('angular-resource');

(function() {
  var app = angular.module('meanMedianMode', ['ngResource']);
  require('./services/mmm-service')(app);
  require('./controllers/mmm-controller')(app);
})();
