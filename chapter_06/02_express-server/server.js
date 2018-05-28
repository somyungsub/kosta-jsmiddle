// load the express package and create our app
var express = require('express');	    // express라이브러리 저장
var app     = express();               // 연관된 객체 생성

// set the port based on environment (more on environments later)
var port    = 1337;     // port번호

// send our index.html file to the user for the home page
app.get('/', function(req, res) {
    // 파일 경로 : 절대 경로 : __dirname (현재dir)
	res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
});

// start the server
app.listen(1337);   // 요청시 응답
console.log('1337 is the magic port!');
console.log('Visit me at http://localhost:1337');