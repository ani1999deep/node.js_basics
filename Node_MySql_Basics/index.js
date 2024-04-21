const express = require("express");
const app = express();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "nodemysql",
  port: 3000,
  multipleStatements: true,
});

//Connected to database
pool.getConnection((err, connection) => {
  if (err) {
    console.log(err, "Error");
  } else {
    console.log("Connection is ON!");
  }
});

//Port Define
const server = app.listen(3000, () => {
  console.log("Server is running...");
});
