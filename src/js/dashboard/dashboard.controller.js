let DashCtrl;
let state;
export default class DashBoardController {
  constructor(DashBoardMenueService,GetUserService,$state,$cookies){
    DashCtrl = this;
    DashCtrl.menue = DashBoardMenueService.getMenue();
    DashCtrl.UserInfo = GetUserService.getUser($cookies.getObject('auth'));
    state = $state;
    DashCtrl.imgUrl = "http://localhost/project_G/src/public/img/user.png";
  }

  link(url){
    state.go(url);
  }
}
