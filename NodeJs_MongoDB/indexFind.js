const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const dbName = "courses";

const main = async () => {
  await client.connect();
  console.log("Successfully connected to server for Find");
  const db = client.db(dbName);
  const collection = db.collection("topics");
  //Find One data
  //   const document = await collection.findOne();
  //Find Specific Data
  //   const document = await collection.findOne({ title: "Backend" });
  //Find Many data
  //   const document = await collection.find().toArray();
  //Find Matching Data
  const document = await collection.find({ title: "Backend" }).toArray();
  if (document) {
    console.log(document);
  } else {
    console.log("Error arries!");
  }
  return "done.";
};
main();
