const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const dbName = "employess";

const main = async () => {
  await client.connect();
  console.log("Sucessfully!");
  const db = client.db(dbName);
  const collection = db.collection("empData");
  const document = await collection.find().sort().toArray();
  if (document) {
    console.log(document);
  } else {
    console.log("Document is not found");
  }

  return "done.";
};

main();
