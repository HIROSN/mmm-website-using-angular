'use strict';

require('angular');
require('angular-resource');

var app = angular.module('meanMedianMode', ['ngResource']);
require('./services/mmm-service')(app);
require('./controllers/mmm-controller')(app);
require('./directives/mmm-display')(app);
