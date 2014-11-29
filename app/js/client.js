'use strict';

(function() {
  var app = angular.module('meanMedianMode', []);

  app.controller('MeanMedianModeController', ['$http', function($http) {
    var self = this;
    self.numbers = '';
    self.results = {};

    this.post = function() {
      self.results = {};
      if (!self.numbers) { return; }

      $http.post('/api', {
        numbers: self.numbers.split(',')
      }).
      success(function(data) {
        self.results = data;
      });
    };
  }]);
})();
