let http;
let stateParam;
let baseUrl = 'http://localhost/project_G/src/php';

export default class RegisterService{
  constructor($http,$stateParam){
    http = $http;
    stateParam = $stateParam;
  }

  sendUser(wrap) {
    let config = {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
    let url = baseUrl + '/routing/register.php';
    return http.post(url,wrap,config).then((data)=>{
      if(data != 'wrong'){

      }

    })
  }
}
