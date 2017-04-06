class Configure {
  constructor($stateProvider,$urlRouterProvider){
    let htmlPath = 'src/public/html/dashboard.html';
    let dashboard = {
      url: '/admin',
      templateUrl: htmlPath,
      controller: 'DashBoardController',
      controllerAs: 'DashCtrl'
    }

    $stateProvider.state('DashBoard',dashboard);
  }
}

module.exports = Configure;
