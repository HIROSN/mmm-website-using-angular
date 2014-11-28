'use strict';

require('angular');

(function() {
  var app = angular.module('meanMedianMode', []);

  app.controller('MeanMedianModeController', ['$http', function($http) {
    var self = this;
    self.numbers = '';
    self.results = {};

    this.post = function() {
      $http.post('/api', {
        numbers: self.numbers && self.numbers.split(',')
      }).
      success(function(data) {
        self.results = data;
      }).
      error(function() {
        self.results = {};
      });
    };
  }]);
})();
