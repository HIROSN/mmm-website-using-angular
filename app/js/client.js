'use strict';

(function() {
  var app = angular.module('meanMedianMode', ['ngResource']);

  app.factory('MmmFactory', function($resource) {
    return $resource('/api');
  });

  app.controller('MeanMedianModeController', function($scope, MmmFactory) {
    $scope.numbers = '';
    $scope.results = {};

    this.getResults = function() {
      $scope.results = {};
      if (!$scope.numbers) { return; }

      MmmFactory.get({
        numbers: $scope.numbers.split(',')
      }).
      $promise.then(function(data) {
        $scope.results = data;
      });
    };
  });
})();
