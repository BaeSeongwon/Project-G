export default class LoginService {
  constructor($http){
    this.$http = $http;
  }

  sendLoginData(id,password){
    return this.$http.post()
  }
}
