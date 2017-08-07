let http;
let state;
let ip = 'http://localhost:3000';
let cookies;

export default class LoginService{
  constructor($http,$state,$cookies){
    http = $http;
    state = $state;
    cookies = $cookies;
  }

  sendUser(wrap) {
    return new Promise((resolve, reject)=>{
      let config = {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let url = ip + '/login/do';
      http.post(url,$.param(wrap),config).then((data)=>{
        if(data){
          cookies.putObject('auth',data.data);
          resolve(true);
        }else{
          reject('error');
        }
      })
    })
  }
}
