const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Id is required!"],
    default: 0,
  },
  name: {
    type: String,
    required: true,
    unique: false,
    minLength: [2, "Min length 2 Char"],
    maxLength: [15, "Max length 15 Char"],
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price Should atleast 1"],
    max: [2000, "Price Should be less than equal to 2000"],
  },
  category: String,
});
const Product = mongoose.model("product", productSchema);

module.exports = Product;
