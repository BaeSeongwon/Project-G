let http;
let ip = 'http://localhost:3000';

export default class WatchService{
  constructor($http){
    http = $http;
  }

  startWatch(urlData,name){
    return new Promise((resolve,reject)=>{
      let config = {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let url = ip + "/watch/start";
      let wrap = {
        name: name,
        url: urlData
      }
      http.post(url,$.param(wrap),config).then((data)=>{
        if(data){
          resolve(true);
        }else{
          reject('error');
        }
      })
    })
  }

  getCode(name){
    return new Promise((resolve,reject)=>{
      let config = {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }

      let url = ip + '/watch/code';
      let wrap = {
        name : name
      };
      http.post(url,$.param(wrap),config).then((data)=>{
        if(data){
          resolve(data);
        }else{
          reject('error');
        }
      })
    })
  }
}
