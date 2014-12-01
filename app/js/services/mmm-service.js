'use strict';

module.exports = function(app) {
  app.factory('mmmService', function($resource) {
    var mmm = {
      getResults: function(numberArray) {
        return $resource('/api').get({numbers: numberArray}).$promise;
      }
    };

    return mmm;
  });
};
