'use strict';

(function() {
  var app = angular.module('meanMedianMode', ['ngResource']);

  app.factory('MmmFactory', function($resource) {
    return $resource('/api');
  });

  app.controller('MeanMedianModeController', function(MmmFactory) {
    var self = this;
    self.numbers = '';
    self.results = {};

    this.post = function() {
      self.results = {};
      if (!self.numbers) { return; }

      MmmFactory.get({
        numbers: self.numbers.split(',')
      }).
      $promise.then(function(data) {
        self.results = data;
      });
    };
  });
})();
