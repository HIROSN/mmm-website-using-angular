'use strict';

require('angular');
require('angular-resource');

(function() {
  var app = angular.module('meanMedianMode', ['ngResource']);

  app.factory('MmmFactory', function($resource) {
    return $resource('/api');
  });

  require('./controllers/mmm-controller')(app);
})();
