class Configure {
  constructor($stateProvider,$urlRouterProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    let htmlPath = '/src/public/html';
    let dashboard = {
      url: '/admin',
      templateUrl: htmlPath + '/dashboard.html',
      controller: 'DashBoardController',
      controllerAs: 'DashCtrl',
      resolve: {
        auth : (AuthService)=>{
          AuthService.auth();
        }
      }
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
      controllerAs: 'SiteAppendCtrl',
      resolve: {
        auth : (AuthService)=>{
          AuthService.auth();
        }
      }
    }

    let booked = {
      url: '/booked',
      templateUrl: htmlPath + '/booked.html',
      controller: "BookedController",
      controllerAs: 'BookedCtrl',
      resolve: {
        auth : (AuthService)=>{
          AuthService.auth();
        }
      }
    }

    let watch = {
      url: '/watch',
      templateUrl: htmlPath + '/watch.html',
      controller: "WatchController",
      controllerAs: "WatchCtrl",
      resolve: {
        auth: (AuthService)=>{
          AuthService.auth();
        }
      }
    }

    let storage = {
      url: '/storage',
      templateUrl: htmlPath + '/storage.html',
      controller: "storageController",
      controllerAs: 'storageChtrl'
    }

    $stateProvider
      .state('login',login)
      .state('dashBoard',dashboard)
      .state('dashBoard.siteAppend',siteAppend)
      .state('dashBoard.booked',booked)
      .state('dashBoard.watch',watch);
  }
}

module.exports = Configure;
