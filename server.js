const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const phantom = require('phantom');
const path = __dirname + '/src/public/html/index.html';

app.use(express.static('dist'));
app.use(express.static(__dirname));
app.use(express.static('src/public/html'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var database;

// DB 스키마 정의
const UserSchema = mongoose.Schema({
  id: String,
  password: String,
  name: String,
  schoole: String,
  tel: String,
  email: String,
  belongTo: String
});

const SiteSchema = mongoose.Schema({
  name: String,
  type: String,
  url: Array,
  logo: String
});

const SiteHtmlSchema = mongoose.Schema({
  name: String,
  html: Array
})
// END

// DB 모델 정의
let UserModel = mongoose.model('users',UserSchema);
let SiteModel = mongoose.model('sites',SiteSchema);
let SiteHtmlModel = mongoose.model('htmls',SiteHtmlSchema);
// END

http.createServer(app).listen(3000,()=>{
  connectDB();
  console.log('Front-End 서버 오픈');
});

// 라우팅 영역
app.get('/*',(req,res)=>{
  res.sendFile("index.html",{root: __dirname + '/src/public/html'});
});

// 회원가입 요청
app.post('/register/req',(req,res)=>{
  addUser(req.body,res);
});

// 회원가입 체크
app.post('/register/check',(req,res)=>{
  getUserData(req.body.admin_id,res);
});

// 로그인
app.post('/login/do',(req,res)=>{
  doLogin(req.body,res);
});

app.post('/site/add',(req,res)=>{
  addSite(req.body,res);
});

app.post('/site/getBook',(req,res)=>{
  getSite(res);
});

app.post('/watch/start',(req,res)=>{
  let promise = [];
  let data = req.body['url[]'];

  for(let i in data){
    promise.push(phantomFn(data[i]));
  }

  Promise.all(promise).then((value)=>{
    console.log(req.body);
    let html = new SiteHtmlModel({
      'name': req.body.name,
      'html': value
    });

    html.save((err)=>{
      if(err){res.send(false)};
      res.send(true);
    })
  }).catch((value)=>{
    console.log(value);
  });
})

app.post('/watch/code',(req,res)=>{
  getCode(req.body,res);
})
// END

// 함수 영역
function connectDB(){
  let databaseUrl = "mongodb://localhost:27017/local";

  console.log("데이터 베이스 연결");
  mongoose.Promise = global.Promise;
  mongoose.connect(databaseUrl);
  database = mongoose.connection;

  database.on('error',function(){
    console.log('mongoose 에러 발생');
  });

  database.on('open', function(){
    console.log('데이터 베이스에 연결되었습니다.');
  })
}

function addUser(data,res){
  let user = new UserModel({
    "id": data.admin_id,
    "password": data.admin,
    "name": data.admin_name,
    "schhol": data.admin_school,
    "tel": data.admin_tel,
    "email": data.admin_email,
    "belongTo": data.admin_subname
  });

  user.save((err)=>{
    if(err){res.send(false)};
    res.send(true);
  });
}

function getUserData(id,res){
  UserModel.find({'id':id},(err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
}

function doLogin(data,res){
  UserModel.findOne({'id':data.admin_id,"password":data.admin_pw},(err,data)=>{
    if(err){
      console.log(err);
    }else{
      res.send(data);
    }
  });
}

function addSite(data,res){
  let site = new SiteModel({
    name: data.name,
    type: data.type,
    url: data['url[]'],
    logo: data.logo
  });
  site.save((err)=>{
    if(err){console.log(err)}
    res.send(true);
  })
}

function getSite(res){
  SiteModel.find({},(err,data)=>{
    if(err){
      console.log(err);
    }else{
      res.send(data);
    }
  })
}

function getCode(data,res){
  SiteHtmlModel.find({name: data.name},(err,data)=>{
    if(err){
      console.log(err);
    }else{
      if(data.length == 0){
        res.send(data);
      }else{
        res.send(data[0].html);
      }
      // res.send(data[0].html);
    }
  })
}

function phantomFn(url){
  let Page;
  return phantom.create().then(ph=>{
    return ph.createPage();
  })
  .then(page=>{
    Page = page;
    return Page.open(url);
  })
  .then(status=>{
    return Page.evaluate(function(){
      return document.getElementsByTagName('tbody')[0].innerHTML;
    })
    .then(function(html){
      return regFilter(html);
    });
  });
}

function regFilter(html){
  let data = /<a href=".+">.+<\/a>/g;
  let dataArray = html.match(data);
  return dataArray;
}
// END
