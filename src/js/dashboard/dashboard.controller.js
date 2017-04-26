let DashCtrl;
let state;
export default class DashBoardController {
  constructor(DashBoardMenueService,$state){
    DashCtrl = this;
    DashCtrl.menue = DashBoardMenueService.getMenue();
    state = $state;

    DashCtrl.imgUrl = "http://localhost/project_G/src/public/img/user.png";
  }

  link(url){
    state.go(url);
  }
}
