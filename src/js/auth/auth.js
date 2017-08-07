let cookies;
let state;

export default class AuthService{
  constructor($cookies,$state){
      cookies = $cookies;
      state = $state;
  }

  auth(){
    if(!cookies.getObject('auth')){
      location.href = "/login";
    }
  }
}
