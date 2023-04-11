var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qbox123456789",
  database: "world"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});