let Model = [];

export default class SiteModel{
  constructor(){
    
  }

  getModel(){
    return Model;
  }

  putModel(data){
    Model.push(data);
  }

  delModel(data){

  }

  logModel(){
    console.log(Model);
  }
}
