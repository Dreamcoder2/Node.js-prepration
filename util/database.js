const mysql = require("mysql2");

const pool = mysql.createPool({
  hsot: "localhost",
  user: "root",
  database: "test",
  password: "praveen123",
});

module.exports = pool.promise();
