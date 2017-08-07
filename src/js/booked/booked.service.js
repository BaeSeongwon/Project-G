let http;
let ip = "http://localhost:3000";

export default class BookedService{
  constructor($http){
    http = $http;
  }

  getBook(){
    return new Promise((resolve,reject)=>{
      let config = {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let url = ip + '/site/getBook';
      http.post(url).then((data)=>{
        console.log(data);
        if(data){
          resolve(data.data);
        }else{
          reject('error');
        }
      })
    })
  }
}
