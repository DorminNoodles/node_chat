// var session = require('express-session');
//
// app.use(session({
// 	secret: 'keyboard cat',
// 	resave: false,
// 	saveUninitialized: true,
// 	cookie: { secure: true }
// }))
app.get('/pouet', function(req, res){
	res.send("hello");
});
