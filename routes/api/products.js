const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/")
  .get(productsController.findAll)
  .post(productsController.create)
  // .post(booksController.create);

router.route("/name/:name")
  .get(productsController.findByProductName);

router.route("/category/:category")
.get(productsController.findByProductCategory);

router.route("/userId/:id")
.get(productsController.getUserProducts);
  // Matches with "/api/products/:id"
router.route("/:id")
  .get(productsController.findById)
  .post(productsController.update)
  .delete(productsController.remove)

  

module.exports = router;
