const express = require("express");
const app = express();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  //   password: "12345678",
  database: "nodemysql",
  port: 3306,
  connectTimeout: 10000,
  multipleStatements: true,
});

//Connected to database(Quering the database)

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err.sqlMessage, "Error");
  } else {
    pool.query("select * from customers", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
    console.log("Connection is ON!");
  }
});

//Inserting Data with pool.query()

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error", +err);
  } else {
    pool.query(
      'insert into customers(id,name,age,email) values(4,"deepAni",40,"anideepani1@gmail.com")',
      (error, rsh) => {
        console.log(rsh);
      }
    );
    console.log("Successful!");
  }
});

// Updating Records with pool.query()
pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error occur in Updating", +err);
  } else {
    pool.query("update customers set age=50 where id=4", (error, rsh) => {
      if (error) {
        console.log("Error happend in upadting query");
      } else {
        console.log(rsh);
      }
    });
  }
});

// Deleting Records with pool.query()
pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error occur in Delete", err);
  } else {
    pool.query("delete from customers where id=1", (error, rsh) => {
      if (error) {
        console.log("Error occur in deleting query");
      } else {
        console.log(rsh);
      }
    });
  }
});

//Port Define
const server = app.listen(3000, () => {
  console.log("Server is running...");
});
