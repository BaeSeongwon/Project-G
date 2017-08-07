let Dialog;
export default class CodeController{
  constructor($mdDialog,$scope,WatchService,CodeService){
    Dialog = $mdDialog;
    $scope.cancel = ()=>{Dialog.cancel()};
    $scope.codes = CodeService.getCode();
  }
}
