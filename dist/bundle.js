/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/xampp/htdocs/project_G/src/js/app.js: Unexpected token (21:7)\n\n\u001b[0m \u001b[90m 19 | \u001b[39m\u001b[36mimport\u001b[39m\n \u001b[90m 20 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39mangular\u001b[33m.\u001b[39mmodule(\u001b[32m'app'\u001b[39m\u001b[33m,\u001b[39m[\u001b[32m'ui.router'\u001b[39m\u001b[33m,\u001b[39m\u001b[32m'ngMaterial'\u001b[39m])\n \u001b[90m    | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 22 | \u001b[39m        \u001b[33m.\u001b[39mconfig(configure)\n \u001b[90m 23 | \u001b[39m        \u001b[33m.\u001b[39mcontroller(\u001b[32m'DashBoardController'\u001b[39m\u001b[33m,\u001b[39m\u001b[33mDashBoardController\u001b[39m)\n \u001b[90m 24 | \u001b[39m        \u001b[33m.\u001b[39mcontroller(\u001b[32m'LoginController'\u001b[39m\u001b[33m,\u001b[39m\u001b[33mLoginController\u001b[39m)\u001b[0m\n");

/***/ })

/******/ });