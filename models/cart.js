const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: { type: String, required: false },
  products: {type: Array,required: true}
});

const Product = mongoose.model("Cart", cartSchema);

module.exports = Product;
