'use strict';

require('angular');
require('angular-resource');

(function() {
  var app = angular.module('meanMedianMode', ['ngResource']);
  require('./services/mmm-service')(app);
  require('./controllers/mmm-controller')(app);

  app.directive('mmmDisplay', function() {
    return {
      restrict: 'E',
      templateUrl: 'mmm-display.html'
    };
  });
})();
