'use strict';

module.exports = function(app) {
  app.directive('mmmDisplay', function() {
    return {
      restrict: 'A',
      templateUrl: 'mmm-display.html'
    };
  });
};
