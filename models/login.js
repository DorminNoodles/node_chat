// let db = require('models/db');

class Login {


	constructor(){
		this.authenticated = false;

	}

	test(){
		console.log('debug test');

	}

	connect(name, pwd){
		this.name = name;
		// db.connect_user(name, pwd);
	}
}


module.exports = Login;
