'use strict';

module.exports = function(app) {
  app.controller('mmmController', function($scope, MmmFactory) {
    $scope.numbers = '';
    $scope.results = {};

    $scope.getResults = function() {
      $scope.results = {};
      if (!$scope.numbers) { return; }

      MmmFactory.get({
        numbers: $scope.numbers.split(',')
      })
      .$promise.then(function(data) {
        $scope.results = data;
      });
    };
  });
};
