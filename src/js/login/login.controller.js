export default class LoginController {
  constructor($mdDialog){
    let LoginCtrl = this;
    let Dialog = $mdDialog;
  }

  doLogin(){

  }

  openRegisterForm($ev){
    Dialog.show({
      controller: RegisterController,
      templateUrl: '../../public/html/register.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: false,
      fullscreen: false
    })
  }
}
