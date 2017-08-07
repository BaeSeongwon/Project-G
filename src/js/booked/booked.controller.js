let BookedCtrl;
let scope;
let rootScope;

export default class BookedController{
  constructor(BookedService,$scope,$rootScope){
    rootScope = $rootScope;
    BookedCtrl = $scope;
    rootScope.$broadcast('urlModel',{message:'false'});

    BookedCtrl.data = 1;
    BookedService.getBook().then((data)=>{
      BookedCtrl.BookModels = data;
      BookedCtrl.$apply();
    });
  }
}
