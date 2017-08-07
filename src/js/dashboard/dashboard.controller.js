let DashCtrl;
let state;
let siteModel;
export default class DashBoardController {
  constructor(DashBoardMenueService,$state,$cookies,$scope){
    DashCtrl = this;
    DashCtrl.menue = DashBoardMenueService.getMenue();
    DashCtrl.UserInfo = $cookies.getObject('auth');

    state = $state;
    DashCtrl.imgUrl = "src/public/img/user.png";

    $scope.$on('urlModel',function(event,arg){
      if(arg.message == 'true'){
        $scope.urlModel = 'true';
      }else{
        $scope.urlModel = 'false';
      }
    })
  }

  link(url){
    state.go(url);
  }
}
