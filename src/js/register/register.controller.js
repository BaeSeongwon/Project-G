let Dialog;

export default class RegisterController{
  constructor($mdDialog,$scope,RegisterService){
    Dialog = $mdDialog;
    $scope.cancel = ()=>{Dialog.cancel()};
    $scope.doRegister = ()=>{
      let wrap = {
        admin_id : $scope.clientId,
        admin_pwd : $scope.clientPwd,
        admin_name : $scope.clientName,
        admin_school : $scope.clientSchool,
        admin_tel : $scope.clientTel,
        admin_email : $scope.clientEmail,
        admin_subname : $scope.clientSubname
      }
      RegisterService.sendUser(wrap);
    }
    $scope.idCheck = ()=>{
      let wrap = {admin_id : $scope.clientId};
      if(RegisterService.loginCheck(wrap) == 'false'){
        // alert("사용가능한 아이디입니다.");
      }else{
        // alert("이미 존재하는 아이디입니다.");
      }
    }
  }
}
