class Configure {
  constructor($stateProvider,$urlRouterProvider){
    let htmlPath = 'src/public/html';

    let dashboard = {
      url: '/admin',
      templateUrl: htmlPath + '/dashboard.v2.html',
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
      .state('DashBoard',dashboard)
      .state('Login',login);
  }
}

module.exports = Configure;
