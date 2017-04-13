const angular = require('angular');
require('angular-ui-router');
require('angular-material');

/* 미들웨어 호출 */
import configure from './configure/config.js';
import DashBoardController from './dashboard/dashboard.controller.js';
import LoginController from './login/login.controller.js';
// import RegisterController from './register/register.controller.js';

/* 미들웨어 CSS 호출 */
import AngularMaterial from '../../node_modules/angular-material/angular-material.min.css';
import IndexStyle from '../public/css/index.css';
import DashBoardStyle from '../public/css/dashboard.css';
import LoginStyle from '../public/css/login.css';
import RegisterStyle from '../public/css/register.css';

angular.module('app',['ui.router','ngMaterial'])
        .config(configure)
        .controller('DashBoardController',DashBoardController)
        .controller('LoginController',LoginController);
