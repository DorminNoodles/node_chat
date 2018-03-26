let db = require('../models/db');

class Login {


	constructor(){
		this.authenticated = false;

	}

	test(){
		console.log('debug test');

	}

	connect(name, pwd, callback){

		let self = this;

		db.query('SELECT * FROM users WHERE name = ?', [name], function (error, results, fields) {
			if (error) throw error;

			if (results[0].name && results[0].password === pwd)
			{
				console.log('connection success !');
				self.name = name;
				self.authenticated = true;
				callback(null);
				// console.log(results.name);
			}
			callback('error');
			// console.log("connection error !");

		});
	}

	// set name(name)
	// {
	// 	this.name = name;
	// }
}


module.exports = Login;
