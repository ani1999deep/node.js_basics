const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  //   password: 12345678,
  database: "nodemysql",
  port: 3306,
  multipleStatements: true,
});

module.exports = pool;
