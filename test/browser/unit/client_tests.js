'use strict';

describe('MeanMedianModeController', function() {
  var $httpBackend;
  var scope;
  var controller;

  beforeEach(angular.mock.module('meanMedianMode'));

  beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_) {
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', '/api?numbers=1').respond({
      mean: 1,
      median: 1,
      mode: 1
    });

    scope = $rootScope.$new();
    controller = $controller('MeanMedianModeController', {$scope: scope});
  }));

  it('should get results', function() {
    scope.numbers = '1';
    controller.getResults();
    $httpBackend.flush();
    expect(scope.results.mean).toBe(1);
    expect(scope.results.median).toBe(1);
    expect(scope.results.mode).toBe(1);
  });
});
