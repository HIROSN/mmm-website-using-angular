'use strict';

module.exports = function(app) {
  app.controller('mmmController', function($scope, mmmService) {
    $scope.numbers = '';
    $scope.results = {};

    $scope.getResults = function() {
      $scope.results = {};
      if (!$scope.numbers) { return; }

      mmmService.getResults($scope.numbers.split(',')).then(function(data) {
        $scope.results = data;
      });
    };
  });
};
