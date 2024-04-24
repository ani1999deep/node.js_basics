const { MongoClient } = require("mongodb");
//Connection with the server
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//Configure the database
const dbName = "courses";
//Async await function, Connect to the MongoDB server
const main = async () => {
  await client.connect();
  console.log("Sucessfully Connected with mongodb");
  const db = client.db(dbName);
  const collection = db.collection("topics");

  //Insert One data
  //   const insertData = await collection.insertOne({
  //     title: "Frontend",
  //     technologies: ["HTML", "CSS", "React.js", "JavaScript"],
  //   });

  ////Insert Many data
  const insertData = await collection.insertMany([
    {
      title: "Frontend",
      technologies: ["HTML", "CSS", "React.js", "JavaScript"],
    },
    {
      title: "Backend",
      technologies: ["JS", "ES-6", "Node.js", "JavaScript"],
    },
    {
      title: "Fullstack",
      technologies: ["JS", "ES-6", "Node.js", "React.js"],
    },
  ]);

  //Condition for insert data
  if (insertData) {
    console.log("Document Inserted");
  } else {
    throw new Error("Something went wrong!");
  }

  return "done.";
};

main();
