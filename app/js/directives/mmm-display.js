'use strict';

module.exports = function(app) {
  app.directive('mmmDisplay', function() {
    return {
      restrict: 'E',
      templateUrl: 'mmm-display.html'
    };
  });
};
