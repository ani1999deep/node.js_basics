const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

const dbName = "employees";

const main = async () => {
  await client.connect();
  console.log("Server is connect with MongoDB");
  const db = client.db(dbName);
  const collection = db.collection("empData");
  //Update One field
  const document = collection.updateOne(
    { emp_id: 3 },
    { $set: { name: "updatedName" } }
  );
  //Same as updateMany()

  if (document) {
    console.log("Document sucessfully Updated");
    console.log(document);
  } else {
    console.log("Document is not found");
  }
  client.close();
  return "Done.";
};
main();
