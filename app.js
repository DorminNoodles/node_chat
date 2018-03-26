var express = require('express');
var homeController = require('./controllers/home');
var bodyParser = require('body-parser');
var session = require('express-session');


// console.log(util.inspect(myObject, {showHidden: false, depth: null}))

// alternative shortcut
// console.log(util.inspect(myObject, false, null))

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.set('trust proxy', 1) // trust first proxy

// require ('./routes/session')(app);
// app.use(app.router);

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
}))

let login = require("./routes/login");

app.use(login);

app.set('view engine', 'ejs');



app.get('/', function(req, res){
	console.log(session);
	session.hello = 42;

	res.render('index');
});

app.listen(3000);
console.log('Server On');
