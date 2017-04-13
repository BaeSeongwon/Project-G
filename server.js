const express = require('express');
const http = require('http');
const app = express();

const path = __dirname + '/src/public/html/index.html';
app.use(express.static('dist'));
app.use(express.static(__dirname));
app.use(express.static('src/public/html'));

http.createServer(app).listen(3000,()=>{
  console.log('Front-End 서버 오픈');
});

app.get('/',(req,res)=>{
  res.sendFile(path);
});
