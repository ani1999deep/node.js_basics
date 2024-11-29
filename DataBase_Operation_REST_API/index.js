const express = require("express");
const app = express();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  //   password: 12345678,
  database: "nodemysql",
  port: 3306,
  multipleStatements: true,
});

// // API Creation for Getting data from database-->>

app.get("/getData", (req, res) => {
  pool.execute("SELECT * FROM customers", (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

// // Inserting Data with POST Request-->>

app.post("/postData", (req, res) => {
  pool.execute(
    "INSERT INTO customers (id,name,age,email) VALUES(?,?,?,?)",
    [7, "Canim", 22, "canim@gmail.com"],
    (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    }
  );
});

// //Deleting Records With API-->>

app.delete("/deleteData", (req, res) => {
  pool.execute("DELETE FROM customers WHERE id=4", (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(200).send(data);
    }
  });
});

// Updating Database with PUT-->>

app.put("/updateData", (req, res) => {
  pool.execute(
    'UPDATE customers SET name="CANIManideep"  WHERE id=7',
    (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    }
  );
});

//Port define
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
