var express = require('express');
var homeController = require('./controllers/home');
var bodyParser = require('body-parser');


// console.log(util.inspect(myObject, {showHidden: false, depth: null}))

// alternative shortcut
// console.log(util.inspect(myObject, false, null))

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home', function(req, res){
	res.render('index');
});

app.get('/login', function(req, res){
	res.render('login');
});

app.post('/login', urlencodedParser, function(req, res){
	console.log(req.body.name);
	console.log(req.body.pwd);
	// console.log(util.inspect(req, false, null));
	res.render('login');
});

app.listen(3000);
console.log('Server On');
