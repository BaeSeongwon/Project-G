const angular = require('angular');

import controller from './dashboard.controller.js'
console.log(controller);
let dashboard = angular.module('app.dashboard',[]);
dashboard.controller(controller);

module.exports = dashboard;
