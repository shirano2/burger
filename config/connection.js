/* connection of mySQL */
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection=mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "1234",
    database: "burgers_db"
  })
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Can you give me " + connection.threadId+" dollars?");
});

module.exports=connection;