const express = require("express");
const router = express.Router();
const database = require("../utlis/database");
const customersConroller = require("../controllers/customersController");

// // API Creation for Getting data from database-->>

router.get("/getData", customersConroller.getData);

// // Inserting Data with POST Request-->>

router.post("/postData", customersConroller.postData);

// //Deleting Records With API-->>

router.delete("/deleteData", customersConroller.deleteData);

// Updating Database with PUT-->>

router.put("/updateData", customersConroller.updateData);

module.exports = router;
