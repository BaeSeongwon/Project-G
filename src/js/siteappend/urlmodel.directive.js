function link(scope, element, attrs){
  scope.$on('updateModel',function(event,arg){
    if(arg.message == 'update'){
      scope.models = siteModel.getModel();
    }
  });
}

module.exports = (SiteModel)=>{
  siteModel = SiteModel;
  return {
    restrict: 'EA',
    scope: true,
    templateUrl: 'src/public/html/urlModel.html',
    link: link
  }
}
