/* connection of mySQL */
var mysql = require("mysql");
	
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Can you give me " + connection.threadId+" dollars?");
});

module.exports=connection;