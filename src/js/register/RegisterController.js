export default class RegisterController{
  constructor($mdDialog){
    let RegisterCtrl = this;
  }

  hide(){
    $mdDialog.hide();
  };

  cancel(){
    $mdDialog.cancel();
  };
}
