let SiteAppendCtrl;
let compile;

export default class SiteAppendController {
  constructor($compile){
    SiteAppendCtrl = this;
    compile = $compile;
  }

  link(){
    let object = this.objectCheck(angular.element(document.querySelector('.sa_page_frame')));
    if(object){
      angular.element(document.querySelector('iframe')).remove();
      this.frameAppend();
    }else{
      this.frameAppend();
    }
  }

  objectCheck(obj){
    return !Object.keys(obj).length == 0;
  }

  frameAppend(){
    let html = "<iframe get-element class='sa_page_frame' src=http://" + SiteAppendCtrl.url + "/>";
    let linking = compile(html);
    linking(SiteAppendCtrl);
    angular.element(document.querySelector('.sa_page_container')).append(html);
  }

  inspectDom(event){
    console.log(event);
  }
}
