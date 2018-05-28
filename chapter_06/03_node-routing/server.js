// load the express package and create our app
var express = require('express');
var app     = express();

// set the port based on environment (more on environments later)
var port    = 1337;

/*
    서버 데몬(node.exe) : server.js의 함수 호출
    두개의 객체 생성
    HttpRequest
     -> method(GET) - 문자열, url(/users) - 문자열, params - 객체 속성이름
    HttpResponse
     -> send (클라 return)
 */

/*
    서버 데몬 -> server.js 실행
    CreateRoute
    /users/name
    function(req, res) : req -> HttpRequest, res -> HttpReponse
 */
// send our index.html file to the user for the home page
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

	// get an instance of the router
	var adminRouter = express.Router();

	   // route middleware that will happen on every request
    adminRouter.use(function(req, res, next) {

        // log each request to the console
        console.log(req.method, req.url);

        // continue doing what we were doing and go to the route
        next(); 
    });

    // route middleware to validate :name
    adminRouter.param('name', function(req, res, next, name) {
        // do validation on name here
        // blah blah validation
        // log something so we know its working
        console.log('doing name validations on ' + name);

        // once validation is done save the new item in the req
        req.name = name;
        // go to the next thing
        next(); 
    });

    // route with parameters (http://localhost:1337/hello/:name)
    adminRouter.get('/hello/:name', function(req, res) {
        res.send('hello ' + req.name + '!');
    });

	// create routes for the admin section
	// admin main page. the dashboard
	adminRouter.get('/', function(req, res) {
		res.send('I am the dashboard!');
	});

	// users page
	adminRouter.get('/users', function(req, res) {
		res.send('I show all the users!');
	});

    // route with parameters (http://localhost:1337/admin/users/:name)
    adminRouter.get('/users/:name', function(req, res) {
        res.send('hello ' + req.params.name + '!');
    });

	// posts page
	adminRouter.get('/posts', function(req, res) {
		res.send('I show all the posts!');
	});

	// apply the routes to our application
	app.use('/admin', adminRouter);     // url -> admiin이 있는경우 실행

// start the server
app.listen(1337);
console.log('1337 is the magic port!');
console.log("Visit me at http://localhost:1337");