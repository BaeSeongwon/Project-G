const angular = require('angular');
require('angular-ui-router');
require('angular-material');

/* 미들웨어 호출 */
import configure from './configure/config.js'
import dashboard from './dashboard/dashboard.module.js'

angular.module('app',['ui.router','ngMaterial','dashboard'])
        .config(configure);
