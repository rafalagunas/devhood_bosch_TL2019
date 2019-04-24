var mysql = require("mysql");
var connection = mysql.createPool({
  connectionLimit: 1000,
  host: "localhost",
  user: "root",
  password: "",
  database: "bosch2019"
});

module.exports = connection;
