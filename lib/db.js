var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'mikko',
	password:'test123',
	database:'nodejs_db'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;