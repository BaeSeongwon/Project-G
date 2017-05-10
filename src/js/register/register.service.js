let http;
let baseUrl = 'http://localhost/project_G/src/php';

export default class RegisterService{
  constructor($http){
    http = $http;
  }

  sendUser(wrap) {
    return new Promise((resolve,reject)=>{
      let config = {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let url = baseUrl + '/routing/test.php';
      http.post(url,wrap,config).then((data)=>{
        console.log(data);
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
      let url = baseUrl + '/routing/loginCheck.php';
      http.post(url,wrap,config).then((data)=>{
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
}
