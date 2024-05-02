const mongoose = require("mongoose");

//Define Schema
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });

  //Define Model
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({ name: "Anideep", price: 8000 });
  let result = await data.save();
  console.log("Data is onn", result);
};
main();
