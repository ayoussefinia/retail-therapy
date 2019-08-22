const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/books"
router.route("/")
  .get(productsController.findAll)
  // .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
