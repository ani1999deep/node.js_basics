const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

const dbName = "employees";

const main = async () => {
  await client.connect();
  console.log("Server is connect with MongoDB");
  const db = client.db(dbName);
  const collection = db.collection("empData");

  const document = collection.deleteOne();
  //Same goes with deleteMany() and give condtion - collection.deleteOne({key:"value"})

  if (document) {
    const res = await collection.find({}).toArray();
    console.log("Document sucessfully Deleted");
    console.log(res);
  } else {
    console.log("Document is not found");
  }
  client.close();
  return "Done.";
};
main();
