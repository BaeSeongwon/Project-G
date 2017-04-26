const angular = require('angular');
require('angular-ui-router');
require('angular-material');

/* 미들웨어 호출 */
import configure from './configure/config.js';
import DashBoardController from './dashboard/dashboard.controller.js';
import DashBoardMenueService from './dashboard/dashboard.menue.service.js';
import LoginController from './login/login.controller.js';
import LoginService from './login/login.service.js';
import RegisterController from './register/register.controller.js';
import RegisterService from './register/register.service.js';
import SiteAppendController from './siteappend/siteappend.controller.js';

/* 미들웨어 CSS 호출 */
import AngularMaterial from '../../node_modules/angular-material/angular-material.min.css';
import FontAwesome from '../../node_modules/font-awesome/css/font-awesome.css';
import IndexStyle from '../public/css/index.css';
import DashBoardStyle from '../public/css/dashboard.css';
import LoginStyle from '../public/css/login.css';
import RegisterStyle from '../public/css/register.css';
import SiteAppendStyle from '../public/css/siteappend.css';

angular.module('app',['ui.router','ngMaterial'])
        .config(configure)
        .controller('DashBoardController',DashBoardController)
        .service('DashBoardMenueService',DashBoardMenueService)
        .controller('LoginController',LoginController)
        .service('LoginService',LoginService)
        .controller('RegisterController',RegisterController)
        .service('RegisterService',RegisterService)
        .controller('SiteAppendController',SiteAppendController);
