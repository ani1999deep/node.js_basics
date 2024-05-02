const mongoose = require("mongoose");
const Product = require("./models/product");

const db = "mongodb://localhost:27017/Products";

const main = async () => {
  await mongoose.connect(db);
  console.log("Database Connected");

  const newProduct1 = new Product({
    id: 1,
    name: "Product4",
    price: 142.2,
    category: "Electronics",
  });

  const newProduct2 = new Product({
    id: 2,
    name: "Product4",
    price: 100,
    category: "Home Decor",
  });
  await newProduct1.save();
  await newProduct2.save();
  console.log("Product Saved ", newProduct1, newProduct2);
};

main().catch((err) => console.log(err));
