let SiteAppendCtrl;
let Model;
let compile;
let rootScope;
let siteAppendService;

export default class SiteAppendController {
  constructor($compile,SiteModel,$rootScope,SiteAppendService){
    SiteAppendCtrl = this;
    Model = SiteModel;
    compile = $compile;
    rootScope = $rootScope;
    siteAppendService = SiteAppendService;
    rootScope.$broadcast('urlModel',{message:'true'});
  }

  link(){
    Model.putModel(SiteAppendCtrl.url);
    let object = this.objectCheck(angular.element(document.querySelector('.sa_page_frame')));
    if(object){
      angular.element(document.querySelector('iframe')).remove();
      this.frameAppend();
    }else{
      this.frameAppend();
    }
    rootScope.$broadcast('updateModel',{message:'update'});
  }

  save(){
    let Data = {
      name: SiteAppendCtrl.firstName,
      type: SiteAppendCtrl.division,
      url: Model.getModel(),
      logo: SiteAppendCtrl.logo
    }
    console.log(Data);
    siteAppendService.sendSite(Data).then((data)=>{
      if(data == true){
        alert('사이트를 저장하였습니다.');
      }
    });
  }

  objectCheck(obj){
    return !Object.keys(obj).length == 0;
  }

  frameAppend(){
    let html = "<iframe get-element class='sa_page_frame' src=" + SiteAppendCtrl.url + "/>";
    let linking = compile(html);
    linking(SiteAppendCtrl);
    angular.element(document.querySelector('.sa_page_container')).append(html);
  }

  inspectDom(event){
    console.log(event);
  }
}
