let http;
let ip = "http://localhost:3000";

export default class RegisterService{
  constructor($http){
    http = $http;
  }

  sendUser(wrap) {
    console.log(wrap);
    return new Promise((resolve,reject)=>{
      let config = {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let url = ip + '/register/req';
      http.post(url,$.param(wrap),config).then((data)=>{
        if(data.data == true){
          resolve(true);
        }else if(data.data == false){
          resolve(false);
        }else{
          reject('error');
        }
      });
    });
  }

  loginCheck(wrap) {
    return new Promise((resolve, reject)=>{
      let config = {
        headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let url = ip + '/register/check';
      http.post(url,$.param(wrap),config).then((data)=>{
        if(data.data){
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }
}
