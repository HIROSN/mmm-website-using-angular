'use strict';

(function() {
  var app = angular.module('Application', ['ngResource']);

  app.factory('UserFactory', function($resource) {
    return $resource('/users.json');
  });

  app.controller('MainCtrl', function($scope, UserFactory) {
    $scope.text = 'Hello World!';

    UserFactory.get().$promise.then(function(data) {
      $scope.users = data.users;
    });
  });
})();
