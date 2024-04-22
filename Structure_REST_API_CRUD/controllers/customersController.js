const database = require("../utlis/database");

exports.getData = (req, res) => {
  database.execute("SELECT * FROM customers", (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.postData = (req, res) => {
  database.execute(
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
};

exports.deleteData = (req, res) => {
  database.execute("DELETE FROM customers WHERE id=4", (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(200).send(data);
    }
  });
};

exports.updateData = (req, res) => {
  database.execute(
    'UPDATE customers SET name="CANIManideep"  WHERE id=7',
    (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(200).send(data);
      }
    }
  );
};
