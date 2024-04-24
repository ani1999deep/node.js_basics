const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const dbName = "employess";

const main = async () => {
  await client.connect();
  console.log("Sucessfully!");
  const db = client.db(dbName);
  const collection = db.collection("empData");
  //   const document = await collection.find().sort().toArray();

  //SHORTED IN ALPHABETICAL ORDER(asending)
  //   const document = await collection.find().sort({ name: 1 }).toArray();

  //SHORTED IN ALPHABETICAL ORDER(desending)
  //   const document = await collection.find().sort({ name: -1 }).toArray();

  //Limit set
  //   const document = await collection.find().limit(2).toArray();

  //Highest Salary
  //   const document = await collection.find().sort({ emp_salary: -1 }).limit(1) .toArray();

  //Lowest Salary
  const document = await collection
    .find()
    .sort({ emp_salary: 1 })
    .limit(1)
    .toArray();

  if (document) {
    console.log(document);
  } else {
    console.log("Document is not found");
  }

  return "done.";
};

main();
