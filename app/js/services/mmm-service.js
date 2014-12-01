'use strict';

module.exports = function(app) {
  app.factory('mmmService', function($resource) {
    return $resource('/api');
  });
};
