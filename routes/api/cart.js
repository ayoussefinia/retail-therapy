const router = require("express").Router();
const cartController = require("../../controllers/cartController");

// Matches with "/api/products"
router.route("/")
  .get(cartController.findAll)
  .post(cartController.create)
  // .post(booksController.create);

  // Matches with "/api/products/:id"
router.route("/:id")
  .get(cartController.findById)
  .post(cartController.update)
  .delete(cartController.remove)
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
