let http;
let baseUrl = "http://localhost/project_G/src/php";

export default class GetUserService{
  constructor($http){
    http = $http;
  }

  getUser(auth){
    if(auth){
      return new Promise((resolve, reject)=>{
        let config = {
          headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }
        let url = baseUrl + '/routing/getUser.php?auth=' + auth;
        console.log(url);
        http.get(url).then((data)=>{
          if(data){
            resolve(true);
          }else{
            reject('error');
          }
        })
      })
    }else{
      return 'fail'
    }
  }
}
