import CodeController from '../code/code.controller.js';
let scope;
let rootScope;
let timeout;
let WatchCtrl;
let watchService;
let Dialog;
let codeService;

export default class WatchController{
  constructor($scope,$rootScope,$timeout,WatchService,BookedService,$mdDialog,CodeService){
    scope = $scope;
    rootScope = $rootScope;
    timeout = $timeout;
    WatchCtrl = this;
    watchService = WatchService;
    Dialog = $mdDialog;
    codeService = CodeService;
    // $timeout(this.printClock(), 1000000);
    BookedService.getBook().then(data=>{scope.BookModels=data;console.log(scope.BookModels)});
    WatchCtrl.timeStart();
  }

  timeStart(){
    let date = new Date();
    scope.amPm = 'AM';
    scope.Hour = this.addZero(date.getHours(),2);
    scope.Minute = this.addZero(date.getMinutes(),2);
    scope.Second = this.addZero(date.getSeconds(),2);

    if(scope.Hour >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
    	scope.amPm = 'PM';
    	scope.Hour = this.addZero(scope.Hour - 12,2);
    }

    timeout(function(){
      WatchCtrl.timeStart();
    },1000);
  }

  addZero(num,digit){
    let zero = '';
    num = num.toString();
    if(num.length < digit){
      for (let i = 0; i < digit - num.length; i++) {
	      zero += '0';
	    }
    }
    return zero + num;
  }

  startCrowling(url,name){
    watchService.startWatch(url,name).then((data)=>{
      if(data == true){
        alert("크롤링 데이터가 저장되었습니다.");
      }
    });
  }

  getCode(name,$ev){
    console.log(name);
    watchService.getCode(name).then((data)=>{
      console.log(data);
      if(data.data.length == 0){
        alert('저장된 코드가 없습니다.');
      }else{

        this.openCodeDialog($ev);
        codeService.putCode(data.data);
        console.log(data);
      }
    })
  }

  openCodeDialog($ev){
    Dialog.show({
      controller: CodeController,
      templateUrl: '/code.html',
      parent: angular.element(document.body),
      targetEvent: $ev,
      clickOutsideToClose: true,
      fullscreen: false
    })
  }
  // timeout(printClock, 2000);
}
