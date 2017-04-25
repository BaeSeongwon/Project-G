let http;
let baseUrl = 'http://localhost/project_G/src/php';

export default class LoginService{
  constructor($http){
    http = $http;
  }

  sendUser(wrap) {
    let config = {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
    let url = baseUrl + '/routing/login.php';
    return http.post(url,wrap,config).then((data)=>{
      console.log(data);
    })
  }
}
