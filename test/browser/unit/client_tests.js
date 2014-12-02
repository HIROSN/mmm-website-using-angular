'use strict';

require('angular-mocks');

describe('MeanMedianModeController', function() {
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('meanMedianMode'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should able to create a new controller', function() {
    var mmmController = $controllerConstructor('mmmController', {
      $scope: $scope
    });

    expect(typeof mmmController).toBe('object');
  });

  it('should get results', angular.mock.inject(function(_$httpBackend_) {
    $controllerConstructor('mmmController', {
      $scope: $scope
    });

    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', '/api?numbers=1').respond({
      mean: 1,
      median: 1,
      mode: 1
    });

    $scope.numbers = '1';
    $scope.getResults();
    $httpBackend.flush();

    expect($scope.results).toBeTruthy();
    expect(typeof $scope.results).toBe('object');

    expect($scope.results.mean).toBeDefined();
    expect($scope.results.median).toBeDefined();
    expect($scope.results.mode).toBeDefined();

    expect($scope.results.mean).toBe(1);
    expect($scope.results.median).toBe(1);
    expect($scope.results.mode).toBe(1);

    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));
});
