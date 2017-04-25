import RegisterController from '../register/register.controller.js';
let Dialog;
let LoginCtrl;
let Login;

export default class LoginController {
  constructor($mdDialog,LoginService){
    LoginCtrl = this;
    Dialog = $mdDialog;
    Login = LoginService;
  }

  doLogin(){
    let wrap = {
      admin_id : LoginCtrl.id,
      admin_pwd : LoginCtrl.password
    }
    Login.sendUser(wrap);
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
