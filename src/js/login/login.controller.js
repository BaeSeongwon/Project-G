import RegisterController from '../register/register.controller.js';
let Dialog;
let LoginCtrl;
let Login;
let state;

export default class LoginController {
  constructor($mdDialog,LoginService,$state){
    LoginCtrl = this;
    Dialog = $mdDialog;
    Login = LoginService;
    state = $state;
  }

  doLogin(){
    let wrap = {
      admin_id : LoginCtrl.id,
      admin_pwd : LoginCtrl.password
    }
    Login.sendUser(wrap).then((data)=>{
      if(data == true){
        state.go('dashBoard');
      }
    });
  }

  openRegisterForm($ev){
    Dialog.show({
      controller: RegisterController,
      templateUrl: '/register.html',
      parent: angular.element(document.body),
      targetEvent: $ev,
      clickOutsideToClose: false,
      fullscreen: false
    })
  }
}
