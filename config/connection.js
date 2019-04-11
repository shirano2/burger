/* connection of mySQL */
var mysql = require("mysql");
	
var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "1234",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Could you give me " + connection.threadId+" dollars?");
});

module.exports=connection;