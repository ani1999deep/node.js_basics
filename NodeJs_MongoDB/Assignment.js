const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const dbName = "employess";

const main = async () => {
  await client.connect();
  console.log("Sucessfully Connected");
  const db = client.db(dbName);
  const collection = db.collection("empData");
  const empCount = await collection.countDocuments();
  const empSalaryFilter = { emp_salary: { $gt: 5000 } };
  const higestEmpSal = await collection.countDocuments(empSalaryFilter);
  console.log("Total employee in collection:", empCount);
  console.log("Total employee in colection heigest sal >50k", higestEmpSal);
  const displayEmp = await collection
    .find(empSalaryFilter)
    .sort({ emp_salary: 1 })
    .toArray();

  if (displayEmp.length > 0) {
    console.log("\n Employee salary >5k");
    displayEmp.forEach((emp) => console.log(emp));
  } else {
    console.log("No data>5k");
  }

  client.close();
  return "done.";
};
main();
