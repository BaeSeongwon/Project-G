let Dialog;

export default class RegisterController{
  constructor($mdDialog,$scope){
    Dialog = $mdDialog;
    $scope.cancel = ()=>{Dialog.cancel()};
    $scope.doRegister = ()=>{
      let Wrap = {
        admin_id : $scope.clientId,
        amdin_pwd : $scope.clientPwd,
        admin_name : $scope.clientName,
        amdin_school : $scope.clientSchool,
        admin_tel : $scope.clientTel,
        admin_email : $scope.clientEmail,
        admin_subname : $scope.clientSubname
      }
      console.log(Wrap);
    }
  }
}
