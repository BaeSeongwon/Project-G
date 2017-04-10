import RegisterController from '../register/RegisterController.js';

export default class LoginController {
  constructor($mdDialog){
    let LoginCtrl = this;
  }

  doLogin(){

  }

  openRegisterForm($ev){
    $mdDialog.show({
      controller: RegisterController,
      templateUrl: '../../public/html/register.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: false,
      fullscreen: false
    })
  }
}
