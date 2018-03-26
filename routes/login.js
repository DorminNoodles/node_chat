let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let router = express.Router();
let db = require('../models/db');

let urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/login', function(req, res){
	res.render('../views/login');
});

router.post('/login', urlencodedParser, function(req, res){

	let Login = require('../models/login');
	session.login = new Login();
	session.login.connect(req.body.name, req.body.pwd, function(err){
		if (err){

		}
		else {
			res.send('Connected !');

		}
	});

	// console.log(session.login);

});

module.exports = router;
