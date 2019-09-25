const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/")
  .get(productsController.findAll)
  .post(productsController.create)
  // .post(booksController.create);

  // Matches with "/api/products/:id"
router.route("/:id")
  .get(productsController.findById)
  .post(productsController.update)
  .delete(productsController.remove)
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
