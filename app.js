var express = require('express');
var homeController = require('./controllers/home');
var bodyParser = require('body-parser');
var session = require('express-session');



// console.log(util.inspect(myObject, {showHidden: false, depth: null}))

// alternative shortcut
// console.log(util.inspect(myObject, false, null))

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('trust proxy', 1) // trust first proxy
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
}))

let login_test = require("./routes/login");

app.use(login_test);

app.set('view engine', 'ejs');



app.get('/', function(req, res){
	console.log(session);

	res.render('index');
});

app.get('/login', function(req, res){
	res.render('login');
});

app.post('/login', urlencodedParser, function(req, res){
	console.log(req.body.name);
	console.log(req.body.pwd);
	let login = require('./models/login');
	session.login = new login();
	session.login.connect(req.body.name, req.body.pwd);

	// console.log(util.inspect(req, false, null));
	res.render('login');
});

app.listen(3000);
console.log('Server On');
