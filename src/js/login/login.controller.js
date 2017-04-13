import RegisterController from '../register/register.controller.js';
let Dialog;

export default class LoginController {
  constructor($mdDialog){
    let LoginCtrl = this;
    Dialog = $mdDialog;
  }

  doLogin(){

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
