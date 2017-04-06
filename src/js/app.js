const angular = require('angular');
require('angular-ui-router');
require('angular-material');

/* 미들웨어 JS 호출 */
import configure from './configure/config.js';
import DashBoardController from './dashboard/dashboard.controller.js';
import LoginController from './login/login.controller.js';

/* 미들웨어 CSS 호출 */
import DashBoardStyle from '../public/css/dashboard.css';

angular.module('app',['ui.router','ngMaterial'])
        .config(configure)
        .controller('DashBoardController',DashBoardController)
        .controller('LoginController',LoginController);
