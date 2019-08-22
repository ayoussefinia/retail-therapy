const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/store"
);

const productsSeed = [
  {
    name: "Lord of the Flies",
    category: "Books",
    price: 22.50,
    description: "a really good book about lords and flies",
    imageUrl: 'https://images.unsplash.com/photo-1558677949-260173506bbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
  },
  {
    name: "Indestructable Sports Watch",
    category: "Electronics",
    price: 85.25,
    description: "water proof, shock proof, solar panel charging watch capable of withstanding temperature up to 400 deg F",
    imageUrl: 'https://images.unsplash.com/photo-1494450157324-90244222d5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
  },
  {
    name: "Simple T-shirt",
    category: "Apparel",
    price: 15.75,
    description: "no logi, 5000 thread count tshirt, reversible, made from silk cotton, lifetime warranty",
    imageUrl: 'https://images.unsplash.com/photo-1494450157324-90244222d5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
  },
  {
    name: "All In One Bag",
    category: "Accessories",
    price: 250.00,
    description: "Bag made from organically farmed fair trade hemp bamboo fiber. zippers double reinforced titanium. Bag folds out to form a hammock and doubles as a tent. flame resistant can support up to 1000 pounds",
    imageUrl: 'https://images.unsplash.com/photo-1509762774605-f07235a08f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
  }
];

// db.Product
//   .remove({})
//   .then(() => db.Product.collection.insertMany(productsSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

  db.Product.insertMany(productsSeed)
  .then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });