const angular = require('angular');
require('angular-ui-router');
require('angular-material');
require('angular-cookies');
require('bootstrap');

/* 미들웨어 호출 */
import configure from './configure/config.js';
import DashBoardController from './dashboard/dashboard.controller.js';
import DashBoardMenueService from './dashboard/dashboard.menue.service.js';
import LoginController from './login/login.controller.js';
import LoginService from './login/login.service.js';
import RegisterController from './register/register.controller.js';
import RegisterService from './register/register.service.js';
import SiteAppendController from './siteappend/siteappend.controller.js';
import SiteAppendDirective from './siteappend/siteappend.directive.js';
import AuthService from './auth/auth.js';
import SiteModel from './siteappend/sitemodel.service.js';
import urlModel from './siteappend/urlmodel.directive.js';
import SiteAppendService from './siteappend/siteappend.service.js';
import BookedController from './booked/booked.controller.js';
import BookedService from './booked/booked.service.js';
import WatchController from './watch/watch.controller.js';
import WatchService from './watch/watch.service.js';
import CodeController from './code/code.controller.js';
import CodeService from './code/code.service.js';

/* 미들웨어 CSS 호출 */
import AngularMaterial from '../../node_modules/angular-material/angular-material.min.css';
import Bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from '../../node_modules/font-awesome/css/font-awesome.css';
import IndexStyle from '../public/css/index.css';
import DashBoardStyle from '../public/css/dashboard.css';
import LoginStyle from '../public/css/login.css';
import RegisterStyle from '../public/css/register.css';
import SiteAppendStyle from '../public/css/siteappend.css';
import BookedStyle from '../public/css/booked.css';
import WatchStyle from '../public/css/watch.css';
import CodeStyle from '../public/css/code.css';

angular.module('app',['ui.router','ngMaterial','ngCookies'])
        .config(configure)
        .service('AuthService',AuthService)
        .controller('DashBoardController',DashBoardController)
        .service('DashBoardMenueService',DashBoardMenueService)
        .controller('LoginController',LoginController)
        .service('LoginService',LoginService)
        .controller('RegisterController',RegisterController)
        .service('RegisterService',RegisterService)
        .controller('SiteAppendController',SiteAppendController)
        .factory('SiteModel',SiteModel)
        .directive('getElement',SiteAppendDirective)
        .directive('urlModel',urlModel)
        .service('SiteAppendService',SiteAppendService)
        .controller('BookedController',BookedController)
        .service('BookedService',BookedService)
        .controller('WatchController',WatchController)
        .service('WatchService',WatchService)
        .controller('CodeController',CodeController)
        .service('CodeService',CodeService);
