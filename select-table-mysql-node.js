var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qbox123456789",
  database: "world"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM city", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});