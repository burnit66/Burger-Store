var mysql = require("mysql");
var dbPass = require("./pass")

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: dbPass,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
