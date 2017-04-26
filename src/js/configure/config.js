class Configure {
  constructor($stateProvider,$urlRouterProvider){
    let htmlPath = '/src/public/html';

    let dashboard = {
      url: '/admin',
      templateUrl: htmlPath + '/dashboard.html',
      controller: 'DashBoardController',
      controllerAs: 'DashCtrl'
    }

    let login = {
      url: '/login',
      templateUrl: htmlPath + '/login.html',
      controller: 'LoginController',
      controllerAs: 'LoginCtrl'
    }

    let siteAppend = {
      url: '/siteAppend',
      templateUrl: htmlPath + '/siteAppend.html',
      controller: "SiteAppendController",
      controllerAs: 'SiteAppendCtrl'
    }

    let siteWatch = {
      url: '/siteWatch',
      templateUrl: htmlPath + '/siteWatch.html',
      controller: "siteWatchController",
      controllerAs: 'siteWatchChtrl'
    }

    let storage = {
      url: '/storage',
      templateUrl: htmlPath + '/storage.html',
      controller: "storageController",
      controllerAs: 'storageChtrl'
    }

    $stateProvider
      .state('dashBoard',dashboard)
      .state('login',login)
      .state('dashBoard.siteAppend',siteAppend);
  }
}

module.exports = Configure;
