let CodeModel;

export default class CodeService{
  constructor(){

  }

  putCode(Model){
    CodeModel = Model;
  }

  getCode(){
    return CodeModel;
  }
}
