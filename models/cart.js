const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: { type: String, required: false },
  products: [ 
    {
      item: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
      quantity: {type: Number, required: true}   
    }
  ]
});

const Product = mongoose.model("Cart", cartSchema);

module.exports = Product;
