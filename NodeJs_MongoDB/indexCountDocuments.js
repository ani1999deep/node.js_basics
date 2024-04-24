const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const dbName = "employess";

//Connect with MongoDB server
const main = async () => {
  await client.connect();
  console.log("Sucessfully Connected with MongoDB");
  const db = client.db(dbName);
  const collection = db.collection("empData");
  //   const document = await collection.countDocuments();

  //Count document in specific field
  const document = await collection.countDocuments({
    department: "Developer",
  });

  if (document) {
    console.log("Number of documents:", document);
  } else {
    console.log("Document not found");
  }
  client.close();
  return "done.";
};

main();
