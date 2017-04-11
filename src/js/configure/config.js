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

    $stateProvider
      .state('dashBoard',dashboard)
      .state('login',login);
  }
}

module.exports = Configure;
