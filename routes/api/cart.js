const router = require("express").Router();
const cartController = require("../../controllers/cartController");


router.route("/")
  .get(cartController.findAll)
  .post(cartController.create)

router.route("/:id")
  .get(cartController.findById)
  .post(cartController.update)
  .delete(cartController.remove)

module.exports = router;
