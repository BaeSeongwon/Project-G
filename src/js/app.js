const angular = require('angular');
require('angular-ui-router');
require('angular-material');

/* 미들웨어 호출 */
import configure from './configure/config.js';
import DashBoardController from './dashboard/dashboard.controller.js';

angular.module('app',['ui.router','ngMaterial'])
        .config(configure)
        .controller('DashBoardController',DashBoardController);
