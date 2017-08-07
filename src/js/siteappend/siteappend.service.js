let http;
let ip = 'http://localhost:3000';
let httpParam;

export default class SiteAppendService{
  constructor($http,$httpParamSerializerJQLike){
    http = $http;
    httpParam = $httpParamSerializerJQLike;
  }

  sendSite(wrap){
    return new Promise((resolve, reject)=>{
      let config = {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let url = ip + '/site/add';
      http.post(url,httpParam(wrap),config).then((data)=>{
        if(data){
          resolve(true);
        }else{
          reject('error');
        }
      })
    });
  }
}
